// Villes stratégiques SEO Calvados
export const CITIES = [
  {
    slug: "deauville",
    name: "Deauville",
    distance: "45 km de Caen",
    intro: "Station balnéaire prestigieuse de la Côte Fleurie, Deauville exige un entretien paysager à la hauteur de son standing.",
    population: "3 500 habitants",
    code: "14800",
  },
  {
    slug: "trouville",
    name: "Trouville-sur-Mer",
    distance: "43 km de Caen",
    intro: "Cité balnéaire authentique, Trouville-sur-Mer regroupe villas et propriétés nécessitant un savoir-faire paysager spécifique.",
    population: "4 500 habitants",
    code: "14360",
  },
  {
    slug: "lisieux",
    name: "Lisieux",
    distance: "48 km de Caen",
    intro: "Capitale du Pays d'Auge, Lisieux et ses environs offrent un cadre verdoyant que nous entretenons avec soin.",
    population: "21 000 habitants",
    code: "14100",
  },
  {
    slug: "falaise",
    name: "Falaise",
    distance: "35 km de Caen",
    intro: "Ville historique du Calvados, Falaise bénéficie de notre expertise paysagère et arboricole.",
    population: "8 000 habitants",
    code: "14700",
  },
  {
    slug: "argences",
    name: "Argences",
    distance: "16 km de Caen",
    intro: "Proche de Caen, Argences profite d'une intervention rapide et d'un suivi personnalisé.",
    population: "3 200 habitants",
    code: "14370",
  },
  {
    slug: "ouistreham",
    name: "Ouistreham",
    distance: "16 km de Caen",
    intro: "Station balnéaire et port, Ouistreham requiert des soins paysagers adaptés au climat marin.",
    population: "9 000 habitants",
    code: "14150",
  },
];

export const COVERED_TOWNS = [
  "Caen", "Hérouville-Saint-Clair", "Mondeville", "Ifs", "Bretteville-sur-Odon",
  "Bayeux", "Courseulles-sur-Mer", "Cabourg", "Houlgate", "Dives-sur-Mer",
  "Vire", "Condé-sur-Noireau", "Saint-Aubin-sur-Mer", "Luc-sur-Mer", "Lion-sur-Mer",
  "Mathieu", "Biéville-Beuville", "Colombelles", "Giberville", "Cormelles-le-Royal",
];

export const getCity = (slug) => CITIES.find((c) => c.slug === slug);
