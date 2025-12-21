import HeroSection from "@/components/data-analytics-and-visualization/HeroSection";
import StickyNav from '@/components/StickyNav2/StickyNav2';
import { with_roadmap } from '@/components/StickyNavData';
import StatsSection from "@/components/data-analytics-and-visualization/StatsSection";
import WhyVisualizationProgram from "@/components/data-analytics-and-visualization/WhyVisualizationProgram";
import CurriculumSection from "@/components/data-analytics-and-visualization/CurriculumSection";
import ProjectsSection from "@/components/data-analytics-and-visualization/ProjectsSection";
import TestimonialsSection from "@/components/data-analytics-and-visualization/TestimonialsSection";
import CareerSection from "@/components/data-analytics-and-visualization/CareerSection";
import WhoShouldEnroll from "@/components/data-analytics-and-visualization/WhoShouldEnroll";
import ToolsSection from "@/components/data-analytics-and-visualization/ToolsSection";
import CareerRoadmapSection from "@/components/data-analytics-and-visualization/CareerRoadmapSection";
import FaqSection from "@/components/data-analytics-and-visualization/FaqSection";
import CtaSection from "@/components/data-analytics-and-visualization/CtaSection";
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DATA_ANALYTICS_VIS_FAQS, DATA_ANALYTICS_VIS_REVIEW_DATA } from "@/data/dataAnalyticsVisData";

export const metadata = generateMetadata({
    title: "Advanced Excel for Data Analytics & Visualization | 20-Hour Course | Mumbai",
    description: "Master Advanced Excel for Data Analytics & Visualization. 20-Hour comprehensive course with interactive dashboards, Power Query, and Power Pivot. 100% job assistance.",
    keywords: [
        "advanced excel course mumbai",
        "excel for data analytics",
        "data visualization training",
        "power pivot course",
        "excel dashboards training",
        "data analyst skills excel",
        "mis reporting course"
    ],
    url: "/data-analytics-and-visualization",
    image: "/og-images/data-analytics-and-visualization.jpg",
});

export default function Home() {
    const courseSchema = generateCourseSchema({
        name: "Advanced Excel for Data Analytics & Visualization",
        description: "Master Advanced Excel for Data Analytics & Visualization. 20-Hour comprehensive course with interactive dashboards, Power Query, and Power Pivot. 100% job assistance.",
        url: "/data-analytics-and-visualization",
        slug: "data-analytics-and-visualization",
        price: 15000,
        currency: "INR",
        duration: "P1M", // ~4 weeks
        instructor: "Expert Excel Mentors",
        rating: DATA_ANALYTICS_VIS_REVIEW_DATA.ratingValue,
        reviewCount: DATA_ANALYTICS_VIS_REVIEW_DATA.reviewCount,
        image: "/og-images/data-analytics-and-visualization.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "Data Analytics & Visualization", url: "/data-analytics-and-visualization" },
    ]);

    const faqSchema = generateFAQSchema(DATA_ANALYTICS_VIS_FAQS);

    return (
        <div className="min-h-screen w-full bg-white">
            <JsonLd id="course-schema" schema={courseSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
            <JsonLd id="faq-schema" schema={faqSchema} />

            {/* Main content */}
            <main className="w-full">
                <HeroSection />
                <div className="hidden md:block sticky top-0 z-20">
                    <StickyNav navItems={with_roadmap} />
                </div>
                <section id="program-stats"><StatsSection /></section>
                <section id="why-master-program"><WhyVisualizationProgram /></section>
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
        </div>
    );
}
