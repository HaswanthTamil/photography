"use client";

import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative h-screen w-full overflow-hidden flex items-end">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full relative transition-transform duration-[10s] scale-105 hover:scale-100">
              <Image
                src="/sv-image-1.jpg"
                alt="A cinematic, low-angle photograph of a modernist architectural residence at twilight"
                fill
                priority
                quality={100}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop pb-16 md:pb-24 grid grid-cols-12 gap-gutter items-end">
            <div className="col-span-12 md:col-span-8">
              <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-white mb-6">
                Architecture that begins with how you live
              </h1>
              <p className="font-body-lg text-white/80 max-w-md">
                We translate human behavior into permanent form. Modernist rigor meets the nuances of domestic life.
              </p>
            </div>
            <div className="hidden md:flex col-span-4 justify-end items-end pb-4">
              <div className="flex flex-col items-center gap-4 text-white/60">
                <span className="font-label-md uppercase tracking-[0.3em] rotate-90 origin-right translate-y-12">Scroll</span>
                <div className="w-px h-16 bg-white/30 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USP BANNER */}
        <section className="bg-primary-container py-section-v-padding px-margin-mobile md:px-margin-desktop text-surface">
          <div className="max-w-7xl mx-auto text-center mb-24">
            <span className="font-eyebrow-sm text-eyebrow-sm text-secondary-container uppercase tracking-[0.2em] block mb-4">WHY ARCHITECTON</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">One Studio. Concept to Completion.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Step 01 */}
            <div className="flex flex-col items-center text-center group">
              <div className="font-display-xl text-secondary mb-4 opacity-80 group-hover:opacity-100 transition-opacity">01</div>
              <div className="h-px w-24 bg-outline-variant mb-6"></div>
              <h3 className="font-headline-lg text-2xl mb-4">Design</h3>
              <p className="font-body-md text-on-surface-variant max-w-xs text-balance">Rigorous conceptual analysis that challenges conventions while respecting the site&apos;s natural heritage.</p>
            </div>
            {/* Step 02 */}
            <div className="flex flex-col items-center text-center group">
              <div className="font-display-xl text-secondary mb-4 opacity-80 group-hover:opacity-100 transition-opacity">02</div>
              <div className="h-px w-24 bg-outline-variant mb-6"></div>
              <h3 className="font-headline-lg text-2xl mb-4">Approve</h3>
              <p className="font-body-md text-on-surface-variant max-w-xs text-balance">Meticulous technical documentation and planning navigation to ensure vision becomes reality without compromise.</p>
            </div>
            {/* Step 03 */}
            <div className="flex flex-col items-center text-center group">
              <div className="font-display-xl text-secondary mb-4 opacity-80 group-hover:opacity-100 transition-opacity">03</div>
              <div className="h-px w-24 bg-outline-variant mb-6"></div>
              <h3 className="font-headline-lg text-2xl mb-4">Build</h3>
              <p className="font-body-md text-on-surface-variant max-w-xs text-balance">Integrated project management with our master builders to execute every hairline detail to perfection.</p>
            </div>
          </div>
        </section>

        {/* SELECTED WORK: Asymmetric Masonry */}
        <section className="py-section-v-padding px-margin-mobile md:px-margin-desktop bg-surface">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
            <div>
              <span className="font-eyebrow-sm text-eyebrow-sm text-on-surface-variant uppercase tracking-[0.2em] block mb-4">SELECTED WORK</span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">Recent Projects</h2>
            </div>
            <a className="mt-8 md:mt-0 font-label-md text-secondary uppercase tracking-widest border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-all duration-300" href="#">View All Work</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Large Project */}
            <div className="md:col-span-7 group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <div
                  className="w-full aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCG9vcHR3LNiuxQhXLNh-wkMKTmPEhFI7FGJ9nXszbtaHZ8mrcUkK-7L-8Lz9kLoSqZB41XHc3ASDR0js9u5p2iqFDxw9SIJC3_TgxBaCygsYopZBWUfC4yjMYPX-eRMvAJyzXra3NeMEZjrbe2WJiBnEzwsr4ucbx396wAaMfnXrkw7ym4nAJDp2dze7Co-9LWz8HgJLV8JeD12oIjAp9dK0SjxthOkSzdGxbEowroen4RnWeVTXIn4NP6XWrove2ltU3f9pLOTN0')" }}
                ></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-lg text-2xl mb-1">Coastal Monolith</h3>
                  <p className="font-label-md text-on-surface-variant uppercase tracking-wider">Big Sur, California</p>
                </div>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
            {/* Tall Project */}
            <div className="md:col-span-5 md:mt-24 group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <div
                  className="w-full aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTzp3i9xm7mE61aOfhgB1btf_dollZ8XKIj51SLKpI-IYLVqS4Y6TQazrs6tk0yhmzzQgPPMI6Q0tWbVevVB7sAamcv7t1S5jb8hee6p8fGOlSD3zev0NF_CvZJzqzzKjeV73OWkxGwHITWavINjkAuCRSM6V2YhhfhrDazChTBt_2moaR6JPf2rOzn-iB9yLu_C60klXb_s7XejH_m4yyxUT6LOUkMDDSF0hRFKcxIY1C8r8rmMOn8tSKmQFh586NVCJrxOGaPwM')" }}
                ></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-lg text-2xl mb-1">Timber Observatory</h3>
                  <p className="font-label-md text-on-surface-variant uppercase tracking-wider">Aspen, Colorado</p>
                </div>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
            {/* Horizontal Project */}
            <div className="md:col-span-4 group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <div
                  className="w-full aspect-square bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHBUqNkJV-KS6xKKShKZMtTNRreleu7xGMQFMz75Zc-2GwXPslVMCDvK0Mc5cCVa_cS2XQiRjFMrjnhW3mWxdYjoTwfo985LgKuMrNQnzdijuiHO5fAYLLk9lSXKJQlkj2JK9p2rWF9TRQOR-C5HxjigTRKbfxRhRh1sjqbQlWFPL7jnnDM005bPZL3xQ14H3I4qzE5MFjSzt5oxXo4xCtl_QZnpS9Uhv0kba3sYrTIqpy3OIzKNROKKM1NVsHXyNlhFSyHdSz03Y')" }}
                ></div>
              </div>
              <div>
                <h3 className="font-headline-lg text-2xl mb-1">Urban Pavilion</h3>
                <p className="font-label-md text-on-surface-variant uppercase tracking-wider">Tribeca, New York</p>
              </div>
            </div>
            {/* Large Offset Project */}
            <div className="md:col-span-8 group cursor-pointer">
              <div className="overflow-hidden mb-6">
                <div
                  className="w-full aspect-[16/9] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAaPgBgXmWseeCb7BlARJtr2eWVmMm4I1olHk-YEuSEHhZ4AAJ9nwoVbA929rFCQqfI6cXBtGcNg-gd5Ty0tdzEAhM0-8wA9YLq08pYazoXBUCN3ewaOVjxWxeIaWaISVPhx107w02uICPIY6LpK8F92M0CWDDkjYaBeXloKfEJxSgJvjt8u7BPdG4ykSyIsn6ospaU-qT4dSzHG4CjpSXob4cqSwfGOBoYjAMDxoucI4EQP2DZCza3wHcV8Hv1W4s1qvRN4eUgsBQ')" }}
                ></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline-lg text-2xl mb-1">Earth &amp; Void</h3>
                  <p className="font-label-md text-on-surface-variant uppercase tracking-wider">Sonoran Desert, Arizona</p>
                </div>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="py-section-v-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-outline-variant">
            <div className="py-12 md:px-10 first:pl-0 last:pr-0">
              <span className="material-symbols-outlined text-4xl mb-8 text-primary">architecture</span>
              <h4 className="font-headline-lg text-2xl mb-6">Site-Specific Logic</h4>
              <p className="font-body-md text-on-surface-variant">We believe architecture should be an extension of its environment, not an imposition upon it.</p>
            </div>
            <div className="py-12 md:px-10">
              <span className="material-symbols-outlined text-4xl mb-8 text-primary">grid_view</span>
              <h4 className="font-headline-lg text-2xl mb-6">Structural Purity</h4>
              <p className="font-body-md text-on-surface-variant">Finding beauty in the honest expression of materials: concrete, steel, timber, and glass.</p>
            </div>
            <div className="py-12 md:px-10">
              <span className="material-symbols-outlined text-4xl mb-8 text-primary">light_mode</span>
              <h4 className="font-headline-lg text-2xl mb-6">Natural Rhythms</h4>
              <p className="font-body-md text-on-surface-variant">Designing with the sun. Utilizing light as a primary building material to sculpt interior space.</p>
            </div>
            <div className="py-12 md:px-10">
              <span className="material-symbols-outlined text-4xl mb-8 text-primary">eco</span>
              <h4 className="font-headline-lg text-2xl mb-6">Sustainable Legacy</h4>
              <p className="font-body-md text-on-surface-variant">Timeless aesthetics paired with passive solar principles for homes that endure for generations.</p>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="bg-primary py-16 px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center md:text-left">
            <div>
              <div className="font-headline-lg text-4xl md:text-5xl text-surface mb-2">15+ Years</div>
              <div className="font-label-md text-on-surface-variant uppercase tracking-widest">Global Practice</div>
            </div>
            <div>
              <div className="font-headline-lg text-4xl md:text-5xl text-surface mb-2">120+ Projects</div>
              <div className="font-label-md text-on-surface-variant uppercase tracking-widest">Built to Date</div>
            </div>
            <div>
              <div className="font-headline-lg text-4xl md:text-5xl text-surface mb-2">2.4M sq.ft</div>
              <div className="font-label-md text-on-surface-variant uppercase tracking-widest">Designed Space</div>
            </div>
            <div>
              <div className="font-headline-lg text-4xl md:text-5xl text-surface mb-2">18 Awards</div>
              <div className="font-label-md text-on-surface-variant uppercase tracking-widest">AIA &amp; International</div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-section-v-padding px-margin-mobile md:px-margin-desktop bg-surface overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <span className="material-symbols-outlined text-secondary text-5xl mb-12 opacity-50">format_quote</span>
            <div className="relative">
              <blockquote className="font-headline-lg italic text-headline-lg-mobile md:text-headline-lg leading-tight mb-12">
                &quot;The Architecton team didn&apos;t just design a house; they curated a lifestyle. Every morning when the light hits the gallery wall, we are reminded of the power of good design.&quot;
              </blockquote>
              <cite className="font-label-md uppercase tracking-widest not-italic block">— Julian &amp; Sarah Thorne, Big Sur Project</cite>
            </div>
            <div className="flex justify-center gap-4 mt-16">
              <button className="w-2 h-2 rounded-full bg-primary"></button>
              <button className="w-2 h-2 rounded-full bg-outline-variant hover:bg-primary transition-colors"></button>
              <button className="w-2 h-2 rounded-full bg-outline-variant hover:bg-primary transition-colors"></button>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-margin-mobile md:px-margin-desktop bg-secondary text-on-primary">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-5xl mb-4">Have a project in mind?</h2>
              <p className="font-body-lg opacity-90">Let&apos;s discuss how we can bring your architectural vision to life. Our team is available for international consultations.</p>
            </div>
            <a href="/services#dialogue" className="inline-block border-2 border-white text-white px-12 py-5 font-label-md uppercase tracking-[0.2em] hover:bg-white hover:text-secondary transition-all duration-300">
              Start a Project
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
