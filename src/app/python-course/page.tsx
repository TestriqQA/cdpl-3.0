// pages/python-programming.tsx
const HeroSection = dynamic(() => import('@/components/python-course/HeroSection'), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StatsSection = dynamic(() => import('@/components/python-course/StatsSection'), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyPythonProgram = dynamic(() => import('@/components/python-course/WhyPythonProgram'), { ssr: true, loading: () => <SectionLoader label="Loading why python program section..." /> });
const CurriculumSection = dynamic(() => import('@/components/python-course/CurriculumSection'), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import('@/components/python-course/ProjectsSection'), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const CareerSection = dynamic(() => import('@/components/python-course/CareerSection'), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import('@/components/python-course/WhoShouldEnroll'), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import('@/components/python-course/ToolsSection'), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const TestimonialsSection = dynamic(() => import('@/components/python-course/TestimonialsSection'), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerRoadmapSection = dynamic(() => import('@/components/python-course/CareerRoadmapSection'), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const FaqSection = dynamic(() => import('@/components/python-course/FaqSection'), { ssr: true, loading: () => <SectionLoader label="Loading FAQs section..." /> });
const CtaSection = dynamic(() => import('@/components/python-course/CtaSection'), { ssr: true, loading: () => <SectionLoader label="Loading CTA section..." /> });
const StickyNav3 = dynamic(() => import('@/components/StickyNav2/StickyNav3'), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { PYTHON_FAQS, PYTHON_REVIEW_DATA } from "@/data/pythonData";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

export const metadata = generateMetadata({
  title: "Python Programming Course in Mumbai | 80-Hour Job-Ready Training | CDPL",
  description: "Best Python course in Mumbai with Django, Data Science, ML, Automation. 100% placement. Live projects, global certificate.",
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
  url: "/python-course",
  image: "/og-images/python-course.jpg",
});

export default function PythonPage() {
  const courseSchema = generateCourseSchema({
    name: "Python Programming Master Course",
    description: "Best Python course in Mumbai with Django, Data Science, ML, Automation. 100% placement. Live projects, global certificate.",
    url: "/python-course",
    slug: "python-course",
    price: 18000,
    currency: "INR",
    duration: "P2M2W", // ~10 weeks
    instructor: "Expert Python Mentors",
    rating: PYTHON_REVIEW_DATA.ratingValue,
    reviewCount: PYTHON_REVIEW_DATA.reviewCount,
    image: "/og-images/python-course.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Python Programming", url: "/python-course" },
  ]);

  const faqSchema = generateFAQSchema(PYTHON_FAQS);

  return (
    <>
      <JsonLd id="course-schema" schema={courseSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />

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
      <section id='testimonials'><TestimonialsSection /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaSection /></section>
    </>
  );
};

