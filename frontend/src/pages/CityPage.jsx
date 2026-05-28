import React from "react";
import { useLocation, Navigate, Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, CheckCircle2 } from "lucide-react";
import SEO, { buildLocalBusinessSchema, buildFAQSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import { getCity, CITIES } from "../data/cities";
import { SERVICES } from "../data/services";
import { TESTIMONIALS } from "../data/testimonials";
import { GLOBAL_FAQ } from "../data/faq";
import FAQAccordion from "../components/FAQAccordion";
import TestimonialCard from "../components/TestimonialCard";
import ContactForm from "../components/ContactForm";
import CTASection from "../components/CTASection";

export default function CityPage({ kind }) {
  // kind = "paysagiste" | "jardinier" | "elagage"
  const { pathname } = useLocation();
  // Extract slug from URL like /paysagiste-deauville -> deauville
  const slug = pathname.replace(/^\/(paysagiste|jardinier|elagage)-/, "");
  const city = getCity(slug);
  if (!city) return <Navigate to="/" replace />;

  const isPays = kind === "paysagiste";
  const isElag = kind === "elagage";
  const role = isPays ? "Paysagiste" : isElag ? "Élagueur" : "Jardinier";
  const roleShort = isPays ? "paysagiste" : isElag ? "élagage" : "jardinier";
  const brandLabel = isElag ? "Pro Élagage 14" : "Les Jardiniers Normands";

  const title = `${role} à ${city.name} | ${brandLabel} — Calvados`;
  const description = isPays
    ? `${role} à ${city.name} ⭐ Création de jardin, aménagement extérieur, plantation. Devis gratuit Calvados ☎ ${COMPANY.phone}`
    : isElag
    ? `Élagage à ${city.name} ⭐ Élagueur grimpeur certifié, taille raisonnée, abattage sécurisé. Devis gratuit Calvados ☎ ${COMPANY.phone}`
    : `${role} à ${city.name} ⭐ Entretien jardin, tonte, taille haie, désherbage. Crédit d'impôt 50%. Devis gratuit ☎ ${COMPANY.phone}`;

  const heroImage = isPays
    ? "https://images.unsplash.com/photo-1576897955702-24ad19680db3?auto=format&fit=crop&w=2000&q=85"
    : isElag
    ? "https://images.unsplash.com/photo-1762903938137-49b0a145e241?auto=format&fit=crop&w=2000&q=85"
    : "https://images.pexels.com/photos/3280078/pexels-photo-3280078.jpeg?auto=compress&cs=tinysrgb&w=2000";

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={`${COMPANY.site}/${kind}-${slug}`}
        image={heroImage}
        jsonLd={[buildLocalBusinessSchema(), buildFAQSchema(GLOBAL_FAQ)]}
      />

      <section className="relative min-h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImage} alt={`${role} ${city.name}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 w-full">
          <div className="inline-flex items-center gap-2 bg-[#F2EBD9]/15 backdrop-blur-md border border-[#F2EBD9]/30 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-[#F2EBD9]" strokeWidth={1.75} />
            <span className="text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#F2EBD9]">{city.code} · {city.distance}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light leading-[1] tracking-tight text-[#FDFBF7] max-w-4xl">
            {role} à {city.name}
            <span className="italic block">— Calvados</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#FDFBF7]/85 max-w-2xl mt-7 leading-relaxed">
            {city.intro} Notre équipe locale intervient à {city.name} et ses alentours pour {isPays ? "concevoir et créer" : isElag ? "élaguer, abattre et sécuriser vos arbres avec" : "entretenir avec soin"} votre {isElag ? "patrimoine arboré" : "jardin"}.
          </p>
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
            {role} à {city.name} : un savoir-faire au service de {isElag ? "vos arbres" : "votre extérieur"}
          </h2>
          <p className="text-lg leading-[1.75]">
            {city.name} ({city.code}, {city.population}) fait partie de notre zone d'intervention prioritaire. Située à {city.distance.replace("de Caen", "de notre siège caennais")}, la commune bénéficie d'un service réactif et personnalisé. {isPays ? `Notre rôle de paysagiste à ${city.name} couvre l'ensemble du cycle de création : étude, conception, aménagement, plantation et livraison clé en main.` : isElag ? `Pro Élagage 14 intervient à ${city.name} pour l'élagage de précision, la taille raisonnée, l'abattage par démontage en milieu contraint et le dessouchage mécanique. Nos grimpeurs sont certifiés, équipés et assurés.` : `Notre offre de jardinier à ${city.name} couvre tout l'entretien courant : tonte de pelouse, taille de haie, désherbage, soin des massifs, ramassage de feuilles.`}
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-medium tracking-tight mt-12 mb-5">
            {isPays ? "Création de jardins paysagers" : isElag ? "Élagage, abattage, dessouchage" : "Entretien régulier ou ponctuel"} à {city.name}
          </h2>
          <p className="text-lg leading-[1.75]">
            {isPays
              ? `Que vous habitiez en centre-ville de ${city.name} ou dans les quartiers résidentiels alentour, nous adaptons nos créations à votre style de vie et à votre terrain. Jardin contemporain, jardin de campagne normande, espace de réception avec terrasse et piscine : chaque projet est unique. Nous travaillons avec des essences adaptées au climat de la Côte de Nacre / Pays d'Auge et à l'exposition de votre parcelle.`
              : isElag
              ? `Notre équipe Pro Élagage 14 réalise à ${city.name} l'élagage d'arbres de toutes essences (chênes, hêtres, frênes, tilleuls, érables, peupliers, conifères), l'abattage par démontage avec rétention quand l'espace est contraint (proximité bâtiment ou ligne électrique), le dessouchage mécanique au rogneuse, et l'évacuation complète des déchets verts. Toutes nos interventions sont assurées en RC professionnelle.`
              : `Vous pouvez opter pour un contrat annuel d'entretien (forfait mensuel) ou pour une prestation ponctuelle (remise en état, taille de haie, débroussaillage). Nos prestations d'entretien courant à ${city.name} ouvrent droit au crédit d'impôt de 50%, soit une économie significative sur votre facture annuelle.`}
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-medium tracking-tight mt-12 mb-5">
            Pourquoi choisir {isElag ? "Pro Élagage 14" : "Les Jardiniers Normands"} à {city.name} ?
          </h2>
          <ul className="space-y-3 list-none ml-0">
            {[
              "Équipe locale qui connaît le terrain et le climat normand",
              "Devis gratuit avec déplacement sur place inclus",
              "Matériel professionnel et entretenu (sécurité maximale)",
              "Assurance Responsabilité Civile Professionnelle",
              "Évacuation systématique des déchets verts",
              "Réactivité : intervention sous 7 à 15 jours selon saison",
            ].map((b, i) => (
              <li key={i} className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#1F3D2B] mt-1" strokeWidth={1.75} />
                <span className="text-lg text-[#4A5550]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-light mb-10 text-center">Nos services à {city.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICES.slice(0, 8).map((s) => (
              <Link key={s.slug} to={`/${s.slug}`} className="bg-white p-5 rounded-2xl border border-[#E5E0D5] hover:border-[#1F3D2B] transition-colors">
                <p className="font-serif text-lg text-[#0A0F0D] leading-tight">{s.title}</p>
                <p className="text-xs text-[#1F3D2B] mt-3 font-sans font-semibold">Découvrir →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-light text-center mb-12">Avis clients dans la région de {city.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A0F0D] font-light leading-tight mb-8">Questions fréquentes</h2>
            <FAQAccordion items={GLOBAL_FAQ.slice(0, 6)} />
          </div>
          <div className="lg:col-span-6">
            <div className="bg-white p-8 rounded-2xl border border-[#E5E0D5]">
              <h3 className="font-serif text-3xl text-[#0A0F0D] mb-6">Devis gratuit à {city.name}</h3>
              <ContactForm defaultService={`${role} ${city.name}`} defaultCity={city.name} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h3 className="font-serif text-2xl text-[#0A0F0D] mb-6">Autres villes que nous desservons</h3>
          <div className="flex flex-wrap gap-3">
            {CITIES.filter((c) => c.slug !== slug).map((c) => (
              <Link key={c.slug} to={`/${kind}-${c.slug}`} className="px-4 py-2 rounded-full bg-white border border-[#E5E0D5] text-sm font-sans text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-[#FDFBF7] transition-colors">
                {role} {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={isElag ? `Confiez vos arbres à ${city.name} aux experts` : `Confiez votre ${roleShort} à ${city.name} à des experts`} subtitle="Devis gratuit, sans engagement, sous 24h." />
    </>
  );
}
