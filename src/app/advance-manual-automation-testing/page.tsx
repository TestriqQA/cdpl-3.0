const HeroSection = dynamic(() => import('@/components/advance-manual-automation-testing/HeroSection'), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StatsSection = dynamic(() => import('@/components/advance-manual-automation-testing/StatsSection'), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyMasterProgram = dynamic(() => import('@/components/advance-manual-automation-testing/WhyMasterProgram'), { ssr: true, loading: () => <SectionLoader label="Loading why master program section..." /> });
const CurriculumSection = dynamic(() => import('@/components/advance-manual-automation-testing/CurriculumSection'), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import('@/components/advance-manual-automation-testing/ProjectsSection'), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import('@/components/advance-manual-automation-testing/TestimonialsSection'), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import('@/components/advance-manual-automation-testing/CareerSection'), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import('@/components/advance-manual-automation-testing/WhoShouldEnroll'), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import('@/components/advance-manual-automation-testing/ToolsSection'), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import('@/components/advance-manual-automation-testing/FaqSection'), { ssr: true, loading: () => <SectionLoader label="Loading FAQs section..." /> });
const CtaSection = dynamic(() => import('@/components/advance-manual-automation-testing/CtaSection'), { ssr: true, loading: () => <SectionLoader label="Loading CTA section..." /> });
const StickyNav = dynamic(() => import('@/components/StickyNav2/StickyNav2'), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { ADVANCE_MANUAL_AUTOMATION_FAQS, ADVANCE_MANUAL_AUTOMATION_REVIEW_DATA } from "@/data/advanceManualAutomationData";
import dynamic from 'next/dynamic';

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

export const metadata = generateMetadata({
  title: "Advanced Manual & Automation Testing Master Program | 100% Placement",
  description: "Master ISTQB Manual Testing + Selenium, Cypress, API, Mobile. Get dual certified and placed in top QA roles.",
  keywords: [
    "manual testing course",
    "automation testing",
    "ISTQB certification",
    "Selenium training",
    "QA jobs India",
    "SDET course",
    "software testing master program",
    "learn software testing",
    "software testing certification"
  ],
  url: "/advance-manual-automation-testing",
  image: "/og-images/advance-manual-automation-testing.jpg",
});

export default function Home() {
  const courseSchema = generateCourseSchema({
    name: "Advanced Manual & Automation Testing Master Program",
    description: "Master ISTQB Manual Testing + Selenium, Cypress, API, Mobile. Get dual certified and placed in top QA roles.",
    url: "/advance-manual-automation-testing",
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
    { name: "Manual & Automation Testing", url: "/advance-manual-automation-testing" },
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
      <section id='testimonials'><TestimonialsSection /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaSection /></section>
    </>
  );
}