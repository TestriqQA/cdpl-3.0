import HeroSection from "@/components/api-testing/HeroSection";
import StickyNav from "@/components/StickyNav2/StickyNav2";
import JsonLd from "@/components/JsonLd";
import { generateApiTestingCoursePageSchema } from "@/lib/schema-generators";
import { API_TESTING_FAQS, API_TESTING_REVIEW_DATA } from "@/data/apiTestingData";
import { generateMetadata } from "@/lib/metadata-generator";
import { TestimonialsClient, CtaClient } from "@/app/courses/software-testing-course/api-testing/client-section";
// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import {
  StatsSection,
  WhyApiTesting,
  CurriculumSection,
  ProjectsSection,
  CareerSection,
  WhoShouldEnroll,
  ToolsSection,
  FaqSection,
} from "@/app/courses/software-testing-course/api-testing/server-sections";

export const metadata = generateMetadata({
  title: "API Testing Course with Postman & REST APIs | CDPL",
  description: "Master API testing with Postman & REST APIs in 15 hours — request chaining, validation, automation & live projects with placement assistance.",
  url: "/courses/software-testing-course/api-testing",
  image: "/og-images/courses-software-testing-course-api-testing-og.webp",
});

export default async function Page() {
  const schemas = generateApiTestingCoursePageSchema(
    {
      name: "API Testing Course with POSTMAN & RestAPIs",
      description: "Master API testing in 15 hours with live projects, global certification, and placement support.",
      url: "/courses/software-testing-course/api-testing",
      slug: "api-testing",
      instructor: "CDPL Expert Mentors",
      duration: "PT15H",
      rating: API_TESTING_REVIEW_DATA.ratingValue,
      reviewCount: API_TESTING_REVIEW_DATA.reviewCount,
      price: 5000,
      currency: "INR",
      image: "/og-images/courses-software-testing-course-api-testing-og.webp",
    },
    API_TESTING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Software Testing Course", url: "/courses/software-testing-course" },
      { name: "API Testing", url: "/courses/software-testing-course/api-testing" }
    ]
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`api-schema-${index}`} id={`api-schema-${index}`} schema={schema} />
      ))}

      <HeroSection />

      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav />
      </div>

      <section id="program-stats"><StatsSection /></section>
      <section id="why-master-program"><WhyApiTesting /></section>
      <section id="curriculum"><CurriculumSection /></section>
      <section id="tools"><ToolsSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="testimonials"><TestimonialsClient /></section>
      <section id="career"><CareerSection /></section>
      <section id="who-should-enroll"><WhoShouldEnroll /></section>
      <section id="faqs"><FaqSection /></section>
      <section id="contact"><CtaClient /></section>
    </>
  );
}

