/**
 * ============================================================================
 * ABOUT US PAGE - SEO IMPLEMENTATION
 * ============================================================================
 * 
 * This page follows the centralized SEO approach:
 * - Organization & Website schemas are in layout.tsx (global)
 * - This page only adds page-specific schemas: AboutPage, Breadcrumb, FAQ
 * - Metadata is generated using the centralized generator
 */

import React from 'react';
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateAboutPageSchema,
} from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// ============================================================================
// DYNAMIC IMPORTS
// ============================================================================

import AboutHeroSection from "@/components/sections/AboutHeroSection";

const AboutStatsSection = dynamic(
  () => import("@/components/sections/AboutStatsSection"),
  { ssr: true, loading: () => null }
);

const AboutWhyJoinUs = dynamic(
  () => import("@/components/sections/AboutWhyJoinUs"),
  { ssr: true, loading: () => null }
);

const AboutStorySection = dynamic(
  () => import("@/components/sections/AboutStorySection"),
  { ssr: true, loading: () => null }
);

const AboutFacultyStrip = dynamic(
  () => import("@/components/sections/AboutFacultyStrip"),
  { ssr: true, loading: () => null }
);

const AboutMissionVision = dynamic(
  () => import("@/components/sections/AboutVisionMission"),
  { ssr: true, loading: () => null }
);

const AboutFAQSection = dynamic(
  () => import("@/components/sections/AboutFAQSection"),
  { ssr: true, loading: () => null }
);

const AboutCTASection = dynamic(
  () => import("@/components/sections/AboutCTASection"),
  { ssr: true, loading: () => null }
);

const AboutAccreditations = dynamic(
  () => import("@/components/sections/AboutAccreditations"),
  { ssr: true, loading: () => null }
);

// ============================================================================
// METADATA (Page-specific only)
// ============================================================================

export const metadata: Metadata = generateStaticPageMetadata({
  title: "About CDPL - Leading EdTech for Tech Training",
  description: "CDPL (Cinute Digital) is India's premier EdTech institute delivering industry-ready training in Software Testing, Automation, Data Science, and AI/ML. Founded in 2020, we've empowered 5000+ professionals with live projects, expert mentorship, and 100% placement support.",
  url: "/about-us",
  keywords: [
    "about CDPL",
    "about Cinute Digital",
    "CDPL history",
    "EdTech institute India",
    "software testing training institute",
    "data science training Mumbai",
    "AI ML course India",
    "automation testing institute",
    "job-ready programs",
    "placement guarantee",
    "industry mentors",
    "live projects training",
    "ISTQB certified training",
    "ISO 9001 certified",
    "Skill India partner",
  ],
  image: "/og-images/og-image-about.webp",
});

// ============================================================================
// LIGHT THEME WRAPPER
// ============================================================================

const LightTheme: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white text-slate-800 [color-scheme:light] dark:bg-white dark:text-slate-800">
    {children}
  </div>
);

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function AboutPage(): React.ReactElement {
  // ========================================
  // PAGE-SPECIFIC SCHEMAS ONLY
  // (Organization & Website are in layout.tsx)
  // ========================================

  // 1. Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
  ]);

  // 2. AboutPage Schema
  const aboutPageSchema = generateAboutPageSchema({
    name: "About CDPL - Cinute Digital",
    description: "Learn about CDPL's mission to empower professionals with industry-ready skills through hands-on training in Software Testing, Automation, Data Science, and AI/ML.",
    url: "/about-us",
  });

  // 3. FAQ Schema
  const faqs = [
    {
      question: "What is CDPL (Cinute Digital)?",
      answer: "CDPL (Cinute Digital) is India's premier EdTech institute specializing in industry-ready training for Software Testing, Automation, Data Science, and AI/ML. Founded in 2020, we've empowered 5000+ professionals with hands-on learning, expert mentorship, and 100% placement support.",
    },
    {
      question: "When was CDPL founded?",
      answer: "CDPL was founded in 2020 by a group of passionate tech professionals who believed education should evolve with industry needs. Our mission from day one has been to bridge the gap between academic learning and real-world job requirements.",
    },
    {
      question: "What makes CDPL different from other training institutes?",
      answer: "CDPL stands out through our unique combination of live projects, mentor-led learning, portfolio-first approach, and guaranteed placement support. We focus on job-ready skills with hands-on practice on real-world scenarios, not just theory. Our curriculum is continuously updated to match industry demands.",
    },
    {
      question: "Where is CDPL located?",
      answer: "CDPL is headquartered in Mira Road East, Mumbai, Maharashtra. We serve learners across India through both online and offline training modes. Our programs are accessible to students from Mumbai, Pune, Bangalore, Delhi, and other major cities.",
    },
    {
      question: "What is CDPL's mission and vision?",
      answer: "Our mission is to empower learners with real-world skills through live projects, mentor feedback, and interview preparation. Our vision is to build an inclusive EdTech ecosystem where lifelong learning, innovation, and career outcomes converge—creating talent that drives high-impact products and services.",
    },
    {
      question: "What courses does CDPL offer?",
      answer: "CDPL offers comprehensive training programs in Software Testing (Manual & Automation), API Testing, Data Science, Machine Learning, Artificial Intelligence, Data Analytics, Python Programming, Java Programming, ETL Testing, and Digital Marketing. All courses include live projects, expert mentorship, and placement assistance.",
    },
    {
      question: "Does CDPL provide placement support?",
      answer: "Yes! We provide 100% placement support including resume building, portfolio development, mock interviews, interview preparation, and direct referrals to our 50+ hiring partners. Our placement team works with you until you land your first job.",
    },
    {
      question: "Who are the mentors at CDPL?",
      answer: "Our mentors are industry experts with 10-15+ years of hands-on experience. They include QA leads, data scientists, automation architects, and senior engineers from top product companies and MNCs. All mentors are actively working professionals who bring real-world insights to the classroom.",
    },
    {
      question: "Is CDPL certified or accredited?",
      answer: "Yes, CDPL is ISO 9001:2015 certified for quality management and is a recognized Skill India (NSDC) partner. We are also an ISTQB certified training partner. Our certifications ensure that our training meets international quality standards.",
    },
    {
      question: "What is CDPL's teaching methodology?",
      answer: "We follow a hands-on, project-based learning approach with live mentor-led classes, real-world projects and case studies, collaborative peer learning, regular assessments and feedback, mock interviews and soft skills training, and continuous doubt support.",
    },
    {
      question: "How many students has CDPL trained?",
      answer: "CDPL has successfully trained and upskilled 5000+ professionals in software testing, data science, and AI/ML. Our alumni work in leading companies across India and globally.",
    },
    {
      question: "Does CDPL offer flexible learning options?",
      answer: "Yes! We offer flexible learning options including weekend batches, weekday evening batches, fast-track intensive programs, and self-paced learning with recorded sessions. You can choose the format that best fits your schedule.",
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <LightTheme>
      {/* ========================================
          PAGE-SPECIFIC SCHEMAS ONLY
          (No Organization/Website - already in layout)
          ======================================== */}
      <JsonLd id="about-page-schema" schema={aboutPageSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />

      {/* ========================================
          MAIN CONTENT
          ======================================== */}
      <main className="relative isolate">

        <AboutHeroSection />
        <AboutStatsSection />
        <AboutWhyJoinUs />
        <AboutStorySection />
        <AboutMissionVision />
        <AboutFacultyStrip />
        <AboutAccreditations />
        <AboutCTASection />
        <AboutFAQSection />
      </main>
    </LightTheme>
  );
} 
