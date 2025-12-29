const HeroSection = dynamic(() => import('@/components/automation-testing-course/HeroSection'), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
import { software_testing } from '@/components/StickyNavData';
const StatsSection = dynamic(() => import('@/components/automation-testing-course/StatsSection'), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyAutomation = dynamic(() => import('@/components/automation-testing-course/WhyAutomation'), { ssr: true, loading: () => <SectionLoader label="Loading why automation section..." /> });
const CurriculumSection = dynamic(() => import('@/components/automation-testing-course/CurriculumSection'), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import('@/components/automation-testing-course/ProjectsSection'), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import('@/components/automation-testing-course/TestimonialsSection'), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import('@/components/automation-testing-course/CareerSection'), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import('@/components/automation-testing-course/WhoShouldEnroll'), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import('@/components/automation-testing-course/ToolsSection'), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import('@/components/automation-testing-course/FaqSection'), { ssr: true, loading: () => <SectionLoader label="Loading FAQs section..." /> });
const CtaSection = dynamic(() => import('@/components/automation-testing-course/CtaSection'), { ssr: true, loading: () => <SectionLoader label="Loading CTA section..." /> });
const StickyNav = dynamic(() => import('@/components/StickyNav2/StickyNav2'), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { AUTOMATION_TESTING_FAQS, AUTOMATION_TESTING_REVIEW_DATA } from "@/data/automationTestingData";
import dynamic from 'next/dynamic';

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

export const metadata = generateMetadata({
  title: "Advanced Automation Testing Course | SDET Training | 100% Placement",
  description: "Master Cypress, Playwright, AI Testing, CI/CD. Become a future-ready SDET with elite projects and FAANG placement.",
  keywords: [
    "automation testing course",
    "SDET training",
    "Cypress",
    "Playwright",
    "AI testing",
    "Selenium",
    "ISTQB",
    "QA automation",
    "software testing with python",
    "full stack QA"
  ],
  url: "/automation-testing-course",
  image: "/og-images/automation-testing-course.jpg",
});

export default function Home() {
  const courseSchema = generateCourseSchema({
    name: "Advanced Automation Testing Course (SDET)",
    description: "Master Cypress, Playwright, AI Testing, CI/CD. Become a future-ready SDET with elite projects and FAANG placement.",
    url: "/automation-testing-course",
    slug: "automation-testing-course",
    instructor: "CDPL Expert Mentors",
    duration: "PT30H", // 30 hours
    rating: AUTOMATION_TESTING_REVIEW_DATA.ratingValue,
    reviewCount: AUTOMATION_TESTING_REVIEW_DATA.reviewCount,
    price: 10000, // Estimated price
    currency: "INR",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Automation Testing", url: "/automation-testing-course" },
  ]);

  const faqSchema = generateFAQSchema(AUTOMATION_TESTING_FAQS);

  return (
    <>
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />

      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav navItems={software_testing} />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyAutomation /></section>
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