import { MetadataRoute } from 'next';

/**
 * Robots.txt configuration for CDPL
 * Next.js 15 App Router format
 * 
 * Optimized for:
 * - Traditional search engines (Google, Bing, Yahoo)
 * - AI crawlers (GPTBot, Claude-Web, Google-Extended)
 * - Social media bots (Facebook, Twitter, LinkedIn)
 * - Generative Engine Optimization (GEO)
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cinutedigital.com';

  return {
    rules: [
      // ========================================
      // RULE 1: Traditional Search Engine Bots
      // ========================================
      {
        userAgent: [
          'Googlebot',
          'Googlebot-Image',
          'Googlebot-Video',
          'Googlebot-News',
          'Bingbot',
          'Slurp',        // Yahoo
          'DuckDuckBot',  // DuckDuckGo
          'Baiduspider',  // Baidu
          'YandexBot',    // Yandex
        ],
        allow: ['/', '/_next/static/', '/_next/image*'],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/*.json$',
          '/search?*',  // Avoid indexing search result pages
        ],
        crawlDelay: 0,
      },

      // ========================================
      // RULE 2: AI Crawlers & LLM Bots
      // ========================================
      {
        userAgent: [
          'GPTBot',           // ChatGPT
          'ChatGPT-User',     // ChatGPT User Agent
          'Claude-Web',       // Anthropic Claude
          'ClaudeBot',        // Anthropic Claude
          'Google-Extended',  // Google Bard/Gemini
          'Omgilibot',        // Omgili (AI training)
          'FacebookBot',      // Meta AI
          'Applebot-Extended', // Apple Intelligence
          'anthropic-ai',     // Anthropic AI
          'PerplexityBot',    // Perplexity AI
          'YouBot',           // You.com AI
        ],
        allow: ['/', '/_next/static/', '/_next/image*'],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },

      // ========================================
      // RULE 3: Social Media Crawlers
      // ========================================
      {
        userAgent: [
          'facebookexternalhit',
          'Twitterbot',
          'LinkedInBot',
          'WhatsApp',
          'TelegramBot',
          'Slackbot',
          'Discordbot',
        ],
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },

      // ========================================
      // RULE 4: Block Bad Bots & Scrapers
      // ========================================
      {
        userAgent: [
          'MJ12bot',
          'DotBot',
          'BLEXBot',
          'DataForSeoBot',
          'PetalBot',
        ],
        disallow: '/',
      },

      // ========================================
      // RULE 5: Default for All Other Bots
      // ========================================
      {
        userAgent: '*',
        allow: ['/', '/_next/static/', '/_next/image*'],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
    ],

    // ========================================
    // SITEMAP LOCATION
    // ========================================
    sitemap: `${siteUrl}/sitemap.xml`,

  };
}
