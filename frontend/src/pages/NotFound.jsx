import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page introuvable" noindex />
      <section className="min-h-[70vh] flex items-center justify-center px-6 py-32 text-center">
        <div>
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">404</p>
          <h1 className="font-serif text-5xl sm:text-7xl text-[#0A0F0D] font-light tracking-tight mb-6">Cette page n'existe pas</h1>
          <p className="text-lg text-[#4A5550] mb-8 max-w-xl mx-auto">Mais notre savoir-faire, lui, est bien réel. Revenez sur la page d'accueil.</p>
          <Link to="/" className="inline-flex items-center bg-[#1F3D2B] text-[#FDFBF7] px-8 py-4 rounded-full font-sans font-semibold hover:bg-[#14281C] transition-colors" data-testid="404-home-link">
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </>
  );
}
