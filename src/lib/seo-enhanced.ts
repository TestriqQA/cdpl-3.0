/**
 * Enhanced SEO Utilities for CDPL
 * 
 * Features:
 * - Generative Engine Optimization (GEO)
 * - AI Tool Visibility (ChatGPT, Claude, Gemini, Perplexity)
 * - Rich Structured Data (Schema.org)
 * - Knowledge Graph Optimization
 * - Semantic HTML Enhancement
 */


const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cinutedigital.com';
const SITE_NAME = 'CDPL - Cinute Digital';
const ORGANIZATION_NAME = 'Cinute Digital Private Limited';

// ========================================
// ORGANIZATION SCHEMA (Knowledge Graph)
// ========================================
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: ORGANIZATION_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/cdpl-logo.png`,
    description: 'Leading EdTech company providing industry-focused training in Software Testing, Data Science, AI/ML, and Digital Marketing with 100% placement support.',
    
    // Contact Information
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-XXXXXXXXXX',
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
    ],
    
    // Social Media Profiles (Knowledge Graph)
    sameAs: [
      'https://www.facebook.com/cinutedigital',
      'https://www.linkedin.com/company/cinutedigital',
      'https://twitter.com/cinutedigital',
      'https://www.instagram.com/cinutedigital',
      'https://www.youtube.com/@cinutedigital',
    ],
    
    // Educational Credentials
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certificate',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Industry Partners',
      },
    },
    
    // Services Offered
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Training Courses',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Software Testing Training',
            description: 'Comprehensive software testing course with manual and automation testing',
            provider: {
              '@type': 'EducationalOrganization',
              '@id': `${SITE_URL}/#organization`,
              name: SITE_NAME,
              url: SITE_URL,
            },
            offers: {
              '@type': 'Offer',
              price: '0', // Placeholder: Use 0 or a low value if price is not fixed or known, or a representative price
              priceCurrency: 'INR',
              category: 'Paid',
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'online',
              courseWorkload: 'P3M', // Placeholder: 3 Months
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'Data Science Training',
            description: 'Complete data science course with Python, ML, and AI',
            provider: {
              '@type': 'EducationalOrganization',
              '@id': `${SITE_URL}/#organization`,
              name: SITE_NAME,
              url: SITE_URL,
            },
            offers: {
              '@type': 'Offer',
              price: '0', // Placeholder: Use 0 or a low value if price is not fixed or known, or a representative price
              priceCurrency: 'INR',
              category: 'Paid',
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'online',
              courseWorkload: 'P4M', // Placeholder: 4 Months
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'AI & Machine Learning Training',
            description: 'Advanced AI/ML course with hands-on projects',
            provider: {
              '@type': 'EducationalOrganization',
              '@id': `${SITE_URL}/#organization`,
              name: SITE_NAME,
              url: SITE_URL,
            },
            offers: {
              '@type': 'Offer',
              price: '0', // Placeholder: Use 0 or a low value if price is not fixed or known, or a representative price
              priceCurrency: 'INR',
              category: 'Paid',
            },
            hasCourseInstance: {
              '@type': 'CourseInstance',
              courseMode: 'online',
              courseWorkload: 'P5M', // Placeholder: 5 Months
            },
          },
        },
      ],
    },
  };
}

// ========================================
// WEBSITE SCHEMA (Knowledge Graph)
// ========================================
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: 'Professional training in Software Testing, Data Science, AI/ML with 100% placement support',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    
    // Search Action (for Google Search Box)
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  
  };
}

