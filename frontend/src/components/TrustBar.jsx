import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, BadgeCheck, Clock, Award, TreePine, Trees } from "lucide-react";

const ITEMS = [
  { Icon: ShieldCheck, label: "Assurance RC pro", desc: "Couverture intégrale travaux" },
  { Icon: BadgeCheck, label: "Devis gratuit", desc: "Sans engagement" },
  { Icon: Clock, label: "Intervention sous 24 h", desc: "Après acceptation du devis" },
  { Icon: Award, label: "20 ans d'expérience", desc: "Métier du jardin et de l'arbre" },
  { Icon: TreePine, label: "Élagage et abattage", desc: "En grimpe ou depuis le sol" },
  { Icon: Trees, label: "Déplacement inclus", desc: "Intégré au devis, dans tout le Calvados" },
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
