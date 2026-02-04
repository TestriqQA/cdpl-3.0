import React from 'react';
import StickyNav from "@/components/StickyNav2/StickyNav2";
import { with_roadmap } from '@/components/StickyNavData';
import { TestimonialsClient, CtaClient } from "@/app/masters-in-data-engineering/client-section";
import HeroSection from "@/components/masters-in-data-engineering/HeroSection";
import StatsSection from "@/components/masters-in-data-engineering/StatsSection";
import JsonLd from "@/components/JsonLd";
import {
    WhyEngineerProgram,
    CurriculumSection,
    ProjectsSection,
    CareerSection,
    WhoShouldEnroll,
    ToolsSection,
    FaqSection,
    CareerRoadmapSection,
} from "@/app/masters-in-data-engineering/server-sections";

import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DATA_ENGINEERING_MASTERS_FAQS, DATA_ENGINEERING_MASTERS_REVIEW_DATA } from "@/data/dataEngineeringMastersData";

export const metadata = generateMetadata({
    title: "Master Program in Data Engineering | BI & Big Data Engineering Course | Mumbai",
    description: "Master BI and Big Data Engineering with our Data Analytics Program Mumbai. Learn SQL for data analytics, Spark, and get Data Engineer Certifications. 100% placement.",
    keywords: [
        "best institute for data analytics",
        "sql data analyst",
        "bi and big data engineering",
        "iim business analytics",
        "bi data analyst",
        "sql for data analytics",
        "data analytics program mumbai",
        "software engineer jobs in mumbai",
        "data engineering certifications",
        "sql analytics",
        "data analytics iit",
        "certifications for data engineers",
        "how to become data analyst in india",
        "data engineer certification",
        "iit data analytics",
        "sql in data analytics"
    ],
    url: "/masters-in-data-engineering",
    image: "/og-images/masters-in-data-engineering.jpg",
});

const DataAnalyticsMasterProgramPage: React.FC = () => {
    const courseSchema = generateCourseSchema({
        name: "Master Program in Data Engineering: BI & Big Data Engineering Course",
        description: "155-hour intensive master program in Mumbai covering SQL for data analytics, BI tools, and Big Data engineering with Spark and Hadoop. 100% placement.",
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
                <section id="testimonials"><TestimonialsClient /></section>
                <section id="faqs"><FaqSection /></section>
                <section id="contact"><CtaClient /></section>
            </main>

            {/* Optional: Add a simple Footer component here if needed */}
        </div>
    );
};

export default DataAnalyticsMasterProgramPage;
