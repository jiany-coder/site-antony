import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Clock, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import SEO, { buildArticleSchema } from "../components/SEO";
import { COMPANY } from "../data/company";
import { BLOG_POSTS, getPost } from "../data/blog";
import ContactForm from "../components/ContactForm";

function md(content) {
  // Lightweight markdown -> HTML (h2/h3, **bold**, lists, paragraphs, tables, hr)
  const lines = content.split("\n");
  let html = "";
  let inUl = false, inOl = false, inTable = false;
  const flush = () => {
    if (inUl) { html += "</ul>"; inUl = false; }
    if (inOl) { html += "</ol>"; inOl = false; }
    if (inTable) { html += "</table>"; inTable = false; }
  };
  const inline = (s) =>
    s
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/`(.*?)`/g, "<code>$1</code>");

  for (let raw of lines) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    if (line.startsWith("## ")) { flush(); html += `<h2>${inline(line.slice(3))}</h2>`; continue; }
    if (line.startsWith("### ")) { flush(); html += `<h3>${inline(line.slice(4))}</h3>`; continue; }
    if (line.startsWith("- ")) {
      if (!inUl) { flush(); html += "<ul>"; inUl = true; }
      html += `<li>${inline(line.slice(2))}</li>`;
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      if (!inOl) { flush(); html += "<ol>"; inOl = true; }
      html += `<li>${inline(line.replace(/^\d+\.\s/, ""))}</li>`;
      continue;
    }
    if (line.startsWith("|")) {
      if (!inTable) { flush(); html += "<table>"; inTable = true; }
      if (/^\|[-:\s|]+\|$/.test(line)) continue;
      const cells = line.split("|").slice(1, -1).map((c) => c.trim());
      const isHeader = !html.includes("<tr>") || html.endsWith("<table>");
      html += "<tr>" + cells.map((c) => (isHeader ? `<th>${inline(c)}</th>` : `<td>${inline(c)}</td>`)).join("") + "</tr>";
      continue;
    }
    flush();
    html += `<p>${inline(line)}</p>`;
  }
  flush();
  return html;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO
        title={`${post.title} | Blog – ${COMPANY.brand}`}
        description={post.excerpt}
        canonical={`${COMPANY.site}/blog/${slug}`}
        image={post.cover}
        type="article"
        jsonLd={buildArticleSchema(post)}
      />

      <article>
        <section className="pt-32 pb-12">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[#1F3D2B] font-sans font-semibold link-underline mb-8">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </Link>
            <div className="flex items-center gap-3 text-xs font-sans text-[#4A5550] mb-5">
              <span className="font-semibold tracking-[0.18em] uppercase text-[#1F3D2B]">{post.category}</span>
              <span>·</span>
              <Clock className="w-3 h-3" /> {post.readTime}
              <span>·</span>
              <time>{new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</time>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0F0D] font-light leading-[1.05] tracking-tight mb-6">{post.title}</h1>
            <p className="text-xl text-[#4A5550] leading-relaxed">{post.excerpt}</p>
          </div>
        </section>

        <section className="pb-8">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="aspect-[16/9] overflow-hidden rounded-3xl">
              <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="prose-blog" dangerouslySetInnerHTML={{ __html: md(post.content) }} />

            <div className="mt-14 p-8 rounded-2xl bg-[#1F3D2B] text-[#FDFBF7]">
              <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-[#F2EBD9] mb-3">Besoin d'un devis ?</p>
              <h3 className="font-serif text-3xl text-[#F2EBD9] mb-4">Parlons de votre projet</h3>
              <p className="text-[#FDFBF7]/80 mb-6">Notre équipe d'experts répond gratuitement à toutes vos questions.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#F2EBD9] text-[#1F3D2B] px-6 py-3 rounded-full font-sans font-semibold text-sm">Devis gratuit <ArrowRight className="w-4 h-4" /></Link>
                <a href={`tel:${COMPANY.phoneRaw}`} className="inline-flex items-center justify-center gap-2 border-2 border-[#F2EBD9]/40 text-[#F2EBD9] px-6 py-3 rounded-full font-sans font-semibold text-sm hover:bg-[#F2EBD9] hover:text-[#1F3D2B] transition-colors"><Phone className="w-4 h-4" /> {COMPANY.phone}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F4F1EA]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0A0F0D] font-light mb-10">À lire également</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group block">
                  <div className="aspect-[5/4] overflow-hidden rounded-2xl mb-5">
                    <img src={p.cover} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <h3 className="font-serif text-xl text-[#0A0F0D] leading-tight mb-2 group-hover:text-[#1F3D2B]">{p.title}</h3>
                  <p className="text-sm text-[#4A5550]">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
