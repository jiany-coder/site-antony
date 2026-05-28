"""Backend API tests for Les Jardiniers Normands.

Covers:
- Health endpoints (GET /api/, GET /api/health)
- Contact form (POST /api/contact) including Resend email delivery
- Validation errors (422) for malformed payloads
- Lead persistence in MongoDB and listing via GET /api/contacts
- CORS headers
"""
import os
import time
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback to frontend/.env if env var not propagated to pytest process
    from pathlib import Path
    env_path = Path("/app/frontend/.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().strip('"')
                break

assert BASE_URL, "REACT_APP_BACKEND_URL must be defined"
BASE_URL = BASE_URL.rstrip("/")


@pytest.fixture(scope="session")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_root(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/", timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("status") == "ok"
        assert "message" in data

    def test_health(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/health", timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("status") == "healthy"
        assert data.get("service") == "jardiniers-normands-api"


# ---------- Contact form ----------
@pytest.fixture(scope="session")
def valid_payload():
    return {
        "name": "TEST Jean Dupont",
        "email": "jean.dupont.test@example.com",
        "phone": "+33 6 12 34 56 78",
        "city": "Caen",
        "service": "Élagage",
        "message": "Bonjour, je souhaite un devis pour l'élagage d'un chêne dans mon jardin à Caen.",
    }


class TestContactSubmit:
    def test_submit_valid_contact(self, api_client, valid_payload):
        r = api_client.post(f"{BASE_URL}/api/contact", json=valid_payload, timeout=30)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("status") == "ok"
        assert isinstance(data.get("id"), str) and len(data["id"]) > 0
        # Resend should deliver — verified address
        assert data.get("email_sent") is True, f"email_sent should be True, got {data}"
        assert data.get("email_id"), "email_id should be returned by Resend"
        # Stash id for next test
        pytest.contact_id = data["id"]

    def test_submit_invalid_email(self, api_client):
        bad = {
            "name": "TEST Bad Email",
            "email": "not-an-email",
            "phone": "+33 6 00 00 00 00",
            "city": "Caen",
            "service": "Jardinage",
            "message": "Message valide assez long.",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=bad, timeout=15)
        assert r.status_code == 422, r.text

    def test_submit_missing_name(self, api_client):
        bad = {
            "name": "",
            "email": "ok@example.com",
            "phone": "+33 6 00 00 00 00",
            "city": "Caen",
            "service": "Jardinage",
            "message": "Message valide assez long.",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=bad, timeout=15)
        assert r.status_code == 422, r.text

    def test_submit_short_message(self, api_client):
        bad = {
            "name": "TEST Court",
            "email": "ok@example.com",
            "phone": "+33 6 00 00 00 00",
            "city": "Caen",
            "service": "Jardinage",
            "message": "Hi",
        }
        r = api_client.post(f"{BASE_URL}/api/contact", json=bad, timeout=15)
        assert r.status_code == 422, r.text

    def test_submit_missing_required_fields(self, api_client):
        bad = {"email": "ok@example.com"}
        r = api_client.post(f"{BASE_URL}/api/contact", json=bad, timeout=15)
        assert r.status_code == 422, r.text


# ---------- List contacts / persistence ----------
class TestContactList:
    def test_list_contacts_returns_items(self, api_client, valid_payload):
        # ensure at least one record exists by posting (idempotent enough for test)
        marker_email = f"persist_{uuid.uuid4().hex[:8]}@example.com"
        payload = {**valid_payload, "email": marker_email, "name": "TEST Persist"}
        post = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=30)
        assert post.status_code == 200, post.text
        new_id = post.json()["id"]

        # small delay to let mongo write settle
        time.sleep(0.5)

        r = api_client.get(f"{BASE_URL}/api/contacts", timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "items" in data and "count" in data
        assert isinstance(data["items"], list)
        assert data["count"] == len(data["items"])
        assert data["count"] >= 1

        # Verify our just-inserted record is present
        ids = [it.get("id") for it in data["items"]]
        assert new_id in ids, "Newly created contact should appear in list"

        # Verify _id field is NOT exposed
        for it in data["items"]:
            assert "_id" not in it, f"Mongo _id leaked in response: {it}"
            # Expected fields
            for key in ("id", "name", "email", "phone", "message", "created_at", "email_sent"):
                assert key in it, f"Missing field {key} in contact item"


# ---------- CORS ----------
class TestCORS:
    def test_cors_preflight(self, api_client):
        r = requests.options(
            f"{BASE_URL}/api/contact",
            headers={
                "Origin": "https://paysage-caen-seo.preview.emergentagent.com",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "content-type",
            },
            timeout=15,
        )
        # Either 200 or 204 is acceptable for CORS preflight
        assert r.status_code in (200, 204), f"Unexpected preflight status: {r.status_code} {r.text}"
        allow_origin = r.headers.get("access-control-allow-origin")
        assert allow_origin is not None, f"CORS headers missing: {dict(r.headers)}"

    def test_cors_get(self, api_client):
        r = requests.get(
            f"{BASE_URL}/api/health",
            headers={"Origin": "https://paysage-caen-seo.preview.emergentagent.com"},
            timeout=15,
        )
        assert r.status_code == 200
        assert r.headers.get("access-control-allow-origin") is not None
