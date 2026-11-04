import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, CheckCircle2, ShieldCheck, Clock, BadgeCheck, Star, MessageCircle } from "lucide-react";
import SEO, { buildLocalBusinessSchema, buildFAQSchema, buildBreadcrumbSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import { TESTIMONIALS } from "../data/testimonials";
import { CHANTIERS } from "../data/photos";
import FAQAccordion from "../components/FAQAccordion";
import ContactForm from "../components/ContactForm";
import { track } from "../lib/track";

const PATH = "/elagage-toulouse";
const TITLE = "Élagage et taille de haie à Toulouse | Devis gratuit";
const DESC = `Élagage, taille de haie, abattage et dessouchage à Toulouse et alentours en novembre 2026. Équipe professionnelle, devis gratuit ☎ ${COMPANY.phone}`;

const COMMUNES = [
  "Toulouse", "Blagnac", "Colomiers", "Tournefeuille", "Balma", "Ramonville-Saint-Agne",
  "L'Union", "Cugnaux", "Portet-sur-Garonne", "Plaisance-du-Touch", "Saint-Orens-de-Gameville",
  "Castanet-Tolosan", "Labège", "Aucamville", "Fenouillet", "Seilh", "Muret",
  "Léguevin", "Pibrac", "Quint-Fonsegrives",
];

const SERVICES = [
  {
    title: "Élagage",
    text: "Taille des arbres, allègement de la couronne, suppression des branches mortes ou gênantes, en grimpe ou depuis le sol selon l'arbre et l'accès.",
  },
  {
    title: "Taille de haie",
    text: "Cyprès, thuyas, lauriers, photinias : haies taillées au cordeau, y compris les grandes hauteurs à l'échelle, avec évacuation des déchets verts.",
  },
  {
    title: "Abattage et dessouchage",
    text: "Abattage d'arbres dangereux ou trop grands, démontage par sections en zone étroite, dessouchage et nettoyage complet du terrain.",
  },
];

const FAQ = [
  [
    "Pourquoi une équipe normande à Toulouse ?",
    "Nous travaillons habituellement à Caen et dans le Calvados. Pendant tout le mois de novembre 2026, nous sommes présents à Toulouse et dans les communes alentour pour des chantiers d'élagage, de taille de haie et d'abattage.",
  ],
  [
    "Jusqu'à quand êtes-vous disponibles ?",
    "Pendant tout le mois de novembre 2026. Ensuite, l'équipe repart en Normandie : pour garantir un créneau, il vaut mieux nous appeler tôt.",
  ],
  [
    "Quelle zone couvrez-vous autour de Toulouse ?",
    "Toulouse et les communes situées à environ 30 minutes : Blagnac, Colomiers, Tournefeuille, Balma, Ramonville-Saint-Agne, Cugnaux, Muret, Castanet-Tolosan et les environs. Votre commune n'est pas citée ? Appelez-nous, on vous répond tout de suite.",
  ],
  [
    "Le devis est-il gratuit ?",
    "Oui, le devis est gratuit et sans engagement. Pour aller plus vite, vous pouvez nous envoyer quelques photos de l'arbre ou de la haie par WhatsApp au " + COMPANY.phone + ".",
  ],
  [
    "Les déchets verts sont-ils évacués ?",
    "Oui, nous évacuons les déchets verts et laissons le chantier propre. L'assurance responsabilité civile professionnelle couvre les travaux.",
  ],
];

const TRUST = [
  { Icon: BadgeCheck, label: "Devis gratuit", desc: "Sans engagement" },
  { Icon: ShieldCheck, label: "Assurance RC pro", desc: "Travaux couverts" },
  { Icon: Clock, label: "Lundi au samedi", desc: "8 h à 20 h" },
  { Icon: CheckCircle2, label: "20 ans d'expérience", desc: "Jardin et arbres" },
];

const PHOTOS = [CHANTIERS.thuyaEchelle, CHANTIERS.grandeHaie, CHANTIERS.laurierEchelle];
const AVIS = TESTIMONIALS.slice(0, 3);

export default function ToulousePage() {
  const url = `${COMPANY.site}${PATH}`;
  const wa = COMPANY.whatsapp.replace(/\D/g, "");
  const waText = encodeURIComponent("Bonjour, je souhaite un devis pour de l'élagage ou une taille de haie à Toulouse.");
  const ld = [
    buildLocalBusinessSchema(),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Élagage, taille de haie et abattage à Toulouse",
      serviceType: "Élagage, taille de haie, abattage",
      areaServed: { "@type": "City", name: "Toulouse" },
      provider: { "@id": `${COMPANY.site}/#business` },
      url,
      description: DESC,
    },
    buildBreadcrumbSchema([
      ["Accueil", COMPANY.site + "/"],
      ["Élagage à Toulouse", url],
    ]),
    buildFAQSchema(FAQ.map(([q, a]) => ({ q, a }))),
  ];

  return (
    <>
      <SEO title={TITLE} description={DESC} canonical={url} image="/photos/taille-haie-thuya-echelle-jardin.webp" jsonLd={ld} />

      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img
            fetchPriority="high" decoding="async" width="1600" height="900"
            src="/photos/taille-haie-thuya-echelle-jardin.webp"
            alt="Taille d'une haute haie de thuyas à l'échelle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 w-full">
          <div className="inline-flex items-center gap-2 bg-[#F2EBD9]/15 backdrop-blur-md border border-[#F2EBD9]/30 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-[#F2EBD9]" strokeWidth={1.75} />
            <span className="text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#F2EBD9]">Disponibles à Toulouse · Novembre 2026</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.02] tracking-tight text-[#FDFBF7] max-w-4xl">
            Élagage, taille de haie et abattage
            <span className="italic block">à Toulouse</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#FDFBF7]/85 max-w-2xl mt-7 leading-relaxed">
            Une équipe professionnelle présente à Toulouse et dans un rayon de 30 minutes pendant tout le mois de novembre. Devis gratuit, réponse rapide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              onClick={() => track("click_call", { page: "toulouse", position: "hero" })}
              className="inline-flex items-center justify-center gap-2 bg-[#F2EBD9] text-[#1F3D2B] px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-white hover:-translate-y-1 hover:shadow-xl transition-all"
              data-testid="tls-hero-call"
            >
              <Phone className="w-5 h-5" /> Appeler le {COMPANY.phone}
            </a>
            <a
              href="#devis"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[#FDFBF7] px-8 py-4 rounded-full font-sans font-semibold text-base border-2 border-[#F2EBD9]/40 hover:bg-[#F2EBD9] hover:text-[#1F3D2B] transition-all"
              data-testid="tls-hero-devis"
            >
              Devis gratuit <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F4F1EA] border-y border-[#E5E0D5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST.map(({ Icon, label, desc }) => (
            <div key={label} className="flex items-start gap-3">
              <Icon className="w-7 h-7 text-[#1F3D2B] shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-sans font-semibold text-[#0A0F0D] text-sm">{label}</p>
                <p className="text-xs text-[#4A5550] mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A0F0D] font-light tracking-tight mb-4">
            Nos interventions à Toulouse
          </h2>
          <p className="text-lg text-[#4A5550] max-w-3xl mb-12 leading-relaxed">
            Nos trois spécialités : l'élagage, la taille de haie et l'abattage. Nous réalisons aussi l'entretien de jardin, la tonte et le débroussaillage pour les clients qui le souhaitent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white p-8 rounded-2xl border border-[#E5E0D5] flex flex-col">
                <h3 className="font-serif text-2xl text-[#0A0F0D] mb-3">{s.title} à Toulouse</h3>
                <p className="text-[#4A5550] leading-relaxed flex-1">{s.text}</p>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  onClick={() => track("click_call", { page: "toulouse", position: `service-${s.title}` })}
                  className="inline-flex items-center gap-2 mt-6 text-[#1F3D2B] font-sans font-semibold text-sm"
                >
                  <Phone className="w-4 h-4" /> Demander un devis par téléphone
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1F3D2B] text-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F2EBD9] font-light tracking-tight mb-12">Comment ça se passe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              ["1", "Vous nous contactez", "Un appel ou un message WhatsApp avec quelques photos de l'arbre ou de la haie suffit."],
              ["2", "Devis gratuit", "Nous vous donnons un prix clair, sans engagement, rapidement."],
              ["3", "Intervention planifiée", "Nous planifions le chantier pendant notre présence à Toulouse, puis nous évacuons les déchets verts."],
            ].map(([n, t, d]) => (
              <div key={n} className="border-l-2 border-[#F2EBD9]/30 pl-6">
                <p className="font-serif text-5xl font-light text-[#F2EBD9] leading-none">{n}</p>
                <p className="font-sans font-semibold mt-4 mb-2">{t}</p>
                <p className="text-[#FDFBF7]/75 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              onClick={() => track("click_call", { page: "toulouse", position: "steps" })}
              className="inline-flex items-center justify-center gap-2 bg-[#F2EBD9] text-[#1F3D2B] px-8 py-4 rounded-full font-sans font-semibold hover:bg-white transition-all"
            >
              <Phone className="w-5 h-5" /> {COMPANY.phone}
            </a>
            <a
              href={`https://wa.me/${wa}?text=${waText}`}
              target="_blank" rel="noopener noreferrer"
              onClick={() => track("click_whatsapp", { page: "toulouse", position: "steps" })}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[#F2EBD9] px-8 py-4 rounded-full font-sans font-semibold border-2 border-[#F2EBD9]/40 hover:bg-[#F2EBD9] hover:text-[#1F3D2B] transition-all"
            >
              <MessageCircle className="w-5 h-5" /> Envoyer des photos sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-light tracking-tight mb-10">Quelques chantiers de l'équipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {PHOTOS.map((p) => (
              <img
                key={p.src} src={p.src} width={p.w} height={p.h} loading="lazy" decoding="async"
                alt={p.alt.replace(/ à Caen/g, "")}
                className="w-full h-72 object-cover rounded-2xl"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-light tracking-tight mb-3">Ils nous ont fait confiance</h2>
          <p className="text-[#4A5550] mb-10">Avis publiés sur notre fiche Google.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AVIS.map((t) => (
              <figure key={t.name} className="bg-white p-7 rounded-2xl border border-[#E5E0D5]">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4A841] text-[#D4A841]" strokeWidth={1} />
                  ))}
                </div>
                <blockquote className="text-[#0A0F0D] leading-relaxed">{t.text}</blockquote>
                <figcaption className="text-sm text-[#4A5550] mt-4">{t.name} · {t.date}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-light tracking-tight mb-6">Zone d'intervention autour de Toulouse</h2>
          <p className="text-lg text-[#4A5550] leading-relaxed mb-8">
            Nous intervenons à Toulouse et dans un rayon d'environ 30 minutes, notamment dans ces communes :
          </p>
          <div className="flex flex-wrap gap-3">
            {COMMUNES.map((c) => (
              <span key={c} className="px-4 py-2 rounded-full bg-white border border-[#E5E0D5] text-sm font-sans text-[#1F3D2B]">{c}</span>
            ))}
          </div>
          <p className="text-[#4A5550] mt-6">Une autre commune ? Appelez-nous au {COMPANY.phone}, nous regardons ensemble.</p>
        </div>
      </section>

      <section id="devis" className="py-20 sm:py-24 bg-[#F4F1EA] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A0F0D] font-light leading-tight mb-8">Questions fréquentes</h2>
            <FAQAccordion items={FAQ.map(([q, a]) => ({ q, a }))} />
          </div>
          <div className="lg:col-span-6">
            <div className="bg-white p-8 rounded-2xl border border-[#E5E0D5]">
              <h3 className="font-serif text-3xl text-[#0A0F0D] mb-2">Devis gratuit à Toulouse</h3>
              <p className="text-[#4A5550] mb-6">Décrivez votre projet, nous vous répondons rapidement. Pressé ? Appelez le <a className="font-semibold text-[#1F3D2B]" href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a>.</p>
              <ContactForm
                defaultService="Élagage à Toulouse"
                defaultCity="Toulouse"
                cityPlaceholder="Toulouse, Blagnac, Colomiers..."
                serviceOptions={[
                  "Élagage à Toulouse",
                  "Taille de haie à Toulouse",
                  "Abattage d'arbre à Toulouse",
                  "Dessouchage à Toulouse",
                  "Entretien jardin à Toulouse",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0A0F0D] text-[#FDFBF7] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#F2EBD9] mb-4">Un arbre ou une haie à faire à Toulouse ?</h2>
          <p className="text-[#FDFBF7]/80 mb-8">Nous sommes sur place en novembre. Appelez-nous pour réserver un créneau.</p>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            onClick={() => track("click_call", { page: "toulouse", position: "footer" })}
            className="inline-flex items-center justify-center gap-2 bg-[#F2EBD9] text-[#1F3D2B] px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-white transition-all"
          >
            <Phone className="w-5 h-5" /> {COMPANY.phone}
          </a>
          <p className="text-xs text-[#FDFBF7]/50 mt-8">
            <Link to="/" className="underline">Les Jardiniers Normands</Link> · Pro Élagage 14 · Basés à Caen
          </p>
        </div>
      </section>
    </>
  );
}
