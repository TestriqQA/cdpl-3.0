// pages/advanced-data-science-ml.tsx
const HeroSection = dynamic(() => import('@/components/data-science-course/HeroSection'), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StatsSection = dynamic(() => import('@/components/data-science-course/StatsSection'), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyDSProgram = dynamic(() => import('@/components/data-science-course/WhyDSProgram'), { ssr: true, loading: () => <SectionLoader label="Loading why DS program section..." /> });
const CurriculumSection = dynamic(() => import('@/components/data-science-course/CurriculumSection'), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import('@/components/data-science-course/ProjectsSection'), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import('@/components/data-science-course/TestimonialsSection'), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import('@/components/data-science-course/CareerSection'), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import('@/components/data-science-course/WhoShouldEnroll'), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import('@/components/data-science-course/ToolsSection'), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import('@/components/data-science-course/FaqSection'), { ssr: true, loading: () => <SectionLoader label="Loading FAQs section..." /> });
const CtaSection = dynamic(() => import('@/components/data-science-course/CtaSection'), { ssr: true, loading: () => <SectionLoader label="Loading CTA section..." /> });
const CareerRoadmapSection = dynamic(() => import('@/components/data-science-course/CareerRoadmapSection'), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const StickyNav3 = dynamic(() => import('@/components/StickyNav2/StickyNav3'), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
const JsonLd = dynamic(() => import('@/components/JsonLd'), { ssr: true, loading: () => <SectionLoader label="Loading JSON-LD..." /> });
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DATA_SCIENCE_FAQS, DATA_SCIENCE_REVIEW_DATA } from "@/data/dataScienceData";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

export const metadata = generateMetadata({
  title: "Advanced Data Science & Machine Learning Masterclass in Mumbai | 200-Hour Program | CDPL",
  description: "200-Hour Masterclass in Advanced Data Science and Machine Learning. Hands-on projects, 100% job assistance, global certificates.",
  keywords: [
    "advanced data science course mumbai",
    "machine learning masterclass",
    "data science training mumbai",
    "ml jobs mumbai",
    "deep learning course",
    "ai masterclass"
  ],
  url: "/data-science-course",
  image: "/og-images/data-science-course.jpg",
});

export default function AdvancedDSMLPage() {
  const courseSchema = generateCourseSchema({
    name: "Advanced Data Science & Machine Learning Masterclass",
    description: "200-Hour Masterclass in Advanced Data Science and Machine Learning. Hands-on projects, 100% job assistance, global certificates.",
    url: "/data-science-course",
    slug: "data-science-course",
    price: 50000,
    currency: "INR",
    duration: "P4M", // ~16-20 weeks
    instructor: "Expert Data Science & AI Mentors",
    rating: DATA_SCIENCE_REVIEW_DATA.ratingValue,
    reviewCount: DATA_SCIENCE_REVIEW_DATA.reviewCount,
    image: "/og-images/data-science-course.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Data Science & ML Masterclass", url: "/data-science-course" },
  ]);

  const faqSchema = generateFAQSchema(DATA_SCIENCE_FAQS);

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
      <section id='why-master-program'><WhyDSProgram /></section>
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