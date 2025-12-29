const HeroSection = dynamic(() => import("@/components/prompt-engineering-course/HeroSection"), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StatsSection = dynamic(() => import("@/components/prompt-engineering-course/StatsSection"), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyPromptGenProgram = dynamic(() => import("@/components/prompt-engineering-course/WhyPromptGenProgram"), { ssr: true, loading: () => <SectionLoader label="Loading why prompt gen program section..." /> });
const CurriculumSection = dynamic(() => import("@/components/prompt-engineering-course/CurriculumSection"), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import("@/components/prompt-engineering-course/ProjectsSection"), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import("@/components/prompt-engineering-course/TestimonialsSection"), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import("@/components/prompt-engineering-course/CareerSection"), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import("@/components/prompt-engineering-course/WhoShouldEnroll"), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import("@/components/prompt-engineering-course/ToolsSection"), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import("@/components/prompt-engineering-course/FaqSection"), { ssr: true, loading: () => <SectionLoader label="Loading faq section..." /> });
const CtaSection = dynamic(() => import("@/components/prompt-engineering-course/CtaSection"), { ssr: true, loading: () => <SectionLoader label="Loading cta section..." /> });
const CareerRoadmapSection = dynamic(() => import("@/components/prompt-engineering-course/CareerRoadmapSection"), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const StickyNav3 = dynamic(() => import("@/components/StickyNav2/StickyNav3"), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
const JsonLd = dynamic(() => import("@/components/JsonLd"), { ssr: true, loading: () => <SectionLoader label="Loading json ld..." /> });
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { PROMPT_ENGINEERING_FAQS, PROMPT_ENGINEERING_REVIEW_DATA } from "@/data/promptEngineeringData";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

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
  url: "/prompt-engineering-course",
  image: "/og-images/prompt-engineering-course.jpg",
});

export default function PromptGenPage() {
  const courseSchema = generateCourseSchema({
    name: "Prompt Engineering with Generative AI Course",
    description: "20-Hour Hero Program in Prompt Engineering with Gen AI. Hands-on projects, 100% job assistance, AAA global certificates.",
    url: "/prompt-engineering-course",
    slug: "prompt-engineering-course",
    price: 25000, // Estimated price, adjust if needed
    currency: "INR",
    duration: "P1M", // ~4 weeks
    instructor: "Expert AI Engineers",
    rating: PROMPT_ENGINEERING_REVIEW_DATA.ratingValue,
    reviewCount: PROMPT_ENGINEERING_REVIEW_DATA.reviewCount,
    image: "/og-images/prompt-engineering-course.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Prompt Engineering", url: "/prompt-engineering-course" },
  ]);

  const faqSchema = generateFAQSchema(PROMPT_ENGINEERING_FAQS);

  return (
    <div className="min-h-screen bg-white">
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />

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
      <section id='testimonials'><TestimonialsSection /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaSection /></section>
    </div>
  );
}