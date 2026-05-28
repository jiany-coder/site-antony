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

import { SERVICES } from "./data/services";
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

            {SERVICES.map((s) => (
              <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage />} />
            ))}

            {CITIES.map((c) => (
              <Route key={`p-${c.slug}`} path={`/paysagiste-${c.slug}`} element={<CityPage kind="paysagiste" />} />
            ))}
            {CITIES.map((c) => (
              <Route key={`j-${c.slug}`} path={`/jardinier-${c.slug}`} element={<CityPage kind="jardinier" />} />
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
