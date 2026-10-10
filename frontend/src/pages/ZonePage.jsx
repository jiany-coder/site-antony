import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import SEO, { buildPageSchema, buildBreadcrumbSchema, buildLocalBusinessSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import { CITIES } from "../data/cities";
import CTASection from "../components/CTASection";

const ORDER = ["agglomération caennaise", "plaine de Caen", "littoral normand", "Pays d'Auge", "bocage normand", "sud du Calvados"];
const INTRO = {
  "agglomération caennaise": "Caen et ses communes voisines : notre base, avec les délais d'intervention les plus courts.",
  "plaine de Caen": "Les bourgs et villages de la plaine, au sud et à l'est de Caen, desservis chaque semaine.",
  "littoral normand": "De Ouistreham à Isigny-sur-Mer, jardins exposés aux embruns et nombreuses résidences secondaires.",
  "Pays d'Auge": "Lisieux, Pont-l'Évêque, Livarot, Honfleur et les villages du Pays d'Auge : vergers, haies et grands arbres.",
  "bocage normand": "Bayeux, Vire et le bocage : haies bocagères, talus et grandes propriétés.",
  "sud du Calvados": "Falaise, Potigny, Thury-Harcourt et le sud du département.",
};

export default function ZonePage() {
  const all = [{ slug: "caen", name: "Caen", code: "14000", sector: "agglomération caennaise" }, ...CITIES];
  const groups = ORDER.map((s) => ({ s, list: all.filter((c) => c.sector === s) })).filter((g) => g.list.length);
  const url = `${COMPANY.site}/zone-d-intervention`;
  return (
    <>
      <SEO
        title={`Zone d'intervention Calvados | ${COMPANY.brand}`}
        description={`Jardinier, paysagiste et élagueur dans tout le Calvados : ${all.length} communes de plus de 1 500 habitants, de Caen à Vire, de Honfleur à Isigny. Devis gratuit.`}
        canonical={url}
        jsonLd={[
          buildLocalBusinessSchema(),
          buildPageSchema("CollectionPage", "Zone d'intervention des Jardiniers Normands", url, "Communes du Calvados desservies par Les Jardiniers Normands."),
          buildBreadcrumbSchema([["Accueil", COMPANY.site + "/"], ["Zone d'intervention", url]]),
        ]}
      />
      <section className="pt-32 pb-16 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-5">Zone d'intervention</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#0A0F0D] font-light leading-tight tracking-tight mb-6">
            Jardinier, paysagiste et élagueur dans <em className="italic">tout le Calvados</em>
          </h1>
          <p className="text-lg text-[#4A5550] leading-relaxed mb-4">
            Notre équipe est basée à Caen et intervient dans l'ensemble du département du Calvados (14). Cette page recense les {all.length} communes de plus de 1 500 habitants avec leur code postal et mène vers la page dédiée à chaque service : paysagiste, jardinier et élagage.
          </p>
          <p className="text-lg text-[#4A5550] leading-relaxed mb-4">
            Les petites communes et hameaux situés autour de ces villes sont desservis de la même façon : appelez-nous au {COMPANY.phone} avec votre adresse, nous confirmons la date de passage au moment du devis gratuit. Le déplacement est intégré au devis et l'intervention a lieu sous 24 h après son acceptation.
          </p>
          <p className="text-lg text-[#4A5550] leading-relaxed">
            Pour un chantier d'élagage ou d'abattage, notre marque <strong>Pro Élagage 14</strong> se déplace avec le matériel de grimpe et d'évacuation adapté à l'accès de votre terrain.
          </p>
        </div>
      </section>

      <section className="pb-20 bg-[#FDFBF7]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
          {groups.map(({ s, list }) => (
            <div key={s}>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#0A0F0D] mb-2 capitalize">{s}</h2>
              <p className="text-[#4A5550] mb-5">{INTRO[s]}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {list.map((c) => (
                  <li key={c.slug} className="rounded-xl border border-[#1F3D2B]/10 bg-white p-4">
                    <p className="font-semibold text-[#0A0F0D] flex items-center gap-2"><MapPin size={16} className="text-[#1F3D2B]" /> {c.name} <span className="font-normal text-[#4A5550]">({c.code})</span></p>
                    <p className="text-sm text-[#4A5550] mt-2 flex flex-wrap gap-x-3">
                      <Link className="underline hover:text-[#1F3D2B]" to={`/paysagiste-${c.slug}`}>Paysagiste</Link>
                      <Link className="underline hover:text-[#1F3D2B]" to={`/jardinier-${c.slug}`}>Jardinier</Link>
                      <Link className="underline hover:text-[#1F3D2B]" to={`/elagage-${c.slug}`}>Élagage</Link>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
