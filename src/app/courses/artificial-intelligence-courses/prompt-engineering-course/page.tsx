import StickyNav3 from "@/components/StickyNav2/StickyNav3";
import { TestimonialsClient, CtaClient } from "@/app/courses/artificial-intelligence-courses/prompt-engineering-course/client-section";
import HeroSection from "@/components/prompt-engineering-course/HeroSection";
import StatsSection from "@/components/prompt-engineering-course/StatsSection";
import JsonLd from "@/components/JsonLd";
import {
  WhyPromptGenProgram,
  CurriculumSection,
  ProjectsSection,
  CareerSection,
  WhoShouldEnroll,
  ToolsSection,
  FaqSection,
  CareerRoadmapSection
} from "@/app/courses/artificial-intelligence-courses/prompt-engineering-course/server-sections";

import { generateMetadata } from "@/lib/metadata-generator";
import { generatePromptEngineeringCoursePageSchema } from "@/lib/schema-generators";
import { PROMPT_ENGINEERING_FAQS, PROMPT_ENGINEERING_REVIEW_DATA } from "@/data/promptEngineeringData";

export const metadata = generateMetadata({
  title: "Prompt Engineering with Generative AI Course in Mumbai | 20-Hour Hero Program | CDPL",
  description: "20-Hour Hero Program in Prompt Engineering with Gen AI. Hands-on projects, 100% job assistance, AAA global certificates.",
  keywords: [
    "prompt engineering course mumbai",
    "generative ai training",
    "python gen ai",
    "prompt hero program",
    "ai prompt jobs mumbai"
  ],
  url: '/courses/artificial-intelligence-courses/prompt-engineering-course',
  image: "/og-images/prompt-engineering-course.jpg",
});

export default function PromptGenPage() {
  const schemas = generatePromptEngineeringCoursePageSchema(
    {
      name: "Prompt Engineering with Generative AI Course",
      description: "20-Hour Hero Program in Prompt Engineering with Gen AI. Hands-on projects, 100% job assistance, AAA global certificates.",
      url: '/courses/artificial-intelligence-courses/prompt-engineering-course',
      slug: "prompt-engineering-course",
      price: 25000,
      currency: "INR",
      duration: "P1M",
      instructor: "Expert AI Engineers",
      rating: PROMPT_ENGINEERING_REVIEW_DATA.ratingValue,
      reviewCount: PROMPT_ENGINEERING_REVIEW_DATA.reviewCount,
      image: "/og-images/prompt-engineering-course.jpg",
    },
    PROMPT_ENGINEERING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Artificial Intelligence Courses", url: "/courses/artificial-intelligence-courses" },
      { name: "Prompt Engineering", url: '/courses/artificial-intelligence-courses/prompt-engineering-course' },
    ]
  );

  return (
    <div className="min-h-screen bg-white">
      {schemas.map((schema, index) => (
        <JsonLd key={`prompt-eng-schema-${index}`} id={`prompt-eng-schema-${index}`} schema={schema} />
      ))}

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav3 />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyPromptGenProgram /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='roadmap'><CareerRoadmapSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsClient /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaClient /></section>
    </div>
  );
}
