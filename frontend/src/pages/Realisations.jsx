import React from "react";
import SEO, { buildPageSchema, buildBreadcrumbSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import { GALERIE, A_LA_UNE } from "../data/photos";
import CTASection from "../components/CTASection";

export default function Realisations() {
  return (
    <>
      <SEO
        title="Réalisations à Caen | Haies, élagage – Jardiniers Normands"
        description="Photos de nos chantiers à Caen et dans le Calvados : taille de haies, élagage, entretien de jardin. Devis gratuit ☎ 07 80 04 43 90."
        canonical={`${COMPANY.site}/realisations`}
        jsonLd={[
          buildPageSchema("CollectionPage", "Réalisations à Caen", `${COMPANY.site}/realisations`, "Photos de chantiers réels : taille de haies, élagage, entretien de jardin à Caen et dans le Calvados.", {
            mainEntity: { "@type": "ImageGallery", name: "Chantiers à Caen", image: [...A_LA_UNE.map((g) => g.photo), ...GALERIE].map((p) => ({ "@type": "ImageObject", contentUrl: `${COMPANY.site}${p.src}`, description: p.alt })) },
          }),
          buildBreadcrumbSchema([["Accueil", COMPANY.site + "/"], ["Réalisations", `${COMPANY.site}/realisations`]]),
        ]}
      />

      <section className="pt-32 pb-12 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center reveal">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Réalisations</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#0A0F0D] font-light leading-[1] tracking-tight mb-5">
            Nos plus belles <em className="italic">transformations</em>
          </h1>
          <p className="text-lg text-[#4A5550] max-w-2xl mx-auto">Taille de haies, élagage, entretien de jardin : des chantiers réels réalisés à Caen et dans le Calvados.</p>
        </div>
      </section>

      <section className="py-12 space-y-24">
        {A_LA_UNE.map((g, i) => (
          <div key={i} className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center reveal">
            <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
              <img src={g.photo.src} alt={g.photo.alt} width={g.photo.w} height={g.photo.h} loading={i === 0 ? "eager" : "lazy"} className="w-full max-h-[620px] object-cover rounded-3xl" />
            </div>
            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
              <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-3">Chantier #{i + 1}</p>
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
            {GALERIE.map((p, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl">
                <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Et si votre jardin était le prochain ?" subtitle="Demandez votre devis gratuit. Conseils et chiffrage sans engagement." />
    </>
  );
}
