import StickyNav from "@/components/StickyNav2/StickyNav2";
import { TestimonialsClient, CtaClient } from "@/app/digital-marketing-course/client-section";
import HeroSection from "@/components/digital-marketing-course/HeroSection";
import StatsSection from "@/components/digital-marketing-course/StatsSection";
import JsonLd from "@/components/JsonLd";
import {
  WhyMasterProgram,
  CurriculumSection,
  ProjectsSection,
  CareerSection,
  WhoShouldEnroll,
  ToolsSection,
  FaqSection,
} from "@/app/digital-marketing-course/server-sections";

import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DIGITAL_MARKETING_FAQS, DIGITAL_MARKETING_REVIEW_DATA } from "@/data/digitalMarketingData";

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
      <section id='testimonials'><TestimonialsClient /></section>
      <section id='career'><CareerSection /></section>
      <section id='who-should-enroll'><WhoShouldEnroll /></section>
      <section id='faqs'><FaqSection /></section>
      <section id='contact'><CtaClient /></section>
    </div>
  );
}
