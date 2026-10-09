import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import SEO, { buildPageSchema, buildBreadcrumbSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import { BLOG_POSTS } from "../data/blog_all";

export default function Blog() {
  const [main, ...rest] = BLOG_POSTS;
  return (
    <>
      <SEO
        title="Blog jardinage & paysagisme Calvados | Jardiniers Normands"
        description="Conseils de jardinier et d'élagueur à Caen : taille, entretien, pelouse, abattage, règles et saisons. Guides pratiques pour le Calvados."
        canonical={`${COMPANY.site}/blog`}
        jsonLd={[
          buildPageSchema("CollectionPage", "Blog jardinage et paysagisme à Caen", `${COMPANY.site}/blog`, "Conseils de jardinier et d'élagueur à Caen et dans le Calvados.", {
            mainEntity: { "@type": "ItemList", itemListElement: BLOG_POSTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${COMPANY.site}/blog/${p.slug}`, name: p.title })) },
          }),
          buildBreadcrumbSchema([["Accueil", COMPANY.site + "/"], ["Blog", COMPANY.site + "/blog"]]),
        ]}
      />
      <section className="pt-32 pb-12 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center reveal">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#1F3D2B] mb-4">Notre blog</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#0A0F0D] font-light leading-[1] tracking-tight mb-5">
            Conseils d'<em className="italic">experts</em> du Calvados
          </h1>
          <p className="text-lg text-[#4A5550] max-w-2xl mx-auto">Découvrez nos guides et conseils sur le paysagisme, l'élagage, l'entretien jardin et bien plus encore.</p>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <Link to={`/blog/${main.slug}`} className="group block relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl reveal" data-testid="blog-featured">
            <img loading="lazy" decoding="async" src={main.cover} alt={main.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D]/85 via-[#0A0F0D]/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 lg:p-14 text-[#FDFBF7]">
              <span className="inline-block text-xs font-sans font-bold tracking-[0.3em] uppercase bg-[#F2EBD9]/20 backdrop-blur-md px-3 py-1.5 rounded-full mb-5">{main.category}</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight max-w-3xl mb-3">{main.title}</h2>
              <p className="text-[#FDFBF7]/80 max-w-2xl mb-4">{main.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-sans font-semibold">Lire l'article <ArrowRight className="w-4 h-4" /></span>
            </div>
          </Link>
        </div>
      </section>

      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group block reveal" data-testid={`blog-card-${p.slug}`}>
                <div className="aspect-[5/4] overflow-hidden rounded-2xl mb-5">
                  <img src={p.cover} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-3 text-xs font-sans text-[#4A5550] mb-3">
                  <span className="font-semibold tracking-[0.18em] uppercase text-[#1F3D2B]">{p.category}</span>
                  <span>·</span>
                  <Clock className="w-3 h-3" /> {p.readTime}
                </div>
                <h3 className="font-serif text-2xl text-[#0A0F0D] leading-tight mb-2 group-hover:text-[#1F3D2B] transition-colors">{p.title}</h3>
                <p className="text-sm text-[#4A5550] leading-relaxed">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
