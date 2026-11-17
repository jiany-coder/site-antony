// Point d'entrée "serveur" : produit le HTML de chaque page au moment de la construction (prérendu).
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "../src/App";
import { CITIES, ALL_CITIES } from "../src/data/cities";
import { SERVICES } from "../src/data/services";
import { BLOG_POSTS } from "../src/data/blog_all";

export function routes() {
  const list = [
    "/", "/a-propos", "/realisations", "/contact", "/blog",
    "/zone-d-intervention", "/mentions-legales", "/politique-de-confidentialite",
    ...SERVICES.map((s) => `/${s.slug}`),
    ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
  ];
  for (const c of CITIES) for (const k of ["paysagiste", "jardinier", "elagage"]) list.push(`/${k}-${c.slug}`);
  return [...new Set(list)];
}

// Communes qui n'ont plus de page propre (hors rayon de 50 km ou moins de 1 500 habitants) : redirigées en 301.
export function removedPages() {
  const keep = new Set(CITIES.map((c) => c.slug));
  const out = [];
  for (const c of ALL_CITIES) {
    if (keep.has(c.slug)) continue;
    for (const k of ["paysagiste", "jardinier", "elagage"]) out.push(`/${k}-${c.slug}`);
  }
  return out;
}

export function render(url) {
  globalThis.__HEAD__ = null;
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
  return { html, head: globalThis.__HEAD__ };
}
