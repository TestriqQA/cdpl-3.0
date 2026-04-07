import StickyNav from "@/components/StickyNav2/StickyNav2";
import { with_roadmap } from '@/components/StickyNavData';
import { TestimonialsClient, CtaClient } from "@/app/courses/bi-courses/power-bi-course/client-section";
import HeroSection from "@/components/power-bi-course/HeroSection";
import StatsSection from "@/components/power-bi-course/StatsSection";
import JsonLd from "@/components/JsonLd";
import {
    WhyBIProgram,
    CurriculumSection,
    ProjectsSection,
    CareerSection,
    WhoShouldEnroll,
    ToolsSection,
    FaqSection,
    CareerRoadmapSection,
} from "@/app/courses/bi-courses/power-bi-course/server-sections";

import { generateMetadata } from "@/lib/metadata-generator";
import { generatePowerBICoursePageSchema } from "@/lib/schema-generators";
import { POWER_BI_FAQS, POWER_BI_REVIEW_DATA } from "@/data/powerBiData";

const pageTitle = "Best Power BI Course in Mumbai & Thane | Master Data Analytics with 100% Placement";
const pageDescription = "Enroll in the best Power BI course in Mumbai & Thane. Master Power BI Desktop, DAX, and Service in 20 hours. Get 100% job placement assistance and become a certified Power BI Developer.";
const pageKeywords = [
    "Power BI Course in Mumbai",
    "Power BI Course in Thane",
    "Power BI Developer Course",
    "Data Analytics Course",
    "Power BI Certification",
    "DAX training",
    "Power Query",
    "Business Intelligence course",
    "Data Visualization training",
    "what is power bi",
    "power bi placement mumbai",
    "how to learn power bi",
    "power bi syllabus pdf"
];

export const metadata = generateMetadata({
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    url: '/courses/bi-courses/power-bi-course',
    image: "/og-images/power-bi-course-og.webp",
});

const PowerBIPage: React.FC = () => {
    const schemas = generatePowerBICoursePageSchema(
        {
            name: "Master Data Analytics & Visualization with Power BI",
            description: "Enroll in the best Power BI course. Master DAX, Data Modeling, and Visualization in 20 hours. Get 100% job assistance and global certification.",
            url: '/courses/bi-courses/power-bi-course',
            slug: "power-bi-course",
            price: 20000,
            currency: "INR",
            duration: "P1M",
            instructor: "Expert Power BI Mentors",
            rating: POWER_BI_REVIEW_DATA.ratingValue,
            reviewCount: POWER_BI_REVIEW_DATA.reviewCount,
            image: "/og-images/power-bi-course-og.webp",
        },
        POWER_BI_FAQS.map(f => ({ question: f.question, answer: f.answer })),
        [
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
            { name: "BI Courses", url: "/courses/bi-courses" },
            { name: "Power BI Course", url: '/courses/bi-courses/power-bi-course' },
        ]
    );

    return (
        <>
            {schemas.map((schema, index) => (
                <JsonLd key={`power-bi-schema-${index}`} id={`power-bi-schema-${index}`} schema={schema} />
            ))}
            <HeroSection />
            <div className="hidden md:block sticky top-0 z-20">
                <StickyNav navItems={with_roadmap} />
            </div>
            <section id="program-stats"><StatsSection /></section>
            <section id="why-master-program"><WhyBIProgram /></section>
            <section id="curriculum"><CurriculumSection /></section>
            <section id="tools"><ToolsSection /></section>
            <section id="roadmap"><CareerRoadmapSection /></section>
            <section id="projects"><ProjectsSection /></section>
            <section id="career"><CareerSection /></section>
            <section id="who-should-enroll"><WhoShouldEnroll /></section>
            <section id="testimonials"><TestimonialsClient /></section>
            <section id="faqs"><FaqSection /></section>
            <section id="contact"><CtaClient /></section>
        </>
    );
};

export default PowerBIPage;
