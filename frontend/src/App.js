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

            <Route path="/paysagiste-deauville" element={<CityPage kind="paysagiste" />} />
            <Route path="/paysagiste-trouville" element={<CityPage kind="paysagiste" />} />
            <Route path="/paysagiste-lisieux" element={<CityPage kind="paysagiste" />} />
            <Route path="/paysagiste-falaise" element={<CityPage kind="paysagiste" />} />
            <Route path="/paysagiste-argences" element={<CityPage kind="paysagiste" />} />
            <Route path="/paysagiste-ouistreham" element={<CityPage kind="paysagiste" />} />

            <Route path="/jardinier-deauville" element={<CityPage kind="jardinier" />} />
            <Route path="/jardinier-trouville" element={<CityPage kind="jardinier" />} />
            <Route path="/jardinier-lisieux" element={<CityPage kind="jardinier" />} />
            <Route path="/jardinier-falaise" element={<CityPage kind="jardinier" />} />
            <Route path="/jardinier-argences" element={<CityPage kind="jardinier" />} />
            <Route path="/jardinier-ouistreham" element={<CityPage kind="jardinier" />} />

            <Route path="/elagage-deauville" element={<CityPage kind="elagage" />} />
            <Route path="/elagage-trouville" element={<CityPage kind="elagage" />} />
            <Route path="/elagage-lisieux" element={<CityPage kind="elagage" />} />
            <Route path="/elagage-falaise" element={<CityPage kind="elagage" />} />
            <Route path="/elagage-argences" element={<CityPage kind="elagage" />} />
            <Route path="/elagage-ouistreham" element={<CityPage kind="elagage" />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
        <Toaster position="top-center" richColors closeButton />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
