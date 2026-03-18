import StickyNav3 from "@/components/StickyNav2/StickyNav3";
import { TestimonialsClient, CtaClient } from "@/app/courses/software-testing-course/java-course/client-section";
import HeroSection from "@/components/java-course/HeroSection";
import {
  StatsSection,
  WhyJavaProgram,
  CurriculumSection,
  ProjectsSection,
  CareerSection,
  WhoShouldEnroll,
  ToolsSection,
  CareerRoadmapSection,
  FaqSection
} from "@/app/courses/software-testing-course/java-course/server-sections";

import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { JAVA_FAQS, JAVA_REVIEW_DATA } from "@/data/javaData";

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
  url: '/courses/software-testing-course/java-course',
  image: "/og-images/java-course.jpg",
});

export default function JavaPage() {
  const courseSchema = generateCourseSchema({
    name: "Java Programming Master Course",
    description: "Best Java course in Mumbai with Core Java, Spring Boot, Microservices, AWS. 100% placement. Live projects, global certificate.",
    url: '/courses/software-testing-course/java-course',
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
    { name: "Software Testing Course", url: "/courses/software-testing-course" },
    { name: "Java Programming", url: '/courses/software-testing-course/java-course' },
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
      <section id='testimonials'><TestimonialsClient /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaClient /></section>
    </>
  );
};
