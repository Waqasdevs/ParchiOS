import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Claude-Web',
          'Google-Extended',
          'Applebot',
          'Applebot-Extended',
          'Bingbot',
          'Amazonbot',
          'cohere-ai',
          'meta-externalagent',
        ],
        allow: ['/', '/demo', '/pos', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://parchios.vercel.app/sitemap.xml',
    host: 'https://parchios.vercel.app',
  };
}
