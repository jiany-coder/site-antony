import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import SEO, { buildLocalBusinessSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const wa = COMPANY.whatsapp.replace(/\D/g, "");
  return (
    <>
      <SEO
        title={`Devis gratuit jardinier Caen | ${COMPANY.brand}`}
        description={`Demandez votre devis gratuit pour paysagisme, élagage ou entretien jardin dans le Calvados. ☎ ${COMPANY.phone} – Réponse sous 24h.`}
        canonical={`${COMPANY.site}/contact`}
        jsonLd={buildLocalBusinessSchema()}
      />

      <section className="pt-32 pb-16 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 reveal">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Contact</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#0A0F0D] font-light leading-[1] tracking-tight max-w-4xl">
            Parlons de votre <em className="italic">projet</em>
          </h1>
          <p className="text-lg text-[#4A5550] max-w-2xl mt-6">Une question ? Un devis ? Notre équipe répond sous 24h. Devis gratuit et sans engagement.</p>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 reveal">
            <div className="premium-card p-8 mb-6">
              <h2 className="font-serif text-2xl text-[#0A0F0D] mb-6">Nos coordonnées</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#F2EBD9] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#1F3D2B]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] font-bold text-[#1F3D2B] mb-1">Téléphone</p>
                    <a href={`tel:${COMPANY.phoneRaw}`} className="text-lg font-serif text-[#0A0F0D] hover:text-[#1F3D2B]" data-testid="contact-phone-link">{COMPANY.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#F2EBD9] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1F3D2B]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] font-bold text-[#1F3D2B] mb-1">Email</p>
                    <a href={`mailto:${COMPANY.email}`} className="text-lg font-serif text-[#0A0F0D] hover:text-[#1F3D2B] break-all">{COMPANY.email}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#F2EBD9] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1F3D2B]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] font-bold text-[#1F3D2B] mb-1">Adresse</p>
                    <p className="text-lg font-serif text-[#0A0F0D]">{COMPANY.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#F2EBD9] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1F3D2B]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] font-bold text-[#1F3D2B] mb-1">Horaires</p>
                    <p className="text-lg font-serif text-[#0A0F0D]">{COMPANY.hours}</p>
                  </div>
                </li>
              </ul>

              <a
                href={`https://wa.me/${wa}?text=${encodeURIComponent("Bonjour, je souhaite un devis pour vos prestations à Caen.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-sans font-semibold text-sm hover:opacity-90"
                data-testid="contact-whatsapp"
              >
                <MessageCircle className="w-4 h-4" /> Discuter par WhatsApp
              </a>
            </div>

            <div className="premium-card p-8">
              <h3 className="font-serif text-2xl text-[#0A0F0D] mb-4">Zone d'intervention</h3>
              <p className="text-sm text-[#4A5550] leading-relaxed">
                Nous intervenons à Caen et dans tout le département du Calvados : Hérouville-Saint-Clair, Mondeville, Ifs, Bayeux, Deauville, Trouville-sur-Mer, Lisieux, Falaise, Argences, Ouistreham, Courseulles-sur-Mer et toutes les communes alentours.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="premium-card p-8 lg:p-10">
              <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-3">Devis gratuit · Sans engagement</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] mb-6">Décrivez-nous votre projet</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
