import { MetadataRoute } from 'next';
import { unstable_cache } from 'next/cache';
import { courseData } from '@/types/courseData';
import { pastEvents } from '@/data/eventsData';
import { getServices } from '@/lib/services';
import { client } from '@/sanity/client';
import { POSTS_QUERY, CATEGORIES_QUERY, AUTHORS_QUERY } from '@/sanity/lib/queries';
import { SanityPost, SanityCategory, SanityAuthor } from '@/sanity/types';

/**
 * BLG-021: cache the sitemap's Sanity fetches.
 *
 * Previously every sitemap.xml request ran three live GROQ queries.
 * unstable_cache memoises them for an hour; the cache `tags` let a future
 * Sanity publish webhook (BLG-146) invalidate the sitemap on demand.
 */
const getSitemapSanityData = unstable_cache(
  async () => {
    const [posts, categories, authors] = await Promise.all([
      client.fetch<SanityPost[]>(POSTS_QUERY),
      client.fetch<SanityCategory[]>(CATEGORIES_QUERY),
      client.fetch<SanityAuthor[]>(AUTHORS_QUERY),
    ]);
    return { posts, categories, authors };
  },
  ['sitemap-sanity-data'],
  { revalidate: 3600, tags: ['sitemap', 'posts', 'categories', 'authors'] },
);

