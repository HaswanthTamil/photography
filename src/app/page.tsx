"use client";


import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";
import ScrollVideo from "./components/ScrollVideo";
import AnimatedCounter from "./components/AnimatedCounter";
import TestimonialCarousel from "./components/TestimonialCarousel";
export default function HomePage() {
  useScrollReveal();
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(true); // default to true for safe mobile-first hydration
  const [mobileTextVisible, setMobileTextVisible] = useState(false);
  
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(1);
  const [revealedSteps, setRevealedSteps] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Editorial Scroll Intersection Observer
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setRevealedSteps(new Set([1, 2, 3]));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step'));
            setActiveStep(index);
            
            setRevealedSteps(prev => {
              const newSet = new Set(prev);
              newSet.add(index);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-45% 0px -45% 0px"
      }
    );

    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Trigger mobile text fade-in after preloader finishes
    const timer = setTimeout(() => {
      setMobileTextVisible(true);
    }, 3800);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Init on mount
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setScrollProgress(1); // Mobile doesn't use scroll progress
      } else {
        const scrollRange = window.innerHeight * 2;
        setScrollProgress(Math.max(0, Math.min(1, window.scrollY / scrollRange)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header isVisible={isMobile || scrollProgress >= 0.95} />

      <main>
        {/* HERO SECTION */}
        <section className="relative w-full h-screen md:h-[300vh] bg-[#1C1C1A] md:bg-transparent">
          <div className="relative md:sticky md:top-0 h-screen md:h-screen w-full overflow-hidden flex flex-col justify-center items-center md:flex-row md:items-end px-6 md:px-0">
            
            {/* Desktop: Scroll Video */}
            <div className="absolute inset-0 z-0 hidden md:block">
              <ScrollVideo src="/hero_video-scrub.mp4" />
            </div>
          
            {/* Overlay to hide watermark and provide elegant titling on desktop */}
            <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black from-50% via-black/80 to-transparent z-10 pointer-events-none hidden md:block"></div>
            
            {/* Text Container: Relative on mobile, Absolute on desktop */}
            <div className={`relative md:absolute md:bottom-0 md:left-0 w-full md:p-8 md:p-12 lg:p-16 z-20 flex flex-col justify-center items-center md:justify-end md:items-start text-center md:text-left pointer-events-none transition-all duration-[2000ms] ease-out ${(isMobile ? mobileTextVisible : scrollProgress > 0.05) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h1 className="font-display-xl-mobile md:font-display-xl text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] font-bold text-white leading-none tracking-tighter mb-4 md:mb-6">
                ARCHITECTON
              </h1>
              <div className="text-white/90 text-lg md:text-3xl font-medium uppercase tracking-[0.5em] pb-4">
                Concept &mdash; Completion
              </div>
            </div>
          </div>
        </section>

        {/* USP BANNER - Editorial Scroll */}
        <section className="bg-primary-container text-surface relative">
          <div className="grid grid-cols-1 lg:grid-cols-[35%_65%]">
            
            {/* LEFT PANEL - Sticky */}
            <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center py-section-v-padding px-margin-mobile md:px-margin-desktop z-10 motion-reduce:lg:relative motion-reduce:lg:h-auto">
              <span className="font-eyebrow-sm text-eyebrow-sm text-secondary-container uppercase tracking-[0.2em] block mb-4">
                WHY ARCHITECTON
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 max-w-sm">
                One Studio. Concept to Completion.
              </h2>
              <div className="relative h-8 overflow-hidden font-display-xl text-secondary text-2xl">
                {/* Counter animation crossfade */}
                <span className={`absolute top-0 left-0 transition-opacity duration-200 ${activeStep === 1 ? 'opacity-100' : 'opacity-0'}`}>01 / 03</span>
                <span className={`absolute top-0 left-0 transition-opacity duration-200 ${activeStep === 2 ? 'opacity-100' : 'opacity-0'}`}>02 / 03</span>
                <span className={`absolute top-0 left-0 transition-opacity duration-200 ${activeStep === 3 ? 'opacity-100' : 'opacity-0'}`}>03 / 03</span>
              </div>
            </div>

            {/* RIGHT PANEL - Scroll sequence */}
            <div className="flex flex-col pt-[37.5vh] pb-[37.5vh]">
              
              {/* Step 1 */}
              <div 
                ref={el => { stepRefs.current[0] = el; }} 
                data-step="1"
                className={`relative flex flex-row items-center justify-start gap-4 md:gap-8 px-margin-mobile md:px-margin-desktop h-[25vh] snap-center transition-all duration-700 ease-out py-8
                  ${activeStep === 1 ? 'opacity-100 scale-100 translate-y-0' : ''}
                  ${activeStep > 1 ? 'opacity-20 scale-75 -translate-y-4' : ''}
                  ${activeStep < 1 ? 'opacity-20 scale-75 translate-y-4' : ''}
                `}
              >
                <div 
                  aria-hidden="true" 
                  className="font-display-xl text-white pointer-events-none select-none leading-none -tracking-[0.05em] whitespace-nowrap flex-shrink-0"
                  style={{ fontSize: 'clamp(80px, 12vw, 180px)' }}
                >
                  01
                </div>

                <h3 className="font-headline-lg text-4xl md:text-6xl lg:text-[90px] leading-none whitespace-nowrap flex-shrink-0 z-10">Design</h3>
                  
                {/* Motion Graphic 1: Design Wireframe */}
                <div className={`z-10 flex-shrink-0 transition-opacity duration-700 ${activeStep === 1 ? 'is-visible opacity-100' : 'opacity-0'}`}>
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="anim-spin-slow w-12 h-12 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]">
                    <rect x="20" y="20" width="60" height="60" stroke="#E36540" strokeWidth="2" className="anim-draw-line" />
                    <rect x="30" y="30" width="40" height="40" stroke="#E36540" strokeWidth="2" className="anim-draw-line" style={{ animationDelay: '0.2s' }} />
                    <line x1="20" y1="20" x2="80" y2="80" stroke="#E36540" strokeWidth="2" className="anim-draw-line" style={{ animationDelay: '0.4s' }} />
                    <line x1="80" y1="20" x2="20" y2="80" stroke="#E36540" strokeWidth="2" className="anim-draw-line" style={{ animationDelay: '0.6s' }} />
                    <circle cx="50" cy="50" r="42" stroke="#E36540" strokeWidth="2" strokeDasharray="4 4" className="anim-draw-line" style={{ animationDelay: '0.8s' }} />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div 
                ref={el => { stepRefs.current[1] = el; }} 
                data-step="2"
                className={`relative flex flex-row items-center justify-start gap-4 md:gap-8 px-margin-mobile md:px-margin-desktop h-[25vh] snap-center transition-all duration-700 ease-out py-8
                  ${activeStep === 2 ? 'opacity-100 scale-100 translate-y-0' : ''}
                  ${activeStep > 2 ? 'opacity-20 scale-75 -translate-y-4' : ''}
                  ${activeStep < 2 ? 'opacity-20 scale-75 translate-y-4' : ''}
                `}
              >
                <div 
                  aria-hidden="true" 
                  className="font-display-xl text-white pointer-events-none select-none leading-none -tracking-[0.05em] whitespace-nowrap flex-shrink-0"
                  style={{ fontSize: 'clamp(80px, 12vw, 180px)' }}
                >
                  02
                </div>

                <h3 className="font-headline-lg text-4xl md:text-6xl lg:text-[90px] leading-none whitespace-nowrap flex-shrink-0 z-10">Approve</h3>
                  
                {/* Motion Graphic 2: Approve Stamp */}
                <div className={`z-10 flex-shrink-0 transition-opacity duration-700 ${activeStep === 2 ? 'is-visible opacity-100' : 'opacity-0'}`}>
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="anim-stamp-circle w-12 h-12 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]">
                    <circle cx="50" cy="50" r="45" stroke="#E36540" strokeWidth="2" />
                    <circle cx="50" cy="50" r="38" stroke="#E36540" strokeWidth="2" strokeDasharray="2 4" />
                    <path d="M 30 50 L 45 65 L 75 30" stroke="#E36540" strokeWidth="4" strokeLinecap="square" className="anim-check" />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div 
                ref={el => { stepRefs.current[2] = el; }} 
                data-step="3"
                className={`relative flex flex-row items-center justify-start gap-4 md:gap-8 px-margin-mobile md:px-margin-desktop h-[25vh] snap-center transition-all duration-700 ease-out py-8
                  ${activeStep === 3 ? 'opacity-100 scale-100 translate-y-0' : ''}
                  ${activeStep > 3 ? 'opacity-20 scale-75 -translate-y-4' : ''}
                  ${activeStep < 3 ? 'opacity-20 scale-75 translate-y-4' : ''}
                `}
              >
                <div 
                  aria-hidden="true" 
                  className="font-display-xl text-white pointer-events-none select-none leading-none -tracking-[0.05em] whitespace-nowrap flex-shrink-0"
                  style={{ fontSize: 'clamp(80px, 12vw, 180px)' }}
                >
                  03
                </div>

                <h3 className="font-headline-lg text-4xl md:text-6xl lg:text-[90px] leading-none whitespace-nowrap flex-shrink-0 z-10">Build</h3>
                  
                {/* Motion Graphic 3: Build Blocks */}
                <div className={`z-10 flex-shrink-0 transition-opacity duration-700 ${activeStep === 3 ? 'is-visible opacity-100' : 'opacity-0'}`}>
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]">
                    <rect x="10" y="70" width="80" height="20" fill="#E36540" className="anim-build-block anim-build-block-1" />
                    <rect x="25" y="45" width="20" height="20" fill="#E36540" className="anim-build-block anim-build-block-2" />
                    <rect x="55" y="45" width="20" height="20" fill="#E36540" className="anim-build-block anim-build-block-2" />
                    <rect x="35" y="20" width="30" height="20" fill="#E36540" className="anim-build-block anim-build-block-3" />
                  </svg>
                </div>
              </div>

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
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=100&w=3840&auto=format&fit=crop')" }}
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
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=100&w=3840&auto=format&fit=crop')" }}
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
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=100&w=3840&auto=format&fit=crop')" }}
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
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1449844908441-8829872d2607?q=100&w=3840&auto=format&fit=crop')" }}
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
              <div className="font-headline-lg text-4xl md:text-5xl text-surface mb-2">
                <AnimatedCounter value={15} suffix="+ Years" />
              </div>
              <div className="font-label-md text-on-surface-variant uppercase tracking-widest">Global Practice</div>
            </div>
            <div>
              <div className="font-headline-lg text-4xl md:text-5xl text-surface mb-2">
                <AnimatedCounter value={120} suffix="+ Projects" />
              </div>
              <div className="font-label-md text-on-surface-variant uppercase tracking-widest">Built to Date</div>
            </div>
            <div>
              <div className="font-headline-lg text-4xl md:text-5xl text-surface mb-2">
                <AnimatedCounter value={2.4} decimals={1} suffix="M sq.ft" />
              </div>
              <div className="font-label-md text-on-surface-variant uppercase tracking-widest">Designed Space</div>
            </div>
            <div>
              <div className="font-headline-lg text-4xl md:text-5xl text-surface mb-2">
                <AnimatedCounter value={18} suffix=" Awards" />
              </div>
              <div className="font-label-md text-on-surface-variant uppercase tracking-widest">AIA &amp; International</div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-section-v-padding px-margin-mobile md:px-margin-desktop bg-surface overflow-hidden">
          <TestimonialCarousel />
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