// ========================================
// EDUCATIONAL COURSE SCHEMA (GEO Optimized)
// ========================================
export function generateEnhancedCourseSchema(course: {
  name: string;
  description: string;
  url: string;
  price?: number;
  currency?: string;
  duration?: string;
  image?: string;
  syllabus?: string[];
  prerequisites?: string[];
  learningOutcomes?: string[];
  instructor?: string;
  rating?: number;
  reviewCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${SITE_URL}${course.url}#course`,
    name: course.name,
    description: course.description,
    url: `${SITE_URL}${course.url}`,
    
    // Provider Information
    provider: {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    
    // Image
    ...(course.image && {
      image: course.image.startsWith('http') ? course.image : `${SITE_URL}${course.image}`,
    }),
    
    // Course Instance
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['online', 'blended'],
      courseWorkload: course.duration || 'P3M', // 3 months
      instructor: course.instructor ? {
        '@type': 'Person',
        name: course.instructor,
      } : undefined,
    },
    
    // Pricing
    ...(course.price && {
      offers: {
        '@type': 'Offer',
        category: 'Paid',
        priceCurrency: course.currency || 'INR',
        price: course.price,
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString(),
      },
    }),
    
    // Educational Level
    educationalLevel: 'Beginner to Advanced',
    
    // Course Prerequisites
    ...(course.prerequisites && course.prerequisites.length > 0 && {
      coursePrerequisites: course.prerequisites.map(prereq => ({
        '@type': 'AlignmentObject',
        alignmentType: 'prerequisite',
        targetName: prereq,
      })),
    }),
    
    // Learning Outcomes (GEO Optimization)
    ...(course.learningOutcomes && course.learningOutcomes.length > 0 && {
      teaches: course.learningOutcomes,
    }),
    
    // Syllabus (GEO Optimization)
    ...(course.syllabus && course.syllabus.length > 0 && {
      syllabusSections: course.syllabus.map((section, index) => ({
        '@type': 'Syllabus',
        position: index + 1,
        name: section,
      })),
    }),
    
    // Aggregate Rating
    ...(course.rating && course.reviewCount && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: course.rating,
        reviewCount: course.reviewCount,
        bestRating: 5,
      },
    }),
  };
}

