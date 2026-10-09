import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { SERVICES } from "../data/services";

const API = `${process.env.REACT_APP_BACKEND_URL || ""}/api`;

export default function ContactForm({ defaultService = "", defaultCity = "" }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", city: defaultCity, service: defaultService, message: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/contact`, form);
      setDone(true);
      toast.success("Demande envoyée ! Nous vous recontactons sous 24h.");
      setForm({ name: "", email: "", phone: "", city: "", service: "", message: "" });
      setTimeout(() => setDone(false), 8000);
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Une erreur est survenue. Réessayez ou appelez-nous directement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-5" data-testid="contact-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#1F3D2B] mb-2">Nom complet *</label>
          <input
            required name="name" value={form.name} onChange={onChange}
            placeholder="Jean Dupont"
            className="w-full px-4 py-3.5 rounded-xl bg-[#FDFBF7] border border-[#E5E0D5] focus:outline-none focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/20 transition"
            data-testid="contact-input-name"
          />
        </div>
        <div>
          <label className="block text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#1F3D2B] mb-2">Téléphone *</label>
          <input
            required name="phone" value={form.phone} onChange={onChange} type="tel"
            placeholder="07 80 04 43 90"
            className="w-full px-4 py-3.5 rounded-xl bg-[#FDFBF7] border border-[#E5E0D5] focus:outline-none focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/20 transition"
            data-testid="contact-input-phone"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#1F3D2B] mb-2">Email *</label>
        <input
          required name="email" value={form.email} onChange={onChange} type="email"
          placeholder="vous@email.com"
          className="w-full px-4 py-3.5 rounded-xl bg-[#FDFBF7] border border-[#E5E0D5] focus:outline-none focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/20 transition"
          data-testid="contact-input-email"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#1F3D2B] mb-2">Ville</label>
          <input
            name="city" value={form.city} onChange={onChange}
            placeholder="Caen, Deauville, Lisieux..."
            className="w-full px-4 py-3.5 rounded-xl bg-[#FDFBF7] border border-[#E5E0D5] focus:outline-none focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/20 transition"
            data-testid="contact-input-city"
          />
        </div>
        <div>
          <label className="block text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#1F3D2B] mb-2">Service souhaité</label>
          <select
            name="service" value={form.service} onChange={onChange}
            className="w-full px-4 py-3.5 rounded-xl bg-[#FDFBF7] border border-[#E5E0D5] focus:outline-none focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/20 transition appearance-none"
            data-testid="contact-input-service"
          >
            <option value="">Sélectionnez un service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Autre">Autre / Plusieurs services</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#1F3D2B] mb-2">Votre projet *</label>
        <textarea
          required name="message" value={form.message} onChange={onChange}
          rows={5}
          placeholder="Décrivez votre projet, surface, contraintes, calendrier souhaité..."
          className="w-full px-4 py-3.5 rounded-xl bg-[#FDFBF7] border border-[#E5E0D5] focus:outline-none focus:border-[#1F3D2B] focus:ring-2 focus:ring-[#1F3D2B]/20 transition resize-none"
          data-testid="contact-input-message"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#1F3D2B] text-[#FDFBF7] px-8 py-4 rounded-full font-sans font-semibold text-base transition-all duration-300 hover:bg-[#14281C] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        data-testid="contact-submit"
      >
        {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...</> : <><Send className="w-5 h-5" /> Recevoir mon devis gratuit</>}
      </button>

      <p className="text-xs text-[#4A5550]/80 text-center">Réponse sous 24h ouvrées. Devis gratuit et sans engagement.</p>
    </form>
  );
}
