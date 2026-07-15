"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

const articles = [
  {
    category: "Essay",
    title: "The Case for Concrete: Rethinking Brutalism in the 21st Century",
    date: "Dec 2024",
    excerpt: "Why the most maligned material of the 20th century is the most honest medium for contemporary architecture.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5lxQNeQLnBfAeOr9ra2envIYM3t4UJinjz7XnNgSYWLbRDX_qj4nXuISO1htRLifae8v6PDrTGA5qJGUbUF5bt9w3VcPPquhQxf8d4ZP4NFvn9S68y5Z5B-rdWFij415RB0Z9AXYSa4UGtHMYNEiyrs9ou9a222YbSRuL3Rd7bxVux96fMzCbQROrT2CMLZdoK2Xiitbxmk3cRArKj-sN5MkcCsmjXuQ1B_7d4rmrMGOFY5FY1QGJjwlwhR-veaW5OOyub80QfaE",
  },
  {
    category: "Studio Notes",
    title: "Light as the Architect's Most Essential Material",
    date: "Nov 2024",
    excerpt: "Designing with the sun — how we use solar geometry to sculpt interior space throughout the day.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjkttZogsPktyxsVRCMkrD9-PA0MuuUet9iQ-8cf30DMfBYIURWtav_4o9nF2hL2mTZ3-NeMAzHTMRZSWuoD74sOxbViymTK4LL_HJDNyZCIGk0lvlvTFyR-V_C9qeZAThYttSuwx0SCNZW-BSSNZFCokfV-1Xddub3IbSkOz366X90Ahv_5oW0vN6Oa62jO6IWjGjcw18x5ZFB8lZo97Au2L8p4DTDldkMI30waTUxjGaoWep6fiR5OtMNziJVIKYyBCEX_BSykE",
  },
  {
    category: "Residential",
    title: "Designing for Silence: The Architecture of Quiet Spaces",
    date: "Oct 2024",
    excerpt: "In an era of relentless noise, the deliberate construction of silence has become a form of luxury.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbSllfIUOy4FJC9zrv-5l0h3--_jVY1UBrlkiB4tXm_n_DO1T1vKNswHp4hLaGngeo-vMyeDF3GPA_cDw8hhCOt45olchXbk5E_6Xlvwbq16pknWgF_TNJv3vjJW7--wLMVKMqY76tJcYrZ_UJvmwRW7r2E_shME912M5-Byhe8-5Ue3hQ_768x8zheIiJhlDStbgF_XxfOqhEMUkEVwDt66wII-M1-GqOglyEjeTJY3t1AZ4dgPG6BeqQ--WteNvcTolM74dHJvc",
  },
  {
    category: "Travel",
    title: "Iceland's Vernacular: Lessons from the Volcanic Landscape",
    date: "Sep 2024",
    excerpt: "Three weeks studying how Icelandic vernacular architecture responds to extreme conditions with radical simplicity.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzshENLd_0O-EpjDiV92zdCpU790_c3PHLGgIMGZ3GFdT3fmW4W0nACTBPT355YRBgIEJh0Lijl0kUzxpL_p4w3vjxL0tX-6-8oJamZa7vyICxogneV8OCe62JFNWj5xXCOV-5_odYHgrzXI2hhL8XlHLWfsE5maDQdzo6zJ3-ulLCw8RboS6t3rx7JhWJxTwsEAsUDgGVkRTDKkfQUNe7THmXi0ctUN5K8hZ8RH_GA8yL4-NmXtTUOJH47gf7Tu1nflVCTn90eOA",
  },
  {
    category: "Sustainability",
    title: "The Future of Sustainable Luxury in Residential Architecture",
    date: "Aug 2024",
    excerpt: "How passive house principles and biophilic design are redefining what it means to build well.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG9vcHR3LNiuxQhXLNh-wkMKTmPEhFI7FGJ9nXszbtaHZ8mrcUkK-7L-8Lz9kLoSqZB41XHc3ASDR0js9u5p2iqFDxw9SIJC3_TgxBaCygsYopZBWUfC4yjMYPX-eRMvAJyzXra3NeMEZjrbe2WJiBnEzwsr4ucbx396wAaMfnXrkw7ym4nAJDp2dze7Co-9LWz8HgJLV8JeD12oIjAp9dK0SjxthOkSzdGxbEowroen4RnWeVTXIn4NP6XWrove2ltU3f9pLOTN0",
  },
  {
    category: "Materials",
    title: "Material Honesty: Why We Let Our Buildings Show Their Age",
    date: "Jul 2024",
    excerpt: "Patina, wear, and the beauty of time — the case for materials that evolve rather than deteriorate.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaPgBgXmWseeCb7BlARJtr2eWVmMm4I1olHk-YEuSEHhZ4AAJ9nwoVbA929rFCQqfI6cXBtGcNg-gd5Ty0tdzEAhM0-8wA9YLq08pYazoXBUCN3ewaOVjxWxeIaWaISVPhx107w02uICPIY6LpK8F92M0CWDDkjYaBeXloKfEJxSgJvjt8u7BPdG4ykSyIsn6ospaU-qT4dSzHG4CjpSXob4cqSwfGOBoYjAMDxoucI4EQP2DZCza3wHcV8Hv1W4s1qvRN4eUgsBQ",
  },
];

