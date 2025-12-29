// pages/comprehensive-data-science-ai.tsx
const HeroSection = dynamic(() => import('@/components/ai-course/HeroSection'), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StatsSection = dynamic(() => import('@/components/ai-course/StatsSection'), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyAIProgram = dynamic(() => import('@/components/ai-course/WhyAIProgram'), { ssr: true, loading: () => <SectionLoader label="Loading why AI program section..." /> });
const CurriculumSection = dynamic(() => import('@/components/ai-course/CurriculumSection'), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import('@/components/ai-course/ProjectsSection'), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import('@/components/ai-course/TestimonialsSection'), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import('@/components/ai-course/CareerSection'), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import('@/components/ai-course/WhoShouldEnroll'), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import('@/components/ai-course/ToolsSection'), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import('@/components/ai-course/FaqSection'), { ssr: true, loading: () => <SectionLoader label="Loading FAQs section..." /> });
const CtaSection = dynamic(() => import('@/components/ai-course/CtaSection'), { ssr: true, loading: () => <SectionLoader label="Loading CTA section..." /> });
const CareerRoadmapSection = dynamic(() => import('@/components/ai-course/CareerRoadmapSection'), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const StickyNav3 = dynamic(() => import('@/components/StickyNav2/StickyNav3'), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
const JsonLd = dynamic(() => import('@/components/JsonLd'), { ssr: true, loading: () => <SectionLoader label="Loading JSON-LD..." /> });
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { AI_FAQS, AI_REVIEW_DATA } from "@/data/aiData";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

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