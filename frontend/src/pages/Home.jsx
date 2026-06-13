import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star, MapPin, CheckCircle2, Trees, Leaf } from "lucide-react";
import SEO, { buildLocalBusinessSchema, buildFAQSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import { SERVICES } from "../data/services";
import { CITIES } from "../data/cities";
import { TESTIMONIALS } from "../data/testimonials";
import { GLOBAL_FAQ } from "../data/faq";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQAccordion from "../components/FAQAccordion";
import TrustBar from "../components/TrustBar";
import StatsBar from "../components/StatsBar";
import CTASection from "../components/CTASection";
import BeforeAfter from "../components/BeforeAfter";
import GoogleReviewBanner from "../components/GoogleReviewBanner";

const ELAGAGE_PHOTOS = [
  "https://images.unsplash.com/photo-1762903938137-49b0a145e241?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1474742509976-ddec6b387356?auto=format&fit=crop&w=1200&q=80",
  "https://customer-assets.emergentagent.com/job_paysage-caen-seo/artifacts/349b4rlo_abe%2023.jpg",
  "https://customer-assets.emergentagent.com/job_paysage-caen-seo/artifacts/349b4rlo_abe%2023.jpg",
  "https://customer-assets.emergentagent.com/job_paysage-caen-seo/artifacts/er21hu1d_abe%2024.jpg",
  "https://customer-assets.emergentagent.com/job_paysage-caen-seo/artifacts/er21hu1d_abe%2024.jpg",
];

export default function Home() {
  const jsonLd = [buildLocalBusinessSchema(), buildFAQSchema(GLOBAL_FAQ)];

  return (
    <>
      <SEO
        title="Paysagiste Caen – Jardinier & Élagueur Calvados | Les Jardiniers Normands"
        description="🌿 Paysagiste, jardinier et élagueur à Caen et dans tout le Calvados. Création jardin, élagage, abattage, démoussage. Devis gratuit ☎ 07 80 04 43 90."
        canonical={`${COMPANY.site}/`}
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center grain" data-testid="hero-section">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1597201278257-3687be27d954?auto=format&fit=crop&w=2000&q=85"
            alt="Paysagiste Caen Calvados — jardin paysager premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 bg-[#F2EBD9]/15 backdrop-blur-md border border-[#F2EBD9]/30 px-4 py-2 rounded-full mb-7">
              <MapPin className="w-3.5 h-3.5 text-[#F2EBD9]" strokeWidth={1.75} />
              <span className="text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#F2EBD9]">Calvados · Caen · Côte Fleurie</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-light leading-[0.95] tracking-tight text-[#FDFBF7] mb-7">
              Paysagiste, jardinier
              <br />
              <span className="italic font-extralight">&amp; élagueur</span> dans le Calvados
            </h1>
            <p className="text-lg sm:text-xl text-[#FDFBF7]/85 max-w-2xl mb-10 leading-relaxed">
              Création de jardins haut de gamme, élagage de précision, entretien extérieur. Les Jardiniers Normands et Pro Élagage 14 prennent soin de votre patrimoine vert avec exigence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#F2EBD9] text-[#1F3D2B] px-8 py-4 rounded-full font-sans font-semibold text-base transition-all hover:bg-white hover:-translate-y-1 hover:shadow-xl"
                data-testid="hero-cta-devis"
              >
                Devis gratuit <ArrowRight className="w-5 h-5" strokeWidth={1.75} />
              </Link>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#FDFBF7] px-8 py-4 rounded-full font-sans font-semibold text-base border-2 border-[#F2EBD9]/40 transition-all hover:bg-[#F2EBD9] hover:text-[#1F3D2B]"
                data-testid="hero-cta-phone"
              >
                <Phone className="w-5 h-5" strokeWidth={1.75} /> {COMPANY.phone}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10 text-[#FDFBF7]/80 text-sm">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A841] text-[#D4A841]" strokeWidth={1} />
                ))}
              </div>
              <span className="font-sans">Note moyenne 5/5 · 47+ avis Google</span>
              <span className="hidden sm:inline-block w-px h-4 bg-[#FDFBF7]/30" />
              <span className="font-sans">Assurance RC pro · Crédit d'impôt 50%</span>
            </div>
          </div>

          {/* Logo cluster */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-4 items-end">
            <div className="bg-[#F2EBD9]/95 backdrop-blur p-7 rounded-3xl flex items-center gap-5 shadow-2xl">
              <img src={COMPANY.logos.jardiniers} alt="" className="w-24 h-24 object-contain" />
              <div>
                <p className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#1F3D2B]">Marque principale</p>
                <p className="font-serif text-xl text-[#0A0F0D] leading-tight mt-1">Les Jardiniers<br/>Normands</p>
              </div>
            </div>
            <div className="bg-[#F2EBD9]/95 backdrop-blur p-7 rounded-3xl flex items-center gap-5 shadow-2xl">
              <img src={COMPANY.logos.proElagage} alt="" className="w-24 h-20 object-contain" />
              <div>
                <p className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#1F3D2B]">Pôle technique</p>
                <p className="font-serif text-xl text-[#0A0F0D] leading-tight mt-1">Pro Élagage 14<br/>Calvados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* PHOTOS ÉLAGAGE — galerie */}
      <section className="py-24 sm:py-32" data-testid="elagage-gallery">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="max-w-2xl reveal">
              <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Pro Élagage 14 · Spécialiste arboricole</p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0F0D] font-light leading-[1.05] tracking-tight">
                L'art de l'élagage en
                <span className="italic"> milieu contraint</span>
              </h2>
            </div>
            <p className="lg:max-w-md text-[#4A5550] leading-relaxed reveal">
              Grimpeurs certifiés, équipements professionnels et techniques de démontage par rétention pour intervenir là où personne ne peut. Du jardin résidentiel au chantier complexe.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-6">
            {ELAGAGE_PHOTOS.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl reveal ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-[4/5]"}`}
              >
                <img
                  src={src}
                  alt={`Élagage Calvados — chantier ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D]/40 to-transparent" />
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/elagage-caen"
              className="inline-flex items-center justify-center gap-2 bg-[#1F3D2B] text-[#FDFBF7] px-8 py-4 rounded-full font-sans font-semibold text-base transition-all hover:bg-[#14281C] hover:-translate-y-1 hover:shadow-lg"
              data-testid="elagage-gallery-cta"
            >
              Voir nos prestations d'élagage <ArrowRight className="w-5 h-5" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 sm:py-32 bg-[#F4F1EA]" data-testid="services-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16 reveal">
            <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Nos prestations</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0F0D] font-light leading-tight tracking-tight">
              Tous les services pour
              <br className="hidden sm:block" /> un <em className="italic">extérieur d'exception</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.slug} className="reveal">
                <ServiceCard service={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-24 sm:py-32" data-testid="before-after-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 reveal">
            <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Avant / Après</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0F0D] font-light leading-tight tracking-tight mb-6">
              La transformation par <em className="italic">l'expertise</em>
            </h2>
            <p className="text-lg text-[#4A5550] mb-8 leading-relaxed">
              Glissez le curseur pour découvrir nos résultats. Chaque chantier raconte une métamorphose, du jardin laissé à l'abandon au paradis vert maîtrisé.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Diagnostic complet sur place",
                "Conception sur mesure & devis détaillé",
                "Équipe d'experts dédiée",
                "Évacuation complète des déchets",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1F3D2B] mt-0.5" strokeWidth={1.75} />
                  <span className="font-sans text-[#4A5550]">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/realisations" className="inline-flex items-center gap-2 text-[#1F3D2B] font-sans font-semibold link-underline" data-testid="ba-realisations-link">
              Voir toutes les réalisations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 reveal">
            <BeforeAfter
              before="https://customer-assets.emergentagent.com/job_paysage-caen-seo/artifacts/1d6uj5ep_abe%2026.jpg"
              after="https://images.pexels.com/photos/32500250/pexels-photo-32500250.jpeg?auto=compress&cs=tinysrgb&w=1400"
            />
          </div>
        </div>
      </section>

      <StatsBar />

      {/* VILLES */}
      <section className="py-24 sm:py-32 bg-[#FDFBF7]" data-testid="cities-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14 reveal">
            <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Zones d'intervention</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0F0D] font-light leading-tight tracking-tight mb-4">
              Tout le Calvados, <em className="italic">avec exigence</em>
            </h2>
            <p className="text-lg text-[#4A5550] max-w-2xl mx-auto">De Caen à la Côte Fleurie en passant par le Pays d'Auge, nos équipes locales sont à votre service.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{ slug: "caen", name: "Caen", distance: "Siège social" }, ...CITIES].map((c) => (
              <div key={c.slug} className="premium-card p-7 reveal" data-testid={`city-card-${c.slug}`}>
                <div className="flex items-start justify-between mb-4">
                  <MapPin className="w-7 h-7 text-[#1F3D2B]" strokeWidth={1.5} />
                  <span className="text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#4A5550]">{c.distance}</span>
                </div>
                <h3 className="font-serif text-2xl text-[#0A0F0D] mb-3">{c.name}</h3>
                <p className="text-sm text-[#4A5550] mb-5 leading-relaxed">{c.intro || "Intervention rapide et entretien sur mesure dans toute la ville et ses alentours."}</p>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {c.slug === "caen" ? (
                    <Link to="/paysagiste-caen" className="text-xs font-sans font-semibold text-[#1F3D2B] link-underline">Paysagiste {c.name} →</Link>
                  ) : (
                    <>
                      <Link to={`/paysagiste-${c.slug}`} className="text-xs font-sans font-semibold text-[#1F3D2B] link-underline">Paysagiste</Link>
                      <span className="text-[#E5E0D5]">·</span>
                      <Link to={`/jardinier-${c.slug}`} className="text-xs font-sans font-semibold text-[#1F3D2B] link-underline">Jardinier</Link>
                      <span className="text-[#E5E0D5]">·</span>
                      <Link to={`/elagage-${c.slug}`} className="text-xs font-sans font-semibold text-[#1F3D2B] link-underline">Élagage</Link>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 sm:py-32 bg-[#F4F1EA]" data-testid="testimonials-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14 reveal">
            <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Avis clients vérifiés</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0F0D] font-light leading-tight tracking-tight">
              <em className="italic">5 étoiles</em> sur Google
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 6).map((t, i) => (
              <div key={i} className="reveal">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviewBanner />

      {/* FAQ */}
      <section className="py-24 sm:py-32" data-testid="faq-section">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-14 reveal">
            <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Questions fréquentes</p>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0A0F0D] font-light leading-tight tracking-tight">Tout ce que vous voulez <em className="italic">savoir</em></h2>
          </div>
          <FAQAccordion items={GLOBAL_FAQ} />
        </div>
      </section>

      <CTASection
        title="Prêt à transformer votre extérieur ?"
        subtitle="Devis gratuit sous 24h. Sans engagement. Découvrez pourquoi nos clients du Calvados nous recommandent."
        accent="Demandez votre devis"
      />
    </>
  );
}
