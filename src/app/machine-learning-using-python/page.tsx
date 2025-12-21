import HeroSection from "@/components/machine-learning-using-python/HeroSection";
import StickyNav from '@/components/StickyNav2/StickyNav2';
import { with_roadmap } from '@/components/StickyNavData';
import StatsSection from "@/components/machine-learning-using-python/StatsSection";
import WhyMLPythonProgram from "@/components/machine-learning-using-python/WhyMLPythonProgram";
import CurriculumSection from "@/components/machine-learning-using-python/CurriculumSection";
import ProjectsSection from "@/components/machine-learning-using-python/ProjectsSection";
import ToolsSection from "@/components/machine-learning-using-python/ToolsSection";
import TestimonialsSection from "@/components/machine-learning-using-python/TestimonialsSection";
import CareerSection from "@/components/machine-learning-using-python/CareerSection";
import WhoShouldEnroll from "@/components/machine-learning-using-python/WhoShouldEnroll";
import CareerRoadmapSection from "@/components/machine-learning-using-python/CareerRoadmapSection";
import FaqSection from "@/components/machine-learning-using-python/FaqSection";
import CtaSection from "@/components/machine-learning-using-python/CtaSection";
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
    url: "/machine-learning-using-python",
    image: "/og-images/machine-learning-using-python.jpg",
});

export default function Home() {
    const courseSchema = generateCourseSchema({
        name: "Master Program in Machine Learning Algorithms using Python",
        description: "45-Hour Master Program in Machine Learning Algorithms using Python. Hands-on projects, 100% job assistance, global certificates.",
        url: "/machine-learning-using-python",
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
        { name: "Machine Learning with Python", url: "/machine-learning-using-python" },
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
                <section id="testimonials"><TestimonialsSection /></section>

                {/* FAQ Section */}
                <section id="faqs"><FaqSection /></section>

                {/* CTA Section */}
                <section id="contact"><CtaSection /></section>

            </main>
        </div>
    );
}
