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
  TrendingUp,
  Receipt,
  Clock,
  Printer,
  FileText,
} from 'lucide-react';

const PROBLEMS = [
  {
    num: '01',
    title: '"Raat Ko Cash Match Nahi Hota" (Stop Daily Cash Leakage)',
    description:
      'Paper parchis get lost, overwritten, or miscalculated during the 9 PM dinner rush. ParchiOS tracks every single burger, deal, and drink automatically so your drawer cash matches 100% at closing time.',
    icon: Banknote,
    badge: 'CASH LEAKAGE FIX',
  },
  {
    num: '02',
    title: 'Kitchen Confusion & Late Orders (Instant Counter-to-Kitchen Sync)',
    description:
      'No more shouting orders into the kitchen or lost paper slips. The moment your cashier punches an order, the kitchen screen/printer gets a clean digital KOT slip with exact deal items and table/delivery numbers.',
    icon: ChefHat,
    badge: 'ZERO LOST SLIPS',
  },
  {
    num: '03',
    title: 'Zero Foodpanda-Style Commissions (100% Yours Forever)',
    description:
      "Don't pay 25%–30% commission or heavy monthly software fees. Pay a one-time setup fee and own your restaurant's complete order, delivery, and customer database forever.",
    icon: ShieldCheck,
    badge: '0% COMMISSION',
  },
];

