/**
 * ============================================================================
 * ABOUT US PAGE - SEO IMPLEMENTATION
 * ============================================================================
 */

import React from 'react';
import type { Metadata } from "next";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateAboutPageAllSchemas } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// ============================================================================
// SECTION IMPORTS
// ============================================================================
// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).

import AboutHeroSection from "@/components/sections/AboutHeroSection";
import AboutStatsSection from "@/components/sections/AboutStatsSection";
import AboutWhyJoinUs from "@/components/sections/AboutWhyJoinUs";
import AboutStorySection from "@/components/sections/AboutStorySection";
import AboutFacultyStrip from "@/components/sections/AboutFacultyStrip";
import AboutMissionVision from "@/components/sections/AboutVisionMission";
import AboutFAQSection from "@/components/sections/AboutFAQSection";
import { ABOUT_FAQS } from "@/data/aboutFaqs";
import AboutCTASection from "@/components/sections/AboutCTASection";
import AboutAccreditations from "@/components/sections/AboutAccreditations";

// ============================================================================
// METADATA (Page-specific only)
// ============================================================================

export const metadata: Metadata = generateStaticPageMetadata({
  title: "About CDPL - Leading EdTech for Tech Training",
  description: "CDPL (Cinute Digital) is an India-based EdTech institute delivering industry-focused training in Software Testing, Data Science, AI/ML & BI. Founded in 2018 — live projects, expert mentorship & placement assistance.",
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
    "placement assistance",
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
  const schemas = generateAboutPageAllSchemas(
    ABOUT_FAQS.map(f => ({ question: f.question, answer: f.answer }))
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
        <AboutFAQSection />
      </div>
    </LightTheme>
  );
}
