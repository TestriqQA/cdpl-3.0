const HeroSection = dynamic(() => import("@/components/power-bi-course/HeroSection"), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StickyNav = dynamic(() => import("@/components/StickyNav2/StickyNav2"), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import { with_roadmap } from '@/components/StickyNavData';
const StatsSection = dynamic(() => import("@/components/power-bi-course/StatsSection"), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyBIProgram = dynamic(() => import("@/components/power-bi-course/WhyBIProgram"), { ssr: true, loading: () => <SectionLoader label="Loading why bi program section..." /> });
const CurriculumSection = dynamic(() => import("@/components/power-bi-course/CurriculumSection"), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import("@/components/power-bi-course/ProjectsSection"), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const TestimonialsSection = dynamic(() => import("@/components/power-bi-course/TestimonialsSection"), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import("@/components/power-bi-course/CareerSection"), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import("@/components/power-bi-course/WhoShouldEnroll"), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const ToolsSection = dynamic(() => import("@/components/power-bi-course/ToolsSection"), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const FaqSection = dynamic(() => import("@/components/power-bi-course/FaqSection"), { ssr: true, loading: () => <SectionLoader label="Loading faq section..." /> });
const CtaSection = dynamic(() => import("@/components/power-bi-course/CtaSection"), { ssr: true, loading: () => <SectionLoader label="Loading cta section..." /> });
const CareerRoadmapSection = dynamic(() => import("@/components/power-bi-course/CareerRoadmapSection"), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const JsonLd = dynamic(() => import("@/components/JsonLd"), { ssr: true, loading: () => <SectionLoader label="Loading json ld..." /> });
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { POWER_BI_FAQS, POWER_BI_REVIEW_DATA } from "@/data/powerBiData";
import dynamic from 'next/dynamic';

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

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
                <section id="testimonials"><TestimonialsSection /></section>
                <section id="faqs"><FaqSection /></section>
                <section id="contact"><CtaSection /></section>

                {/* Note: You would typically include a Footer component here */}
            </main>
        </>
    );
};

export default PowerBIPage;
