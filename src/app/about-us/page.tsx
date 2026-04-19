/**
 * ============================================================================
 * ABOUT US PAGE - SEO IMPLEMENTATION
 * ============================================================================
 */

import React from 'react';
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateAboutPageAllSchemas } from "@/lib/schema-generators";
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
  image: "/og-images/about-us-og.webp",
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

export default function AboutPage(): React.ReactNode {
  const faqs = [
    {
      question: "Do you provide placement assistance?",
      answer: "Yes. Our dedicated Career Services team offers resume reviews, portfolio polishing, mock interviews, and direct referrals through hiring partners. Many learners secure interviews within 2–6 weeks of completing capstone projects.",
      tags: ["career services", "placements", "jobs"],
    },
    {
      question: "Are the programs beginner friendly?",
      answer: "Absolutely. Each program starts with fundamentals and hands-on guided labs. No prior coding experience is required for our beginner tracks.",
      tags: ["beginners", "foundations", "non-tech"],
    },
    {
      question: "Will I work on live projects?",
      answer: "Yes. You'll build job-ready skills through live or sandbox projects mirroring real business scenarios, version control, code reviews, and CI/CD workflows.",
      tags: ["projects", "real-world", "portfolio"],
    },
    {
      question: "What makes your curriculum industry-aligned?",
      answer: "Our modules are co-designed with practitioners from QA, Data, and DevOps. Tooling includes Git, GitHub Actions, Postman, REST APIs, Selenium, Playwright, SQL, and cloud fundamentals so your skills map directly to hiring needs.",
      tags: ["industry", "tools", "curriculum"],
    },
    {
      question: "How are classes delivered—online or in-person?",
      answer: "We run live online cohorts with recordings and Q&A, plus weekend doubt-clearing sessions. Select cities also host optional in-person meetups and hiring drives.",
      tags: ["online", "hybrid", "recordings"],
    },
    {
      question: "Do you offer certifications?",
      answer: "Yes. You'll receive a Cinute Digital certificate on completion. We also guide you for global certifications like ISTQB (for Software Testing) and provide exam preparation resources.",
      tags: ["certificate", "ISTQB", "credentials"],
    },
    {
      question: "What is the typical program duration?",
      answer: "Most job-ready tracks span 10–24 weeks, with flexible schedules for working professionals. Accelerated bootcamps are available for focused upskilling.",
      tags: ["duration", "schedule", "bootcamp"],
    },
    {
      question: "Is there doubt support and mentorship?",
      answer: "Every learner gets mentor hours, Discord/Slack community access, and daily doubt support. Premium tracks include 1-on-1 career mentorship and mock interviews.",
      tags: ["mentor", "support", "community"],
    },
    {
      question: "Do you provide EMI or flexible payment plans?",
      answer: "Yes. We offer EMI options and milestone-based payment plans for most programs. Speak with our admissions team for the best fit.",
      tags: ["EMI", "payment", "fees"],
    },
    {
      question: "Can I switch tracks if my interests change?",
      answer: "Within the first 2 weeks, you can switch to another eligible cohort based on seat availability and prerequisites.",
      tags: ["track switch", "flexibility"],
    },
    {
      question: "What outcomes can I expect after completion?",
      answer: "Graduates showcase a portfolio of real projects, pass structured assessments, and get interview referrals. Many transition into roles such as QA Engineer, Automation Tester, Data Analyst, or Junior ML Engineer.",
      tags: ["outcomes", "roles", "career"],
    },
    {
      question: "Where can I view the full syllabus and upcoming cohorts?",
      answer: "Visit the program pages for detailed syllabus, start dates, and application steps. You can also request a personalized counseling call.",
      tags: ["syllabus", "cohorts", "apply"],
    },
  ];

  const schemas = generateAboutPageAllSchemas(
    faqs.map(f => ({ question: f.question, answer: f.answer }))
  );

  return (
    <LightTheme>
      {/* Schema Injection */}
      {schemas.map((schema, index) => (
        <JsonLd key={`about-schema-${index}`} id={`about-schema-${index}`} schema={schema} />
      ))}

      {/* Main Content */}
      <div className="relative isolate">
        <AboutHeroSection />
        <AboutStatsSection />
        <AboutWhyJoinUs />
        <AboutStorySection />
        <AboutMissionVision />
        <AboutFacultyStrip />
        <AboutAccreditations />
        <AboutCTASection />
        <AboutFAQSection faqs={faqs} />
      </div>
    </LightTheme>
  );
}
