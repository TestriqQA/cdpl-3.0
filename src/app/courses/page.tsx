// app/courses/page.tsx (or pages/courses.tsx)
import HeroSection from "@/components/courses/HeroSection";
import StatsSection from "@/components/courses/StatsSection";
import BenefitsSection from "@/components/courses/BenefitsSection";
import FAQSection from "@/components/courses/FAQSection";
import CTASection from "@/components/courses/CTASection";

// If you kept it where I placed it in the canvas:
import FilterableCourseSections from "@/components/courses/FilterableCourseSections";
// If you moved it under components, use:
// import FilterableCourseSections from "@/components/courses/FilterableCourseSections";

import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateAllCoursesPageSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = generateStaticPageMetadata({
    title: "All Courses",
    description: "Explore our industry-leading courses in Software Testing, Data Science, AI/ML, and Full Stack Development. 100% placement support.",
    url: "/courses",
    keywords: ["software testing courses", "data science training", "full stack development course", "it courses mumbai", "placement guarantee courses"],
});

export default function CoursesPage() {
    const allCoursesSchemas = generateAllCoursesPageSchema();

    return (
        <div className="min-h-screen bg-white">
            {allCoursesSchemas.map((schema, index) => (
                <JsonLd key={index} id={`courses-schema-${index}`} schema={schema} />
            ))}
            <HeroSection />
            <FilterableCourseSections />
            <StatsSection />
            <BenefitsSection />
            <FAQSection />
            <CTASection />
        </div>
    );
}
