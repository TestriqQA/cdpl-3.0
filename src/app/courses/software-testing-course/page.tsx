import StickyNav from '@/components/StickyNav2/StickyNav2';
import { general_course } from '@/components/StickyNavData';
import { TestimonialsClient, CtaClient } from "@/app/courses/software-testing-course/client-section";
import HeroSection from '@/components/software-testing-course/HeroSection';
import {
  FeaturesSection,
  CurriculumSection,
  CoursesSection,
  ProjectsSection,
  CareerPathSection,
  FAQSection
} from "@/app/courses/software-testing-course/server-sections";
import JsonLd from "@/components/JsonLd";
import { generateSoftwareTestingCategoryPageSchema } from "@/lib/schema-generators";
import { softwareTestingFaqs } from "@/components/software-testing-course/data/data";
import { generateMetadata } from '@/lib/metadata-generator';
import { Metadata } from 'next';

const pageTitle = "Software Testing Course in Mumbai & Thane with Placement";
const pageDescription = "Looking for the comprehensive Software Testing Course in Mumbai? Master Manual & Automation Testing (Selenium, Java, API) with interviews. Certified QA training with placement support.";
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
  url: '/courses/software-testing-course',
  image: "/og-images/courses-software-testing-course-og.png",
});


export default function SoftwareTestingPage() {
  const schemas = generateSoftwareTestingCategoryPageSchema(
    {
      name: "Software Testing Full Course (Manual + Automation)",
      description: pageDescription,
      url: '/courses/software-testing-course',
      slug: "software-testing-course",
      level: "Beginner to Advanced",
      duration: "P4M", // 4 Months
      rating: 4.9,
      reviewCount: 1250,
      instructor: "Industry Experts",
      image: "/og-images/courses-software-testing-course-og.png",
    },
    softwareTestingFaqs.map(f => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Software Testing Course", url: '/courses/software-testing-course' },
    ]
  );

  return (
    <div className="bg-white min-h-screen">
      {schemas.map((schema, index) => (
        <JsonLd key={index} id={`software-testing-schema-${index}`} schema={schema} />
      ))}


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
    </div>
  );
}
