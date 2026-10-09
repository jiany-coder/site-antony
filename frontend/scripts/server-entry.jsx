// Point d'entrée "serveur" : produit le HTML de chaque page au moment de la construction (prérendu).
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "../src/App";
import { CITIES } from "../src/data/cities";
import { SERVICES } from "../src/data/services";
import { BLOG_POSTS } from "../src/data/blog";

export function routes() {
  const list = [
    "/", "/a-propos", "/realisations", "/contact", "/blog",
    "/mentions-legales", "/politique-de-confidentialite",
    ...SERVICES.map((s) => `/${s.slug}`),
    ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
  ];
  for (const c of CITIES) for (const k of ["paysagiste", "jardinier", "elagage"]) list.push(`/${k}-${c.slug}`);
  return [...new Set(list)];
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
