import CurriculumSection from '@/components/AI-Courses/CurriculumSection';
import TestimonialsSection from '@/components/AI-Courses/TestimonialsSection';
import CoursesSection from '@/components/AI-Courses/CoursesSection';
import FAQSection from '@/components/AI-Courses/FAQSection';
import FinalCTASection from '@/components/AI-Courses/FinalCTASection';
import ProjectsSection from '@/components/AI-Courses/ProjectsSection';
import CareerPathSection from '@/components/AI-Courses/CareerPathSection';
import HeroSection from '@/components/AI-Courses/HeroSection';
import WhyChooseSection from '@/components/AI-Courses/WhyChooseSection';
import { generateStaticPageMetadata } from '@/lib/metadata-generator';
import { generateBreadcrumbSchema, generateArtificialIntelligenceCategoryPageSchema } from '@/lib/schema-generators';
import JsonLd from '@/components/JsonLd';
import { Metadata } from 'next';
import { aiFaqs } from '@/components/AI-Courses/faqData';

export const metadata: Metadata = generateStaticPageMetadata({
    title: 'Artificial Intelligence Courses | AI & Generative AI Training',
    description: 'Advance your career with our specialized Artificial Intelligence courses. Learn Generative AI, NLP, Deep Learning, and more.',
    url: '/courses/artificial-intelligence-courses',
    image: "/og-images/courses-artificial-intelligence-courses-og.webp",
    keywords: ['artificial intelligence course', 'AI training', 'generative ai course', 'deep learning', 'NLP training'],
});

export default function Home() {
    const schemas = generateArtificialIntelligenceCategoryPageSchema(
        {
            name: "Artificial Intelligence Master Course",
            description: "Advance your career with our specialized Artificial Intelligence courses. Learn Generative AI, NLP, Deep Learning, and more.",
            url: "/courses/artificial-intelligence-courses",
            slug: "artificial-intelligence-courses",
            level: "Beginner to Advanced",
            duration: "P4M", // 4 Months
            rating: 4.8,
            reviewCount: 3105,
            instructor: "Industry Experts",
            image: "/og-images/courses-artificial-intelligence-courses-og.webp",
        },
        aiFaqs.map(f => ({ question: f.q, answer: f.a })),
        [
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
            { name: "Artificial Intelligence Courses", url: "/courses/artificial-intelligence-courses" },
        ]
    );

    return (
        <>
            {schemas.map((schema, index) => (
               <JsonLd key={`ai-schema-${index}`} id={`ai-schema-${index}`} schema={schema} />
            ))}
            <HeroSection />
            <WhyChooseSection />
            <CoursesSection />
            <CurriculumSection />
            <TestimonialsSection />
            <ProjectsSection />
            <CareerPathSection />
            <FAQSection />
            <FinalCTASection />
        </>
    );
}
