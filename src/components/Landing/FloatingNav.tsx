'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SolarArrowRightBold } from './SolarIcons';

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 transition-transform duration-300 ease-weighted"
      aria-label="Primary Navigation"
    >
      <div
        className={`max-w-[1160px] mx-auto rounded-full border border-white/10 px-5 py-2.5 flex items-center justify-between backdrop-saturate-150 transition-all duration-300 ease-weighted ${
          scrolled
            ? 'bg-[#170D21]/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(10,4,18,0.5)]'
            : 'bg-white/[0.05] backdrop-blur-xl'
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9B8F2] rounded-lg"
        >
          <span className="w-8 h-8 rounded-lg bg-[#231532] flex items-center justify-center relative overflow-hidden">
            <span className="w-3.5 h-3.5 rounded-sm bg-[#C9B8F2] block transition-transform duration-300 ease-weighted group-hover:scale-110" />
            <span className="w-2 h-2 rounded-full bg-[#F7B58D] absolute bottom-1 right-1" />
          </span>
          <span className="flex items-baseline gap-2">
            <span className="text-[#F3EEFB] font-semibold tracking-tight text-base not-italic">
              parchiOS
            </span>
            <span className="hidden sm:inline-block caption-2 font-medium text-[#B3A6C9] not-italic">
              Pakistan
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main sections">
          <a
            href="#architecture"
            className="body-5 text-[#B3A6C9] hover:text-[#F3EEFB] transition-opacity duration-200 not-italic"
          >
            Architecture
          </a>
          <a
            href="#economics"
            className="body-5 text-[#B3A6C9] hover:text-[#F3EEFB] transition-opacity duration-200 not-italic"
          >
            Margin Math
          </a>
          <a
            href="#workflow"
            className="body-5 text-[#B3A6C9] hover:text-[#F3EEFB] transition-opacity duration-200 not-italic"
          >
            Shift Flow
          </a>
          <a
            href="#pricing"
            className="body-5 text-[#B3A6C9] hover:text-[#F3EEFB] transition-opacity duration-200 not-italic"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="body-5 text-[#B3A6C9] hover:text-[#F3EEFB] transition-opacity duration-200 not-italic"
          >
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="hidden sm:inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/[0.07] hover:bg-white/[0.12] text-[#F3EEFB] caption-1 transition-transform duration-200 ease-weighted active:scale-[0.97] not-italic"
          >
            <span className="w-2 h-2 rounded-full bg-[#E4DAF9]" />
            Open Demo Terminal
          </Link>

          <a
            href="#launch-form"
            className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-[#C9B8F2] hover:opacity-95 text-[#170D21] caption-1 transition-transform duration-200 ease-weighted active:scale-[0.97] not-italic"
          >
            <span>Start Free Counter</span>
            <SolarArrowRightBold className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#231532] text-[#F3EEFB]"
            aria-expanded={menuOpen}
            aria-controls="mobile-full-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full viewport overlay menu for mobile */}
      <div
        id="mobile-full-menu"
        aria-hidden={!menuOpen}
        className={`md:hidden fixed inset-0 top-[76px] bg-[#170D21]/95 backdrop-blur-xl px-6 py-8 transition-opacity duration-300 ease-weighted ${
          menuOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <div className="flex flex-col gap-6 max-w-sm mx-auto">
          <a
            href="#architecture"
            onClick={() => setMenuOpen(false)}
            className="heading-4 text-[#F3EEFB] not-italic"
          >
            Counter Architecture
          </a>
          <a
            href="#economics"
            onClick={() => setMenuOpen(false)}
            className="heading-4 text-[#F3EEFB] not-italic"
          >
            Zero Commission Math
          </a>
          <a
            href="#workflow"
            onClick={() => setMenuOpen(false)}
            className="heading-4 text-[#F3EEFB] not-italic"
          >
            Four Tap Shift Flow
          </a>
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="heading-4 text-[#F3EEFB] not-italic"
          >
            Flat PKR Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setMenuOpen(false)}
            className="heading-4 text-[#F3EEFB] not-italic"
          >
            Operator Questions
          </a>
          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/demo"
              onClick={() => setMenuOpen(false)}
              className="w-full py-2 px-3 rounded-lg bg-[#231532] text-[#E4DAF9] caption-1 text-center not-italic"
            >
              Launch Live POS Demo
            </Link>
            <a
              href="#launch-form"
              onClick={() => setMenuOpen(false)}
              className="w-full py-2 px-4 rounded-full bg-[#C9B8F2] text-[#170D21] caption-1 text-center not-italic"
            >
              Configure Your Branch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
