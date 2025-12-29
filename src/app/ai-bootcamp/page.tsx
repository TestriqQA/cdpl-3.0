const HeroSection = dynamic(() => import("@/components/ai-bootcamp/HeroSection"), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StickyNav = dynamic(() => import("@/components/StickyNav2/StickyNav2"), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import { with_roadmap } from '@/components/StickyNavData';
const StatsSection = dynamic(() => import("@/components/ai-bootcamp/StatsSection"), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyEngineerProgram = dynamic(() => import("@/components/ai-bootcamp/WhyEngineerProgram"), { ssr: true, loading: () => <SectionLoader label="Loading why engineer program section..." /> });
const CurriculumSection = dynamic(() => import("@/components/ai-bootcamp/CurriculumSection"), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import("@/components/ai-bootcamp/ProjectsSection"), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import("@/components/ai-bootcamp/TestimonialsSection"), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import("@/components/ai-bootcamp/CareerSection"), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import("@/components/ai-bootcamp/WhoShouldEnroll"), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import("@/components/ai-bootcamp/ToolsSection"), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import("@/components/ai-bootcamp/FaqSection"), { ssr: true, loading: () => <SectionLoader label="Loading faq section..." /> });
const CtaSection = dynamic(() => import("@/components/ai-bootcamp/CtaSection"), { ssr: true, loading: () => <SectionLoader label="Loading cta section..." /> });
const CareerRoadmapSection = dynamic(() => import("@/components/ai-bootcamp/CareerRoadmapSection"), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const JsonLd = dynamic(() => import("@/components/JsonLd"), { ssr: true, loading: () => <SectionLoader label="Loading json ld..." /> });
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { AI_BOOTCAMP_FAQS, AI_BOOTCAMP_REVIEW_DATA } from "@/data/aiBootcampData";
import dynamic from 'next/dynamic';

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

export const metadata = generateMetadata({
    title: "AI-Powered Digital Marketing Bootcamp | 30-Hour Expert Training | CDPL",
    description: "Master Digital Marketing with AI in this 30-hour bootcamp. Learn SEO, SEM, Social Media, and Performance Marketing with 100% Job Assistance. Classroom & Online options available.",
    keywords: [
        "AI digital marketing bootcamp",
        "digital marketing course mumbai",
        "performance marketing training",
        "job assistance digital marketing",
        "AI marketing tools",
        "digital marketing hybrid course"
    ],
    url: "/ai-bootcamp",
    image: "/og-images/ai-bootcamp.jpg",
});

export default function AiBootcampPage() {
    const courseSchema = generateCourseSchema({
        name: "AI-Powered Digital Marketing Bootcamp",
        description: "Master Digital Marketing with AI in this 30-hour bootcamp. Learn SEO, SEM, Social Media, and Performance Marketing with 100% Job Assistance.",
        url: "/ai-bootcamp",
        slug: "ai-bootcamp",
        price: 15000,
        currency: "INR",
        duration: "P1M", // ~1 month / 30 hours
        instructor: "Expert Digital Marketers",
        rating: AI_BOOTCAMP_REVIEW_DATA.ratingValue,
        reviewCount: AI_BOOTCAMP_REVIEW_DATA.reviewCount,
        image: "/og-images/ai-bootcamp.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "AI Bootcamp", url: "/ai-bootcamp" },
    ]);

    const faqSchema = generateFAQSchema(AI_BOOTCAMP_FAQS);

    return (
        <div className="min-h-screen flex flex-col">
            <JsonLd id="course-schema" schema={courseSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
            <JsonLd id="faq-schema" schema={faqSchema} />

            <main>
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
            </main>
        </div>
    );
}
