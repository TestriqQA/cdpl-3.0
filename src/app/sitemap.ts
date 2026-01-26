import { MetadataRoute } from 'next';
import { courseData } from '@/types/courseData';
import { pastEvents } from '@/data/eventsData';
import { trainingServices } from '@/data/servicesData';
import { client } from '@/sanity/client';
import { POSTS_QUERY, CATEGORIES_QUERY, AUTHORS_QUERY } from '@/sanity/lib/queries';
import { SanityPost, SanityCategory, SanityAuthor } from '@/sanity/types';

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
 * - Last modified timestamps
 * - Multi-language support ready
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cinutedigital.com';
  const currentDate = new Date().toISOString();

  // Fetch dynamic data from Sanity
  const [posts, categories, authors] = await Promise.all([
    client.fetch<SanityPost[]>(POSTS_QUERY),
    client.fetch<SanityCategory[]>(CATEGORIES_QUERY),
    client.fetch<SanityAuthor[]>(AUTHORS_QUERY)
  ]);

  // ========================================
  // STATIC PAGES
  // ========================================
  const staticPages: MetadataRoute.Sitemap = [
    // Home Page - Highest Priority
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // Main Pages - High Priority
    {
      url: `${siteUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/courses`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/mentors`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/our-team`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/reviews`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/locations-we-serve`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Services Pages
    {
      url: `${siteUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Events Pages

    {
      url: `${siteUrl}/events`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Jobs & Careers Pages
    {
      url: `${siteUrl}/jobs/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/jobs/job-openings`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/jobs/live-jobs`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/jobs/placements`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Blog Pages
    {
      url: `${siteUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog/all-posts`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/blog/categories`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },

    // Program Pages
    {
      url: `${siteUrl}/cdpl-affiliate-program`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/cdpl-certificate-validation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },

    // Legal Pages - Lower Priority
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/cookies-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/cancellation-refund-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // ========================================
  // COURSE PAGES - High Priority
  // ========================================
  const coursePages: MetadataRoute.Sitemap = [
    // Software Testing Courses
    'manual-testing-course',
    'automation-testing-course',
    'advance-manual-automation-testing',
    'advance-software-testing',
    'api-testing',
    'etl-testing',

    // Data & Analytics Courses
    'data-science-course',
    'data-analytics',
    'data-analytics-and-visualization',
    'data-analytics-python',
    'data-analytics-with-tableau',
    'data-visualization-in-r-programming',
    'dbms-course',
    'masters-in-data-engineering',
    'power-bi-course',

    // AI & ML Courses
    'ai-course',
    'ai-bootcamp',
    'ai-in-digital-marketing',
    'machine-learning-course',
    'machine-learning-using-python',
    'generative-ai-course',
    'prompt-engineering-course',

    // Programming Courses
    'python-course',
    'java-course',

    // Digital Marketing
    'digital-marketing-course',

    // Category & Certification Pages
    'aaa-certification',
    'actd-certification',
    'artificial-intelligence-courses',
    'bi-courses',
    'digital-marketing-courses',
    'ds-ml-courses',
    'software-testing-course',

  ].map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // ========================================
  // DYNAMIC PAGES
  // ========================================

  // 1. City-Course Pages (e.g., /software-testing-course-in-mumbai)
  // Generate from actual courseData to ensure only real pages are in sitemap
  const cityCoursePages: MetadataRoute.Sitemap = Object.values(courseData).map((course) => ({
    url: `${siteUrl}/${course.slug.toLowerCase()}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Helper to safely parse dates (handles ranges like "01-01-2025 to 08-02-2025")
  const parseDate = (dateStr: string | undefined): Date => {
    if (!dateStr) return new Date();

    // Handle ranges: take the first date
    const cleanDate = dateStr.split(' to ')[0].trim();

    // Try parsing
    const date = new Date(cleanDate);

    // Check if valid
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date found in sitemap generation: ${dateStr}`);
      return new Date(); // Fallback to current date
    }

    return date;
  };

  // 2. Events Pages (e.g., /events/ai-conference-nagindas-khandwala)
  const eventPages: MetadataRoute.Sitemap = pastEvents.map((event) => ({
    url: `${siteUrl}/events/${event.slug}`,
    lastModified: event.lastModified ? parseDate(event.lastModified) : parseDate(event.date),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // 3. Services Pages (e.g., /services/expert-talks)
  const servicePages: MetadataRoute.Sitemap = trainingServices.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 4. Individual Blog Posts (e.g., /blog/what-is-data-science)
  const blogPostPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.publishDate || currentDate, // Sanity should provide _updatedAt as well if we query it, but publishDate is good
    changeFrequency: 'daily',
    priority: 0.7,
  }));

  // 5. Blog Category Pages (e.g., /blog/category/data-science)
  const blogCategoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${siteUrl}/blog/category/${category.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // 6. Blog Author Pages (e.g., /blog/author/shoeb-shaikh)
  const blogAuthorPages: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${siteUrl}/blog/author/${author.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
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
