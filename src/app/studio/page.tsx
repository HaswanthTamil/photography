"use client";

import { useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function StudioPage() {
  useScrollReveal();
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Timeline drag-scroll
    const timeline = timelineRef.current;
    if (!timeline) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - timeline.offsetLeft;
      scrollLeft = timeline.scrollLeft;
    };
    const onMouseLeave = () => { isDown = false; };
    const onMouseUp = () => { isDown = false; };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - timeline.offsetLeft;
      const walk = (x - startX) * 2;
      timeline.scrollLeft = scrollLeft - walk;
    };

    timeline.addEventListener("mousedown", onMouseDown);
    timeline.addEventListener("mouseleave", onMouseLeave);
    timeline.addEventListener("mouseup", onMouseUp);
    timeline.addEventListener("mousemove", onMouseMove);

    // Removed header transparency logic since Header handles it

    return () => {
      timeline.removeEventListener("mousedown", onMouseDown);
      timeline.removeEventListener("mouseleave", onMouseLeave);
      timeline.removeEventListener("mouseup", onMouseUp);
      timeline.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <Header />

      <main className="mt-32">
        {/* Intro Section: Philosophy */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-v-padding-mobile md:py-section-v-padding">
          <div className="max-w-[900px]">
            <p className="font-eyebrow-sm text-eyebrow-sm uppercase tracking-[0.2em] text-secondary mb-8">The Studio Philosophy</p>
            <h1 className="font-headline-lg text-[40px] md:text-headline-lg leading-tight text-primary">
              We believe architecture is not merely the assembly of material, but the curation of light, silence, and human intention. Our practice is a continuous inquiry into the permanence of form.
            </h1>
          </div>
        </section>

        {/* Image Break */}
        <section className="px-margin-mobile md:px-margin-desktop">
          <div className="w-full h-[614px] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover grayscale brightness-90"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=100&w=3840&auto=format&fit=crop"
              alt="A wide-angle, cinematic architectural photograph of a minimalist concrete structure at dusk"
            />
          </div>
        </section>

        {/* Team Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-v-padding-mobile md:py-section-v-padding">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
            <div className="md:col-span-4">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">The Collective</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Our multidisciplinary team brings together architects, urbanists, and artists to challenge the boundaries of the built environment. Each member is a specialist in the poetry of structure.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {[
              {
                name: "Julian Vane",
                role: "Founder / Principal",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=100&w=1200&auto=format&fit=crop",
              },
              {
                name: "Elena Ross",
                role: "Design Director",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=100&w=1200&auto=format&fit=crop",
              },
              {
                name: "Marcus Thorne",
                role: "Technical Lead",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=100&w=1200&auto=format&fit=crop",
              },
              {
                name: "Sia Chen",
                role: "Landscape Lead",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=100&w=1200&auto=format&fit=crop",
              },
            ].map((member) => (
              <div key={member.name} className="portrait-container group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="portrait-img w-full h-full object-cover"
                    src={member.img}
                    alt={member.name}
                  />
                </div>
                <h3 className="font-headline-lg text-headline-lg-mobile" style={{ fontSize: "24px" }}>{member.name}</h3>
                <p className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-surface-container-low py-section-v-padding-mobile md:py-section-v-padding overflow-hidden">
          <div className="px-margin-mobile md:px-margin-desktop mb-16">
            <p className="font-eyebrow-sm text-eyebrow-sm uppercase tracking-[0.2em] text-secondary mb-4">Our Evolution</p>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">Milestones</h2>
          </div>
          <div ref={timelineRef} className="relative w-full overflow-x-auto timeline-container px-margin-mobile md:px-margin-desktop pb-12">
            <div className="flex gap-16 min-w-[1200px] relative pt-20">
              {/* Horizontal Line */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant"></div>

              {/* Milestone 1 (Top) */}
              <div className="flex-1 relative pb-20">
                <div className="absolute bottom-1/2 left-0 translate-y-[-1px] w-2 h-2 bg-primary rounded-full"></div>
                <div className="absolute bottom-[calc(50%+24px)] left-0 max-w-[200px]">
                  <span className="font-headline-lg text-[20px] block mb-2">2012</span>
                  <p className="font-body-md text-on-surface-variant">Inception in Zurich with a focus on tectonic research.</p>
                </div>
              </div>

              {/* Milestone 2 (Bottom) */}
              <div className="flex-1 relative pt-20">
                <div className="absolute top-1/2 left-0 translate-y-[-1px] w-2 h-2 bg-primary rounded-full"></div>
                <div className="absolute top-[calc(50%+24px)] left-0 max-w-[200px]">
                  <span className="font-headline-lg text-[20px] block mb-2">2015</span>
                  <p className="font-body-md text-on-surface-variant">First commercial monolith completed in London.</p>
                </div>
              </div>

              {/* Milestone 3 (Top) */}
              <div className="flex-1 relative pb-20">
                <div className="absolute bottom-1/2 left-0 translate-y-[-1px] w-2 h-2 bg-primary rounded-full"></div>
                <div className="absolute bottom-[calc(50%+24px)] left-0 max-w-[200px]">
                  <span className="font-headline-lg text-[20px] block mb-2">2018</span>
                  <p className="font-body-md text-on-surface-variant">Studio expansion into New York City &amp; Tokyo.</p>
                </div>
              </div>

              {/* Milestone 4 (Bottom) */}
              <div className="flex-1 relative pt-20">
                <div className="absolute top-1/2 left-0 translate-y-[-1px] w-2 h-2 bg-primary rounded-full"></div>
                <div className="absolute top-[calc(50%+24px)] left-0 max-w-[200px]">
                  <span className="font-headline-lg text-[20px] block mb-2">2021</span>
                  <p className="font-body-md text-on-surface-variant">Global Sustainability Vanguard accreditation.</p>
                </div>
              </div>

              {/* Milestone 5 (Top) */}
              <div className="flex-1 relative pb-20">
                <div className="absolute bottom-1/2 left-0 translate-y-[-1px] w-2 h-2 bg-primary rounded-full"></div>
                <div className="absolute bottom-[calc(50%+24px)] left-0 max-w-[200px]">
                  <span className="font-headline-lg text-[20px] block mb-2">2024</span>
                  <p className="font-body-md text-on-surface-variant">Commencement of the Architecton Journal.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-v-padding-mobile md:py-section-v-padding">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
            <div className="md:col-span-12">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">Awards &amp; Recognition</h2>
            </div>
          </div>
          <div className="border-t border-outline-variant">
            {[
              {
                year: "2023",
                award: "Mies van der Rohe Shortlist",
                desc: "Recognized for the structural innovation and material honesty of the Concrete Pavilion project in Lisbon.",
              },
              {
                year: "2022",
                award: "AIA Global Design Award",
                desc: "Awarded for the 'Silent House' series, redefining the relationship between domesticity and landscape.",
              },
              {
                year: "2020",
                award: "Red Dot Best of the Best",
                desc: "Honored for superior design quality and structural ingenuity in urban redevelopment.",
              },
              {
                year: "2017",
                award: "Wallpaper* Design Awards",
                desc: "Selected as Best New Private Residence for our sculptural approach to the Tokyo Heights project.",
              },
            ].map((item) => (
              <div key={item.year} className="award-row grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-gutter py-8 border-b border-outline-variant px-4 -mx-4">
                <div className="md:col-span-4 flex items-baseline gap-4">
                  <span className="font-label-md text-on-surface-variant">{item.year}</span>
                  <h4 className="font-headline-lg" style={{ fontSize: "24px" }}>{item.award}</h4>
                </div>
                <div className="md:col-span-8">
                  <p className="font-body-md text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
