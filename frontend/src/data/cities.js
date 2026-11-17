// Communes desservies : liste générée par seo-data/export_json.py (données INSEE : code postal, population, distance depuis Caen).
import list from "./cities.json";

// Toutes les communes gardent leur page. La liste est triée par distance : les communes proches de Caen (50 km) passent en premier.
export const CITIES = list;

const km = (c) => parseInt(c.distance, 10) || 0;
export const NEAR_CITIES = list.filter((c) => km(c) <= 50);

export const COVERED_TOWNS = list.slice(0, 45).map((c) => c.name);

export const getCity = (slug) => CITIES.find((c) => c.slug === slug);
