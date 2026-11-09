import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, CheckCircle2, ShieldCheck, Clock, BadgeCheck, Star, MessageCircle, Camera } from "lucide-react";
import SEO, { buildLocalBusinessSchema, buildFAQSchema, buildBreadcrumbSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import { TESTIMONIALS } from "../data/testimonials";
import { CHANTIERS } from "../data/photos";
import FAQAccordion from "../components/FAQAccordion";
import ContactForm from "../components/ContactForm";
import { track } from "../lib/track";

const PATH = "/elagage-toulouse";
const TITLE = "Élagage à Toulouse (31) | Taille de haie & abattage – Devis";
const DESC = `Élagage, taille de haie, abattage et dessouchage à Toulouse et alentours. Devis gratuit, réponse rapide, déchets verts évacués. ☎ ${COMPANY.phone}`;

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
    "Intervenez-vous bien à Toulouse ?",
    "Oui. Nous intervenons à Toulouse et dans les communes alentour pour l'élagage, la taille de haie, l'abattage et le dessouchage. Appelez-nous ou envoyez des photos pour un devis rapide.",
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
    "Comment est calculé le prix d'un élagage ou d'une taille de haie ?",
    "Le prix dépend de la hauteur, de l'accès, de la quantité à tailler et de l'évacuation des déchets verts. Avec quelques photos et la commune, nous vous donnons un prix clair avant toute intervention.",
  ],
  [
    "Les déchets verts sont-ils évacués ?",
    "Oui, nous évacuons les déchets verts et laissons le chantier propre. L'assurance responsabilité civile professionnelle couvre les travaux.",
  ],
  [
    "Faut-il une autorisation pour abattre un arbre ?",
    "Dans la plupart des cas, non pour un arbre de jardin privé, mais certaines zones (espaces protégés, arbres classés) sont réglementées. Nous vous conseillons lors du devis.",
  ],
];

const TRUST = [
  { Icon: BadgeCheck, label: "Devis gratuit", desc: "Sans engagement" },
  { Icon: ShieldCheck, label: "Assurance RC pro", desc: "Travaux couverts" },
  { Icon: Clock, label: "Lundi au samedi", desc: "8 h à 20 h" },
  { Icon: CheckCircle2, label: "20 ans d'expérience", desc: "Jardin et arbres" },
];

const QUOTE = [
  ["1", "Vous envoyez quelques photos", "Par WhatsApp ou via le formulaire, avec la commune."],
  ["2", "Vous recevez un prix clair", "Devis gratuit, détaillé, sans engagement."],
  ["3", "Nous intervenons et nettoyons", "Chantier planifié avec vous, déchets verts évacués."],
];

const PHOTOS = [CHANTIERS.thuyaEchelle, CHANTIERS.grandeHaie, CHANTIERS.laurierEchelle];
const AVIS = [0, 4, 2].map((i) => TESTIMONIALS[i]).filter(Boolean);

const API = `${process.env.REACT_APP_BACKEND_URL || ""}/api`;

// Ouvert du lundi au samedi, 8 h - 20 h (heure de Paris)
function useOpenNow() {
  const [open, setOpen] = useState(null);
  useEffect(() => {
    try {
      const f = new Intl.DateTimeFormat("fr-FR", { timeZone: "Europe/Paris", weekday: "short", hour: "numeric", hourCycle: "h23" }).formatToParts(new Date());
      const day = f.find((x) => x.type === "weekday").value.toLowerCase();
      const hour = parseInt(f.find((x) => x.type === "hour").value, 10);
      setOpen(!day.startsWith("dim") && hour >= 8 && hour < 20);
    } catch (e) { setOpen(null); }
  }, []);
  return open;
}