/**
 * Dynamic XML Sitemap for CDPL
 * Next.js 15 App Router format
 *
 * Optimized for:
 * - Search engines (Google, Bing, Yahoo)
 * - AI crawlers (GPTBot, Claude, Gemini)
 * - Generative Engine Optimization (GEO)
 *
 * Features:
 * - Dynamic URL generation
 * - Priority and change frequency optimization
 * - Accurate last modified timestamps (SEO FIX April 2026)
 * - Multi-language support ready
 *
 * ⚠️  SEO FIX (April 2026):
 * Changed ALL static page lastModified from `new Date().toISOString()` to
 * real hardcoded dates. Using today's date on every page, every build,
 * destroys Google's ability to prioritise recrawls and signals the entire
 * site "changed today" — which kills crawl budget and trust.
 * Only truly dynamic content (blog posts, jobs) should use current date.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cinutedigital.com';

  // ========================================
  // REAL LAST-MODIFIED DATES
  // Update these when you make meaningful content changes to their respective pages.
  // Do NOT set to today's date unless content genuinely changed today.
  // ========================================
  const DATES = {
    // Core infrastructure — changes rarely
    HOME:               '2026-04-01T00:00:00.000Z',
    ABOUT_US:           '2026-03-15T00:00:00.000Z',
    CONTACT:            '2026-02-01T00:00:00.000Z',
    MENTORS:            '2026-03-10T00:00:00.000Z',
    OUR_TEAM:           '2026-03-10T00:00:00.000Z',
    REVIEWS:            '2026-04-01T00:00:00.000Z',
    LOCATIONS:          '2026-02-15T00:00:00.000Z',
    // Course pages — last major curriculum update
    COURSES_INDEX:      '2026-03-20T00:00:00.000Z',
    COURSES_SOFTWARE:   '2026-03-20T00:00:00.000Z',
    COURSES_DS_ML:      '2026-03-20T00:00:00.000Z',
    COURSES_BI:         '2026-03-20T00:00:00.000Z',
    COURSES_AI:         '2026-03-20T00:00:00.000Z',
    COURSES_DM:         '2026-03-20T00:00:00.000Z',
    COURSE_DETAIL:      '2026-03-20T00:00:00.000Z',
    CITY_COURSE:        '2026-03-25T00:00:00.000Z',
    // Services — last update
    SERVICES:           '2026-03-01T00:00:00.000Z',
    // Events
    EVENTS:             '2026-04-10T00:00:00.000Z',
    // Jobs
    JOBS_LIVE:          '2026-04-14T00:00:00.000Z',  // Changes frequently
    JOBS_CAREERS:       '2026-03-01T00:00:00.000Z',
    JOBS_OPENINGS:      '2026-04-14T00:00:00.000Z',
    JOBS_PLACEMENTS:    '2026-04-01T00:00:00.000Z',
    // Blog index
    BLOG_INDEX:         '2026-04-14T00:00:00.000Z',  // Changes with every new post
    BLOG_ALL_POSTS:     '2026-04-14T00:00:00.000Z',
    BLOG_CATEGORIES:    '2026-04-14T00:00:00.000Z',
    // Program pages
    AFFILIATE:          '2026-01-15T00:00:00.000Z',
    CERT_VALIDATION:    '2026-01-15T00:00:00.000Z',
    AAA_CERT:           '2026-02-01T00:00:00.000Z',
    ACTD_CERT:          '2026-02-01T00:00:00.000Z',
    // Legal — virtually never changes
    LEGAL:              '2025-11-01T00:00:00.000Z',
  };

  // Fetch dynamic data from Sanity (cached — see getSitemapSanityData / BLG-021)
  const { posts, categories, authors } = await getSitemapSanityData();

  // ========================================
  // STATIC PAGES
  // ========================================
  const staticPages: MetadataRoute.Sitemap = [
    // Home Page - Highest Priority
    {
      url: siteUrl,
      lastModified: DATES.HOME,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Main Pages - High Priority
    {
      url: `${siteUrl}/about-us`,
      lastModified: DATES.ABOUT_US,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/courses`,
      lastModified: DATES.COURSES_INDEX,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified: DATES.CONTACT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/mentors`,
      lastModified: DATES.MENTORS,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/our-team`,
      lastModified: DATES.OUR_TEAM,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/reviews`,
      lastModified: DATES.REVIEWS,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/locations-we-serve`,
      lastModified: DATES.LOCATIONS,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Services Pages
    {
      url: `${siteUrl}/services`,
      lastModified: DATES.SERVICES,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Events Pages
    {
      url: `${siteUrl}/events`,
      lastModified: DATES.EVENTS,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Jobs & Careers Pages
    {
      url: `${siteUrl}/jobs/careers`,
      lastModified: DATES.JOBS_CAREERS,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/jobs/job-openings`,
      lastModified: DATES.JOBS_OPENINGS,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/jobs/live-jobs`,
      lastModified: DATES.JOBS_LIVE,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/jobs/placements`,
      lastModified: DATES.JOBS_PLACEMENTS,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Blog Pages
    {
      url: `${siteUrl}/blog`,
      lastModified: DATES.BLOG_INDEX,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/all-posts`,
      lastModified: DATES.BLOG_ALL_POSTS,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/blog/categories`,
      lastModified: DATES.BLOG_CATEGORIES,
      changeFrequency: 'weekly',
      priority: 0.6,
    },

    // Program Pages
    {
      url: `${siteUrl}/cdpl-affiliate-program`,
      lastModified: DATES.AFFILIATE,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/cdpl-certificate-validation`,
      lastModified: DATES.CERT_VALIDATION,
      changeFrequency: 'monthly',
      priority: 0.5,
    },

    // Certification Pages
    {
      url: `${siteUrl}/aaa-certification`,
      lastModified: DATES.AAA_CERT,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/actd-certification`,
      lastModified: DATES.ACTD_CERT,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Assessment & Registration Pages
    {
      url: `${siteUrl}/mock-test`,
      lastModified: DATES.COURSES_INDEX,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/istqb-registration`,
      lastModified: DATES.AAA_CERT,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Legal Pages - Lower Priority
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: DATES.LEGAL,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-of-service`,
      lastModified: DATES.LEGAL,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/cookies-policy`,
      lastModified: DATES.LEGAL,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/cancellation-refund-policy`,
      lastModified: DATES.LEGAL,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // ========================================
  // COURSE PAGES - High Priority
  // ========================================
  const coursePages: MetadataRoute.Sitemap = [
    // Software Testing Courses
    'courses/software-testing-course',
    'courses/software-testing-course/manual-testing-course',
    'courses/software-testing-course/automation-testing-course',
    'courses/software-testing-course/advance-manual-automation-testing',
    'courses/software-testing-course/advance-software-testing',
    'courses/software-testing-course/api-testing',
    'courses/software-testing-course/etl-testing',
    'courses/software-testing-course/dbms-course',
    'courses/software-testing-course/python-course',
    'courses/software-testing-course/java-course',

    // DS & ML Courses
    'courses/ds-ml-courses',
    'courses/ds-ml-courses/data-science-course',
    'courses/ds-ml-courses/machine-learning-course',
    'courses/ds-ml-courses/machine-learning-using-python',
    'courses/ds-ml-courses/generative-ai-course',
    'courses/ds-ml-courses/ai-course',
    'courses/ds-ml-courses/data-visualization-in-r-programming',

    // BI Courses
    'courses/bi-courses',
    'courses/bi-courses/data-analytics',
    'courses/bi-courses/data-analytics-and-visualization',
    'courses/bi-courses/data-analytics-python',
    'courses/bi-courses/data-analytics-with-tableau',
    'courses/bi-courses/power-bi-course',
    'courses/bi-courses/masters-in-data-engineering',

    // AI Courses
    'courses/artificial-intelligence-courses',
    'courses/artificial-intelligence-courses/prompt-engineering-course',

    // Digital Marketing
    'courses/digital-marketing-courses',
    'courses/digital-marketing-courses/digital-marketing-course',
    'courses/digital-marketing-courses/ai-in-digital-marketing',
    'courses/digital-marketing-courses/ai-bootcamp',

  ].map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified: DATES.COURSE_DETAIL,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // ========================================
  // DYNAMIC PAGES
  // ========================================

  // Helper to safely parse dates (handles ranges like "01-01-2025 to 08-02-2025")
  const parseDate = (dateStr: string | undefined): Date => {
    if (!dateStr) return new Date(DATES.EVENTS);

    // Handle ranges: take the first date
    const cleanDate = dateStr.split(' to ')[0].trim();

    // Try parsing
    const date = new Date(cleanDate);

    // Check if valid
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date found in sitemap generation: ${dateStr}`);
      return new Date(DATES.EVENTS);
    }

    return date;
  };

  // 1. City-Course Pages (e.g., /software-testing-course-in-mumbai)
  // Generate from actual courseData to ensure only real pages are in sitemap
  // ⚠️  SEO FIX (April 2026): Boosted priority from 0.6 → 0.8 and frequency
  // from monthly → weekly. These 765+ city-course pages are the primary
  // money pages and need urgent indexing. Lower priority was causing Googlebot
  // to deprioritize them in favor of less important pages.
  const cityCoursePages: MetadataRoute.Sitemap = Object.values(courseData).map((course) => ({
    url: `${siteUrl}/${course.slug.toLowerCase()}`,
    lastModified: DATES.CITY_COURSE,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 2. Events Pages (e.g., /events/ai-conference-nagindas-khandwala)
  const eventPages: MetadataRoute.Sitemap = pastEvents.map((event) => ({
    url: `${siteUrl}/events/${event.slug}`,
    lastModified: event.lastModified ? parseDate(event.lastModified) : parseDate(event.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 3. Services Pages (e.g., /services/expert-talks)
  // BLG-133 follow-up: services come from Sanity (with the local
  // trainingServices array as fallback inside getServices()).
  const services = await getServices();
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: DATES.SERVICES,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 4. Individual Blog Posts (e.g., /blog/what-is-data-science)
  // Use _updatedAt (actual CMS edit date) when available, else fall back to publishDate.
  // This ensures Google sees the TRUE last-modification date per post.
  const blogPostPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post._updatedAt || post.publishDate || DATES.BLOG_INDEX,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 5. Blog Category Pages (e.g., /blog/category/data-science)
  const blogCategoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${siteUrl}/blog/category/${category.slug}`,
    lastModified: DATES.BLOG_CATEGORIES,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // 6. Blog Author Pages (e.g., /blog/author/shoeb-shaikh)
  const blogAuthorPages: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${siteUrl}/blog/author/${author.slug}`,
    lastModified: DATES.BLOG_INDEX,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));


  // ========================================
  // COMBINE ALL PAGES
  // ========================================
  return [
    ...staticPages,
    ...coursePages,
    ...cityCoursePages,
    ...eventPages,
    ...servicePages,
    ...blogPostPages,
    ...blogCategoryPages,
    ...blogAuthorPages,
  ];
}
