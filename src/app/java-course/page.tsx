// pages/java-programming.tsx
const HeroSection = dynamic(() => import('@/components/java-course/HeroSection'), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StatsSection = dynamic(() => import('@/components/java-course/StatsSection'), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyJavaProgram = dynamic(() => import('@/components/java-course/WhyJavaProgram'), { ssr: true, loading: () => <SectionLoader label="Loading why java program section..." /> });
const CurriculumSection = dynamic(() => import('@/components/java-course/CurriculumSection'), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import('@/components/java-course/ProjectsSection'), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const CareerSection = dynamic(() => import('@/components/java-course/CareerSection'), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import('@/components/java-course/WhoShouldEnroll'), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import('@/components/java-course/ToolsSection'), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const TestimonialsSection = dynamic(() => import('@/components/java-course/TestimonialsSection'), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerRoadmapSection = dynamic(() => import('@/components/java-course/CareerRoadmapSection'), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const FaqSection = dynamic(() => import('@/components/java-course/FaqSection'), { ssr: true, loading: () => <SectionLoader label="Loading FAQs section..." /> });
const CtaSection = dynamic(() => import('@/components/java-course/CtaSection'), { ssr: true, loading: () => <SectionLoader label="Loading CTA section..." /> });
const StickyNav3 = dynamic(() => import('@/components/StickyNav2/StickyNav3'), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { JAVA_FAQS, JAVA_REVIEW_DATA } from "@/data/javaData";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

export const metadata = generateMetadata({
  title: "Java Programming Course in Mumbai | 80-Hour Job-Ready Training | CDPL",
  description: "Best Java course in Mumbai with Core Java, Spring Boot, Microservices, AWS. 100% placement. Live projects, global certificate.",
  keywords: [
    "java course mumbai",
    "core java training",
    "spring boot course",
    "java full stack",
    "java developer course",
    "java certification mumbai",
    "java microservices training"
  ],
  url: "/java-course",
  image: "/og-images/java-course.jpg",
});

export default function JavaPage() {
  const courseSchema = generateCourseSchema({
    name: "Java Programming Master Course",
    description: "Best Java course in Mumbai with Core Java, Spring Boot, Microservices, AWS. 100% placement. Live projects, global certificate.",
    url: "/java-course",
    slug: "java-course",
    price: 20000,
    currency: "INR",
    duration: "P2M2W", // ~10 weeks
    instructor: "Expert Java Mentors",
    rating: JAVA_REVIEW_DATA.ratingValue,
    reviewCount: JAVA_REVIEW_DATA.reviewCount,
    image: "/og-images/java-course.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Java Programming", url: "/java-course" },
  ]);

  const faqSchema = generateFAQSchema(JAVA_FAQS);

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
      <section id='why-master-program'><WhyJavaProgram /></section>
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