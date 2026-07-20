"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "The Architecton team didn't just design a house; they curated a lifestyle. Every morning when the light hits the gallery wall, we are reminded of the power of good design.",
    author: "Julian & Sarah Thorne, Big Sur Project"
  },
  {
    quote: "Their ability to blend raw materials with natural light is unparalleled. The space feels both monumental and incredibly intimate.",
    author: "Elena Rostova, Nexus Retail Lab"
  },
  {
    quote: "A masterclass in restraint and elegance. They understood our vision perfectly and elevated it beyond what we thought possible.",
    author: "Marcus Wright, The Archive"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="grid relative items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`col-start-1 row-start-1 w-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
            }`}
            style={{
              pointerEvents: index === currentIndex ? "auto" : "none",
            }}
          >
            <blockquote className="font-headline-lg italic text-headline-lg-mobile md:text-headline-lg leading-tight mb-8 md:mb-12">
              &quot;{testimonial.quote}&quot;
            </blockquote>
            <cite className="font-label-md uppercase tracking-widest not-italic block">
              — {testimonial.author}
            </cite>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8 md:mt-16">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-primary scale-125"
                : "bg-outline-variant hover:bg-primary"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