// ========================================
// ARTICLE SCHEMA (Blog Posts - GEO Optimized)
// ========================================
export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image?: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  keywords?: string[];
  wordCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE_URL}${article.url}#article`,
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}${article.url}`,
    
    // Image
    ...(article.image && {
      image: {
        '@type': 'ImageObject',
        url: article.image.startsWith('http') ? article.image : `${SITE_URL}${article.image}`,
        width: 1200,
        height: 630,
      },
    }),
    
    // Author
    author: {
      '@type': 'Person',
      name: article.author,
      url: `${SITE_URL}/mentors`,
    },
    
    // Publisher
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/cdpl-logo.png`,
      },
    },
    
    // Dates
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    
    // Keywords (GEO Optimization)
    ...(article.keywords && article.keywords.length > 0 && {
      keywords: article.keywords.join(', '),
    }),
    
    // Word Count (GEO Optimization)
    ...(article.wordCount && {
      wordCount: article.wordCount,
    }),
    
    // Main Entity
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${article.url}`,
    },
    
    // Article Section
    articleSection: 'Education & Technology',
    
    // In Language
    inLanguage: 'en-IN',
  };
}

// ========================================
// HOW-TO SCHEMA (Tutorial Content - GEO Optimized)
// ========================================
export function generateHowToSchema(howTo: {
  name: string;
  description: string;
  url: string;
  image?: string;
  totalTime?: string;
  estimatedCost?: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
  }>;
  tools?: string[];
  supplies?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    url: `${SITE_URL}${howTo.url}`,
    
    ...(howTo.image && {
      image: howTo.image.startsWith('http') ? howTo.image : `${SITE_URL}${howTo.image}`,
    }),
    
    ...(howTo.totalTime && { totalTime: howTo.totalTime }),
    ...(howTo.estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'INR',
        value: howTo.estimatedCost,
      },
    }),
    
    // Steps
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && {
        image: step.image.startsWith('http') ? step.image : `${SITE_URL}${step.image}`,
      }),
    })),
    
    // Tools
    ...(howTo.tools && howTo.tools.length > 0 && {
      tool: howTo.tools.map(tool => ({
        '@type': 'HowToTool',
        name: tool,
      })),
    }),
    
    // Supplies
    ...(howTo.supplies && howTo.supplies.length > 0 && {
      supply: howTo.supplies.map(supply => ({
        '@type': 'HowToSupply',
        name: supply,
      })),
    }),
  };
}

// ========================================
// JOB POSTING SCHEMA (Career Pages)
// ========================================
export function generateJobPostingSchema(job: {
  title: string;
  description: string;
  url: string;
  datePosted: string;
  validThrough?: string;
  employmentType: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'INTERN';
  location?: string;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  experienceRequirements?: string;
  educationRequirements?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    url: `${SITE_URL}${job.url}`,
    datePosted: job.datePosted,
    ...(job.validThrough && { validThrough: job.validThrough }),
    
    // Hiring Organization
    hiringOrganization: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    
    // Employment Type
    employmentType: job.employmentType,
    
    // Job Location
    ...(job.location && {
      jobLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: job.location,
          addressCountry: 'IN',
        },
      },
    }),
    
    // Salary
    ...(job.salary && {
      baseSalary: {
        '@type': 'MonetaryAmount',
        currency: job.salary.currency,
        value: {
          '@type': 'QuantitativeValue',
          minValue: job.salary.min,
          maxValue: job.salary.max,
          unitText: 'YEAR',
        },
      },
    }),
    
    // Requirements
    ...(job.experienceRequirements && {
      experienceRequirements: {
        '@type': 'OccupationalExperienceRequirements',
        monthsOfExperience: job.experienceRequirements,
      },
    }),
    ...(job.educationRequirements && {
      educationRequirements: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: job.educationRequirements,
      },
    }),
  };
}

// ========================================
// EVENT SCHEMA (Webinars, Workshops)
// ========================================
export function generateEventSchema(event: {
  name: string;
  description: string;
  url: string;
  startDate: string;
  endDate?: string;
  location?: string;
  isOnline?: boolean;
  image?: string;
  price?: number;
  currency?: string;
  organizer?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    url: `${SITE_URL}${event.url}`,
    startDate: event.startDate,
    ...(event.endDate && { endDate: event.endDate }),
    
    // Event Attendance Mode
    eventAttendanceMode: event.isOnline 
      ? 'https://schema.org/OnlineEventAttendanceMode'
      : 'https://schema.org/OfflineEventAttendanceMode',
    
    // Event Status
    eventStatus: 'https://schema.org/EventScheduled',
    
    // Location
    location: event.isOnline ? {
      '@type': 'VirtualLocation',
      url: `${SITE_URL}${event.url}`,
    } : {
      '@type': 'Place',
      name: event.location || 'CDPL Training Center',
      address: {
        '@type': 'PostalAddress',
        addressLocality: event.location || 'India',
        addressCountry: 'IN',
      },
    },
    
    // Image
    ...(event.image && {
      image: event.image.startsWith('http') ? event.image : `${SITE_URL}${event.image}`,
    }),
    
    // Organizer
    organizer: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: event.organizer || SITE_NAME,
      url: SITE_URL,
    },
    
    // Offers
    ...(event.price !== undefined && {
      offers: {
        '@type': 'Offer',
        url: `${SITE_URL}${event.url}`,
        price: event.price,
        priceCurrency: event.currency || 'INR',
        availability: 'https://schema.org/InStock',
        validFrom: new Date().toISOString(),
      },
    }),
  };
}

// ========================================
// VIDEO OBJECT SCHEMA (Tutorial Videos)
// ========================================
export function generateVideoSchema(video: {
  name: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl.startsWith('http') ? video.thumbnailUrl : `${SITE_URL}${video.thumbnailUrl}`,
    uploadDate: video.uploadDate,
    ...(video.duration && { duration: video.duration }),
    ...(video.contentUrl && { contentUrl: video.contentUrl }),
    ...(video.embedUrl && { embedUrl: video.embedUrl }),
    
    // Publisher
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/cdpl-logo.png`,
      },
    },
  };
}

// ========================================
// USAGE NOTES
// ========================================

/**
 * USAGE: How to inject schemas into your React components
 * 
 * In your .tsx component file:
 * 
 * @example
 * ```tsx
 * import { generateCourseSchema } from '@/lib/seo-enhanced';
 * 
 * export default function CoursePage() {
 *   const schema = generateCourseSchema({ name: 'Software Testing', ... });
 *   
 *   return (
 *     <>
 *       <script 
 *         type="application/ld+json" 
 *         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
 *       />
 *       <article>Your course content</article>
 *     </>
 *   );
 * }
 * ```
 */
