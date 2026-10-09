import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "../data/company";

export default function CTASection({ title, subtitle, accent = "Devis gratuit" }) {
  return (
    <section className="py-20 sm:py-28 bg-[#0A0F0D] text-[#FDFBF7] relative overflow-hidden" data-testid="cta-section">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "url('/photos/taille-haie-thuya-echelle-jardin.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F0D]/85 via-[#0A0F0D]/85 to-[#1F3D2B]/75" />
      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center reveal">
        <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#F2EBD9] mb-5">{accent}</p>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FDFBF7] font-light leading-tight tracking-tight mb-6">
          {title}
        </h2>
        <p className="text-lg text-[#FDFBF7]/80 max-w-2xl mx-auto mb-10 leading-relaxed">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#F2EBD9] text-[#1F3D2B] px-8 py-4 rounded-full font-sans font-semibold text-base transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl"
            data-testid="cta-section-devis"
          >
            Demander un devis <ArrowRight className="w-5 h-5" strokeWidth={1.75} />
          </Link>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 bg-transparent text-[#F2EBD9] px-8 py-4 rounded-full font-sans font-semibold text-base border-2 border-[#F2EBD9]/40 transition-all duration-300 hover:bg-[#F2EBD9] hover:text-[#1F3D2B]"
            data-testid="cta-section-phone"
          >
            <Phone className="w-5 h-5" strokeWidth={1.75} /> {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
