'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const LINKS = [
  { href: '#problems', label: 'Problems We Solve' },
  { href: '#features', label: 'Core Features' },
  { href: '#case-study', label: 'Live Case Study' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-ivory/90 backdrop-blur-md border-b border-ink/5 transition-all">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-[18px] sm:text-[20px] text-ink">
          parchiOS
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-rush" />
        </Link>

        {/* Center Desktop Navigation (Runway style) */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-[14px] font-normal text-ink/75">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-ink transition-colors tracking-tight"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="https://wa.me/923454159835?text=Assalam-o-Alaikum%2C%20I%20want%20a%20free%20live%20preview%20of%20ParchiOS%20with%20my%20restaurant%20menu."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-[14px] font-medium text-ink/80 hover:text-ink transition-colors px-2 py-1.5"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600" />
            <span>WhatsApp Us</span>
          </a>

          <Link
            href="/demo"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink hover:bg-black text-ivory px-5 sm:px-6 py-2 sm:py-2.5 text-[13px] sm:text-[14px] font-medium transition-all active:scale-[0.98] shadow-sm"
          >
            Try Live Demo
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-ink/15 text-ink hover:bg-ink/5 ml-1"
            aria-label="Toggle navigation menu"
          >
            <span className="text-sm font-mono">{mobileOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileOpen && (
        <div className="md:hidden w-full border-t border-ink/10 bg-ivory/98 backdrop-blur-xl px-4 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-3 text-[16px] font-medium text-ink/80">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 px-3 rounded-xl hover:bg-ink/5 hover:text-ink transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3 border-t border-ink/10 flex flex-col gap-2.5">
              <a
                href="https://wa.me/923454159835?text=Assalam-o-Alaikum%2C%20I%20want%20a%20free%20live%20preview%20of%20ParchiOS%20with%20my%20restaurant%20menu."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 text-center py-3 px-4 rounded-full bg-emerald-600 text-white font-medium text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us (+92 345 4159835)</span>
              </a>
              <Link
                href="/demo"
                onClick={() => setMobileOpen(false)}
                className="block text-center py-3 px-4 rounded-full bg-ink text-ivory font-medium text-sm"
              >
                Try Live Counter Demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
