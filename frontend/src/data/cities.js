// Communes desservies : liste générée par seo-data/export_json.py (données INSEE : code postal, population, distance depuis Caen).
import list from "./cities.json";

// Pages communes indexables : rayon de 50 km autour de Caen, communes de 1 500 habitants et plus.
// Les autres communes sont redirigées (301) vers /zone-d-intervention au build (voir scripts/prerender.mjs).
const RADIUS_KM = 50;
const MIN_POP = 1500;
const km = (c) => parseInt(c.distance, 10) || 0;
const pop = (c) => parseInt(String(c.population).replace(/\D/g, ""), 10) || 0;

export const ALL_CITIES = list;
export const CITIES = list.filter((c) => km(c) <= RADIUS_KM && pop(c) >= MIN_POP);

export const COVERED_TOWNS = CITIES.slice(0, 45).map((c) => c.name);

export const getCity = (slug) => CITIES.find((c) => c.slug === slug);
