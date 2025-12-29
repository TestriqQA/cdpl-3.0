import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

const HeroSection = dynamic(() => import("@/components/api-testing/HeroSection"), { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> });
const StatsSection = dynamic(() => import("@/components/api-testing/StatsSection"), { ssr: true, loading: () => <SectionLoader label="Loading stats..." /> });
const WhyApiTesting = dynamic(() => import("@/components/api-testing/WhyApiTesting"), { ssr: true, loading: () => <SectionLoader label="Loading why..." /> });
const CurriculumSection = dynamic(() => import("@/components/api-testing/CurriculumSection"), { ssr: true, loading: () => <SectionLoader label="Loading curriculum..." /> });
const ProjectsSection = dynamic(() => import("@/components/api-testing/ProjectsSection"), { ssr: true, loading: () => <SectionLoader label="Loading projects..." /> });
const CareerSection = dynamic(() => import("@/components/api-testing/CareerSection"), { ssr: true, loading: () => <SectionLoader label="Loading career..." /> });
const WhoShouldEnroll = dynamic(() => import("@/components/api-testing/WhoShouldEnroll"), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll..." /> });
const ToolsSection = dynamic(() => import("@/components/api-testing/ToolsSection"), { ssr: true, loading: () => <SectionLoader label="Loading tools..." /> });
const TestimonialsSection = dynamic(() => import("@/components/api-testing/TestimonialsSection"), { ssr: true, loading: () => <SectionLoader label="Loading testimonials..." /> });
const FaqSection = dynamic(() => import("@/components/api-testing/FaqSection"), { ssr: true, loading: () => <SectionLoader label="Loading FAQs..." /> });
const CtaSection = dynamic(() => import("@/components/api-testing/CtaSection"), { ssr: true, loading: () => <SectionLoader label="Loading CTA..." /> });
const StickyNav = dynamic(() => import("@/components/StickyNav2/StickyNav2"), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { API_TESTING_FAQS, API_TESTING_REVIEW_DATA } from "@/data/apiTestingData";

// SEO Metadata
export const metadata = generateMetadata({
  title: "API Testing Course with POSTMAN & RestAPIs | 100% Job Placement",
  description: "Master API testing in 15 hours with live projects, global certification, and placement support. Learn POSTMAN, JSON, OAuth, and security testing.",
  keywords: [
    "API testing course",
    "POSTMAN training",
    "RestAPI testing",
    "API automation",
    "QA jobs",
    "placement guaranteed course",
    "software testing certification",
    "manual vs automation testing",
    "API security testing",
    "SOAP vs REST"
  ],
  url: "/api-testing",
  image: "/og-images/api-testing-course.jpg",
});

export default function Home() {
  const courseSchema = generateCourseSchema({
    name: "API Testing Course with POSTMAN & RestAPIs",
    description: "Master API testing in 15 hours with live projects, global certification, and placement support. Learn POSTMAN, JSON, OAuth, and security testing.",
    url: "/api-testing",
    slug: "api-testing",
    instructor: "CDPL Expert Mentors",
    duration: "PT15H", // 15 hours
    rating: API_TESTING_REVIEW_DATA.ratingValue,
    reviewCount: API_TESTING_REVIEW_DATA.reviewCount,
    price: 5000, // Estimated price, adjust if known
    currency: "INR",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "API Testing", url: "/api-testing" },
  ]);

  const faqSchema = generateFAQSchema(API_TESTING_FAQS);

  return (
    <>
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyApiTesting /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsSection /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaSection /></section>
    </>
  );
}