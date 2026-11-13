import type { Metadata, Viewport } from 'next';
import JsonLd from '@/components/SEO/JsonLd';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F6F0E4',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://parchios.vercel.app'),
  title: {
    default: 'ParchiOS — 5-Second Digital Parchi & Restaurant POS System Pakistan',
    template: '%s | ParchiOS Pakistan',
  },
  description:
    'ParchiOS replaces messy paper register books and expensive monthly POS software. 5-second counter screen, instant KOT slips, real-time sales on your phone, and 100% offline-ready with zero monthly commission. 45,000 PKR one-time setup.',
  keywords: [
    'restaurant POS Pakistan',
    'digital parchi system',
    'restaurant management software Pakistan',
    'fast food POS Lahore Karachi Islamabad',
    'kitchen order ticket KOT Pakistan',
    '80mm thermal receipt printer software',
    'offline restaurant POS system',
    'zero commission food delivery software',
    'cafe billing machine Pakistan',
    'Pakistani restaurant POS',
    'cloud kitchen software Pakistan',
    'HFC ParchiOS',
    'restaurant cash management Pakistan',
  ],
  authors: [{ name: 'ParchiOS Pakistan', url: 'https://parchios.vercel.app' }],
  creator: 'ParchiOS Pakistan',
  publisher: 'ParchiOS Pakistan',
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: 'https://parchios.vercel.app',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'ParchiOS — 5-Second Digital Parchi & Restaurant POS System Pakistan',
    description:
      'Replace messy register books with ParchiOS. 5-second counter screen, instant KOT slips, and real-time sales on your phone with zero monthly commission. 45,000 PKR one-time setup.',
    url: 'https://parchios.vercel.app',
    siteName: 'ParchiOS Pakistan',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ParchiOS — 5-Second Digital Parchi & Restaurant POS System Pakistan',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ParchiOS — 5-Second Digital Parchi & Restaurant POS System Pakistan',
    description:
      '5-second counter screen, instant KOT slips, and real-time sales on your phone with zero monthly commission. 45,000 PKR one-time setup.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&family=Geist:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="min-h-screen antialiased selection:bg-[#15130F] selection:text-[#F6F0E4]">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js').catch(err => {
                    console.log('SW registration error:', err);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
