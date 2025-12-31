import StickyNav from '@/components/StickyNav2/StickyNav2';
import { TestimonialsClient, CtaClient } from "@/app/advance-software-testing/client-section";
import HeroSection from '@/components/advance-software-testing/HeroSection';
import JsonLd from "@/components/JsonLd";
import {
  StatsSection,
  WhyAdvancedTesting,
  CurriculumSection,
  ProjectsSection,
  CareerSection,
  WhoShouldEnroll,
  ToolsSection,
  FaqSection
} from "@/app/advance-software-testing/server-sections";

import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { ADVANCED_TESTING_FAQS, ADVANCED_TESTING_REVIEW_DATA } from "@/data/advancedTestingData";

export const metadata = generateMetadata({
  title: "Advanced Software Testing Course | SDET Training | 100% Placement",
  description: "Master Selenium, Appium, API, Cypress, and Performance Testing. Become a full-stack SDET with real projects and ISTQB certification.",
  keywords: [
    "SDET course",
    "Selenium training",
    "Appium",
    "automation testing",
    "ISTQB certification",
    "QA jobs India",
    "Cypress testing course",
    "performance testing",
    "JMeter training",
    "full stack QA"
  ],
  url: "/advance-software-testing",
  image: "/og-images/advanced-testing-course.jpg",
});

export default function Home() {
  const courseSchema = generateCourseSchema({
    name: "Advanced Software Testing Course (SDET)",
    description: "Master Selenium, Appium, API, Cypress, and Performance Testing. Become a full-stack SDET with real projects and ISTQB certification.",
    url: "/advance-software-testing",
    slug: "advance-software-testing",
    instructor: "CDPL Expert Mentors",
    duration: "PT25H", // 25 hours
    rating: ADVANCED_TESTING_REVIEW_DATA.ratingValue,
    reviewCount: ADVANCED_TESTING_REVIEW_DATA.reviewCount,
    price: 8000, // Estimated price
    currency: "INR",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Advanced Software Testing", url: "/advance-software-testing" },
  ]);

  const faqSchema = generateFAQSchema(ADVANCED_TESTING_FAQS);

  return (
    <div className='overflow-hidden'>
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyAdvancedTesting /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsClient /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaClient /></section>
    </div>
  );
}