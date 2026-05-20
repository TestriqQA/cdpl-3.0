import HeroSection from '@/components/data-analytics-with-tableau/HeroSection';
const StickyNav = dynamic(() => import("@/components/StickyNav2/StickyNav2"), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import { with_roadmap } from '@/components/StickyNavData';
import StatsSection from "@/components/data-analytics-with-tableau/StatsSection";
const WhyTableauProgram = dynamic(() => import("@/components/data-analytics-with-tableau/WhyTableauProgram"), { ssr: true, loading: () => <SectionLoader label="Loading why tableau program section..." /> });
const CurriculumSection = dynamic(() => import("@/components/data-analytics-with-tableau/CurriculumSection"), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import("@/components/data-analytics-with-tableau/ProjectsSection"), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import("@/components/data-analytics-with-tableau/TestimonialsSection"), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import("@/components/data-analytics-with-tableau/CareerSection"), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import("@/components/data-analytics-with-tableau/WhoShouldEnroll"), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import("@/components/data-analytics-with-tableau/ToolsSection"), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import("@/components/data-analytics-with-tableau/FaqSection"), { ssr: true, loading: () => <SectionLoader label="Loading faq section..." /> });
const CtaSection = dynamic(() => import("@/components/data-analytics-with-tableau/CtaSection"), { ssr: true, loading: () => <SectionLoader label="Loading cta section..." /> });
const CareerRoadmapSection = dynamic(() => import("@/components/data-analytics-with-tableau/CareerRoadmapSection"), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateDataAnalyticsTableauCoursePageSchema } from "@/lib/schema-generators";
import { DATA_ANALYTICS_TABLEAU_FAQS, DATA_ANALYTICS_TABLEAU_REVIEW_DATA } from "@/data/dataAnalyticsTableauData";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

export const metadata = generateMetadata({
    title: "Data Analytics with Tableau Course in Mumbai | CDPL",
    description: "20-hour master program in Tableau — data connections, calculated fields, dashboards & visual analytics with hands-on projects and placement assistance.",
    keywords: [
        "tableau course in mumbai",
        "data analytics with tableau training",
        "business intelligence course",
        "data visualization training",
        "tableau developer jobs",
        "learn tableau benefits"
    ],
    url: '/courses/bi-courses/data-analytics-with-tableau',
    image: "/og-images/data-analytics-with-tableau-og.webp",
});

export default function Home() {
    const schemas = generateDataAnalyticsTableauCoursePageSchema(
        {
            name: "Master Program in Data Analytics using Tableau",
            description: "20-Hour Master Program in Data Analytics with Tableau. Hands-on projects, interactive dashboards, 100% job assistance, global certificates.",
            url: '/courses/bi-courses/data-analytics-with-tableau',
            slug: "data-analytics-with-tableau",
            price: 30000,
            currency: "INR",
            duration: "P1M",
            instructor: "Expert Tableau Mentors",
            rating: DATA_ANALYTICS_TABLEAU_REVIEW_DATA.ratingValue,
            reviewCount: DATA_ANALYTICS_TABLEAU_REVIEW_DATA.reviewCount,
            image: "/og-images/data-analytics-with-tableau-og.webp",
        },
        DATA_ANALYTICS_TABLEAU_FAQS.map(f => ({ question: f.question, answer: f.answer })),
        [
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
            { name: "BI Courses", url: "/courses/bi-courses" },
            { name: "Data Analytics with Tableau", url: '/courses/bi-courses/data-analytics-with-tableau' },
        ]
    );

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {schemas.map((schema, index) => (
                <JsonLd key={`tableau-schema-${index}`} id={`tableau-schema-${index}`} schema={schema} />
            ))}
            <div className="flex-1">
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
            </div>
        </div>
    );
}
