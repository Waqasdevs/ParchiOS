import React from 'react';

export default function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://parchios.vercel.app/#organization',
        name: 'ParchiOS Pakistan',
        url: 'https://parchios.vercel.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://parchios.vercel.app/icon-512.png',
          width: 512,
          height: 512,
        },
        description:
          'Offline-first restaurant operating system and 5-second digital parchi POS system built for Pakistani fast-food, cafes, and cloud kitchens.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'PK',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+92-345-4159835',
          contactType: 'sales and customer support',
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
        sameAs: ['https://wa.me/923454159835'],
      },
      {
        '@type': ['SoftwareApplication', 'WebApplication'],
        '@id': 'https://parchios.vercel.app/#software',
        name: 'ParchiOS',
        alternateName: ['Parchi OS', 'ParchiOS Restaurant Management System'],
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Windows, macOS, Android, iOS, ChromeOS',
        url: 'https://parchios.vercel.app',
        image: 'https://parchios.vercel.app/og-image.png',
        description:
          '5-second digital parchi POS system and kitchen order ticketing (KOT) designed for Pakistani fast-food, cafes, and cloud kitchens. Zero monthly commission, works 100% offline, tracks daily drawer cash, and runs on any device.',
        offers: {
          '@type': 'Offer',
          price: '45000',
          priceCurrency: 'PKR',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          seller: {
            '@id': 'https://parchios.vercel.app/#organization',
          },
          description:
            'Complete Restaurant Setup with 24-hour turnaround, custom menu upload, staff training, and zero monthly commission.',
        },
        featureList: [
          '5-Second Fast-Food Counter Screen',
          'Instant Kitchen Order Tickets (KOT) Printing',
          'Owner Live Phone Sales Dashboard',
          'Offline-First Local Database (Dexie IndexedDB)',
          '80mm Thermal Receipt Printing (Black Copper, Xprinter, SpeedX, Epson)',
          'Zero Monthly Commission Per Order',
          'Works on Any Device (Old Laptop, Tablet, Counter PC, Android Phone)',
          'Custom Branded Restaurant Setup within 24 Hours',
          'Manager PIN Security for Voids and Cash Discrepancies',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '1',
          bestRating: '5',
          worstRating: '1',
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Haseeb & Team',
              jobTitle: 'Owner & Operator, Haseeb Food Cafe (HFC)',
            },
            datePublished: '2026-11-10',
            reviewBody:
              'Before ParchiOS, our counter staff used manual register books during peak rush hours, leading to missed orders and 45 minutes of daily calculation at night. ParchiOS put our entire menu, kitchen slips, and daily sales report on autopilot in 24 hours.',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5',
            },
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://parchios.vercel.app/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do I need to buy an expensive 150,000 PKR touchscreen POS machine?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. ParchiOS runs inside Chrome or Edge on any computer, laptop, Android tablet, iPad, or mobile phone you already own. It connects directly with standard 80mm thermal receipt printers like Black Copper, Xprinter, SpeedX, and Epson.',
            },
          },
          {
            '@type': 'Question',
            name: 'What happens if PTCL internet or mobile 4G disconnects during Friday rush?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ParchiOS is built offline-first. Your counter screen never freezes. You keep punching orders, printing kitchen KOT slips, and settling bills without zero-point cloud delay. Everything syncs automatically once your internet returns.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is 45,000 PKR really a one-time fee, or are there hidden monthly charges?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'It is 100% one-time setup. There are zero per-order commissions and zero recurring monthly software fees. You own your system, menus, and customer database forever.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do you upload our restaurant menu and deals?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You do not have to type anything yourself. Just take clear photos of your paper menu or WhatsApp us your menu PDF. Our team formats and uploads every single deal, add-on, and price within 24 hours.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can our cashier delete orders or tamper with drawer cash?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Cashier staff can only punch and settle bills. Any item void, order deletion, or discount requires an authorized Manager PIN and leaves an unalterable timestamped audit trail in the daily closing report.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does staff training work if our counter boy is not technical?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The counter screen is designed with large item tiles and numbers (#1 for Zinger, #14 for Karahi) so anyone can learn it in 10 minutes. We also provide direct 1-on-1 WhatsApp voice note and video support until your team feels 100% confident.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://parchios.vercel.app/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://parchios.vercel.app',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Live Demo POS Sandbox',
            item: 'https://parchios.vercel.app/demo',
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
