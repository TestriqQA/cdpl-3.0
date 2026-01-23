import CurriculumSection from '@/components/BI-Courses/CurriculumSection';
import TestimonialsSection from '@/components/BI-Courses/TestimonialsSection';
import CoursesSection from '@/components/BI-Courses/CoursesSection';
import FAQSection from '@/components/BI-Courses/FAQSection';
import FinalCTASection from '@/components/BI-Courses/FinalCTASection';
import ProjectsSection from '@/components/BI-Courses/ProjectsSection';
import CareerPathSection from '@/components/BI-Courses/CareerPathSection';
import HeroSection from '@/components/BI-Courses/HeroSection';
import WhyChooseSection from '@/components/BI-Courses/WhyChooseSection';
import { generateStaticPageMetadata } from '@/lib/metadata-generator';
import { Metadata } from 'next';

export const metadata: Metadata = generateStaticPageMetadata({
    title: 'Business Intelligence Courses | Power BI, Tableau & Data Viz',
    description: 'Explore our top-rated Business Intelligence courses. Master Power BI, Tableau, and data visualization skills with hands-on training and placement support.',
    url: '/bi-courses',
    keywords: ['business intelligence course', 'power bi training', 'tableau course', 'data visualization', 'data analysis'],
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
