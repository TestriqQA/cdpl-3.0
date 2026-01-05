import StickyNav3 from "@/components/StickyNav2/StickyNav3";
import { TestimonialsClient, CtaClient } from "@/app/machine-learning-course/client-section";
import {
  HeroSection,
  StatsSection,
  WhyMLProgram,
  CurriculumSection,
  ProjectsSection,
  CareerSection,
  WhoShouldEnroll,
  ToolsSection,
  FaqSection,
  CareerRoadmapSection
} from "@/app/machine-learning-course/server-sections";

import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { MACHINE_LEARNING_FAQS, MACHINE_LEARNING_REVIEW_DATA } from "@/data/machineLearningData";

export const metadata = generateMetadata({
  title: "Machine Learning & Data Science with Python Hero Program | Mumbai | CDPL",
  description: "95-Hour Hero Program in Machine Learning and Data Science with Python. Hands-on projects, 100% job assistance, global certificates.",
  keywords: [
    "machine learning course mumbai",
    "data science with python",
    "python data science training",
    "ml hero program",
    "data scientist jobs mumbai",
    "artificial intelligence course",
    "deep learning training"
  ],
  url: "/machine-learning-course",
  image: "/og-images/machine-learning-course.jpg",
});

export default function MachineLearningPage() {
  const courseSchema = generateCourseSchema({
    name: "Machine Learning & Data Science with Python Hero Program",
    description: "95-Hour Hero Program in Machine Learning and Data Science with Python. Hands-on projects, 100% job assistance, global certificates.",
    url: "/machine-learning-course",
    slug: "machine-learning-course",
    price: 35000,
    currency: "INR",
    duration: "P2M1W", // ~9-10 weeks
    instructor: "Expert ML & Data Science Mentors",
    rating: MACHINE_LEARNING_REVIEW_DATA.ratingValue,
    reviewCount: MACHINE_LEARNING_REVIEW_DATA.reviewCount,
    image: "/og-images/machine-learning-course.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Machine Learning & Data Science", url: "/machine-learning-course" },
  ]);

  const faqSchema = generateFAQSchema(MACHINE_LEARNING_FAQS);

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
};