// pages/machine-learning-data-science.tsx
const HeroSection = dynamic(() => import('@/components/machine-learning-course/HeroSection'), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StatsSection = dynamic(() => import('@/components/machine-learning-course/StatsSection'), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const CurriculumSection = dynamic(() => import('@/components/machine-learning-course/CurriculumSection'), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import('@/components/machine-learning-course/ProjectsSection'), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import('@/components/machine-learning-course/TestimonialsSection'), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import('@/components/machine-learning-course/CareerSection'), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import('@/components/machine-learning-course/WhoShouldEnroll'), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import('@/components/machine-learning-course/ToolsSection'), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import('@/components/machine-learning-course/FaqSection'), { ssr: true, loading: () => <SectionLoader label="Loading FAQs section..." /> });
const CtaSection = dynamic(() => import('@/components/machine-learning-course/CtaSection'), { ssr: true, loading: () => <SectionLoader label="Loading CTA section..." /> });
const CareerRoadmapSection = dynamic(() => import('@/components/machine-learning-course/CareerRoadmapSection'), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const WhyMLProgram = dynamic(() => import('@/components/machine-learning-course/WhyMLProgram'), { ssr: true, loading: () => <SectionLoader label="Loading why ML program section..." /> });
const StickyNav3 = dynamic(() => import('@/components/StickyNav2/StickyNav3'), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { MACHINE_LEARNING_FAQS, MACHINE_LEARNING_REVIEW_DATA } from "@/data/machineLearningData";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

export const metadata = generateMetadata({
  title: "Machine Learning & Data Science with Python Hero Program | Mumbai | CDPL",
  description: "95-Hour Hero Program in Machine Learning and Data Science with Python. Hands-on projects, 100% job assistance, global certificates.",
  keywords: [
    "machine learning course mumbai",
    "data science with python",
    "python data science training",
    "ml hero program",
    "data scientist jobs mumbai",
    "artificial intelligence course",
    "deep learning training"
  ],
  url: "/machine-learning-course",
  image: "/og-images/machine-learning-course.jpg",
});

export default function MachineLearningPage() {
  const courseSchema = generateCourseSchema({
    name: "Machine Learning & Data Science with Python Hero Program",
    description: "95-Hour Hero Program in Machine Learning and Data Science with Python. Hands-on projects, 100% job assistance, global certificates.",
    url: "/machine-learning-course",
    slug: "machine-learning-course",
    price: 35000,
    currency: "INR",
    duration: "P2M1W", // ~9-10 weeks
    instructor: "Expert ML & Data Science Mentors",
    rating: MACHINE_LEARNING_REVIEW_DATA.ratingValue,
    reviewCount: MACHINE_LEARNING_REVIEW_DATA.reviewCount,
    image: "/og-images/machine-learning-course.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Machine Learning & Data Science", url: "/machine-learning-course" },
  ]);

  const faqSchema = generateFAQSchema(MACHINE_LEARNING_FAQS);

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
      <section id='why-master-program'><WhyMLProgram /></section>
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