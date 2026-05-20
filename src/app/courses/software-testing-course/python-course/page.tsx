import StickyNav3 from "@/components/StickyNav2/StickyNav3";
import { TestimonialsClient, CtaClient, FaqClient } from "@/app/courses/software-testing-course/python-course/client-section";
import HeroSection from '@/components/python-course/HeroSection';
import JsonLd from "@/components/JsonLd";
import {
  StatsSection,
  WhyPythonProgram,
  CurriculumSection,
  ProjectsSection,
  CareerSection,
  WhoShouldEnroll,
  ToolsSection,
  CareerRoadmapSection,
} from "@/app/courses/software-testing-course/python-course/server-sections";

import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema, generatePythonCoursePageSchema } from "@/lib/schema-generators";
import { PYTHON_FAQS, PYTHON_REVIEW_DATA } from "@/data/pythonData";

export const metadata = generateMetadata({
  title: "Python Programming Course in Mumbai | CDPL",
  description: "Job-ready Python course in Mumbai — data structures, OOP, pandas, NumPy, automation scripting & live projects with placement assistance.",
  keywords: [
    "python course mumbai",
    "python training",
    "django course",
    "data science python",
    "python job guarantee",
    "python certification mumbai",
    "python web development course",
    "online python classes"
  ],
  url: '/courses/software-testing-course/python-course',
  image: "/og-images/courses-software-testing-course-python-course-og.webp",
});

export default function PythonPage() {
  const schemas = generatePythonCoursePageSchema(
    {
      name: "Python Programming Master Course",
      description: "Best Python course in Mumbai with Django, Data Science, ML, Automation. 100% placement. Live projects, global certificate.",
      url: '/courses/software-testing-course/python-course',
      slug: "python-course",
      price: 18000,
      currency: "INR",
      duration: "P2M2W", // ~10 weeks
      instructor: "Expert Python Mentors",
      rating: PYTHON_REVIEW_DATA.ratingValue,
      reviewCount: PYTHON_REVIEW_DATA.reviewCount,
      image: "/og-images/courses-software-testing-course-python-course-og.webp",
    },
    PYTHON_FAQS.map(f => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Software Testing Course", url: "/courses/software-testing-course" },
      { name: "Python Programming", url: '/courses/software-testing-course/python-course' }
    ]
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`python-schema-${index}`} id={`python-schema-${index}`} schema={schema} />
      ))}
      <HeroSection />

      {/* Sticky nav must appear right after hero */}
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav3 />
      </div>

      <section id='program-stats'><StatsSection /></section>
      <section id='why-master-program'><WhyPythonProgram /></section>
      <section id='curriculum'><CurriculumSection /></section>
      <section id='tools'><ToolsSection /></section>
      <section id='roadmap'><CareerRoadmapSection /></section>
      <section id='projects'><ProjectsSection /></section>
      <section id='testimonials'><TestimonialsClient /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqClient /></section>
      <section id='contact'><CtaClient /></section>
    </>
  );
}
