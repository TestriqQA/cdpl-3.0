import HeroSection from "@/components/ai-in-digital-marketing/HeroSection";
import StickyNav from "@/components/StickyNav2/StickyNav2";
import { with_roadmap } from '@/components/StickyNavData';
import StatsSection from "@/components/ai-in-digital-marketing/StatsSection";
import JsonLd from "@/components/JsonLd";
const WhyThisProgram = dynamic(() => import("@/components/ai-in-digital-marketing/WhyThisProgram"), { ssr: true, loading: () => <SectionLoader label="Loading why this program section..." /> });
const CurriculumSection = dynamic(() => import("@/components/ai-in-digital-marketing/CurriculumSection"), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import("@/components/ai-in-digital-marketing/ProjectsSection"), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import("@/components/ai-in-digital-marketing/TestimonialsSection"), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const WhoShouldEnroll = dynamic(() => import("@/components/ai-in-digital-marketing/WhoShouldEnroll"), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import("@/components/ai-in-digital-marketing/ToolsSection"), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const CareerSection = dynamic(() => import("@/components/ai-in-digital-marketing/CareerSection"), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const CareerRoadmapSection = dynamic(() => import("@/components/ai-in-digital-marketing/CareerRoadmapSection"), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const FaqSection = dynamic(() => import("@/components/ai-in-digital-marketing/FaqSection"), { ssr: true, loading: () => <SectionLoader label="Loading faq section..." /> });
const CtaSection = dynamic(() => import("@/components/ai-in-digital-marketing/CtaSection"), { ssr: true, loading: () => <SectionLoader label="Loading cta section..." /> });
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { AI_IN_DIGITAL_MARKETING_FAQS, AI_IN_DIGITAL_MARKETING_REVIEW_DATA } from "@/data/aiInDigitalMarketingData";
import { getGoogleReviews } from "@/lib/reviews";
import dynamic from 'next/dynamic';


function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

export const metadata = generateMetadata({
    title: "Master Digital Marketing & AI for Business Owners | 10X Your Growth - Cinute Digital",
    description: "Master Business Marketing Strategies & AI. Learn Local Business SEO, Digital Marketing Sales, and Marketing Automation for Business Owners. The #1 AI Digital Marketing Course to grow your business.",
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
    url: "/ai-in-digital-marketing",
    image: "/og-images/ai-in-digital-marketing.jpg",
});

export default async function AiInDigitalMarketingPage() {
    const reviewsData = await getGoogleReviews();

    const courseSchema = generateCourseSchema({
        name: "Master Digital Marketing & AI for Business Owners",
        description: "A 3-month cohort program to master digital marketing and AI strategies tailored for business owners.",
        url: "/ai-in-digital-marketing",
        slug: "ai-in-digital-marketing",
        price: 45000,
        currency: "INR",
        duration: "P3M",
        instructor: "Expert Digital Marketers",
        rating: AI_IN_DIGITAL_MARKETING_REVIEW_DATA.ratingValue,
        reviewCount: AI_IN_DIGITAL_MARKETING_REVIEW_DATA.reviewCount,
        image: "/og-images/ai-in-digital-marketing.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "AI in Digital Marketing", url: "/ai-in-digital-marketing" },
    ]);

    const faqSchema = generateFAQSchema(AI_IN_DIGITAL_MARKETING_FAQS);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <JsonLd id="course-schema" schema={courseSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
            <JsonLd id="faq-schema" schema={faqSchema} />

            <main>
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
            </main>
        </div>
    );
}
