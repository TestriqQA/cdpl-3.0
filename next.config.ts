import type { NextConfig } from "next";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // BLG-020: removed serverExternalPackages: ['@prisma/client'] — Prisma is
  // not used anywhere in the codebase.
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  reactStrictMode: true,

  transpilePackages: ['next-sanity', 'sanity', '@sanity/vision', '@sanity/code-input'],
  // Performance optimizations
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'react-icons',
      '@headlessui/react',
      'lucide-react',
    ],
    optimizeCss: false, // Disabled: incompatible with Tailwind v4 (causes build error)
    optimizeServerReact: true,
  },

  // Fix: Tailwind v4 generates CSS with data URIs that contain '&' characters.
  // We opt into Turbopack for handling this.
  turbopack: {},

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // React compiler optimizations
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },



  // Tree-shaking optimizations
  // modularizeImports removed in favor of optimizePackageImports in experimental

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    // BLG-091: 24h (was 60s). A 60s TTL forced the Next image
    // optimizer to re-process images constantly; site imagery is
    // effectively static, so a long TTL cuts function invocations.
    minimumCacheTTL: 86400,
    qualities: [40, 50, 60, 75, 90],
    deviceSizes: [320, 360, 390, 414, 480, 640, 750, 828, 1080, 1200, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 346, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // BLG-201 (May 2026): all permanent redirects use `statusCode: 301` instead
  // of `permanent: true`. Next.js translates `permanent: true` to HTTP 308
  // (method-preserving) but for HTML page redirects the historical SEO
  // standard is 301 — wider crawler / social-unfurler compatibility. Google
  // honours both equivalently, but 301 is the lower-risk choice. Do NOT
  // convert these back to `permanent: true` without a real reason.
  async redirects() {
    return [
      // BLG-035: legacy ?jobId= URLs redirect to the new clean /[jobId] path.
      {
        source: '/jobs/live-jobs',
        has: [
          { type: 'query', key: 'jobId', value: '(?<jobId>.+)' },
        ],
        destination: '/jobs/live-jobs/:jobId',
        statusCode: 301,
      },
      {
        source: '/software-testing-course',
        destination: '/courses/software-testing-course',
        statusCode: 301,
      },
      {
        source: '/manual-testing-course',
        destination: '/courses/software-testing-course/manual-testing-course',
        statusCode: 301,
      },
      {
        source: '/automation-testing-course',
        destination: '/courses/software-testing-course/automation-testing-course',
        statusCode: 301,
      },
      {
        source: '/api-testing',
        destination: '/courses/software-testing-course/api-testing',
        statusCode: 301,
      },
      {
        source: '/etl-testing',
        destination: '/courses/software-testing-course/etl-testing',
        statusCode: 301,
      },
      {
        source: '/dbms-course',
        destination: '/courses/software-testing-course/dbms-course',
        statusCode: 301,
      },
      {
        source: '/advance-software-testing',
        destination: '/courses/software-testing-course/advance-software-testing',
        statusCode: 301,
      },
      {
        source: '/java-course',
        destination: '/courses/software-testing-course/java-course',
        statusCode: 301,
      },
      {
        source: '/advance-manual-automation-testing',
        destination: '/courses/software-testing-course/advance-manual-automation-testing',
        statusCode: 301,
      },
      {
        source: '/python-course',
        destination: '/courses/software-testing-course/python-course',
        statusCode: 301,
      },
      {
        source: '/ds-ml-courses',
        destination: '/courses/ds-ml-courses',
        statusCode: 301,
      },
      {
        source: '/machine-learning-course',
        destination: '/courses/ds-ml-courses/machine-learning-course',
        statusCode: 301,
      },
      {
        source: '/generative-ai-course',
        destination: '/courses/ds-ml-courses/generative-ai-course',
        statusCode: 301,
      },
      {
        source: '/data-science-course',
        destination: '/courses/ds-ml-courses/data-science-course',
        statusCode: 301,
      },
      {
        source: '/ai-course',
        destination: '/courses/ds-ml-courses/ai-course',
        statusCode: 301,
      },
      {
        source: '/machine-learning-using-python',
        destination: '/courses/ds-ml-courses/machine-learning-using-python',
        statusCode: 301,
      },
      {
        source: '/data-visualization-in-r-programming',
        destination: '/courses/ds-ml-courses/data-visualization-in-r-programming',
        statusCode: 301,
      },
      {
        source: '/bi-courses',
        destination: '/courses/bi-courses',
        statusCode: 301,
      },
      {
        source: '/data-analytics',
        destination: '/courses/bi-courses/data-analytics',
        statusCode: 301,
      },
      {
        source: '/data-analytics-python',
        destination: '/courses/bi-courses/data-analytics-python',
        statusCode: 301,
      },
      {
        source: '/data-analytics-and-visualization',
        destination: '/courses/bi-courses/data-analytics-and-visualization',
        statusCode: 301,
      },
      {
        source: '/data-analytics-with-tableau',
        destination: '/courses/bi-courses/data-analytics-with-tableau',
        statusCode: 301,
      },
      {
        source: '/power-bi-course',
        destination: '/courses/bi-courses/power-bi-course',
        statusCode: 301,
      },
      {
        source: '/masters-in-data-engineering',
        destination: '/courses/bi-courses/masters-in-data-engineering',
        statusCode: 301,
      },
      {
        source: '/artificial-intelligence-courses',
        destination: '/courses/artificial-intelligence-courses',
        statusCode: 301,
      },
      {
        source: '/prompt-engineering-course',
        destination: '/courses/artificial-intelligence-courses/prompt-engineering-course',
        statusCode: 301,
      },
      {
        source: '/digital-marketing-courses',
        destination: '/courses/digital-marketing-courses',
        statusCode: 301,
      },
      {
        source: '/digital-marketing-course',
        destination: '/courses/digital-marketing-courses/digital-marketing-course',
        statusCode: 301,
      },
      {
        source: '/ai-in-digital-marketing',
        destination: '/courses/digital-marketing-courses/ai-in-digital-marketing',
        statusCode: 301,
      },
      {
        source: '/ai-bootcamp',
        destination: '/courses/digital-marketing-courses/ai-bootcamp',
        statusCode: 301,
      },
      {
        source: '/index.html',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/email-marketing',
        destination: '/courses/digital-marketing-courses',
        statusCode: 301,
      },
      {
        source: '/actd-certification-training',
        destination: '/actd-certification',
        statusCode: 301,
      },
      // ⚠️  SEO FIX (April 2026): Collapsed two-hop redirect chains.
      // Old: /events/old-slug → /events/past-events → /events (2 hops = crawl budget waste)
      // New: /events/old-slug → /events (1 hop = correct)
      {
        source: '/events/software-testing-workshop-bangalore',
        destination: '/events',
        statusCode: 301,
      },
      {
        source: '/events/faculty-development-mumbai-university',
        destination: '/events',
        statusCode: 301,
      },
      {
        source: '/events/fullstack-workshop-infosys-pune',
        destination: '/events',
        statusCode: 301,
      },
      {
        source: '/events/data-science-bootcamp-iit-delhi',
        destination: '/events',
        statusCode: 301,
      },
      {
        source: '/events/industrial-visit-tata-motors',
        destination: '/events',
        statusCode: 301,
      },
      // NOTE: /events/past-events chain removed — individual slugs now redirect directly to /events
      {
        source: '/authors/:slug',
        destination: '/blog/author/:slug',
        statusCode: 301,
      },
      {
        source: '/blog/category/ai-ml',
        destination: '/blog/category/artificial-intelligence',
        statusCode: 301,
      },
      {
        source: '/blog/how-prompt-engineering-can-automate-test-case-generation',
        destination: '/blog/category/software-testing',
        statusCode: 301,
      },
      {
        source: '/events/sttp-iot-applications',
        destination: '/events',
        statusCode: 301,
      },
      {
        source: '/events/train-the-trainer-program-corporate',
        destination: '/events',
        statusCode: 301,
      },
      {
        source: '/events/ai-conference-nagindas-khandwala',
        destination: '/events',
        statusCode: 301,
      },
      {
        source: '/events/6-days-workshop-on-machine-learning-with-hands-on-training-on-industry-projects-2',
        destination: '/events',
        statusCode: 301,
      },
      {
        source: '/manual-qa',
        destination: '/courses/software-testing-course/manual-testing-course',
        statusCode: 301,
      },
      {
        source: '/java-programming',
        destination: '/courses/software-testing-course/java-course',
        statusCode: 301,
      },
      {
        source: '/software-testing-courses',
        destination: '/courses/software-testing-course',
        statusCode: 301,
      },
      {
        source: '/data-science-courses',
        destination: '/courses/ds-ml-courses/data-science-course',
        statusCode: 301,
      },
      {
        source: '/business-intelligence-courses',
        destination: '/courses/bi-courses',
        statusCode: 301,
      },
      // ⚠️  SEO FIX (April 2026): Redirect old plural DM city slugs to canonical singular form.
      // 38 city pages previously used "courses-in" (plural); now standardized to "course-in" (singular).
      {
        source: '/digital-marketing-courses-in-:city',
        destination: '/digital-marketing-course-in-:city',
        statusCode: 301,
      },
      // BLG-200 (May 2026): Web-Development followed the OPPOSITE convention —
      // 34 city pages used "courses-in" (plural) while the other 5 course
      // families used "course-in" (singular). courseData.ts + citiesData.ts
      // have been normalised to singular; this redirect short-circuits any
      // remaining inbound links / cached SERP results at the edge with a 308
      // (was a 307 from the page-handler fallback — Google wouldn't transfer
      // SEO weight across a 307).
      {
        source: '/web-development-courses-in-:city',
        destination: '/web-development-course-in-:city',
        statusCode: 301,
      },
    ];
  },

  /**
   * ⚠️  SEO FIX (April 2026):
   * Prevent Google from indexing internal Next.js asset files.
   * Googlebot discovers these via <script> and <link> tags in the HTML,
   * then attempts to index them as pages. They show up in GSC as
   * "Crawled – currently not indexed", wasting crawl budget.
   *
   * We keep them CRAWLABLE (robots.txt allows /_next/static/) so Googlebot
   * can still fetch JS/CSS for rendering, but we tell it NOT to index them.
   */
  async headers() {
    return [
      // ⚠️  SEO FIX (April 2026): Blanket noindex for ALL Next.js static assets.
      // Previously only covered /_next/static/chunks/. Expanded to catch CSS,
      // media, fonts, and webpack assets that Googlebot also discovers via
      // <link> and <script> tags, wasting crawl budget as
      // "Crawled – currently not indexed" entries in GSC.
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      {
        source: '/_next/data/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      // Defense-in-depth: noindex the CMS admin route.
      // Already disallowed in robots.txt, but this header ensures
      // it's not indexed even if discovered through internal links.
      {
        source: '/cms/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      // Mock-test dynamic pages are CSR-only ("use client" + useEffect).
      // Googlebot cannot render them — it sees an empty spinner.
      // The landing page /mock-test (no slug) is SSR and remains indexable.
      {
        source: '/mock-test/:courseSlug*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
      // BLG-040: brochure / syllabus PDFs under /downloads/ are indexable by
      // default and compete with the real HTML course pages in search.
      // noindex them so the course pages rank instead (links still followed).
      {
        source: '/downloads/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      // ⚠️  SEO FIX (April 2026): Standard security headers for all pages.
      // BLG-013 (Cycle 2 Sprint 1): added Strict-Transport-Security and
      // Permissions-Policy. Content-Security-Policy is intentionally NOT
      // added here — a wrong CSP white-screens production (GA, Meta Pixel,
      // GTM, YouTube embeds, Leaflet tiles and Next.js itself each need
      // explicit allowances). CSP should ship separately as
      // Content-Security-Policy-Report-Only first, tuned from real
      // violation reports, then promoted to enforcing.
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            // 2 years, includeSubDomains + preload. Site is 100% HTTPS
            // (confirmed via GSC: 128/128 HTTPS URLs, 0 non-HTTPS).
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            // Deny powerful features the site does not use.
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);