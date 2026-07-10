import StickyNav3 from "@/components/StickyNav2/StickyNav3";
import { TestimonialsClient, CtaClient } from "@/app/courses/ds-ml-courses/machine-learning-course/client-section";
import HeroSection from "@/components/machine-learning-course/HeroSection";
import StatsSection from "@/components/machine-learning-course/StatsSection";
import {
  WhyMLProgram,
  CurriculumSection,
  ProjectsSection,
  CareerSection,
  WhoShouldEnroll,
  ToolsSection,
  FaqSection,
  CareerRoadmapSection
} from "@/app/courses/ds-ml-courses/machine-learning-course/server-sections";

import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema, generateMachineLearningCoursePageSchema } from "@/lib/schema-generators";
import { MACHINE_LEARNING_FAQS, MACHINE_LEARNING_REVIEW_DATA } from "@/data/machineLearningData";

export const metadata = generateMetadata({
  title: "Machine Learning Course in Mumbai | Python | CDPL",
  description: "Machine Learning Course in Mumbai — 95 hours of Python, ML & data science with hands-on projects, global certification and placement support.",
  keywords: [
    "machine learning course mumbai",
    "data science with python",
    "python data science training",
    "ml hero program",
    "data scientist jobs mumbai",
    "artificial intelligence course",
    "deep learning training"
  ],
  url: '/courses/ds-ml-courses/machine-learning-course',
  image: "/og-images/courses-ds-ml-courses-machine-learning-course-og.webp",
});

export default function MachineLearningPage() {
  const schemas = generateMachineLearningCoursePageSchema(
    {
      name: "Machine Learning Course with Python & Data Science",
      description: "Machine Learning Course in Mumbai — 95 hours of Python, ML & data science with hands-on projects, global certification and placement support.",
      url: '/courses/ds-ml-courses/machine-learning-course',
      slug: "machine-learning-course",
      price: 35000,
      currency: "INR",
      duration: "P2M1W", // ~9-10 weeks
      instructor: "Expert ML & Data Science Mentors",
      rating: MACHINE_LEARNING_REVIEW_DATA.ratingValue,
      reviewCount: MACHINE_LEARNING_REVIEW_DATA.reviewCount,
      image: "/og-images/courses-ds-ml-courses-machine-learning-course-og.webp",
    },
    MACHINE_LEARNING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" },
      { name: "Machine Learning & Data Science", url: '/courses/ds-ml-courses/machine-learning-course' }
    ]
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`ml-schema-${index}`} id={`ml-schema-${index}`} schema={schema} />
      ))}
      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav3 />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyMLProgram /></section>
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
