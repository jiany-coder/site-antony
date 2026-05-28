import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { COMPANY } from "../data/company";
import { SERVICES } from "../data/services";
import { CITIES, COVERED_TOWNS } from "../data/cities";

export default function Footer() {
  return (
    <footer className="bg-[#0A0F0D] text-[#FDFBF7]/85 pt-20 pb-10 mt-24" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Brand */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img src={COMPANY.logos.jardiniers} alt="" className="h-14 w-14 object-contain rounded-full bg-[#F2EBD9]/10" />
            <img src={COMPANY.logos.proElagage} alt="" className="h-12 w-auto object-contain rounded-full bg-[#F2EBD9]/10" />
          </div>
          <h3 className="font-serif text-2xl text-[#FDFBF7] mt-6 mb-3">Les Jardiniers Normands</h3>
          <p className="text-sm leading-relaxed mb-6 text-[#FDFBF7]/70">
            Paysagiste, jardinier et élagueur professionnel basé à Caen. Nous prenons soin de votre extérieur dans tout le Calvados depuis plus de 10 ans.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 text-[#F2EBD9]" strokeWidth={1.5} /> {COMPANY.address}</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#F2EBD9]" strokeWidth={1.5} /> <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-[#F2EBD9]">{COMPANY.phone}</a></li>
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#F2EBD9]" strokeWidth={1.5} /> <a href={`mailto:${COMPANY.email}`} className="hover:text-[#F2EBD9]">{COMPANY.email}</a></li>
            <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-[#F2EBD9]" strokeWidth={1.5} /> {COMPANY.hours}</li>
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-xs text-[#F2EBD9] mb-5">Nos services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="hover:text-[#F2EBD9] text-[#FDFBF7]/75">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Villes */}
        <div className="md:col-span-3">
          <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-xs text-[#F2EBD9] mb-5">Zones desservies</h4>
          <ul className="space-y-2 text-sm">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link to={`/paysagiste-${c.slug}`} className="hover:text-[#F2EBD9] text-[#FDFBF7]/75">Paysagiste {c.name}</Link>
              </li>
            ))}
            {CITIES.map((c) => (
              <li key={"j-" + c.slug}>
                <Link to={`/jardinier-${c.slug}`} className="hover:text-[#F2EBD9] text-[#FDFBF7]/75">Jardinier {c.name}</Link>
              </li>
            ))}
            {CITIES.map((c) => (
              <li key={"e-" + c.slug}>
                <Link to={`/elagage-${c.slug}`} className="hover:text-[#F2EBD9] text-[#FDFBF7]/75">Élagage {c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Pages */}
        <div className="md:col-span-2">
          <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-xs text-[#F2EBD9] mb-5">Informations</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/a-propos" className="hover:text-[#F2EBD9]">À propos</Link></li>
            <li><Link to="/realisations" className="hover:text-[#F2EBD9]">Réalisations</Link></li>
            <li><Link to="/blog" className="hover:text-[#F2EBD9]">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-[#F2EBD9]">Contact / Devis</Link></li>
            <li><Link to="/mentions-legales" className="hover:text-[#F2EBD9]">Mentions légales</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12 pt-8 border-t border-[#FDFBF7]/10">
        <p className="text-xs text-[#FDFBF7]/55 leading-relaxed">
          <strong className="text-[#F2EBD9]">Communes desservies dans le Calvados (14)</strong> : {COVERED_TOWNS.join(" · ")}.
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
          <p className="text-xs text-[#FDFBF7]/55">© {new Date().getFullYear()} Les Jardiniers Normands · Pro Élagage 14 — Tous droits réservés.</p>
          <p className="text-xs text-[#FDFBF7]/55">Site optimisé SEO local Calvados</p>
        </div>
      </div>
    </footer>
  );
}
