// pages/generative-ai-course.tsx
import HeroSection from "@/components/generative-ai-course/HeroSection";
import StatsSection from "@/components/generative-ai-course/StatsSection";
import WhyGenAIProgram from "@/components/generative-ai-course/WhyGenAIProgram";
import CurriculumSection from "@/components/generative-ai-course/CurriculumSection";
import ProjectsSection from "@/components/generative-ai-course/ProjectsSection";
import TestimonialsSection from "@/components/generative-ai-course/TestimonialsSection";
import CareerSection from "@/components/generative-ai-course/CareerSection";
import WhoShouldEnroll from "@/components/generative-ai-course/WhoShouldEnroll";
import ToolsSection from "@/components/generative-ai-course/ToolsSection";
import FaqSection from "@/components/generative-ai-course/FaqSection";
import CtaSection from "@/components/generative-ai-course/CtaSection";
import CareerRoadmapSection from "@/components/generative-ai-course/CareerRoadmapSection";
import StickyNav3 from "@/components/StickyNav2/StickyNav3";
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { GENERATIVE_AI_FAQS, GENERATIVE_AI_REVIEW_DATA } from "@/data/generativeAiData";

export const metadata = generateMetadata({
  title: "Deep Learning, NLP & Gen AI Course Mumbai | CDPL",
  description: "55-Hour Hero Program in Deep Learning, NLP, and Generative AI with Python. Hands-on projects, 100% job assistance, global certificates from AAA.",
  keywords: [
    "deep learning course mumbai",
    "nlp training",
    "generative ai with python",
    "ai hero program",
    "ai jobs mumbai",
    "large language models course",
    "prompt engineering training"
  ],
  url: "/generative-ai-course",
  image: "/og-images/generative-ai-course.jpg",
});

export default function GenerativeAiPage() {
  const courseSchema = generateCourseSchema({
    name: "Master Program in Deep Learning, NLP & Generative AI",
    description: "55-Hour Hero Program in Deep Learning, NLP, and Generative AI with Python. Hands-on projects, 100% job assistance, global certificates from AAA.",
    url: "/generative-ai-course",
    slug: "generative-ai-course",
    price: 45000,
    currency: "INR",
    duration: "P1M2W", // ~6 weeks
    instructor: "Expert AI & Generative AI Mentors",
    rating: GENERATIVE_AI_REVIEW_DATA.ratingValue,
    reviewCount: GENERATIVE_AI_REVIEW_DATA.reviewCount,
    image: "/og-images/generative-ai-course.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Generative AI Course", url: "/generative-ai-course" },
  ]);

  const faqSchema = generateFAQSchema(GENERATIVE_AI_FAQS);

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
      <section id='why-master-program'><WhyGenAIProgram /></section>
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