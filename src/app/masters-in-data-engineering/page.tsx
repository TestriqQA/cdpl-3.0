// src/components/data-analytics-bi-bigdata/index.tsx
// This file acts as the main page component that assembles all sections.

import React from 'react';
const HeroSection = dynamic(() => import("@/components/masters-in-data-engineering/HeroSection"), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StickyNav = dynamic(() => import("@/components/StickyNav2/StickyNav2"), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import { with_roadmap } from '@/components/StickyNavData';
const StatsSection = dynamic(() => import("@/components/masters-in-data-engineering/StatsSection"), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyEngineerProgram = dynamic(() => import("@/components/masters-in-data-engineering/WhyEngineerProgram"), { ssr: true, loading: () => <SectionLoader label="Loading why engineer program section..." /> });
const CurriculumSection = dynamic(() => import("@/components/masters-in-data-engineering/CurriculumSection"), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import("@/components/masters-in-data-engineering/ProjectsSection"), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import("@/components/masters-in-data-engineering/TestimonialsSection"), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import("@/components/masters-in-data-engineering/CareerSection"), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import("@/components/masters-in-data-engineering/WhoShouldEnroll"), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import("@/components/masters-in-data-engineering/ToolsSection"), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import("@/components/masters-in-data-engineering/FaqSection"), { ssr: true, loading: () => <SectionLoader label="Loading faq section..." /> });
const CtaSection = dynamic(() => import("@/components/masters-in-data-engineering/CtaSection"), { ssr: true, loading: () => <SectionLoader label="Loading cta section..." /> });
const CareerRoadmapSection = dynamic(() => import("@/components/masters-in-data-engineering/CareerRoadmapSection"), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const JsonLd = dynamic(() => import("@/components/JsonLd"), { ssr: true, loading: () => <SectionLoader label="Loading json ld..." /> });
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DATA_ENGINEERING_MASTERS_FAQS, DATA_ENGINEERING_MASTERS_REVIEW_DATA } from "@/data/dataEngineeringMastersData";
import dynamic from 'next/dynamic';

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

export const metadata = generateMetadata({
    title: "Master Program in Data Analytics & Data Engineering | Mumbai",
    description: "Comprehensive Master Program in Data Analytics, BI & Big Data Engineering. Learn SQL, Python, Tableau, Power BI, Hadoop, Spark. 100% job assistance.",
    keywords: [
        "data engineering courses in mumbai",
        "big data training",
        "business intelligence master program",
        "data analytics and engineering course",
        "hadoop spark training",
        "etl developer course"
    ],
    url: "/masters-in-data-engineering",
    image: "/og-images/masters-in-data-engineering.jpg",
});

const DataAnalyticsMasterProgramPage: React.FC = () => {
    const courseSchema = generateCourseSchema({
        name: "Master Program in Data Analytics, BI & Big Data Engineering",
        description: "Comprehensive Master Program in Data Analytics, BI & Big Data Engineering. Learn SQL, Python, Tableau, Power BI, Hadoop, Spark. 100% job assistance.",
        url: "/masters-in-data-engineering",
        slug: "masters-in-data-engineering",
        price: 45000,
        currency: "INR",
        duration: "P3M", // ~3 months
        instructor: "Expert Data Engineers",
        rating: DATA_ENGINEERING_MASTERS_REVIEW_DATA.ratingValue,
        reviewCount: DATA_ENGINEERING_MASTERS_REVIEW_DATA.reviewCount,
        image: "/og-images/masters-in-data-engineering.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "Master in Data Engineering", url: "/masters-in-data-engineering" },
    ]);

    const faqSchema = generateFAQSchema(DATA_ENGINEERING_MASTERS_FAQS);
    return (
        <div className="min-h-screen bg-white font-sans antialiased">
            <JsonLd id="course-schema" schema={courseSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
            <JsonLd id="faq-schema" schema={faqSchema} />
            {/* Optional: Add a simple Header/Navbar component here if needed */}

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
                <section id="career"><CareerSection /></section>
                <section id="who-should-enroll"><WhoShouldEnroll /></section>
                <section id="testimonials"><TestimonialsSection /></section>
                <section id="faqs"><FaqSection /></section>
                <section id="contact"><CtaSection /></section>
            </main>

            {/* Optional: Add a simple Footer component here if needed */}
        </div>
    );
};

export default DataAnalyticsMasterProgramPage;
