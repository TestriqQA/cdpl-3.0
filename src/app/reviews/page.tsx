import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
  generateReviewSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema
} from "@/lib/schema-generators";
import { STATISTICS } from "@/lib/seo-config";
import { getAllReviews } from "src/data/reviews/reviewsData";
import JsonLd from "@/components/JsonLd";

// Revalidate content periodically (change to 0 if you fetch SSR)
export const revalidate = 120;

// ---------- Small, reusable loading UI ----------
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled, with lightweight fallbacks) ----------
const ReviewsHeroSection = dynamic(
  () => import("@/components/sections/ReviewsHeroSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading testimonials..." /> }
);

const JobsLiveJobsTestimonialSection = dynamic(
  () => import("@/components/sections/JobsLiveJobsTestimonialSection"),
  { ssr: true, loading: () => <SectionLoader label="Preparing CTA..." /> }
);

const ReviewsFeedbackSection = dynamic(
  () => import("@/components/sections/ReviewsFeedbackSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading reviews..." /> }
);

const JobsLiveJobsReviewSection = dynamic(
  () => import("@/components/sections/JobsLiveJobsReviewSection"),
  { ssr: true, loading: () => <SectionLoader label="Preparing CTA..." /> }
);

const ReviewsCTAJoinSection = dynamic(
  () => import("@/components/sections/ReviewsCTAJoinSection"),
  { ssr: true, loading: () => <SectionLoader label="Preparing CTA..." /> }
);

// ---------- SEO Metadata ----------
export const metadata: Metadata = generateStaticPageMetadata({
  title: "Authentic Student Reviews & Testimonials | CDPL - Cinute Digital",
  description:
    "Read 5000+ authentic student reviews and success stories for CDPL's Software Testing, Data Science, and AI/ML courses. See why we are rated 4.9/5 for career transformation and placement support.",
  keywords: [
    "CDPL reviews",
    "student testimonials",
    "Cinute Digital reviews",
    "software testing course reviews",
    "data science course reviews",
    "AI ML course reviews",
    "best tech training reviews",
    "placement success stories",
    "customer reviews",
  ],
  url: "/reviews",
  image: "/og-images/og-image-testimonials.webp",
});

export default function Page() {
  // 1. Get all reviews data
  const allReviews = getAllReviews();

  // 2. Prepare data for schema
  const reviewSchemaData = {
    ratingValue: STATISTICS.rating,
    reviewCount: STATISTICS.reviewCount,
    reviews: allReviews.slice(0, 10).map(review => ({
      author: review.name,
      rating: review.rating,
      text: review.quote,
      // datePublished is optional, but good to include if available in data
      // For now, we'll omit it as it's not in the source data
    })),
  };

  // 3. Generate the schemas
  const reviewSchema = generateReviewSchema(reviewSchemaData);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/reviews" },
  ]);

  const webPageSchema = generateWebPageSchema({
    name: "Authentic Student Reviews & Testimonials | CDPL",
    description: "Read 5000+ authentic student reviews and success stories for CDPL's Software Testing, Data Science, and AI/ML courses.",
    url: "/reviews",
    isPartOf: {
      "@id": "https://www.cinutedigital.com/#website"
    }
  });

  return (
    <div className="bg-white text-neutral-900">
      {/* JSON-LD SCHEMA INJECTION */}
      <JsonLd id="review-schema" schema={reviewSchema} />
      <JsonLd id="reviews-breadcrumb" schema={breadcrumbSchema} />
      <JsonLd id="reviews-webpage" schema={webPageSchema} />

      {/* Sections (unchanged) */}
      <ReviewsHeroSection />
      <JobsLiveJobsTestimonialSection />
      <ReviewsFeedbackSection />
      <JobsLiveJobsReviewSection />
      <ReviewsCTAJoinSection />
    </div>
  );
}
