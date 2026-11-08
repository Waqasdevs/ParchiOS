import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#010102',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://parchios.vercel.app'),
  title: 'parchiOS — High-Performance Offline-First Restaurant OS for Pakistan',
  description:
    'The offline-first restaurant operating system built for Pakistani kitchens. Instant 80mm thermal KOT printing, touch Kitchen Display Screens, table floor plans, and 0% commission direct delivery even when internet cuts out.',
  keywords: [
    'restaurant POS Pakistan',
    'parchi OS',
    'offline POS Lahore Karachi Islamabad',
    '80mm thermal KOT printer software',
    'kitchen display system Pakistan',
    'zero commission delivery restaurant system',
    'Pakistani restaurant software',
    'FBR PRA SRB restaurant billing software',
  ],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'parchiOS — High-Performance Offline-First Restaurant OS for Pakistan',
    description:
      'Zero cloud delay during Friday rush. 80mm thermal KOT slips, touch KDS, rapid item numbering, and 0% commission direct delivery built for Pakistani restaurants.',
    url: 'https://parchios.vercel.app',
    siteName: 'parchiOS Pakistan',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'parchiOS — High-Performance Offline-First Restaurant OS for Pakistan',
      },
    ],
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'parchiOS — High-Performance Offline-First Restaurant OS for Pakistan',
    description:
      '80mm thermal KOT printing, touch KDS, and zero-commission delivery management built for Pakistani kitchens.',
    images: ['/og-image.png'],
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
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&family=Geist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased selection:bg-[#AD96F1] selection:text-[#010102]">
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
