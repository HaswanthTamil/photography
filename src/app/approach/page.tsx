"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

const principles = [
  {
    num: "01",
    heading: "Context is the first material.",
    body: "We read the land, the light, the topography, and the lives that will inhabit a space before we put pencil to paper. The site is not a constraint — it is the primary design input. Architecture that ignores its context is an act of imposition.",
  },
  {
    num: "02",
    heading: "Structure should tell the truth.",
    body: "Honest expression of materials — not hidden behind cladding, but celebrated for what they are. We find beauty in the exposed concrete joint, the visible steel connection, the grain of timber under clear finish. Structural integrity and aesthetic integrity are the same thing.",
  },
  {
    num: "03",
    heading: "Restraint requires more courage than abundance.",
    body: "We edit obsessively. Each element earns its presence or is removed. The discipline of subtraction — of deciding what not to do — defines our work more than any signature gesture. Luxury is found not in accumulation, but in the profound clarity of a single perfect room.",
  },
];

const steps = [
  { num: "01", title: "Listen", desc: "Briefing, site visits, life documentation. We map how you actually live, not how you imagine you live." },
  { num: "02", title: "Observe", desc: "Solar study, topography, views, winds. The site reveals its logic to those patient enough to wait." },
  { num: "03", title: "Sketch", desc: "Rapid ideation across multiple directions. We explore widely before we commit to a path." },
  { num: "04", title: "Refine", desc: "Meticulous technical development. Every detail is engineered for permanence and precision." },
  { num: "05", title: "Execute", desc: "On-site presence throughout construction. We do not hand over a drawing set and disappear." },
];

const values = [
  { icon: "architecture", title: "Site-Specific Logic", desc: "We believe architecture should be an extension of its environment, not an imposition upon it. Every project begins with a deep reading of place." },
  { icon: "grid_view", title: "Structural Purity", desc: "Finding beauty in the honest expression of materials: concrete, steel, timber, and glass. Structure and aesthetics are inseparable in our work." },
  { icon: "light_mode", title: "Natural Rhythms", desc: "Designing with the sun. Utilizing light as a primary building material to sculpt interior space throughout the day and across seasons." },
  { icon: "eco", title: "Sustainable Legacy", desc: "Timeless aesthetics paired with passive solar principles for homes that endure for generations without compromise to performance." },
];

const stepDelays = ["", "reveal-d1", "reveal-d2", "reveal-d3", "reveal-d4"];

