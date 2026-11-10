import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#170D21] text-[#F3EEFB] flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-[520px] w-full rounded-2xl bg-[#231532] p-2">
        <div className="rounded-lg bg-[#2E1D40] p-8 flex flex-col items-start gap-6">
          <span className="font-mono caption-2 text-[#E4DAF9] py-1 px-2.5 rounded-md bg-[#3A2850] not-italic">
            404 • TICKET NOT FOUND AT PASS
          </span>
          <h1 className="heading-2 text-[#F3EEFB] balance-heading not-italic">
            This table or route does not exist on the floor plan.
          </h1>
          <p className="body-4 text-[#B3A6C9] pretty-body not-italic">
            Return to the parchiOS Pakistan overview or jump straight into the live offline POS demo terminal.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/"
              className="py-2 px-3 rounded-lg bg-[#C9B8F2] text-[#170D21] caption-1 transition-transform duration-200 ease-weighted active:scale-[0.97] not-italic"
            >
              Back to Overview
            </Link>
            <Link
              href="/demo"
              className="py-2 px-3 rounded-lg bg-[#3A2850] text-[#F3EEFB] caption-1 transition-transform duration-200 ease-weighted active:scale-[0.97] not-italic"
            >
              Open Demo Terminal
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
