import StickyNav from '@/components/StickyNav2/StickyNav2';
import { general_course } from '@/components/StickyNavData';
import { TestimonialsClient, CtaClient } from "@/app/software-testing-course/client-section";
import HeroSection from '@/components/software-testing-course/HeroSection';
import {
  FeaturesSection,
  CurriculumSection,
  CoursesSection,
  ProjectsSection,
  CareerPathSection,
  FAQSection
} from "@/app/software-testing-course/server-sections";
import JsonLd from "@/components/JsonLd";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { softwareTestingFaqs } from "@/components/software-testing-course/data/data";
import { generateMetadata } from '@/lib/metadata-generator';
import { Metadata } from 'next';

const pageTitle = "Software Testing Course in Mumbai & Thane with 100% Placement";
const pageDescription = "Looking for the best Software Testing Course in Mumbai? Master Manual & Automation Testing (Selenium, Java, API) with guaranteed interviews. Certified QA training with 100% placement support.";
const pageKeywords = [
  "software testing course",
  "software testing course in mumbai",
  "software testing training thane",
  "manual testing course",
  "automation testing course selenium",
  "qa training with placement",
  "software testing classes mumbai",
  "certified software tester",
  "software testing course for beginners",
  "selenium training in mumbai",
  "api testing course mumbai"
];

export const metadata: Metadata = generateMetadata({
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords,
  url: "/software-testing-course",
});


export default function SoftwareTestingPage() {
  const courseSchema = generateCourseSchema({
    name: "Software Testing Full Course (Manual + Automation)",
    description: pageDescription,
    url: "/software-testing-course",
    slug: "software-testing-course",
    level: "Beginner to Advanced",
    duration: "P4M", // 4 Months
    rating: 4.9,
    reviewCount: 1250,
    instructor: "Industry Experts",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Software Testing Course", url: "/software-testing-course" },
  ]);

  const faqSchema = generateFAQSchema(softwareTestingFaqs.map(f => ({
    question: f.question,
    answer: f.answer
  })));

  return (
    <main className="bg-white min-h-screen">
      <JsonLd id="software-testing-course-schema" schema={courseSchema} />
      <JsonLd id="software-testing-breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="software-testing-faq-schema" schema={faqSchema} />


      <HeroSection />
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav navItems={general_course} />
      </div>
      <section id="features"><FeaturesSection /></section>
      <section id="courses"><CoursesSection /></section>
      <section id="curriculum"><CurriculumSection /></section>
      <section id="testimonials"><TestimonialsClient /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="career"><CareerPathSection /></section>
      <section id="faqs"><FAQSection /></section>
      <section id="contact"><CtaClient /></section>
    </main>
  );
}
