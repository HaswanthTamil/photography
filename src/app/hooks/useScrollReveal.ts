"use client";
import { useEffect } from "react";

/**
 * Observes all .reveal and .reveal-left elements and adds
 * .is-revealed when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target); // fire once only
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    document
      .querySelectorAll(".reveal, .reveal-left")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
