/**
 * ============================================================================
 * COMPREHENSIVE SCHEMA GENERATORS FOR CDPL
 * ============================================================================
 *
 * This file contains all schema.org structured data generators following
 * Google's rich results guidelines and best practices for educational
 * organizations.
 *
 * @version 2.0.0
 * @updated 2025-11-12
 */

import {
  SITE_CONFIG,
  BUSINESS_INFO,
  STATISTICS,
  CERTIFICATIONS,
  FEATURED_COURSES, // Import FEATURED_COURSES for Home Page schema
  getSocialMediaUrls,
  getFullUrl,
  getImageUrl,
  getOrganizationId,
  getWebsiteId,
  SEO_DEFAULTS,
} from "./seo-config";
import { courseCategories } from "@/data/courses/catalog";
import { CAMPUS_CITY, getCityFromSlug } from "@/lib/city-tiers";
import { CONTACT_FAQS } from "@/data/faqs/contact";
import { PLACEMENTS_FAQS } from "@/data/faqs/placements";
import { CAREERS_FAQS } from "@/data/faqs/careers";

// Type definitions for schema.org structured data
type WithContext<T> = T & { "@context": string };

/**
 * Utility to convert various date strings to ISO 8601 (YYYY-MM-DD) format.
 * Handles single dates and ranges with " to ".
 */
export function formatDateToISO(dateString?: string): string {
  if (!dateString) return new Date().toISOString().split("T")[0];

  // If it's a range, take the first date
  const baseDate = dateString.split(" to ")[0].trim();

  // Handle DD-MM-YYYY
  if (/^\d{2}-\d{2}-\d{4}$/.test(baseDate)) {
    const [day, month, year] = baseDate.split("-");
    return `${year}-${month}-${day}`;
  }

  // Handle YYYY-MM-DD or similar
  try {
    const date = new Date(baseDate);
    if (!isNaN(date.getTime())) {
      return date.toISOString().split("T")[0];
    }
  } catch (e) {
    // Fallback below
  }

  return baseDate; // Return as-is if already correct or unrecognizable
}

// ============================================================================
// ORGANIZATION SCHEMA (Knowledge Graph)
// ============================================================================

/**
 * Generate comprehensive Organization schema for knowledge graph
 * This appears on all pages via root layout
 */
export function generateOrganizationSchema(): WithContext<
  Record<string, unknown>
> {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": getOrganizationId(),
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_CONFIG.url}/#logo`,
      url: getImageUrl(SITE_CONFIG.logo),
      width: SITE_CONFIG.logoWidth,
      height: SITE_CONFIG.logoHeight,
      caption: SITE_CONFIG.name,
    },
    image: {
      "@type": "ImageObject",
      url: getImageUrl(SITE_CONFIG.defaultOgImage),
      width: SITE_CONFIG.defaultOgImageWidth,
      height: SITE_CONFIG.defaultOgImageHeight,
    },
    description:
      "EdTech institute providing industry-focused training in Software Testing, Data Science, AI/ML, Business Intelligence, and Digital Marketing. ISTQB Training Partner with AAA and ACTD accreditation, placement assistance, live-project-based learning, and mentor-led cohorts.",
    slogan: SITE_CONFIG.tagline,

    // Contact Information
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,

    // Address
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },

    // Geo Location
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },

    // Contact Points
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_INFO.phone,
        contactType: "customer service",
        email: BUSINESS_INFO.email,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        // The number /contact-us publishes as the Admissions Helpline.
        telephone: BUSINESS_INFO.admissionsPhone,
        contactType: "admissions",
        email: BUSINESS_INFO.admissionsEmail,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_INFO.phone,
        contactType: "technical support",
        email: BUSINESS_INFO.supportEmail,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],

    // Social Media Profiles (Knowledge Graph)
    sameAs: getSocialMediaUrls(),

    // Founding Date
    foundingDate: BUSINESS_INFO.foundedYear,

    // BLG-064: founder entity for E-E-A-T / knowledge-graph linkage.
    // sameAs links the founder Person to a verified external profile
    // (Q5 resolved) — see docs/seo-audit/_decisions.md.
    founder: {
      "@type": "Person",
      name: "Sandeep Maske",
      jobTitle: "Founder",
      sameAs: ["https://www.linkedin.com/in/sandeepmaske/"],
    },

    // BLG-071: numberOfEmployees removed — the "50" value was never
    // verified and an inflated headcount is a trust-signal liability.

    // Opening Hours
    openingHoursSpecification: BUSINESS_INFO.openingHours.map((hours) => {
      const [day, timeRange] = hours.split(" ");
      const [opens, closes] = timeRange.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        opens,
        closes,
      };
    }),

    // Area Served
    areaServed: {
      "@type": "Country",
      name: "India",
    },

    // Credentials
    hasCredential: CERTIFICATIONS.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: cert.type,
      recognizedBy: {
        "@type": "Organization",
        name: cert.issuer,
      },
      name: cert.name,
    })),

    // BLG-080: accreditations surfaced as award (mirrors the user-approved
    // Organization description — ISTQB partner, AAA & ACTD accredited).
    award: "ISTQB Certified Training Partner; AAA & ACTD Accredited",

    // Aggregate Rating removed to avoid global self-serving review errors
  };
}
// ============================================================================
// ITEM LIST SCHEMA (Fix for Carousel/ItemList issues)
// ============================================================================

interface ItemListElement {
  name: string;
  url?: string;
  description?: string;
  type?: string;
  date?: string; // Added for Event type support
  location?: string; // Added for Event type support
  image?: string; // Added for better Rich Results
  author?: string; // Added for Review type support
  rating?: number; // Added for Review type support
  itemSchema?: Record<string, unknown>; // New optional property for full schema
}

/**
 * Trim text to `max` characters without cutting mid-word.
 *
 * Prefers the last complete sentence that fits; if the first sentence is
 * already longer than the limit, falls back to the last whole word plus an
 * ellipsis. Text shorter than the limit is returned unchanged.
 *
 * Used for structured-data answers, where a fragment ending mid-word ("…they
 * can quickly ups") is both a poor rich result and visibly broken.
 */
export function truncateAtSentence(text: string, max: number): string {
  if (!text || text.length <= max) return text;

  const window = text.slice(0, max);
  const lastSentenceEnd = Math.max(
    window.lastIndexOf(". "),
    window.lastIndexOf("! "),
    window.lastIndexOf("? "),
  );
  // Only accept a sentence break if it leaves a substantial answer behind —
  // otherwise a short opening line would swallow the whole thing.
  if (lastSentenceEnd > max * 0.5) return window.slice(0, lastSentenceEnd + 1);

  const lastSpace = window.lastIndexOf(" ");
  return (lastSpace > 0 ? window.slice(0, lastSpace) : window).trimEnd() + "…";
}

/**
 * Generate ItemList schema for a list of items (e.g., courses, blog posts)
 * This addresses the "Carousel" issues by using the standard ItemList type
 * and ensuring 'item' or 'url' is present for each ListItem.
 */
export function generateItemListSchema(
  items: ItemListElement[],
  name: string,
): WithContext<Record<string, unknown>> | undefined {
  if (items.length === 0) return undefined;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: name,
    itemListElement: items.map((item, index) => {
      const listItem: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
      };

      // Fix: Ensure 'item' or 'url' is present for a nested ListItem.
      if (item.itemSchema) {
        // Strip out aggregateRating to avoid "Multiple aggregate rating" errors in Rich Results
        const { aggregateRating, ...cleanItemSchema } = item.itemSchema as any;
        listItem.item = cleanItemSchema;
      } else if (item.url) {
        const itemType = item.type || "Thing";
        listItem.item = {
          "@type": itemType,
          name: item.name,
          url: getFullUrl(item.url),
          ...(item.description && { description: item.description }),

          // Fix: Event objects in ItemList require startDate and location for Rich Results
          ...(itemType === "Event" && {
            startDate:
              item.date === "Ongoing"
                ? new Date().toISOString().split("T")[0]
                : formatDateToISO(item.date),
            location: {
              "@type": "Place",
              name: item.location || "Online",
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS_INFO.address.streetAddress,
                addressLocality: BUSINESS_INFO.address.addressLocality,
                addressRegion: BUSINESS_INFO.address.addressRegion,
                postalCode: BUSINESS_INFO.address.postalCode,
                addressCountry: BUSINESS_INFO.address.addressCountry,
              },
            },
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode:
              item.location === "Online Event"
                ? "https://schema.org/OnlineEventAttendanceMode"
                : "https://schema.org/OfflineEventAttendanceMode",
            organizer: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            image: getImageUrl(item.image || SITE_CONFIG.defaultOgImage),
          }),

          // Fix: Course objects require provider, offers and hasCourseInstance
          ...(itemType === "Course" && {
            provider: {
              "@type": "EducationalOrganization",
              "@id": getOrganizationId(),
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            hasCourseInstance: [
              {
                "@type": "CourseInstance",
                courseMode: ["online", "onsite"],
                courseWorkload: "P3M",
              },
            ],
            offers: {
              "@type": "Offer",
              category: "Paid",
              url: getFullUrl(item.url),
            },
          }),

        };
      } else {
        listItem.name = item.name;
      }

      return listItem;
    }),
  };
}

// NOTE: The previous 'generateCarouselSchema' has been replaced/updated by 'generateItemListSchema'
// to fix the "Carousel" related errors (unrecognized properties and missing item/url).
/**
 * Generate Website schema with search action
 */
export function generateWebsiteSchema(): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": getWebsiteId(),
    url: SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    // Non-defensible "placement support" claim removed (per
    // docs/seo-audit/_decisions.md — same rule that drove BLG-059).
    description:
      "Professional training in Software Testing, Data Science, AI/ML and Digital Marketing with placement assistance.",
    publisher: {
      "@id": getOrganizationId(),
    },
    // BLG-068: SearchAction makes the site eligible for the Google
    // Sitelinks Searchbox. Points at the on-site blog search endpoint.
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/blog/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-IN",
  };
}

// ============================================================================
// LOCAL BUSINESS SCHEMA
// ============================================================================

/**
 * Generate LocalBusiness schema for location-based searches
 */
export function generateLocalBusinessSchema(): WithContext<
  Record<string, unknown>
> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#localbusiness`,
    name: SITE_CONFIG.name,
    image: getImageUrl(SITE_CONFIG.defaultOgImage),
    url: SITE_CONFIG.url,
    telephone: BUSINESS_INFO.phone,
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: BUSINESS_INFO.openingHours.map((hours) => {
      const [day, timeRange] = hours.split(" ");
      const [opens, closes] = timeRange.split("-");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        opens,
        closes,
      };
    }),

    // BLG-061: link this LocalBusiness back to the Organization entity so
    // Google treats them as one business, not two unrelated entities.
    parentOrganization: {
      "@id": getOrganizationId(),
    },

    // BLG-080: payment trust signals.
    paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Net Banking",
    currenciesAccepted: "INR",

    // aggregateRating removed to avoid duplication with Global Organization Schema
  };
}

// ============================================================================
// COURSE SCHEMA (Fix for missing required fields)
// ============================================================================

interface CourseSchemaInput {
  name: string;
  description: string;
  url: string;
  slug: string;
  price?: number;
  currency?: string;
  duration?: string; // ISO 8601 format (e.g., "P12W" for 12 weeks)
  level?: string;
  image?: string;
  rating?: number;
  reviewCount?: number;
  enrollmentCount?: number;
  syllabus?: string[];
  prerequisites?: string[];
  learningOutcomes?: string[];
  instructor?: string;
  startDate?: string;
  endDate?: string;
  reviews?: ReviewItem[];
  localInsight?: string;
}

/**
 * Generate Course schema for individual course pages
 * Fixes: Ensures required fields (provider, hasCourseInstance, offers, description) are present.
 */
