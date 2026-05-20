import StickyNav from "@/components/StickyNav2/StickyNav2";
import { TestimonialsClient, CtaClient } from "@/app/courses/digital-marketing-courses/digital-marketing-course/client-section";
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
} from "@/app/courses/digital-marketing-courses/digital-marketing-course/server-sections";

import { generateMetadata } from "@/lib/metadata-generator";
import { generateDigitalMarketingCoursePageSchema } from "@/lib/schema-generators";
import { DIGITAL_MARKETING_FAQS, DIGITAL_MARKETING_REVIEW_DATA } from "@/data/digitalMarketingData";

export const metadata = generateMetadata({
  title: "Digital Marketing Course in Mumbai with AI | CDPL",
  description: "80+ hour digital marketing course in Mumbai — AI-driven SEO, PPC, Google Ads, social media & analytics with hands-on training and placement assistance.",
  keywords: [
    "digital marketing course Mumbai",
    "digital marketing course in Mumbai with placement",
    "best digital marketing institute in Mumbai",
    "SEO training Mumbai",
    "Google Ads course Mumbai",
    "social media marketing course Mumbai",
    "digital analytics training",
    "AI in digital marketing"
  ],
  url: '/courses/digital-marketing-courses/digital-marketing-course',
  image: "/og-images/courses-digital-marketing-courses-digital-marketing-course-og.webp",

});

export default function DigitalMarketingPage() {
  const schemas = generateDigitalMarketingCoursePageSchema(
    {
      name: "Advanced AI-Driven Digital Marketing & Analytics Master Program",
      description: "A comprehensive 80-hour digital marketing mastery program in Mumbai covering SEO, SEM, SMM, Content Marketing, and AI Tools with guaranteed placement assistance.",
      url: '/courses/digital-marketing-courses/digital-marketing-course',
      slug: "digital-marketing-course",
      price: 35000,
      currency: "INR",
      duration: "P3M",
      instructor: "Industry Expert Digital Marketing Practitioners",
      rating: DIGITAL_MARKETING_REVIEW_DATA.ratingValue,
      reviewCount: DIGITAL_MARKETING_REVIEW_DATA.reviewCount,
      image: "/og-images/courses-digital-marketing-courses-digital-marketing-course-og.webp",

    },
    DIGITAL_MARKETING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Digital Marketing Courses", url: "/courses/digital-marketing-courses" },
      { name: "Digital Marketing Course in Mumbai", url: '/courses/digital-marketing-courses/digital-marketing-course' },
    ]
  );

  return (
    <div className="min-h-screen bg-white">
      {schemas.map((schema, index) => (
        <JsonLd key={`dm-schema-${index}`} id={`dm-schema-${index}`} schema={schema} />
      ))}

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
