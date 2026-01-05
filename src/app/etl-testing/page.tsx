import StickyNav from "@/components/StickyNav2/StickyNav2";
import { TestimonialsClient, CtaClient } from "@/app/etl-testing/client-section";
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
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { ETL_TESTING_FAQS, ETL_TESTING_REVIEW_DATA } from "@/data/etlTestingData";

export const metadata = generateMetadata({
  title: "ETL Testing Course | 100% Job Placement | 18-Hour Training",
  description: "Master ETL testing with SQL, data validation, and real projects. Get certified and placed in top data companies.",
  keywords: [
    "ETL testing course",
    "data validation",
    "SQL for ETL",
    "ETL tester jobs",
    "data quality testing",
    "data warehouse testing",
    "Informatica testing",
    "ETL automation",
    "database testing course"
  ],
  url: "/etl-testing",
  image: "/og-images/etl-testing-course.jpg",
});

export default function Home() {
  const courseSchema = generateCourseSchema({
    name: "ETL Testing Course",
    description: "Master ETL testing with SQL, data validation, and real projects. Get certified and placed in top data companies.",
    url: "/etl-testing",
    slug: "etl-testing",
    instructor: "CDPL Expert Mentors",
    duration: "PT18H", // 18 hours
    rating: ETL_TESTING_REVIEW_DATA.ratingValue,
    reviewCount: ETL_TESTING_REVIEW_DATA.reviewCount,
    price: 5500, // Estimated price
    currency: "INR",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "ETL Testing", url: "/etl-testing" },
  ]);

  const faqSchema = generateFAQSchema(ETL_TESTING_FAQS);

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