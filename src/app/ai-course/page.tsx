// pages/comprehensive-data-science-ai.tsx
import HeroSection from "@/components/ai-course/HeroSection";
import StatsSection from "@/components/ai-course/StatsSection";
import WhyAIProgram from "@/components/ai-course/WhyAIProgram";
import CurriculumSection from "@/components/ai-course/CurriculumSection";
import ProjectsSection from "@/components/ai-course/ProjectsSection";
import TestimonialsSection from "@/components/ai-course/TestimonialsSection";
import CareerSection from "@/components/ai-course/CareerSection";
import WhoShouldEnroll from "@/components/ai-course/WhoShouldEnroll";
import ToolsSection from "@/components/ai-course/ToolsSection";
import FaqSection from "@/components/ai-course/FaqSection";
import CtaSection from "@/components/ai-course/CtaSection";
import CareerRoadmapSection from "@/components/ai-course/CareerRoadmapSection";
import StickyNav3 from "@/components/StickyNav2/StickyNav3";
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { AI_FAQS, AI_REVIEW_DATA } from "@/data/aiData";

export const metadata = generateMetadata({
  title: "Data Science & AI Master Program Mumbai | CDPL",
  description: "255-Hour Master Program in Comprehensive Data Science and AI. Hands-on projects, 100% job assistance, global certificates.",
  keywords: [
    "comprehensive data science course mumbai",
    "ai master program",
    "data science and ai training",
    "data scientist jobs mumbai",
    "machine learning course",
    "artificial intelligence training"
  ],
  url: "/ai-course",
  image: "/og-images/ai-course.jpg",
});

export default function ComprehensiveDSAI() {
  const courseSchema = generateCourseSchema({
    name: "Comprehensive Data Science & AI Master Program",
    description: "255-Hour Master Program in Comprehensive Data Science and AI. Hands-on projects, 100% job assistance, global certificates.",
    url: "/ai-course",
    slug: "ai-course",
    price: 60000,
    currency: "INR",
    duration: "P5M", // ~20-24 weeks
    instructor: "Expert AI & Data Science Mentors",
    rating: AI_REVIEW_DATA.ratingValue,
    reviewCount: AI_REVIEW_DATA.reviewCount,
    image: "/og-images/ai-course.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "AI Master Program", url: "/ai-course" },
  ]);

  const faqSchema = generateFAQSchema(AI_FAQS);

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
      <section id='why-master-program'><WhyAIProgram /></section>
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
};