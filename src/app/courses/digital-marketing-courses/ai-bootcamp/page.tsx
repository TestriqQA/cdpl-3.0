import HeroSection from "@/components/ai-bootcamp/HeroSection";
import StickyNav from "@/components/StickyNav2/StickyNav2";
import { with_roadmap } from '@/components/StickyNavData';
import StatsSection from "@/components/ai-bootcamp/StatsSection";
import JsonLd from "@/components/JsonLd";
// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import WhyEngineerProgram from "@/components/ai-bootcamp/WhyEngineerProgram";
import CurriculumSection from "@/components/ai-bootcamp/CurriculumSection";
import ProjectsSection from "@/components/ai-bootcamp/ProjectsSection";
import TestimonialsSection from "@/components/ai-bootcamp/TestimonialsSection";
import CareerSection from "@/components/ai-bootcamp/CareerSection";
import WhoShouldEnroll from "@/components/ai-bootcamp/WhoShouldEnroll";
import ToolsSection from "@/components/ai-bootcamp/ToolsSection";
import FaqSection from "@/components/ai-bootcamp/FaqSection";
import CtaSection from "@/components/ai-bootcamp/CtaSection";
import CareerRoadmapSection from "@/components/ai-bootcamp/CareerRoadmapSection";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateAiBootcampCoursePageSchema } from "@/lib/schema-generators";
import { AI_BOOTCAMP_FAQS, AI_BOOTCAMP_REVIEW_DATA } from "@/data/aiBootcampData";

export const metadata = generateMetadata({
    title: "AI-Powered Digital Marketing Bootcamp | CDPL",
    description: "30-hour AI digital marketing bootcamp — ChatGPT for content, AI ad optimization, SEO, SEM & performance marketing with placement assistance. Online & classroom.",
    keywords: [
        "AI digital marketing bootcamp",
        "digital marketing course mumbai",
        "performance marketing training",
        "job assistance digital marketing",
        "AI marketing tools",
        "digital marketing hybrid course"
    ],
    url: '/courses/digital-marketing-courses/ai-bootcamp',
    image: "/og-images/courses-digital-marketing-courses-ai-bootcamp-og.webp",
});

export default function AiBootcampPage() {
    const schemas = generateAiBootcampCoursePageSchema(
        {
            name: "AI-Powered Digital Marketing Bootcamp",
            description: "Master Digital Marketing with AI in this 30-hour bootcamp. Learn SEO, SEM, Social Media, and Performance Marketing with Job Assistance.",
            url: '/courses/digital-marketing-courses/ai-bootcamp',
            slug: "ai-bootcamp",
            price: 15000,
            currency: "INR",
            duration: "P1M",
            instructor: "Expert Digital Marketers",
            rating: AI_BOOTCAMP_REVIEW_DATA.ratingValue,
            reviewCount: AI_BOOTCAMP_REVIEW_DATA.reviewCount,
            image: "/og-images/courses-digital-marketing-courses-ai-bootcamp-og.webp",
        },
        AI_BOOTCAMP_FAQS.map(f => ({ question: f.question, answer: f.answer })),
        [
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
            { name: "Digital Marketing Courses", url: "/courses/digital-marketing-courses" },
            { name: "AI Bootcamp", url: '/courses/digital-marketing-courses/ai-bootcamp' },
        ]
    );

    return (
        <div className="min-h-screen flex flex-col">
            {schemas.map((schema, index) => (
                <JsonLd key={`ai-bootcamp-schema-${index}`} id={`ai-bootcamp-schema-${index}`} schema={schema} />
            ))}

            <div>
                <HeroSection />
                <div className="hidden md:block sticky top-0 z-20">
                    <StickyNav navItems={with_roadmap} />
                </div>
                <section id="program-stats"><StatsSection /></section>
                <section id="why-master-program"><WhyEngineerProgram /></section>
                <section id="curriculum"><CurriculumSection /></section>
                <section id="tools"><ToolsSection /></section>
                <section id="roadmap"><CareerRoadmapSection /></section>
                <section id="projects"><ProjectsSection /></section>
                <section id="testimonials"><TestimonialsSection /></section>
                <section id="career"><CareerSection /></section>
                <section id="who-should-enroll"><WhoShouldEnroll /></section>
                <section id="faqs"><FaqSection /></section>
                <section id="contact"><CtaSection /></section>
            </div>
        </div>
    );
}
