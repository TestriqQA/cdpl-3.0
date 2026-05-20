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
import { generateMachineLearningUsingPythonCoursePageSchema } from "@/lib/schema-generators";
import { ML_PYTHON_FAQS, ML_PYTHON_REVIEW_DATA } from "@/data/mlPythonData";

export const metadata = generateMetadata({
    title: "Machine Learning with Python Course in Mumbai | CDPL",
    description: "45-hour master program in ML algorithms using Python — scikit-learn, pandas, real datasets & hands-on projects with placement assistance in Mumbai.",
    keywords: [
        "machine learning with python course mumbai",
        "python for data science training",
        "ml algorithms course",
        "python programming for ml",
        "machine learning certification mumbai",
        "ai and ml training institute"
    ],
    url: '/courses/ds-ml-courses/machine-learning-using-python',
    image: "/og-images/courses-ds-ml-courses-machine-learning-using-python-og.webp",
});

export default function Home() {
    const schemas = generateMachineLearningUsingPythonCoursePageSchema(
        {
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
            image: "/og-images/courses-ds-ml-courses-machine-learning-using-python-og.webp",
        },
        ML_PYTHON_FAQS.map(f => ({ question: f.question, answer: f.answer })),
        [
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
            { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" },
            { name: "Machine Learning with Python", url: '/courses/ds-ml-courses/machine-learning-using-python' },
        ]
    );

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <div className="flex-1">
                {schemas.map((schema, index) => (
                    <JsonLd key={`ml-python-schema-${index}`} id={`ml-python-schema-${index}`} schema={schema} />
                ))}
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

            </div>
        </div>
    );
}
