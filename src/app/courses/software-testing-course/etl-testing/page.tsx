import StickyNav from "@/components/StickyNav2/StickyNav2";
import { TestimonialsClient, CtaClient } from "@/app/courses/software-testing-course/etl-testing/client-section";
import dynamic from "next/dynamic";

const withLoader = (label: string) => ({
  loading: () => (
    <div className="flex items-center justify-center py-16 text-gray-500">
      {label}
    </div>
  ),
});

import HeroSection from '@/components/etl-testing/HeroSection'

const StatsSection = dynamic(
  () => import("@/components/etl-testing/StatsSection"),
  {
    ssr: true,
    ...withLoader("Loading stats...")
  },
);

const WhyEtlTesting = dynamic(
  () => import("@/components/etl-testing/WhyEtlTesting"),
  {
    ssr: true,
    ...withLoader("Loading why...")
  },
);

const CurriculumSection = dynamic(
  () => import("@/components/etl-testing/CurriculumSection"),
  {
    ssr: true,
    ...withLoader("Loading curriculum...")
  },
);

const ToolsSection = dynamic(
  () => import("@/components/etl-testing/ToolsSection"),
  {
    ssr: true,
    ...withLoader("Loading tools...")
  },
);

const ProjectsSection = dynamic(
  () => import("@/components/etl-testing/ProjectsSection"),
  {
    ssr: true,
    ...withLoader("Loading projects...")
  },
);

const CareerSection = dynamic(
  () => import("@/components/etl-testing/CareerSection"),
  {
    ssr: true,
    ...withLoader("Loading career...")
  },
);

const WhoShouldEnroll = dynamic(
  () => import("@/components/etl-testing/WhoShouldEnroll"),
  {
    ssr: true,
    ...withLoader("Loading enrollment info...")
  },
);

const FaqSection = dynamic(
  () => import("@/components/etl-testing/FaqSection"),
  {
    ssr: true,
    ...withLoader("Loading FAQs...")
  },
);


import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema, generateEtlTestingCoursePageSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { ETL_TESTING_FAQS, ETL_TESTING_REVIEW_DATA } from "@/data/etlTestingData";

export const metadata = generateMetadata({
  title: "ETL Testing Course with Placement | Master SQL, Data Validation & ETL Tools",
  description: "Learn what is ETL testing, master SQL queries for ETL testing, data validation, and real projects. Get certified and placed in top data companies in Mumbai/Thane.",
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
  image: "/og-images/etl-testing-course.jpg",
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
