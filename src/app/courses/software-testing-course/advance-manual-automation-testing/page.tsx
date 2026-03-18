import StickyNav from '@/components/StickyNav2/StickyNav2';
import { TestimonialsClient, CtaClient } from "@/app/courses/software-testing-course/advance-manual-automation-testing/client-section";
import HeroSection from "@/components/advance-manual-automation-testing/HeroSection";
import JsonLd from "@/components/JsonLd";
import {
  StatsSection,
  WhyMasterProgram,
  CurriculumSection,
  ProjectsSection,
  CareerSection,
  WhoShouldEnroll,
  ToolsSection,
  FaqSection,
} from "@/app/courses/software-testing-course/advance-manual-automation-testing/server-sections";

import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { ADVANCE_MANUAL_AUTOMATION_FAQS, ADVANCE_MANUAL_AUTOMATION_REVIEW_DATA } from "@/data/advanceManualAutomationData";

export const metadata = generateMetadata({
  title: "What is Selenium Testing? Master Manual & Automation Testing | 100% Placement",
  description: "Learn what is selenium testing & UI testing in our 180-hour Master Program. Cover Selenium, Cypress, API & Mobile automation. 100% placement support in Mumbai/Thane.",
  keywords: [
    "what is selenium testing",
    "what is ui testing",
    "what is selenium testing tool used for",
    "what is cypress testing",
    "tester fresher",
    "selenium practice sites",
    "unit testing",
    "selenium maven",
    "automation testing projects with selenium",
    "web testing interview questions",
    "web application testing",
    "ui testing",
    "mobile app automation testing",
    "system testing",
    "mobile automation testing",
    "ci testing",
    "automated ui testing",
    "selenium api testing",
    "ui testing tools",
    "selenium practice",
    "selenium methods",
    "user interface testing",
    "web testing tools"
  ],
  url: '/courses/software-testing-course/advance-manual-automation-testing',
  image: "/og-images/advance-manual-automation-testing.jpg",
});

export default function Home() {
  const courseSchema = generateCourseSchema({
    name: "Advanced Manual & Automation Testing Master Program",
    description: "Master ISTQB Manual Testing + Selenium, Cypress, API, Mobile. Get dual certified and placed in top QA roles.",
    url: '/courses/software-testing-course/advance-manual-automation-testing',
    slug: "advance-manual-automation-testing",
    price: 25000,
    currency: "INR",
    duration: "P4M",
    instructor: "Expert QA Mentors",
    rating: ADVANCE_MANUAL_AUTOMATION_REVIEW_DATA.ratingValue,
    reviewCount: ADVANCE_MANUAL_AUTOMATION_REVIEW_DATA.reviewCount,
    image: "/og-images/advance-manual-automation-testing.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Software Testing Course", url: "/courses/software-testing-course" },
    { name: "Manual & Automation Testing", url: '/courses/software-testing-course/advance-manual-automation-testing' },
  ]);

  const faqSchema = generateFAQSchema(ADVANCE_MANUAL_AUTOMATION_FAQS);

  return (
    <>
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyMasterProgram /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsClient /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaClient /></section>
    </>
  );
}
