import StickyNav from "@/components/StickyNav2/StickyNav2";
import { with_roadmap } from '@/components/StickyNavData';
import { TestimonialsClient, CtaClient } from "@/app/power-bi-course/client-section";
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
} from "@/app/power-bi-course/server-sections";

import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { POWER_BI_FAQS, POWER_BI_REVIEW_DATA } from "@/data/powerBiData";

export const metadata = generateMetadata({
    title: "Master Data Analytics & Visualization with Power BI | Certified Course",
    description: "Enroll in the best Power BI course. Master DAX, Data Modeling, and Visualization in 20 hours. Get 100% job assistance and global certification.",
    keywords: [
        "Power BI Course",
        "Data Analytics",
        "Power BI Certification",
        "DAX training",
        "Power Query",
        "Business Intelligence course",
        "Data Visualization training"
    ],
    url: "/power-bi-course",
    image: "/og-images/power-bi-course.jpg",
});

const PowerBIPage: React.FC = () => {
    const courseSchema = generateCourseSchema({
        name: "Master Data Analytics & Visualization with Power BI",
        description: "Enroll in the best Power BI course. Master DAX, Data Modeling, and Visualization in 20 hours. Get 100% job assistance and global certification.",
        url: "/power-bi-course",
        slug: "power-bi-course",
        price: 20000,
        currency: "INR",
        duration: "P1M",
        instructor: "Expert Power BI Mentors",
        rating: POWER_BI_REVIEW_DATA.ratingValue,
        reviewCount: POWER_BI_REVIEW_DATA.reviewCount,
        image: "/og-images/power-bi-course.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "Power BI Course", url: "/power-bi-course" },
    ]);

    const faqSchema = generateFAQSchema(POWER_BI_FAQS);


    return (
        <>
            <JsonLd id="course-schema" schema={courseSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
            <JsonLd id="faq-schema" schema={faqSchema} />
            <main>
                {/* Note: You would typically include a Header/Navbar component here */}

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

                {/* Note: You would typically include a Footer component here */}
            </main>
        </>
    );
};

export default PowerBIPage;
