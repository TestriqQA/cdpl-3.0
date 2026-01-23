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
import { Metadata } from 'next';

export const metadata: Metadata = generateStaticPageMetadata({
    title: 'Data Science & Machine Learning Courses | CDPL',
    description: 'Master Data Science and Machine Learning with our comprehensive courses. Learn Python, R, SQL, and AI with hands-on projects and placement support.',
    url: '/ds-ml-courses',
    keywords: ['data science course', 'machine learning training', 'python for data science', 'AI course', 'data analytics'],
});

export default function Home() {
    return (
        <>
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
