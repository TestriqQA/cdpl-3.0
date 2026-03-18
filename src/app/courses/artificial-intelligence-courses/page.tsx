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
import { generateBreadcrumbSchema } from '@/lib/schema-generators';
import JsonLd from '@/components/JsonLd';
import { Metadata } from 'next';

export const metadata: Metadata = generateStaticPageMetadata({
    title: 'Artificial Intelligence Courses | AI & Generative AI Training',
    description: 'Advance your career with our specialized Artificial Intelligence courses. Learn Generative AI, NLP, Deep Learning, and more.',
    url: '/courses/artificial-intelligence-courses',
    keywords: ['artificial intelligence course', 'AI training', 'generative ai course', 'deep learning', 'NLP training'],
});

export default function Home() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Courses", url: "/courses" },
        { name: "Artificial Intelligence Courses", url: "/courses/artificial-intelligence-courses" },
    ]);

    return (
        <>
            <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
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
