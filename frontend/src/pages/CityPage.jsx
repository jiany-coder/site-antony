import React from "react";
import { useLocation, Navigate, Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, CheckCircle2 } from "lucide-react";
import SEO, { buildLocalBusinessSchema, buildFAQSchema, buildBreadcrumbSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import CONTENT from "../data/communes_content.json";
import FAQAccordion from "../components/FAQAccordion";
import ContactForm from "../components/ContactForm";
import CTASection from "../components/CTASection";

const HERO = {
  paysagiste: "https://images.unsplash.com/photo-1576897955702-24ad19680db3?auto=format&fit=crop&w=2000&q=85",
  elagage: "https://images.unsplash.com/photo-1762903938137-49b0a145e241?auto=format&fit=crop&w=2000&q=85",
  jardinier: "https://images.pexels.com/photos/3280078/pexels-photo-3280078.jpeg?auto=compress&cs=tinysrgb&w=2000",
};
const SERVICE_LINKS = [
  ["paysagiste", "Paysagiste"],
  ["jardinier", "Jardinier"],
  ["elagage", "Élagage"],
];
const HEADINGS = {
  paysagiste: ["Création de jardins paysagers", "Pourquoi choisir Les Jardiniers Normands"],
  jardinier: ["Entretien régulier ou ponctuel", "Pourquoi choisir Les Jardiniers Normands"],
  elagage: ["Élagage, abattage, dessouchage", "Pourquoi choisir Pro Élagage 14"],
};
const WHY = [
  "Équipe basée à Caen, qui connaît le terrain et le climat normand",
  "Devis gratuit et sans engagement",
  "Intervention sous 24 h après acceptation du devis",
  "Matériel professionnel et assurance Responsabilité Civile Professionnelle",
  "Évacuation des déchets verts et chantier laissé propre",
  "Joignables du lundi au samedi, de 8 h à 20 h",
];

export default function CityPage({ kind }) {
  const { pathname } = useLocation();
  const key = pathname.replace(/^\//, "").replace(/\/$/, "");
  const d = CONTENT[key];
  if (!d) return <Navigate to="/" replace />;

  const isElag = kind === "elagage";
  const brandLabel = isElag ? "Pro Élagage 14" : "Les Jardiniers Normands";
  const url = `${COMPANY.site}/${key}`;
  const [h2a, h2b] = HEADINGS[kind];
  const ld = [
    buildLocalBusinessSchema(),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: d.h1,
      serviceType: d.label,
      areaServed: { "@type": "City", name: d.nom },
      provider: { "@id": `${COMPANY.site}/#business` },
      url,
      description: d.desc,
    },
    buildBreadcrumbSchema([
      ["Accueil", COMPANY.site + "/"],
      [`${d.label} à Caen`, `${COMPANY.site}/${kind}-caen`],
      [d.h1, url],
    ]),
    buildFAQSchema(d.faq.map(([q, a]) => ({ q, a }))),
  ];

  return (
    <>
      <SEO title={d.title} description={d.desc} canonical={url} image={HERO[kind]} jsonLd={ld} />

      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img src={HERO[kind]} alt={`${d.label} ${d.nom}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 w-full">
          <div className="inline-flex items-center gap-2 bg-[#F2EBD9]/15 backdrop-blur-md border border-[#F2EBD9]/30 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-[#F2EBD9]" strokeWidth={1.75} />
            <span className="text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#F2EBD9]">{d.cp} · {d.km} km de Caen</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light leading-[1] tracking-tight text-[#FDFBF7] max-w-4xl">
            {d.h1}
            <span className="italic block">— Calvados</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#FDFBF7]/85 max-w-2xl mt-7 leading-relaxed">{d.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#F2EBD9] text-[#1F3D2B] px-8 py-4 rounded-full font-sans font-semibold text-base hover:bg-white hover:-translate-y-1 hover:shadow-xl transition-all" data-testid="city-cta-devis">
              Devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${COMPANY.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-transparent text-[#FDFBF7] px-8 py-4 rounded-full font-sans font-semibold text-base border-2 border-[#F2EBD9]/40 hover:bg-[#F2EBD9] hover:text-[#1F3D2B] transition-all">
              <Phone className="w-5 h-5" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 prose-blog">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-medium tracking-tight mb-5">
            {d.label} {d.nom} : comment nous intervenons
          </h2>
          <p className="text-lg leading-[1.75]">{d.geo}</p>
          {d.special && <p className="text-lg leading-[1.75]">{d.special}</p>}
          <p className="text-lg leading-[1.75]">{d.popNote}</p>
          <p className="text-lg leading-[1.75]">
            {d.label} {d.nom}, c'est : {d.titles}.
          </p>
          <ul className="space-y-3 list-none ml-0">
            {d.items.map(([t, p]) => (
              <li key={t} className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#1F3D2B] mt-1 shrink-0" strokeWidth={1.75} />
                <span className="text-lg text-[#4A5550]"><strong className="text-[#0A0F0D]">{t}</strong> — {p}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-medium tracking-tight mt-12 mb-5">
            Le jardin à {d.nom} : ce qu'il faut savoir
          </h2>
          {d.garden.map((p, i) => (
            <p key={i} className="text-lg leading-[1.75]">{p}</p>
          ))}
          <p className="text-lg leading-[1.75] bg-[#F2EBD9] rounded-2xl p-5"><strong>Conseil.</strong> {d.tip}</p>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-medium tracking-tight mt-12 mb-5">{h2a} à {d.nom}</h2>
          <p className="text-lg leading-[1.75]">{d.how}</p>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-medium tracking-tight mt-12 mb-5">
            Combien coûte un {d.label.toLowerCase()} à {d.nom} ?
          </h2>
          <p className="text-lg leading-[1.75]">Quelques repères de prix habituellement constatés pour ces travaux. Chaque terrain est différent : le devis est gratuit.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-[#F2EBD9] text-[#0A0F0D]">
                  <th className="p-4">Prestation</th>
                  <th className="p-4">Prix indicatif</th>
                </tr>
              </thead>
              <tbody>
                {d.prices.map(([a, b]) => (
                  <tr key={a} className="border-b border-[#E5E0D5]">
                    <td className="p-4">{a}</td>
                    <td className="p-4">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#4A5550] mt-3">
            Prix indicatifs, constatés sur le marché local. <Link to="/tarifs-jardinier-paysagiste-elagage-caen" className="text-[#1F3D2B] underline">Voir tous les tarifs</Link>
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-medium tracking-tight mt-12 mb-5">Fiche pratique : {d.nom}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden">
              <tbody>
                {d.fiche.map(([a, b]) => (
                  <tr key={a} className="border-b border-[#E5E0D5]">
                    <th className="p-4 font-semibold text-[#0A0F0D] w-1/3">{a}</th>
                    <td className="p-4">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-medium tracking-tight mt-12 mb-5">{h2b} à {d.nom} ?</h2>
          <ul className="space-y-3 list-none ml-0">
            {WHY.map((b) => (
              <li key={b} className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#1F3D2B] mt-1 shrink-0" strokeWidth={1.75} />
                <span className="text-lg text-[#4A5550]">{b}</span>
              </li>
            ))}
          </ul>
          {isElag && (
            <p className="text-lg leading-[1.75] mt-8">
              Pro Élagage 14 est la marque d'élagage, d'abattage et de dessouchage des Jardiniers Normands : même entreprise, même adresse ({COMPANY.address}) et même numéro, le {COMPANY.phone}.
            </p>
          )}
        </div>
      </section>

      <section className="py-20 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-light mb-10 text-center">Nos services à {d.nom}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SERVICE_LINKS.map(([k, label]) => (
              <Link key={k} to={`/${k}-${d.slug}`} className="bg-white p-5 rounded-2xl border border-[#E5E0D5] hover:border-[#1F3D2B] transition-colors">
                <p className="font-serif text-lg text-[#0A0F0D] leading-tight">{label} à {d.nom}</p>
                <p className="text-xs text-[#1F3D2B] mt-3 font-sans font-semibold">Découvrir →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A0F0D] font-light leading-tight mb-8">Questions fréquentes</h2>
            <FAQAccordion items={d.faq.map(([q, a]) => ({ q, a }))} />
          </div>
          <div className="lg:col-span-6">
            <div className="bg-white p-8 rounded-2xl border border-[#E5E0D5]">
              <h3 className="font-serif text-3xl text-[#0A0F0D] mb-6">Devis gratuit à {d.nom}</h3>
              <ContactForm defaultService={`${d.label} ${d.nom}`} defaultCity={d.nom} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h3 className="font-serif text-2xl text-[#0A0F0D] mb-6">Autour de {d.nom}</h3>
          <div className="flex flex-wrap gap-3">
            {d.near.map((o) => (
              <Link key={o.slug} to={`/${kind}-${o.slug}`} className="px-4 py-2 rounded-full bg-white border border-[#E5E0D5] text-sm font-sans text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-[#FDFBF7] transition-colors">
                {d.label} {o.nom} ({o.km} km)
              </Link>
            ))}
            <Link to="/#zones" className="px-4 py-2 rounded-full bg-[#1F3D2B] text-sm font-sans text-[#FDFBF7]">Toutes les communes desservies</Link>
          </div>
        </div>
      </section>

      <CTASection title={`Confiez votre projet à ${d.nom} à ${brandLabel}`} subtitle="Devis gratuit et sans engagement, intervention sous 24 h après acceptation." />
    </>
  );
}