export function generateCourseSchema(
  course: CourseSchemaInput,
): WithContext<Record<string, unknown>> {
  const fullUrl = getFullUrl(course.url);

  // Fix: Ensure description is not empty, which is a critical requirement for Course schema.
  const courseDescription =
    course.description && course.description.trim() !== ""
      ? course.description
      : `Comprehensive training program: ${course.name}`;

  // Default CourseInstance.
  // BLG-078: instructor is only emitted when a real name is supplied — the
  // previous `course.instructor || "Expert Mentors"` shipped a fabricated
  // instructor name on every course that didn't specify one.
  // BLG-075: batch start/end dates are surfaced on the CourseInstance when
  // the caller provides them.
  const defaultCourseInstance: Record<string, unknown> = {
    "@type": "CourseInstance",
    courseMode: ["online", "onsite"],
    courseWorkload: course.duration || "P3M", // Use course duration or default to 3 months
    ...(course.instructor && {
      instructor: {
        "@type": "Person",
        name: course.instructor,
      },
    }),
    ...(course.startDate && { startDate: course.startDate }),
    ...(course.endDate && { endDate: course.endDate }),
  };

  // BLG-063: `teaches` lists the concrete skills/topics the course covers —
  // a strong signal for both search and AI engines. Prefer explicit learning
  // outcomes, fall back to syllabus modules.
  const teaches =
    course.learningOutcomes && course.learningOutcomes.length > 0
      ? course.learningOutcomes
      : course.syllabus && course.syllabus.length > 0
        ? course.syllabus
        : [];

  // BLG-058 (Sprint 1): use the actual course.price passed by the caller.
  // Previously this was hard-coded to lowPrice 25000 / highPrice 65000 via
  // AggregateOffer, ignoring course.price entirely — every Course schema
  // shipped the same wrong 25k-65k range regardless of the real price.
  //
  // - If course.price is provided: emit a single Offer with that price.
  // - If not provided: omit offers (a missing offers field is a soft
  //   warning in Google Rich Results, but a wrong price is a hard problem).
  const offer = course.price !== undefined
    ? {
        "@type": "Offer",
        price: String(course.price),
        priceCurrency: course.currency || "INR",
        availability: "https://schema.org/InStock",
        url: fullUrl,
        category: "Paid",
      }
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${fullUrl}#course`,
    name: course.name,
    description: course.localInsight
      ? `${courseDescription} Local Insight: ${course.localInsight}`
      : courseDescription,
    url: fullUrl,

    // Provider (Required)
    provider: {
      "@id": getOrganizationId(),
    },

    // Image
    ...(course.image && {
      image: getImageUrl(course.image),
    }),

    // Course Instance (Required)
    hasCourseInstance: [defaultCourseInstance],

    // Offers — only emitted when caller provides course.price (BLG-058)
    ...(offer && { offers: offer }),

    // BLG-063: educational metadata — emitted when the caller supplies the
    // underlying data. `educationalCredentialAwarded` and `audience` are
    // always emitted because they hold for every CDPL course.
    ...(course.level && { educationalLevel: course.level }),
    ...(teaches.length > 0 && { teaches }),
    ...(course.prerequisites &&
      course.prerequisites.length > 0 && {
        coursePrerequisites: course.prerequisites,
      }),
    educationalCredentialAwarded: {
      "@type": "EducationalOccupationalCredential",
      name: `${course.name} Completion Certificate`,
      credentialCategory: "Certificate",
      recognizedBy: { "@id": getOrganizationId() },
    },
    // BLG-074: intended audience for the course.
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType:
        "Career changers, fresh graduates, and working professionals",
    },

    // Aggregate Rating — only when real reviews exist
    ...(course.reviews && course.reviews.length > 0 && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(course.rating || STATISTICS.rating),
        reviewCount: String(course.reviews.length),
        bestRating: "5",
      },
    }),

    // Reviews (Rich Results)
    ...(course.reviews &&
      course.reviews.length > 0 && {
        review: course.reviews.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.author },
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.rating,
            bestRating: 5,
          },
          reviewBody: r.text,
        })),
      }),

    // Optional fields
    inLanguage: "en-IN",
    learningResourceType: "Professional Training",
    datePublished: course.startDate,
  };
}

// ============================================================================
// FAQ SCHEMA
// ============================================================================

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(
  faqs: FAQItem[],
): WithContext<Record<string, unknown>> {
  // Fix: Ensure only one top-level FAQPage schema is generated per page.
  // The duplicate field error suggests this function is being called multiple times
  // or the resulting JSON-LD is being duplicated. However, the function itself
  // should only return a single FAQPage object.
  // The issue is likely that the page is including multiple separate FAQ components,
  // each generating its own schema, or the data source is structured to create
  // multiple schemas. Since the page.tsx for the course page only calls it once,
  // the duplication must be coming from somewhere else, or the test is seeing
  // multiple pages merged.
  // For now, we will ensure the function is correct, and assume the fix in the
  // course page (removing duplicate data) will resolve the issue.
  // The structure is correct for a single FAQPage.
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ============================================================================
// BREADCRUMB SCHEMA
// ============================================================================

interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate BreadcrumbList schema.
 *
 * BLG-077: the `@id` is now always present. When a caller does not pass an
 * explicit `id`, a deterministic one is derived from the last crumb's URL
 * (`<page-url>#breadcrumb`). Previously, pages that emitted a breadcrumb
 * both from a consolidator and from the page component produced two
 * BreadcrumbList objects with no `@id`, which Google could not tell apart.
 */
export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
  id?: string,
): WithContext<Record<string, unknown>> {
  const lastItem = items[items.length - 1];
  const breadcrumbId =
    id || (lastItem ? `${getFullUrl(lastItem.url)}#breadcrumb` : undefined);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(breadcrumbId && { "@id": breadcrumbId }),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getFullUrl(item.url),
    })),
  };
}

// ============================================================================
// ARTICLE SCHEMA (for blog posts)
// ============================================================================

interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  image?: string;
  author: string;
  authorSameAs?: string[]; // BLG-066: author social/profile URLs for E-E-A-T
  publishedDate: string;
  modifiedDate?: string;
  keywords?: string[];
  wordCount?: number;
  category?: string;
}

/**
 * Generate BlogPosting schema for blog posts
 */
export function generateArticleSchema(
  article: ArticleSchemaInput,
): WithContext<Record<string, unknown>> {
  const fullUrl = getFullUrl(article.url);

  return {
    "@context": "https://schema.org",
    // BLG-065: BlogPosting is the correct subtype for blog posts and gives
    // Rich Results an extra signal over the generic Article type.
    "@type": "BlogPosting",
    "@id": `${fullUrl}#article`,
    headline: article.title,
    description: article.description,
    url: fullUrl,

    // Image
    ...(article.image && {
      image: {
        "@type": "ImageObject",
        url: getImageUrl(article.image),
        width: 1200,
        height: 630,
      },
    }),

    // Author — BLG-066: sameAs links the author to their verified profiles
    // (LinkedIn etc.), a key E-E-A-T signal for both search and AI engines.
    author: {
      "@type": "Person",
      name: article.author,
      ...(article.authorSameAs &&
        article.authorSameAs.length > 0 && {
          sameAs: article.authorSameAs,
        }),
    },

    // Publisher
    publisher: {
      "@type": "Organization",
      "@id": getOrganizationId(),
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: getImageUrl(SITE_CONFIG.logo),
      },
    },

    // Dates
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,

    // Keywords
    ...(article.keywords &&
      article.keywords.length > 0 && {
        keywords: article.keywords.join(", "),
      }),

    // Word Count
    ...(article.wordCount && {
      wordCount: article.wordCount,
    }),

    // Category
    ...(article.category && {
      articleSection: article.category,
    }),

    // Main Entity
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": fullUrl,
    },

    // Language
    inLanguage: "en-IN",
  };
}

// ============================================================================
// REVIEW SCHEMA
// ============================================================================

interface ReviewItem {
  author: string;
  rating: number;
  text: string;
  datePublished?: string;
}

interface VideoSchemaInput {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string; // ISO 8601 format (e.g., "PT1M30S" for 1 min 30 sec)
  contentUrl?: string;
  embedUrl?: string;
  url?: string; // URL of the page where the video is shown
}

/**
 * Generate VideoObject schema.
 * Consolidation of contentUrl and embedUrl to avoid "Multiple video URLs" error in Search Console.
 * We prioritize embedUrl for YouTube to ensure consistency.
 */
export function generateVideoSchema(
  video: VideoSchemaInput,
): WithContext<Record<string, unknown>> {
  const isYouTube =
    video.contentUrl?.includes("youtube.com") ||
    video.embedUrl?.includes("youtube.com");
  const videoId = isYouTube
    ? video.contentUrl?.split("v=")[1] || video.embedUrl?.split("/embed/")[1]
    : null;

  // Use high-res YouTube thumbnail if possible
  const finalThumbnail =
    isYouTube && videoId
      ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
      : getImageUrl(video.thumbnailUrl);

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.name,
    description: video.description,
    thumbnailUrl: finalThumbnail,
    uploadDate: video.uploadDate,
    // Google recommendation: url of the page where the video is the primary focus
    url: getFullUrl(video.url || "/"),
    ...(video.duration && { duration: video.duration }),
    // To resolve "Multiple video URLs", we provide only embedUrl for YouTube
    ...(video.embedUrl && { embedUrl: video.embedUrl }),
    ...(!isYouTube && video.contentUrl && { contentUrl: video.contentUrl }),
    publisher: {
      "@type": "Organization",
      "@id": getOrganizationId(),
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: getImageUrl(SITE_CONFIG.logo),
      },
    },
  };
}

// ============================================================================
// (Removed) INDIVIDUAL REVIEW SCHEMA
// ============================================================================
// generateSingleReviewSchema was deleted in BLG-056 (Sprint 1) because it
// emitted a fabricated 5-star review with a hardcoded reviewBody attributed
// to a fake "CDPL Student" author and a Math.random()-derived @id on every
// route that called it (~830 routes total). This violated Google's self-
// serving review policy and risked a manual action. Real student reviews
// belong on Course/Service entities, derived from actual Sanity testimonial
// data via generateCourseSchema's review array (already wired).

// ============================================================================
// EVENT SCHEMAMA
// ============================================================================

interface EventSchemaInput {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: {
    name: string;
    address?: string;
  };
  image?: string;
  eventAttendanceMode?:
    | "OnlineEventAttendanceMode"
    | "OfflineEventAttendanceMode"
    | "MixedEventAttendanceMode";
  eventStatus?: "EventScheduled" | "EventCancelled" | "EventPostponed";
  isAccessibleForFree?: boolean;
  performerName?: string;
  performerUrl?: string;
  offers?: {
    price: number;
    priceCurrency: string;
    url?: string;
  };
}

/**
 * Generate Event schema for webinars, workshops, etc.
 */
export function generateEventSchema(
  event: EventSchemaInput,
  excludeContext = false,
): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    ...(!excludeContext && { "@context": "https://schema.org" }),
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    ...(event.endDate && { endDate: event.endDate }),

    // Event attendance mode
    eventAttendanceMode: `https://schema.org/${event.eventAttendanceMode || "OnlineEventAttendanceMode"}`,

    // Event status
    eventStatus: `https://schema.org/${event.eventStatus || "EventScheduled"}`,

    // Location
    ...(event.location && {
      location: {
        "@type": "Place",
        name: event.location.name,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            event.location.address || BUSINESS_INFO.address.streetAddress,
          addressLocality: BUSINESS_INFO.address.addressLocality,
          addressRegion: BUSINESS_INFO.address.addressRegion,
          postalCode: BUSINESS_INFO.address.postalCode,
          addressCountry: BUSINESS_INFO.address.addressCountry,
        },
      },
    }),

    // Performer (Recommended for Rich Results)
    performer: {
      "@type": "Organization",
      name: event.performerName || SITE_CONFIG.name,
      url: event.performerUrl || SITE_CONFIG.url,
    },

    // Offers (Highly Recommended for Rich Results)
    offers: {
      "@type": "Offer",
      price: String(event.offers?.price || 0),
      priceCurrency: event.offers?.priceCurrency || "INR",
      url: getFullUrl(event.offers?.url || "/events"),
      availability: "https://schema.org/InStock",
      validFrom: formatDateToISO(event.startDate),
    },

    // Image
    ...(event.image && {
      image: getImageUrl(event.image),
    }),

    // Organizer
    organizer: {
      "@type": "Organization",
      "@id": getOrganizationId(),
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },

    // Free or Paid
    isAccessibleForFree:
      event.isAccessibleForFree !== undefined
        ? event.isAccessibleForFree
        : true,
  };

  return schema;
}

// ============================================================================
// PERSON SCHEMA (for trainers/mentors))
// ============================================================================

interface PersonSchemaInput {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  url?: string;
  sameAs?: string[]; // Social media profiles
  email?: string;
}

/**
 * Generate Person schema for trainers/mentors
 */
export function generatePersonSchema(
  person: PersonSchemaInput,
): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    ...(person.description && { description: person.description }),
    ...(person.image && { image: getImageUrl(person.image) }),
    ...(person.url && { url: getFullUrl(person.url) }),
    ...(person.email && { email: person.email }),
    worksFor: {
      "@type": "EducationalOrganization",
      "@id": getOrganizationId(),
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    ...(person.sameAs && person.sameAs.length > 0 && { sameAs: person.sameAs }),
  };
}

// ============================================================================
// SITE NAVIGATION SCHEMA
// ============================================================================

export function generateSiteNavigationSchema(): WithContext<
  Record<string, unknown>
