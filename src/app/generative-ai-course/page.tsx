// pages/generative-ai-course.tsx
const HeroSection = dynamic(() => import('@/components/generative-ai-course/HeroSection'), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StatsSection = dynamic(() => import('@/components/generative-ai-course/StatsSection'), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyGenAIProgram = dynamic(() => import('@/components/generative-ai-course/WhyGenAIProgram'), { ssr: true, loading: () => <SectionLoader label="Loading why gen AI program section..." /> });
const CurriculumSection = dynamic(() => import('@/components/generative-ai-course/CurriculumSection'), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import('@/components/generative-ai-course/ProjectsSection'), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import('@/components/generative-ai-course/TestimonialsSection'), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import('@/components/generative-ai-course/CareerSection'), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import('@/components/generative-ai-course/WhoShouldEnroll'), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import('@/components/generative-ai-course/ToolsSection'), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import('@/components/generative-ai-course/FaqSection'), { ssr: true, loading: () => <SectionLoader label="Loading FAQs section..." /> });
const CtaSection = dynamic(() => import('@/components/generative-ai-course/CtaSection'), { ssr: true, loading: () => <SectionLoader label="Loading CTA section..." /> });
const CareerRoadmapSection = dynamic(() => import('@/components/generative-ai-course/CareerRoadmapSection'), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const StickyNav3 = dynamic(() => import('@/components/StickyNav2/StickyNav3'), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
const JsonLd = dynamic(() => import('@/components/JsonLd'), { ssr: true, loading: () => <SectionLoader label="Loading JSON-LD..." /> });
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { GENERATIVE_AI_FAQS, GENERATIVE_AI_REVIEW_DATA } from "@/data/generativeAiData";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

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