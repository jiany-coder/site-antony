// Suivi des conversions Google Ads (appel, WhatsApp, formulaire).
// Sans effet si la balise Google (gtag) n'est pas chargee.
const CONVERSIONS = {
  click_call: "AW-16714329978/aY8XCKvm7LEdEPregaI-",
  click_whatsapp: "AW-16714329978/t50ZCK7m7LEdEPregaI-",
  generate_lead: "AW-16714329978/9_rTCLHm7LEdEPregaI-",
};

export const track = (name, params = {}) => {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", name, params);
      if (CONVERSIONS[name]) {
        window.gtag("event", "conversion", { send_to: CONVERSIONS[name] });
      }
    }
  } catch (e) {
    /* le suivi ne doit jamais bloquer la page */
  }
};
