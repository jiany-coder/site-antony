from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
import resend
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
OWNER_EMAIL = os.environ.get('OWNER_EMAIL', 'schmittantony4@gmail.com')

app = FastAPI(title="Les Jardiniers Normands API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(..., min_length=6, max_length=30)
    city: Optional[str] = Field(default="", max_length=80)
    service: Optional[str] = Field(default="", max_length=120)
    message: str = Field(..., min_length=5, max_length=4000)


class ContactRecord(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str
    city: str = ""
    service: str = ""
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
    email_sent: bool = False


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Les Jardiniers Normands API", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy", "service": "jardiniers-normands-api"}


def _build_html(payload: ContactRequest) -> str:
    safe = {k: (str(v).replace('<', '&lt;').replace('>', '&gt;')) for k, v in payload.model_dump().items()}
    return f"""
    <table style="width:100%;max-width:640px;margin:0 auto;font-family:Arial,sans-serif;color:#0A0F0D;border-collapse:collapse;">
      <tr><td style="background:#1F3D2B;padding:24px;text-align:center;">
        <h1 style="color:#F2EBD9;margin:0;font-size:22px;">Nouvelle demande de devis</h1>
        <p style="color:#F2EBD9;margin:6px 0 0;font-size:14px;">Les Jardiniers Normands - Pro Élagage 14</p>
      </td></tr>
      <tr><td style="padding:24px;background:#FDFBF7;">
        <table style="width:100%;border-collapse:collapse;font-size:15px;">
          <tr><td style="padding:8px 0;width:140px;color:#4A5550;"><strong>Nom :</strong></td><td>{safe['name']}</td></tr>
          <tr><td style="padding:8px 0;color:#4A5550;"><strong>Email :</strong></td><td><a href="mailto:{safe['email']}" style="color:#1F3D2B;">{safe['email']}</a></td></tr>
          <tr><td style="padding:8px 0;color:#4A5550;"><strong>Téléphone :</strong></td><td><a href="tel:{safe['phone']}" style="color:#1F3D2B;">{safe['phone']}</a></td></tr>
          <tr><td style="padding:8px 0;color:#4A5550;"><strong>Ville :</strong></td><td>{safe['city'] or '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#4A5550;"><strong>Service :</strong></td><td>{safe['service'] or '—'}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #E5E0D5;margin:18px 0;" />
        <p style="margin:0 0 8px;color:#4A5550;"><strong>Message :</strong></p>
        <p style="margin:0;line-height:1.6;white-space:pre-wrap;">{safe['message']}</p>
      </td></tr>
      <tr><td style="background:#F2EBD9;padding:16px;text-align:center;font-size:12px;color:#4A5550;">
        Envoyé automatiquement depuis lesjardiniersnormands.fr
      </td></tr>
    </table>
    """


@api_router.post("/contact")
async def submit_contact(payload: ContactRequest):
    record = ContactRecord(**payload.model_dump())
    doc = record.model_dump()

    # Try sending email first; persist whatever happens
    email_id = None
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [OWNER_EMAIL],
            "reply_to": payload.email,
            "subject": f"[Devis] {payload.name} – {payload.service or 'Demande'} ({payload.city or 'Calvados'})",
            "html": _build_html(payload),
        }
        result = await asyncio.to_thread(resend.Emails.send, params)
        email_id = result.get("id") if isinstance(result, dict) else None
        doc["email_sent"] = True
        logger.info(f"Contact email sent id={email_id}")
    except Exception as e:
        logger.error(f"Resend send failed: {e}")
        doc["email_sent"] = False

    await db.contacts.insert_one(doc)
    return {"status": "ok", "id": record.id, "email_sent": doc["email_sent"], "email_id": email_id}


@api_router.get("/contacts")
async def list_contacts(limit: int = 100):
    items = await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(length=limit)
    return {"items": items, "count": len(items)}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
