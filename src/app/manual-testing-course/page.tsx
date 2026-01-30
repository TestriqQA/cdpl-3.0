import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import ManualTestingPageContent from "./ManualTestingPageContent";
import { MANUAL_TESTING_FAQS, MANUAL_TESTING_REVIEW_DATA } from "@/data/manualTestingData";

export const metadata: Metadata = generateMetadata({
  title: "Manual Testing Course with Placement | QA Training Mumbai",
  description: "Master Manual Testing in 12 weeks. ISTQB prep, live projects, Jira & Agile training. 5,000+ placed. Online & classroom batches. Enroll now!",
  keywords: [
    "manual testing course",
    "qa testing course",
    "manual testing training",
    "qa certification course",
    "testing course with placement",
    "qa manual tester",
    "quality assurance training",
    "QA training for beginners",
    "software testing course with placement",
    "manual testing certification",
    "QA testing course online",
    "learn manual testing",
    "software testing training",
    "QA jobs for freshers",
    "manual testing syllabus",
    "ISTQB foundation level course",
  ],
  url: "/manual-testing-course",
  image: "/og-images/manual-testing-course.jpg",
});

export default function ManualTestingPage() {
  const courseSchema = generateCourseSchema({
    name: "Manual Testing Course with 100% Placement Support",
    description: "Comprehensive 12-week Manual Testing and QA training program covering SDLC, STLC, test case design, Jira, Agile, API testing, and ISTQB preparation. Includes hands-on projects and placement assistance.",
    url: "/manual-testing-course",
    slug: "manual-testing-course",
    instructor: "ISTQB Certified Trainers",
    duration: "P12W", // 12 weeks
    rating: MANUAL_TESTING_REVIEW_DATA.ratingValue,
    reviewCount: MANUAL_TESTING_REVIEW_DATA.reviewCount,
    price: 15000,
    currency: "INR",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Manual Testing", url: "/manual-testing-course" },
  ]);

  const faqSchema = generateFAQSchema(MANUAL_TESTING_FAQS);

  return (
    <>
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />
      <ManualTestingPageContent />
    </>
  );
}
