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
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema, generateJavaCoursePageSchema } from "@/lib/schema-generators";
import { JAVA_FAQS, JAVA_REVIEW_DATA } from "@/data/javaData";

export const metadata = generateMetadata({
  title: "Java Programming Course in Mumbai | CDPL",
  description: "Job-ready Java course in Mumbai — Core Java, OOP, collections, JUnit & Selenium automation foundations with live projects and placement assistance.",
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
  image: "/og-images/courses-software-testing-course-java-course-og.png",

});

export default function JavaPage() {
  const schemas = generateJavaCoursePageSchema(
    {
      name: "Java Programming Master Course",
      description: "Comprehensive Java course in Mumbai with Core Java, Spring Boot, Microservices, AWS. placement. Live projects, global certificate.",
      url: '/courses/software-testing-course/java-course',
      slug: "java-course",
      price: 20000,
      currency: "INR",
      duration: "P2M2W", // ~10 weeks
      instructor: "Expert Java Mentors",
      rating: JAVA_REVIEW_DATA.ratingValue,
      reviewCount: JAVA_REVIEW_DATA.reviewCount,
      image: "/og-images/courses-software-testing-course-java-course-og.png",

    },
    JAVA_FAQS.map(f => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Software Testing Course", url: "/courses/software-testing-course" },
      { name: "Java Programming", url: '/courses/software-testing-course/java-course' }
    ]
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`java-schema-${index}`} id={`java-schema-${index}`} schema={schema} />
      ))}
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
}
