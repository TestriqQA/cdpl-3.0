import StickyNav from "@/components/StickyNav2/StickyNav2";
import { TestimonialsClient, CtaClient } from "@/app/courses/software-testing-course/etl-testing/client-section";

// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import HeroSection from '@/components/etl-testing/HeroSection'
import StatsSection from "@/components/etl-testing/StatsSection";
import WhyEtlTesting from "@/components/etl-testing/WhyEtlTesting";
import CurriculumSection from "@/components/etl-testing/CurriculumSection";
import ToolsSection from "@/components/etl-testing/ToolsSection";
import ProjectsSection from "@/components/etl-testing/ProjectsSection";
import CareerSection from "@/components/etl-testing/CareerSection";
import WhoShouldEnroll from "@/components/etl-testing/WhoShouldEnroll";
import FaqSection from "@/components/etl-testing/FaqSection";

import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema, generateEtlTestingCoursePageSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { ETL_TESTING_FAQS, ETL_TESTING_REVIEW_DATA } from "@/data/etlTestingData";

export const metadata = generateMetadata({
  title: "ETL Testing Course in Mumbai | SQL & Data Validation",
  description: "Learn ETL testing, SQL queries, data-warehouse validation & data-quality checks with real projects. Job-oriented training in Mumbai with placement assistance.",
  keywords: [
    "what is etl testing",
    "what is etl",
    "etl testing",
    "etl developer",
    "etl automation testing tools",
    "etl testing training",
    "etl testing course",
    "etl tester roles and responsibilities",
    "etl vs elt",
    "etl testing tutorial",
    "etl testing tools",
    "etl automation testing",
    "etl testing means",
    "etl and elt",
    "etl developer skills",
    "etl testing interview questions",
    "sql queries for etl testing"
  ],
  url: '/courses/software-testing-course/etl-testing',
  image: "/og-images/courses-software-testing-course-etl-testing-og.webp",

});

export default function Home() {
  const schemas = generateEtlTestingCoursePageSchema(
    {
      name: "ETL Testing Course",
      description: "Master ETL testing with SQL, data validation, and real projects. Get certified and placed in top data companies.",
      url: '/courses/software-testing-course/etl-testing',
      slug: "etl-testing",
      instructor: "CDPL Expert Mentors",
      duration: "PT18H", // 18 hours
      rating: ETL_TESTING_REVIEW_DATA.ratingValue,
      reviewCount: ETL_TESTING_REVIEW_DATA.reviewCount,
      price: 5500, // Estimated price
      currency: "INR",
      image: "/og-images/courses-software-testing-course-etl-testing-og.webp",
    },

    ETL_TESTING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Software Testing Course", url: "/courses/software-testing-course" },
      { name: "ETL Testing", url: '/courses/software-testing-course/etl-testing' }
    ]
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`etl-schema-${index}`} id={`etl-schema-${index}`} schema={schema} />
      ))}
      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyEtlTesting /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsClient /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaClient /></section>
    </>
  );
}
