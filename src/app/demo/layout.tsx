import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live Interactive Counter POS Sandbox',
  description:
    'Experience the 5-second ParchiOS restaurant counter screen live. Add items by number, test KOT tickets, table layouts, and offline cart flow in your browser.',
  openGraph: {
    title: 'ParchiOS Live Interactive Counter POS Sandbox',
    description:
      'Experience the 5-second ParchiOS restaurant counter screen live. Add items by number, test KOT tickets, table layouts, and offline cart flow.',
    url: 'https://parchios.vercel.app/demo',
    siteName: 'ParchiOS Pakistan',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ParchiOS Live Interactive Counter POS Sandbox',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ParchiOS Live Interactive Counter POS Sandbox',
    description:
      'Experience the 5-second ParchiOS restaurant counter screen live. Add items by number, test KOT tickets, and table layouts.',
    images: ['/og-image.png'],
  },
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
