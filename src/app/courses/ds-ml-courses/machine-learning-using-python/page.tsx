import StickyNav from "@/components/StickyNav2/StickyNav2";
import { with_roadmap } from '@/components/StickyNavData';
import { TestimonialsClient, CtaClient } from "@/app/courses/ds-ml-courses/machine-learning-using-python/client-section";
import HeroSection from "@/components/machine-learning-using-python/HeroSection";
import StatsSection from "@/components/machine-learning-using-python/StatsSection";
import {
    WhyMLPythonProgram,
    CurriculumSection,
    ProjectsSection,
    ToolsSection,
    CareerSection,
    WhoShouldEnroll,
    CareerRoadmapSection,
    FaqSection
} from "@/app/courses/ds-ml-courses/machine-learning-using-python/server-sections";

import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { ML_PYTHON_FAQS, ML_PYTHON_REVIEW_DATA } from "@/data/mlPythonData";

export const metadata = generateMetadata({
    title: "Machine Learning with Python Course in Mumbai | 45-Hour Master Program | CDPL",
    description: "45-Hour Master Program in Machine Learning Algorithms using Python. Hands-on projects, 100% job assistance, global certificates.",
    keywords: [
        "machine learning with python course mumbai",
        "python for data science training",
        "ml algorithms course",
        "python programming for ml",
        "machine learning certification mumbai",
        "ai and ml training institute"
    ],
    url: '/courses/ds-ml-courses/machine-learning-using-python',
    image: "/og-images/machine-learning-using-python.jpg",
});

export default function Home() {
    const courseSchema = generateCourseSchema({
        name: "Master Program in Machine Learning Algorithms using Python",
        description: "45-Hour Master Program in Machine Learning Algorithms using Python. Hands-on projects, 100% job assistance, global certificates.",
        url: '/courses/ds-ml-courses/machine-learning-using-python',
        slug: "machine-learning-using-python",
        price: 35000,
        currency: "INR",
        duration: "P1M2W", // ~6 weeks
        instructor: "Expert ML & Python Mentors",
        rating: ML_PYTHON_REVIEW_DATA.ratingValue,
        reviewCount: ML_PYTHON_REVIEW_DATA.reviewCount,
        image: "/og-images/machine-learning-using-python.jpg",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
    { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" },
        { name: "Machine Learning with Python", url: '/courses/ds-ml-courses/machine-learning-using-python' },
    ]);

    const faqSchema = generateFAQSchema(ML_PYTHON_FAQS);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <main className="flex-1">
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

                {/* Why Choose Program */}
                <section id="why-master-program"><WhyMLPythonProgram /></section>

                {/* Curriculum Section */}
                <section id="curriculum"><CurriculumSection /></section>

                {/* Tools Section */}
                <section id="tools"><ToolsSection /></section>

                {/* Career Roadmap Section */}
                <section id="roadmap"><CareerRoadmapSection /></section>

                {/* Projects Section */}
                <section id="projects"><ProjectsSection /></section>

                {/* Who Should Enroll */}
                <section id="who-should-enroll"><WhoShouldEnroll /></section>

                {/* Career Section */}
                <section id="career"><CareerSection /></section>

                {/* Testimonials Section */}
                <section id="testimonials"><TestimonialsClient /></section>

                {/* FAQ Section */}
                <section id="faqs"><FaqSection /></section>

                {/* CTA Section */}
                <section id="contact"><CtaClient /></section>

            </main>
        </div>
    );
}
