# PRD — Les Jardiniers Normands / Pro Élagage 14

## Problem statement
Créer un site internet PREMIUM extrêmement optimisé pour le référencement naturel local pour Les Jardiniers Normands (marque principale) et Pro Élagage 14 (branche élagage/abattage/technique), avec pour objectif de DOMINER GOOGLE sur les recherches paysagiste/jardinier/élagage dans le Calvados.

## User personas
- Particulier propriétaire à Caen / Calvados
- Propriétaire de villa à Deauville / Trouville
- Copropriété / syndic
- Particulier avec arbre dangereux (élagage / abattage en urgence)

## Architecture & stack
- **Frontend**: React 19 + react-router-dom 7 + react-helmet-async + sonner + framer-motion + lucide-react + Tailwind + Shadcn UI
- **Backend**: FastAPI + Motor (MongoDB) + Resend (envoi email)
- **DB**: MongoDB (collection `contacts`)
- **Email**: Resend API → schmittantony4@gmail.com
- **SEO**: react-helmet par page, JSON-LD LocalBusiness, FAQPage, Article, sitemap.xml (47 URLs), robots.txt

## Routes (V1.1)
- `/` Accueil premium SEO
- 11 pages services Caen (toutes hardcodées)
- 18 pages villes : paysagiste-, jardinier-, elagage- × 6 villes (deauville, trouville, lisieux, falaise, argences, ouistreham)
- `/blog` + 12 articles
- `/a-propos`, `/realisations`, `/contact`, `/mentions-legales`

## Implemented & Iterations
### V1 (28 Feb 2026)
- Site complet : 11 services + 12 villes + 12 blog articles + pages annexes
- Formulaire contact Resend → schmittantony4@gmail.com (testé OK)
- Backend testing 100% passé
- Header double logo, hero magazine, trust bar, galerie élagage, services cards, before/after slider, stats bar, FAQ, CTAs, footer maillage interne
- Sitemap XML, robots.txt, JSON-LD

### V1.1 (28 Feb 2026 - même journée)
- **Nouveau logo Pro Élagage 14** (badge circulaire avec elagueur silhouette + carte Calvados) - intégré header + hero + footer
- **Pages SEO premium custom** ajoutées pour `jardinier-caen` (5 sections expertes) et `entretien-exterieur-caen` (5 sections expertes)
- **6 nouvelles pages élagage par ville** : `/elagage-deauville`, `/elagage-trouville`, `/elagage-lisieux`, `/elagage-falaise`, `/elagage-argences`, `/elagage-ouistreham`
- **Bug critique routing fixé** : React Router 7 ne supportant pas le pattern `/prefix-:slug`, toutes les routes sont maintenant hardcodées (11 services + 18 villes)
- **Photos non-pertinentes remplacées** : audit visuel de toutes les images via AI, remplacement systématique de 10+ URLs problématiques (architecte, salade Caprese, portrait) par photos vérifiées jardin/arbre/paysage
- **Bibliothèque centrale d'images** : `/app/frontend/src/data/images.js` avec uniquement des URLs vérifiées
- **Sitemap mis à jour** : 47 URLs au lieu de 41

### V1.2 (Jun-Sep 2026)
- **Silo SEO massif** : passage à 324 URLs (8 services × 99 villes) + 13 articles blog
- **Photos réelles clients** : intégration des 6 vraies photos de chantier (élagage palmiers, entretien jardin) uploadées par le client, remplacement des 4 photos stock "bizarres" (forêt brumeuse, prairie, montagne, village)
- **Nettoyage Google Ads "Site infecté" (13 Jun 2026)** :
  - Suppression du script PostHog (session recording + injection dynamique flagués par Google Safe Browsing)
  - Suppression du script externe `assets.emergent.sh/scripts/emergent-main.js`
  - Basculement du domaine canonique vers `https://www.lesjardiniersnormands.fr` (sitemap 324/324, robots.txt, company.js)
  - Fix canonical par page : `SEO.jsx` utilise désormais `useLocation()` pour générer une URL canonique unique par route au lieu du site root
  - Audit exhaustif : 0 tracking, 0 iframe suspect, 0 dépendance analytics dans package.json, 0 injection dynamique de script
- **Testing** : `iteration_2.json` — backend 10/10, frontend nav + canonicals + sitemap OK

## Credentials
- Resend API key dans `/app/backend/.env`
- Sender: `onboarding@resend.dev` (test mode — domaine custom à vérifier avant prod)
- Owner email: `schmittantony4@gmail.com`
- **Domaine production** : `https://www.lesjardiniersnormands.fr` (SSL Emergent OK)

## Backlog (post-V1.2)
- **P0**: Redéployer en prod pour pousser le fix "Site infecté" + demander réexamen Google Ads
- **P1**: Vérifier domaine custom dans Resend pour sortir du test mode (envoi vers tous destinataires)
- **P1**: Rotation de la clé Resend (committée dans .env)
- **P1**: Page admin `/admin/contacts` avec authentification simple pour consulter les leads
- **P1**: Rate limiting + honeypot/captcha sur POST /api/contact (anti-spam)
- **P2**: Auth sur GET /api/contacts (PII non protégée actuellement)
- **P2**: Widget avis Google temps réel via API Google Places (une fois GBP validé)
- **P2**: Bandeau cookies RGPD (uniquement nécessaire si tracking réintroduit)
- **P2**: Migration Next.js/SSR pour SEO maximal
- **P2**: Migration `@app.on_event('shutdown')` vers FastAPI lifespan context manager
