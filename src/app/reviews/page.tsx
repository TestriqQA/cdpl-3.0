import type { Metadata } from "next";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
  generateReviewSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateReviewsPageAllSchemas
} from "@/lib/schema-generators";
import { STATISTICS } from "@/lib/seo-config";
import { getAllReviews } from "src/data/reviews/reviewsData";
import JsonLd from "@/components/JsonLd";

// Revalidate content periodically (change to 0 if you fetch SSR)
export const revalidate = 120;

// ---------- Sections (direct imports) ----------
// These were previously wrapped in next/dynamic(..., { ssr: true, loading }).
// In the App Router that gives NO lazy-loading benefit on a Server Component —
// Next.js already code-splits route segments — but it DOES add a client
// Suspense boundary. On hydration each boundary briefly swapped the
// server-rendered section for its ~152px "Loading…" fallback and then back,
// collapsing and re-expanding the page: a large layout shift (measured CLS
// 0.106 on desktop, which failed the Agentic Browsing CLS check). Importing
// them directly removes the boundaries and the shift. Same reasoning as
// BLG-010 for Header/Footer/SpecialOfferBanner in app/layout.tsx.
import ReviewsHeroSection from "@/components/sections/ReviewsHeroSection";
import JobsLiveJobsTestimonialSection from "@/components/sections/JobsLiveJobsTestimonialSection";
import ReviewsFeedbackSection from "@/components/sections/ReviewsFeedbackSection";
import JobsLiveJobsReviewSection from "@/components/sections/JobsLiveJobsReviewSection";
import ReviewsCTAJoinSection from "@/components/sections/ReviewsCTAJoinSection";

// ---------- SEO Metadata ----------
export const metadata: Metadata = generateStaticPageMetadata({
  title: "Student Reviews & Testimonials | CDPL",
  description:
    "Read authentic student reviews and success stories for CDPL's Software Testing, Data Science and AI/ML courses — rated 4.9/5 across 425 reviews.",
  keywords: [
    "CDPL reviews",
    "student testimonials",
    "Cinute Digital reviews",
    "software testing course reviews",
    "data science course reviews",
    "AI ML course reviews",
    "comprehensive tech training reviews",
    "placement success stories",
    "customer reviews",
  ],
  url: "/reviews",
  image: "/og-images/reviews-og.webp",
});

export default function Page() {
  // 1. Get all reviews data
  const allReviews = getAllReviews();

  // 2. Prepare data for schema consolidation
  const reviewSchemaInput = allReviews.map(review => ({
    author: review.name,
    rating: review.rating,
    text: review.quote,
    role: review.role
  }));

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/reviews" },
  ];

  const consolidatedSchemas = generateReviewsPageAllSchemas(reviewSchemaInput);

  return (
    <div className="bg-white text-neutral-900">
      {/* JSON-LD SCHEMA INJECTION */}
      <JsonLd id="reviews-breadcrumb" schema={generateBreadcrumbSchema(breadcrumbItems)} />
      {consolidatedSchemas.map((schema, index) => (
        <JsonLd key={`reviews-schema-${index}`} id={`reviews-schema-${index}`} schema={schema} />
      ))}

      {/* Sections (unchanged) */}
      <ReviewsHeroSection />
      <JobsLiveJobsTestimonialSection />
      <ReviewsFeedbackSection />
      <JobsLiveJobsReviewSection />
      <ReviewsCTAJoinSection />
    </div>
  );
}
