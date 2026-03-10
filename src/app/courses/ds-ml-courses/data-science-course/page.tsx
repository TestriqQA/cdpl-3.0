import StickyNav3 from "@/components/StickyNav2/StickyNav3";
import { TestimonialsClient, CtaClient } from "@/app/courses/ds-ml-courses/data-science-course/client-section";
import HeroSection from "@/components/data-science-course/HeroSection";
import StatsSection from "@/components/data-science-course/StatsSection";
import {
  WhyDSProgram,
  CurriculumSection,
  ProjectsSection,
  CareerSection,
  WhoShouldEnroll,
  ToolsSection,
  FaqSection,
  CareerRoadmapSection,
  JsonLd
} from "@/app/courses/ds-ml-courses/data-science-course/server-sections";

import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DATA_SCIENCE_FAQS, DATA_SCIENCE_REVIEW_DATA } from "@/data/dataScienceData";

export const metadata = generateMetadata({
  title: "Advanced Data Science & Machine Learning Masterclass Mumbai | Placement",
  description: "Master the data science full course in Mumbai with 200 hours of intensive training. Advanced data science, machine learning & AI with 100% job placement.",
  keywords: [
    "data science full course",
    "advanced data science",
    "data science course Mumbai",
    "data scientist course Mumbai",
    "data science training",
    "master machine learning",
    "ai and data science course",
    "master data science"
  ],
  url: '/courses/ds-ml-courses/data-science-course',
  image: "/og-images/data-science-course.jpg",
});

export default function AdvancedDSMLPage() {
  const courseSchema = generateCourseSchema({
    name: "Advanced Data Science and Machine Learning Masterclass: Full Course in Mumbai",
    description: "Master the data science full course in Mumbai with 200 hours of intensive training. Advanced data science, machine learning & AI with 100% job placement.",
    url: '/courses/ds-ml-courses/data-science-course',
    slug: "data-science-course",
    price: 50000,
    currency: "INR",
    duration: "P4M", // ~16-20 weeks
    instructor: "Expert Data Science & AI Mentors",
    rating: DATA_SCIENCE_REVIEW_DATA.ratingValue,
    reviewCount: DATA_SCIENCE_REVIEW_DATA.reviewCount,
    image: "/og-images/data-science-course.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" },
    { name: "Data Science & ML Masterclass", url: '/courses/ds-ml-courses/data-science-course' },
  ]);

  const faqSchema = generateFAQSchema(DATA_SCIENCE_FAQS);

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
      <section id='why-master-program'><WhyDSProgram /></section>
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
