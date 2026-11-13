import type { Metadata } from "next";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
  generateCourseSchema,
  generateActdCertificationPageAllSchemas
} from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

/* ---------- Sections ---------- */
// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import ACTDCertificationHeroSection from "@/components/sections/ACTDCertificationHeroSection";
import ACTDCertificationTracksSection from "@/components/sections/ACTDCertificationTracksSection";
import ACTDCertificationProgressFaqSection from "@/components/sections/ACTDCertificationProgressFaqSection";
import { SITE_STATS } from "@/lib/siteStats";
import { ACTD_FAQS } from "@/data/actdFaqs";

/* ---------- SEO ---------- */
export const metadata: Metadata = generateStaticPageMetadata({
  title: "ACTD Certification Training | Agile, Cloud & TDD | CDPL",
  description:
    "Master Agile methodologies, cloud technologies & Test-Driven Development with CDPL's ACTD certification — hands-on projects, industry mentors & recognized credential.",
  keywords: [
    "ACTD certification",
    "agile certification",
    "cloud testing training",
    "test-driven development course",
    "agile testing certification",
    "cloud automation training",
    "TDD certification",
    "CDPL ACTD course",
    "agile cloud testing",
    "DevOps testing certification",
    "continuous testing",
    "agile QA training",
    "cloud QA engineer",
    "scrum testing certification",
    "agile test automation",
  ],
  url: "/actd-certification",
  image: "/og-images/actd-certification.webp",

});

/* ---------- Page (server component) ---------- */
export default function ACTDCertificationTrainingPage() {
  /* ---------- JSON-LD ---------- */
  const courseData = {
    name: "ACTD Certification Training - Agile, Cloud & Test-Driven Development",
    description: "Comprehensive certification program covering Agile testing methodologies, cloud-based testing strategies, and test-driven development practices.",
    slug: "actd-certification-training",
    url: "/actd-certification",
    image: "/og-images/actd-certification.webp",
    level: "Intermediate to Advanced",
    learningOutcomes: [
      "Agile Testing Methodologies",
      "Cloud Testing Strategies",
      "Test-Driven Development (TDD)",
      "Continuous Integration/Continuous Deployment",
      "Scrum and Kanban for QA",
      "Cloud Platform Testing (AWS, Azure, GCP)",
    ],
    prerequisites: ["Basic software testing knowledge", "Programming fundamentals"],
    duration: "P10W",
    rating: SITE_STATS.rating,
    reviewCount: SITE_STATS.reviewCount,
  };

  const consolidatedSchemas = generateActdCertificationPageAllSchemas({
    // Same list the page shows, so the FAQPage schema matches the visible FAQ.
    faqs: ACTD_FAQS,
    howToSteps: [
      { name: "Track Selection", text: "Choose your specialization in Agile, Cloud, or Test-Driven Development." },
      { name: "Hands-on Labs", text: "Complete the 10-week intensive curriculum with practical scenario tasks." },
      { name: "Portfolio Building", text: "Develop a comprehensive project portfolio reviewed by industry mentors." },
      { name: "Milestone Assessment", text: "Pass the readiness metrics and assessment patterns." },
      { name: "Certification", text: "Successfully complete the proctored exam to earn your ACTD certification." }
    ],
    tracks: [
      "Core Concepts",
      "Practical Skills",
      "Capstone + Interview"
    ],
    courseData: courseData
  });

  return (
    <div
      className="bg-white text-slate-900"
    >
      {consolidatedSchemas.map((schema, index) => (
        <JsonLd key={`actd-schema-${index}`} id={`actd-schema-${index}`} schema={schema} />
      ))}

      <ACTDCertificationHeroSection />
      <ACTDCertificationTracksSection />
      <ACTDCertificationProgressFaqSection />
    </div>
  );
}
