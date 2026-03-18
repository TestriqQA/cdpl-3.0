// pages/advanced-data-analytics.tsx
import HeroSection from '@/components/data-analytics/HeroSection';
import StatsSection from '@/components/data-analytics/StatsSection';
const WhyAnalyticsProgram = dynamic(() => import('@/components/data-analytics/WhyAnalyticsProgram'), { ssr: true, loading: () => <SectionLoader label="Loading why analytics program section..." /> });
const CurriculumSection = dynamic(() => import('@/components/data-analytics/CurriculumSection'), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import('@/components/data-analytics/ProjectsSection'), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import('@/components/data-analytics/TestimonialsSection'), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import('@/components/data-analytics/CareerSection'), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import('@/components/data-analytics/WhoShouldEnroll'), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import('@/components/data-analytics/ToolsSection'), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import('@/components/data-analytics/FaqSection'), { ssr: true, loading: () => <SectionLoader label="Loading faq section..." /> });
const CtaSection = dynamic(() => import('@/components/data-analytics/CtaSection'), { ssr: true, loading: () => <SectionLoader label="Loading cta section..." /> });
const CareerRoadmapSection = dynamic(() => import('@/components/data-analytics/CareerRoadmapSection'), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
import StickyNav3 from "@/components/StickyNav2/StickyNav3";
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DATA_ANALYTICS_FAQS, DATA_ANALYTICS_REVIEW_DATA } from "@/data/dataAnalyticsData";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}
export const metadata = generateMetadata({
  title: "Advanced Data Analytics Course Mumbai | Data Analyst Training",
  description: "Master the data analyst full course in Mumbai with 110 hours of intensive training. Advanced data analytics, Python, SQL & Power BI with 100% job placement.",
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
  image: "/og-images/data-analytics.jpg",
});

export default function AdvancedDataAnalyticsPage() {
  const courseSchema = generateCourseSchema({
    name: "Advanced Data Analytics Hero Program: Full Course in Mumbai",
    description: "Master the data analyst full course in Mumbai with 110 hours of intensive training. Advanced data analytics, Python, SQL & Power BI with 100% job placement.",
    url: '/courses/bi-courses/data-analytics',
    slug: "data-analytics",
    price: 45000,
    currency: "INR",
    duration: "P3M", // ~12 weeks
    instructor: "Expert Data Analysts",
    rating: DATA_ANALYTICS_REVIEW_DATA.ratingValue,
    reviewCount: DATA_ANALYTICS_REVIEW_DATA.reviewCount,
    image: "/og-images/data-analytics.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "BI Courses", url: "/courses/bi-courses" },
    { name: "Advanced Data Analytics", url: '/courses/bi-courses/data-analytics' },
  ]);

  const faqSchema = generateFAQSchema(DATA_ANALYTICS_FAQS);


  return (
    <>
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />

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
