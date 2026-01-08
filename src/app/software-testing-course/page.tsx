import StickyNav from '@/components/StickyNav2/StickyNav2';
import { general_course } from '@/components/StickyNavData';
import { TestimonialsClient, CtaClient } from "@/app/software-testing-course/client-section";
import HeroSection from '@/components/software-testing-course/HeroSection';
import {
  FeaturesSection,
  CurriculumSection,
  CoursesSection,
  ProjectsSection,
  CareerPathSection,
  FAQSection
} from "@/app/software-testing-course/server-sections";

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
      <section id="testimonials"><TestimonialsClient /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="career"><CareerPathSection /></section>
      <section id="faqs"><FAQSection /></section>
      <section id="contact"><CtaClient /></section>
    </>
  );
}