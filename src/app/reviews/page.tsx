import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateReviewSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateFAQSchema,
  generateItemListSchema,
  generateHowToSchema,
  generateSiteNavigationSchema,
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

  // ─────────────────────────────────────────────────────────────────────────
  // SCHEMA 1 — Organization (Knowledge Graph entity)
  // ─────────────────────────────────────────────────────────────────────────
  const organizationSchema = generateOrganizationSchema();

  // ─────────────────────────────────────────────────────────────────────────
  // SCHEMA 2 — WebSite (Sitelinks Search Box eligibility)
  // ─────────────────────────────────────────────────────────────────────────
  const websiteSchema = generateWebsiteSchema();

  // ─────────────────────────────────────────────────────────────────────────
  // SCHEMA 3 — WebPage (page identity)
  // ─────────────────────────────────────────────────────────────────────────
  const webPageSchema = generateWebPageSchema({
    name: "Authentic Student Reviews & Testimonials | CDPL",
    description:
      "Read 5000+ authentic student reviews and success stories for CDPL's Software Testing, Data Science, and AI/ML courses.",
    url: "/reviews",
    isPartOf: {
      "@id": "https://www.cinutedigital.com/#website",
    },
    about: {
      "@id": "https://www.cinutedigital.com/#organization",
    },
  });

  // ─────────────────────────────────────────────────────────────────────────
  // SCHEMA 4 — FAQPage (Review-relevant FAQs)
  // ─────────────────────────────────────────────────────────────────────────
  const faqSchema = generateFAQSchema([
    {
      question: "Are these student reviews authentic?",
      answer:
        "Yes. Every review on this page comes from a verified CDPL student who completed one of our training programs. Reviews are collected post-completion and reflect genuine experiences.",
    },
    {
      question: "What is the overall student satisfaction rating?",
      answer:
        "CDPL is rated 4.8 out of 5 based on 5,000+ verified student reviews across Software Testing, Data Science, AI/ML, and Digital Marketing programs.",
    },
    {
      question: "How many students has CDPL placed so far?",
      answer:
        "CDPL has successfully placed 5,000+ students in top companies including Tech Mahindra, Accenture, eClerx, and many more through our 100% placement support program.",
    },
    {
      question: "Which courses receive the highest ratings?",
      answer:
        "Our Manual + Automation Testing and Data Science & ML Masterclass programs consistently receive 4.8–5.0 ratings from alumni, thanks to mentor-led training and real-world project exposure.",
    },
    {
      question: "Can I submit my own review after completing a course?",
      answer:
        "Absolutely. After completing your program and placement process, you will receive a review invitation. You can also share your story via the contact form or during alumni events.",
    },
  ]);

  // ─────────────────────────────────────────────────────────────────────────
  // SCHEMA 5 — ItemList (Student reviews as structured list)
  // ─────────────────────────────────────────────────────────────────────────
  const itemListSchema = generateItemListSchema(
    allReviews.slice(0, 10).map((review) => ({
      name: `${review.name} — ${review.course}`,
      description: review.quote,
      type: "Review",
    })),
    "Student Reviews & Success Stories"
  );

  // ─────────────────────────────────────────────────────────────────────────
  // SCHEMA 6 — Review / AggregateRating (existing — enriched)
  // ─────────────────────────────────────────────────────────────────────────
  const reviewSchemaData = {
    ratingValue: STATISTICS.rating,
    reviewCount: STATISTICS.reviewCount,
    reviews: allReviews.slice(0, 10).map((review) => ({
      author: review.name,
      rating: review.rating,
      text: review.quote,
    })),
  };
  const reviewSchema = generateReviewSchema(reviewSchemaData);

  // ─────────────────────────────────────────────────────────────────────────
  // SCHEMA 7 — HowTo (Student success journey)
  // ─────────────────────────────────────────────────────────────────────────
  const howToSchema = generateHowToSchema({
    name: "How CDPL Students Achieve Career Success",
    description:
      "A step-by-step overview of how CDPL students go from enrollment to placement, as reflected in our reviews.",
    steps: [
      {
        name: "Enroll in a Program",
        text: "Choose from Software Testing, Data Science, AI/ML, or Digital Marketing tracks based on your career goals.",
      },
      {
        name: "Learn with Expert Mentors",
        text: "Attend live, interactive sessions led by industry professionals. Build real-world projects and portfolios.",
      },
      {
        name: "Practice with Hands-On Projects",
        text: "Work on 90+ real-world projects including CI/CD pipelines, ML models, dashboards, and automation suites.",
      },
      {
        name: "Prepare for Interviews",
        text: "Undergo mock interviews, résumé polishing, and portfolio reviews with dedicated career coaches.",
      },
      {
        name: "Get Placed",
        text: "Receive direct referrals to 50+ hiring partners and land your dream role with CDPL's 100% placement support.",
      },
    ],
  });

  // ─────────────────────────────────────────────────────────────────────────
  // SCHEMA 8 — SiteNavigationElement (Global navigation links)
  // ─────────────────────────────────────────────────────────────────────────
  const siteNavSchemas = generateSiteNavigationSchema();

  // ─────────────────────────────────────────────────────────────────────────
  // Breadcrumb (supplementary — best practice)
  // ─────────────────────────────────────────────────────────────────────────
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/reviews" },
  ]);

  return (
    <div className="bg-white text-neutral-900">
      {/* ── JSON-LD SCHEMA INJECTION ── */}
      {/* 1. Organization */}
      <JsonLd id="reviews-organization" schema={organizationSchema} />
      {/* 2. WebSite */}
      <JsonLd id="reviews-website" schema={websiteSchema} />
      {/* 3. WebPage */}
      <JsonLd id="reviews-webpage" schema={webPageSchema} />
      {/* 4. FAQPage */}
      <JsonLd id="reviews-faq" schema={faqSchema} />
      {/* 5. ItemList */}
      <JsonLd id="reviews-itemlist" schema={itemListSchema} />
      {/* 6. Review / AggregateRating */}
      <JsonLd id="reviews-rating" schema={reviewSchema} />
      {/* 7. HowTo */}
      <JsonLd id="reviews-howto" schema={howToSchema} />
      {/* 8. SiteNavigationElement */}
      {siteNavSchemas.map((navSchema, i) => (
        <JsonLd key={`sitenav-${i}`} id={`reviews-sitenav-${i}`} schema={navSchema} />
      ))}
      {/* Breadcrumb (supplementary) */}
      <JsonLd id="reviews-breadcrumb" schema={breadcrumbSchema} />

      {/* ── Sections (unchanged) ── */}
      <ReviewsHeroSection />
      <JobsLiveJobsTestimonialSection />
      <ReviewsFeedbackSection />
      <JobsLiveJobsReviewSection />
      <ReviewsCTAJoinSection />
    </div>
  );
}

