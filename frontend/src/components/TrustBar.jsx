import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, BadgeCheck, Clock, Award, TreePine, Trees } from "lucide-react";

const ITEMS = [
  { Icon: ShieldCheck, label: "Assurance RC pro", desc: "Couverture intégrale travaux" },
  { Icon: BadgeCheck, label: "Devis gratuit", desc: "Sans engagement sous 24h" },
  { Icon: Clock, label: "Intervention rapide", desc: "Urgences sous 24-48h" },
  { Icon: Award, label: "10+ ans d'expérience", desc: "Expertise Calvados" },
  { Icon: TreePine, label: "Élagueurs certifiés", desc: "Grimpeurs qualifiés SST" },
  { Icon: Trees, label: "Crédit d'impôt 50%", desc: "Entretien jardin éligible" },
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-[#F4F1EA] border-y border-[#E5E0D5]" data-testid="trust-bar">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {ITEMS.map(({ Icon, label, desc }) => (
            <div key={label} className="flex flex-col items-start reveal">
              <Icon className="w-8 h-8 text-[#1F3D2B] mb-3" strokeWidth={1.5} />
              <p className="font-sans font-semibold text-[#0A0F0D] text-sm mb-1">{label}</p>
              <p className="text-xs text-[#4A5550] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
