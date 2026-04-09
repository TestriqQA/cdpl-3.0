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
import { generateBreadcrumbSchema, generateBusinessIntelligenceCategoryPageSchema } from '@/lib/schema-generators';
import JsonLd from '@/components/JsonLd';
import { Metadata } from 'next';
import { biFaqs } from '@/components/BI-Courses/faqData';

export const metadata: Metadata = generateStaticPageMetadata({
    title: 'Business Intelligence Courses | Power BI, Tableau & Data Viz',
    description: 'Explore our top-rated Business Intelligence courses. Master Power BI, Tableau, and data visualization skills with hands-on training and placement support.',
    url: '/courses/bi-courses',
    image: "/og-images/courses-bi-courses-og.webp",
    keywords: ['business intelligence course', 'power bi training', 'tableau course', 'data visualization', 'data analysis'],
});

export default function Home() {
    const schemas = generateBusinessIntelligenceCategoryPageSchema(
        {
            name: "Business Intelligence Master Course",
            description: "Master Data Analytics & Visualization with Power BI, Tableau, and Big Data Engineering. Comprehensive hands-on projects and placement support.",
            url: "/courses/bi-courses",
            slug: "bi-courses",
            level: "Beginner to Advanced",
            duration: "P4M", // 4 Months
            rating: 4.8,
            reviewCount: 2285,
            instructor: "Industry Experts",
            image: "/og-images/courses-bi-courses-og.webp",
        },
        biFaqs.map(f => ({ question: f.q, answer: f.a })),
        [
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
            { name: "BI Courses", url: "/courses/bi-courses" },
        ]
    );

    return (
        <>
            {schemas.map((schema, index) => (
                <JsonLd key={`bi-schema-${index}`} id={`bi-schema-${index}`} schema={schema} />
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