function CallbackForm({ position }) {
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("idle");
  const [started, setStarted] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setState("loading");
    try {
      await axios.post(`${API}/contact`, {
        callback: true, phone, city: city || "Toulouse", service: "Rappel - Élagage / haie / abattage à Toulouse",
        message: `Demande de rappel gratuit au ${phone}${city ? " (" + city + ")" : ""}`,
      });
      track("generate_lead", { page: "toulouse", position, type: "callback" });
      setState("done");
    } catch (err) {
      setState("error");
    }
  };
  if (state === "done")
    return (
      <div className="rounded-2xl bg-white/95 text-[#1F3D2B] p-5 font-sans" data-testid={`tls-callback-done-${position}`}>
        <p className="font-semibold">Merci, c'est bien reçu.</p>
        <p className="text-sm mt-1 text-[#4A5550]">Nous vous rappelons dès que possible (lundi au samedi, 8 h à 20 h). Pressé ? <a className="font-semibold underline" href={`tel:${COMPANY.phoneRaw}`} onClick={() => track("click_call", { page: "toulouse", position: "callback-done" })}>{COMPANY.phone}</a></p>
      </div>
    );
  return (
    <form
      onSubmit={submit}
      onFocus={() => { if (!started) { setStarted(true); track("form_start", { page: "toulouse", position }); } }}
      className="rounded-2xl bg-white/95 p-5 font-sans max-w-xl"
      data-testid={`tls-callback-${position}`}
    >
      <p className="font-semibold text-[#1F3D2B] text-base">Pas le temps d'appeler ? On vous rappelle.</p>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-5 gap-2">
        <input
          required type="tel" inputMode="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
          placeholder="Votre téléphone" aria-label="Votre téléphone"
          className="sm:col-span-2 px-4 py-3 rounded-xl border border-[#E5E0D5] bg-[#FDFBF7] text-[#0A0F0D] focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]/30"
        />
        <input
          value={city} onChange={(e) => setCity(e.target.value)} autoComplete="address-level2"
          placeholder="Commune" aria-label="Commune"
          className="sm:col-span-2 px-4 py-3 rounded-xl border border-[#E5E0D5] bg-[#FDFBF7] text-[#0A0F0D] focus:outline-none focus:ring-2 focus:ring-[#1F3D2B]/30"
        />
        <button
          type="submit" disabled={state === "loading"}
          className="sm:col-span-1 px-4 py-3 rounded-xl bg-[#1F3D2B] text-[#FDFBF7] font-semibold hover:bg-[#14281C] disabled:opacity-60"
        >
          {state === "loading" ? "…" : "Rappel"}
        </button>
      </div>
      {state === "error" && <p className="text-sm text-red-700 mt-2">Envoi impossible : appelez-nous au {COMPANY.phone}.</p>}
      <p className="text-xs text-[#4A5550] mt-2">Gratuit, sans engagement. Votre numéro sert uniquement à vous rappeler.</p>
    </form>
  );
}

