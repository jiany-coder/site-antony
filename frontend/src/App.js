import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import CityPage from "./pages/CityPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Realisations from "./pages/Realisations";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

import { CITIES } from "./data/cities";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/realisations" element={<Realisations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />

            {/* Services principaux (Caen) */}
            <Route path="/paysagiste-caen" element={<ServicePage />} />
            <Route path="/jardinier-caen" element={<ServicePage />} />
            <Route path="/elagage-caen" element={<ServicePage />} />
            <Route path="/abattage-arbre-caen" element={<ServicePage />} />
            <Route path="/dessouchage-caen" element={<ServicePage />} />
            <Route path="/demoussage-toiture-caen" element={<ServicePage />} />
            <Route path="/nettoyage-facade-caen" element={<ServicePage />} />
            <Route path="/nettoyage-pignon-caen" element={<ServicePage />} />
            <Route path="/taille-haie-caen" element={<ServicePage />} />
            <Route path="/entretien-jardin-caen" element={<ServicePage />} />
            <Route path="/entretien-exterieur-caen" element={<ServicePage />} />

            {/* Pages villes — Paysagiste */}
            {CITIES.map((c) => (
              <Route key={`p-${c.slug}`} path={`/paysagiste-${c.slug}`} element={<CityPage kind="paysagiste" />} />
            ))}
            {/* Pages villes — Jardinier */}
            {CITIES.map((c) => (
              <Route key={`j-${c.slug}`} path={`/jardinier-${c.slug}`} element={<CityPage kind="jardinier" />} />
            ))}
            {/* Pages villes — Élagage */}
            {CITIES.map((c) => (
              <Route key={`e-${c.slug}`} path={`/elagage-${c.slug}`} element={<CityPage kind="elagage" />} />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Toaster position="top-center" richColors closeButton />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
