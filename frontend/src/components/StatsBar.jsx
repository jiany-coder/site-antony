import React from "react";

const STATS = [
  { value: "98", label: "Communes desservies", sub: "Caen et tout le Calvados" },
  { value: "20", label: "Ans d'expérience", sub: "Jardin, paysage et arbres" },
  { value: "2", label: "Marques, une équipe", sub: "Jardiniers Normands · Pro Élagage 14" },
  { value: "24h", label: "Délai de réponse", sub: "Intervention sous 24 h après devis" },
];

export default function StatsBar() {
  return (
    <section className="py-16 sm:py-20 bg-[#1F3D2B] text-[#FDFBF7]" data-testid="stats-bar">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-left">
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 border-[#F2EBD9]/30 pl-5 reveal">
              <p className="font-serif text-5xl md:text-6xl font-light leading-none text-[#F2EBD9]">{s.value}</p>
              <p className="mt-3 font-sans font-semibold text-sm tracking-wide">{s.label}</p>
              <p className="text-xs text-[#FDFBF7]/60 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
