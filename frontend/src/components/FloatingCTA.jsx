import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "../data/company";

export default function FloatingCTA() {
  const wa = COMPANY.whatsapp.replace(/\D/g, "");
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3" data-testid="floating-cta">
      <a
        href={`https://wa.me/${wa}?text=${encodeURIComponent("Bonjour, je souhaite un devis pour votre service de paysagisme/élagage à Caen.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center float-shadow hover:scale-110 transition-transform"
        aria-label="WhatsApp"
        data-testid="floating-whatsapp"
      >
        <MessageCircle className="w-7 h-7 text-white" strokeWidth={2} />
      </a>
      <a
        href={`tel:${COMPANY.phoneRaw}`}
        className="w-14 h-14 rounded-full bg-[#1F3D2B] flex items-center justify-center float-shadow hover:scale-110 transition-transform"
        aria-label="Téléphone"
        data-testid="floating-phone"
      >
        <Phone className="w-6 h-6 text-[#F2EBD9]" strokeWidth={2} />
      </a>
    </div>
  );
}
