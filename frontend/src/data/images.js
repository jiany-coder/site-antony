// Centralized verified image library
// Real client photos + verified stock photos for garden / landscape / tree work
// Add only after visual verification

export const IMG = {
  // Gardens & landscape (verified stock)
  luxuryGarden: "https://images.unsplash.com/photo-1597201278257-3687be27d954?auto=format&fit=crop&w=1600&q=85",
  landscapedGarden: "https://images.unsplash.com/photo-1576897955702-24ad19680db3?auto=format&fit=crop&w=1600&q=85",
  vegetableGarden: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1600&q=85",
  lawnPath: "https://images.pexels.com/photos/32500250/pexels-photo-32500250.jpeg?auto=compress&cs=tinysrgb&w=1600",
  gardener: "https://images.pexels.com/photos/3280078/pexels-photo-3280078.jpeg?auto=compress&cs=tinysrgb&w=1600",

  // Trees & forestry (verified stock)
  arborist: "https://images.unsplash.com/photo-1762903938137-49b0a145e241?auto=format&fit=crop&w=1600&q=85",
  chainsaw: "https://images.unsplash.com/photo-1474742509976-ddec6b387356?auto=format&fit=crop&w=1600&q=85",

  // Real client project photos — Les Jardiniers Normands / Pro Élagage 14
  realChantier1: "https://customer-assets.emergentagent.com/job_paysage-caen-seo/artifacts/349b4rlo_abe%2023.jpg",
  realChantier2: "https://customer-assets.emergentagent.com/job_paysage-caen-seo/artifacts/er21hu1d_abe%2024.jpg",
  realChantier3: "https://customer-assets.emergentagent.com/job_paysage-caen-seo/artifacts/9x11h3nx_abe%2025.jpg",
  realChantier4: "https://customer-assets.emergentagent.com/job_paysage-caen-seo/artifacts/1d6uj5ep_abe%2026.jpg",
  realChantier5: "https://customer-assets.emergentagent.com/job_paysage-caen-seo/artifacts/8dqk3ati_abe%2035.jpg",
  realProElagage: "https://customer-assets.emergentagent.com/job_paysage-caen-seo/artifacts/pvwtitso_pro%20%C3%A9lagage%2014.jpg",
};

// Convenience pool for galleries (real photos prioritized)
export const GREEN_POOL = [
  IMG.realChantier1,
  IMG.arborist,
  IMG.realProElagage,
  IMG.realChantier2,
  IMG.luxuryGarden,
  IMG.realChantier3,
  IMG.landscapedGarden,
  IMG.realChantier5,
  IMG.chainsaw,
  IMG.realChantier4,
  IMG.lawnPath,
  IMG.gardener,
];
