import HeroSection from '@/components/dbms-course/HeroSection';
// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import StatsSection from '@/components/dbms-course/StatsSection';
import WhyMysqlSection from '@/components/dbms-course/WhyMysqlSection';
import CurriculumSection from '@/components/dbms-course/CurriculumSection';
import ProjectsSection from '@/components/dbms-course/ProjectsSection';
import StickyNav from '@/components/StickyNav2/StickyNav2';
import CareerSection from '@/components/dbms-course/CareerSection';
import WhoShouldEnroll from '@/components/dbms-course/WhoShouldEnroll';
import ToolsSection from '@/components/dbms-course/ToolsSection';
import FaqSection from '@/components/dbms-course/FaqSection';
import { TestimonialsSection } from '@/app/courses/software-testing-course/dbms-course/DbmsCourseClientContent';
import { CtaSection } from '@/app/courses/software-testing-course/dbms-course/DbmsCourseClientContent';
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema, generateDbmsCoursePageSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { DBMS_FAQS, DBMS_REVIEW_DATA } from "@/data/dbmsData";

export const metadata = generateMetadata({
  title: "MySQL Database Course | Job Placement | 20-Hour Training",
  description: "Master MySQL, SQL queries, database design, and optimization. Build real projects. Get certified and placed in top companies.",
  keywords: [
    "MySQL course",
    "SQL training",
    "database management",
    "MySQL certification",
    "DBA jobs India",
    "database design course",
    "SQL query optimization",
    "relational database management system",
    "backend development with MySQL"
  ],
  url: '/courses/software-testing-course/dbms-course',
  image: "/og-images/courses-software-testing-course-dbms-course-og.webp",
});

export default function Home() {
  const schemas = generateDbmsCoursePageSchema(
    {
      name: "MySQL Database Management System Course",
      description: "Master MySQL, SQL queries, database design, and optimization. Build real projects. Get certified and placed in top companies.",
      url: '/courses/software-testing-course/dbms-course',
      slug: "dbms-course",
      instructor: "CDPL Expert Mentors",
      duration: "PT20H", // 20 hours
      rating: DBMS_REVIEW_DATA.ratingValue,
      reviewCount: DBMS_REVIEW_DATA.reviewCount,
      price: 6000, // Estimated price
      currency: "INR",
      image: "/og-images/courses-software-testing-course-dbms-course-og.webp",
    },
    DBMS_FAQS.map(f => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Software Testing Course", url: "/courses/software-testing-course" },
      { name: "DBMS (MySQL)", url: '/courses/software-testing-course/dbms-course' }
    ]
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`dbms-schema-${index}`} id={`dbms-schema-${index}`} schema={schema} />
      ))}
      <HeroSection />
      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyMysqlSection /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <TestimonialsSection />
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <CtaSection />


    </>
  );
}
