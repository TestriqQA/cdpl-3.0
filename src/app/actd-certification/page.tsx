import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
  generateBreadcrumbSchema,
  generateCourseSchema,
  generateFAQSchema
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

/* ---------- Dynamic sections (client components) ---------- */
import ACTDCertificationHeroSection from "@/components/sections/ACTDCertificationHeroSection";

/* ---------- Dynamic sections (client components) ---------- */
// Hero is now static for LCP optimization
// const ACTDCertificationHeroSection = dynamic(
//   () => import("@/components/sections/ACTDCertificationHeroSection"),
//   { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
// );

const ACTDCertificationTracksSection = dynamic(
  () => import("@/components/sections/ACTDCertificationTracksSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading tracks..." /> }
);

const ACTDCertificationProgressFaqSection = dynamic(
  () => import("@/components/sections/ACTDCertificationProgressFaqSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading details..." /> }
);

/* ---------- SEO ---------- */
export const metadata: Metadata = generateStaticPageMetadata({
  title: "ACTD Certification Training - Agile, Cloud & Test-Driven Development | CDPL",
  description:
    "Master Agile methodologies, Cloud technologies, and Test-Driven Development with CDPL's ACTD certification program. Comprehensive training with hands-on projects, industry mentors, and recognized certification.",
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
  image: "/og-image-actd-certification.jpg",
});

/* ---------- Page (server component) ---------- */
export default function ACTDCertificationTrainingPage() {
  /* ---------- JSON-LD ---------- */
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "ACTD Certification", url: "/actd-certification-training" },
  ]);

  // const organizationSchema = generateOrganizationSchema(); // REMOVED (Redundant)

  const courseSchema = generateCourseSchema({
    name: "ACTD Certification Training - Agile, Cloud & Test-Driven Development",
    description: "Comprehensive certification program covering Agile testing methodologies, cloud-based testing strategies, and test-driven development practices.",

    slug: "actd-certification-training",
    url: "/actd-certification-training",
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
    price: 39999,
    rating: 4.7,
    reviewCount: 120,
  });

  const faqSchema = generateFAQSchema([
    {
      question: "What does ACTD stand for?",
      answer: "ACTD stands for Agile, Cloud, and Test-Driven Development. It's a comprehensive certification that covers modern testing practices in agile and cloud environments.",
    },
    {
      question: "How long is the ACTD certification program?",
      answer: "The ACTD Certification program is a 10-week intensive course with approximately 15 hours of learning per week, including live sessions, practical labs, and project work.",
    },
    {
      question: "Do I need prior cloud experience for ACTD?",
      answer: "Prior cloud experience is helpful but not mandatory. The course covers cloud fundamentals and gradually progresses to advanced cloud testing strategies.",
    },
    {
      question: "What are the career opportunities after ACTD certification?",
      answer: "ACTD certification opens doors to roles like Agile QA Engineer, Cloud Test Engineer, DevOps Tester, Test Automation Specialist, and Senior QA positions in companies adopting agile and cloud practices.",
    },
  ]);

  return (
    <main
      className="bg-white text-slate-900"
    >
      <JsonLd id="actd-breadcrumb" schema={breadcrumbSchema} />
      {/* <JsonLd id="actd-org" schema={organizationSchema} /> */}
      <JsonLd id="actd-course" schema={courseSchema} />
      <JsonLd id="actd-faq" schema={faqSchema} />

      <ACTDCertificationHeroSection />
      <ACTDCertificationTracksSection />
      <ACTDCertificationProgressFaqSection />
    </main>
  );
}