const FEATURES = [
  {
    title: '5-Second Fast-Food Counter Screen',
    description:
      'Designed for high-rush burger, broast, pizza, and shawarma counters. Even a non-technical cashier can learn it in 10 minutes.',
    img: '/images/landing/counter-hardware-dark.jpg',
    tag: 'HIGH-SPEED POS',
    icon: Zap,
  },
  {
    title: 'Owner’s Live Phone Dashboard',
    description:
      'Sitting at home? Open ParchiOS on your mobile to see live running orders, top-selling deals, and total cash collected today in real time.',
    img: '/images/landing/dining-hall-night.jpg',
    tag: 'MOBILE CONTROL',
    icon: Smartphone,
  },
  {
    title: 'Custom Branded for Your Restaurant',
    description:
      'Your logo, your menu deals, and your colors—deployed and live within 24 Hours.',
    img: '/images/landing/kitchen-fire-pass.jpg',
    tag: '24-HOUR LAUNCH',
    icon: Sparkles,
  },
  {
    title: 'Works on Any Device',
    description:
      'No need to buy a 150,000 PKR POS machine. Runs smoothly on any old laptop, tablet, cheap Android phone, or existing counter PC.',
    tag: 'HARDWARE FREEDOM',
    icon: Laptop,
    isHardwareCard: true,
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
    a: 'It is 100% one-time setup. There are zero per-order commissions (no 25% Foodpanda cut) and zero recurring monthly software fees. You own your system, menus, and customer database forever.',
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
      className="bg-ivory text-ink font-jakarta antialiased selection:bg-ink selection:text-ivory w-full overflow-x-hidden"
    >
      <Nav />

      <main className="p-2 sm:p-4 space-y-3 sm:space-y-4 max-w-[1440px] mx-auto">
        {/* ============================================================ */}
        {/* 1. HERO SECTION                                              */}
        {/* ============================================================ */}
        <section
          aria-label="ParchiOS Restaurant Operating System"
          className="relative isolate overflow-hidden rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] min-h-[92svh] sm:min-h-[96svh] flex items-end border border-black/5"
        >
          {/* Single-hue cinematic landscape photo */}
          <div
            aria-hidden
            className="absolute inset-0 -z-20 bg-cover bg-[60%_center] filter contrast-[1.08] brightness-[0.88]"
            style={{ backgroundImage: 'url(/images/landing/hero-restaurant.jpg)' }}
          />

          {/* Deep ink gradient overlay for high contrast text readability */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(21,19,15,0.94)_0%,rgba(21,19,15,0.78)_55%,rgba(21,19,15,0.25)_100%),linear-gradient(0deg,rgba(21,19,15,0.85)_0%,transparent_50%)]"
          />

          <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-14 pb-12 sm:pb-20 pt-36 sm:pt-44">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-ivory text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-rush animate-pulse" />
              <span>Built for Pakistani Fast-Food, Cafes &amp; Cloud Kitchens 🇵🇰</span>
            </div>

            {/* Main Headline (H1) */}
            <h1 className="text-ivory font-bold tracking-[-0.035em] leading-[1.04] text-[clamp(2.35rem,5.5vw,5.5rem)] max-w-[20ch]">
              Kagaz Aur Register Ko Chhorein—Apne Restaurant Ko 5-Second Digital Parchi System Pe Shift Karein.
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 sm:mt-8 max-w-[42rem] text-ivory/85 text-[clamp(1.05rem,1.35vw,1.25rem)] leading-relaxed font-normal">
              ParchiOS replaces messy register books and expensive monthly POS software. Punch counter orders in 5 seconds, send instant Kitchen Order Tickets (KOT), and get 100% accurate daily cash sales on your phone with Zero Monthly Commission.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5">
              {/* Primary CTA (WhatsApp) */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-7 sm:px-8 py-3.5 sm:py-4 text-[14px] sm:text-[15px] font-semibold shadow-lg shadow-emerald-900/40 transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                <span>Get a Free Live Preview With Your Menu (WhatsApp Us)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Secondary CTA (Live Demo Dashboard) */}
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-ivory px-6 sm:px-7 py-3.5 sm:py-4 text-[14px] sm:text-[15px] font-semibold hover:bg-white/20 transition-all active:scale-[0.98]"
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
          className="rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] bg-ink text-ivory px-6 sm:px-12 lg:px-16 py-20 sm:py-32"
        >
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase text-rush">
              [01] &nbsp;THE 3 BIG PROBLEMS WE SOLVE
            </p>

            <h2
              id="problems-heading"
              className="mt-4 sm:mt-6 max-w-[22ch] text-[clamp(2.1rem,4.8vw,4.2rem)] font-bold leading-[1.06] tracking-[-0.035em]"
            >
              Restaurant owners buy software when they feel the pain of their current setup.
            </h2>
            <p className="mt-4 text-ivory/70 text-base sm:text-lg max-w-[36rem]">
              Messy paper notes, shouting at the kitchen, and losing cash at closing time. Here is how ParchiOS eliminates the daily headache:
            </p>

            {/* 3 Problem Cards Grid */}
            <div className="mt-12 sm:mt-16 grid gap-6 grid-cols-1 md:grid-cols-3">
              {PROBLEMS.map((prob) => {
                const Icon = prob.icon;
                return (
                  <div
                    key={prob.num}
                    className="rounded-[24px] sm:rounded-[32px] bg-white/5 border border-white/10 p-7 sm:p-9 flex flex-col justify-between hover:bg-white/[0.08] transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-6">
                        <span className="text-[11px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-rush/20 text-rush border border-rush/30">
                          {prob.badge}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-ivory shrink-0">
                          <Icon className="w-5 h-5 text-rush" />
                        </div>
                      </div>

                      <h3 className="text-[19px] sm:text-[21px] font-bold leading-snug tracking-[-0.02em] text-ivory">
                        {prob.title}
                      </h3>

                      <p className="mt-4 text-ivory/70 text-[15px] sm:text-[16px] leading-relaxed">
                        {prob.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-ivory/40">
                      <span>PROBLEM #{prob.num}</span>
                      <span className="text-rush font-semibold">100% SOLVED</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. CORE FEATURES SECTION (KEEP IT PRACTICAL)                 */}
        {/* ============================================================ */}
        <section id="features" aria-labelledby="features-heading" className="px-3 sm:px-8 py-20 sm:py-32">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase text-ink/50">
              [02] &nbsp;CORE FEATURES (PRACTICAL &amp; NO-NONSENSE)
            </p>

            <h2
              id="features-heading"
              className="mt-4 sm:mt-6 max-w-[24ch] text-[clamp(2.1rem,4.5vw,4.2rem)] font-bold leading-[1.06] tracking-[-0.035em] text-ink"
            >
              Engineered specifically for busy Pakistani food counters.
            </h2>
            <p className="mt-4 text-ink/70 text-base sm:text-lg max-w-[36rem]">
              No confusing IT terminology. Straightforward tools that let you punch fast, control kitchen passes, and watch your daily sales from your phone.
            </p>

            {/* Features Display Cards */}
            <div className="mt-14 sm:mt-20 space-y-12 sm:space-y-16">
              {/* Feature 1: 5-Second Counter Screen */}
              <div className="grid gap-8 lg:gap-14 lg:grid-cols-2 items-center">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] sm:rounded-[36px] bg-ink shadow-md">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center filter contrast-105"
                    style={{ backgroundImage: `url(${FEATURES[0].img})` }}
                  />
                  <div className="absolute top-4 left-4 bg-ink/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-semibold text-ivory border border-white/10">
                    {FEATURES[0].tag}
                  </div>
                </div>
                <div className="max-w-[32rem]">
                  <div className="w-10 h-10 rounded-xl bg-ink text-ivory flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-rush" />
                  </div>
                  <h3 className="text-[clamp(1.75rem,2.8vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                    {FEATURES[0].title}
                  </h3>
                  <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-ink/75">
                    {FEATURES[0].description}
                  </p>
                </div>
              </div>

              {/* Feature 2: Owner’s Live Phone Dashboard */}
              <div className="grid gap-8 lg:gap-14 lg:grid-cols-2 items-center">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] sm:rounded-[36px] bg-ink shadow-md lg:order-2">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center filter contrast-105"
                    style={{ backgroundImage: `url(${FEATURES[1].img})` }}
                  />
                  <div className="absolute top-4 left-4 bg-ink/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-semibold text-ivory border border-white/10">
                    {FEATURES[1].tag}
                  </div>
                </div>
                <div className="max-w-[32rem] lg:order-1">
                  <div className="w-10 h-10 rounded-xl bg-ink text-ivory flex items-center justify-center mb-4">
                    <Smartphone className="w-5 h-5 text-rush" />
                  </div>
                  <h3 className="text-[clamp(1.75rem,2.8vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.025em] text-ink">
                    {FEATURES[1].title}
                  </h3>
                  <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-ink/75">
                    {FEATURES[1].description}
                  </p>
                </div>
              </div>

              {/* Feature 3 & 4 (Bento Pair): Custom Branded + Works on Any Device */}
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                {/* Feature 3: Custom Branded */}
                <div className="rounded-[24px] sm:rounded-[32px] bg-white/80 border border-ink/10 p-7 sm:p-9 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-ink text-ivory flex items-center justify-center mb-5">
                      <Sparkles className="w-5 h-5 text-rush" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-ink/50">
                      {FEATURES[2].tag}
                    </span>
                    <h3 className="mt-3 text-[22px] sm:text-[24px] font-bold tracking-tight text-ink">
                      {FEATURES[2].title}
                    </h3>
                    <p className="mt-3 text-ink/70 text-[15px] sm:text-[16px] leading-relaxed">
                      {FEATURES[2].description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-ink/10 text-xs font-semibold text-rush">
                    ✓ Deployed &amp; Live In 24 Hours
                  </div>
                </div>

                {/* Feature 4: Works on Any Device */}
                <div className="rounded-[24px] sm:rounded-[32px] bg-white/80 border border-ink/10 p-7 sm:p-9 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-ink text-ivory flex items-center justify-center mb-5">
                      <Laptop className="w-5 h-5 text-rush" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-ink/50">
                      {FEATURES[3].tag}
                    </span>
                    <h3 className="mt-3 text-[22px] sm:text-[24px] font-bold tracking-tight text-ink">
                      {FEATURES[3].title}
                    </h3>
                    <p className="mt-3 text-ink/70 text-[15px] sm:text-[16px] leading-relaxed">
                      {FEATURES[3].description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-ink/10 text-xs font-semibold text-emerald-700">
                    ✓ Saves 150,000 PKR Hardware Cost
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. SOCIAL PROOF / LIVE CASE STUDY SECTION                    */}
        {/* HFC (Haseeb Food Cafe) Star Showcase                         */}
        {/* ============================================================ */}
        <section
          id="case-study"
          aria-labelledby="case-study-heading"
          className="rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] bg-ink text-ivory px-6 sm:px-12 lg:px-16 py-20 sm:py-32"
        >
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase text-rush">
                [03] &nbsp;LIVE CASE STUDY &amp; SOCIAL PROOF
              </p>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-ivory border border-white/15">
                ACTIVE DAILY IN SAMAHNI, AJK
              </span>
            </div>

            <h2
              id="case-study-heading"
              className="mt-4 sm:mt-6 text-[clamp(2.1rem,4.5vw,4rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ivory"
            >
              Live in Action: HFC (Haseeb Food Cafe)
            </h2>

            {/* Testimonial Quote Box */}
            <div className="mt-10 sm:mt-14 rounded-[24px] sm:rounded-[36px] bg-white/[0.06] border border-white/15 p-8 sm:p-12 backdrop-blur-md">
              <div className="text-rush text-4xl sm:text-5xl font-serif leading-none mb-4">“</div>
              <p className="text-[clamp(1.2rem,2.2vw,1.9rem)] font-semibold leading-relaxed tracking-[-0.015em] text-ivory max-w-[48ch]">
                Before ParchiOS, our counter staff used manual register books during peak rush hours, leading to missed orders and 45 minutes of daily calculation at night. ParchiOS put our entire menu, kitchen slips, and daily sales report on autopilot in 24 hours.
              </p>

              <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-base sm:text-lg font-bold text-white">
                    Haseeb &amp; Team
                  </div>
                  <div className="text-xs sm:text-sm text-ivory/60">
                    Owner &amp; Operator, Haseeb Food Cafe (Samahni, AJK)
                  </div>
                </div>

                <div className="flex items-center gap-6 text-xs sm:text-sm font-mono text-ivory/70">
                  <div>
                    <span className="text-rush font-bold">0</span> Missed Orders
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div>
                    <span className="text-emerald-400 font-bold">45 Mins</span> Saved Daily
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div>
                    <span className="text-ivory font-bold">24 Hrs</span> Setup Time
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Live Test Button */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/demo"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ivory hover:bg-white text-ink px-8 py-4 text-[15px] font-bold shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Click Here to Test the Live HFC System</span>
                <span aria-hidden className="text-[13px]">↗</span>
              </Link>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ivory/80 hover:text-ivory text-sm font-semibold underline underline-offset-4"
              >
                <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
                <span>Ask Haseeb or Our Team on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. SIMPLE "NO-HEADACHE" PRICING SECTION                      */}
        {/* ============================================================ */}
        <section id="pricing" aria-labelledby="pricing-heading" className="px-3 sm:px-8 py-20 sm:py-32">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase text-rush">
                [04] &nbsp;SIMPLE &quot;NO-HEADACHE&quot; PRICING
              </p>
              <h2
                id="pricing-heading"
                className="mt-3 text-[clamp(2.1rem,4.2vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.035em] text-ink"
              >
                Zero monthly fees. Zero per-order commissions.
              </h2>
              <p className="mt-3 text-ink/70 text-base sm:text-lg">
                One transparent setup price. You own your restaurant system and customer list forever.
              </p>
            </div>

            {/* Big Pricing Card */}
            <div className="mt-12 sm:mt-16 max-w-3xl mx-auto rounded-[28px] sm:rounded-[40px] bg-white border-2 border-ink p-8 sm:p-14 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-ink/10">
                <div>
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-rush bg-rush/10 px-2.5 py-1 rounded-full">
                    ALL-IN-ONE PACKAGE
                  </span>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                    Complete Restaurant Setup (24-Hour Turnaround)
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight font-mono">
                    45,000 <span className="text-xl sm:text-2xl font-bold font-sans">PKR</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-emerald-700 mt-1">
                    One-Time Setup — Zero Commission Per Order
                  </div>
                </div>
              </div>

              {/* What’s Included (Bullet List) */}
              <div className="mt-8">
                <p className="text-xs font-mono uppercase tracking-wider text-ink/50 font-bold mb-4">
                  WHAT&apos;S INCLUDED:
                </p>
                <ul className="space-y-4">
                  {[
                    'Full system branded with your Restaurant Name & Logo',
                    'Complete Menu, Deals & Pricing uploaded by our team (Just WhatsApp us a photo of your menu!)',
                    'Counter POS + Kitchen Order Tracking + Owner Sales Dashboard',
                    '1-on-1 WhatsApp staff training & support',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[15px] sm:text-[17px] text-ink font-medium leading-snug">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risk-Reversal Guarantee Box */}
              <div className="mt-10 rounded-2xl bg-amber-500/10 border border-amber-600/20 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-900 uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4 text-amber-800" />
                  <span>100% Risk-Reversal Guarantee</span>
                </div>
                <p className="text-[14px] sm:text-[15px] font-semibold text-ink leading-relaxed">
                  &quot;Send us a photo of your paper menu on WhatsApp today. We will build a working demo with your restaurant&apos;s name and items first—you only pay after you test it on your phone!&quot;
                </p>
              </div>

              {/* WhatsApp Action Button */}
              <div className="mt-8">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 text-[16px] font-bold shadow-lg shadow-emerald-800/20 transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                  <span>Send Your Menu on WhatsApp (+92 345 4159835)</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-center text-xs text-ink/50 mt-3 font-medium">
                  We reply within 15 minutes • No payment required to see your demo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. FAQ SECTION                                               */}
        {/* ============================================================ */}
        <section id="faq" aria-labelledby="faq-heading" className="px-3 sm:px-8 py-20 sm:py-32">
          <div className="max-w-[1280px] mx-auto grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase text-ink/50">
                [05] &nbsp;FREQUENTLY ASKED QUESTIONS
              </p>
              <h2
                id="faq-heading"
                className="mt-4 text-[clamp(2.1rem,4.2vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.035em] text-ink"
              >
                Clear answers before you shift from paper registers.
              </h2>
              <p className="mt-4 text-ink/65 text-sm sm:text-base leading-relaxed">
                Have questions about your thermal printer model, menu deals, or counter staff? Reach out directly on WhatsApp anytime.
              </p>
              <div className="mt-8">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink text-ivory px-6 py-3 text-sm font-semibold hover:bg-neutral-800 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="border-t border-ink/15 divide-y divide-ink/15">
              {FAQ.map((f) => (
                <details key={f.q} className="group py-5 sm:py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[clamp(1.05rem,1.4vw,1.25rem)] font-semibold tracking-tight text-ink [&::-webkit-details-marker]:hidden">
                    <span>{f.q}</span>
                    <span
                      aria-hidden
                      className="relative h-8 w-8 shrink-0 rounded-full border border-ink/20 flex items-center justify-center transition-colors group-open:bg-ink group-open:border-ink group-open:text-ivory"
                    >
                      <span className="text-xs font-mono group-open:hidden">+</span>
                      <span className="text-xs font-mono hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="mt-4 pr-10 text-ink/75 text-sm sm:text-[15px] leading-relaxed font-normal">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. FINAL CTA & EXHAUSTIVE FOOTER                             */}
        {/* ============================================================ */}
        <footer className="rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] bg-ink text-ivory px-6 sm:px-12 lg:px-16 pt-18 sm:pt-28 pb-10">
          <div className="max-w-[1280px] mx-auto">
            <div>
              <p className="text-xs sm:text-sm font-semibold font-mono tracking-wider uppercase text-rush">
                24-HOUR TURNAROUND GUARANTEE
              </p>
              <h2 className="mt-4 max-w-[18ch] text-[clamp(2.4rem,6.5vw,5.5rem)] font-bold leading-[1.0] tracking-[-0.035em] text-ivory">
                Kagaz aur register se azaadi lein. Apne restaurant ko automate karein.
              </h2>
              <p className="mt-6 max-w-[36rem] text-ivory/75 text-base sm:text-lg leading-relaxed">
                WhatsApp us a photo of your paper menu right now. We will configure a live preview with your restaurant deals and prices before you pay a single rupee.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 text-[15px] font-bold shadow-lg shadow-emerald-950/40 transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                  <span>Get Free Preview on WhatsApp (+92 345 4159835)</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-7 py-4 text-[15px] font-semibold hover:bg-white/10 transition-all active:scale-[0.98]"
                >
                  <span>Try Live Counter Demo</span>
                  <span aria-hidden className="text-[12px]">↗</span>
                </Link>
              </div>
            </div>

            {/* Sitemap Footer Grid */}
            <div className="mt-20 sm:mt-28 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="flex items-center gap-2 text-[20px] font-bold tracking-tight text-white">
                  parchiOS <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-rush" />
                </p>
                <p className="mt-3 text-ivory/60 text-sm leading-relaxed max-w-[20rem]">
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

              <FooterCol
                title="Direct Contact"
                links={[
                  ['WhatsApp Consultation', WHATSAPP_LINK],
                  ['GitHub Codebase', 'https://github.com/Waqasdevs/ParchiOS'],
                  ['System Health Check', '/api/health'],
                ]}
              />
            </div>

            <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:text-sm text-ivory/50 sm:flex-row sm:justify-between items-center">
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
      <p className="text-[12px] font-semibold tracking-wider uppercase text-ivory/40">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            {href.startsWith('/') && !href.startsWith('/api') ? (
              <Link href={href} className="text-sm text-ivory/70 hover:text-white transition-colors">
                {label}
              </Link>
            ) : (
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm text-ivory/70 hover:text-white transition-colors"
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
