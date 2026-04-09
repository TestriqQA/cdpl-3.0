import StickyNav3 from '@/components/StickyNav2/StickyNav3';
import { TestimonialsClient, CtaClient } from "@/app/courses/ds-ml-courses/ai-course/client-section";
import HeroSection from '@/components/ai-course/HeroSection';
import {
  StatsSection,
  WhyAIProgram,
  CurriculumSection,
  ProjectsSection,
  CareerSection,
  WhoShouldEnroll,
  ToolsSection,
  FaqSection,
  CareerRoadmapSection
} from "@/app/courses/ds-ml-courses/ai-course/server-sections";

import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateAICoursePageSchema } from "@/lib/schema-generators";
import { AI_FAQS, AI_REVIEW_DATA } from "@/data/aiData";

export const metadata = generateMetadata({
  title: "Masters in AI and ML | AI Master Program Mumbai | 100% Placement Support",
  description: "Enroll in our Masters in AI and ML in India. 255-hour Data Science & AI Master Program in Mumbai/Thane. Get post graduate program in ai and machine learning with 100% job assistance.",
  keywords: [
    "masters in ai and ml",
    "ms in artificial intelligence in india",
    "ai master program mumbai",
    "masters in ai in india",
    "masters in data science and artificial intelligence in india",
    "data science master program mumbai",
    "post graduate program in ai and ml",
    "post graduate program in ai and machine learning",
    "masters in artificial intelligence india",
    "masters in ai and ml in india"
  ],
  url: '/courses/ds-ml-courses/ai-course',
  image: "/og-images/courses-ds-ml-courses-ai-course-og.webp",
});

export default function ComprehensiveDSAI() {
  const schemas = generateAICoursePageSchema(
    {
      name: "Comprehensive Data Science & AI Master Program",
      description: "255-Hour Master Program in Comprehensive Data Science and AI. Hands-on projects, 100% job assistance, global certificates.",
      url: '/courses/ds-ml-courses/ai-course',
      slug: "ai-course",
      price: 60000,
      currency: "INR",
      duration: "P5M", // ~20-24 weeks
      instructor: "Expert AI & Data Science Mentors",
      rating: AI_REVIEW_DATA.ratingValue,
      reviewCount: AI_REVIEW_DATA.reviewCount,
      image: "/og-images/courses-ds-ml-courses-ai-course-og.webp",
    },
    AI_FAQS.map(f => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" },
      { name: "AI Master Program", url: '/courses/ds-ml-courses/ai-course' }
    ]
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`ai-schema-${index}`} id={`ai-schema-${index}`} schema={schema} />
      ))}
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
      <section id='testimonials'><TestimonialsClient /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaClient /></section>
    </>
  );
}
