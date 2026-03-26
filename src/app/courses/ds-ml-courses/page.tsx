import CurriculumSection from '@/components/DS&ML-Courses/CurriculumSection';
import TestimonialsSection from '@/components/DS&ML-Courses/TestimonialsSection';
import CoursesSection from '@/components/DS&ML-Courses/CoursesSection';
import FAQSection from '@/components/DS&ML-Courses/FAQSection';
import FinalCTASection from '@/components/DS&ML-Courses/FinalCTASection';
import ProjectsSection from '@/components/DS&ML-Courses/ProjectsSection';
import CareerPathSection from '@/components/DS&ML-Courses/CareerPathSection';
import HeroSection from '@/components/DS&ML-Courses/HeroSection';
import WhyChooseSection from '@/components/DS&ML-Courses/WhyChooseSection';
import { generateStaticPageMetadata } from '@/lib/metadata-generator';
import { generateBreadcrumbSchema, generateDataScienceMachineLearningCategoryPageSchema } from '@/lib/schema-generators';
import JsonLd from '@/components/JsonLd';
import { Metadata } from 'next';
import { dsMlFaqs } from '@/components/DS&ML-Courses/data';

export const metadata: Metadata = generateStaticPageMetadata({
    title: 'Data Science & Machine Learning Courses | CDPL',
    description: 'Master Data Science and Machine Learning with our comprehensive courses. Learn Python, R, SQL, and AI with hands-on projects and placement support.',
    url: '/courses/ds-ml-courses',
    keywords: ['data science course', 'machine learning training', 'python for data science', 'AI course', 'data analytics'],
});

export default function Home() {
    const schemas = generateDataScienceMachineLearningCategoryPageSchema(
        {
            name: "Data Science & Machine Learning Master Course",
            description: "Master Data Science and Machine Learning with our comprehensive courses. Learn Python, R, SQL, and AI with hands-on projects and placement support.",
            url: "/courses/ds-ml-courses",
            slug: "ds-ml-courses",
            level: "Beginner to Advanced",
            duration: "P4M", // 4 Months
            rating: 4.8,
            reviewCount: 950,
            instructor: "Industry Experts",
        },
        dsMlFaqs.map(f => ({ question: f.q, answer: f.a })),
        [
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
            { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" },
        ]
    );

    return (
        <>
            {schemas.map((schema, index) => (
               <JsonLd key={`ds-ml-schema-${index}`} id={`ds-ml-schema-${index}`} schema={schema} />
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
