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
 *
 * ⚠️  SEO FIX (April 2026):
 * Removed '/_next/' from ALL Disallow lists.
 * Next.js serves CSS, JS, and image assets from /_next/static/ and /_next/image/.
 * Blocking '/_next/' prevents Googlebot from loading these assets, which caused
 * 838 pages to be "Crawled – currently not indexed" because Google could not
 * properly render the page content.
 * Google explicitly requires JS/CSS to be crawlable for proper rendering.
 * Ref: https://developers.google.com/search/docs/crawling-indexing/robots/intro
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
        allow: [
          '/',
          '/_next/static/',  // CSS, JS bundles — MUST be crawlable
          '/_next/image/',   // Optimized images — MUST be crawlable
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/cms/',
          '/*.json$',
          '/search?*',       // Avoid indexing search result pages
          '/blog/search',    // BLG-038: blog search results — noindex'd; save crawl budget
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
        allow: [
          '/',
          '/_next/static/',
          '/_next/image/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/cms/',
          '/blog/search',    // BLG-038: blog search results — noindex'd; save crawl budget
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
          '/cms/',
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
        allow: [
          '/',
          '/_next/static/',
          '/_next/image/',
        ],
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/cms/',
          '/blog/search',    // BLG-038: blog search results — noindex'd; save crawl budget
        ],
      },
    ],

    // ========================================
    // SITEMAP LOCATION
    // ========================================
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
