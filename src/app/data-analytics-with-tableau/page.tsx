import HeroSection from "@/components/data-analytics-with-tableau/HeroSection";
import StickyNav from '@/components/StickyNav2/StickyNav2';
import { with_roadmap } from '@/components/StickyNavData';
import StatsSection from "@/components/data-analytics-with-tableau/StatsSection";
import WhyTableauProgram from "@/components/data-analytics-with-tableau/WhyTableauProgram";
import CurriculumSection from "@/components/data-analytics-with-tableau/CurriculumSection";
import ProjectsSection from "@/components/data-analytics-with-tableau/ProjectsSection";
import TestimonialsSection from "@/components/data-analytics-with-tableau/TestimonialsSection";
import CareerSection from "@/components/data-analytics-with-tableau/CareerSection";
import WhoShouldEnroll from "@/components/data-analytics-with-tableau/WhoShouldEnroll";
import ToolsSection from "@/components/data-analytics-with-tableau/ToolsSection";
import FaqSection from "@/components/data-analytics-with-tableau/FaqSection";
import CtaSection from "@/components/data-analytics-with-tableau/CtaSection";
import CareerRoadmapSection from "@/components/data-analytics-with-tableau/CareerRoadmapSection";
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DATA_ANALYTICS_TABLEAU_FAQS, DATA_ANALYTICS_TABLEAU_REVIEW_DATA } from "@/data/dataAnalyticsTableauData";

export const metadata = generateMetadata({
    title: "Data Analytics with Tableau Course | 20-Hour Training | Mumbai | CDPL",
    description: "20-Hour Master Program in Data Analytics with Tableau. Hands-on projects, interactive dashboards, 100% job assistance, global certificates.",
    keywords: [
        "tableau course in mumbai",
        "data analytics with tableau training",
        "business intelligence course",
        "data visualization training",
        "tableau developer jobs",
        "learn tableau benefits"
    ],
    url: "/data-analytics-with-tableau",
    image: "/og-images/data-analytics-with-tableau.jpg",
});

export default function Home() {
    const courseSchema = generateCourseSchema({
        name: "Master Program in Data Analytics using Tableau",
        description: "20-Hour Master Program in Data Analytics with Tableau. Hands-on projects, interactive dashboards, 100% job assistance, global certificates.",
        url: "/data-analytics-with-tableau",
        slug: "data-analytics-with-tableau",
        price: 30000,
        currency: "INR",
        duration: "P1M", // ~4 weeks
        instructor: "Expert Tableau Mentors",
        rating: DATA_ANALYTICS_TABLEAU_REVIEW_DATA.ratingValue,
        reviewCount: DATA_ANALYTICS_TABLEAU_REVIEW_DATA.reviewCount,
        image: "/og-images/data-analytics-with-tableau.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "Data Analytics with Tableau", url: "/data-analytics-with-tableau" },
    ]);

    const faqSchema = generateFAQSchema(DATA_ANALYTICS_TABLEAU_FAQS);

    return (
        <div className="min-h-screen flex flex-col">
            <JsonLd id="course-schema" schema={courseSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
            <JsonLd id="faq-schema" schema={faqSchema} />
            <main>
                {/* Hero Section */}
                <HeroSection />

                <div className="hidden md:block sticky top-0 z-20">
                    <StickyNav navItems={with_roadmap} />
                </div>

                {/* Stats Section */}
                <section id="program-stats"><StatsSection /></section>

                {/* Why Program Section */}
                <section id="why-master-program"><WhyTableauProgram /></section>

                {/* Curriculum Section */}
                <section id="curriculum"><CurriculumSection /></section>

                {/* Projects Section */}
                <section id="projects"><ProjectsSection /></section>

                {/* Testimonials Section */}
                <section id="testimonials"><TestimonialsSection /></section>

                {/* Career Section */}
                <section id="career"><CareerSection /></section>

                {/* Who Should Enroll Section */}
                <section id="who-should-enroll"><WhoShouldEnroll /></section>

                {/* Tools Section */}
                <section id="tools"><ToolsSection /></section>

                {/* Career Roadmap Section (SEO Boost) */}
                <section id="roadmap"><CareerRoadmapSection /></section>

                {/* FAQ Section */}
                <section id="faqs"><FaqSection /></section>

                {/* Final CTA Section */}
                <section id="contact"><CtaSection /></section>
            </main>
        </div>
    );
}
