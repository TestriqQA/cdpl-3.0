const HeroSection = dynamic(() => import("@/components/digital-marketing-course/HeroSection"), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StatsSection = dynamic(() => import("@/components/digital-marketing-course/StatsSection"), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyMasterProgram = dynamic(() => import("@/components/digital-marketing-course/WhyMasterProgram"), { ssr: true, loading: () => <SectionLoader label="Loading why master program section..." /> });
const CurriculumSection = dynamic(() => import("@/components/digital-marketing-course/CurriculumSection"), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import("@/components/digital-marketing-course/ProjectsSection"), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import("@/components/digital-marketing-course/TestimonialsSection"), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import("@/components/digital-marketing-course/CareerSection"), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import("@/components/digital-marketing-course/WhoShouldEnroll"), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import("@/components/digital-marketing-course/ToolsSection"), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import("@/components/digital-marketing-course/FaqSection"), { ssr: true, loading: () => <SectionLoader label="Loading faq section..." /> });
const CtaSection = dynamic(() => import("@/components/digital-marketing-course/CtaSection"), { ssr: true, loading: () => <SectionLoader label="Loading cta section..." /> });
const StickyNav = dynamic(() => import("@/components/StickyNav2/StickyNav2"), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
const JsonLd = dynamic(() => import("@/components/JsonLd"), { ssr: true, loading: () => <SectionLoader label="Loading json ld..." /> });
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DIGITAL_MARKETING_FAQS, DIGITAL_MARKETING_REVIEW_DATA } from "@/data/digitalMarketingData";
import dynamic from "next/dynamic";


function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}


export const metadata = generateMetadata({
  title: "AI-Driven Digital Marketing & Analytics Master Program | CDPL Mumbai",
  description: "80-Hour Job-Ready Digital Marketing Course in Mumbai with AI, SEO, PPC, Google Ads, Social Media & Analytics. 100% Placement Assistance.",
  keywords: [
    "digital marketing course Mumbai",
    "AI digital marketing training",
    "SEO course",
    "Google Ads certification",
    "social media marketing",
    "digital analytics"
  ],
  url: "/digital-marketing-course",
  image: "/og-images/digital-marketing-course.jpg",
});

export default function DigitalMarketingPage() {
  const courseSchema = generateCourseSchema({
    name: "AI-Driven Digital Marketing & Analytics Master Program",
    description: "80-Hour Job-Ready Digital Marketing Course in Mumbai with AI, SEO, PPC, Google Ads, Social Media & Analytics. 100% Placement Assistance.",
    url: "/digital-marketing-course",
    slug: "digital-marketing-course",
    price: 35000,
    currency: "INR",
    duration: "P3M", // ~3 months
    instructor: "Expert Digital Marketers",
    rating: DIGITAL_MARKETING_REVIEW_DATA.ratingValue,
    reviewCount: DIGITAL_MARKETING_REVIEW_DATA.reviewCount,
    image: "/og-images/digital-marketing-course.jpg",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Courses", url: "/courses" },
    { name: "Digital Marketing", url: "/digital-marketing-course" },
  ]);

  const faqSchema = generateFAQSchema(DIGITAL_MARKETING_FAQS);

  return (
    <div className="min-h-screen bg-white">
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
    </div>
  );
}