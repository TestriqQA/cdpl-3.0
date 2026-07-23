// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import HeroSection from '@/components/data-analytics-python/HeroSection';
import StickyNav from '@/components/StickyNav2/StickyNav2';
import { with_roadmap } from '@/components/StickyNavData';
import StatsSection from "@/components/data-analytics-python/StatsSection";
import CurriculumSection from "@/components/data-analytics-python/CurriculumSection";
import ProjectsSection from "@/components/data-analytics-python/ProjectsSection";
import TestimonialsSection from "@/components/data-analytics-python/TestimonialsSection";
import CareerSection from "@/components/data-analytics-python/CareerSection";
import WhoShouldEnroll from "@/components/data-analytics-python/WhoShouldEnroll";
import ToolsSection from "@/components/data-analytics-python/ToolsSection";
import CareerRoadmapSection from "@/components/data-analytics-python/CareerRoadmapSection";
import FaqSection from "@/components/data-analytics-python/FaqSection";
import CtaSection from "@/components/data-analytics-python/CtaSection";
import WhyAnalyticsPythonProgram from "@/components/data-analytics-python/WhyAnalyticsPythonProgram";
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateDataAnalyticsPythonCoursePageSchema } from "@/lib/schema-generators";
import { DATA_ANALYTICS_PYTHON_FAQS, DATA_ANALYTICS_PYTHON_REVIEW_DATA } from "@/data/dataAnalyticsPythonData";

export const metadata = generateMetadata({
    title: "Data Analytics with Python Course in Mumbai | CDPL",
    description: "20-hour data analytics with Python course in Mumbai — pandas, NumPy, matplotlib, real projects & data-analyst job prep with placement assistance.",
    keywords: [
        "what is data analytics course",
        "what is data analyst course",
        "how to learn data analytics",
        "who can do data analyst course",
        "how to become a data analyst",
        "how to analyse data using python",
        "what is data analysis in python",
        "python data analysis course",
        "data analytics courses",
        "data analytics certification",
        "comprehensive data analytics courses",
        "data analyst course duration",
        "career in data analytics",
        "data analyst courses for beginners"
    ],
    url: '/courses/bi-courses/data-analytics-python',
    image: "/og-images/courses-bi-courses-data-analytics-python-og.webp",
});

export default function Home() {
    const schemas = generateDataAnalyticsPythonCoursePageSchema(
        {
            name: "Comprehensive Data Analytics Course with Python | 20-Hour Training Mumbai",
            description: "20-hour python data analysis course with hands-on projects, global certification, and job assistance. Learn how to become a data analyst in Mumbai/Thane.",
            url: '/courses/bi-courses/data-analytics-python',
            slug: "data-analytics-python",
            price: 25000,
            currency: "INR",
            duration: "P1M",
            instructor: "Expert Data Analysts",
            rating: DATA_ANALYTICS_PYTHON_REVIEW_DATA.ratingValue,
            reviewCount: DATA_ANALYTICS_PYTHON_REVIEW_DATA.reviewCount,
            image: "/og-images/courses-bi-courses-data-analytics-python-og.webp",
        },
        DATA_ANALYTICS_PYTHON_FAQS.map(f => ({ question: f.question, answer: f.answer })),
        [
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
            { name: "BI Courses", url: "/courses/bi-courses" },
            { name: "Data Analytics with Python", url: '/courses/bi-courses/data-analytics-python' },
        ]
    );

    return (
        <div className="min-h-screen bg-white">
            {schemas.map((schema, index) => (
                <JsonLd key={`data-analytics-python-schema-${index}`} id={`data-analytics-python-schema-${index}`} schema={schema} />
            ))}
            {/* Hero Section */}
            <HeroSection />

            <div className="hidden md:block sticky top-0 z-20">
                <StickyNav navItems={with_roadmap} />
            </div>

            {/* Stats Section */}
            <section id="program-stats"><StatsSection /></section>

            {/* Why This Program Section */}
            <section id="why-master-program"><WhyAnalyticsPythonProgram /></section>

            {/* Curriculum Section */}
            <section id="curriculum"><CurriculumSection /></section>

            {/* Tools & Technologies Section */}
            <section id="tools"><ToolsSection /></section>

            {/* Career Roadmap Section */}
            <section id="roadmap"><CareerRoadmapSection /></section>

            {/* Projects Section */}
            <section id="projects"><ProjectsSection /></section>

            {/* Who Should Enroll Section */}
            <section id="who-should-enroll"><WhoShouldEnroll /></section>

            {/* Career Section */}
            <section id="career"><CareerSection /></section>

            {/* Testimonials Section */}
            <section id="testimonials"><TestimonialsSection /></section>

            {/* FAQ Section */}
            <section id="faqs"><FaqSection /></section>

            {/* CTA Section */}
            <section id="contact"><CtaSection /></section>
        </div>
    );
}
