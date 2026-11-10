import Link from 'next/link';
import Nav from '@/components/Landing/Nav';

const FAQ = [
  {
    q: 'What happens if PTCL fiber or 4G disconnects during Friday rush?',
    a: 'Nothing changes at the counter. Every order is stored locally in your browser IndexedDB database. Kitchen tokens continue printing over USB or LAN cables, touch screens keep flashing, and bills settle without zero-point cloud delay. Everything syncs on its own once internet returns.',
  },
  {
    q: 'Do we have to buy expensive proprietary POS touch terminals?',
    a: 'No. parchiOS runs inside Chrome or Edge on any Windows PC, laptop, Android tablet, or iPad you already own. It pairs directly with standard 80mm thermal printers from Black Copper, Xprinter, SpeedX, and Epson.',
  },
  {
    q: 'Can Tandoor, Grill, Bar, and Fryer each get their own printed slip?',
    a: 'Yes. Assign any menu category or dish to a specific kitchen pass or screen. One cashier tap routes karahi orders to the burner pass, naans to the clay oven, and burgers to the fry station automatically.',
  },
  {
    q: 'How are GST, PRA, SRB, KPRA, and FBR invoices handled?',
    a: 'Set your tax rate (or 0% if unregistered), STRN/NTN numbers, and invoice prefix once in Branch Settings. Every customer receipt prints a clean, itemised breakdown in PKR.',
  },
  {
    q: 'How do we manage our own delivery riders and Cash on Delivery floats?',
    a: 'Assign direct WhatsApp or phone orders to your branch riders. parchiOS tracks the exact petty cash float given to each rider and reconciles collected cash and Raast QR transfers at shift close.',
  },
  {
    q: 'Can a cashier void or alter an order after printing the bill?',
    a: 'Cashiers can punch and settle orders. Voids, refunds, price overrides, and shift cash resets require a 4-digit Manager PIN and record an immutable audit trail.',
  },
  {
    q: 'How long does branch onboarding and menu setup take?',
    a: 'Most branches go live in under fifteen minutes. Start from our preloaded Pakistani fast-food and desi menu templates or enter your own categories and deals directly.',
  },
];

const SCENES = [
  {
    n: '01',
    t: 'The internet drops at 8:40 PM on Friday rush.',
    d: 'Cloud POS freezes. The counter line spills onto the street. Cashiers scramble for paper pads while guests wait in confusion.',
  },
  {
    n: '02',
    t: 'A hand-written paper slip gets lost near the burner pass.',
    d: 'Table 14 waits 35 minutes for their Karahi. The kitchen erupts in shouting, the family walks out, and they tell every friend in town.',
  },
  {
    n: '03',
    t: 'Three riders are out with delivery orders on loose chits.',
    d: 'At midnight close, the cash drawer is short Rs. 3,500. Nobody knows which rider collected which COD cash or Raast transfer.',
  },
  {
    n: '04',
    t: 'Aggregators take 25% to 30% of every delivery order.',
    d: 'You bought the meat, lit the coals, fried the burgers, and paid the staff. The aggregator kept the entire profit margin.',
  },
];

const SOLUTION = [
  {
    img: '/images/landing/counter-hardware-dark.jpg',
    tag: 'High-Speed Counter',
    title: 'Key in a 7-item feast in under 6 seconds.',
    body: 'Touch-optimized item tiles, rapid number keys (#1 for Zinger, #14 for Karahi), and split-second checkout keep the counter moving even when orders pour in non-stop.',
  },
  {
    img: '/images/landing/dining-hall-night.jpg',
    tag: 'Floor & Family Hall',
    title: 'Every table, timer, and bill at a single glance.',
    body: 'Real-time color-coded table occupancy map with privacy hall separation. See active guest dining timers and pending bills without walking across the dining room.',
  },
  {
    img: '/images/landing/kitchen-fire-pass.jpg',
    tag: 'Kitchen Station Pass',
    title: 'Each dish routes to the right chef pass instantly.',
    body: 'Direct LAN routing sends Karahi orders to the burner pass and burgers to the fry station. Fast 80mm thermal KOT slips or interactive touch screen prep timers.',
  },
];