export default function ApproachPage() {
  useScrollReveal();

  return (
    <div className="bg-surface text-on-surface overflow-x-hidden">
      <Header />

      <main className="pt-[88px]">
        {/* ── HERO ─────────────────────────────────── */}
        <section className="bg-primary min-h-[90vh] flex flex-col justify-end px-[20px] md:px-[80px] pb-[104px]">
          <div className="max-w-5xl">
            <p className="hero-line hero-line-1 font-label-md text-[11px] uppercase tracking-[0.28em] text-white/40 mb-10">
              Methodology
            </p>
            <h1 className="text-white leading-none">
              <span className="hero-line hero-line-2 block font-headline-lg text-[clamp(48px,8vw,96px)] font-semibold tracking-[-0.03em]">
                Architecture
              </span>
              <span className="hero-line hero-line-3 block font-headline-lg text-[clamp(48px,8vw,96px)] font-medium tracking-[-0.03em] italic opacity-70">
                begins with
              </span>
              <span className="hero-line hero-line-4 block font-headline-lg text-[clamp(48px,8vw,96px)] font-semibold tracking-[-0.03em]">
                listening.
              </span>
            </h1>
            <p className="hero-line hero-line-5 font-body-lg text-white/50 max-w-md mt-10 leading-relaxed">
              Before form, before material, before structure — there is understanding.
              Our practice begins not with a concept, but with a question.
            </p>
          </div>
        </section>

        {/* ── THREE PRINCIPLES ─────────────────────── */}
        <section className="bg-surface-container-lowest px-[20px] md:px-[80px] py-[104px]">
          {principles.map((item, i) => (
            <div
              key={i}
              className="reveal grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-outline-variant py-20 last:border-b-0 last:pb-0 first:pt-0"
            >
              <div className="md:col-span-2 flex items-start">
                <span
                  className="font-semibold leading-none select-none text-outline-variant"
                  style={{ fontSize: "clamp(64px, 8vw, 120px)" }}
                >
                  {item.num}
                </span>
              </div>
              <div className="md:col-span-8 md:col-start-4">
                <h2 className="font-headline-lg italic text-primary mb-8" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                  {item.heading}
                </h2>
                <p className="font-body-lg text-on-surface-variant leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ── THE METHOD ───────────────────────────── */}
        <section className="bg-primary px-[20px] md:px-[80px] py-[104px]">
          <div className="reveal mb-20">
            <p className="font-label-md text-[11px] uppercase tracking-[0.28em] text-white/40 mb-6">
              Our Process
            </p>
            <h2
              className="font-headline-lg text-white max-w-2xl"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}
            >
              A sequence refined over 15 years of practice.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
            <div className="absolute top-5 left-0 w-full h-px bg-white/10 hidden md:block" />
            {steps.map((step, i) => (
              <div key={i} className={`reveal ${stepDelays[i]}`}>
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center
                                font-label-md text-[11px] text-white/50 mb-8 relative z-10 bg-primary">
                  {step.num}
                </div>
                <h3 className="font-headline-lg text-[20px] text-white mb-3">{step.title}</h3>
                <p className="font-body-md text-white/40 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PULL QUOTE ───────────────────────────── */}
        <section className="bg-surface-container-lowest px-[20px] md:px-[80px] py-[120px]">
          <div className="max-w-3xl mx-auto text-center reveal">
            <span className="material-symbols-outlined text-secondary text-5xl mb-12 opacity-20 block">
              format_quote
            </span>
            <blockquote
              className="font-headline-lg italic text-primary leading-tight mb-12"
              style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
            >
              &quot;The greatest buildings in history were not designed for the ages.
              They were designed for a single human life — and then they endured.&quot;
            </blockquote>
            <cite className="font-label-md text-[11px] uppercase tracking-[0.28em] text-outline not-italic">
              — Julian Vane, Founder
            </cite>
          </div>
        </section>

        {/* ── FOUR VALUES ──────────────────────────── */}
        <section className="bg-primary px-[20px] md:px-[80px] py-[104px]">
          <div className="reveal mb-16">
            <p className="font-label-md text-[11px] uppercase tracking-[0.28em] text-white/40 mb-6">
              Foundational Values
            </p>
            <h2 className="font-headline-lg text-white" style={{ fontSize: "clamp(32px, 3.5vw, 48px)" }}>
              What we stand for.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {values.map((val, i) => (
              <div key={i} className="reveal bg-primary p-14 group">
                <span className="material-symbols-outlined text-white/20 text-4xl mb-8 block
                                 group-hover:text-secondary transition-colors duration-500">
                  {val.icon}
                </span>
                <h3 className="font-headline-lg text-[22px] text-white mb-4">{val.title}</h3>
                <p className="font-body-md text-white/40 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────── */}
        <section className="bg-surface-container-lowest px-[20px] md:px-[80px] py-[104px]">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 reveal">
            <div>
              <p className="font-label-md text-[11px] uppercase tracking-[0.28em] text-secondary mb-6">
                Begin the Conversation
              </p>
              <h2 className="font-headline-lg text-primary max-w-2xl" style={{ fontSize: "clamp(32px, 4vw, 56px)" }}>
                Ready to build something permanent?
              </h2>
            </div>
            <a
              href="/services#dialogue"
              className="shrink-0 bg-primary text-on-primary px-12 py-5
                         font-label-md text-[11px] uppercase tracking-[0.12em]
                         hover:bg-secondary transition-colors duration-300"
            >
              Start a Project
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
