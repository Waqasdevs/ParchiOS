import Link from 'next/link';
import Nav from '@/components/Landing/Nav';
import {
  MessageCircle,
  Zap,
  Smartphone,
  Sparkles,
  Laptop,
  CheckCircle2,
  Banknote,
  ChefHat,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const PROBLEMS = [
  {
    num: '01',
    category: 'CASH CONTROL',
    title: '"Raat Ko Cash Match Nahi Hota" (Stop Daily Cash Leakage)',
    description:
      'Paper parchis get lost, overwritten, or miscalculated during the 9 PM dinner rush. ParchiOS tracks every single burger, deal, and drink automatically so your drawer cash matches 100% at closing time.',
    icon: Banknote,
  },
  {
    num: '02',
    category: 'KITCHEN WORKFLOW',
    title: 'Kitchen Confusion & Late Orders (Instant Counter-to-Kitchen Sync)',
    description:
      'No more shouting orders into the kitchen or lost paper slips. The moment your cashier punches an order, the kitchen screen/printer gets a clean digital KOT slip with exact deal items and table/delivery numbers.',
    icon: ChefHat,
  },
  {
    num: '03',
    category: 'COMMISSION FREEDOM',
    title: 'Zero Foodpanda-Style Commissions (100% Yours Forever)',
    description:
      "Don't pay 25% to 30% commission or heavy monthly software fees. Pay a one-time setup fee and own your restaurant's complete order, delivery, and customer database forever.",
    icon: ShieldCheck,
  },
];

const FEATURES = [
  {
    num: '01',
    tag: 'HIGH-SPEED POS',
    title: '5-Second Fast-Food Counter Screen',
    description:
      'Designed for high-rush burger, broast, pizza, and shawarma counters. Even a non-technical cashier can learn it in 10 minutes.',
    img: '/images/landing/counter-hardware-dark.jpg',
    benefit: 'Trained and ready in 10 minutes',
    icon: Zap,
  },
  {
    num: '02',
    tag: 'MOBILE CONTROL',
    title: 'Owner’s Live Phone Dashboard',
    description:
      'Sitting at home? Open ParchiOS on your mobile to see live running orders, top-selling deals, and total cash collected today in real time.',
    img: '/images/landing/dining-hall-night.jpg',
    benefit: 'Real-time sales on your phone',
    icon: Smartphone,
  },
  {
    num: '03',
    tag: '24-HOUR LAUNCH',
    title: 'Custom Branded for Your Restaurant',
    description:
      'Your logo, your menu deals, and your colors. Deployed and live within 24 Hours.',
    img: '/images/landing/branding-showcase.jpg',
    benefit: 'Deployed and live in 24 hours',
    icon: Sparkles,
  },
  {
    num: '04',
    tag: 'HARDWARE FREEDOM',
    title: 'Works on Any Device',
    description:
      'No need to buy a 150,000 PKR POS machine. Runs smoothly on any old laptop, tablet, cheap Android phone, or existing counter PC.',
    img: '/images/landing/multidevice-pos.jpg',
    benefit: 'Saves 150,000 PKR in hardware costs',
    icon: Laptop,
  },
];

const FAQ = [
  {
    q: 'Do I need to buy an expensive 150,000 PKR touchscreen POS machine?',
    a: 'No. ParchiOS runs inside Chrome or Edge on any computer, laptop, Android tablet, iPad, or mobile phone you already own. It connects directly with standard 80mm thermal receipt printers like Black Copper, Xprinter, SpeedX, and Epson.',
  },
  {
    q: 'What happens if PTCL internet or mobile 4G disconnects during Friday rush?',
    a: 'ParchiOS is built offline-first. Your counter screen never freezes. You keep punching orders, printing kitchen KOT slips, and settling bills without zero-point cloud delay. Everything syncs automatically once your internet returns.',
  },
  {
    q: 'Is 45,000 PKR really a one-time fee, or are there hidden monthly charges?',
    a: 'It is 100% one-time setup. There are zero per-order commissions and zero recurring monthly software fees. You own your system, menus, and customer database forever.',
  },
  {
    q: 'How do you upload our restaurant menu and deals?',
    a: 'You do not have to type anything yourself. Just take clear photos of your paper menu or WhatsApp us your menu PDF. Our team formats and uploads every single deal, add-on, and price within 24 hours.',
  },
  {
    q: 'Can our cashier delete orders or tamper with drawer cash?',
    a: 'No. Cashier staff can only punch and settle bills. Any item void, order deletion, or discount requires an authorized Manager PIN and leaves an unalterable timestamped audit trail in the daily closing report.',
  },
  {
    q: 'How does staff training work if our counter boy is not technical?',
    a: 'The counter screen is designed with large item tiles and numbers (#1 for Zinger, #14 for Karahi) so anyone can learn it in 10 minutes. We also provide direct 1-on-1 WhatsApp voice note and video support until your team feels 100% confident.',
  },
];

const WHATSAPP_LINK =
  'https://wa.me/923454159835?text=Assalam-o-Alaikum%2C%20I%20want%20a%20free%20live%20preview%20of%20ParchiOS%20with%20my%20restaurant%20menu.';

export default function LandingPage() {
  return (
    <div
      id="top"
      className="bg-ivory text-ink font-jakarta antialiased selection:bg-ink selection:text-ivory w-full max-w-[100vw] overflow-x-clip min-h-screen"
    >
      {/* 1. Runway-style Edge-to-Edge Sticky Navbar */}
      <Nav />

      {/* Main Container - Narrow side margins, centralized content like Runway */}
      <main className="px-3 sm:px-5 lg:px-6 pt-2 sm:pt-4 space-y-6 sm:space-y-8 max-w-[1536px] mx-auto overflow-hidden">
        {/* ============================================================ */}
        {/* 1. HERO SECTION (Runway Centered Card with Slight Edges & Video Loop) */}
        {/* ============================================================ */}
        <section
          aria-label="ParchiOS Restaurant Operating System"
          className="relative isolate overflow-hidden rounded-[16px] sm:rounded-[20px] min-h-[64vh] sm:min-h-[72vh] lg:min-h-[76vh] max-h-[820px] flex items-end border border-ink/10 shadow-[0_20px_50px_-15px_rgba(21,19,15,0.22)]"
        >
          {/* Looping Restaurant Kitchen Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/landing/hero-restaurant.jpg"
            className="absolute inset-0 -z-20 h-full w-full object-cover filter contrast-[1.08] brightness-[0.80]"
          >
            <source src="/videos/hero-restaurant-loop.mp4" type="video/mp4" />
          </video>

          {/* Deep ink gradient overlay for high contrast text readability */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(21,19,15,0.94)_0%,rgba(21,19,15,0.76)_48%,rgba(21,19,15,0.25)_100%),linear-gradient(0deg,rgba(21,19,15,0.88)_0%,transparent_50%)]"
          />

          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-10 lg:px-14 pb-8 sm:pb-14 lg:pb-16 pt-20 sm:pt-32">
            {/* Top Eyebrow - Clean editorial typography, no AI-slop rounded pill bubbles */}
            <div className="flex items-center gap-2 text-[11px] sm:text-sm font-mono font-semibold tracking-widest uppercase text-ivory/80 mb-3 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-rush shrink-0" />
              <span className="truncate sm:overflow-visible">Built for Pakistani Fast-Food, Cafes &amp; Cloud Kitchens 🇵🇰</span>
            </div>

            {/* Main Headline (H1): Minimal, punchy, 56px at reference laptop screen, weight 500 */}
            <h1 className="text-ivory fluid-heading max-w-[20ch] leading-[1.12]">
              Kagaz Chhorein. Apne Restaurant Ko 5-Second Digital Parchi Pe Shift Karein.
            </h1>

            {/* Sub-headline: Minimal text (2 lines), 16px at reference laptop screen, weight 400 */}
            <p className="mt-3.5 sm:mt-5 max-w-[38rem] text-ivory/85 fluid-hero-sub leading-relaxed">
              Punch counter orders in 5 seconds, send instant kitchen KOT slips, and track 100% accurate daily cash sales on your phone with zero commission.
            </p>

            {/* CTA Buttons - Responsive full-width on mobile, slightly edged rectangles */}
            <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              {/* Primary CTA (WhatsApp) */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-[6px] bg-white hover:bg-neutral-100 text-ink px-4 sm:px-6 py-3 sm:py-3 text-[13px] sm:text-[15px] font-semibold shadow-md transition-all active:scale-[0.98] text-center"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600 shrink-0" />
                <span className="sm:hidden">Free Live Preview (WhatsApp)</span>
                <span className="hidden sm:inline">Get a Free Live Preview With Your Menu (WhatsApp Us)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 shrink-0" />
              </a>

              {/* Secondary CTA (Live Demo Dashboard) */}
              <Link
                href="/demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[6px] border border-white/20 bg-white/10 backdrop-blur-md text-ivory px-4 sm:px-6 py-3 sm:py-3 text-[13px] sm:text-[15px] font-semibold hover:bg-white/20 transition-all active:scale-[0.98] text-center"
              >
                <span>Try Live Counter Demo</span>
                <span aria-hidden className="text-[12px]">↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. THE "3 BIG PROBLEMS WE SOLVE" SECTION                      */}
        {/* ============================================================ */}
        <section
          id="problems"
          aria-labelledby="problems-heading"
          className="rounded-[18px] sm:rounded-[22px] bg-ink text-ivory px-5 sm:px-10 lg:px-14 py-14 sm:py-24"
        >
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] sm:text-[13px] font-mono font-semibold tracking-wider uppercase text-ivory/60">
              <span className="text-rush mr-1.5">•</span> [01] THE 3 BIG PROBLEMS WE SOLVE
            </p>

            {/* Section Heading: 56px at reference laptop screen, weight 500 */}
            <h2
              id="problems-heading"
              className="mt-3.5 sm:mt-5 max-w-[26ch] text-ivory fluid-heading"
            >
              The 3 Big Problems We Solve
            </h2>

            {/* Section Sub-heading: 24px at reference laptop screen, weight 400 */}
            <p className="mt-3 sm:mt-3.5 text-ivory/75 max-w-[42rem] fluid-section-sub">
              Messy paper notes, shouting at the kitchen, and losing cash at closing time. Here is how ParchiOS eliminates the daily headache:
            </p>

            {/* 3 Problem Cards Grid - Responsive single column on mobile */}
            <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-3">
              {PROBLEMS.map((prob) => {
                const Icon = prob.icon;
                return (
                  <div
                    key={prob.num}
                    className="rounded-[14px] sm:rounded-[18px] bg-white/[0.04] border border-white/10 p-5 sm:p-8 flex flex-col justify-between hover:bg-white/[0.07] transition-all"
                  >
                    <div>
                      {/* Clean header: category text + monochrome icon */}
                      <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                        <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider uppercase text-ivory/50">
                          {prob.num} / {prob.category}
                        </span>
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-[6px] bg-white/[0.06] border border-white/10 flex items-center justify-center text-ivory/80 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-[18px] sm:text-[21px] font-semibold leading-snug tracking-[-0.015em] text-ivory">
                        {prob.title}
                      </h3>

                      {/* Paragraph: 14px at reference laptop screen, weight 400 */}
                      <p className="mt-3 text-ivory/70 fluid-paragraph">
                        {prob.description}
                      </p>
                    </div>

                    <div className="mt-6 sm:mt-7 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-ivory/40">
                      <span>PROBLEM #{prob.num}</span>
                      <span className="text-ivory/70 font-semibold">Solved with ParchiOS</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. CORE FEATURES SECTION (All 4 Features with Images)        */}
        {/* ============================================================ */}
        <section id="features" aria-labelledby="features-heading" className="px-2 sm:px-6 lg:px-8 py-14 sm:py-24">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] sm:text-[13px] font-mono font-semibold tracking-wider uppercase text-ink/60">
              <span className="text-rush mr-1.5">•</span> [02] CORE FEATURES
            </p>

            {/* Section Heading: 56px at reference laptop screen, weight 500 */}
            <h2
              id="features-heading"
              className="mt-3.5 sm:mt-5 max-w-[28ch] text-ink fluid-heading"
            >
              Engineered specifically for busy Pakistani food counters.
            </h2>

            {/* Section Sub-heading: 24px at reference laptop screen, weight 400 */}
            <p className="mt-3 sm:mt-3.5 text-ink/75 max-w-[42rem] fluid-section-sub">
              No confusing IT terminology. Straightforward tools that let you punch fast, control kitchen passes, and watch your daily sales from your phone.
            </p>

            {/* 4 Features Grid (2x2 with rich visual photography for all 4) */}
            <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-9 grid-cols-1 md:grid-cols-2">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.num}
                    className="rounded-[16px] sm:rounded-[20px] bg-white border border-ink/10 overflow-hidden shadow-sm flex flex-col justify-between hover:border-ink/20 transition-all group"
                  >
                    {/* Visual Feature Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink/5">
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${feature.img})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>

                    {/* Feature Copy */}
                    <div className="p-5 sm:p-8 flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-ink/60 uppercase mb-2">
                          <Icon className="w-4 h-4 text-ink" />
                          <span>{feature.num} / {feature.tag}</span>
                        </div>

                        <h3 className="text-[19px] sm:text-[22px] font-semibold leading-snug tracking-[-0.015em] text-ink">
                          {feature.title}
                        </h3>

                        {/* Paragraph: 14px at reference laptop screen, weight 400 */}
                        <p className="mt-2 text-ink/75 fluid-paragraph leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      <div className="mt-6 sm:mt-7 pt-4 border-t border-ink/10 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{feature.benefit}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. SOCIAL PROOF / LIVE CASE STUDY SECTION                    */}
        {/* ============================================================ */}
        <section
          id="case-study"
          aria-labelledby="case-study-heading"
          className="rounded-[18px] sm:rounded-[22px] bg-ink text-ivory px-5 sm:px-10 lg:px-14 py-14 sm:py-24"
        >
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[11px] sm:text-[13px] font-mono font-semibold tracking-wider uppercase text-ivory/60">
              <span className="text-rush mr-1.5">•</span> [03] LIVE CASE STUDY &amp; SOCIAL PROOF
            </p>

            {/* Section Heading: 56px at reference laptop screen, weight 500 */}
            <h2
              id="case-study-heading"
              className="mt-3.5 sm:mt-5 text-ivory fluid-heading"
            >
              Live in Action: HFC (Haseeb Food Cafe)
            </h2>

            {/* Testimonial Quote Box */}
            <div className="mt-8 sm:mt-12 rounded-[14px] sm:rounded-[18px] bg-white/[0.04] border border-white/10 p-5 sm:p-10 backdrop-blur-md">
              <div className="text-ivory/30 text-3xl sm:text-5xl font-serif leading-none mb-2 sm:mb-3">“</div>
              <p className="fluid-section-sub text-ivory max-w-[48ch]">
                Before ParchiOS, our counter staff used manual register books during peak rush hours, leading to missed orders and 45 minutes of daily calculation at night. ParchiOS put our entire menu, kitchen slips, and daily sales report on autopilot in 24 hours.
              </p>

              <div className="mt-6 sm:mt-7 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-base sm:text-lg font-semibold text-white">
                    Haseeb &amp; Team
                  </div>
                  <div className="text-xs sm:text-sm text-ivory/60 fluid-paragraph">
                    Owner &amp; Operator, Haseeb Food Cafe (HFC)
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs sm:text-sm font-mono text-ivory/70">
                  <div>
                    <span className="text-ivory font-semibold">0</span> Missed Orders
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div>
                    <span className="text-emerald-400 font-semibold">45 Mins</span> Saved Daily
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div>
                    <span className="text-ivory font-semibold">24 Hrs</span> Setup Time
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Live Test Button */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Link
                href="/demo"
                className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-[6px] bg-ivory hover:bg-white text-ink px-5 sm:px-7 py-3 text-[13px] sm:text-[15px] font-semibold shadow-md transition-all active:scale-[0.98] text-center"
              >
                <span className="sm:hidden">Test Live HFC System</span>
                <span className="hidden sm:inline">Click Here to Test the Live HFC System</span>
                <span aria-hidden className="text-[12px]">↗</span>
              </Link>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-ivory/80 hover:text-ivory text-xs sm:text-sm font-semibold underline underline-offset-4 py-1 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current text-emerald-400 shrink-0" />
                <span>Ask Haseeb or Our Team on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. SIMPLE "NO-HEADACHE" PRICING SECTION                      */}
        {/* ============================================================ */}
        <section id="pricing" aria-labelledby="pricing-heading" className="px-2 sm:px-6 lg:px-8 py-14 sm:py-24">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center max-w-2xl mx-auto px-2">
              <p className="text-[11px] sm:text-[13px] font-mono font-semibold tracking-wider uppercase text-ink/60">
                <span className="text-rush mr-1.5">•</span> [04] SIMPLE &quot;NO-HEADACHE&quot; PRICING
              </p>
              {/* Section Heading: 56px at reference laptop screen, weight 500 */}
              <h2
                id="pricing-heading"
                className="mt-3 text-ink fluid-heading"
              >
                Zero monthly fees. Zero per-order commissions.
              </h2>
              {/* Section Sub-heading: 24px at reference laptop screen, weight 400 */}
              <p className="mt-2.5 sm:mt-3 text-ink/75 max-w-[36rem] mx-auto fluid-section-sub">
                One transparent setup price. You own your restaurant system and customer list forever.
              </p>
            </div>

            {/* Big Pricing Card */}
            <div className="mt-10 sm:mt-14 max-w-3xl mx-auto rounded-[18px] sm:rounded-[24px] bg-white border-2 border-ink p-5 sm:p-12 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-ink/10">
                <div>
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase text-rush">
                    ALL-IN-ONE PACKAGE
                  </span>
                  <h3 className="mt-2 text-lg sm:text-2xl font-semibold text-ink tracking-tight">
                    Complete Restaurant Setup (24-Hour Turnaround)
                  </h3>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-3xl sm:text-5xl font-medium text-ink tracking-tight font-mono">
                    45,000 <span className="text-xl sm:text-2xl font-semibold font-sans">PKR</span>
                  </div>
                  {/* Sub-callout: no dash between sentences */}
                  <div className="text-xs sm:text-sm font-semibold text-emerald-700 mt-1">
                    One-Time Setup. Zero Commission Per Order
                  </div>
                </div>
              </div>

              {/* What’s Included (Bullet List) */}
              <div className="mt-6 sm:mt-8">
                <p className="text-xs font-mono uppercase tracking-wider text-ink/60 font-semibold mb-3 sm:mb-4">
                  WHAT&apos;S INCLUDED:
                </p>
                <ul className="space-y-3 sm:space-y-3.5">
                  {[
                    'Full system branded with your Restaurant Name & Logo',
                    'Complete Menu, Deals & Pricing uploaded by our team (Just WhatsApp us a photo of your menu!)',
                    'Counter POS + Kitchen Order Tracking + Owner Sales Dashboard',
                    '1-on-1 WhatsApp staff training & support',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3 text-ink fluid-paragraph">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risk-Reversal Guarantee Box */}
              <div className="mt-7 sm:mt-9 rounded-[10px] bg-amber-500/10 border border-amber-600/20 p-4 sm:p-6">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-900 uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                  <span>100% Risk-Reversal Guarantee</span>
                </div>
                <p className="fluid-paragraph font-semibold text-ink leading-relaxed">
                  &quot;Send us a photo of your paper menu on WhatsApp today. We will build a working demo with your restaurant&apos;s name and items first. You only pay after you test it on your phone!&quot;
                </p>
              </div>

              {/* WhatsApp Action Button */}
              <div className="mt-6 sm:mt-8">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group inline-flex items-center justify-center gap-2 rounded-[6px] bg-emerald-600 hover:bg-emerald-500 text-white px-4 sm:px-7 py-3 sm:py-3.5 text-[14px] sm:text-[15px] font-semibold shadow-md transition-all active:scale-[0.98] text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                  <span className="sm:hidden">Send Menu on WhatsApp (+92 345 4159835)</span>
                  <span className="hidden sm:inline">Send Your Menu on WhatsApp (+92 345 4159835)</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 shrink-0" />
                </a>
                <p className="text-center text-xs text-ink/50 mt-2.5 font-normal">
                  We reply within 15 minutes • No payment required to see your demo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. FAQ SECTION                                               */}
        {/* ============================================================ */}
        <section id="faq" aria-labelledby="faq-heading" className="px-2 sm:px-6 lg:px-8 py-14 sm:py-24">
          <div className="max-w-[1280px] mx-auto grid gap-8 sm:gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-[11px] sm:text-[13px] font-mono font-semibold tracking-wider uppercase text-ink/60">
                <span className="text-rush mr-1.5">•</span> [05] FREQUENTLY ASKED QUESTIONS
              </p>
              {/* Section Heading: 56px at reference laptop screen, weight 500 */}
              <h2
                id="faq-heading"
                className="mt-3.5 sm:mt-4 text-ink fluid-heading"
              >
                Clear answers before you shift from paper registers.
              </h2>
              {/* Section Sub-heading: 24px at reference laptop screen, weight 400 */}
              <p className="mt-3 sm:mt-3.5 text-ink/75 fluid-section-sub">
                Have questions about your thermal printer model, menu deals, or counter staff? Reach out directly on WhatsApp anytime.
              </p>
              <div className="mt-6 sm:mt-7">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[6px] bg-ink text-ivory px-5 py-2.5 text-sm font-semibold hover:bg-neutral-800 transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="border-t border-ink/15 divide-y divide-ink/15">
              {FAQ.map((f) => (
                <details key={f.q} className="group py-4 sm:py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 sm:gap-4 text-[clamp(0.95rem,1.2vw,1.15rem)] font-semibold tracking-tight text-ink [&::-webkit-details-marker]:hidden">
                    <span>{f.q}</span>
                    <span
                      aria-hidden
                      className="relative h-7 w-7 sm:h-8 sm:w-8 shrink-0 rounded-[6px] border border-ink/20 flex items-center justify-center transition-colors group-open:bg-ink group-open:border-ink group-open:text-ivory"
                    >
                      <span className="text-xs font-mono group-open:hidden">+</span>
                      <span className="text-xs font-mono hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  {/* Paragraph: 14px at reference laptop screen, weight 400 */}
                  <p className="mt-3 sm:mt-4 pr-4 sm:pr-10 text-ink/75 fluid-paragraph">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. FINAL CTA & FOOTER                                        */}
        {/* ============================================================ */}
        <footer className="rounded-[18px] sm:rounded-[22px] bg-ink text-ivory px-5 sm:px-10 lg:px-14 pt-14 sm:pt-24 pb-8 sm:pb-10">
          <div className="max-w-[1280px] mx-auto">
            <div>
              <p className="text-[11px] sm:text-sm font-mono font-semibold tracking-wider uppercase text-ivory/60">
                <span className="text-rush mr-1.5">•</span> 24-HOUR TURNAROUND GUARANTEE
              </p>
              {/* Section Heading: 56px at reference laptop screen, weight 500 */}
              <h2 className="mt-3.5 sm:mt-4 max-w-[22ch] text-ivory fluid-heading">
                Kagaz aur register se azaadi lein. Apne restaurant ko automate karein.
              </h2>
              {/* Section Sub-heading: 24px at reference laptop screen, weight 400 */}
              <p className="mt-4 sm:mt-5 max-w-[38rem] text-ivory/75 fluid-section-sub">
                WhatsApp us a photo of your paper menu right now. We will configure a live preview with your restaurant deals and prices before you pay a single rupee.
              </p>

              <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-[6px] bg-emerald-600 hover:bg-emerald-500 text-white px-5 sm:px-7 py-3 sm:py-3.5 text-[13px] sm:text-[15px] font-semibold shadow-md transition-all active:scale-[0.98] text-center"
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                  <span className="sm:hidden">Get Free Preview on WhatsApp</span>
                  <span className="hidden sm:inline">Get Free Preview on WhatsApp (+92 345 4159835)</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 shrink-0" />
                </a>

                <Link
                  href="/demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-[6px] border border-white/20 bg-white/5 backdrop-blur-md px-5 sm:px-6 py-3 sm:py-3.5 text-[13px] sm:text-[15px] font-semibold hover:bg-white/10 transition-all active:scale-[0.98] text-center"
                >
                  <span>Try Live Counter Demo</span>
                  <span aria-hidden className="text-[12px]">↗</span>
                </Link>
              </div>
            </div>

            {/* Sitemap Footer Grid - 3 Columns */}
            <div className="mt-14 sm:mt-24 grid gap-8 sm:gap-10 border-t border-white/10 pt-10 sm:pt-12 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="flex items-center gap-2 text-[20px] font-bold tracking-tight text-white">
                  parchiOS <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-rush" />
                </p>
                <p className="mt-3 text-ivory/60 fluid-paragraph max-w-[20rem]">
                  The 5-second digital parchi system for Pakistani fast-food, cafes, and cloud kitchens. Zero monthly commission.
                </p>
                <div className="mt-4">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    <span>WhatsApp: +92 345 4159835</span>
                  </a>
                </div>
              </div>

              <FooterCol
                title="Product"
                links={[
                  ['Try Live Counter Demo', '/demo'],
                  ['Launch Instant POS', '/pos'],
                  ['3 Problems We Solve', '#problems'],
                  ['Core Features', '#features'],
                ]}
              />

              <FooterCol
                title="Restaurant Proof"
                links={[
                  ['HFC Live Case Study', '#case-study'],
                  ['45,000 PKR Pricing', '#pricing'],
                  ['Risk-Reversal Guarantee', '#pricing'],
                  ['Operator FAQ', '#faq'],
                ]}
              />
            </div>

            <div className="mt-10 sm:mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:text-sm text-ivory/50 sm:flex-row sm:justify-between items-center">
              <p>© 2026 ParchiOS Pakistan. Built for Pakistani food operators.</p>
              <a href="#top" className="hover:text-ivory transition-colors">
                Back to top ↑
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'ParchiOS',
            operatingSystem: 'Windows, macOS, Android, iOS, Linux (Web PWA)',
            applicationCategory: 'BusinessApplication',
            offers: {
              '@type': 'Offer',
              price: '45000',
              priceCurrency: 'PKR',
              description: 'Complete 24-hour setup, branded menu, and zero monthly commission.',
            },
            description:
              'ParchiOS replaces messy register books and expensive monthly POS software for Pakistani fast-food, cafes, and cloud kitchens.',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <p className="text-[12px] font-mono font-semibold tracking-wider uppercase text-ivory/50">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            {href.startsWith('/') && !href.startsWith('/api') ? (
              <Link href={href} className="fluid-paragraph text-ivory/70 hover:text-white transition-colors">
                {label}
              </Link>
            ) : (
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="fluid-paragraph text-ivory/70 hover:text-white transition-colors"
              >
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
