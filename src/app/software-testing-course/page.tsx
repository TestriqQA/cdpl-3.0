import HeroSection from '@/components/software-testing-course/HeroSection';
import StickyNav from '@/components/StickyNav2/StickyNav2';
import { general_course } from '@/components/StickyNavData';
import FeaturesSection from '@/components/software-testing-course/FeaturesSection';
import CurriculumSection from '@/components/software-testing-course/CurriculumSection';
import TestimonialsSection from '@/components/software-testing-course/TestimonialsSection';
import CoursesSection from '@/components/software-testing-course/CoursesSection';
import FAQSection from '@/components/software-testing-course/FAQSection';
import FinalCTASection from '@/components/software-testing-course/FinalCTASection';
import ProjectsSection from '@/components/software-testing-course/ProjectsSection';
import CareerPathSection from '@/components/software-testing-course/CareerPathSection';
import { generateStaticPageMetadata } from '@/lib/metadata-generator';
import { Metadata } from 'next';

export const metadata: Metadata = generateStaticPageMetadata({
  title: 'Software Testing Courses | Manual & Automation Testing',
  description: 'Start your career in software testing with our comprehensive courses. Master manual testing, Selenium, Java, and API testing.',
  url: '/software-testing-course',
  keywords: ['software testing course', 'manual testing training', 'automation testing course', 'selenium training', 'qa training'],
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="hidden md:block sticky top-0 z-20">
        <StickyNav navItems={general_course} />
      </div>
      <section id="features"><FeaturesSection /></section>
      <section id="courses"><CoursesSection /></section>
      <section id="curriculum"><CurriculumSection /></section>
      <section id="testimonials"><TestimonialsSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="career"><CareerPathSection /></section>
      <section id="faqs"><FAQSection /></section>
      <section id="contact"><FinalCTASection /></section>
    </>
  );
}