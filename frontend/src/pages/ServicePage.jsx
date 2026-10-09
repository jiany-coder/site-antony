import React from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone, Star, Shield, Award, Clock, MapPin } from "lucide-react";
import SEO, { buildLocalBusinessSchema, buildFAQSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import { SERVICE_PHOTOS } from "../data/photos";
import { SERVICES, getService, ICONS } from "../data/services";
import { CITIES } from "../data/cities";
import { TESTIMONIALS } from "../data/testimonials";
import { GLOBAL_FAQ } from "../data/faq";
import FAQAccordion from "../components/FAQAccordion";
import TestimonialCard from "../components/TestimonialCard";
import ContactForm from "../components/ContactForm";
import CTASection from "../components/CTASection";

const SERVICE_DETAILS = {
  "tonte-pelouse-caen": {
    intro: "Une pelouse bien tondue change tout l'aspect d'un jardin. À Caen et dans le Calvados, Les Jardiniers Normands assurent la tonte de votre pelouse, au rythme qui vous convient : un passage régulier toute la saison ou une intervention ponctuelle pour remettre un terrain en état.",
    benefits: [
      "Passage régulier ou intervention ponctuelle",
      "Finitions des bordures et des angles",
      "Ramassage et évacuation de l'herbe coupée",
      "Hauteur de coupe adaptée à la saison et à votre pelouse",
      "Devis gratuit, intervention sous 24 h après acceptation du devis",
    ],
    sections: [
      {
        h: "Tonte de pelouse à Caen : comment ça se passe ?",
        p: "Après un devis gratuit, nous convenons avec vous de la fréquence de passage, selon la surface, la saison et l'usage de votre pelouse. À chaque intervention, nous tondons, soignons les bordures et les angles, puis nous nettoyons les allées et terrasses. L'herbe coupée peut être ramassée et évacuée, ou laissée sur place en mulching selon votre préférence.",
      },
      {
        h: "Quelle fréquence de tonte choisir ?",
        p: "En pleine croissance, au printemps et au début de l'automne, un passage toutes les une à deux semaines garde une pelouse dense et régulière. En été sec, la tonte se fait plus haute et plus espacée pour protéger le gazon. Nous adaptons le rythme à votre jardin plutôt que d'appliquer un calendrier unique.",
      },
      {
        h: "Une pelouse laissée trop longtemps : pas de problème",
        p: "Si l'herbe a pris de la hauteur ou si le terrain n'a pas été entretenu depuis un moment, nous reprenons la pelouse en plusieurs étapes, avec un débroussaillage si nécessaire, avant de passer à un entretien régulier. Nous pouvons aussi associer la tonte à la taille de vos haies et à l'entretien de vos massifs, pour un extérieur propre en une seule venue.",
      },
      {
        h: "Où intervenons-nous ?",
        p: "Nous intervenons à Caen, Hérouville-Saint-Clair, Mondeville, Ifs, Bayeux, Ouistreham, Lisieux, Falaise, Deauville et dans les communes alentours du Calvados. Appelez-nous au 07 80 04 43 90 ou demandez votre devis gratuit en ligne.",
      },
    ],
  },
  "paysagiste-caen": {
    intro: "À Caen, faire appel à un paysagiste compétent transforme radicalement votre extérieur. Notre équipe Les Jardiniers Normands conçoit, aménage et entretient des jardins sur mesure dans toute la métropole caennaise.",
    benefits: [
      "Conception personnalisée 2D / 3D avant chantier",
      "Plantation d'essences adaptées au climat normand",
      "Massifs, haies, arbres et engazonnement",
      "Choix de végétaux adaptés au sol et à l'exposition",
      "Suivi et entretien la première année",
    ],
    sections: [
      {
        h: "Pourquoi choisir un paysagiste à Caen ?",
        p: "Caen présente des spécificités paysagères uniques : sols calcaires, climat océanique humide, vents salés sur la côte. Un paysagiste local connaît les essences qui prospèrent réellement dans le Calvados : hortensias d'Annabelle, érables japonais, sauges, graminées. Nous évitons les erreurs classiques (plantation de méditerranéennes inadaptées, drainage insuffisant) et concevons un jardin durable.",
      },
      {
        h: "Notre démarche paysagère",
        p: "Tout commence par un rendez-vous gratuit chez vous. Nous analysons votre terrain : exposition, sol, contraintes, mitoyenneté, PLU. Nous écoutons vos envies, votre budget, votre rythme de vie. Une esquisse est proposée rapidement, puis affinée jusqu'au plan définitif. Le chantier démarre selon le planning convenu, avec un chef de chantier dédié.",
      },
      {
        h: "Création de jardin sur mesure à Caen",
        p: "Du petit jardin de ville (50 m²) au grand parc privé (5 000+ m²), nous adaptons notre savoir-faire. Jardins contemporains épurés, jardins anglais luxuriants, espaces de détente avec piscine et pool house, jardins zen ou méditerranéens revisités pour la Normandie : chaque projet est unique.",
      },
      {
        h: "Plantations, massifs et engazonnement",
        p: "Au-delà des plantations, nous réalisons les éléments végétaux qui structurent votre jardin : massifs, haies, arbres et arbustes, engazonnement, paillage. Tous les végétaux sont choisis pour leur robustesse et leur esthétique.",
      },
    ],
  },
  "jardinier-caen": {
    intro: "Un jardinier professionnel à Caen, c'est l'assurance d'un jardin impeccable toute l'année, sans stress et sans matériel à acheter. Les Jardiniers Normands proposent un entretien régulier ou ponctuel, adapté à votre rythme et à votre budget, dans toute l'agglomération caennaise.",
    benefits: [
      "Contrat annuel d'entretien sur mesure (forfait mensuel)",
      "Prestations ponctuelles : remise en état, débroussaillage",
      "Devis gratuit, intervention sous 24 h après acceptation",
      "Matériel professionnel et entretenu (sécurité maximale)",
      "Évacuation et recyclage des déchets verts inclus",
    ],
    sections: [
      {
        h: "Que comprend l'intervention d'un jardinier à Caen ?",
        p: "Notre offre de jardinier couvre l'ensemble de l'entretien courant : tonte régulière de pelouse (hauteur adaptée saison par saison), taille des haies de tous types (charme, hêtre, thuya, laurier, photinia…), désherbage manuel ou mécanique, soin et fertilisation des massifs, ramassage et compostage des feuilles mortes, scarification du gazon, plantation de bulbes et de saisonnières. Nous adaptons chaque passage à l'état réel de votre jardin et à la saison.",
      },
      {
        h: "Contrat annuel ou prestation ponctuelle ?",
        p: "Le contrat annuel est notre formule la plus appréciée à Caen : un calendrier de passages programmés (mensuel, bimensuel, quinzaine) selon votre surface, avec un référent unique qui connaît votre jardin. Vous bénéficiez d'un suivi régulier, d'un tarif fixe sur l'année. La prestation ponctuelle convient si votre jardin a besoin d'une remise en état avant une vente, après les vacances, ou pour un événement.",
      },
      {
        h: "Un entretien qui s'adapte à votre rythme",
        p: "Tonte, taille de haie, débroussaillage, désherbage : nous fixons ensemble la fréquence des passages et le périmètre des travaux. Pour un particulier, certaines prestations d'entretien peuvent ouvrir droit, sous conditions, au crédit d'impôt service à la personne : demandez-nous si votre cas est concerné.",
      },
      {
        h: "Notre méthode jardinier à Caen",
        p: "Premier rendez-vous gratuit chez vous : nous évaluons votre jardin, identifions les zones critiques, écoutons vos attentes. Devis détaillé et gratuit. Une fois validé, votre jardinier référent passe selon le planning convenu, avec son matériel professionnel (tondeuses autoportées, taille-haie thermique, débroussailleuses). En fin de prestation, le jardin est laissé propre, déchets verts évacués et recyclés. Vous recevez un compte-rendu après chaque passage.",
      },
      {
        h: "Pourquoi choisir Les Jardiniers Normands à Caen ?",
        p: "Notre force est notre ancrage local. Nous connaissons chaque quartier de Caen — Vaucelles, Saint-Jean, Calvaire-Saint-Pierre, Haie Vigné, Pierre Heuzé, Beaulieu — et adaptons nos passages aux particularités de chacun. Notre équipe est stable (peu de turnover), nos jardiniers sont expérimentés et équipés. Nous travaillons aussi pour des copropriétés, syndics et entreprises avec des contrats sur-mesure.",
      },
    ],
  },
  "elagage-caen": {
    intro: "Pro Élagage 14, branche spécialisée des Jardiniers Normands, intervient dans toute la région caennaise pour l'élagage de précision, la taille raisonnée et la sécurisation d'arbres en milieu urbain comme rural.",
    benefits: [
      "Grimpeurs équipés (cordes, harnais EN)",
      "Taille douce / raisonnée selon les essences",
      "Démontage par rétention en milieu contraint",
      "Évacuation et broyage des déchets verts",
      "Assurance RC professionnelle obligatoire",
    ],
    sections: [
      {
        h: "Qu'est-ce qu'un élagage de qualité à Caen ?",
        p: "Un bon élagage ne se résume pas à 'couper haut'. Il s'agit d'une intervention raisonnée qui respecte la physiologie de l'arbre : équilibre houppier, suppression des bois morts, dégagement de toiture ou ligne, taille architecturée. Nous appliquons les principes de la taille douce (Christophe Drénou) : limiter le nombre de coupes, privilégier les diamètres < 5 cm, respecter les bourrelets cicatriciels.",
      },
      {
        h: "Périodes d'élagage idéales",
        p: "En Calvados, la majorité des feuillus (chênes, hêtres, frênes, érables) se taillent en hiver, hors gel intense. Les fruitiers à noyau (cerisiers, pruniers) se taillent en été après récolte. Les conifères (thuyas, cyprès) au printemps. Nous planifions vos interventions selon le calendrier optimal pour chaque essence.",
      },
      {
        h: "Élagage en milieu contraint",
        p: "Notre spécialité : intervenir là où une nacelle ne passe pas. Cour intérieure, jardin clos, proximité de bâti ou de lignes électriques. Nos grimpeurs descendent les sections par rétention (cordage de freinage) afin de ne rien endommager.",
      },
      {
        h: "Sécurité, assurance, conformité",
        p: "Toutes nos prestations sont couvertes par une assurance Responsabilité Civile Professionnelle. Nos équipes sont équipées EPI (casque visière, jambières anti-coupure, harnais Petzl), expérimentées. Nous respectons strictement la réglementation environnementale (taille hors période de nidification quand possible).",
      },
    ],
  },
  "entretien-exterieur-caen": {
    intro: "Confiez tout votre extérieur à un seul interlocuteur de confiance. À Caen, Les Jardiniers Normands proposent une offre globale d'entretien extérieur : entretien jardin, taille de haies, élagage, abattage, dessouchage. Une seule équipe, un seul devis, une qualité d'exécution constante.",
    benefits: [
      "Un interlocuteur unique pour tous vos travaux extérieurs",
      "Devis global ou par lot, parfaitement transparent",
      "Coordination des interventions (planning groupé)",
      "Économies sur les frais de déplacement",
      "Contrat de maintenance annuel possible",
    ],
    sections: [
      {
        h: "Qu'inclut l'entretien extérieur global à Caen ?",
        p: "Notre offre d'entretien extérieur à Caen est conçue comme un service clé en main. Elle comprend l'entretien du jardin (tonte, désherbage, soin des massifs), la taille des haies, l'élagage et l'abattage des arbres, le dessouchage mécanique, le ramassage automnal des feuilles, la mise en hiver des plantations sensibles. Bref, tout ce qui concerne vos espaces verts et arbres autour de votre maison ou de votre copropriété.",
      },
      {
        h: "Pourquoi un seul prestataire pour tout votre extérieur ?",
        p: "Faire appel à plusieurs entreprises (paysagiste, élagueur, jardinier) coûte plus cher, complexifie la coordination et multiplie les contacts. En centralisant chez Les Jardiniers Normands à Caen, vous gagnez du temps, vous obtenez de meilleurs tarifs (mutualisation des déplacements et des moyens) et vous bénéficiez d'une cohérence d'exécution. Un seul devis, un seul numéro, un seul interlocuteur.",
      },
      {
        h: "Contrat de maintenance annuel : la tranquillité d'esprit",
        p: "Notre formule la plus complète à Caen : un contrat annuel personnalisé qui planifie automatiquement toutes les interventions sur 12 mois. Tonte de mars à novembre, taille des haies en juin et septembre, élagage en hiver, ramassage feuilles en automne, mise en hiver. Vous n'avez plus à y penser : nous gérons tout selon le calendrier optimal de chaque prestation. Tarif fixe mensuel, ajustable.",
      },
      {
        h: "Pour qui ? Particuliers, copropriétés, entreprises à Caen",
        p: "Notre offre d'entretien extérieur s'adresse aussi bien aux particuliers de Caen (maisons individuelles, propriétés avec piscine, biens haut de gamme) qu'aux copropriétés (syndics, ASL) et aux entreprises (sièges sociaux, sites industriels, hôtels). Nous adaptons les passages et les forfaits à la nature du site et à son niveau d'exigence.",
      },
      {
        h: "Tarifs entretien extérieur à Caen",
        p: "Notre tarification est transparente, sans surprise. Pour un jardin résidentiel classique (300 à 500 m²) avec entretien régulier + 2 tailles de haie + un élagage annuel, comptez entre 80 et 250 €/mois lissés sur l'année. Devis personnalisé et gratuit. Pour un particulier, la partie entretien courant peut ouvrir droit, sous conditions, au crédit d'impôt service à la personne : demandez-nous si votre cas est concerné.",
      },
    ],
  },
};

const DEFAULT_SECTIONS = (service) => [
  {
    h: `Pourquoi confier votre ${service.title.toLowerCase()} à un professionnel ?`,
    p: `Confier un ${service.title.toLowerCase()} à une entreprise locale, c'est s'assurer d'un travail de qualité, sécurisé et garanti. Notre équipe Les Jardiniers Normands intervient dans tout le Calvados avec des outils professionnels, une assurance Responsabilité Civile pro et une connaissance fine du terrain normand. Pas d'improvisation : un savoir-faire éprouvé et reconnu.`,
  },
  {
    h: `Notre méthode pour un ${service.title.toLowerCase()} parfait`,
    p: `Tout commence par un diagnostic gratuit chez vous. Nous évaluons précisément les travaux à réaliser, les contraintes (accessibilité, voisinage, réglementation), votre budget et vos attentes. Nous rédigeons un devis détaillé et gratuit. Une fois validé, l'intervention est planifiée à votre convenance, avec nettoyage complet du chantier et évacuation des déchets verts.`,
  },
  {
    h: `Tarifs ${service.title.toLowerCase()} dans le Calvados`,
    p: `Nos tarifs sont transparents, sans surprise. Nous appliquons des prix justes basés sur la difficulté réelle du chantier (volume, accès, hauteur, contraintes spécifiques). Le devis est toujours gratuit et sans engagement. Pour un particulier, l'entretien courant du jardin peut ouvrir droit, sous conditions, au crédit d'impôt service à la personne : demandez-nous.`,
  },
  {
    h: `Zone d'intervention dans le Calvados`,
    p: `Nous intervenons à Caen, Hérouville-Saint-Clair, Mondeville, Ifs, Bayeux, Deauville, Trouville-sur-Mer, Lisieux, Falaise, Argences, Ouistreham, Courseulles-sur-Mer et toutes les communes alentours. Notre rayon d'action couvre tout le département du Calvados (14) avec une réactivité maximale.`,
  },
];

export default function ServicePage() {
  const { pathname } = useLocation();
  const slug = pathname.slice(1); // remove leading slash
  const service = getService(slug);

  if (!service) return <Navigate to="/" replace />;

  const Icon = ICONS[service.icon] || ICONS.Leaf;
  const details = SERVICE_DETAILS[slug] || {
    intro: `${service.title} — ${service.short} Notre équipe Les Jardiniers Normands / Pro Élagage 14 intervient dans tout le Calvados avec exigence et savoir-faire.`,
    benefits: [
      "Devis gratuit sous 24h",
      "Équipe locale qualifiée",
      "Matériel professionnel",
      "Assurance RC professionnelle",
      "Évacuation des déchets incluse",
    ],
    sections: DEFAULT_SECTIONS(service),
  };

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`${COMPANY.site}/${slug}`}
        image={service.image.startsWith("/") ? `${COMPANY.site}${service.image}` : service.image}
        jsonLd={[buildLocalBusinessSchema(), buildFAQSchema(GLOBAL_FAQ)]}
      />

      {/* HERO */}
      <section className="relative min-h-[68vh] flex items-end" data-testid="service-hero">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.h1} className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 w-full">
          <Link to="/" className="text-sm text-[#F2EBD9]/80 hover:text-[#F2EBD9] font-sans">← Accueil</Link>
          <div className="inline-flex items-center gap-2 bg-[#F2EBD9]/15 backdrop-blur-md border border-[#F2EBD9]/30 px-4 py-2 rounded-full mt-6 mb-6">
            <Icon className="w-4 h-4 text-[#F2EBD9]" strokeWidth={1.75} />
            <span className="text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#F2EBD9]">{service.brand === "proElagage" ? "Pro Élagage 14" : "Les Jardiniers Normands"} · Caen</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-light leading-[1] tracking-tight text-[#FDFBF7] max-w-4xl">{service.h1}</h1>
          <p className="text-lg sm:text-xl text-[#FDFBF7]/85 max-w-2xl mt-7 leading-relaxed">{details.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#F2EBD9] text-[#1F3D2B] px-8 py-4 rounded-full font-sans font-semibold text-base transition-all hover:bg-white hover:-translate-y-1 hover:shadow-xl"
              data-testid="service-hero-cta"
            >
              Devis gratuit <ArrowRight className="w-5 h-5" strokeWidth={1.75} />
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[#FDFBF7] px-8 py-4 rounded-full font-sans font-semibold text-base border-2 border-[#F2EBD9]/40 transition-all hover:bg-[#F2EBD9] hover:text-[#1F3D2B]"
            >
              <Phone className="w-5 h-5" strokeWidth={1.75} /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 sm:py-28 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Nos engagements</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A0F0D] font-light leading-tight tracking-tight mb-6">
              Pourquoi nous choisir pour votre <em className="italic">{service.title.toLowerCase()}</em> ?
            </h2>
            <p className="text-lg text-[#4A5550] leading-relaxed mb-8">
              Une équipe d'experts locaux, un matériel professionnel et un engagement total sur la qualité d'exécution.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {details.benefits.map((b, i) => (
                <div key={i} className="bg-white border border-[#E5E0D5] p-6 rounded-2xl flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#1F3D2B] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-[#0A0F0D] font-sans font-medium leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT SECTIONS */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 prose-blog">
          {details.sections.map((s, i) => (
            <article key={i} className="mb-12 reveal">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-medium tracking-tight mb-5 leading-tight">{s.h}</h2>
              <p className="text-lg text-[#4A5550] leading-[1.75]">{s.p}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CHANTIERS RÉELS */}
      {SERVICE_PHOTOS[slug] && (
        <section className="py-20 bg-[#F4F1EA]" data-testid="service-photos">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-light mb-10">Nos chantiers à Caen</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {SERVICE_PHOTOS[slug].map((p, i) => (
                <div key={i} className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {TESTIMONIALS.length > 0 && (
      <section className="py-20 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A0F0D] font-light leading-tight">Ils nous ont fait <em className="italic">confiance</em></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </section>
      )}

      {/* FORM + FAQ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Questions fréquentes</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0A0F0D] font-light leading-tight mb-8">Tout savoir sur cette prestation</h2>
            <FAQAccordion items={GLOBAL_FAQ} />
          </div>
          <div className="lg:col-span-5">
            <div className="premium-card p-8 sticky top-28">
              <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-3">Devis gratuit</p>
              <h3 className="font-serif text-3xl text-[#0A0F0D] mb-6">Demandez votre devis pour {service.title.toLowerCase()}</h3>
              <ContactForm defaultService={service.title} defaultCity="Caen" />
            </div>
          </div>
        </div>
      </section>

      {/* AUTRES SERVICES */}
      <section className="py-20 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-light mb-10">Nos autres prestations dans le Calvados</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherServices.map((s) => (
              <Link key={s.slug} to={`/${s.slug}`} className="bg-white p-5 rounded-2xl border border-[#E5E0D5] hover:border-[#1F3D2B] transition-colors">
                <p className="font-serif text-lg text-[#0A0F0D] leading-tight">{s.title}</p>
                <p className="text-xs text-[#1F3D2B] mt-3 font-sans font-semibold">Découvrir →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Demandez votre devis gratuit" subtitle="Réponse sous 24h. Sans engagement." />
    </>
  );
}
