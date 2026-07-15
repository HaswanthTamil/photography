"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function ServicesPage() {
  useScrollReveal();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: "Architectural Design",
      description:
        "We create spaces that are structurally honest and aesthetically enduring. Our approach integrates contextual awareness with modern material science to deliver bespoke residential and commercial landmarks.",
      items: [
        "Concept Development",
        "Site Analysis",
        "Planning Permissions",
        "Construction Docs",
      ],
    },
    {
      title: "Interior Curation",
      description:
        "Defining the soul of the building through material selection and spatial rhythm. We source rare textures and design custom furniture pieces that dialogue with the architecture.",
      items: [
        "Bespoke Cabinetry",
        "Lighting Schemes",
        "Material Palette",
        "Art Advisory",
      ],
    },
    {
      title: "Sustainable Strategy",
      description:
        "Future-proofing our built environment. We implement passive heating, reclaimed systems, and high-performance envelopes to ensure longevity and ecological harmony.",
      items: [
        "Passive House Design",
        "Solar Integration",
        "Water Management",
        "LCA Reporting",
      ],
    },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container">
      <Header />

      <main className="mt-28">
        {/* Notification Bar / Consultation Link */}
        <div className="w-full bg-surface-container-low py-4 px-margin-mobile md:px-margin-desktop text-center border-b border-outline-variant">
          <a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-2" href="#">
            Prefer to talk? <span className="font-semibold underline">Book a call</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        {/* Services Hero */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-v-padding-mobile md:py-section-v-padding bg-surface">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter reveal">
            <div className="md:col-span-8">
              <span className="font-eyebrow-sm text-eyebrow-sm uppercase tracking-widest text-secondary block mb-6 hero-line hero-line-1">Expertise</span>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-12 hero-line hero-line-2">What We Do</h1>
            </div>
          </div>

          {/* Accordion List */}
          <div className="max-w-screen-xl mx-auto border-t border-outline-variant">
            {services.map((service, index) => (
              <div
                key={index}
                className={`accordion-item group border-b border-outline-variant cursor-pointer${activeIndex === index ? " active" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center py-10 md:py-16">
                  <h3 className={`font-headline-lg text-[28px] md:text-headline-lg text-on-surface transition-colors${activeIndex === index ? " text-secondary" : " group-hover:text-secondary"}`}>
                    {service.title}
                  </h3>
                  <span
                    className="material-symbols-outlined accordion-icon transition-transform duration-300 text-[32px]"
                    style={{ transform: activeIndex === index ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    add
                  </span>
                </div>
                <div
                  className="overflow-hidden transition-all duration-500 ease-out"
                  style={{ maxHeight: activeIndex === index ? "400px" : "0" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter pb-16">
                    <div className="md:col-start-6 md:col-span-7">
                      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">{service.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-label-md text-label-md text-on-surface uppercase tracking-wider">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-secondary"></span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-v-padding-mobile md:py-section-v-padding bg-surface-container-low overflow-hidden">
          <div className="max-w-screen-xl mx-auto">
            <span className="font-eyebrow-sm text-eyebrow-sm uppercase tracking-widest text-secondary block mb-6">Our Process</span>
            <h2 className="font-headline-lg text-[32px] md:text-[40px] text-primary mb-20 max-w-2xl">From initial vision to technical realization, our workflow is rigorous and transparent.</h2>

            {/* Horizontal Timeline */}
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-[4.5rem] left-0 w-full h-[1px] bg-outline-variant hidden md:block"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
                {[
                  { num: "01", title: "Briefing", desc: "Defining objectives, site constraints, and the emotional intent of the project.", active: true },
                  { num: "02", title: "Concept", desc: "Translating the brief into asymmetric forms and spatial diagrams.", active: false },
                  { num: "03", title: "Development", desc: "Refining technical details, structural hairlines, and material palettes.", active: false },
                  { num: "04", title: "Coordination", desc: "Integrating engineering disciplines and securing necessary approvals.", active: false },
                  { num: "05", title: "Execution", desc: "Overseeing build quality to ensure the vision is realized flawlessly.", active: false },
                ].map((step) => (
                  <div key={step.num} className="flex flex-col">
                    <div className={`w-12 h-12 flex items-center justify-center font-label-md text-label-md mb-8 relative z-20 ${step.active ? "bg-primary text-on-primary" : "bg-surface text-primary border border-outline-variant"}`}>
                      {step.num}
                    </div>
                    <h4 className="font-headline-lg text-[20px] mb-4">{step.title}</h4>
                    <p className="font-body-md text-on-surface-variant">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="dialogue" className="border-t border-outline-variant bg-surface overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Contact Form */}
            <div className="px-margin-mobile md:px-margin-desktop py-section-v-padding-mobile md:py-section-v-padding border-b md:border-b-0 md:border-r border-outline-variant">
              <span className="font-eyebrow-sm text-eyebrow-sm uppercase tracking-widest text-secondary block mb-6">Contact</span>
              <h2 className="font-headline-lg text-[32px] md:text-[40px] text-primary mb-16">Begin the dialogue.</h2>
              <form className="space-y-12">
                <div className="relative group">
                  <label className="font-eyebrow-sm text-eyebrow-sm text-on-surface-variant uppercase tracking-widest absolute -top-6 left-0 transition-all duration-300 group-focus-within:text-primary">Your Name</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 text-body-lg font-body-lg placeholder:text-surface-dim transition-all" placeholder="John Doe" type="text" />
                </div>
                <div className="relative group">
                  <label className="font-eyebrow-sm text-eyebrow-sm text-on-surface-variant uppercase tracking-widest absolute -top-6 left-0 transition-all duration-300 group-focus-within:text-primary">Email Address</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 text-body-lg font-body-lg placeholder:text-surface-dim transition-all" placeholder="email@studio.com" type="email" />
                </div>
                <div className="relative group">
                  <label className="font-eyebrow-sm text-eyebrow-sm text-on-surface-variant uppercase tracking-widest absolute -top-6 left-0 transition-all duration-300 group-focus-within:text-primary">Service Interest</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant py-4 text-body-lg font-body-lg appearance-none cursor-pointer focus:ring-0">
                    <option>Architectural Design</option>
                    <option>Interior Curation</option>
                    <option>Sustainable Strategy</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="font-eyebrow-sm text-eyebrow-sm text-on-surface-variant uppercase tracking-widest absolute -top-6 left-0 transition-all duration-300 group-focus-within:text-primary">Project Overview</label>
                  <textarea className="w-full bg-transparent border-0 border-b border-outline-variant py-4 text-body-lg font-body-lg placeholder:text-surface-dim transition-all resize-none" placeholder="Tell us about your site and vision..." rows={4}></textarea>
                </div>
                <button className="bg-primary text-on-primary px-12 py-5 font-label-md text-label-md uppercase tracking-widest hover:bg-secondary transition-all w-full md:w-auto" type="submit">Submit Inquiry</button>
              </form>
            </div>

            {/* Right: Map & Info */}
            <div className="flex flex-col">
              {/* Map Placeholder */}
              <div className="h-80 md:h-1/2 w-full grayscale contrast-[1.1] brightness-[0.95]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkrOf10OrVbqeBIvnfZahUsRWpWRTheEEBh2Ln0frXjxhuUbjq-Tm4p8TOW8JelXu0budSYMyMI-gnjfkeLFj9wAiNYFnWHUotCNKCOFpGHQS3gU_ALdksx0_fZeRMPBaktMlvQWMbLa7iRgz6aiuGuueqIpAr264FGg7bKep5-Iwuz7pvoXcpGJXiTKL-P7JCZ6Yj3caq4LRaws4FmipQHjFzQ12qFVvd-u062zLEM8qB-FHWnVe9GONB1Wvh2qAqawM8Vro6pM0')" }}
                ></div>
              </div>

              {/* Contact Info */}
              <div className="p-[80px] bg-surface-container-highest flex-grow flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <span className="font-eyebrow-sm text-eyebrow-sm uppercase tracking-widest text-secondary block mb-4">Studio</span>
                    <address className="not-italic font-body-md text-on-surface-variant leading-relaxed">
                      Seefeldstrasse 124<br />
                      8008 Zürich<br />
                      Switzerland
                    </address>
                  </div>
                  <div>
                    <span className="font-eyebrow-sm text-eyebrow-sm uppercase tracking-widest text-secondary block mb-4">Digital</span>
                    <p className="font-body-md text-on-surface-variant mb-2">studio@architecton.com</p>
                    <p className="font-body-md text-on-surface-variant">+41 44 200 45 00</p>
                  </div>
                </div>
                  <div className="md:col-span-1 border-t border-outline-variant pt-6 reveal">
                  <span className="font-eyebrow-sm text-eyebrow-sm uppercase tracking-widest text-secondary block mb-4">Social</span>
                  <div className="flex gap-8">
                    <a className="font-label-md text-label-md uppercase tracking-widest hover:text-secondary transition-colors relative hover-underline" href="#">Instagram</a>
                    <a className="font-label-md text-label-md uppercase tracking-widest hover:text-secondary transition-colors relative hover-underline" href="#">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
