import React from "react";
import SEO from "../components/SEO";
import { COMPANY } from "../data/company";

export default function MentionsLegales() {
  return (
    <>
      <SEO
        title={`Mentions légales | ${COMPANY.brand}`}
        description="Mentions légales, informations éditeur, hébergement et coordonnées légales du site Les Jardiniers Normands / Pro Élagage 14."
      />
      <section className="pt-32 pb-24 max-w-3xl mx-auto px-6 sm:px-8 lg:px-12" data-testid="mentions-legales-page">
        <h1 className="font-serif text-4xl sm:text-5xl text-[#0A0F0D] font-light tracking-tight mb-10">Mentions légales</h1>
        <div className="prose-blog">
          <p className="text-sm text-[#4A5550]">Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique (LCEN), il est porté à la connaissance des utilisateurs du site les informations suivantes.</p>

          <h2>Éditeur du site</h2>
          <p>
            <strong>Raison sociale :</strong> {COMPANY.legal?.name || "Les Jardiniers Normands"}<br />
            <strong>Forme juridique :</strong> {COMPANY.legal?.form || "Entreprise individuelle"}<br />
            <strong>Enseignes commerciales :</strong> Les Jardiniers Normands · Pro Élagage 14<br />
            <strong>Adresse du siège :</strong> {COMPANY.address}<br />
            <strong>SIRET :</strong> {COMPANY.legal?.siret || "SIRET à compléter"}<br />
            <strong>Numéro de TVA intracommunautaire :</strong> {COMPANY.legal?.tva || "N° TVA à compléter"}<br />
            <strong>Téléphone :</strong> <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a><br />
            <strong>Email :</strong> <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </p>

          <h2>Directeur / Responsable de la publication</h2>
          <p>
            <strong>{COMPANY.legal?.publisher || "Antony Schmitt"}</strong>, en qualité de dirigeant de l'entreprise.<br />
            Contact : <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </p>

          <h2>Hébergeur du site</h2>
          <p>
            <strong>Emergent Labs, Inc.</strong><br />
            548 Market St, PMB 17605<br />
            San Francisco, CA 94104, États-Unis<br />
            Site web : <a href="https://emergent.sh" target="_blank" rel="noopener noreferrer">https://emergent.sh</a><br />
            Le site est délivré via le CDN Cloudflare, Inc. — 101 Townsend St, San Francisco, CA 94107, États-Unis.
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>L'ensemble des contenus présents sur ce site (textes, structure, images, logos, graphismes, code source, mise en page, base de données) est protégé par les dispositions du Code de la propriété intellectuelle et appartient à {COMPANY.legal?.name || "Les Jardiniers Normands"} ou à ses partenaires. Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du site ou de son contenu, par quelque procédé que ce soit, sans autorisation écrite préalable de l'éditeur, est interdite et constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.</p>

          <h2>Protection des données personnelles</h2>
          <p>Le traitement des données personnelles collectées via ce site est détaillé dans notre <a href="/politique-de-confidentialite">Politique de confidentialité</a>. Conformément au Règlement Général sur la Protection des Données (RGPD, UE 2016/679) et à la Loi Informatique et Libertés modifiée, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données. Pour exercer ces droits : <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.</p>

          <h2>Cookies</h2>
          <p>Ce site n'utilise ni cookies de traçage publicitaire, ni cookies d'analyse tiers, ni outils de mesure d'audience nécessitant votre consentement. Seuls des cookies strictement techniques nécessaires au fonctionnement du site (session, préférences) peuvent être déposés, conformément à l'article 82 de la Loi Informatique et Libertés.</p>

          <h2>Litiges et droit applicable</h2>
          <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, et après tentative de résolution amiable, compétence exclusive est attribuée aux tribunaux compétents du ressort de la Cour d'appel de Caen.</p>

          <h2>Crédits</h2>
          <p>Photographies : chantiers Les Jardiniers Normands / Pro Élagage 14 et banques d'images sous licence (Unsplash, Pexels). Conception & développement : équipe Les Jardiniers Normands.</p>

          <p className="text-xs text-[#4A5550] mt-8">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}.</p>
        </div>
      </section>
    </>
  );
}
