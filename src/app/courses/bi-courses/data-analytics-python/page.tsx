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
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateDataAnalyticsPythonCoursePageSchema } from "@/lib/schema-generators";
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
    title: "Best Data Analytics Course with Python | 20-Hour Training Mumbai | 100% Job Assistance",
    description: "Learn how to become a data analyst with our Python data analysis course in Mumbai/Thane. 20-hour hands-on training with real projects, global certification, and 100% placement support. Best data analytics courses for beginners.",
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
        "best data analytics courses",
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
            name: "Best Data Analytics Course with Python | 20-Hour Training Mumbai",
            description: "20-hour python data analysis course with hands-on projects, global certification, and 100% job assistance. Learn how to become a data analyst in Mumbai/Thane.",
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