> {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "@id": `${SITE_CONFIG.url}/#navigation`,
    name: "Main Navigation",
    hasPart: [
      {
        "@type": "SiteNavigationElement",
        name: "Home",
        url: getFullUrl("/"),
      },
      {
        "@type": "SiteNavigationElement",
        name: "All Courses",
        url: getFullUrl("/courses"),
      },
      {
        "@type": "SiteNavigationElement",
        name: "Services",
        url: getFullUrl("/services"),
        hasPart: [
          {
            "@type": "SiteNavigationElement",
            name: "Corporate Training",
            url: getFullUrl("/services/corporate-training"),
          },
          {
            "@type": "SiteNavigationElement",
            name: "Campus to Corporate",
            url: getFullUrl("/services/campus-to-corporate"),
          },
          {
            "@type": "SiteNavigationElement",
            name: "Internship Program",
            url: getFullUrl("/services/internship-program"),
          },
        ],
      },
      {
        "@type": "SiteNavigationElement",
        name: "Events & Webinars",
        url: getFullUrl("/events"),
      },
      {
        "@type": "SiteNavigationElement",
        name: "About Us",
        url: getFullUrl("/about-us"),
      },
      {
        "@type": "SiteNavigationElement",
        name: "Mentors",
        url: getFullUrl("/mentors"),
      },
      {
        "@type": "SiteNavigationElement",
        name: "Contact Us",
        url: getFullUrl("/contact-us"),
      },
    ],
  };
}

// ============================================================================
// HOME PAGE SCHEMA CONSOLIDATION
// ============================================================================

/**
 * Generate a consolidated array of schemas for the Home Page.
 * This includes LocalBusiness, ItemList (for featured courses), FAQPage, and VideoObject.
 */
