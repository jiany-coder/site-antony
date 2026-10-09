// Photos réelles des chantiers (Caen). Fichiers dans public/photos/ (WebP, ~190 Ko).
const P = (file, alt, w, h) => ({ src: `/photos/${file}.webp`, alt, w, h });

export const CHANTIERS = {
  thuyaToit: P("taille-haie-thuya-toit-tuiles", "Haie de thuyas taillée devant une toiture de tuiles à Caen", 960, 1280),
  laurierMuret: P("taille-haie-laurier-muret-pierre", "Taille de laurier le long d'un muret en pierre à Caen", 825, 1100),
  magnoliaTerrasse: P("elagage-magnolia-terrasse-jardin", "Élagage d'un magnolia au-dessus d'une terrasse à Caen", 825, 1100),
  thuyaFruitiers: P("taille-haie-thuya-arbres-fruitiers", "Haie de thuyas taillée et arbres fruitiers dans un jardin à Caen", 825, 1100),
  pelouseBalustres: P("tonte-pelouse-terrasse-balustres", "Pelouse tondue à côté d'une terrasse à balustres à Caen", 960, 1280),
  pelouseEntretien: P("tonte-entretien-pelouse-jardin", "Entretien et tonte d'une pelouse de jardin à Caen", 720, 960),
  thuyaHauteur: P("taille-haie-thuya-hauteur-jardin", "Taille de précision d'une haie de thuyas dans un jardin à Caen", 1100, 825),
  haieMixte: P("taille-haie-mixte-laurier-persistants", "Taille d'une haie mixte de lauriers et de persistants à Caen", 960, 720),
  magnoliaMaison: P("elagage-magnolia-maison", "Magnolia à élaguer près d'une maison à Caen", 825, 1100),
  terrasseMurets: P("nettoyage-jardin-terrasse-murets", "Terrasse et murets de jardin à nettoyer à Caen", 720, 960),
  entreePortail: P("debroussaillage-entree-portail", "Entrée de jardin et portail à débroussailler à Caen", 720, 960),
  laurierEchelle: P("taille-laurier-echelle-taille-haie-thermique", "Taille d'un grand laurier avec échelle et taille-haie thermique à Caen", 720, 960),
  haieToit: P("taille-haie-echelle-toit-maison", "Taille de haie à l'échelle devant une maison à Caen", 1100, 825),
  massifMuret: P("debroussaillage-massif-muret-pierre", "Massif débroussaillé avec muret en pierre à Caen", 720, 960),
  thuyaEchelle: P("taille-haie-thuya-echelle-jardin", "Taille d'une haute haie de thuyas à l'échelle à Caen", 960, 720),
  photinia: P("taille-haie-photinia-red-robin", "Haie de photinia Red Robin taillée à Caen", 960, 720),
  grandeHaie: P("taille-grande-haie-thuya-echelle", "Taille d'une grande haie de thuyas à Caen", 1100, 825),
};

export const GALERIE = Object.values(CHANTIERS);

// Galerie élagage / taille en hauteur (accueil)
export const GALERIE_ELAGAGE = [
  CHANTIERS.magnoliaTerrasse, CHANTIERS.magnoliaMaison, CHANTIERS.laurierEchelle,
  CHANTIERS.thuyaEchelle, CHANTIERS.grandeHaie, CHANTIERS.haieToit,
];

// Chantiers mis en avant (page Réalisations)
export const A_LA_UNE = [
  { photo: CHANTIERS.thuyaHauteur, title: "Taille de haie de thuyas – Caen", desc: "Taille de précision d'une haie de thuyas : hauteur et faces régularisées pour une haie nette et dense." },
  { photo: CHANTIERS.magnoliaMaison, title: "Élagage d'un magnolia – Caen", desc: "Élagage d'un magnolia situé près d'une maison et d'une terrasse, dans un jardin de Caen." },
  { photo: CHANTIERS.photinia, title: "Taille de photinia – Caen", desc: "Taille d'une haie de photinia Red Robin pour retrouver une haie fournie et colorée." },
  { photo: CHANTIERS.massifMuret, title: "Remise en ordre d'un massif – Caen", desc: "Débroussaillage et nettoyage d'un massif le long d'un muret en pierre." },
];

// Photos par page de service (clé = slug)
export const SERVICE_PHOTOS = {
  "taille-haie-caen": [CHANTIERS.thuyaHauteur, CHANTIERS.thuyaToit, CHANTIERS.laurierMuret, CHANTIERS.photinia, CHANTIERS.haieMixte, CHANTIERS.thuyaFruitiers],
  "elagage-caen": [CHANTIERS.magnoliaTerrasse, CHANTIERS.magnoliaMaison, CHANTIERS.laurierEchelle, CHANTIERS.grandeHaie],
  "tonte-pelouse-caen": [CHANTIERS.pelouseBalustres, CHANTIERS.pelouseEntretien, CHANTIERS.massifMuret, CHANTIERS.terrasseMurets],
  "jardinier-caen": [CHANTIERS.pelouseBalustres, CHANTIERS.pelouseEntretien, CHANTIERS.massifMuret, CHANTIERS.entreePortail],
  "entretien-jardin-caen": [CHANTIERS.pelouseEntretien, CHANTIERS.massifMuret, CHANTIERS.terrasseMurets, CHANTIERS.entreePortail],
  "entretien-exterieur-caen": [CHANTIERS.terrasseMurets, CHANTIERS.entreePortail, CHANTIERS.massifMuret, CHANTIERS.pelouseBalustres, CHANTIERS.thuyaToit],
};
