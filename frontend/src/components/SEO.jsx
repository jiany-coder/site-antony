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
    opens: "08:00", closes: "19:00",
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
  },
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
});

export default SEO;
