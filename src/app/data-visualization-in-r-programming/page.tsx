import { HeroSection } from '@/components/data-visualization-in-r-programming/HeroSection';
import StickyNav from '@/components/StickyNav2/StickyNav2';
import { with_roadmap } from '@/components/StickyNavData';
import { StatsSection } from '@/components/data-visualization-in-r-programming/StatsSection';
import { WhyRSection } from '@/components/data-visualization-in-r-programming/WhyRSection';
import { CurriculumSection } from '@/components/data-visualization-in-r-programming/CurriculumSection';
import { ProjectsSection } from '@/components/data-visualization-in-r-programming/ProjectsSection';
import { ToolsSection } from '@/components/data-visualization-in-r-programming/ToolsSection';
import { CareerSection } from '@/components/data-visualization-in-r-programming/CareerSection';
import { CareerRoadmapSection } from '@/components/data-visualization-in-r-programming/CareerRoadmapSection';
import { WhoShouldEnroll } from '@/components/data-visualization-in-r-programming/WhoShouldEnroll';
import { TestimonialsSection } from '@/components/data-visualization-in-r-programming/TestimonialsSection';
import { FaqSection } from '@/components/data-visualization-in-r-programming/FaqSection';
import { CtaSection } from '@/components/data-visualization-in-r-programming/CtaSection';
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { R_DATA_VIS_FAQS, R_DATA_VIS_REVIEW_DATA } from "@/data/rDataVisData";

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
    url: "/data-visualization-in-r-programming",
    image: "/og-images/data-visualization-in-r-programming.jpg",
});

export default function Home() {
    const courseSchema = generateCourseSchema({
        name: "Machine Learning and Data Visualization using R Programming",
        description: "Master Machine Learning algorithms and advanced Data Visualization using R Programming. 20-hour Master Program with 100% job assistance.",
        url: "/data-visualization-in-r-programming",
        slug: "data-visualization-in-r-programming",
        price: 25000,
        currency: "INR",
        duration: "P1M", // ~4 weeks
        instructor: "Expert R Data Scientists",
        rating: R_DATA_VIS_REVIEW_DATA.ratingValue,
        reviewCount: R_DATA_VIS_REVIEW_DATA.reviewCount,
        image: "/og-images/data-visualization-in-r-programming.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "R Programming Master Program", url: "/data-visualization-in-r-programming" },
    ]);

    const faqSchema = generateFAQSchema(R_DATA_VIS_FAQS);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 antialiased">

            <main>
                <JsonLd id="course-schema" schema={courseSchema} />
                <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
                <JsonLd id="faq-schema" schema={faqSchema} />
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
            </main>

        </div>
    );
}
