import StickyNav3 from "@/components/StickyNav2/StickyNav3";
import { TestimonialsClient, CtaClient } from "@/app/data-science-course/client-section";
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
} from "@/app/data-science-course/server-sections";

import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DATA_SCIENCE_FAQS, DATA_SCIENCE_REVIEW_DATA } from "@/data/dataScienceData";

export const metadata = generateMetadata({
  title: "Advanced Data Science & Machine Learning Masterclass in Mumbai | 200-Hour Program | CDPL",
  description: "200-Hour Masterclass in Advanced Data Science and Machine Learning. Hands-on projects, 100% job assistance, global certificates.",
  keywords: [
    "advanced data science course mumbai",
    "machine learning masterclass",
    "data science training mumbai",
    "ml jobs mumbai",
    "deep learning course",
    "ai masterclass"
  ],
  url: "/data-science-course",
  image: "/og-images/data-science-course.jpg",
});

export default function AdvancedDSMLPage() {
  const courseSchema = generateCourseSchema({
    name: "Advanced Data Science & Machine Learning Masterclass",
    description: "200-Hour Masterclass in Advanced Data Science and Machine Learning. Hands-on projects, 100% job assistance, global certificates.",
    url: "/data-science-course",
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
    { name: "Data Science & ML Masterclass", url: "/data-science-course" },
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
