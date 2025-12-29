const HeroSection = dynamic(() => import('@/components/data-analytics-python/HeroSection'), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StickyNav = dynamic(() => import('@/components/StickyNav2/StickyNav2'), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import { with_roadmap } from '@/components/StickyNavData';
const StatsSection = dynamic(() => import("@/components/data-analytics-python/StatsSection"), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const CurriculumSection = dynamic(() => import("@/components/data-analytics-python/CurriculumSection"), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import("@/components/data-analytics-python/ProjectsSection"), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import("@/components/data-analytics-python/TestimonialsSection"), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import("@/components/data-analytics-python/CareerSection"), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import("@/components/data-analytics-python/WhoShouldEnroll"), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import("@/components/data-analytics-python/ToolsSection"), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const CareerRoadmapSection = dynamic(() => import("@/components/data-analytics-python/CareerRoadmapSection"), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const FaqSection = dynamic(() => import("@/components/data-analytics-python/FaqSection"), { ssr: true, loading: () => <SectionLoader label="Loading faq section..." /> });
const CtaSection = dynamic(() => import("@/components/data-analytics-python/CtaSection"), { ssr: true, loading: () => <SectionLoader label="Loading cta section..." /> });
const WhyAnalyticsPythonProgram = dynamic(() => import("@/components/data-analytics-python/WhyAnalyticsPythonProgram"), { ssr: true, loading: () => <SectionLoader label="Loading why analytics python program section..." /> });
const JsonLd = dynamic(() => import("@/components/JsonLd"), { ssr: true, loading: () => <SectionLoader label="Loading json ld..." /> });
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { DATA_ANALYTICS_PYTHON_FAQS, DATA_ANALYTICS_PYTHON_REVIEW_DATA } from "@/data/dataAnalyticsPythonData";
import dynamic from 'next/dynamic';

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

export const metadata = generateMetadata({
    title: "Data Analytics with Python Course | 20-Hour Training | Mumbai | CDPL",
    description: "20-Hour Master Program in Data Analytics with Python. Hands-on projects, 100% job assistance, global certificates.",
    keywords: [
        "data analytics with python course mumbai",
        "python for data analytics",
        "pandas course",
        "matplotlib training",
        "data analyst jobs mumbai",
        "python programming for data science"
    ],
    url: "/data-analytics-python",
    image: "/og-images/data-analytics-python.jpg",
});

export default function Home() {
    const courseSchema = generateCourseSchema({
        name: "Master Program in Data Analytics using Python",
        description: "20-Hour Master Program in Data Analytics with Python. Hands-on projects, 100% job assistance, global certificates.",
        url: "/data-analytics-python",
        slug: "data-analytics-python",
        price: 25000,
        currency: "INR",
        duration: "P1M", // ~4 weeks
        instructor: "Expert Data Analysts",
        rating: DATA_ANALYTICS_PYTHON_REVIEW_DATA.ratingValue,
        reviewCount: DATA_ANALYTICS_PYTHON_REVIEW_DATA.reviewCount,
        image: "/og-images/data-analytics-python.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "Data Analytics with Python", url: "/data-analytics-python" },
    ]);

    const faqSchema = generateFAQSchema(DATA_ANALYTICS_PYTHON_FAQS);

    return (
        <div className="min-h-screen bg-white">
            <JsonLd id="course-schema" schema={courseSchema} />
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
            <JsonLd id="faq-schema" schema={faqSchema} />
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