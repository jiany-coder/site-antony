import React from "react";
import SEO from "../components/SEO";
import { COMPANY } from "../data/company";

export default function MentionsLegales() {
  return (
    <>
      <SEO
        title={`Mentions légales | ${COMPANY.brand}`}
        description="Mentions légales et informations éditeur du site Les Jardiniers Normands / Pro Élagage 14."
        canonical={`${COMPANY.site}/mentions-legales`}
        noindex
      />
      <section className="pt-32 pb-24 max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="font-serif text-4xl sm:text-5xl text-[#0A0F0D] font-light tracking-tight mb-10">Mentions légales</h1>
        <div className="prose-blog">
          <h2>Éditeur du site</h2>
          <p>Les Jardiniers Normands / Pro Élagage 14<br />Adresse : {COMPANY.address}<br />Téléphone : {COMPANY.phone}<br />Email : {COMPANY.email}</p>

          <h2>Hébergement</h2>
          <p>Le site est hébergé chez Emergent / OVH (à compléter).</p>

          <h2>Propriété intellectuelle</h2>
          <p>L'ensemble du contenu du site (textes, images, logos, mise en page) est protégé par le droit d'auteur. Toute reproduction sans autorisation est interdite.</p>

          <h2>Protection des données personnelles</h2>
          <p>Les données collectées via le formulaire de contact sont utilisées uniquement pour vous recontacter dans le cadre de votre demande. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit : {COMPANY.email}.</p>

          <h2>Cookies</h2>
          <p>Le site n'utilise pas de cookies de traçage publicitaire. Seuls des cookies techniques essentiels au fonctionnement du site peuvent être déposés.</p>

          <h2>Crédits</h2>
          <p>Photographies : Unsplash, Pexels (licences libres). Conception & développement : équipe Les Jardiniers Normands.</p>
        </div>
      </section>
    </>
  );
}
