// Décode les images stockées en base64 (assets-b64/*.b64) vers public/ avant le build.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "assets-b64");
for (const f of readdirSync(src).filter((n) => n.endsWith(".b64"))) {
  const out = join(root, "public", f.replace(/\.b64$/, ""));
  writeFileSync(out, Buffer.from(readFileSync(join(src, f), "utf8").trim(), "base64"));
  console.log("decoded", out);
}
