import HeroSection from '@/components/Digital-Marketing/HeroSection';
import WhyChooseSection from '@/components/Digital-Marketing/WhyChooseSection';
import CurriculumSection from '@/components/Digital-Marketing/CurriculumSection';
import TestimonialsSection from '@/components/Digital-Marketing/TestimonialsSection';
import CoursesSection from '@/components/Digital-Marketing/CoursesSection';
import FAQSection from '@/components/Digital-Marketing/FAQSection';
import FinalCTASection from '@/components/Digital-Marketing/FinalCTASection';
import ProjectsSection from '@/components/Digital-Marketing/ProjectsSection';
import CareerPathSection from '@/components/Digital-Marketing/CareerPathSection';
import { generateStaticPageMetadata } from '@/lib/metadata-generator';
import { generateBreadcrumbSchema, generateDigitalMarketingCategoryPageSchema } from '@/lib/schema-generators';
import JsonLd from '@/components/JsonLd';
import { Metadata } from 'next';
import { dmFaqs } from '@/components/Digital-Marketing/faqData';

export const metadata: Metadata = generateStaticPageMetadata({
    title: 'Digital Marketing Courses | SEO, SEM, SMM & More',
    description: 'Become a certified digital marketer with our industry-focused courses. Learn SEO, PPC, social media marketing, and content strategy.',
    url: '/courses/digital-marketing-courses',
    keywords: ['digital marketing course', 'SEO training', 'social media marketing', 'PPC course', 'digital marketing certification'],
});

export default function Home() {
    const schemas = generateDigitalMarketingCategoryPageSchema(
        {
            name: "Digital Marketing Master Course",
            description: "Become a certified digital marketer with our industry-focused courses. Learn SEO, PPC, social media marketing, and content strategy.",
            url: "/courses/digital-marketing-courses",
            slug: "digital-marketing-courses",
            level: "Beginner to Advanced",
            duration: "P3M", // 3 Months
            rating: 4.8,
            reviewCount: 3042,
            instructor: "Industry Experts",
        },
        dmFaqs.map(f => ({ question: f.q, answer: f.a })),
        [
            { name: "Home", url: "/" },
            { name: "Courses", url: "/courses" },
            { name: "Digital Marketing Courses", url: "/courses/digital-marketing-courses" },
        ]
    );

    return (
        <>
            {schemas.map((schema, index) => (
               <JsonLd key={`dm-schema-${index}`} id={`dm-schema-${index}`} schema={schema} />
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
