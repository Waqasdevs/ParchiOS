import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instant Cashier POS Terminal',
  description:
    'High-speed cashier POS terminal for fast-food, burger joints, pizza cafes, and cloud kitchens in Pakistan. Instant 80mm thermal receipt printing and KOT generation.',
  openGraph: {
    title: 'ParchiOS Instant Cashier POS Terminal',
    description:
      'High-speed cashier POS terminal for fast-food, burger joints, pizza cafes, and cloud kitchens in Pakistan.',
    url: 'https://parchios.vercel.app/pos',
    siteName: 'ParchiOS Pakistan',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ParchiOS Instant Cashier POS Terminal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ParchiOS Instant Cashier POS Terminal',
    description:
      'High-speed cashier POS terminal for fast-food, burger joints, and cloud kitchens in Pakistan.',
    images: ['/og-image.png'],
  },
};

export default function PosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
