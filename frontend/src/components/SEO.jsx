import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { COMPANY } from "../data/company";

const SEO = ({
  title,
  description,
  canonical,
  image,
  type = "website",
  jsonLd,
  noindex = false,
}) => {
  const location = useLocation();
  const fullTitle = title || `${COMPANY.brand} | Paysagiste, Jardinier, Élagueur dans le Calvados`;
  const desc = description || `Paysagiste, jardinier et élagueur professionnel à Caen et dans tout le Calvados. Devis gratuit ☎ ${COMPANY.phone}`;
  const path = location.pathname === "/" ? "/" : location.pathname.replace(/\/$/, "");
  const url = canonical || `${COMPANY.site}${path}`;
  const img = image || COMPANY.logos.jardiniers;

  // Prérendu (build) : on mémorise les balises de la page pour les écrire dans le HTML statique.
  if (typeof window === "undefined") {
    globalThis.__HEAD__ = { title: fullTitle, desc, url, img, type, noindex, jsonLd };
    return null;
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"} />
      <meta name="author" content={COMPANY.brand} />
      <meta name="geo.region" content="FR-14" />
      <meta name="geo.placename" content="Caen, Calvados, Normandie" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={COMPANY.brand} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export const buildLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${COMPANY.site}/#business`,
  name: COMPANY.brand,
  alternateName: COMPANY.subBrand,
  image: COMPANY.logos.jardiniers,
  url: COMPANY.site,
  telephone: COMPANY.phoneRaw,
  email: COMPANY.email,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.streetAddress,
    addressLocality: COMPANY.city,
    postalCode: COMPANY.postalCode,
    addressRegion: COMPANY.region,
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 49.1829, longitude: -0.3707 },
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    opens: "08:00", closes: "20:00",
  }],
  areaServed: [
    { "@type": "City", name: "Caen" },
    { "@type": "City", name: "Deauville" },
    { "@type": "City", name: "Trouville-sur-Mer" },
    { "@type": "City", name: "Lisieux" },
    { "@type": "City", name: "Falaise" },
    { "@type": "City", name: "Argences" },
    { "@type": "City", name: "Ouistreham" },
    { "@type": "AdministrativeArea", name: "Calvados" },
  ],
  sameAs: [COMPANY.social.gbp, COMPANY.social.gbpElagage],
  knowsAbout: ["Élagage", "Taille de haie", "Tonte de pelouse", "Entretien de jardin", "Entretien extérieur", "Paysagisme", "Abattage d'arbre", "Dessouchage"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de jardinage, paysagisme et élagage à Caen",
    itemListElement: [
      ["Élagage", "/elagage-caen"], ["Taille de haie", "/taille-haie-caen"], ["Tonte de pelouse", "/tonte-pelouse-caen"],
      ["Entretien de jardin", "/entretien-jardin-caen"], ["Entretien extérieur", "/entretien-exterieur-caen"],
      ["Jardinier", "/jardinier-caen"], ["Paysagiste", "/paysagiste-caen"], ["Abattage d'arbre", "/abattage-arbre-caen"], ["Dessouchage", "/dessouchage-caen"],
    ].map(([n, u]) => ({ "@type": "Offer", url: `${COMPANY.site}${u}`, itemOffered: { "@type": "Service", name: n, areaServed: "Caen, Calvados" } })),
  },
  taxID: COMPANY.legal.siret,
});

export const buildBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })),
});

export const buildPageSchema = (type, name, url, description, extra = {}) => ({
  "@context": "https://schema.org",
  "@type": type,
  name,
  url,
  description,
  inLanguage: "fr-FR",
  isPartOf: { "@type": "WebSite", name: COMPANY.brand, url: COMPANY.site },
  about: { "@id": `${COMPANY.site}/#business` },
  ...extra,
});

export const buildFAQSchema = (faq) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const buildArticleSchema = (post) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  image: [post.cover],
  datePublished: post.date,
  dateModified: post.date,
  author: { "@type": "Organization", name: COMPANY.brand },
  publisher: { "@type": "Organization", name: COMPANY.brand, logo: { "@type": "ImageObject", url: COMPANY.logos.jardiniers } },
  description: post.excerpt,
  mainEntityOfPage: `${COMPANY.site}/blog/${post.slug}`,
  inLanguage: "fr-FR",
  articleSection: post.category,
});

export default SEO;
