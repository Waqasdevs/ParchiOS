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
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
      <nav
        aria-label="Primary"
        className="pointer-events-auto mx-auto w-full max-w-[1120px] flex items-center justify-between rounded-full bg-ink/90 backdrop-blur-xl border border-white/10 pl-5 sm:pl-6 pr-2 py-2 text-ivory shadow-[0_12px_40px_rgba(21,19,15,0.35)] transition-all"
      >
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight text-[16px] sm:text-[17px]">
          parchiOS
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-rush animate-pulse" />
        </Link>

        {/* Desktop Links with Lumora-style plus separators */}
        <ul className="hidden lg:flex items-center gap-1 text-[13px] xl:text-[14px] text-ivory/70 font-medium">
          {LINKS.map((l, i) => (
            <li key={l.href} className="flex items-center">
              {i > 0 && <span aria-hidden className="px-2 text-ivory/20 font-normal">+</span>}
              <a href={l.href} className="hover:text-ivory transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* WhatsApp Direct Link */}
          <a
            href="https://wa.me/923454159835?text=Assalam-o-Alaikum%2C%20I%20want%20a%20free%20live%20preview%20of%20ParchiOS%20with%20my%20restaurant%20menu."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 sm:px-4 py-2 text-[12px] sm:text-[13px] font-semibold transition-all active:scale-[0.98] shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp Us</span>
          </a>

          {/* Live Demo Trigger */}
          <Link
            href="/demo"
            className="inline-flex items-center gap-1.5 rounded-full bg-ivory text-ink px-4 sm:px-5 py-2 sm:py-2.5 text-[13px] sm:text-[14px] font-semibold hover:bg-white transition-all active:scale-[0.98]"
          >
            Try Demo <span aria-hidden className="text-[12px]">↗</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-ivory hover:bg-white/15 ml-1"
            aria-label="Toggle navigation menu"
          >
            <span className="text-xs font-mono">{mobileOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Panel */}
      {mobileOpen && (
        <div className="pointer-events-auto lg:hidden mx-auto mt-2 w-full max-w-[1120px] rounded-2xl bg-ink/95 backdrop-blur-xl border border-white/10 p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-3 text-[15px] font-medium text-ivory/80">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1.5 px-3 rounded-lg hover:bg-white/10 hover:text-ivory transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="https://wa.me/923454159835?text=Assalam-o-Alaikum%2C%20I%20want%20a%20free%20live%20preview%20of%20ParchiOS%20with%20my%20restaurant%20menu."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 text-center py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Get Free Live Preview (WhatsApp)</span>
              </a>
              <Link
                href="/demo"
                onClick={() => setMobileOpen(false)}
                className="block text-center py-2 px-4 rounded-xl bg-white/10 text-ivory font-medium text-xs"
              >
                Launch Counter POS Demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