const categories = ["All", "Essay", "Studio Notes", "Residential", "Travel", "Sustainability", "Materials"];
const cardDelays = ["", "reveal-d1", "reveal-d2", "reveal-d1", "reveal-d2", "reveal-d3"];

export default function JournalPage() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-surface text-on-surface overflow-x-hidden">
      <Header />

      <main className="pt-[88px]">
        {/* ── HERO ─────────────────────────────────── */}
        <section className="bg-surface-container-lowest px-[20px] md:px-[80px] pt-[104px] pb-[80px] border-b border-outline-variant">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <p className="hero-line hero-line-1 font-label-md text-[11px] uppercase tracking-[0.28em] text-on-surface-variant mb-6">
                Issue No. 12 — 2024
              </p>
              <h1
                className="hero-line hero-line-2 font-headline-lg text-primary leading-none tracking-tighter"
                style={{ fontSize: "clamp(64px, 10vw, 128px)" }}
              >
                Journal
              </h1>
              <p className="hero-line hero-line-3 font-body-lg text-on-surface-variant max-w-lg mt-8 leading-relaxed">
                Thoughts on form, light, materiality, and the built environment. Published quarterly by the Architecton studio.
              </p>
            </div>
            <div className="hero-line hero-line-4 md:col-span-4 flex md:justify-end items-end">
              <div className="text-right">
                <p className="font-label-md text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">Latest Issue</p>
                <p className="font-headline-lg text-[28px] text-primary">Winter 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED ARTICLE ─────────────────────── */}
        <section className="bg-primary px-[20px] md:px-[80px] py-[104px]">
          <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 space-y-8">
              <p className="font-label-md text-[11px] uppercase tracking-[0.28em] text-white/40">
                Featured · Essay
              </p>
              <h2
                className="font-headline-lg text-white leading-tight"
                style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
              >
                The Case for Concrete: Rethinking Brutalism in the 21st Century
              </h2>
              <p className="font-body-lg text-white/50 leading-relaxed">
                Why the most maligned material of the 20th century is the most honest medium for contemporary architecture. A meditation on mass, texture, and time.
              </p>
              <a
                className="inline-flex items-center gap-3 font-label-md text-[11px] uppercase tracking-[0.2em] text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-300"
                href="#"
              >
                Read the Essay
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover journal-card"
                  src={articles[0].img}
                  alt="Featured article"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CATEGORY FILTER ──────────────────────── */}
        <section className="bg-surface-container-lowest border-b border-outline-variant px-[20px] md:px-[80px] py-6">
          <div className="flex gap-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-label-md text-[11px] uppercase tracking-[0.2em] pb-1 transition-all duration-200
                  ${activeCategory === cat
                    ? "text-primary border-b border-primary"
                    : "text-on-surface-variant hover:text-primary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ── ARTICLE GRID ─────────────────────────── */}
        <section className="bg-surface-container-lowest px-[20px] md:px-[80px] py-[104px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-16">
            {filtered.map((article, i) => (
              <div key={article.title} className={`journal-card reveal ${cardDelays[i] || ""} group cursor-pointer`}>
                <div className="aspect-[4/3] overflow-hidden mb-6 relative bg-surface-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover"
                    src={article.img}
                    alt={article.title}
                  />
                  <div className="card-overlay absolute inset-0 bg-primary/20 opacity-0" />
                </div>
                <div>
                  <p className="font-label-md text-[10px] uppercase tracking-[0.2em] text-secondary mb-3">
                    {article.category} · {article.date}
                  </p>
                  <h3
                    className="font-headline-lg text-primary mb-3 group-hover:text-secondary transition-colors duration-300 leading-snug"
                    style={{ fontSize: "clamp(18px, 1.5vw, 22px)" }}
                  >
                    {article.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="font-label-md text-[11px] uppercase tracking-[0.2em] text-primary hover-line">
                    Read More
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-on-surface-variant font-body-lg">
              No articles in this category yet.
            </div>
          )}
        </section>

        {/* ── NEWSLETTER ───────────────────────────── */}
        <section className="bg-primary px-[20px] md:px-[80px] py-[104px]">
          <div className="reveal max-w-2xl">
            <p className="font-label-md text-[11px] uppercase tracking-[0.28em] text-white/40 mb-6">
              Stay in the Dialogue
            </p>
            <h2
              className="font-headline-lg text-white mb-6"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
            >
              The Architecton Letter.
            </h2>
            <p className="font-body-lg text-white/50 mb-12 leading-relaxed">
              Quarterly essays, project dispatches, and material studies delivered directly. No algorithms.
            </p>
            <form className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent border-b border-white/30 py-4 px-0
                           font-body-md text-white placeholder:text-white/30
                           focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="bg-white text-primary px-10 py-4 font-label-md text-[11px] uppercase tracking-[0.2em]
                           hover:bg-secondary hover:text-white transition-colors duration-300 shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
