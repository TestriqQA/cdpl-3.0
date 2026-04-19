import { HeroSection } from '@/components/data-visualization-in-r-programming/HeroSection';
const StickyNav = dynamic(() => import('@/components/StickyNav2/StickyNav2'), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import { with_roadmap } from '@/components/StickyNavData';
import { StatsSection } from '@/components/data-visualization-in-r-programming/StatsSection';
const WhyRSection = dynamic(() => import('@/components/data-visualization-in-r-programming/WhyRSection').then(mod => mod.WhyRSection), { ssr: true, loading: () => <SectionLoader label="Loading why R section..." /> });
const CurriculumSection = dynamic(() => import('@/components/data-visualization-in-r-programming/CurriculumSection').then(mod => mod.CurriculumSection), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import('@/components/data-visualization-in-r-programming/ProjectsSection').then(mod => mod.ProjectsSection), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const ToolsSection = dynamic(() => import('@/components/data-visualization-in-r-programming/ToolsSection').then(mod => mod.ToolsSection), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const CareerSection = dynamic(() => import('@/components/data-visualization-in-r-programming/CareerSection').then(mod => mod.CareerSection), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const CareerRoadmapSection = dynamic(() => import('@/components/data-visualization-in-r-programming/CareerRoadmapSection').then(mod => mod.CareerRoadmapSection), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const WhoShouldEnroll = dynamic(() => import('@/components/data-visualization-in-r-programming/WhoShouldEnroll').then(mod => mod.WhoShouldEnroll), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const TestimonialsSection = dynamic(() => import('@/components/data-visualization-in-r-programming/TestimonialsSection').then(mod => mod.TestimonialsSection), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const FaqSection = dynamic(() => import('@/components/data-visualization-in-r-programming/FaqSection').then(mod => mod.FaqSection), { ssr: true, loading: () => <SectionLoader label="Loading faq section..." /> });
const CtaSection = dynamic(() => import('@/components/data-visualization-in-r-programming/CtaSection').then(mod => mod.CtaSection), { ssr: true, loading: () => <SectionLoader label="Loading cta section..." /> });
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateDataVisualizationInRProgrammingCoursePageSchema } from "@/lib/schema-generators";
import { R_DATA_VIS_FAQS, R_DATA_VIS_REVIEW_DATA } from "@/data/rDataVisData";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

export const metadata = generateMetadata({
    title: "Machine Learning and Data Visualization using R Programming | CDPL",
    description: "Master Machine Learning algorithms and advanced Data Visualization using R Programming. 20-hour Master Program with 100% job assistance.",
    keywords: [
        "Machine Learning with R",
        "Data Visualization R",
        "R Programming Course",
        "Data Science R",
        "ML Algorithms R",
        "RStudio",
        "ggplot2",
        "Career in Data Science",
        "Data Analyst Training",
        "Predictive Modeling R"
    ],
    url: '/courses/ds-ml-courses/data-visualization-in-r-programming',
    image: "/og-images/courses-ds-ml-courses-data-visualization-in-r-programming-og.webp",
});

export default function Home() {
    const schemas = generateDataVisualizationInRProgrammingCoursePageSchema(
        {
            name: "Machine Learning and Data Visualization using R Programming",
            description: "Master Machine Learning algorithms and advanced Data Visualization using R Programming. 20-hour Master Program with 100% job assistance.",
            url: '/courses/ds-ml-courses/data-visualization-in-r-programming',
            slug: "data-visualization-in-r-programming",
            price: 25000,
            currency: "INR",
            duration: "P1M", // ~4 weeks
            instructor: "Expert R Data Scientists",
            rating: R_DATA_VIS_REVIEW_DATA.ratingValue,
            reviewCount: R_DATA_VIS_REVIEW_DATA.reviewCount,
            image: "/og-images/courses-ds-ml-courses-data-visualization-in-r-programming-og.webp",
        },
        R_DATA_VIS_FAQS.map(f => ({ question: f.question, answer: f.answer })),
        [
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
            { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" },
            { name: "R Programming Master Program", url: '/courses/ds-ml-courses/data-visualization-in-r-programming' },
        ]
    );

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">
            <div>
                {schemas.map((schema, index) => (
                    <JsonLd key={`data-vis-r-schema-${index}`} id={`data-vis-r-schema-${index}`} schema={schema} />
                ))}
                {/* Section 1: Hero and Form (Layout replication) */}
                <HeroSection />

                <div className="hidden md:block sticky top-0 z-20">
                    <StickyNav navItems={with_roadmap} />
                </div>

                {/* Section 2: Stats/Achievements */}
                <section id="program-stats"><StatsSection /></section>

                {/* Section 3: Why Enroll/Program Highlights */}
                <section id="why-master-program"><WhyRSection /></section>

                {/* Section 4: Detailed Curriculum */}
                <section id="curriculum"><CurriculumSection /></section>

                {/* Section 6: Tools & Technologies */}
                <section id="tools"><ToolsSection /></section>

                {/* Section 7: Career Roadmap (New SEO Boost Section) */}
                <section id="roadmap"><CareerRoadmapSection /></section>

                {/* Section 5: Real-Time Projects */}
                <section id="projects"><ProjectsSection /></section>

                {/* Section 8: Career Opportunities & Placement Support */}
                <section id="career"><CareerSection /></section>

                {/* Section 9: Who Should Enroll */}
                <section id="who-should-enroll"><WhoShouldEnroll /></section>

                {/* Section 10: Testimonials/Social Proof */}
                <section id="testimonials"><TestimonialsSection /></section>

                {/* Section 11: FAQ */}
                <section id="faqs"><FaqSection /></section>

                {/* Section 12: Final Call to Action */}
                <section id="contact"><CtaSection /></section>
            </div>
        </div>
    );
}
