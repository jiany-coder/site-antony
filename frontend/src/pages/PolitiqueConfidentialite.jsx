import React from "react";
import SEO from "../components/SEO";
import { COMPANY } from "../data/company";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SEO
        title={`Politique de confidentialité | ${COMPANY.brand}`}
        description="Politique de confidentialité et traitement des données personnelles conforme au RGPD sur le site Les Jardiniers Normands / Pro Élagage 14."
      />
      <section className="pt-32 pb-24 max-w-3xl mx-auto px-6 sm:px-8 lg:px-12" data-testid="politique-confidentialite-page">
        <h1 className="font-serif text-4xl sm:text-5xl text-[#0A0F0D] font-light tracking-tight mb-6">Politique de confidentialité</h1>
        <p className="text-sm text-[#4A5550] mb-10">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" })}</p>

        <div className="prose-blog">
          <p>La présente politique de confidentialité décrit la manière dont <strong>{COMPANY.legal?.name || "Les Jardiniers Normands"}</strong> (« nous », « notre », « nos ») collecte, utilise et protège les données personnelles des visiteurs et clients qui utilisent le site <a href={COMPANY.site}>{COMPANY.site}</a>, conformément au Règlement Général sur la Protection des Données (Règlement UE 2016/679, dit « RGPD ») et à la Loi Informatique et Libertés modifiée.</p>

          <h2>1. Responsable du traitement</h2>
          <p>
            <strong>{COMPANY.legal?.name || "Les Jardiniers Normands"}</strong><br />
            {COMPANY.address}<br />
            SIRET : {COMPANY.legal?.siret || "à compléter"}<br />
            Email de contact RGPD : <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a><br />
            Téléphone : <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a>
          </p>

          <h2>2. Données personnelles collectées</h2>
          <p>Nous collectons uniquement les données que vous nous transmettez volontairement via le <strong>formulaire de contact</strong> présent sur ce site :</p>
          <ul>
            <li><strong>Nom et prénom</strong> — obligatoire</li>
            <li><strong>Adresse email</strong> — obligatoire</li>
            <li><strong>Numéro de téléphone</strong> — obligatoire</li>
            <li><strong>Ville / commune</strong> — facultatif</li>
            <li><strong>Type de prestation souhaitée</strong> — facultatif</li>
            <li><strong>Message / description du projet</strong> — obligatoire</li>
          </ul>
          <p>Aucune donnée sensible (santé, orientation, opinions politiques ou religieuses, etc.) n'est collectée. Aucune donnée n'est collectée automatiquement à des fins de profilage ou de publicité ciblée.</p>

          <h2>3. Finalités et bases légales du traitement</h2>
          <ul>
            <li><strong>Répondre à votre demande de devis ou d'information</strong> — Base légale : mesures précontractuelles à votre demande (art. 6.1.b RGPD).</li>
            <li><strong>Gérer la relation commerciale</strong> si vous devenez client — Base légale : exécution du contrat (art. 6.1.b RGPD).</li>
            <li><strong>Répondre à nos obligations légales et comptables</strong> le cas échéant — Base légale : obligation légale (art. 6.1.c RGPD).</li>
          </ul>
          <p>Aucun traitement à des fins de prospection commerciale ne sera effectué sans votre consentement explicite préalable.</p>

          <h2>4. Destinataires des données</h2>
          <p>Vos données sont destinées <strong>exclusivement</strong> aux personnes habilitées de {COMPANY.legal?.name || "Les Jardiniers Normands"} en charge du traitement de votre demande.</p>
          <p>Elles peuvent être transmises aux sous-traitants techniques suivants, agissant uniquement selon nos instructions :</p>
          <ul>
            <li><strong>Resend, Inc.</strong> (USA) — service d'envoi d'emails transactionnels pour vous répondre. Traitement encadré par les Clauses Contractuelles Types adoptées par la Commission européenne.</li>
            <li><strong>Emergent Labs, Inc.</strong> (USA) — hébergement du site et de la base de données. Traitement encadré par les Clauses Contractuelles Types.</li>
          </ul>
          <p>Vos données <strong>ne sont jamais vendues, louées ou cédées</strong> à des tiers à des fins commerciales.</p>

          <h2>5. Durée de conservation</h2>
          <ul>
            <li><strong>Demandes sans suite commerciale</strong> : les données sont supprimées <strong>3 ans</strong> après le dernier contact.</li>
            <li><strong>Clients</strong> : les données commerciales sont conservées pendant toute la durée de la relation contractuelle, puis <strong>3 ans</strong> à compter de la fin de la relation, à des fins de prospection.</li>
            <li><strong>Obligations comptables et fiscales</strong> (factures, contrats) : <strong>10 ans</strong> conformément aux articles L.123-22 du Code de commerce et L.102 B du Livre des procédures fiscales.</li>
          </ul>

          <h2>6. Sécurité des données</h2>
          <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction : chiffrement HTTPS/TLS sur l'ensemble du site, base de données protégée par authentification, accès limité aux personnes habilitées.</p>

          <h2>7. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez à tout moment des droits suivants sur vos données personnelles :</p>
          <ul>
            <li><strong>Droit d'accès</strong> — obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> — corriger des données inexactes</li>
            <li><strong>Droit à l'effacement (« droit à l'oubli »)</strong></li>
            <li><strong>Droit à la limitation du traitement</strong></li>
            <li><strong>Droit à la portabilité</strong> de vos données</li>
            <li><strong>Droit d'opposition</strong> au traitement</li>
            <li><strong>Droit de définir des directives</strong> relatives au sort de vos données après votre décès</li>
          </ul>
          <p><strong>Comment exercer vos droits ?</strong> Adressez votre demande par email à <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> ou par courrier à l'adresse figurant en haut de cette page, accompagnée d'une pièce d'identité. Nous vous répondrons dans un délai maximum d'<strong>un mois</strong>.</p>
          <p>Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la <strong>CNIL</strong> — Commission Nationale de l'Informatique et des Libertés : <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">cnil.fr/fr/plaintes</a>.</p>

          <h2>8. Cookies et traceurs</h2>
          <p>Ce site <strong>n'utilise pas</strong> de cookies publicitaires, de cookies d'analyse tiers (Google Analytics, Meta Pixel, PostHog, etc.), ni d'outils de mesure d'audience nécessitant un consentement au titre de l'article 82 de la Loi Informatique et Libertés.</p>
          <p>Seuls des cookies strictement nécessaires au bon fonctionnement du site (session utilisateur, préférences techniques) peuvent être déposés — ceux-ci sont exemptés de consentement selon les recommandations de la CNIL.</p>

          <h2>9. Transferts hors Union européenne</h2>
          <p>Certains sous-traitants techniques (Resend, Emergent Labs) sont situés aux États-Unis. Les transferts de données sont encadrés par les <strong>Clauses Contractuelles Types</strong> approuvées par la Commission européenne (Décision (UE) 2021/914), garantissant un niveau de protection équivalent à celui de l'Union européenne.</p>

          <h2>10. Modifications de la politique</h2>
          <p>Cette politique de confidentialité peut être mise à jour à tout moment pour tenir compte des évolutions légales, réglementaires ou de nos pratiques. La date de dernière mise à jour figure en haut de cette page.</p>

          <h2>11. Contact</h2>
          <p>Pour toute question relative à la présente politique ou au traitement de vos données personnelles :</p>
          <p><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> · <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a></p>
        </div>
      </section>
    </>
  );
}
