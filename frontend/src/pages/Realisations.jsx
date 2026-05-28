import React from "react";
import SEO from "../components/SEO";
import { COMPANY } from "../data/company";
import BeforeAfter from "../components/BeforeAfter";
import CTASection from "../components/CTASection";

const GALLERY = [
  { before: "https://images.unsplash.com/photo-1564417947365-8dbc9d0e718e?auto=format&fit=crop&w=1200&q=80", after: "https://images.pexels.com/photos/32500250/pexels-photo-32500250.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "Création complète – Caen", desc: "Aménagement paysager 350 m² avec terrasse bois et plantation d'essences locales." },
  { before: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=1200&q=80", after: "https://images.unsplash.com/photo-1576897955702-24ad19680db3?auto=format&fit=crop&w=1200&q=80", title: "Refonte jardin – Deauville", desc: "Restructuration complète d'un jardin de villa avec piscine et pool house." },
  { before: "https://images.pexels.com/photos/8989485/pexels-photo-8989485.jpeg?auto=compress&cs=tinysrgb&w=1200", after: "https://images.unsplash.com/photo-1762903938137-49b0a145e241?auto=format&fit=crop&w=1200&q=80", title: "Élagage chêne centenaire – Lisieux", desc: "Élagage de précision en taille raisonnée sur un sujet remarquable de 25m." },
];

const PHOTOS = [
  "https://images.unsplash.com/photo-1474742509976-ddec6b387356?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  "https://images.pexels.com/photos/3280078/pexels-photo-3280078.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.unsplash.com/photo-1597201278257-3687be27d954?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=1200&q=80",
  "https://images.pexels.com/photos/32500250/pexels-photo-32500250.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1200&q=80",
];

export default function Realisations() {
  return (
    <>
      <SEO
        title="Réalisations | Avant/Après – Les Jardiniers Normands Calvados"
        description="Découvrez nos réalisations en paysagisme, élagage et entretien jardin dans le Calvados : avant/après, photos chantiers, projets clés en main."
        canonical={`${COMPANY.site}/realisations`}
      />

      <section className="pt-32 pb-12 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center reveal">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Réalisations</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#0A0F0D] font-light leading-[1] tracking-tight mb-5">
            Nos plus belles <em className="italic">transformations</em>
          </h1>
          <p className="text-lg text-[#4A5550] max-w-2xl mx-auto">Faites glisser le curseur pour voir le résultat. Chaque chantier raconte une histoire.</p>
        </div>
      </section>

      <section className="py-12 space-y-24">
        {GALLERY.map((g, i) => (
          <div key={i} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center reveal">
            <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
              <BeforeAfter before={g.before} after={g.after} />
            </div>
            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
              <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-3">Projet #{i + 1}</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-light leading-tight tracking-tight mb-5">{g.title}</h2>
              <p className="text-lg text-[#4A5550] leading-relaxed">{g.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="py-20 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-light text-center mb-12">Galerie de nos chantiers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PHOTOS.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl">
                <img src={src} alt={`Réalisation ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Et si votre jardin était le prochain ?" subtitle="Demandez votre devis gratuit. Conseils et chiffrage sans engagement." />
    </>
  );
}
