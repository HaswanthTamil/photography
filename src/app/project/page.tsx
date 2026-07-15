"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

import { useEffect } from "react";

export default function ProjectDetailPage() {
  useScrollReveal();

  useEffect(() => {

    // Parallax effect for hero image
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const heroImage = document.querySelector<HTMLImageElement>("section img");
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleParallax);
    window.addEventListener("scroll", handleParallax);

    return () => {
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <Header />

      <main>
        {/* Full-bleed Hero */}
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbSllfIUOy4FJC9zrv-5l0h3--_jVY1UBrlkiB4tXm_n_DO1T1vKNswHp4hLaGngeo-vMyeDF3GPA_cDw8hhCOt45olchXbk5E_6Xlvwbq16pknWgF_TNJv3vjJW7--wLMVKMqY76tJcYrZ_UJvmwRW7r2E_shME912M5-Byhe8-5Ue3hQ_768x8zheIiJhlDStbgF_XxfOqhEMUkEVwDt66wII-M1-GqOglyEjeTJY3t1AZ4dgPG6BeqQ--WteNvcTolM74dHJvc"
              alt="An expansive wide-angle photograph of a monolithic concrete villa nestled into a rugged cliffside at dusk"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          <div className="absolute bottom-16 left-[80px] max-w-4xl z-10">
            <p className="font-eyebrow-sm text-eyebrow-sm text-surface uppercase tracking-[0.2em] mb-4">Residential • 2024</p>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-surface leading-none">The Obsidian Pavilion</h1>
          </div>
        </section>

        {/* Project Info & Narrative */}
        <section className="py-section-v-padding-mobile md:py-section-v-padding px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Sticky Info Sidebar (4 cols) */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="md:sticky md:top-32 space-y-12">
              <div className="space-y-6">
                <div className="pt-2 border-t border-outline-variant">
                  <p className="font-eyebrow-sm text-eyebrow-sm text-outline uppercase mb-2">Location</p>
                  <p className="font-body-md text-body-md text-on-surface">Reykjavík, Iceland</p>
                </div>
                <div className="pt-2 border-t border-outline-variant">
                  <p className="font-eyebrow-sm text-eyebrow-sm text-outline uppercase mb-2">Year</p>
                  <p className="font-body-md text-body-md text-on-surface">2024</p>
                </div>
                <div className="pt-2 border-t border-outline-variant">
                  <p className="font-eyebrow-sm text-eyebrow-sm text-outline uppercase mb-2">Area</p>
                  <p className="font-body-md text-body-md text-on-surface">450 m²</p>
                </div>
                <div className="pt-2 border-t border-outline-variant">
                  <p className="font-eyebrow-sm text-eyebrow-sm text-outline uppercase mb-2">Client</p>
                  <p className="font-body-md text-body-md text-on-surface">Private Collector</p>
                </div>
                <div className="pt-2 border-t border-outline-variant">
                  <p className="font-eyebrow-sm text-eyebrow-sm text-outline uppercase mb-2">Collaborators</p>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">Structural: LARK Engineers<br />Landscape: TERRA Studio</p>
                </div>
              </div>
              <div className="flex gap-4">
                <a className="w-10 h-10 border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">share</span>
                </a>
                <a className="w-10 h-10 border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" href="#">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Narrative Text (8 cols) */}
          <div className="md:col-span-8 lg:col-start-5 lg:col-span-7 space-y-16">
            <div className="max-w-2xl space-y-8">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">A dialogue between raw geology and refined geometry.</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Situated on the volcanic periphery of Iceland&apos;s capital, The Obsidian Pavilion serves as a meditative retreat that honors the austerity of its environment. The project is defined by its use of local basalt and pigmented concrete, creating a structure that feels as though it was carved directly from the terrain rather than placed upon it.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Our approach focused on the &quot;luxury of the view,&quot; where the architecture acts as a sophisticated frame for the ever-changing Icelandic light. The interior spaces are organized around a central courtyard, protecting the residence from harsh coastal winds while ensuring natural illumination reaches every corner of the plan.
              </p>
            </div>

            {/* Large Serif Pull-Quote */}
            <blockquote className="py-12 border-y border-outline-variant">
              <p className="font-display-xl text-headline-lg-mobile md:text-[56px] italic leading-tight text-secondary font-medium">
                &quot;Architecture is the bridge between the permanence of the earth and the ephemerality of human existence.&quot;
              </p>
              <footer className="mt-8 font-eyebrow-sm text-eyebrow-sm text-outline uppercase tracking-widest">— Julian Vane, Lead Architect</footer>
            </blockquote>

            <div className="max-w-2xl space-y-8">
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                The materiality within is a study of tactile contrasts. Brushed oak surfaces meet cold steel junctions, and soft wool textiles offset the rigidity of the stone walls. Every detail, from the concealed lighting channels to the custom-machined bronze hardware, was meticulously engineered to provide a seamless sensory experience.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="space-y-gutter pb-section-v-padding">
          {/* Full Bleed Gallery Image */}
          <div className="w-full h-[819px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover project-image-hover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzshENLd_0O-EpjDiV92zdCpU790_c3PHLGgIMGZ3GFdT3fmW4W0nACTBPT355YRBgIEJh0Lijl0kUzxpL_p4w3vjxL0tX-6-8oJamZa7vyICxogneV8OCe62JFNWj5xXCOV-5_odYHgrzXI2hhL8XlHLWfsE5maDQdzo6zJ3-ulLCw8RboS6t3rx7JhWJxTwsEAsUDgGVkRTDKkfQUNe7THmXi0ctUN5K8hZ8RH_GA8yL4-NmXtTUOJH47gf7Tu1nflVCTn90eOA"
              alt="Interior staircase detail"
            />
          </div>

          {/* 2-Up Grid Images */}
          <div className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="h-[614px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover project-image-hover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlv7UblZKfYhXks3tjDnN4b1WWj7IaE3_uIRPJNjXGXs6NyiVs0CGaqpxU2FEYh7lDVlNyNLY1Kat1-guH6azZne7wuQlc6iw33oaJhcvi2X97LFdzxV4IPmSr3UyTpajret6OG5SE1G5DIhnj6USnFs2mCkoK8IlFNcwt2ATkVlvEbluBJqRW7o-HHqJjZoYFsxyW1tDugWK6tnUCzYgsKxuN_72jbH3tyugDaRiyPRbC0oJZCTDGha14oKddNoHuPHPN1_2O6cg"
                alt="Minimalist living room with Icelandic landscape"
              />
            </div>
            <div className="h-[614px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover project-image-hover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQCW0AGs3FEWWVkoAlIN-a7wJzeNWBiVnu6zS7NLO4uBmtdziBsd8jUB034AYBiTaJpT6Y6EoI6i4KGaP-h4beFtW0vk_DusVslV7uZ2Bf2OG2G0U3SR89R24Me9RgxGCHhlK9WR4EWODcTtdE-rwMknOyVopmasxcPUhQX6E1NLwKo5WWoRensPKg6hu3OBIgKzqy9n7XvNB3opf8QxBIhfpnKnvFl72Axd8Bym6TmxgQDKZBjWwCUvs7rv7DDCYIVDCq879bXfY"
                alt="Night-time glass-walled pavilion"
              />
            </div>
          </div>

          {/* Full Bleed Gallery Image */}
          <div className="w-full h-[819px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover project-image-hover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAol6fUlNa3Eq61DpnPzt_kZtPqGJZ8Li6mXDPz3OdtfecmnCjioJm1g4_cG7OZTNIQBUAPiMotmEFXyXGnDWF1b7DVprOw6Wg_Nt0K02z3pC3RgF_-6z_TpoFDB35YixfdZN6yCv2EnRAsYf8lBJOG0bajdUFzqRDXblBtFa_TaWFSdeY8i8QqNM7m2KUkf3znnay5ouKtN0qpmiMtaiObo7Hf9nLKHjve5ivOZWWahPvYYFIDOUqrczw4L7dRV6o2ct9F2uqWxrU"
              alt="Wide-angle landscape shot at dawn"
            />
          </div>
        </section>

        {/* Next Project Band */}
        <section className="relative h-[614px] w-full flex items-center justify-center overflow-hidden cursor-pointer group">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWQRvsivE917El-4oSJj4wiG5BRQcIMx4AmadGd9NGfKQh47xCGIMrs5ivCUer3T_EzHnHIhMXXoYYl6_5Rl4NHhhi8j8In9xUQX5dfKqalikx3F-aph3wc7mhKXWHIOrFhA6X7sdslHNyk156VJ3Ca6nvwDMHrlR4WTT1sMuI_KkEB0HFBpmCUcNB0z0WEcNP_Q3aovn0qYJ0fohGxWkOSOHfH4KgdAjORTUOkhUCaNYu__j6iFhss57KDJIFVpNJfNM7I6Z-EoM"
              alt="Azure Coastline - next project"
            />
            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500"></div>
          </div>
          <div className="relative z-10 text-center space-y-4">
            <p className="font-eyebrow-sm text-eyebrow-sm text-surface uppercase tracking-[0.3em]">Next Project</p>
            <h2 className="font-display-xl text-display-xl-mobile md:text-display-xl text-surface">Azure Coastline</h2>
            <div className="flex justify-center pt-8">
              <span className="material-symbols-outlined text-surface text-4xl animate-bounce">arrow_downward</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
