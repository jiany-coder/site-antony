# PRD — Les Jardiniers Normands / Pro Élagage 14

## Problem statement
Créer un site internet PREMIUM extrêmement optimisé pour le référencement naturel local pour Les Jardiniers Normands (marque principale) et Pro Élagage 14 (branche élagage/abattage/technique), avec pour objectif de DOMINER GOOGLE sur les recherches paysagiste/jardinier/élagage dans le Calvados (Caen, Deauville, Trouville, Lisieux, Falaise, Argences, Ouistreham...).

## User personas
- **Particulier propriétaire à Caen / Calvados** : cherche un paysagiste ou jardinier de confiance, devis rapide.
- **Propriétaire de villa à Deauville / Trouville** : exige du haut de gamme, exécution irréprochable.
- **Copropriété / syndic** : recherche contrat d'entretien annuel.
- **Particulier avec arbre dangereux** : demande d'élagage / abattage en urgence.

## Architecture & stack
- **Frontend**: React 19 + react-router-dom + react-helmet-async + sonner + framer-motion + lucide-react + Tailwind + Shadcn UI
- **Backend**: FastAPI + Motor (MongoDB) + Resend (envoi email)
- **DB**: MongoDB (collection `contacts`)
- **Email**: Resend API → schmittantony4@gmail.com
- **SEO**: react-helmet par page, JSON-LD LocalBusiness, FAQPage, Article, sitemap.xml (41 URLs), robots.txt, meta géolocalisation FR-14

## Routes implémentées (V1)
- `/` Accueil premium SEO complet
- 11 pages services Caen : `/paysagiste-caen`, `/jardinier-caen`, `/elagage-caen`, `/abattage-arbre-caen`, `/dessouchage-caen`, `/demoussage-toiture-caen`, `/nettoyage-facade-caen`, `/nettoyage-pignon-caen`, `/taille-haie-caen`, `/entretien-jardin-caen`, `/entretien-exterieur-caen`
- 12 pages villes : `/paysagiste-{ville}` & `/jardinier-{ville}` pour Deauville, Trouville, Lisieux, Falaise, Argences, Ouistreham
- `/blog` + 12 articles SEO longue traîne (`/blog/:slug`)
- `/a-propos`, `/realisations`, `/contact`, `/mentions-legales`

## Implemented (28 Feb 2026)
- ✅ Header sticky glass + 2 logos (logo Pro Élagage retiré du desktop par lisibilité, présent dans hero)
- ✅ Hero magazine éditorial avec photo paysagiste plein écran + double badge logo
- ✅ Trust bar 6 items (Assurance, Devis gratuit, Intervention rapide, 10+ ans, Élagueurs certifiés, Crédit d'impôt)
- ✅ Galerie 6 photos d'élagage (bento layout)
- ✅ Cards services premium avec lucide icons
- ✅ Before/After slider draggable
- ✅ Stats bar Calvados
- ✅ Villes grid + zones desservies maillage interne
- ✅ Testimonials 9 avis 5★ (style avis Google)
- ✅ FAQ accordion Shadcn
- ✅ CTASection bottom universal
- ✅ 12 articles blog SEO (800-1200 mots chacun, markdown rendu)
- ✅ Formulaire contact avec envoi email Resend → schmittantony4@gmail.com (TESTÉ, fonctionne)
- ✅ Floating CTA WhatsApp + téléphone
- ✅ Footer riche maillage interne (services × villes × pages)
- ✅ SEO complet: meta dynamiques, canonical, OG, Twitter, JSON-LD LocalBusiness/FAQPage/Article, sitemap.xml 41 URLs, robots.txt
- ✅ Typographie premium Cormorant Garamond (serif) + Manrope (sans)

## Backlog (post-V1)
- **P1**: Page admin pour consulter les leads (`/admin/contacts`) avec authentification simple
- **P1**: Génération sitemap.xml dynamique côté serveur
- **P1**: Galerie réalisations admin pour upload photos
- **P2**: Domaine personnalisé + vérification DNS Resend (sortir du test mode)
- **P2**: Google Reviews widget temps réel via API Google Places
- **P2**: Variantes SEO supplémentaires (entretien-jardin-deauville, élagage-lisieux, etc.)
- **P2**: Blog admin pour ajouter des articles via interface

## Credentials
- Resend API key: configurée dans `/app/backend/.env`
- Sender: `onboarding@resend.dev` (test mode)
- Owner email: `schmittantony4@gmail.com`