export default function ToulousePage() {
  const url = `${COMPANY.site}${PATH}`;
  const wa = COMPANY.whatsapp.replace(/\D/g, "");
  const waText = encodeURIComponent("Bonjour, je souhaite un devis pour de l'élagage ou une taille de haie à Toulouse.");
  const waHref = `https://wa.me/${wa}?text=${waText}`;
  const call = (position) => () => track("click_call", { page: "toulouse", position });
  const whatsapp = (position) => () => track("click_whatsapp", { page: "toulouse", position });
  const openNow = useOpenNow();
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

  const btnMain = "inline-flex items-center justify-center gap-2 bg-[#F2EBD9] text-[#1F3D2B] px-8 py-4 rounded-full font-sans font-semibold text-lg hover:bg-white hover:-translate-y-1 hover:shadow-xl transition-all";
  const btnGhost = "inline-flex items-center justify-center gap-2 bg-transparent text-[#FDFBF7] px-8 py-4 rounded-full font-sans font-semibold text-base border-2 border-[#F2EBD9]/40 hover:bg-[#F2EBD9] hover:text-[#1F3D2B] transition-all";

  return (
    <>
      <SEO title={TITLE} description={DESC} canonical={url} image="/photos/taille-haie-thuya-echelle-jardin.webp" jsonLd={ld} />

      <section className="relative min-h-[78vh] flex items-end">
        <div className="absolute inset-0">
          <img
            fetchPriority="high" decoding="async" width="1600" height="900"
            src="/photos/taille-haie-thuya-echelle-jardin.webp"
            alt="Taille d'une haute haie de thuyas à l'échelle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-20 w-full">
          <div className="inline-flex items-center gap-2 bg-[#F2EBD9]/15 backdrop-blur-md border border-[#F2EBD9]/30 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-[#F2EBD9]" strokeWidth={1.75} />
            <span className="text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#F2EBD9]">Élagage · Haies · Abattage à Toulouse</span>
          </div>
          {openNow !== null && (
            <p className="flex items-center gap-2 text-sm font-sans font-semibold text-[#FDFBF7] mb-4" data-testid="tls-open-now">
              <span className={`inline-block w-2.5 h-2.5 rounded-full ${openNow ? "bg-[#4ADE80] animate-pulse" : "bg-[#FBBF24]"}`} />
              {openNow ? "On décroche maintenant (lun-sam, 8 h-20 h)" : "Fermé pour l'instant : laissez votre numéro, on vous rappelle (lun-sam, 8 h-20 h)"}
            </p>
          )}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.02] tracking-tight text-[#FDFBF7] max-w-4xl">
            Élagage à Toulouse :
            <span className="italic block">un arbre à tailler ou à sécuriser ?</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#FDFBF7]/85 max-w-2xl mt-7 leading-relaxed">
            Élagage, taille de haie, abattage et dessouchage à Toulouse et dans les communes voisines. Prix clair avant intervention, déchets verts évacués.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-2xl text-[#FDFBF7]/90 text-sm font-sans">
            {["Devis gratuit et sans engagement", "Réponse rapide, même par WhatsApp", "Assurance responsabilité civile pro", "Chantier laissé propre"].map((t) => (
              <li key={t} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#F2EBD9] shrink-0" /> {t}</li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <a href={`tel:${COMPANY.phoneRaw}`} onClick={call("hero")} className={btnMain} data-testid="tls-hero-call">
              <Phone className="w-5 h-5" /> Appeler le {COMPANY.phone}
            </a>
            <a href="#devis" className={btnGhost} data-testid="tls-hero-devis">
              Recevoir mon devis gratuit <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <a
            href={waHref} target="_blank" rel="noopener noreferrer" onClick={whatsapp("hero")}
            className="inline-flex items-center gap-2 mt-5 text-[#F2EBD9] font-sans text-sm underline underline-offset-4"
            data-testid="tls-hero-whatsapp"
          >
            <Camera className="w-4 h-4" /> Envoyer des photos sur WhatsApp
          </a>
          <div className="mt-6"><CallbackForm position="hero" /></div>
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
            Trois spécialités : l'élagage, la taille de haie et l'abattage. Nous réalisons aussi l'entretien de jardin et le débroussaillage sur demande.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white p-8 rounded-2xl border border-[#E5E0D5] flex flex-col">
                <h3 className="font-serif text-2xl text-[#0A0F0D] mb-3">{s.title} à Toulouse</h3>
                <p className="text-[#4A5550] leading-relaxed flex-1">{s.text}</p>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  onClick={call(`service-${s.title}`)}
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
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F2EBD9] font-light tracking-tight mb-3">Un devis clair avant de décider</h2>
          <p className="text-[#FDFBF7]/75 mb-12 max-w-2xl">Pas de mauvaise surprise : vous connaissez le prix avant que nous commencions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {QUOTE.map(([n, t, d]) => (
              <div key={n} className="border-l-2 border-[#F2EBD9]/30 pl-6">
                <p className="font-serif text-5xl font-light text-[#F2EBD9] leading-none">{n}</p>
                <p className="font-sans font-semibold mt-4 mb-2">{t}</p>
                <p className="text-[#FDFBF7]/75 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a href={`tel:${COMPANY.phoneRaw}`} onClick={call("steps")} className={btnMain}>
              <Phone className="w-5 h-5" /> {COMPANY.phone}
            </a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" onClick={whatsapp("steps")} className={btnGhost}>
              <MessageCircle className="w-5 h-5" /> Envoyer des photos sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-light tracking-tight mb-3">Nos réalisations</h2>
          <p className="text-[#4A5550] mb-10">Quelques chantiers de taille de haie et d'élagage réalisés par l'équipe.</p>
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
          <p className="text-[#4A5550] mb-10">Avis clients publiés sur notre fiche Google (5/5).</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AVIS.map((t) => (
              <figure key={t.name} className="bg-white p-7 rounded-2xl border border-[#E5E0D5]">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4A841] text-[#D4A841]" strokeWidth={1} />
                  ))}
                </div>
                <blockquote className="text-[#0A0F0D] leading-relaxed">{t.text}</blockquote>
                <figcaption className="text-sm text-[#4A5550] mt-4">{t.name}</figcaption>
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
          <div className="lg:col-span-6 order-2 lg:order-1">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A0F0D] font-light leading-tight mb-8">Questions fréquentes</h2>
            <FAQAccordion items={FAQ.map(([q, a]) => ({ q, a }))} />
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="bg-white p-8 rounded-2xl border border-[#E5E0D5]">
              <h3 className="font-serif text-3xl text-[#0A0F0D] mb-2">Devis gratuit à Toulouse</h3>
              <p className="text-[#4A5550] mb-6">Décrivez votre besoin et indiquez votre commune, nous vous répondons rapidement. Pressé ? Appelez le <a className="font-semibold text-[#1F3D2B]" href={`tel:${COMPANY.phoneRaw}`} onClick={call("form")}>{COMPANY.phone}</a>.</p>
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
              <p className="text-xs text-[#4A5550]/80 mt-4 text-center">Vos coordonnées servent uniquement à vous répondre pour ce devis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 pb-28 md:pb-16 bg-[#0A0F0D] text-[#FDFBF7] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#F2EBD9] mb-4">Un arbre ou une haie à faire à Toulouse ?</h2>
          <p className="text-[#FDFBF7]/80 mb-8">Appelez-nous ou envoyez des photos : vous avez un prix clair rapidement.</p>
          <a href={`tel:${COMPANY.phoneRaw}`} onClick={call("footer")} className={btnMain}>
            <Phone className="w-5 h-5" /> {COMPANY.phone}
          </a>
          <p className="text-xs text-[#FDFBF7]/50 mt-8">
            <Link to="/" className="underline">Les Jardiniers Normands</Link> · Pro Élagage 14
          </p>
        </div>
      </section>

      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 gap-2 p-3 bg-[#FDFBF7]/95 backdrop-blur border-t border-[#E5E0D5]" data-testid="tls-sticky-bar">
        <a
          href={`tel:${COMPANY.phoneRaw}`} onClick={call("sticky")}
          className="inline-flex items-center justify-center gap-2 bg-[#1F3D2B] text-[#FDFBF7] py-3.5 rounded-full font-sans font-semibold"
        >
          <Phone className="w-5 h-5" /> Appeler
        </a>
        <a
          href="#devis"
          className="inline-flex items-center justify-center gap-2 border-2 border-[#1F3D2B] text-[#1F3D2B] py-3.5 rounded-full font-sans font-semibold"
        >
          Devis gratuit
        </a>
      </div>
    </>
  );
}