const STEPS = [
  {
    n: '01',
    t: 'Punch the Order',
    d: 'Tap menu cards or punch # item codes. Add spicy/mild modifiers, assign table number or delivery rider in 2 taps.',
  },
  {
    n: '02',
    t: 'Instant Pass Routing',
    d: 'Station KOT slips print and kitchen screens chime at the exact prep station — zero shouting across the counter.',
  },
  {
    n: '03',
    t: 'Serve & Settle Bill',
    d: 'Split checks, apply authorized discounts, and collect in Cash, Card, or Raast. Crisp thermal customer receipts in PKR.',
  },
  {
    n: '04',
    t: 'Close & Audit Shift',
    d: '1-tap Z-report balances cash drawer, rider float returns, and sales totals. Every void and refund is permanently tracked.',
  },
];

const COMPAT = ['Black Copper', 'Xprinter', 'SpeedX', 'Epson', 'Google Chrome', 'Microsoft Edge', 'Windows 11', 'Android POS', 'Apple iPad'];

function Arrow() {
  return <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>;
}

export default function LandingPage() {
  return (
    <div id="top" className="bg-ivory text-ink font-jakarta antialiased selection:bg-ink selection:text-ivory w-full overflow-x-hidden">
      <Nav />

      <main className="p-2 sm:p-4 space-y-3 sm:space-y-4 max-w-[1440px] mx-auto">
        {/* ============================================================ */}
        {/* 1. HERO SECTION                                              */}
        {/* End result wanted, without the fear (Lumora + Apple style)   */}
        {/* ============================================================ */}
        <section
          aria-label="parchiOS Restaurant Operating System"
          className="relative isolate overflow-hidden rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] min-h-[92svh] sm:min-h-[96svh] flex items-end border border-black/5"
        >
          {/* Single-hue cinematic landscape photo */}
          <div
            aria-hidden
            className="absolute inset-0 -z-20 bg-cover bg-[60%_center] filter contrast-[1.08] brightness-[0.92]"
            style={{ backgroundImage: 'url(/images/landing/hero-restaurant.jpg)' }}
          />

          {/* Deep ink gradient overlay for high contrast text readability */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(21,19,15,0.92)_0%,rgba(21,19,15,0.68)_55%,rgba(21,19,15,0.15)_100%),linear-gradient(0deg,rgba(21,19,15,0.75)_0%,transparent_50%)]"
          />

          <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-10 lg:px-14 pb-12 sm:pb-20 pt-36 sm:pt-44">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-ivory text-xs sm:text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-rush animate-pulse" />
              <span>Offline-First Restaurant Operating System</span>
            </div>

            <h1 className="text-ivory font-bold tracking-[-0.04em] leading-[0.96] text-[clamp(2.75rem,7.5vw,7.25rem)] max-w-[12ch]">
              Every table served. Every night, calm.
            </h1>

            <p className="mt-6 sm:mt-8 max-w-[36rem] text-ivory/85 text-[clamp(1.05rem,1.35vw,1.3rem)] leading-relaxed font-normal">
              parchiOS runs your counter, kitchen pass, and delivery riders as one quiet system — with{' '}
              <span className="text-white font-medium">zero cloud delays</span> during Friday rush,{' '}
              <span className="text-white font-medium">zero lost paper slips</span>, and{' '}
              <span className="text-white font-medium">0% aggregator commission</span>.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5">
              <Link
                href="/demo"
                className="group inline-flex items-center gap-2.5 rounded-full bg-rush text-white px-7 sm:px-8 py-3.5 sm:py-4 text-[14px] sm:text-[15px] font-semibold hover:brightness-110 shadow-lg shadow-rush/25 transition-all active:scale-[0.98]"
              >
                <span>Launch Live Demo Terminal</span>
                <Arrow />
              </Link>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur-md text-ivory px-6 sm:px-7 py-3.5 sm:py-4 text-[14px] sm:text-[15px] font-medium hover:bg-white/10 transition-all active:scale-[0.98]"
              >
                <span>See Shift Flow</span>
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. SOCIAL PROOF                                              */}
        {/* Proven behind real counter, hardware compatibility strip     */}
        {/* ============================================================ */}
        <section id="proof" aria-labelledby="proof-heading" className="px-3 sm:px-8 py-20 sm:py-32">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase text-ink/50">
              [01] &nbsp;PROVEN IN PRODUCTION
            </p>

            <h2
              id="proof-heading"
              className="mt-4 sm:mt-6 max-w-[28ch] text-[clamp(1.85rem,3.8vw,3.4rem)] font-bold leading-[1.12] tracking-[-0.03em]"
            >
              Built and proven behind a real counter.{' '}
              <span className="text-ink/40 font-normal">
                Engineered directly for Haseeb&apos;s Foods Café (Samahni, AJK), handling late-night rush, load-shedding switchovers, and fast thermal KOT printing.
              </span>
            </h2>

            {/* Bento Metric Cards */}
            <div className="mt-12 sm:mt-16 grid gap-4 grid-cols-1 md:grid-cols-3">
              <div className="rounded-[24px] sm:rounded-[32px] bg-white/80 border border-ink/10 p-7 sm:p-9 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-ink/45">SETUP TIME</span>
                  <p className="mt-4 text-[clamp(3.2rem,5.5vw,5rem)] font-extrabold leading-none tracking-[-0.04em] text-ink">
                    15<span className="text-ink/35 text-[0.6em] font-normal"> min</span>
                  </p>
                </div>
                <p className="mt-8 text-ink/70 text-[15px] leading-snug">
                  From entering your branch name to punching your first order and printing thermal receipts.
                </p>
              </div>

              <div className="rounded-[24px] sm:rounded-[32px] bg-ink text-ivory p-7 sm:p-9 flex flex-col justify-between shadow-md">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-ivory/45">PRINTER COMPATIBILITY</span>
                  <p className="mt-4 text-[clamp(3.2rem,5.5vw,5rem)] font-extrabold leading-none tracking-[-0.04em] text-ivory">
                    80<span className="text-ivory/40 text-[0.6em] font-normal"> mm</span>
                  </p>
                </div>
                <p className="mt-8 text-ivory/70 text-[15px] leading-snug">
                  Standard ESC/POS thermal slips on USB &amp; LAN printers you already own. Zero proprietary locks.
                </p>
              </div>

              <div className="rounded-[24px] sm:rounded-[32px] bg-white/80 border border-ink/10 p-7 sm:p-9 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-ink/45">AGGREGATOR CUT</span>
                  <p className="mt-4 text-[clamp(3.2rem,5.5vw,5rem)] font-extrabold leading-none tracking-[-0.04em] text-ink">
                    0<span className="text-rush text-[0.7em] font-bold">%</span>
                  </p>
                </div>
                <p className="mt-8 text-ink/70 text-[15px] leading-snug">
                  Own your customer list, WhatsApp delivery orders, and cash float reconciliation with zero middleman fee.
                </p>
              </div>
            </div>
          </div>

          {/* Marquee Hardware Ribbon */}
          <div className="mt-16 sm:mt-24 overflow-hidden border-y border-ink/10 py-5 w-full max-w-full" aria-label="Supported Hardware">
            <div className="marquee flex w-max gap-12 sm:gap-16 pr-12 text-[clamp(1.15rem,1.8vw,1.5rem)] font-semibold tracking-tight text-ink/40">
              {[...COMPAT, ...COMPAT, ...COMPAT, ...COMPAT].map((c, i) => (
                <span key={i} className="whitespace-nowrap flex items-center gap-4">
                  <span>{c}</span>
                  <span className="text-ink/20 font-normal">•</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. PROBLEM STATEMENT                                         */}
        {/* What they deal with + real financial & operational cost      */}
        {/* ============================================================ */}
        <section
          id="problem"
          aria-labelledby="problem-heading"
          className="rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] bg-ink text-ivory px-6 sm:px-12 lg:px-16 py-20 sm:py-32"
        >
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase text-ivory/50">
              [02] &nbsp;THE COUNTER REALITY
            </p>

            <h2
              id="problem-heading"
              className="mt-4 sm:mt-6 max-w-[18ch] text-[clamp(2.2rem,5.2vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.04em]"
            >
              You already know how this night goes.
            </h2>

            {/* Problem Breakdown List */}
            <ol className="mt-12 sm:mt-20 border-t border-ivory/15 divide-y divide-ivory/15">
              {SCENES.map((s) => (
                <li key={s.n} className="py-7 sm:py-9 grid gap-2 sm:gap-8 sm:grid-cols-[4.5rem_1.4fr_1fr] items-baseline">
                  <span className="text-[13px] font-mono font-semibold text-rush">[{s.n}]</span>
                  <p className="text-[clamp(1.25rem,2.1vw,1.85rem)] font-semibold leading-tight tracking-[-0.02em] text-ivory">
                    {s.t}
                  </p>
                  <p className="text-ivory/60 text-[15px] sm:text-[16px] leading-relaxed">
                    {s.d}
                  </p>
                </li>
              ))}
            </ol>

            {/* High Impact Cost Calculation */}
            <div className="mt-16 sm:mt-24 pt-12 border-t border-ivory/15 grid gap-8 lg:grid-cols-[1.3fr_1fr] items-end">
              <div>
                <p className="text-ivory/55 text-sm sm:text-base font-medium">
                  The monthly cash quietly lost to aggregators
                </p>
                <p className="mt-2 text-[clamp(3rem,8.5vw,7.5rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-[#F04438]">
                  Rs. 750,000
                </p>
                <p className="mt-4 text-ivory/70 text-[clamp(1rem,1.3vw,1.2rem)] max-w-[32rem] leading-snug">
                  drained on just Rs. 100,000 of daily delivery orders at standard 25% commissions. That is two brand-new delivery motorbikes and a branch manager&apos;s salary every month.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                <span className="text-xs font-mono font-semibold text-rush tracking-wider uppercase">THE SILENT TOLL</span>
                <p className="mt-3 text-[clamp(1.15rem,1.6vw,1.4rem)] leading-snug text-ivory/90 font-medium">
                  And the damage no aggregator invoices: one missing Karahi slip burns customer trust forever, while kitchen staff burn out yelling over lost orders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. SOLUTION / VALUE                                          */}
        {/* 3 Pillars: Counter, Floor, Kitchen with photographic cards   */}
        {/* ============================================================ */}
        <section id="solution" aria-labelledby="solution-heading" className="px-3 sm:px-8 py-20 sm:py-32">
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase text-ink/50">
              [03] &nbsp;THE COMPLETE SOLUTION
            </p>

            <h2
              id="solution-heading"
              className="mt-4 sm:mt-6 max-w-[20ch] text-[clamp(2.1rem,4.8vw,4.4rem)] font-bold leading-[1.04] tracking-[-0.04em]"
            >
              One calm system from counter to kitchen to cash drawer.
            </h2>

            {/* Alternating Feature Showcases */}
            <div className="mt-14 sm:mt-20 space-y-16 sm:space-y-24">
              {SOLUTION.map((s, i) => (
                <div key={s.tag} className="grid gap-8 lg:gap-14 lg:grid-cols-2 items-center">
                  <div
                    className={`relative aspect-[16/11] overflow-hidden rounded-[24px] sm:rounded-[36px] bg-ink shadow-md ${
                      i % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-cover bg-center filter contrast-105"
                      style={{ backgroundImage: `url(${s.img})` }}
                    />
                  </div>

                  <div className="max-w-[32rem]">
                    <span className="inline-flex rounded-full border border-ink/20 bg-white/60 px-3.5 py-1 text-[12px] sm:text-[13px] font-semibold tracking-wide text-ink">
                      {s.tag}
                    </span>
                    <h3 className="mt-5 text-[clamp(1.7rem,3vw,2.6rem)] font-bold leading-[1.1] tracking-[-0.03em] text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed text-ink/70">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Capability Pillars */}
            <div className="mt-20 sm:mt-28 grid gap-8 sm:grid-cols-3 border-t border-ink/15 pt-10">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-ink/50">[01] LOCAL ARCHITECTURE</span>
                <h3 className="text-[19px] font-bold tracking-tight text-ink">Runs 100% Offline</h3>
                <p className="text-ink/65 text-sm leading-relaxed">
                  Your counter keeps ringing and printing even if PTCL cuts out, mobile data dies, or the UPS clicks over.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-ink/50">[02] ZERO COMMISSION</span>
                <h3 className="text-[19px] font-bold tracking-tight text-ink">Direct WhatsApp &amp; Delivery</h3>
                <p className="text-ink/65 text-sm leading-relaxed">
                  Assign branch delivery riders, hand out cash floats, and reconcile collected cash or Raast payments with 0% aggregator cut.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-ink/50">[03] THEFT PREVENTION</span>
                <h3 className="text-[19px] font-bold tracking-tight text-ink">Immutable Manager PIN Audits</h3>
                <p className="text-ink/65 text-sm leading-relaxed">
                  Cashiers cannot silently delete bills or void items without an authorized 4-digit manager PIN that logs every edit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. HOW IT WORKS                                              */}
        {/* 4 sequential shift steps                                     */}
        {/* ============================================================ */}
        <section
          id="how"
          aria-labelledby="how-heading"
          className="rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] bg-white/70 border border-ink/10 px-6 sm:px-12 lg:px-16 py-20 sm:py-32"
        >
          <div className="max-w-[1280px] mx-auto">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase text-ink/50">
              [04] &nbsp;HOW IT WORKS
            </p>

            <h2
              id="how-heading"
              className="mt-4 sm:mt-6 max-w-[20ch] text-[clamp(2.1rem,4.8vw,4.4rem)] font-bold leading-[1.04] tracking-[-0.04em]"
            >
              From the first table order to the final cash drawer audit.
            </h2>

            <ol className="mt-12 sm:mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <li key={s.n} className="border-t-2 border-ink pt-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[13px] font-mono font-bold text-rush">[{s.n}]</span>
                    <h3 className="mt-8 text-[clamp(1.35rem,2vw,1.75rem)] font-bold tracking-[-0.025em] leading-tight text-ink">
                      {s.t}
                    </h3>
                  </div>
                  <p className="mt-4 text-ink/70 text-sm sm:text-[15px] leading-relaxed">
                    {s.d}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. FAQ                                                       */}
        {/* Expandable answers to tough operator questions              */}
        {/* ============================================================ */}
        <section id="faq" aria-labelledby="faq-heading" className="px-3 sm:px-8 py-20 sm:py-32">
          <div className="max-w-[1280px] mx-auto grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <p className="text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase text-ink/50">
                [05] &nbsp;OPERATOR QUESTIONS
              </p>
              <h2
                id="faq-heading"
                className="mt-4 sm:mt-6 text-[clamp(2.1rem,4.2vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.035em] text-ink"
              >
                What owners ask before switching their counter.
              </h2>
              <p className="mt-4 text-ink/65 text-sm sm:text-base leading-relaxed">
                Have specific hardware or multi-branch requirements? You can test the system live right now with zero installation.
              </p>
              <div className="mt-8">
                <Link
                  href="/demo"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink text-ivory px-6 py-3 text-sm font-semibold hover:bg-neutral-800 transition-all"
                >
                  <span>Test Terminal in Sandbox</span>
                  <Arrow />
                </Link>
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
                  <p className="mt-4 pr-10 text-ink/70 text-sm sm:text-[15px] leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. CTA & FOOTER                                              */}
        {/* Clear conclusion and exhaustive links                         */}
        {/* ============================================================ */}
        <footer className="rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] bg-ink text-ivory px-6 sm:px-12 lg:px-16 pt-18 sm:pt-28 pb-10">
          <div className="max-w-[1280px] mx-auto">
            <div>
              <p className="text-xs sm:text-sm font-semibold font-mono tracking-wider uppercase text-rush">
                READY FOR FRIDAY RUSH
              </p>
              <h2 className="mt-4 max-w-[15ch] text-[clamp(2.5rem,7vw,6.5rem)] font-bold leading-[0.98] tracking-[-0.04em] text-ivory">
                Run tomorrow&apos;s service on parchiOS.
              </h2>
              <p className="mt-6 max-w-[32rem] text-ivory/70 text-base sm:text-lg leading-relaxed">
                Start your counter in 15 minutes. Free for the first 30 days, then flat Rs. 4,500/month per branch with zero aggregator commissions.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/demo"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-rush text-white px-8 py-4 text-[15px] font-semibold hover:brightness-110 shadow-lg shadow-rush/30 transition-all active:scale-[0.98]"
                >
                  <span>Launch Live Demo Terminal</span>
                  <Arrow />
                </Link>
                <Link
                  href="/pos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-7 py-4 text-[15px] font-medium hover:bg-white/10 transition-all active:scale-[0.98]"
                >
                  <span>Start Free Counter</span>
                </Link>
              </div>
            </div>

            {/* Structured Sitemap Footer Grid */}
            <div className="mt-20 sm:mt-28 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="flex items-center gap-2 text-[20px] font-bold tracking-tight text-white">
                  parchiOS <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-rush" />
                </p>
                <p className="mt-3 text-ivory/60 text-sm leading-relaxed max-w-[20rem]">
                  High-performance offline-first restaurant operating system, thermal KOT printer terminal, and 0% delivery manager built for Pakistani kitchens.
                </p>
              </div>

              <FooterCol
                title="Product"
                links={[
                  ['Interactive Demo Terminal', '/demo'],
                  ['POS Cashier Screen', '/pos'],
                  ['Kitchen Pass Solution', '#solution'],
                  ['Shift Flow & Routing', '#how'],
                ]}
              />

              <FooterCol
                title="Restaurant Operations"
                links={[
                  ['The Friday Rush Problem', '#problem'],
                  ['Samahni Production Proof', '#proof'],
                  ['Hardware & Thermal FAQ', '#faq'],
                  ['FBR & Provincial Taxes', '#faq'],
                ]}
              />

              <FooterCol
                title="Project & Code"
                links={[
                  ['GitHub Repository', 'https://github.com/Waqasdevs/ParchiOS'],
                  ['System Health API', '/api/health'],
                  ['IndexedDB Sync API', '/api/sync'],
                ]}
              />
            </div>

            <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:text-sm text-ivory/50 sm:flex-row sm:justify-between items-center">
              <p>© 2026 parchiOS Pakistan. Engineered for real counters.</p>
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
            name: 'parchiOS',
            operatingSystem: 'Windows, macOS, Android, iOS, Linux (Web PWA)',
            applicationCategory: 'BusinessApplication',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
            description:
              'The offline-first restaurant operating system for Pakistani kitchens: 80mm thermal KOT printing, kitchen display system, floor plan, and 0% commission delivery.',
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
              <a href={href} className="text-sm text-ivory/70 hover:text-white transition-colors">
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
