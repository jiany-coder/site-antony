import React from "react";
import { Leaf, ShieldCheck, Award, Trees, Heart, MapPin } from "lucide-react";
import SEO from "../components/SEO";
import { COMPANY } from "../data/company";
import CTASection from "../components/CTASection";
import StatsBar from "../components/StatsBar";

export default function About() {
  return (
    <>
      <SEO
        title={`À propos | ${COMPANY.brand} – Paysagiste Calvados`}
        description="Découvrez Les Jardiniers Normands et Pro Élagage 14 : équipe locale, expertise reconnue, engagement qualité. Paysagistes & élagueurs dans le Calvados depuis plus de 10 ans."
        canonical={`${COMPANY.site}/a-propos`}
      />

      <section className="pt-32 pb-20 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7 reveal">
            <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-5">À propos</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#0A0F0D] font-light leading-[1] tracking-tight mb-7">
              Deux marques, <em className="italic">une seule passion</em> : la Normandie verte
            </h1>
            <p className="text-lg text-[#4A5550] leading-relaxed mb-5">
              <strong className="text-[#0A0F0D]">Les Jardiniers Normands</strong> et <strong className="text-[#0A0F0D]">Pro Élagage 14</strong> forment un duo d'expertises complémentaires dédié à votre extérieur. Basée à Caen, notre entreprise prend soin des jardins, des arbres et du patrimoine vert de tout le Calvados depuis plus d'une décennie.
            </p>
            <p className="text-lg text-[#4A5550] leading-relaxed">
              Notre philosophie : un travail soigné, un respect total du végétal, des relations humaines vraies avec nos clients. Pas de surenchère, pas de prestation bâclée : juste l'excellence du geste et l'écoute du terrain.
            </p>
          </div>
          <div className="lg:col-span-5 reveal">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1576897955702-24ad19680db3?auto=format&fit=crop&w=800&q=80" alt="" className="rounded-2xl aspect-[3/4] object-cover" />
              <img src="https://images.unsplash.com/photo-1762903938137-49b0a145e241?auto=format&fit=crop&w=800&q=80" alt="" className="rounded-2xl aspect-[3/4] object-cover mt-10" />
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-24 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14 reveal">
            <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Nos valeurs</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0A0F0D] font-light leading-tight tracking-tight">Ce qui nous <em className="italic">anime</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Leaf, t: "Respect du végétal", d: "Taille douce, plantation raisonnée, gestion durable. Nous travaillons avec la nature, pas contre elle." },
              { Icon: ShieldCheck, t: "Sécurité absolue", d: "Équipements EPI complets, formations régulières, assurance RC professionnelle. Zéro compromis." },
              { Icon: Award, t: "Exigence du détail", d: "Du tracé d'une allée au choix d'une variété, chaque détail compte. C'est l'excellence ou rien." },
              { Icon: Heart, t: "Relation client vraie", d: "Disponibles, transparents, à l'écoute. Notre satisfaction passe par la vôtre." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="premium-card p-7 reveal">
                <Icon className="w-9 h-9 text-[#1F3D2B] mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl text-[#0A0F0D] mb-3">{t}</h3>
                <p className="text-sm text-[#4A5550] leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />

      {/* HISTOIRE */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 prose-blog">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Notre histoire</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#0A0F0D] font-light leading-tight tracking-tight mb-8">Du jardinier passionné à l'entreprise de référence du Calvados</h2>

          <p className="text-lg leading-[1.75]">L'aventure commence à Caen, par la passion d'un homme pour les arbres et les jardins normands. De simples interventions chez des particuliers, le savoir-faire se transmet, l'équipe s'agrandit et deux marques complémentaires voient le jour.</p>

          <p className="text-lg leading-[1.75]"><strong>Les Jardiniers Normands</strong> incarnent l'expertise paysagère : création, aménagement, entretien. Une vision globale du jardin comme prolongement vivant de la maison.</p>

          <p className="text-lg leading-[1.75]"><strong>Pro Élagage 14</strong> rassemble notre pôle technique : élagage de précision, abattage par démontage, dessouchage mécanique. Une équipe de grimpeurs certifiés pour intervenir en toute sécurité sur les chantiers les plus délicats.</p>

          <p className="text-lg leading-[1.75]">Aujourd'hui, plus de <strong>500 chantiers</strong> ont été menés dans tout le Calvados, des petits jardins urbains aux propriétés de la Côte Fleurie. Notre fidélité clients (renouvellement de contrats d'entretien année après année) est notre plus belle récompense.</p>
        </div>
      </section>

      <CTASection title="Confiez-nous votre extérieur" subtitle="Une équipe locale, passionnée, à votre service. Devis gratuit sans engagement." />
    </>
  );
}
