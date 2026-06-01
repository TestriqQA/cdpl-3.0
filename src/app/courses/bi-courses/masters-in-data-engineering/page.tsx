import React from 'react';
import StickyNav from "@/components/StickyNav2/StickyNav2";
import { with_roadmap } from '@/components/StickyNavData';
import { TestimonialsClient, CtaClient } from "@/app/courses/bi-courses/masters-in-data-engineering/client-section";
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
} from "@/app/courses/bi-courses/masters-in-data-engineering/server-sections";

import { generateMetadata } from "@/lib/metadata-generator";
import { generateMastersDataEngineeringCoursePageSchema } from "@/lib/schema-generators";
import { DATA_ENGINEERING_MASTERS_FAQS, DATA_ENGINEERING_MASTERS_REVIEW_DATA } from "@/data/dataEngineeringMastersData";

export const metadata = generateMetadata({
    title: "Data Engineering & BI Master Program in Mumbai | CDPL",
    description: "Master program in BI & big data engineering — SQL, Spark, Power BI, Tableau, Python & data pipelines with hands-on projects and placement assistance.",
    keywords: [
        "comprehensive institute for data analytics",
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
    url: '/courses/bi-courses/masters-in-data-engineering',
    image: "/og-images/courses-bi-courses-masters-in-data-engineering-og.webp",
});

const DataAnalyticsMasterProgramPage: React.FC = () => {
    const schemas = generateMastersDataEngineeringCoursePageSchema(
        {
            name: "Master Program in Data Engineering: BI & Big Data Engineering Course",
            description: "155-hour intensive master program in Mumbai covering SQL for data analytics, BI tools, and Big Data engineering with Spark and Hadoop. placement.",
            url: '/courses/bi-courses/masters-in-data-engineering',
            slug: "masters-in-data-engineering",
            price: 45000,
            currency: "INR",
            duration: "P3M",
            instructor: "Expert Data Engineers",
            rating: DATA_ENGINEERING_MASTERS_REVIEW_DATA.ratingValue,
            reviewCount: DATA_ENGINEERING_MASTERS_REVIEW_DATA.reviewCount,
            image: "/og-images/courses-bi-courses-masters-in-data-engineering-og.webp",
        },
        DATA_ENGINEERING_MASTERS_FAQS.map(f => ({ question: f.question, answer: f.answer })),
        [
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
            { name: "BI Courses", url: "/courses/bi-courses" },
            { name: "Master in Data Engineering", url: '/courses/bi-courses/masters-in-data-engineering' },
        ]
    );

    return (
        <div className="min-h-screen bg-white font-sans antialiased">
            {schemas.map((schema, index) => (
                <JsonLd key={`data-eng-schema-${index}`} id={`data-eng-schema-${index}`} schema={schema} />
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
                <section id="career"><CareerSection /></section>
                <section id="who-should-enroll"><WhoShouldEnroll /></section>
                <section id="testimonials"><TestimonialsClient /></section>
                <section id="faqs"><FaqSection /></section>
                <section id="contact"><CtaClient /></section>
            </div>
        </div>
    );
};

export default DataAnalyticsMasterProgramPage;
