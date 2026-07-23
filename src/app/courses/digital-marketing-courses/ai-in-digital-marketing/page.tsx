import HeroSection from "@/components/ai-in-digital-marketing/HeroSection";
import StickyNav from "@/components/StickyNav2/StickyNav2";
import { with_roadmap } from '@/components/StickyNavData';
import StatsSection from "@/components/ai-in-digital-marketing/StatsSection";
import JsonLd from "@/components/JsonLd";
// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import WhyThisProgram from "@/components/ai-in-digital-marketing/WhyThisProgram";
import CurriculumSection from "@/components/ai-in-digital-marketing/CurriculumSection";
import ProjectsSection from "@/components/ai-in-digital-marketing/ProjectsSection";
import TestimonialsSection from "@/components/ai-in-digital-marketing/TestimonialsSection";
import WhoShouldEnroll from "@/components/ai-in-digital-marketing/WhoShouldEnroll";
import ToolsSection from "@/components/ai-in-digital-marketing/ToolsSection";
import CareerSection from "@/components/ai-in-digital-marketing/CareerSection";
import CareerRoadmapSection from "@/components/ai-in-digital-marketing/CareerRoadmapSection";
import FaqSection from "@/components/ai-in-digital-marketing/FaqSection";
import CtaSection from "@/components/ai-in-digital-marketing/CtaSection";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateAiInDigitalMarketingCoursePageSchema } from "@/lib/schema-generators";
import { AI_IN_DIGITAL_MARKETING_FAQS, AI_IN_DIGITAL_MARKETING_REVIEW_DATA } from "@/data/aiInDigitalMarketingData";
import { getGoogleReviews } from "@/lib/reviews";

export const metadata = generateMetadata({
    title: "AI Digital Marketing Course for Business Owners | CDPL",
    description: "Digital marketing & AI for entrepreneurs — local business SEO, lead generation, marketing automation & AI growth playbooks. Built for business owners.",
    keywords: [
        "Digital Marketing for Business Owners",
        "Business Marketing Strategies",
        "Local Business SEO",
        "Marketing Automation for Business Owners",
        "AI for Business Growth",
        "Digital Marketing Sales",
        "SEO for Business Owners",
        "Social Media Marketing Business",
        "Small Business SEO",
        "Grow Your Business with Digital Marketing",
        "AI Digital Marketing",
        "Online Marketing Business"
    ],
    url: '/courses/digital-marketing-courses/ai-in-digital-marketing',
    image: "/og-images/courses-digital-marketing-courses-ai-in-digital-marketing-og.webp",
});

export default async function AiInDigitalMarketingPage() {
    const reviewsData = await getGoogleReviews();

    const schemas = generateAiInDigitalMarketingCoursePageSchema(
        {
            name: "Master Digital Marketing & AI for Business Owners",
            description: "A 3-month cohort program to master digital marketing and AI strategies tailored for business owners.",
            url: '/courses/digital-marketing-courses/ai-in-digital-marketing',
            slug: "ai-in-digital-marketing",
            price: 45000,
            currency: "INR",
            duration: "P3M",
            instructor: "Expert Digital Marketers",
            rating: AI_IN_DIGITAL_MARKETING_REVIEW_DATA.ratingValue,
            reviewCount: AI_IN_DIGITAL_MARKETING_REVIEW_DATA.reviewCount,
            image: "/og-images/courses-digital-marketing-courses-ai-in-digital-marketing-og.webp",
        },
        AI_IN_DIGITAL_MARKETING_FAQS.map(f => ({ question: f.question, answer: f.answer })),
        [
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
            { name: "Digital Marketing Courses", url: "/courses/digital-marketing-courses" },
            { name: "AI in Digital Marketing", url: '/courses/digital-marketing-courses/ai-in-digital-marketing' },
        ]
    );

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {schemas.map((schema, index) => (
                <JsonLd key={`ai-dm-schema-${index}`} id={`ai-dm-schema-${index}`} schema={schema} />
            ))}

            <div>
                <HeroSection />
                <div className="hidden md:block sticky top-0 z-20">
                    <StickyNav navItems={with_roadmap} />
                </div>
                <section id="program-stats"><StatsSection /></section>
                <section id="why-master-program"><WhyThisProgram /></section>
                <section id="curriculum"><CurriculumSection /></section>
                <section id="tools"><ToolsSection /></section>
                <section id="roadmap"><CareerRoadmapSection /></section>
                <section id="projects"><ProjectsSection /></section>
                <section id="testimonials">
                    <TestimonialsSection
                        initialReviews={reviewsData.reviews}
                        initialTotal={reviewsData.totalReviewCount?.toString()}
                        initialRating={reviewsData.averageRating?.toString()}
                    />
                </section>
                <section id="who-should-enroll"><WhoShouldEnroll /></section>
                <section id="career"><CareerSection /></section>
                <section id="faqs"><FaqSection /></section>
                <section id="contact"><CtaSection /></section>
            </div>
        </div>
    );
}
