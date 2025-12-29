const HeroSection = dynamic(() => import('@/components/machine-learning-using-python/HeroSection'), { ssr: true, loading: () => <SectionLoader label="Loading hero section..." /> });
const StickyNav = dynamic(() => import('@/components/StickyNav2/StickyNav2'), { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> });
import { with_roadmap } from '@/components/StickyNavData';
const StatsSection = dynamic(() => import('@/components/machine-learning-using-python/StatsSection'), { ssr: true, loading: () => <SectionLoader label="Loading stats section..." /> });
const WhyMLPythonProgram = dynamic(() => import('@/components/machine-learning-using-python/WhyMLPythonProgram'), { ssr: true, loading: () => <SectionLoader label="Loading why ML Python program section..." /> });
const CurriculumSection = dynamic(() => import('@/components/machine-learning-using-python/CurriculumSection'), { ssr: true, loading: () => <SectionLoader label="Loading curriculum section..." /> });
const ProjectsSection = dynamic(() => import('@/components/machine-learning-using-python/ProjectsSection'), { ssr: true, loading: () => <SectionLoader label="Loading projects section..." /> });
const ToolsSection = dynamic(() => import('@/components/machine-learning-using-python/ToolsSection'), { ssr: true, loading: () => <SectionLoader label="Loading tools section..." /> });
const TestimonialsSection = dynamic(() => import('@/components/machine-learning-using-python/TestimonialsSection'), { ssr: true, loading: () => <SectionLoader label="Loading testimonials section..." /> });
const CareerSection = dynamic(() => import('@/components/machine-learning-using-python/CareerSection'), { ssr: true, loading: () => <SectionLoader label="Loading career section..." /> });
const WhoShouldEnroll = dynamic(() => import('@/components/machine-learning-using-python/WhoShouldEnroll'), { ssr: true, loading: () => <SectionLoader label="Loading who should enroll section..." /> });
const CareerRoadmapSection = dynamic(() => import('@/components/machine-learning-using-python/CareerRoadmapSection'), { ssr: true, loading: () => <SectionLoader label="Loading career roadmap section..." /> });
const FaqSection = dynamic(() => import('@/components/machine-learning-using-python/FaqSection'), { ssr: true, loading: () => <SectionLoader label="Loading faq section..." /> });
import CtaSection from "@/components/machine-learning-using-python/CtaSection";
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateCourseSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema-generators";
import { ML_PYTHON_FAQS, ML_PYTHON_REVIEW_DATA } from "@/data/mlPythonData";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

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
