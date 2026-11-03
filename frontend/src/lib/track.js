// Suivi léger des conversions (appel, WhatsApp, formulaire).
// Sans effet tant que la balise Google (gtag) n'est pas installée sur le site.
export const track = (name, params = {}) => {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  } catch (e) {
    /* le suivi ne doit jamais bloquer la page */
  }
};
