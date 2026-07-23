// pages/advanced-data-analytics.tsx
import HeroSection from '@/components/data-analytics/HeroSection';
import StatsSection from '@/components/data-analytics/StatsSection';
// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import WhyAnalyticsProgram from '@/components/data-analytics/WhyAnalyticsProgram';
import CurriculumSection from '@/components/data-analytics/CurriculumSection';
import ProjectsSection from '@/components/data-analytics/ProjectsSection';
import TestimonialsSection from '@/components/data-analytics/TestimonialsSection';
import CareerSection from '@/components/data-analytics/CareerSection';
import WhoShouldEnroll from '@/components/data-analytics/WhoShouldEnroll';
import ToolsSection from '@/components/data-analytics/ToolsSection';
import FaqSection from '@/components/data-analytics/FaqSection';
import CtaSection from '@/components/data-analytics/CtaSection';
import CareerRoadmapSection from '@/components/data-analytics/CareerRoadmapSection';
import StickyNav3 from "@/components/StickyNav2/StickyNav3";
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateDataAnalyticsCoursePageSchema } from "@/lib/schema-generators";
import { DATA_ANALYTICS_FAQS, DATA_ANALYTICS_REVIEW_DATA } from "@/data/dataAnalyticsData";

export const metadata = generateMetadata({
  title: "Data Analytics Course in Mumbai | Data Analyst Training",
  description: "110-hour advanced data analytics course in Mumbai — Excel, SQL, Python & Power BI with hands-on projects and placement assistance.",
  keywords: [
    "data analyst full course",
    "advanced data analytics",
    "data analytics course Mumbai",
    "data analyst course Mumbai",
    "data analytics training",
    "business intelligence course",
    "power bi and tableau course",
    "master data analytics"
  ],
  url: '/courses/bi-courses/data-analytics',
  image: "/og-images/courses-bi-courses-data-analytics-og.webp",
});

export default function AdvancedDataAnalyticsPage() {
  const schemas = generateDataAnalyticsCoursePageSchema(
    {
      name: "Advanced Data Analytics Hero Program: Full Course in Mumbai",
      description: "Master the data analyst full course in Mumbai with 110 hours of intensive training. Advanced data analytics, Python, SQL & Power BI with job placement.",
      url: '/courses/bi-courses/data-analytics',
      slug: "data-analytics",
      price: 45000,
      currency: "INR",
      duration: "P3M",
      instructor: "Expert Data Analysts",
      rating: DATA_ANALYTICS_REVIEW_DATA.ratingValue,
      reviewCount: DATA_ANALYTICS_REVIEW_DATA.reviewCount,
      image: "/og-images/courses-bi-courses-data-analytics-og.webp",
    },
    DATA_ANALYTICS_FAQS.map(f => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "BI Courses", url: "/courses/bi-courses" },
      { name: "Advanced Data Analytics", url: '/courses/bi-courses/data-analytics' },
    ]
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`data-analytics-schema-${index}`} id={`data-analytics-schema-${index}`} schema={schema} />
      ))}

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav3 />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyAnalyticsProgram /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='roadmap'><CareerRoadmapSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsSection /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaSection /></section>
    </>
  );
}
