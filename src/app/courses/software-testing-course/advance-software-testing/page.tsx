import StickyNav from '@/components/StickyNav2/StickyNav2';
import { TestimonialsClient, CtaClient } from "@/app/courses/software-testing-course/advance-software-testing/client-section";
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
} from "@/app/courses/software-testing-course/advance-software-testing/server-sections";

import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema, generateAdvanceSoftwareTestingCoursePageSchema } from "@/lib/schema-generators";
import { ADVANCED_TESTING_FAQS, ADVANCED_TESTING_REVIEW_DATA } from "@/data/advancedTestingData";

export const metadata = generateMetadata({
  title: "Advanced Software Testing Course in Mumbai | CDPL",
  description: "Master Selenium, Cypress, Appium & API testing in our advanced SDET program. Job-oriented training in Mumbai with live projects, ISTQB prep & placement assistance.",
  keywords: [
    "advanced software testing course",
    "selenium course",
    "sdet training",
    "selenium certification course",
    "selenium training near me",
    "cypress testing course",
    "appium testing course",
    "software testing course with placement",
    "selenium automation testing course",
    "selenium java course",
    "selenium online courses",
    "automation testing",
    "QA training",
    "software testing course in mumbai",
    "job-oriented software testing course"
  ],
  url: '/courses/software-testing-course/advance-software-testing',
  image: "/og-images/courses-software-testing-course-advance-software-testing-og.webp",

});

export default function Home() {
  const schemas = generateAdvanceSoftwareTestingCoursePageSchema(
    {
      name: "Advanced Software Testing Course (SDET)",
      description: "Master Selenium, Appium, API, Cypress, and Performance Testing. Become a full-stack SDET with real projects and ISTQB certification.",
      url: '/courses/software-testing-course/advance-software-testing',
      slug: "advance-software-testing",
      instructor: "CDPL Expert Mentors",
      duration: "PT25H", // 25 hours
      rating: ADVANCED_TESTING_REVIEW_DATA.ratingValue,
      reviewCount: ADVANCED_TESTING_REVIEW_DATA.reviewCount,
      price: 8000, // Estimated price
      currency: "INR",
      image: "/og-images/courses-software-testing-course-advance-software-testing-og.webp",
    },

    ADVANCED_TESTING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Software Testing Course", url: "/courses/software-testing-course" },
      { name: "Advanced Software Testing", url: '/courses/software-testing-course/advance-software-testing' }
    ]
  );

  return (
    <div className='overflow-hidden'>
      {schemas.map((schema, index) => (
        <JsonLd key={`ast-schema-${index}`} id={`ast-schema-${index}`} schema={schema} />
      ))}
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
