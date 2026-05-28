import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { COMPANY } from "../data/company";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/paysagiste-caen", label: "Paysagiste" },
  { to: "/elagage-caen", label: "Élagage" },
  { to: "/jardinier-caen", label: "Jardinier" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/blog", label: "Blog" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  React.useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-40 backdrop-blur-xl bg-[#FDFBF7]/85 border-b border-[#1F3D2B]/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link to="/" className="flex items-center gap-3" data-testid="logo-link">
            <img src={COMPANY.logos.jardiniers} alt="Les Jardiniers Normands" className="h-14 w-14 lg:h-16 lg:w-16 object-contain" />
            <div className="hidden sm:block leading-tight">
              <div className="font-serif text-[#0A0F0D] text-xl lg:text-2xl font-medium tracking-tight">Les Jardiniers Normands</div>
              <div className="text-[10px] lg:text-xs tracking-[0.18em] uppercase text-[#1F3D2B] font-sans font-semibold">Pro Élagage 14 · Calvados</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7" data-testid="desktop-nav">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-sans link-underline ${isActive ? "text-[#1F3D2B] font-semibold" : "text-[#4A5550] hover:text-[#1F3D2B]"}`
                }
                data-testid={`nav-${n.to.replace(/\//g, "") || "home"}`}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-2 text-[#1F3D2B] font-sans font-semibold text-sm"
              data-testid="header-phone"
            >
              <Phone className="w-4 h-4" strokeWidth={1.75} /> {COMPANY.phone}
            </a>
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center bg-[#1F3D2B] text-[#FDFBF7] px-5 py-2.5 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:bg-[#14281C] hover:-translate-y-0.5 hover:shadow-lg"
              data-testid="header-cta-devis"
            >
              Devis gratuit
            </Link>
            <button
              className="lg:hidden p-2 -mr-2 text-[#1F3D2B]"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              data-testid="mobile-menu-toggle"
            >
              {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#1F3D2B]/10 bg-[#FDFBF7]" data-testid="mobile-menu">
          <nav className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `py-3 px-3 rounded-lg text-base font-sans ${isActive ? "bg-[#F2EBD9] text-[#1F3D2B] font-semibold" : "text-[#4A5550]"}`
                }
                data-testid={`mobile-nav-${n.to.replace(/\//g, "") || "home"}`}
              >
                {n.label}
              </NavLink>
            ))}
            <div className="flex gap-3 mt-4">
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F2EBD9] text-[#1F3D2B] px-4 py-3 rounded-full font-semibold text-sm">
                <Phone className="w-4 h-4" /> Appeler
              </a>
              <Link to="/contact" className="flex-1 inline-flex items-center justify-center bg-[#1F3D2B] text-[#FDFBF7] px-4 py-3 rounded-full font-semibold text-sm">
                Devis gratuit
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
