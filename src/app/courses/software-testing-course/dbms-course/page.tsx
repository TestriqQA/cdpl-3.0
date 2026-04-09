import HeroSection from '@/components/dbms-course/HeroSection';
const StatsSection = dynamic(() => import('@/components/dbms-course/StatsSection'), { ssr: true, loading: () => <SectionLoader label="Loading stats..." /> });
const WhyMysqlSection = dynamic(() => import('@/components/dbms-course/WhyMysqlSection'), { ssr: true, loading: () => <SectionLoader label="Loading why..." /> });
const CurriculumSection = dynamic(() => import('@/components/dbms-course/CurriculumSection'), { ssr: true, loading: () => <SectionLoader label="Loading curriculum..." /> });
const ProjectsSection = dynamic(() => import('@/components/dbms-course/ProjectsSection'), { ssr: true, loading: () => <SectionLoader label="Loading projects..." /> });
import StickyNav from '@/components/StickyNav2/StickyNav2';
const CareerSection = dynamic(() => import('@/components/dbms-course/CareerSection'), { ssr: true, loading: () => <SectionLoader label="Loading career..." /> });
const WhoShouldEnroll = dynamic(() => import('@/components/dbms-course/WhoShouldEnroll'), { ssr: true, loading: () => <SectionLoader label="Loading enrollment info..." /> });
const ToolsSection = dynamic(() => import('@/components/dbms-course/ToolsSection'), { ssr: true, loading: () => <SectionLoader label="Loading tools..." /> });
const FaqSection = dynamic(() => import('@/components/dbms-course/FaqSection'), { ssr: true, loading: () => <SectionLoader label="Loading FAQs..." /> });
import { TestimonialsSection } from '@/app/courses/software-testing-course/dbms-course/DbmsCourseClientContent';
import { CtaSection } from '@/app/courses/software-testing-course/dbms-course/DbmsCourseClientContent';
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema, generateDbmsCoursePageSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { DBMS_FAQS, DBMS_REVIEW_DATA } from "@/data/dbmsData";
import dynamic from 'next/dynamic';

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

export const metadata = generateMetadata({
  title: "MySQL Database Course | 100% Job Placement | 20-Hour Training",
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
