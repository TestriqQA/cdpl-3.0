const HeroSection = dynamic(() => import('@/components/advance-software-testing/HeroSection'), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StatsSection = dynamic(() => import('@/components/advance-software-testing/StatsSection'), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyAdvancedTesting = dynamic(() => import('@/components/advance-software-testing/WhyAdvancedTesting'), { ssr: true, loading: () => <SectionLoader label="Loading why advanced testing section..." /> });
const CurriculumSection = dynamic(() => import('@/components/advance-software-testing/CurriculumSection'), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import('@/components/advance-software-testing/ProjectsSection'), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import('@/components/advance-software-testing/TestimonialsSection'), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import('@/components/advance-software-testing/CareerSection'), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import('@/components/advance-software-testing/WhoShouldEnroll'), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import('@/components/advance-software-testing/ToolsSection'), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import('@/components/advance-software-testing/FaqSection'), { ssr: true, loading: () => <SectionLoader label="Loading FAQs section..." /> });
const CtaSection = dynamic(() => import('@/components/advance-software-testing/CtaSection'), { ssr: true, loading: () => <SectionLoader label="Loading CTA section..." /> });
const StickyNav = dynamic(() => import('@/components/StickyNav2/StickyNav2'), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { ADVANCED_TESTING_FAQS, ADVANCED_TESTING_REVIEW_DATA } from "@/data/advancedTestingData";
import dynamic from 'next/dynamic';

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

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
      <section id='testimonials'><TestimonialsSection /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaSection /></section>
    </div>
  );
}