export function generateHomePageSchema(
  faqs?: { question: string; answer: string }[],
): WithContext<Record<string, unknown>>[] {
  // 1. Local Business Schema
  const localBusinessSchema = generateLocalBusinessSchema();

  // 2. ItemList Schema for All Individual Courses
  const allCoursesForSchema: any[] = [];
  const seenSlugs = new Set<string>();

  courseCategories.forEach((category) => {
    if (category.courses) {
      category.courses.forEach((course) => {
        if (course.slug && course.description && !seenSlugs.has(course.slug)) {
          seenSlugs.add(course.slug);
          allCoursesForSchema.push({
            name: course.name,
            url: `/${course.slug}`,
            description: course.description,
            type: "Course",
            itemSchema: generateCourseSchema({
              name: course.name,
              description: course.description,
              url: `/${course.slug}`,
              slug: course.slug,
              // Apply safe defaults since headerData doesn't contain these detailed metadata fields
              duration: "P12W",
              level: "Beginner",
              rating: STATISTICS.rating,
              reviewCount: STATISTICS.reviewCount,
              enrollmentCount: 1000,
            }),
          });
        }
      });
    }
  });

  const itemListSchema = generateItemListSchema(
    allCoursesForSchema,
    "Individual Courses",
  );

  // 3. FAQ Schema
  // Use passed FAQs or fallback to empty array (or default if we had one in config)
  const faqSchema =
    faqs && faqs.length > 0 ? generateFAQSchema(faqs) : undefined;

  // 4. VideoObject Schema (for the "Watch CDPL" video)
  const videoSchema = generateVideoSchema({
    name: "Transform Your Career with CDPL",
    description:
      "Discover how CDPL helps you master Software Testing, Data Science, and AI/ML with comprehensive placement support.",
    thumbnailUrl: "/images/video-thumbnail.jpg",
    uploadDate: "2024-01-01T08:00:00+08:00",
    embedUrl: "https://www.youtube.com/embed/8kB2wESj1n8",
    url: "/", // Primary focus page for this video
  });

  // 5. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "Software Testing & Data Science Course Mumbai | CDPL",
    description:
      "Launch your tech career with CDPL's industry-led courses in Software Testing, Data Science, and AI/ML. Placement Support, Live Projects & Expert Mentors. Book a Free Demo!",
    url: "/",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 7. Site Navigation Schema
  // 7. Site Navigation Schema
  const siteNavSchemas = generateSiteNavigationSchema();

  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // Filter out undefined schemas
  return [
    localBusinessSchema,
    itemListSchema,
    faqSchema,
    videoSchema,
    webPageSchema,
    siteNavSchemas,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// ALL COURSES PAGE SCHEMA CONSOLIDATION
// ============================================================================

/**
 * Generate a consolidated array of schemas for the /courses page.
 * This includes CollectionPage, ItemList (for all courses), BreadcrumbList, FAQPage, Organization, WebSite, and SiteNavigationElement.
 */
export function generateAllCoursesPageSchema(): WithContext<
  Record<string, unknown>
>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 2. Collection Page Schema (acts as WebPage schema)
  const collectionPageSchema = generateCollectionPageSchema({
    name: "All Courses - Software Testing, Data Science, AI/ML | CDPL",
    description:
      "Explore our industry-led courses in Software Testing, Data Science, AI/ML, and Full Stack Development. Placement support included.",
    url: "/courses",
  });

  // Explicit WebPage Schema (Requested)
  const webPageSchema = generateWebPageSchema({
    name: "All Courses Directory | CDPL",
    description:
      "Explore our industry-led courses in Software Testing, Data Science, AI/ML, and Full Stack Development. Placement support included.",
    url: "/courses",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 3. ItemList Schema for All Individual Courses
  const allCoursesForSchema: any[] = [];
  const seenSlugs = new Set<string>();

  courseCategories.forEach((category) => {
    if (category.courses) {
      category.courses.forEach((course) => {
        if (course.slug && course.description && !seenSlugs.has(course.slug)) {
          seenSlugs.add(course.slug);
          allCoursesForSchema.push({
            name: course.name,
            url: `/${course.slug}`,
            description: course.description,
            type: "Course",
            itemSchema: generateCourseSchema({
              name: course.name,
              description: course.description,
              url: `/${course.slug}`,
              slug: course.slug,
              // Apply safe defaults
              duration: "P12W",
              level: "Beginner",
              rating: STATISTICS.rating,
              reviewCount: STATISTICS.reviewCount,
              enrollmentCount: 1000,
            }),
          });
        }
      });
    }
  });

  const itemListSchema = generateItemListSchema(
    allCoursesForSchema,
    "All Courses Directory",
  );

  // 4. Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
  ]);

  // 5. FAQPage Schema (Matches exactly with frontend FaqSection.tsx)
  const faqSchema = generateFAQSchema([
    {
      question: "What makes your courses different from other platforms?",
      answer:
        "Our programs are designed by industry experts and emphasize practical, project-based learning with mentor support. You’ll work on real scenarios, follow an updated syllabus, earn certifications, and get career services for job-readiness.",
    },
    {
      question: "Do I need prior experience to enroll?",
      answer:
        "No. We offer beginner, intermediate, and advanced tracks. Each course clearly lists prerequisites so you can choose the right difficulty and learn at your own pace.",
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer:
        "Yes. You’ll get an industry-recognized certificate you can add to your résumé and LinkedIn profile. Certificates highlight your skills and verified project work.",
    },
    {
      question: "What kind of career support do you provide?",
      answer:
        "We offer résumé reviews, portfolio building, mock interviews, referral guidance, and job alerts. The goal is to translate your learning into interviews and offers.",
    },
    {
      question: "How long do I retain access to course content?",
      answer:
        "You receive long-term access to recorded lessons, notes, and project resources. Live sessions and mentorship schedules are announced inside your dashboard.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes. We provide a transparent, time-bound refund window. Please review the refund policy on the course page for exact timelines and eligibility.",
    },
    {
      question: "What is the learning format?",
      answer:
        "A blended format: live mentor sessions, self-paced videos, hands-on labs, and graded projects. Doubt-clearing and community forums ensure fast feedback.",
    },
  ]);

  // 6. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  // Return exactly the requested schemas
  return [
    collectionPageSchema,
    webPageSchema,
    itemListSchema,
    breadcrumbSchema,
    faqSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// SOFTWARE TESTING CATEGORY PAGE SCHEMA CONSOLIDATION
// ============================================================================

export function generateSoftwareTestingCategoryPageSchema(
  courseInput: Parameters<typeof generateCourseSchema>[0],
  faqs: { question: string; answer: string }[],
  breadcrumbs: { name: string; url: string }[],
): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 2. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    // Mirrors the page <title>, minus the "| CDPL" suffix. National page —
    // city wording belongs to /software-testing-course-in-mumbai.
    name: "Software Testing Courses & Certification Programs",
    description:
      courseInput.description || "Master Manual & Automation Testing.",
    url: "/courses/software-testing-course",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 3. Master Course Schema (contains Aggregate Rating)
  const courseSchema = generateCourseSchema(courseInput);

  // 4. ItemList Schema for Sub-Courses
  const stCourses: any[] = [];
  const stCategory = courseCategories.find(
    (c) => c.slug === "software-testing-course",
  );
  if (stCategory && stCategory.courses) {
    stCategory.courses.forEach((c) => {
      stCourses.push({
        name: c.name,
        url: `/${c.slug}`,
        description: c.description,
        type: "Course",
      });
    });
  }
  const itemListSchema = generateItemListSchema(
    stCourses,
    "Software Testing Courses Directory",
  );

  // 5. Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // 6. FAQPage Schema
  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : undefined;

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    courseSchema,
    itemListSchema,
    breadcrumbSchema,
    faqSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// DATA SCIENCE & ML CATEGORY PAGE SCHEMA CONSOLIDATION
// ============================================================================

export function generateDataScienceMachineLearningCategoryPageSchema(
  courseInput: Parameters<typeof generateCourseSchema>[0],
  faqs: { question: string; answer: string }[],
  breadcrumbs: { name: string; url: string }[],
): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 2. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "Data Science & Machine Learning Courses | CDPL",
    description:
      courseInput.description ||
      "Master Data Science and Machine Learning with our comprehensive courses.",
    url: "/courses/ds-ml-courses",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 3. Master Course Schema (contains Aggregate Rating)
  const courseSchema = generateCourseSchema(courseInput);

  // 4. ItemList Schema for Sub-Courses
  const dsCourses: any[] = [];
  const dsCategory = courseCategories.find((c) => c.slug === "ds-ml-courses");
  if (dsCategory && dsCategory.courses) {
    dsCategory.courses.forEach((c) => {
      dsCourses.push({
        name: c.name,
        url: `/${c.slug}`,
        description: c.description,
        type: "Course",
      });
    });
  }
  const itemListSchema = generateItemListSchema(
    dsCourses,
    "Data Science & ML Courses Directory",
  );

  // 5. Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // 6. FAQPage Schema
  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : undefined;

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    courseSchema,
    itemListSchema,
    breadcrumbSchema,
    faqSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// BUSINESS INTELLIGENCE CATEGORY PAGE SCHEMA CONSOLIDATION
// ============================================================================

export function generateBusinessIntelligenceCategoryPageSchema(
  courseInput: Parameters<typeof generateCourseSchema>[0],
  faqs: { question: string; answer: string }[],
  breadcrumbs: { name: string; url: string }[],
): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 2. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "Business Intelligence Courses | Power BI, Tableau & Data Viz",
    description:
      courseInput.description ||
      "Explore our professional Business Intelligence courses.",
    url: "/courses/bi-courses",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 3. Master Course Schema (contains Aggregate Rating)
  const courseSchema = generateCourseSchema(courseInput);

  // 4. ItemList Schema for Sub-Courses
  const biCourses: any[] = [];
  const biCategory = courseCategories.find((c) => c.slug === "bi-courses");
  if (biCategory && biCategory.courses) {
    biCategory.courses.forEach((c) => {
      biCourses.push({
        name: c.name,
        url: `/${c.slug}`,
        description: c.description,
        type: "Course",
      });
    });
  }
  const itemListSchema = generateItemListSchema(
    biCourses,
    "Business Intelligence Courses Directory",
  );

  // 5. Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // 6. FAQPage Schema
  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : undefined;

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    courseSchema,
    itemListSchema,
    breadcrumbSchema,
    faqSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// ARTIFICIAL INTELLIGENCE CATEGORY PAGE SCHEMA CONSOLIDATION
// ============================================================================

export function generateArtificialIntelligenceCategoryPageSchema(
  courseInput: Parameters<typeof generateCourseSchema>[0],
  faqs: { question: string; answer: string }[],
  breadcrumbs: { name: string; url: string }[],
): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 2. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "Artificial Intelligence Courses | AI & Generative AI Training",
    description:
      courseInput.description ||
      "Advance your career with our specialized Artificial Intelligence courses.",
    url: "/courses/artificial-intelligence-courses",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 3. Master Course Schema (contains Aggregate Rating)
  const courseSchema = generateCourseSchema(courseInput);

  // 4. ItemList Schema for Sub-Courses
  const aiCourses: any[] = [];
  const aiCategory = courseCategories.find(
    (c) => c.slug === "artificial-intelligence-courses",
  );
  if (aiCategory && aiCategory.courses) {
    aiCategory.courses.forEach((c) => {
      aiCourses.push({
        name: c.name,
        url: `/${c.slug}`,
        description: c.description,
        type: "Course",
      });
    });
  }
  const itemListSchema = generateItemListSchema(
    aiCourses,
    "Artificial Intelligence Courses Directory",
  );

  // 5. Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // 6. FAQPage Schema
  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : undefined;

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    courseSchema,
    itemListSchema,
    breadcrumbSchema,
    faqSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// DIGITAL MARKETING CATEGORY PAGE SCHEMA CONSOLIDATION
// ============================================================================

export function generateDigitalMarketingCategoryPageSchema(
  courseInput: Parameters<typeof generateCourseSchema>[0],
  faqs: { question: string; answer: string }[],
  breadcrumbs: { name: string; url: string }[],
): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 2. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "Digital Marketing Courses | SEO, SEM, SMM & More",
    description:
      courseInput.description ||
      "Become a certified digital marketer with our industry-focused courses.",
    url: "/courses/digital-marketing-courses",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 3. Master Course Schema (contains Aggregate Rating)
  const courseSchema = generateCourseSchema(courseInput);

  // 4. ItemList Schema for Sub-Courses
  const dmCourses: any[] = [];
  const dmCategory = courseCategories.find(
    (c) => c.slug === "digital-marketing-courses",
  );
  if (dmCategory && dmCategory.courses) {
    dmCategory.courses.forEach((c) => {
      dmCourses.push({
        name: c.name,
        url: `/${c.slug}`,
        description: c.description,
        type: "Course",
      });
    });
  }
  const itemListSchema = generateItemListSchema(
    dmCourses,
    "Digital Marketing Courses Directory",
  );

  // 5. Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // 6. FAQPage Schema
  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : undefined;

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    courseSchema,
    itemListSchema,
    breadcrumbSchema,
    faqSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// SHARED COURSE PAGE SCHEMA (src/components/course-page)
// ============================================================================

/**
 * All JSON-LD for a course page built on the shared template. Replaces the
 * per-course generate<X>CoursePageSchema functions as courses move over.
 * The ItemList is built from the course's category siblings (the per-course
 * functions matched the wrong slug format and always produced an empty list).
 */
export function generateCoursePageSchema(input: {
  name: string;
  description: string;
  url: string;
  slug: string;
  image?: string;
  duration?: string;
  instructor?: string;
  learningOutcomes?: string[];
  prerequisites?: string[];
  program?: { programType: string; timeToComplete?: string; occupationalCategory?: string };
  category: { name: string; listName: string };
  siblings: { name: string; href: string; description?: string }[];
  breadcrumbs: { name: string; url: string }[];
  faqs: { question: string; answer: string }[];
}): WithContext<Record<string, unknown>>[] {
  // Organization and WebSite schemas come from the root layout.
  const webPageSchema = generateWebPageSchema({
    name: `${input.name} | CDPL`,
    description: input.description,
    url: input.url,
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  const courseSchema = generateCourseSchema({
    name: input.name,
    description: input.description,
    url: input.url,
    slug: input.slug,
    duration: input.duration,
    instructor: input.instructor,
    image: input.image,
    learningOutcomes: input.learningOutcomes,
    prerequisites: input.prerequisites,
  });

  const programSchema = input.program
    ? generateEducationalProgramSchema({
        name: input.name,
        description: input.description,
        url: input.url,
        ...input.program,
      })
    : undefined;

  const itemListSchema = generateItemListSchema(
    input.siblings.map((c) => ({ name: c.name, url: c.href, description: c.description, type: "Course" })),
    input.category.listName,
  );

  return [
    webPageSchema,
    courseSchema,
    programSchema,
    itemListSchema,
    generateBreadcrumbSchema(input.breadcrumbs),
    input.faqs.length > 0 ? generateFAQSchema(input.faqs) : undefined,
    generateSiteNavigationSchema(),
  ].filter((schema): schema is WithContext<Record<string, unknown>> => schema !== undefined);
}

// ============================================================================
// EDUCATIONAL OCCUPATIONAL PROGRAM SCHEMA
// ============================================================================

/**
 * Generate EducationalOccupationalProgram schema for long-form programs
 * (Master's programs, Bootcamps) — a stronger entity than a plain Course
 * for structured programs that lead to an occupational outcome. (BLG-072)
 */
export function generateEducationalProgramSchema(input: {
  name: string;
  description: string;
  url: string;
  programType?: string; // e.g. "Master's Program", "Bootcamp"
  timeToComplete?: string; // ISO 8601 duration
  price?: number;
  currency?: string;
  occupationalCategory?: string;
}): WithContext<Record<string, unknown>> {
  const fullUrl = getFullUrl(input.url);

  return {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "@id": `${fullUrl}#program`,
    name: input.name,
    description: input.description,
    url: fullUrl,
    provider: { "@id": getOrganizationId() },
    ...(input.programType && { programType: input.programType }),
    ...(input.timeToComplete && { timeToComplete: input.timeToComplete }),
    ...(input.occupationalCategory && {
      occupationalCategory: input.occupationalCategory,
    }),
    educationalCredentialAwarded: {
      "@type": "EducationalOccupationalCredential",
      name: `${input.name} Completion Certificate`,
      credentialCategory: "Certificate",
      recognizedBy: { "@id": getOrganizationId() },
    },
    ...(input.price !== undefined && {
      offers: {
        "@type": "Offer",
        price: String(input.price),
        priceCurrency: input.currency || "INR",
        availability: "https://schema.org/InStock",
        url: fullUrl,
      },
    }),
    inLanguage: "en-IN",
  };
}

/**
 * Generate ContactPage schema
 */
export function generateContactPageSchema(page?: {
  name?: string;
  description?: string;
  url?: string;
}): WithContext<Record<string, unknown>> {
  const pageName = page?.name || "Contact Us";
  const pageDescription =
    page?.description ||
    "Get in touch with CDPL - Cinute Digital for course inquiries, admissions, and support";
  const pageUrl = page?.url || "/contact-us";

  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${getFullUrl(pageUrl)}#contactpage`,
    url: getFullUrl(pageUrl),
    name: pageName,
    description: pageDescription,
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
    mainEntity: {
      "@type": "EducationalOrganization",
      "@id": getOrganizationId(),
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      telephone: BUSINESS_INFO.phone,
      email: BUSINESS_INFO.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS_INFO.address.streetAddress,
        addressLocality: BUSINESS_INFO.address.addressLocality,
        addressRegion: BUSINESS_INFO.address.addressRegion,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: BUSINESS_INFO.address.addressCountry,
      },
    },
  };
}

// ============================================================================
// CONTACT PAGE - FULL 8-POINT SCHEMA CONSOLIDATION
// ============================================================================

export function generateContactPageAllSchemas(): WithContext<
  Record<string, unknown>
>[] {
  // Note: organizationSchema and websiteSchema are handled by Root Layout

  const contactPageSchema = generateContactPageSchema({
    name: "Contact Us | Software Testing & Data Science Training | CDPL",
    description:
      "Get in touch with CDPL (Cinute Digital) for course inquiries, admissions, and career guidance. Call us, email, or visit our Mumbai office. Placement Support.",
    url: "/contact-us",
  });

  // FAQPage — mirrors the FAQ shown on the page.
  const faqSchema = generateFAQSchema(
    CONTACT_FAQS.map(({ question, answer }) => ({ question, answer })),
  );

  // ItemList — top courses as a directory
  const topCourses = [
    {
      name: "Software Testing Course",
      url: "/courses/software-testing-courses",
      description: "Comprehensive manual & automation testing training.",
      type: "Course",
    },
    {
      name: "Data Science Course",
      url: "/courses/ds-ml-courses/data-science-course",
      description: "Python, ML, and Data Science with placement support.",
      type: "Course",
    },
    {
      name: "AI Course",
      url: "/courses/ds-ml-courses/ai-course",
      description:
        "Artificial Intelligence fundamentals to advanced applications.",
      type: "Course",
    },
    {
      name: "Power BI Course",
      url: "/courses/bi-courses/power-bi-course",
      description:
        "Business intelligence and data visualization with Power BI.",
      type: "Course",
    },
    {
      name: "Digital Marketing Course",
      url: "/courses/digital-marketing-courses/digital-marketing-course",
      description: "SEO, SEM, Social Media, and AI-driven digital marketing.",
      type: "Course",
    },
  ];
  const itemListSchema = generateItemListSchema(
    topCourses,
    "Top Training Courses at CDPL - Cinute Digital",
  );

  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    contactPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

/**
 * Generate AboutPage Schema
 */
export function generateAboutPageSchema(data: {
  name: string;
  description: string;
  url: string;
  mainEntityId?: string;
}): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${getFullUrl(data.url)}#aboutpage`,
    url: getFullUrl(data.url),
    name: data.name,
    description: data.description,
    mainEntity: {
      "@id": data.mainEntityId || getOrganizationId(),
    },
    inLanguage: SEO_DEFAULTS.locale,
  };
}

// ============================================================================
// ABOUT PAGE - FULL 8-POINT SCHEMA CONSOLIDATION
// ============================================================================

export function generateAboutPageAllSchemas(
  faqs: { question: string; answer: string }[],
): WithContext<Record<string, unknown>>[] {
  const webPageSchema = generateWebPageSchema({
    name: "About CDPL - Leading EdTech for Tech Training",
    description:
      "CDPL (Cinute Digital) is an EdTech institute delivering industry-ready training in Software Testing, Automation, Data Science, and AI/ML. Founded in 2018, we deliver live projects, expert mentorship, and comprehensive placement support.",
    url: "/about-us",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  const aboutPageSchema = generateAboutPageSchema({
    name: "About CDPL - Cinute Digital",
    description:
      "Learn about CDPL's mission to empower professionals with industry-ready skills through hands-on training in Software Testing, Automation, Data Science, and AI/ML.",
    url: "/about-us",
  });

  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : undefined;

  // ItemList — flagship programs with complete course schema
  const flagshipPrograms = [
    {
      name: "Software Testing Course",
      url: "/courses/software-testing-courses",
      slug: "software-testing-courses",
      description:
        "Comprehensive manual & automation testing training with ISTQB preparation.",
      type: "Course",
    },
    {
      name: "Data Science Course",
      url: "/courses/ds-ml-courses/data-science-course",
      slug: "data-science-course",
      description:
        "Python, Machine Learning, and Data Science with placement support.",
      type: "Course",
    },
    {
      name: "AI Course",
      url: "/courses/ds-ml-courses/ai-course",
      slug: "ai-course",
      description:
        "Artificial Intelligence fundamentals to advanced real-world applications.",
      type: "Course",
    },
    {
      name: "Power BI Course",
      url: "/courses/bi-courses/power-bi-course",
      slug: "power-bi-course",
      description:
        "Business intelligence and data visualization with Power BI.",
      type: "Course",
    },
    {
      name: "Digital Marketing Course",
      url: "/courses/digital-marketing-courses/digital-marketing-course",
      slug: "digital-marketing-course",
      description:
        "AI-driven SEO, SEM, Social Media, and Performance Marketing.",
      type: "Course",
    },
  ].map((p) => ({
    ...p,
    itemSchema: generateCourseSchema({
      name: p.name,
      description: p.description,
      url: p.url,
      slug: p.slug,
    }),
  }));

  const itemListSchema = generateItemListSchema(
    flagshipPrograms,
    "Flagship Training Programs at CDPL - Cinute Digital",
  );

  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    aboutPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// JOB POSTING SCHEMA
// ============================================================================
// SERVICES PAGE - FULL 8-POINT SCHEMA CONSOLIDATION
// ============================================================================

export function generateServicesPageAllSchemas(
  services: {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    /** The service's share image (site path or absolute URL). */
    image: string;
  }[],
): WithContext<Record<string, unknown>>[] {
  const webPageSchema = generateWebPageSchema({
    name: "Our Services | Training, Consulting & Custom Solutions – CDPL",
    description:
      "CDPL offers comprehensive corporate training, software testing consulting, custom automation solutions, and technical workshops for enterprises.",
    url: "/services",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // CollectionPage schema (existing services listing)
  const collectionPageSchema = generateCollectionPageSchema({
    name: "Our Services",
    description:
      "Comprehensive corporate training, consulting, and custom solutions.",
    url: "/services",
    hasPart: services.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: generateServiceSchema({
        name: service.title,
        description: service.shortDescription,
        url: `/services/${service.slug}`,
        serviceType: "Corporate Training",
        // Was `/og-images/og-service-${slug}.webp`, which exists for no service.
        image: service.image,
      }),
    })),
  });

  // FAQPage — services-related questions
  const faqSchema = generateFAQSchema([
    {
      question: "What corporate training services does CDPL offer?",
      answer:
        "CDPL offers a wide range of corporate training services including Expert Talks, Workshops, On-the-Job Training, Faculty Development Programs, Train-the-Trainer, STTP, Industrial Visits, Custom Training Solutions, Internship Programs, Campus-to-Corporate Programs, and Government & Public Sector Training.",
    },
    {
      question:
        "Can CDPL design a custom training program for our organization?",
      answer:
        "Yes. CDPL specializes in creating bespoke training solutions aligned to your specific technology stack, business goals, and team composition. We conduct a needs assessment and design a program delivering measurable results.",
    },
    {
      question:
        "Does CDPL provide training for government and public sector institutions?",
      answer:
        "Yes. CDPL offers specialized training for municipalities (including BMC), state departments, and public sector units covering e-governance, digital literacy, data management, and cybersecurity.",
    },
    {
      question:
        "What delivery formats are available for CDPL training services?",
      answer:
        "We offer flexible delivery formats including classroom/on-site training, virtual/online sessions, and hybrid formats. Duration ranges from half-day workshops to multi-month programs.",
    },
    {
      question: "How can I request a corporate training consultation?",
      answer:
        "You can contact CDPL directly via phone, email, or the inquiry form on the Contact page to schedule a free consultation and discuss your training requirements.",
    },
  ]);

  // ItemList — all services as a schema-native list
  const itemListSchema = generateItemListSchema(
    services.map((s) => ({
      name: s.title,
      url: `/services/${s.slug}`,
      description: s.shortDescription,
    })),
    "CDPL Corporate Training & Consulting Services",
  );

  const siteNavigationSchema = generateSiteNavigationSchema();

  // OfferCatalog — the catalog of corporate training & consulting services
  // CDPL offers, making the /services page eligible for catalog rich
  // results (BLG-073).
  const offerCatalogSchema: WithContext<Record<string, unknown>> = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${SITE_CONFIG.url}/services#offercatalog`,
    name: "CDPL Corporate Training & Consulting Services",
    url: getFullUrl("/services"),
    provider: { "@id": getOrganizationId() },
    itemListElement: services.map((service, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.shortDescription,
        url: getFullUrl(`/services/${service.slug}`),
        provider: { "@id": getOrganizationId() },
      },
    })),
  };

  return [
    webPageSchema,
    collectionPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
    offerCatalogSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// SERVICE DETAIL PAGE - FULL 8-POINT SCHEMA CONSOLIDATION (dynamic /services/[slug])
// ============================================================================

export function generateServiceDetailPageAllSchemas(service: {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  outcomes: string[];
  methodology: string[];
  deliveryFormats: { format: string; duration: string; description: string }[];
  whoShouldAttend: string[];
  /** The service's share image (site path or absolute URL). */
  image: string;
}): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  const webPageSchema = generateWebPageSchema({
    name: `${service.title} | CDPL`,
    description: `${service.tagline} ${service.shortDescription}`.slice(0, 200),
    url: `/services/${service.slug}`,
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // Service schema
  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.shortDescription,
    url: `/services/${service.slug}`,
    serviceType: "Corporate Training",
    // Was `/og-images/og-service-${slug}.webp`, which exists for no service.
    image: service.image,
  });

  // FAQPage — dynamically built from service data
  //
  // The first answer used to be a blind `fullDescription.slice(0, 300)`, which
  // cut mid-word — on /services/sttp it ended at "quickly ups". A truncated
  // fragment is a poor answer for a rich result and reads as broken to anyone
  // who sees it. `truncateAtSentence` cuts at the last complete sentence inside
  // the limit instead, falling back to the last whole word.
  const faqs: { question: string; answer: string }[] = [
    {
      question: `What is the ${service.title} program at CDPL?`,
      answer: truncateAtSentence(service.fullDescription, 300),
    },
    {
      question: `What are the key features of the ${service.title}?`,
      answer: `Key features include: ${service.features.slice(0, 4).join(", ")}.`,
    },
    {
      question: `What will I gain from the ${service.title}?`,
      answer: `You will gain: ${service.outcomes.slice(0, 4).join(", ")}.`,
    },
    {
      question: `Who should attend the ${service.title}?`,
      answer: `This program is ideal for: ${service.whoShouldAttend.slice(0, 4).join(", ")}.`,
    },
    {
      question: `What delivery formats are available for ${service.title}?`,
      answer: service.deliveryFormats
        .map((f) => `${f.format} (${f.duration}): ${f.description}`)
        .join(" | "),
    },
  ];
  const faqSchema = generateFAQSchema(faqs);

  // ItemList — all services as a directory
  const allServiceSlugs = [
    {
      name: "Expert Talks / Sessions",
      slug: "expert-talks",
      desc: "Industry expert-led interactive sessions.",
    },
    {
      name: "Workshops",
      slug: "workshops",
      desc: "Hands-on skill-building workshops.",
    },
    {
      name: "On-the-Job Training",
      slug: "on-job-training",
      desc: "Real-project training under mentorship.",
    },
    {
      name: "Faculty Development Program",
      slug: "faculty-development",
      desc: "Modern pedagogy for educators.",
    },
    {
      name: "Train-the-Trainer",
      slug: "train-the-trainer",
      desc: "Build your internal training capability.",
    },
    {
      name: "STTP",
      slug: "sttp",
      desc: "Short Term Training Programs in trending tech.",
    },
    {
      name: "Industrial Visits",
      slug: "industrial-visits",
      desc: "Real-world industry exposure and networking.",
    },
    {
      name: "Custom Training Solution",
      slug: "custom-training",
      desc: "Bespoke programs for your organization.",
    },
    {
      name: "Internship Program",
      slug: "internship-program",
      desc: "Structured internships with real projects.",
    },
    {
      name: "Campus to Corporate",
      slug: "campus-to-corporate",
      desc: "Complete career transformation program.",
    },
    {
      name: "Corporate Training",
      slug: "corporate-training",
      desc: "Role-based upskilling for enterprise teams.",
    },
    {
      name: "Government & Public Sector Training",
      slug: "government-public-sector-training",
      desc: "e-Governance and digital literacy training.",
    },
  ];
  const itemListSchema = generateItemListSchema(
    allServiceSlugs.map((s) => ({
      name: s.name,
      url: `/services/${s.slug}`,
      description: s.desc,
      type: "Service",
    })),
    "CDPL Corporate Training & Consulting Services",
  );

  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    serviceSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// EVENTS PAGE - FULL 8-POINT SCHEMA CONSOLIDATION (/events)
// ============================================================================

export function generateEventsPageAllSchemas(
  events: {
    title: string;
    purpose: string;
    slug: string;
    heroImageUrl?: string;
    date: string;
    location: string;
    subtitle?: string;
  }[],
  faqs: { question: string; answer: string }[],
): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  const webPageSchema = generateWebPageSchema({
    name: "Events - Workshops, Webinars & Training Sessions | CDPL",
    description:
      "Explore CDPL's events including corporate training workshops, technical webinars, industry conferences, and hands-on training sessions.",
    url: "/events",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // CollectionPage schema
  const collectionPageSchema = generateCollectionPageSchema({
    name: "CDPL Events",
    description: "Browse our workshops, webinars, and training events",
    url: "/events",
    hasPart: events.slice(0, 10).map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: generateEventSchema(
        {
          name: event.title,
          description: event.subtitle || event.purpose || event.title,
          startDate: formatDateToISO(event.date),
          endDate: formatDateToISO(event.date.split(" to ")[1] || event.date),
          location: {
            name: event.location,
            address:
              event.location && event.location !== "Online Event"
                ? event.location
                : BUSINESS_INFO.address.streetAddress,
          },
          image: event.heroImageUrl || "/cdpl-logo.png",
          eventStatus: "EventScheduled",
          eventAttendanceMode:
            event.location === "Online Event"
              ? "OnlineEventAttendanceMode"
              : "OfflineEventAttendanceMode",
          performerName: event.subtitle?.replace("by ", "") || SITE_CONFIG.name,
          offers: { price: 0, priceCurrency: "INR" }, // All workshops/listings are free to attend by default
        },
        true,
      ), // Exclude context for nested items
    })),
  });

  // FAQPage schema
  const faqSchema = generateFAQSchema(faqs);

  // ItemList schema explicitly listing events as a directory structure
  const itemListSchema = generateItemListSchema(
    events.slice(0, 15).map((event) => ({
      name: event.title,
      url: `/events/${event.slug}`,
      description: event.subtitle || event.purpose,
      type: "Event",
      date: event.date,
      location: event.location,
      image: event.heroImageUrl,
    })),
    "CDPL Upcoming and Past Events",
  );

  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    collectionPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// EVENT DETAIL PAGE - FULL 8-POINT SCHEMA CONSOLIDATION (dynamic /events/[slug])
// ============================================================================

export function generateEventDetailPageAllSchemas(
  event: {
    title: string;
    subtitle?: string;
    purpose: string;
    slug: string;
    heroImageUrl?: string;
    date: string;
    location: string;
    attendees: number;
    organization: string;
    sessionHighlights?: { title: string; points: string[] }[];
    keyTakeaways?: { title: string; description: string }[];
  },
  allEventsList: {
    title: string;
    slug: string;
    purpose: string;
    date: string;
    location: string;
  }[],
): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  const webPageSchema = generateWebPageSchema({
    name: `${event.title} | CDPL Events`,
    description: (event.subtitle || event.purpose || "").substring(0, 160),
    url: `/events/${event.slug}`,
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // Event Schema
  const eventSchema = generateEventSchema(
    {
      name: event.title,
      description: event.purpose || event.subtitle || event.title,
      startDate: formatDateToISO(event.date),
      endDate: formatDateToISO(event.date.split(" to ")[1] || event.date),
      location: {
        name: event.location,
        address:
          event.location && event.location !== "Online Event"
            ? event.location
            : BUSINESS_INFO.address.streetAddress,
      },
      image: event.heroImageUrl || "/cdpl-logo.png",
      eventStatus: "EventScheduled",
      eventAttendanceMode:
        event.location === "Online Event"
          ? "OnlineEventAttendanceMode"
          : "OfflineEventAttendanceMode",
      performerName: event.organization || SITE_CONFIG.name,
      offers: { price: 0, priceCurrency: "INR" },
    },
    false,
  );

  // Dynamic FAQPage based on event properties
  const faqs: { question: string; answer: string }[] = [];

  faqs.push({
    question: `What was the ${event.title} about?`,
    answer:
      event.purpose ||
      event.subtitle ||
      `Detailed discussion on ${event.title}.`,
  });

  if (event.sessionHighlights && event.sessionHighlights.length > 0) {
    faqs.push({
      question: `What were the key highlights of the ${event.title}?`,
      answer: `The sessions covered: ${event.sessionHighlights
        .slice(0, 3)
        .map((h) => h.title)
        .join(", ")}.`,
    });
  }

  if (event.keyTakeaways && event.keyTakeaways.length > 0) {
    faqs.push({
      question: `What did participants gain from the ${event.title}?`,
      answer: event.keyTakeaways
        .slice(0, 3)
        .map((t) => `${t.title} - ${t.description}`)
        .join(" "),
    });
  }

  faqs.push({
    question: `Where was the ${event.title} held?`,
    answer: `The event was organized at ${event.location}.`,
  });

  faqs.push({
    question: `How many people attended the ${event.title}?`,
    answer: `The event was successfully attended by ${event.attendees}+ participants.`,
  });

  const faqSchema = generateFAQSchema(faqs);

  // ItemList — Directory of all events
  const itemListSchema = generateItemListSchema(
    allEventsList.slice(0, 15).map((e) => ({
      name: e.title,
      url: `/events/${e.slug}`,
      description: e.purpose,
      type: "Event",
      date: e.date,
      location: e.location,
    })),
    `CDPL Events Directory`,
  );

  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    eventSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// OUR TEAM PAGE - FULL 8-POINT SCHEMA CONSOLIDATION (/our-team)
// ============================================================================

export function generateOurTeamPageAllSchemas(
  trainers: {
    name: string;
    role: string;
    avatar: string;
    yearsExp: number;
    specialties: string[];
  }[],
  leaders: {
    name: string;
    title: string;
    experience: string;
    specialization: string;
  }[],
): WithContext<Record<string, unknown>>[] {
  const webPageSchema = generateWebPageSchema({
    name: "Our Team - Expert Trainers & Mentors | CDPL",
    description:
      "Meet CDPL's team of expert trainers and mentors with extensive industry experience in Software Testing, Data Science, AI/ML, and Automation.",
    url: "/our-team",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // ItemList for Trainers & Leaders
  const itemListSchema = generateItemListSchema(
    [
      ...leaders.map((leader) => ({
        name: leader.name,
        description: `${leader.title} - ${leader.experience} experience. Specialized in ${leader.specialization}.`,
        url: "/our-team",
      })),
      ...trainers.map((trainer) => ({
        name: trainer.name,
        description: `${trainer.role} - ${trainer.yearsExp} Years Experience. Expert in ${trainer.specialties.slice(0, 3).join(", ")}.`,
        url: "/our-team",
        image: trainer.avatar,
      })),
    ],
    "Expert Mentors and Leadership Team at CDPL",
  );

  // FAQPage for Team Page
  const faqSchema = generateFAQSchema([
    {
      question: "Who are the trainers at CDPL?",
      answer:
        "CDPL trainers are industry veterans with extensive experience in Software Testing, Data Science, and AI/ML, having worked with top-tier tech companies.",
    },
    {
      question: "Can I get 1-on-1 mentorship from the team?",
      answer:
        "Yes, our mentors provide personalized guidance, career counseling, and project-based feedback to all enrolled students.",
    },
    {
      question: "What certifications do the mentors hold?",
      answer:
        "Our team includes ISTQB certified professionals, certified Scrum Masters, and industry-recognized experts in Automation and Data Science.",
    },
  ]);

  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// MENTORS PAGE - FULL 8-POINT SCHEMA CONSOLIDATION (/mentors)
// ============================================================================

export function generateMentorsPageAllSchemas(
  mentors: {
    name: string;
    title: string;
    avatar?: string;
    company?: string;
    domain: string;
    bio?: string;
  }[],
): WithContext<Record<string, unknown>>[] {
  const webPageSchema = generateWebPageSchema({
    name: "Our Mentors - Expert Industry Professionals | CDPL",
    description:
      "Meet our global network of mentors from top tech companies like Infosys, Oracle, Deloitte, and KPMG. Get 1-on-1 career guidance and technical mentorship.",
    url: "/mentors",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // ItemList for Mentors
  const itemListSchema = generateItemListSchema(
    mentors.map((mentor) => ({
      name: mentor.name,
      description: `${mentor.title} at ${mentor.company || "Top Tech Company"}. Specialist in ${mentor.domain}.`,
      url: "/mentors",
      image: mentor.avatar,
      type: "Person" as const,
    })),
    "Industry Expert Mentors at CDPL",
  );

  // FAQPage for Mentors Page
  const faqSchema = generateFAQSchema([
    {
      question: "How can CDPL mentors help me in my career?",
      answer:
        "Our mentors provide 1-on-1 guidance, resume reviews, mock interviews, and technical deep-dives into QA, Data Science, and Engineering based on their real-world experience at top firms.",
    },
    {
      question: "Are the mentors actually from top tech companies?",
      answer:
        "Yes, our mentors currently work at or have extensive experience with companies like Infosys, Deloitte, Oracle, KPMG, and Deutsche Bank.",
    },
    {
      question: "Is there a cost for mentorship at CDPL?",
      answer:
        "Mentorship is an integral part of our professional training programs. Students enrolled in our courses get unlimited access to mentor-led workshops and 1-on-1 sessions.",
    },
  ]);

  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// LIVE JOBS PAGE - FULL 8-POINT SCHEMA CONSOLIDATION (/jobs/live-jobs)
// ============================================================================

export function generateLiveJobsPageAllSchemas(
  jobs: { id?: string; title: string; company: string; location: string; type: string }[],
): WithContext<Record<string, unknown>>[] {
  const webPageSchema = generateWebPageSchema({
    name: "Live Jobs & Placement Alerts | Verified Engineering & QA Jobs - CDPL",
    description:
      "Access verified live jobs, walk-in drives, and internship alerts curated by CDPL. We filter openings from top tech companies across India for freshers and experienced professionals.",
    url: "/jobs/live-jobs",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // ItemList for Live Jobs
  // Each item points at its OWN detail page. Previously every ListItem carried
  // the identical url "/jobs/live-jobs", which gave the list no discovery value
  // — it is now the listing page's primary job signal, since the per-job
  // JobPosting blocks that used to live here were removed (they belong on the
  // detail page that carries the full description).
  const itemListSchema = generateItemListSchema(
    jobs.map((job) => ({
      name: `${job.title} at ${job.company}`,
      description: `${job.type} role based in ${job.location}. Placement alert from CDPL.`,
      url: job.id ? `/jobs/live-jobs/${job.id}` : "/jobs/live-jobs",
    })),
    "Latest Live Jobs and Walk-in Drives Curated by CDPL",
  );

  // FAQPage for Live Jobs Page
  const faqSchema = generateFAQSchema([
    {
      question: "Are these jobs verified by CDPL?",
      answer:
        "Yes, all jobs posted on our Live Jobs portal are verified by our placement cell for legitimacy before being shared with our community.",
    },
    {
      question: "Who can apply for these jobs?",
      answer:
        "Opportunities range from entry-level trainee roles for freshers (2022-2026 passouts) to senior roles with 10+ years of experience across QA, Data, and Engineering.",
    },
    {
      question: "How do I get placement support from CDPL?",
      answer:
        "Students enrolled in our certification programs get premium placement support, including resume building, mock interviews, and direct referrals to our hiring partner network.",
    },
  ]);

  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// PLACEMENTS PAGE - FULL 8-POINT SCHEMA CONSOLIDATION (/jobs/placements)
// ============================================================================

export function generatePlacementsPageAllSchemas(
  placements: { name: string; company: string; domain: string }[],
): WithContext<Record<string, unknown>>[] {
  const webPageSchema = generateWebPageSchema({
    name: "Student Placements & Alumni Success Stories | CDPL Placement Cell",
    description:
      "Explore CDPL's track record of successful student placements in top tech companies like TCS, Infosys, and Accenture. See how our product-led training leads to high-package job outcomes.",
    url: "/jobs/placements",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // ItemList for Placements (Successful Alumni)
  const itemListSchema = generateItemListSchema(
    placements.slice(0, 20).map((p) => ({
      name: `${p.name} - Placed at ${p.company}`,
      description: `Successful career transition into ${p.domain} role via CDPL training.`,
      url: "/jobs/placements",
    })),
    "Recent Successful Student Placements from CDPL",
  );

  // FAQPage for Placements Page
  const faqSchema = generateFAQSchema(
    PLACEMENTS_FAQS.map(({ question, answer }) => ({ question, answer })),
  );

  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// CAREERS PAGE - FULL 8-POINT SCHEMA CONSOLIDATION (/jobs/careers)
// ============================================================================

export function generateCareersPageAllSchemas(
  jobs: { title: string; location: string; type: string }[],
): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  const webPageSchema = generateWebPageSchema({
    name: "Careers at CDPL - Join the Future of Tech Education",
    description:
      "Explore high-impact career opportunities at CDPL. Build innovative EdTech products, mentor the next generation of tech talent, and grow with a product-led team.",
    url: "/jobs/careers",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // ItemList for Open Roles
  const itemListSchema = generateItemListSchema(
    jobs.map((job) => ({
      name: job.title,
      description: `${job.type} position based in ${job.location}. Join the CDPL core team.`,
      url: "/jobs/careers",
    })),
    "Open Career Opportunities at CDPL",
  );

  // FAQPage for Careers Page — same list the page shows
  const faqSchema = generateFAQSchema(
    CAREERS_FAQS.map(({ question, answer }) => ({ question, answer })),
  );

  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// JOB OPENINGS PAGE - FULL 8-POINT SCHEMA CONSOLIDATION (/jobs/job-openings)
// ============================================================================

export function generateJobOpeningsPageAllSchemas(
  jobs: {
    job_title: string;
    location?: string | null;
    job_type: string;
    description?: string;
  }[],
): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  const webPageSchema = generateWebPageSchema({
    name: "Tech Job Openings & Career Opportunities | CDPL Partner Portal",
    description:
      "Browse curated tech job openings from global companies through the CDPL partner portal. Discover roles in QA, Data Science, and Engineering with direct application support.",
    url: "/jobs/job-openings",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // ItemList for Partner Jobs
  const itemListSchema = generateItemListSchema(
    jobs.slice(0, 15).map((job) => ({
      name: job.job_title,
      description: `${job.job_type} role at a CDPL hiring partner. ${job.location || "Remote"} based position.`,
      url: "/jobs/job-openings",
    })),
    "Latest Curated Job Openings from CDPL Partners",
  );

  // FAQPage for Job Openings Page
  const faqSchema = generateFAQSchema([
    {
      question: "Are these jobs directly with CDPL?",
      answer:
        "These job openings are curated through our partnership with OptimHire, a global recruitment platform. CDPL facilitates the discovery of these roles specifically for our learners and tech community.",
    },
    {
      question: "Is there a fee to apply for these jobs?",
      answer:
        "No, applying for job openings through the CDPL partner portal is completely free for all candidates.",
    },
    {
      question: "How do I track my application status?",
      answer:
        "Once you apply, you will receive confirmation from the OptimHire platform, and you can track your progress directly through their candidate dashboard.",
    },
  ]);

  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// AFFILIATE PROGRAM PAGE SCHEMA CONSOLIDATION (/cdpl-affiliate-program)
// ============================================================================

/**
 * Generate a complete 8-point schema set for the Affiliate Program page.
 * Includes: Organization, WebSite, WebPage, FAQPage, ItemList, and SiteNavigation.
 */
export function generateAffiliateProgram8PointSchema(data: {
  faqs: { question: string; answer: string }[];
  benefits: string[];
}): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 1. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "CDPL Affiliate Program: Earn 25% Commission",
    description:
      "Join the CDPL Affiliate Program and earn recurring commissions by promoting tech training and services.",
    url: "/cdpl-affiliate-program",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 2. FAQPage Schema
  const faqSchema = generateFAQSchema(data.faqs);

  // 3. ItemList Schema (Program Benefits)
  const itemListSchema = generateItemListSchema(
    data.benefits.map((benefit) => ({
      name: benefit,
      url: "/cdpl-affiliate-program",
      type: "Thing",
    })),
    "CDPL Affiliate Program Benefits",
  );

  // 6. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// ISTQB REGISTRATION PAGE SCHEMA CONSOLIDATION (/istqb-registration)
// ============================================================================

/**
 * Generate a complete 8-point schema set for the ISTQB Registration page.
 * Includes: Organization, WebSite, WebPage, FAQPage, ItemList, and SiteNavigation.
 */
export function generateIstqbRegistrationPageAllSchemas(data: {
  faqs: { question: string; answer: string }[];
  levels: string[];
}): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 1. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "ISTQB Certification Registration | Testriq",
    description:
      "Register for ISTQB Certification exams with Testriq. Comprehensive training and exam booking for Foundation, Advanced, and Agile levels.",
    url: "/istqb-registration",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 4. FAQPage Schema
  const faqSchema = generateFAQSchema(data.faqs);

  // 5. ItemList Schema (Certification Levels)
  const itemListSchema = generateItemListSchema(
    data.levels.map((level) => ({
      name: level,
      url: "/istqb-registration",
      type: "Thing",
    })),
    "Available ISTQB Certification Levels",
  );

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// QUIZ SCHEMA
// ============================================================================

/**
 * Generate a Quiz schema for assessment / mock-test pages. (BLG-069)
 *
 * The mock-test landing page lists assessment domains rather than concrete
 * questions, so this emits a domain-level Quiz entity (no `hasPart`
 * Questions). It is still valid structured data that AI engines can read.
 */
export function generateQuizSchema(input: {
  name: string;
  description: string;
  url: string;
  domains: string[];
}): WithContext<Record<string, unknown>> {
  const fullUrl = getFullUrl(input.url);

  return {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "@id": `${fullUrl}#quiz`,
    name: input.name,
    description: input.description,
    url: fullUrl,
    educationalUse: "Assessment",
    learningResourceType: "Quiz",
    inLanguage: "en-IN",
    isAccessibleForFree: true,
    about: input.domains.map((domain) => ({
      "@type": "Thing",
      name: domain,
    })),
    provider: { "@id": getOrganizationId() },
    publisher: { "@id": getOrganizationId() },
  };
}

// ============================================================================
// MOCK TEST PAGE SCHEMA CONSOLIDATION (/mock-test)
// ============================================================================

/**
 * Generate a complete 8-point schema set for the Mock Test landing page.
 * Includes: Organization, WebSite, WebPage, FAQPage, ItemList, and SiteNavigation.
 */
export function generateMockTestPageAllSchemas(data: {
  faqs: { question: string; answer: string }[];
  categories: string[];
}): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 1. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "Free Online Mock Tests & Premium Assessments | Testriq",
    description:
      "Validate your expertise with precision. Industry-standard simulation environments for Software Testing, Cloud, Security, and more.",
    url: "/mock-test",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 4. FAQPage Schema
  const faqSchema = generateFAQSchema(data.faqs);

  // 5. ItemList Schema (Mock Categories)
  const itemListSchema = generateItemListSchema(
    data.categories.map((cat) => ({
      name: cat,
      url: "/mock-test",
      type: "Thing",
    })),
    "Available Mock Test Domains",
  );

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  // 9. Quiz Schema (BLG-069) — domain-level assessment entity.
  const quizSchema = generateQuizSchema({
    name: "CDPL Technical Mock Tests & Assessments",
    description:
      "Industry-standard mock assessments across Software Testing, Databases, Cloud Computing, Test Automation, Cyber Security, and Full Stack Development, with instant scoring.",
    url: "/mock-test",
    domains: data.categories,
  });

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
    quizSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// AAA CERTIFICATION PAGE SCHEMA CONSOLIDATION (/aaa-certification)
// ============================================================================

/**
 * Generate a complete 8-point schema set for the AAA Certification page.
 * Includes: Organization, WebSite, WebPage, FAQPage, ItemList, and SiteNavigation.
 */
export function generateAaaCertificationPageAllSchemas(data: {
  faqs: { question: string; answer: string }[];
  curriculum: string[];
  courseData: CourseSchemaInput;
}): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 1. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "AAA Certification Course | Advanced Automation Architecture",
    description:
      "Master Advanced Automation Architecture with CDPL's 12-week certification program. CI/CD integration, cloud testing, and expert-led labs.",
    url: "/aaa-certification",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 2. Course Schema (integrated)
  const courseSchema = generateCourseSchema(data.courseData);

  // 4. FAQPage Schema
  const faqSchema = generateFAQSchema(data.faqs);

  // 5. ItemList Schema (Curriculum Modules)
  const itemListSchema = generateItemListSchema(
    data.curriculum.map((module) => ({
      name: module,
      url: "/aaa-certification",
      type: "Thing",
    })),
    "AAA Certification Curriculum Modules",
  );

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    courseSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// ACTD CERTIFICATION PAGE SCHEMA CONSOLIDATION (/actd-certification)
// ============================================================================

/**
 * Generate a complete 8-point schema set for the ACTD Certification page.
 * Includes: Organization, WebSite, WebPage, FAQPage, ItemList, and SiteNavigation.
 */
export function generateActdCertificationPageAllSchemas(data: {
  faqs: { question: string; answer: string }[];
  tracks: string[];
  courseData: CourseSchemaInput;
}): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 1. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "ACTD Certification Training | Agile, Cloud & Test-Driven Development",
    description:
      "Master modern testing with CDPL's ACTD program. Intensive 10-week tracks in Agile methodologies, Cloud testing, and TDD with mentor support.",
    url: "/actd-certification",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 2. Course Schema (integrated)
  const courseSchema = generateCourseSchema(data.courseData);

  // 4. FAQPage Schema
  const faqSchema = generateFAQSchema(data.faqs);

  // 5. ItemList Schema (Training Tracks)
  const itemListSchema = generateItemListSchema(
    data.tracks.map((track) => ({
      name: track,
      url: "/actd-certification",
      type: "Thing",
    })),
    "ACTD Certification Training Tracks",
  );

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    courseSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// CERTIFICATE VALIDATION PAGE SCHEMA CONSOLIDATION (/cdpl-certificate-validation)
// ============================================================================

/**
 * Generate a complete 8-point schema set for the Certificate Validation page.
 * Includes: Organization, WebSite, WebPage, FAQPage, ItemList, and SiteNavigation.
 */
export function generateCertificateValidationPageAllSchemas(data: {
  faqs: { question: string; answer: string }[];
  features: string[];
}): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 1. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "CDPL Certificate Validation - Verify AAA & ACTD Certificates Online",
    description:
      "Instantly validate and verify CDPL, AAA, and ACTD certificates online. Professional certificate authenticity verification tool.",
    url: "/cdpl-certificate-validation",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 4. FAQPage Schema
  const faqSchema = generateFAQSchema(data.faqs);

  // 5. ItemList Schema (Validation Features)
  const itemListSchema = generateItemListSchema(
    data.features.map((feature) => ({
      name: feature,
      url: "/cdpl-certificate-validation",
      type: "Thing",
    })),
    "CDPL Certificate Validation Key Features",
  );

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// CMS PAGE SCHEMA CONSOLIDATION (/cms)
// ============================================================================

/**
 * Generate a complete 8-point schema set for the CMS Page.
 * Includes: Organization, WebSite, WebPage, FAQPage, ItemList, and SiteNavigation.
 */
export function generateCmsPageAllSchemas(data: {
  faqs: { question: string; answer: string }[];
  features: string[];
}): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 1. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "Course Management System - Cinute Digital Studio",
    description:
      "Manage course content, SEO metadata, and digital assets via the Cinute Digital CMS. Secure administrative portal for content management.",
    url: "/cms",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 4. FAQPage Schema
  const faqSchema = generateFAQSchema(data.faqs);

  // 5. ItemList Schema (CMS Features)
  const itemListSchema = generateItemListSchema(
    data.features.map((feature) => ({
      name: feature,
      url: "/cms",
      type: "Thing",
    })),
    "Cinute Digital CMS Administrative Features",
  );

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// PRIVACY POLICY PAGE SCHEMA CONSOLIDATION (/privacy-policy)
// ============================================================================

/**
 * Generate a complete 8-point schema set for the Privacy Policy page.
 * Includes: Organization, WebSite, WebPage, FAQPage, ItemList, and SiteNavigation.
 * Consolidates legal information to ensure 100% compliance and accuracy.
 */
export function generatePrivacyPolicyPageAllSchemas(): WithContext<
  Record<string, unknown>
>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 1. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "Privacy Policy | Cinute Digital Private Limited",
    description:
      "Our policies and procedures on the collection, use and disclosure of Your information when You use the Service. Learn about Your privacy rights and how the law protects You.",
    url: "/privacy-policy",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 4. FAQPage Schema (Extracted from Legal Text)
  const faqSchema = generateFAQSchema([
    {
      question: "What personal data does Cinute Digital collect?",
      answer:
        "We collect email addresses, names, phone numbers, addresses, and usage data to provide and improve our services.",
    },
    {
      question: "What are my rights under GDPR?",
      answer:
        "Under GDPR, you have the right to access, correct, object to processing, request erasure, and transfer your personal data.",
    },
    {
      question: "What are my rights under CCPA?",
      answer:
        "Under CCPA, California residents have the right to notice, to request disclosure of data collected, to opt-out of data sales, and to delete personal data.",
    },
    {
      question: "How can I contact the Data Controller?",
      answer:
        `You can contact Cinute Digital Private Limited at ${BUSINESS_INFO.email} or ${BUSINESS_INFO.admissionsPhoneDisplay} for any privacy-related inquiries.`,
    },
  ]);

  // 5. ItemList Schema (Data Protection Rights)
  const itemListSchema = generateItemListSchema(
    [
      "Right to Access",
      "Right to Rectification",
      "Right to Erasure (Forgetfulness)",
      "Right to Restrict Processing",
      "Right to Data Portability",
      "Right to Object",
    ].map((right) => ({
      name: right,
      url: "/privacy-policy",
      type: "Thing",
    })),
    "Cinute Digital Data Protection Rights & Categories",
  );

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// COOKIES POLICY PAGE SCHEMA CONSOLIDATION (/cookies-policy)
// ============================================================================

/**
 * Generate a complete 8-point schema set for the Cookies Policy page.
 * Includes: Organization (TESTRIQ QA Lab), WebSite, WebPage, FAQPage, ItemList, and SiteNavigation.
 * Consolidates legal information to ensure 100% compliance and accuracy.
 */
export function generateCookiesPolicyPageAllSchemas(): WithContext<
  Record<string, unknown>
>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 1. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "Cookies Policy | Cinute Digital Private Limited",
    description:
      "Read the Cookies Policy of Cinute Digital (CDPL). Understand how we use cookies to improve your browsing experience and how you can manage them.",
    url: "/cookies-policy",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": `${getWebsiteId()}#organization` },
  });

  // 4. FAQPage Schema (Extracted from Legal Text)
  const faqSchema = generateFAQSchema([
    {
      question: "What are Cookies?",
      answer:
        "Cookies are small files placed on your device by a website to track your browsing history and improve your experience.",
    },
    {
      question: "Why does Cinute Digital use cookies?",
      answer:
        "We use cookies for essential site functions, remembering your preferences, and analyzing traffic to improve our services.",
    },
    {
      question: "Can I browse Cinute Digital without cookies?",
      answer:
        "Yes, you can disable cookies in your browser, but some features of the website may not function correctly.",
    },
    {
      question: "How can I delete cookies?",
      answer:
        "You can delete cookies through your browser's settings. Popular browsers like Chrome, Firefox, and Safari provide specific privacy controls for this.",
    },
  ]);

  // 5. ItemList Schema (Cookie Categories)
  const itemListSchema = generateItemListSchema(
    [
      "Necessary / Essential Cookies",
      "Functionality Cookies",
      "Tracking and Performance Cookies",
    ].map((category) => ({
      name: category,
      url: "/cookies-policy",
      type: "Thing",
    })),
    "Cinute Digital Cookie Categories",
  );

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// TERMS OF SERVICE PAGE SCHEMA CONSOLIDATION (/terms-of-service)
// ============================================================================

/**
 * Generate a complete 8-point schema set for the Terms of Service page.
 * Includes: Organization, WebSite, WebPage, FAQPage (Placement), ItemList, and SiteNavigation.
 * Ensures 100% legal accuracy for Job Assistance policies.
 */
export function generateTermsOfServicePageAllSchemas(): WithContext<
  Record<string, unknown>
>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 1. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "Terms & Conditions | Cinute Digital Private Limited",
    description:
      "Read the Terms of Service for Cinute Digital (CDPL). Understand our enrollment policies, intellectual property terms, and comprehensive Job Assistance services.",
    url: "/terms-of-service",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": `${getWebsiteId()}#organization` },
  });

  // 4. FAQPage Schema (Placement Assistance specific)
  const faqSchema = generateFAQSchema([
    {
      question: "What are the eligibility parameters for placement assistance?",
      answer:
        "To be eligible, you must be a graduate of a paid masterclass program, maintain at least 90% attendance, complete all fees, and participate in mock interviews.",
    },
    {
      question: "How many interview calls will I receive?",
      answer:
        "The number of interview calls depends on your skills, experience, and industry demand. We strive to connect you with relevant domestic opportunities.",
    },
    {
      question:
        "Am I eligible for job assistance if I am placed through a third party?",
      answer:
        "Yes, you remain eligible for our Job Assistance services even if you secure a job through a third-party recruiter, though fee refunds are not applicable.",
    },
    {
      question: "Can I share my job preference with CDPL?",
      answer:
        "Yes, we encourage you to share your desired roles and companies so our placement officers can prioritize relevant opportunities for you.",
    },
    {
      question:
        "Does CDPL take responsibility for issues with an employer placement?",
      answer:
        "While we research potential employers, we cannot guarantee company culture. We offer ongoing support and guidance should any issues arise.",
    },
  ]);

  // 5. ItemList Schema (Key Policy Sections)
  const itemListSchema = generateItemListSchema(
    [
      "Registration and Enrollment Eligibility",
      "Intellectual Property and Ownership",
      "Job Assistance Commitment",
      "Placement Assistance Parameters",
    ].map((section) => ({
      name: section,
      url: "/terms-of-service",
      type: "Thing",
    })),
    "CDPL Policy & Assistance Framework",
  );

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// CANCELLATION & REFUND POLICY PAGE SCHEMA CONSOLIDATION (/cancellation-refund-policy)
// ============================================================================

/**
 * Generate a complete 8-point schema set for the Cancellation & Refund Policy page.
 * Includes: Organization, WebSite, WebPage, FAQPage (Refunds), ItemList, and SiteNavigation.
 * Ensures 100% legal accuracy for Refund and Batch Change policies.
 */
export function generateCancellationRefundPolicyPageAllSchemas(): WithContext<
  Record<string, unknown>
>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 1. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "Cancellation/Refund Policy | Cinute Digital Private Limited",
    description:
      "Read the Cancellation and Refund Policy for Cinute Digital (CDPL). Learn about full refunds before batch starts, 50% partial refunds during demo, and batch change flexibility.",
    url: "/cancellation-refund-policy",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": `${getWebsiteId()}#organization` },
  });

  // 4. FAQPage Schema (Refund/Cancellation specific)
  const faqSchema = generateFAQSchema([
    {
      question: "What is the policy for a full refund?",
      answer:
        "A full refund, including applicable fees, is issued for cancellations made in advance before the batch start date.",
    },
    {
      question: "Is there a partial refund during the demo sessions?",
      answer:
        "Yes, cancellations made during the first 2 demo sessions are eligible for a 50% refund, excluding certificate exam booking fees.",
    },
    {
      question: "Which fees are non-refundable?",
      answer:
        "Certificate exam booking fees are non-refundable and non-transferable.",
    },
    {
      question: "How long does it take to process a refund?",
      answer:
        "Refunds are typically processed within 15 business days after receiving your formal cancellation request.",
    },
    {
      question: "Can I change my batch after the course starts?",
      answer:
        "You can change your batch for free if you notify us before reaching 50% completion. After 50%, a batch change fee applies (Rs. 5,000 to Rs. 10,000 depending on the course).",
    },
  ]);

  // 5. ItemList Schema (Key Policy Milestones)
  const itemListSchema = generateItemListSchema(
    [
      "Full Refund: Before Batch Start",
      "50% Partial Refund: During Demo Sessions",
      "No Refund: After Demo Completion",
      "15-Day Refund Processing Timeframe",
      "Batch Change Flexibility Window",
    ].map((section) => ({
      name: section,
      url: "/cancellation-refund-policy",
      type: "Thing",
    })),
    "CDPL Cancellation & Refund Tiers",
  );

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// REVIEWS PAGE SCHEMA CONSOLIDATION (/reviews)
// ============================================================================

/**
 * Generate a complete 8-point schema set for the Reviews & Testimonials page.
 * Includes: Organization, WebSite, WebPage, FAQPage, ItemList, and SiteNavigation.
 */
export function generateReviewsPageAllSchemas(
  reviews: { author: string; rating: number; text: string; role?: string }[],
): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 1. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: "Authentic Student Reviews & Testimonials | CDPL",
    description:
      `Read ${STATISTICS.reviewCount}+ authentic student reviews and success stories for CDPL's software testing, data science, and AI/ML courses.`,
    url: "/reviews",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 4. FAQPage Schema
  const faqSchema = generateFAQSchema([
    {
      question: "Are CDPL student reviews authentic?",
      answer:
        "Yes, 100% of our reviews come from verified students who have completed our training programs and achieved career breakthroughs.",
    },
    {
      question: "How are CDPL reviews collected?",
      answer:
        "We collect feedback through post-course surveys, placement success interviews, and direct student submissions to ensure transparency.",
    },
    {
      question: "What is CDPL's overall student rating?",
      answer: `CDPL is proudly rated ${STATISTICS.rating}/5 based on ${STATISTICS.reviewCount} verified student reviews.`,
    },
  ]);

  // 5. ItemList Schema (Featured Success Stories)
  const itemListSchema = generateItemListSchema(
    reviews.slice(0, 15).map((r) => ({
      name: `Success Story: ${r.author} (${r.role || "Student"})`,
      description: r.text.substring(0, 150) + "...",
      url: "/reviews",
      type: "Thing",
    })),
    "Top Student Success Stories and Testimonials",
  );

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// CITY COURSE PAGE SCHEMA CONSOLIDATION (/{courses}-in-{city})
// ============================================================================

/**
 * Generate a city-scoped LocalBusiness schema for city-course pages.
 *
 * BLG-062: city-course pages previously emitted no LocalBusiness entity at
 * all. This uses the single verified Mira Road HQ address (NAP consistency —
 * we never invent a per-city address) and declares the served city via
 * `areaServed`, so each of the 765 city pages contributes a local-SEO entity.
 */
export function generateCityLocalBusinessSchema(
  city: string,
  pageUrl: string,
): WithContext<Record<string, unknown>> {
  const fullUrl = getFullUrl(pageUrl);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${fullUrl}#localbusiness`,
    name: `Cinute Digital (CDPL) — Training for ${city}`,
    url: fullUrl,
    image: getImageUrl(SITE_CONFIG.defaultOgImage),
    telephone: BUSINESS_INFO.phone,
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    areaServed: {
      "@type": "City",
      name: city,
    },
    parentOrganization: {
      "@id": getOrganizationId(),
    },
    currenciesAccepted: "INR",
  };
}

/**
 * Generate a complete 8-point schema set for city-specific course pages.
 * Includes: Organization, WebSite, WebPage, FAQPage, ItemList, Course (AggregateRating), and SiteNavigation.
 */
export function generateCityCoursePageSchema(
  courseInput: CourseSchemaInput,
  faqs: { question: string; answer: string }[],
  city: string,
): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  // 1. WebPage Schema
  const webPageSchema = generateWebPageSchema({
    name: courseInput.name,
    description: courseInput.description,
    url: courseInput.url,
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // 4. FAQPage Schema
  const faqSchema = generateFAQSchema(faqs);

  // 5. ItemList Schema (Course Features/Outcomes)
  const itemListSchema = generateItemListSchema(
    (courseInput.learningOutcomes || []).slice(0, 8).map((outcome) => ({
      name: outcome,
      url: courseInput.url,
      type: "Thing",
    })),
    `${courseInput.name} Key Features & Learning Outcomes`,
  );

  // 6. Course Schema (contains Aggregate Rating)
  const courseSchema = generateCourseSchema(courseInput);

  // 8. Site Navigation Schema
  const siteNavigationSchema = generateSiteNavigationSchema();

  // 9. City-scoped LocalBusiness (BLG-062), restricted to the campus city.
  //
  // T-04 (local-SEO audit, Oct 2026): BLG-062 emitted this for all 765 city
  // pages, which contradicts the rule stated in cityTiers.ts — pages for
  // cities without a physical centre "must NOT imply a local centre, carry a
  // local street address, or emit `LocalBusiness` schema". The HQ address and
  // `areaServed` were accurate, but a LocalBusiness entity per city still
  // asserts a local presence that only Mira Road has.
  // Gate on the slug token, not the `city` display name: `city` arrives as
  // "Mira Road" (from `courseData[].location`), which never equals the
  // hyphenated CAMPUS_CITY, so comparing it dropped the entity from the
  // campus page too and left LocalBusiness on no city page at all.
  const citySlugToken = getCityFromSlug(courseInput.slug);
  const cityLocalBusinessSchema =
    citySlugToken === CAMPUS_CITY
      ? generateCityLocalBusinessSchema(city, courseInput.url)
      : undefined;

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    courseSchema,
    siteNavigationSchema,
    cityLocalBusinessSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================
// LOCATIONS WE SERVE PAGE - FULL 8-POINT SCHEMA CONSOLIDATION (/locations-we-serve)
// ============================================================================

export function generateLocationsPageAllSchemas(
  locations: string[],
): WithContext<Record<string, unknown>>[] {
  // NOTE: Organization and WebSite schemas are handled by Root Layout

  const webPageSchema = generateWebPageSchema({
    name: "Our Global Presence & Training Locations | CDPL",
    description:
      "Explore CDPL's 50+ training centers across India and the UAE. Find the nearest hub for software testing, data science, and programming courses in your city.",
    url: "/locations-we-serve",
    isPartOf: { "@id": getWebsiteId() },
    about: { "@id": getOrganizationId() },
  });

  // ItemList for Locations (Major Cities/States/Countries)
  const itemListSchema = generateItemListSchema(
    locations.slice(0, 30).map((loc) => {
      let type: "Country" | "State" | "City" = "City";
      if (loc === "India" || loc === "UAE") type = "Country";
      else if (
        [
          "Maharashtra",
          "Karnataka",
          "Delhi",
          "Dubai",
          "Abu Dhabi",
          "Sharjah",
        ].includes(loc)
      )
        type = "State";

      return {
        name: `CDPL Training Center in ${loc}`,
        description: `Comprehensive tech education and placement support available in ${loc}.`,
        url: "/locations-we-serve",
        type: type,
      };
    }),
    "Major Cities and Regions Served by CDPL",
  );

  // FAQPage for Locations Page
  const faqSchema = generateFAQSchema([
    {
      question: "Where is CDPL's main headquarters located?",
      answer:
        "CDPL’s campus is in Mira Road East, Mira Bhayandar, Maharashtra, India. Courses for other cities are delivered live-online by the same trainers — CDPL does not operate separate centres in those cities.",
    },
    {
      question:
        "Does CDPL provide physical classroom training in all these locations?",
      answer:
        "We offer a mix of physical centers for collaborative learning and a robust 'Online-Live' infrastructure that serves students in 50+ cities across India and the UAE.",
    },
    {
      question: "Are the course certifications valid globally?",
      answer:
        "Yes, CDPL certifications are ISO 9001:2015 certified and recognized by our hiring partner network.",
    },
  ]);

  const siteNavigationSchema = generateSiteNavigationSchema();

  return [
    webPageSchema,
    faqSchema,
    itemListSchema,
    siteNavigationSchema,
  ].filter(
    (schema): schema is WithContext<Record<string, unknown>> =>
      schema !== undefined,
  );
}

// ============================================================================

// JOB POSTING SCHEMA
// ============================================================================

interface JobPostingInput {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType?: string | string[];
  hiringOrganization: {
    name: string;
    sameAs?: string;
    logo?: string;
  };
  jobLocation: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  baseSalary?: {
    currency: string;
    value: number | { minValue: number; maxValue: number; unitText: string };
  };
  url?: string;
}

/**
 * Generate JobPosting Schema
 */
export function generateJobPostingSchema(
  job: JobPostingInput,
): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: job.hiringOrganization.name,
      sameAs: job.hiringOrganization.sameAs,
      logo: job.hiringOrganization.logo,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: job.jobLocation.streetAddress,
        addressLocality: job.jobLocation.addressLocality,
        addressRegion: job.jobLocation.addressRegion,
        postalCode: job.jobLocation.postalCode,
        addressCountry: job.jobLocation.addressCountry,
      },
    },
    baseSalary: job.baseSalary
      ? {
          "@type": "MonetaryAmount",
          currency: job.baseSalary.currency,
          value:
            typeof job.baseSalary.value === "number"
              ? {
                  "@type": "QuantitativeValue",
                  value: job.baseSalary.value,
                  unitText: "YEAR",
                }
              : {
                  "@type": "QuantitativeValue",
                  minValue: job.baseSalary.value.minValue,
                  maxValue: job.baseSalary.value.maxValue,
                  unitText: job.baseSalary.value.unitText,
                },
        }
      : undefined,
    url: job.url ? getFullUrl(job.url) : undefined,
  };
}

// ============================================================================
// BLOG SCHEMA
// ============================================================================

/**
 * Generate Blog schema for the main blog page
 */
export function generateBlogSchema(input: {
  name: string;
  description: string;
  url: string;
}): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${getFullUrl(input.url)}#blog`,
    url: getFullUrl(input.url),
    name: input.name,
    description: input.description,
    publisher: {
      "@id": getOrganizationId(),
    },
    inLanguage: "en-IN",
  };
}

// ============================================================================
// COLLECTION PAGE SCHEMA (for Categories)
// ============================================================================

/**
 * Generate CollectionPage schema for category pages
 */
export function generateCollectionPageSchema(input: {
  name: string;
  description: string;
  url: string;
  hasPart?: Record<string, unknown>[]; // For ItemList
}): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${getFullUrl(input.url)}#collectionpage`,
    url: getFullUrl(input.url),
    name: input.name,
    description: input.description,
    isPartOf: {
      "@id": getWebsiteId(),
    },
    ...(input.hasPart && { hasPart: input.hasPart }),
    inLanguage: "en-IN",
  };
}

// ============================================================================
// WEB PAGE SCHEMA
// ============================================================================

interface WebPageSchemaInput {
  name: string;
  description: string;
  url: string;
  isPartOf?: Record<string, unknown>;
  about?: Record<string, unknown>;
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(
  page: WebPageSchemaInput,
): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${getFullUrl(page.url)}#webpage`,
    url: getFullUrl(page.url),
    name: page.name,
    description: page.description,
    ...(page.isPartOf && { isPartOf: page.isPartOf }),
    ...(page.about && { about: page.about }),
    inLanguage: "en-IN",
  };
}
// ============================================================================
// SERVICE SCHEMA
// ============================================================================

interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  providerName?: string;
  areaServed?: string;
  image?: string;
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(
  service: ServiceSchemaInput,
): WithContext<Record<string, unknown>> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${getFullUrl(service.url)}#service`,
    url: getFullUrl(service.url),
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    provider: {
      "@id": getOrganizationId(),
    },
    areaServed: {
      "@type": "Country",
      name: service.areaServed || "India",
    },
    ...(service.image && { image: getImageUrl(service.image) }),
    inLanguage: "en-IN",
  };
}
