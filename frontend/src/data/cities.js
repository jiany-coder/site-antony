// Communes desservies : liste générée par seo-data/export_json.py (données INSEE : code postal, population, distance depuis Caen).
import list from "./cities.json";

export const CITIES = list;

export const COVERED_TOWNS = list.slice(0, 45).map((c) => c.name);

export const getCity = (slug) => CITIES.find((c) => c.slug === slug);
