import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
  generateCourseSchema,
  generateAaaCertificationPageAllSchemas
} from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

/* ---------- Small, reusable loading UI ---------- */
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

import AAACerticationHeroSection from "@/components/sections/AAACerticationHeroSection";

/* ---------- Dynamic sections (client components) ---------- */
// Hero is now static for LCP optimization
// const AAACerticationHeroSection = dynamic(
//   () => import("@/components/sections/AAACerticationHeroSection"),
//   { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
// );

const AAACertificationWhySection = dynamic(
  () => import("@/components/sections/AAACertificationWhySection"),
  { ssr: true, loading: () => <SectionLoader label="Loading highlights..." /> }
);

const AAACertificationCurriculumSection = dynamic(
  () => import("@/components/sections/AAACertificationCurriculumSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading curriculum..." /> }
);

const AAACertificationOutcomesCtaSection = dynamic(
  () => import("@/components/sections/AAACertificationOutcomesCtaSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading outcomes..." /> }
);

/* ---------- SEO ---------- */
export const metadata: Metadata = generateStaticPageMetadata({
  title: "AAA Certification Course - Advanced Automation Architecture | CDPL",
  description:
    "Master Advanced Automation Architecture (AAA) with CDPL's comprehensive certification course. Learn test automation frameworks, CI/CD, cloud testing, and API automation. Includes hands-on labs, capstone project, and industry-recognized certificate.",
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
  const consolidatedSchemas = generateAaaCertificationPageAllSchemas({
    faqs: [
      {
        question: "What is AAA Certification?",
        answer: "AAA (Advanced Automation Architecture) Certification is an industry-recognized credential that validates your expertise in designing and implementing advanced test automation frameworks, CI/CD integration, and cloud-based testing strategies.",
      },
      {
        question: "How long does the AAA course take?",
        answer: "The AAA Certification course is a 12-week program with approximately 20 hours of learning per week, including live sessions, hands-on labs, and project work.",
      },
      {
        question: "Is the AAA certificate recognized by employers?",
        answer: "Yes, the AAA Certification from CDPL is recognized by leading tech companies and demonstrates your advanced skills in test automation architecture.",
      },
      {
        question: "What are the prerequisites for AAA certification?",
        answer: "Basic programming knowledge and understanding of software testing fundamentals are required. Prior experience with test automation tools is helpful but not mandatory.",
      },
    ],
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
    ]
  });

  const courseSchema = generateCourseSchema({
    name: "AAA Certification Course - Advanced Automation Architecture",
    description: "Comprehensive certification program covering advanced test automation architecture, frameworks, CI/CD integration, and cloud-based testing.",

    slug: "aaa-certification-course",
    url: "/aaa-certification-course",
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
    price: 49999,
    rating: 4.8,
    reviewCount: 150,
  });

  return (
    <main
      className="bg-white text-slate-900"
    >
      {consolidatedSchemas.map((schema, index) => (
        <JsonLd key={`aaa-schema-${index}`} id={`aaa-schema-${index}`} schema={schema} />
      ))}
      <JsonLd id="aaa-course" schema={courseSchema} />

      <AAACerticationHeroSection />
      <AAACertificationWhySection />
      <AAACertificationCurriculumSection />
      <AAACertificationOutcomesCtaSection />
    </main>
  );
}
