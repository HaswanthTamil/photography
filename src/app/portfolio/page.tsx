"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useEffect } from "react";

export default function PortfolioPage() {
  useScrollReveal();

  useEffect(() => {
    // Filter interaction
    const filterButtons = document.querySelectorAll<HTMLButtonElement>(".filter-underline");
    const handleFilterClick = (btn: HTMLButtonElement) => {
      filterButtons.forEach((b) => {
        b.classList.remove("filter-active", "text-primary");
        b.classList.add("text-on-surface-variant");
      });
      btn.classList.add("filter-active", "text-primary");
      btn.classList.remove("text-on-surface-variant");
    };
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => handleFilterClick(btn));
    });

    // Intersection Observer for fade-in effect
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-4");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.add("transition-all", "duration-1000", "opacity-0", "translate-y-4");
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <Header />

      <main className="pt-32">
        {/* Header Section */}
        <section className="px-margin-desktop mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-gutter">
            <h1 className="font-display-xl text-display-xl md:w-1/2">Our Work</h1>
            <p className="font-body-lg text-body-lg md:w-1/3 text-on-surface-variant">
              A curated selection of architectural milestones, ranging from intimate private residences to transformative commercial developments.
            </p>
          </div>
          {/* Navigation Filter Tabs */}
          <div className="mt-16 flex flex-wrap gap-8 border-b border-outline-variant pb-4">
            <button className="font-label-md text-label-md uppercase tracking-widest filter-underline filter-active text-primary">All Projects</button>
            <button className="font-label-md text-label-md uppercase tracking-widest filter-underline text-on-surface-variant hover:text-primary transition-colors">Residential</button>
            <button className="font-label-md text-label-md uppercase tracking-widest filter-underline text-on-surface-variant hover:text-primary transition-colors">Commercial</button>
            <button className="font-label-md text-label-md uppercase tracking-widest filter-underline text-on-surface-variant hover:text-primary transition-colors">Public Spaces</button>
            <button className="font-label-md text-label-md uppercase tracking-widest filter-underline text-on-surface-variant hover:text-primary transition-colors">Interiors</button>
          </div>
        </section>

        {/* Project Grid */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Project 1 */}
            <div className="project-card relative aspect-[4/5] overflow-hidden group border-r border-b border-outline-variant">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5lxQNeQLnBfAeOr9ra2envIYM3t4UJinjz7XnNgSYWLbRDX_qj4nXuISO1htRLifae8v6PDrTGA5qJGUbUF5bt9w3VcPPquhQxf8d4ZP4NFvn9S68y5Z5B-rdWFij415RB0Z9AXYSa4UGtHMYNEiyrs9ou9a222YbSRuL3Rd7bxVux96fMzCbQROrT2CMLZdoK2Xiitbxmk3cRArKj-sN5MkcCsmjXuQ1B_7d4rmrMGOFY5FY1QGJjwlwhR-veaW5OOyub80QfaE" alt="Monolith House" />
              <div className="project-overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12 text-white">
                <div className="mb-2 font-label-md text-label-md uppercase tracking-widest opacity-80">Residential</div>
                <h3 className="font-headline-lg text-headline-lg mb-1">Monolith House</h3>
                <span className="font-label-md text-label-md opacity-60">2024</span>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project-card relative aspect-[4/5] overflow-hidden group border-r border-b border-outline-variant">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD71LUQB_aYAXbQIsO7nOndhM0jd1mxgtUena5IeOFykCmIR96rZWot-WfoCgnlClp9dYHhapetl64FlrydZO074NJlN7sMEi2gEh9Xqm36KnMef4GCgMNuOtxzUM3PIYBNUMujZbi8vy6H9ORlLU-ZZe-EKdFSGlifz6XXbpzuX7_aMSK4YLxiuHLidDdbQBa7PjjI-UYO1m1ls1ER-LYGDKYzgYXjypy5SFA3y0-VYQ24P2lVjLVSjuVhUmIY7FzYSH5joTuA6dw" alt="Nexus Retail Lab" />
              <div className="project-overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12 text-white">
                <div className="mb-2 font-label-md text-label-md uppercase tracking-widest opacity-80">Commercial</div>
                <h3 className="font-headline-lg text-headline-lg mb-1">Nexus Retail Lab</h3>
                <span className="font-label-md text-label-md opacity-60">2023</span>
              </div>
            </div>
            {/* Project 3 */}
            <div className="project-card relative aspect-[4/5] overflow-hidden group border-b border-outline-variant">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4uvkBTmSqsYWOIaBUSAZEz-ulNU2Cwnk0xYeFowbLci9ERfncz_1T_mKqqYYkcs3AhfU9w4JgyBKbxAHKkG3tuwjYNu2zYOM4qvLJrM4ISwVwGvOCr70wa4kyXRSR5wo-2QUNDeR9peLJBhZ2BmdsXp_-w2ZyFCvVj31QxIxHUcprUS21w6Ae3B3tgzpF9mbC92LI4gMFBSoehZl6K919xfOhP7IOkQ8Aoo8l0aZRQ_k8rH7oYESiFkMhlDjNQBnOPRUdWzpQcss" alt="Aethel Gallery" />
              <div className="project-overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12 text-white">
                <div className="mb-2 font-label-md text-label-md uppercase tracking-widest opacity-80">Public Spaces</div>
                <h3 className="font-headline-lg text-headline-lg mb-1">Aethel Gallery</h3>
                <span className="font-label-md text-label-md opacity-60">2023</span>
              </div>
            </div>
            {/* Project 4 */}
            <div className="project-card relative aspect-[4/5] overflow-hidden group border-r border-b border-outline-variant">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTRu2RoQd75vt6rGNlVOLg-YvVtmfKqrO7fFyznhAU_eC-9rardKisIcJdFpt03mLwB5z1GvZKdVPBuASdJ4ZzH4GI7DlZrIIbV_u3VBrdo-c-tj1fitMza5kvsmhG-LRP1BWqS8zv3UBQdDu3rY_S6E-9eQjXiWmVm-J3X9CWewKz4scKxX_iCcEsBMwCqBDWq5H27ydWvLMTTZ7DisRQB_I6sd1cJDklhGdroipMJ2jBrlGFfSmPzXCNwKawne8SU4KO06sVmFs" alt="The Archive" />
              <div className="project-overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12 text-white">
                <div className="mb-2 font-label-md text-label-md uppercase tracking-widest opacity-80">Interiors</div>
                <h3 className="font-headline-lg text-headline-lg mb-1">The Archive</h3>
                <span className="font-label-md text-label-md opacity-60">2022</span>
              </div>
            </div>
            {/* Project 5 */}
            <div className="project-card relative aspect-[4/5] overflow-hidden group border-r border-b border-outline-variant">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1ElCMhLKSj0w5BOkqDDJeHi8w3Lw1n4I88i5uBpN2hxCfq2EpsTaNl03uGCamcCYoeYByVqgqcxHH005kWSxlMkRQP7FV2VngFzKQinWFRAVnGb1dDphoDZWmH21hJUW8hfAGaorBXZteCxHSv2c_5NaHbiVRZPp-fzlLcehguglxdmM_07vCJJjAoDr-k4GEG_8Hl10iSaA7hETpvCfXQBWwne5aaiIfKWTz9WZ2Qh9TygK3LhAh6rd3M8x6N9xg1hkjZSexUAY" alt="Vila Marés" />
              <div className="project-overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12 text-white">
                <div className="mb-2 font-label-md text-label-md uppercase tracking-widest opacity-80">Residential</div>
                <h3 className="font-headline-lg text-headline-lg mb-1">Vila Marés</h3>
                <span className="font-label-md text-label-md opacity-60">2022</span>
              </div>
            </div>
            {/* Project 6 */}
            <div className="project-card relative aspect-[4/5] overflow-hidden group border-b border-outline-variant">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhfc12kY32aNonZ-V789Zxd3j9sW7A6mWHEk4s8wKM3q4zce_tXMjciIudMBzUcYEtlESpgKUwmh1HG23e6meMNYPr9jn2eFqKyDH6E42Dv1yVDrFwtoLfUEu-QHeMuMRFHiGtAIJulQrUgcyedgcLWr4kZL07g1pd4ltztVSP0FXEiLPP-5n2stTrpUZHGczbE2Cmytked98llGM8NBL97j0RFFV8pt_TCt3xFXcomxmTIyuC9aDuMyJB2mibA-RsHnjxzk00huk" alt="Elysium HQ" />
              <div className="project-overlay absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 flex flex-col justify-end p-12 text-white">
                <div className="mb-2 font-label-md text-label-md uppercase tracking-widest opacity-80">Commercial</div>
                <h3 className="font-headline-lg text-headline-lg mb-1">Elysium HQ</h3>
                <span className="font-label-md text-label-md opacity-60">2021</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-section-v-padding px-margin-desktop bg-surface-container-highest">
          <div className="max-w-4xl">
            <h2 className="font-headline-lg text-headline-lg mb-8">Ready to build your legacy?</h2>
            <p className="font-body-lg text-body-lg mb-12 text-on-surface-variant max-w-2xl">
              We collaborate with visionaries to create spaces that transcend time. Let&apos;s discuss your next landmark project.
            </p>
            <a className="inline-block bg-secondary text-on-secondary px-12 py-5 font-label-md text-label-md uppercase tracking-widest transition-all duration-300 hover:opacity-90" href="/services#dialogue">Start a Conversation</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
