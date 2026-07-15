"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Shared sticky header used across all pages.
 * - All nav links are identical (no active state).
 * - Hover: underline slides in from left.
 * - Inquire button → /#contact (homepage footer).
 * - Compacts slightly on scroll.
 */
export default function Header() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("#site-header");
    const onScroll = () => {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add("py-4", "shadow-[0_1px_0_0_#e3e2e0]");
        header.classList.remove("py-6");
      } else {
        header.classList.remove("py-4", "shadow-[0_1px_0_0_#e3e2e0]");
        header.classList.add("py-6");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="site-header"
      className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant
                 flex justify-between items-center
                 px-[20px] md:px-[80px] py-6
                 transition-[padding,box-shadow] duration-200 ease-in-out"
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-headline-lg text-[22px] md:text-[28px] text-primary
                   tracking-tighter font-semibold leading-none"
      >
        ARCHITECTON
      </Link>

      {/* Nav links — all identical, hover-only underline */}
      <nav className="hidden md:flex items-center gap-10">
        <Link className="nav-link font-label-md text-[11px] uppercase tracking-[0.12em]" href="/portfolio">
          Portfolio
        </Link>
        <Link className="nav-link font-label-md text-[11px] uppercase tracking-[0.12em]" href="/services">
          Services
        </Link>
        <Link className="nav-link font-label-md text-[11px] uppercase tracking-[0.12em]" href="/approach">
          Approach
        </Link>
        <Link className="nav-link font-label-md text-[11px] uppercase tracking-[0.12em]" href="/journal">
          Journal
        </Link>
      </nav>

      {/* Inquire → services dialogue section */}
      <a
        href="/services#dialogue"
        className="bg-primary text-on-primary px-8 py-3
                   font-label-md text-[11px] uppercase tracking-[0.12em]
                   transition-all duration-300 hover:bg-secondary hover:scale-[1.02]"
      >
        Inquire
      </a>
    </header>
  );
}
