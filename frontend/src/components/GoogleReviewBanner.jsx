import React from "react";
import { Star, ArrowUpRight } from "lucide-react";
import { COMPANY } from "../data/company";

// Bouton "Laissez-nous un avis Google"
// Note: remplacer reviewLink dans company.js par le lien court de votre fiche Google Business Profile
// Exemple: https://g.page/r/XXXXXXX/review
export default function GoogleReviewBanner() {
  return (
    <section className="py-20 bg-[#FDFBF7] border-y border-[#E5E0D5]" data-testid="google-review-banner">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1F3D2B] to-[#0A0F0D] p-10 sm:p-14 text-[#FDFBF7]">
          {/* Decorative stars */}
          <div className="absolute top-8 right-8 flex gap-1 opacity-20">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-[#F2EBD9] text-[#F2EBD9]" strokeWidth={0} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4A841] text-[#D4A841]" strokeWidth={1} />
                  ))}
                </div>
                <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-[#F2EBD9]">Sur Google</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.05] tracking-tight text-[#F2EBD9] mb-4">
                Vous êtes <em className="italic">satisfait</em> de notre intervention ?
              </h2>
              <p className="text-base sm:text-lg text-[#FDFBF7]/85 leading-relaxed">
                Partagez votre expérience sur Google. C'est le geste qui nous fait le plus plaisir et qui aide vos voisins du Calvados à nous trouver.
              </p>
            </div>

            <div className="lg:col-span-5 flex lg:justify-end">
              <a
                href={COMPANY.social.reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#F2EBD9] text-[#1F3D2B] px-8 py-5 rounded-full font-sans font-bold text-base sm:text-lg transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-2xl group"
                data-testid="google-review-cta"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Laisser un avis Google</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
