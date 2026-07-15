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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjkttZogsPktyxsVRCMkrD9-PA0MuuUet9iQ-8cf30DMfBYIURWtav_4o9nF2hL2mTZ3-NeMAzHTMRZSWuoD74sOxbViymTK4LL_HJDNyZCIGk0lvlvTFyR-V_C9qeZAThYttSuwx0SCNZW-BSSNZFCokfV-1Xddub3IbSkOz366X90Ahv_5oW0vN6Oa62jO6IWjGjcw18x5ZFB8lZo97Au2L8p4DTDldkMI30waTUxjGaoWep6fiR5OtMNziJVIKYyBCEX_BSykE"
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
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB42fhAQPvdsBvY3z-dTSzwjLGRXXIEW6XQQpuQdCXRXCSJQGVDdM0fRrgzJeVtQbucdpdhX3PHQknMlki2lmRYoDJ9ftFIld3e2hTPkz7UcK2hTfvSFV_kFeGc-C1xuDYi-cmkox4fw-ps1JZ59bhB6CFhmP_-mG2VNkzt73EZF_VgA3JRg2nN2ZMPktdPOn91uLO34zKn8-eZnhhJUYmy0VpkQLqgNcK1Lc6AyK6BZBerrM09M8QJRRVPYLlo1O4VbdTW3lhDVCM",
              },
              {
                name: "Elena Ross",
                role: "Design Director",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMo5DVs4gw0WyyMlN2D7YlIHzoICWK0LkP_bv9T8FA5G3_w4Jubpmoj2jTMTff9J_knoJMMPEB8sOaY2uDJYHlZKQ3btdQt8Eqr7O5T1RBX21s-8Fh1bqvQqyZKupu7Xaen1LGX4-xo3aigLJJN2BAixQnOtq9kPSVnEQPNphloCwuAxG-TkODTVVwDbciQ5vAYhdZzmp-XN_47Sw8KM983vibqPXD32v4S3Dd2BmGkrqp8ylUhxsWtqXUWuy4COdM-P1VQbTwWac",
              },
              {
                name: "Marcus Thorne",
                role: "Technical Lead",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJiVHzGaeW2hL5-i48adozXFtrc05-JcP7XhHkLSlHtkEbqhj9TM5gbHf9JuOwJOKyTH7GOruX_lf_3CbhmO5Mc3X81ZMVwZZaZhO2dsMq6aC_2MSDtF9ZAJ935pDR7GryGyPRMAyS_dmg3x-if8WhHpH3C0zUSncOYZStAI84MamwoaUIeoJEpVGXkbyfxwVF4uSRUjLo1dinoCR2HXGaL3RzhjTW4nEYXwTAnFvxdUjItXHEcvjDHtViy8G9FBk0Mq37IxDWWFI",
              },
              {
                name: "Sia Chen",
                role: "Landscape Lead",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAqaiHNwpZhaAjdTLB4LV1tpod-flW5zo7UbUjD53Qc30U3uT_o8h__nYjQT8tQbHpMUSchUcxjiHZm3CC80lNoSuNh9PPztcJk8XOOiXtbvV-KMnQyU6njFx7x4o8Trk_AdmzmTlAPpgmrfo8Ar2WrzJsYjslqrTB8TF9A-V3tnHZ1_vo3CUCYu05OgT93s3m0SswhXK2Y604fT-FNRZTM5JLjCzAIFPkFGU5sjeCfSRmrJxMv8CTwAKir1_rSJSq6NdXSvb8RZE",
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
