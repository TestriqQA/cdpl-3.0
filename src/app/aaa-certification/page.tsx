import type { Metadata } from "next";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
  generateCourseSchema,
  generateAaaCertificationPageAllSchemas
} from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import AAACerticationHeroSection from "@/components/sections/AAACerticationHeroSection";
import AAACertificationWhySection from "@/components/sections/AAACertificationWhySection";
import AAACertificationCurriculumSection from "@/components/sections/AAACertificationCurriculumSection";
import AAACertificationOutcomesCtaSection from "@/components/sections/AAACertificationOutcomesCtaSection";
import { SITE_STATS } from "@/lib/siteStats";
import { AAA_FAQS } from "@/data/aaaFaqs";

/* ---------- SEO ---------- */
export const metadata: Metadata = generateStaticPageMetadata({
  title: "AAA Certification Course | Automation Architecture",
  description:
    "Master Advanced Automation Architecture (AAA) with CDPL — test automation frameworks, CI/CD, cloud testing & API automation with hands-on labs and a capstone project.",
  keywords: [
    "AAA certification",
    "advanced automation architecture",
    "test automation certification",
    "automation framework training",
    "CI/CD automation",
    "cloud testing course",
    "API automation training",
    "selenium certification",
    "CDPL AAA course",
    "automation testing certification",
    "test automation engineer",
    "QA automation course",
    "automation architect training",
    "DevOps automation",
    "continuous testing certification",
  ],
  url: "/aaa-certification",
  image: "/og-images/aaa-certification-og.webp",

});

/* ---------- Page (server component) ---------- */
export default function AAACertificationCoursePage() {
  /* ---------- JSON-LD ---------- */
  const courseData = {
    name: "AAA Certification Course - Advanced Automation Architecture",
    description: "Comprehensive certification program covering advanced test automation architecture, frameworks, CI/CD integration, and cloud-based testing.",
    slug: "aaa-certification-course",
    url: "/aaa-certification",
    image: "/og-images/aaa-certification-og.webp",
    level: "Intermediate to Advanced",
    learningOutcomes: [
      "Test Automation Frameworks",
      "CI/CD Pipeline Integration",
      "Cloud Testing Strategies",
      "API Automation",
      "Performance Testing",
      "Security Testing Automation",
    ],
    prerequisites: ["Basic programming knowledge", "Testing fundamentals"],
    duration: "P12W",
    rating: SITE_STATS.rating,
    reviewCount: SITE_STATS.reviewCount,
  };

  const consolidatedSchemas = generateAaaCertificationPageAllSchemas({
    // Same list the page shows, so the FAQPage schema matches the visible FAQ.
    faqs: AAA_FAQS,
    howToSteps: [
      { name: "Enrollment", text: "Sign up for the AAA Certification course on the CDPL platform." },
      { name: "Learning & Labs", text: "Complete the 12-week curriculum including live sessions and hands-on labs." },
      { name: "Capstone Project", text: "Develop and submit an end-to-end automation architecture project for review." },
      { name: "Proctored Exam", text: "Successfully pass the official AAA-aligned proctored assessment." },
      { name: "Certification", text: "Receive your verifiable digital certificate with a unique ID." }
    ],
    curriculum: [
      "Module 1 - Foundations & Blueprint",
      "Module 2 - Practical Labs",
      "Module 3 - Capstone & Review"
    ],
    courseData: courseData
  });

  return (
    <div
      className="bg-white text-slate-900"
    >
      {consolidatedSchemas.map((schema, index) => (
        <JsonLd key={`aaa-schema-${index}`} id={`aaa-schema-${index}`} schema={schema} />
      ))}

      <AAACerticationHeroSection />
      <AAACertificationWhySection />
      <AAACertificationCurriculumSection />
      <AAACertificationOutcomesCtaSection />
    </div>
  );
}
