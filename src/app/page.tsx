/**
 * ============================================================================
 * HOME PAGE - ENHANCED SEO & SCHEMA MARKUP
 * ============================================================================
 * 
 * This file implements the comprehensive SEO strategy for the home page,
 * including multiple rich schema types for maximum search visibility.
 * 
 * @version 2.0.0
 * @updated 2025-11-12
 */

import React from 'react';
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateHomePageSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { HOME_FAQS } from "@/components/home/HomeFAQSection";

// ============================================================================
// SECTION IMPORTS
// ============================================================================
// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).

import HomeHeroSection from '@/components/home/HomeHeroSection';
// Static import, not dynamic(): HomeTrustBarSection is a Server Component and
// ships no client JS, so a lazy wrapper saves no bundle while still adding a
// Suspense boundary — a skeleton that paints, then a client-side DOM swap
// forcing style recalc and layout.
import HomeTrustBarSection from '@/components/home/HomeTrustBarSection';
// These five are now Server Components (framer-motion removed), so they ship no
// client JS. dynamic() would only add a Suspense boundary with no bundle saving,
// so they are imported statically and emit their markup in correct DOM order.
import HomeLearningExperienceSection from '@/components/home/HomeLearningExperienceSection';
import HomePlacementSupportSection from '@/components/home/HomePlacementSupportSection';
import HomeWhyChooseSection from '@/components/home/HomeWhyChooseSection';
import HomeLatestBlogSection from '@/components/home/HomeLatestBlogSection';
// These four are client components, but in the App Router dynamic(ssr:true)
// gives them no lazy-loading benefit (route segments are already code-split)
// while each wrapper adds a client Suspense boundary that swaps the
// server-rendered section for its fallback on hydration.
import HomeFeaturedCoursesSection from '@/components/home/HomeFeaturedCoursesSection';
import PlacementsCompanyWallSection from "@/components/sections/PlacementsCompanyWallSection";
import HomeFAQSection from '@/components/home/HomeFAQSection';
import HomeFinalCTASection from '@/components/home/HomeFinalCTASection';

import { sanityFetch } from "@/sanity/lib/fetch";
import { LATEST_POSTS_QUERY } from "@/sanity/lib/queries";
import { SanityPost } from "@/sanity/types";
import { getHiringPartners } from "@/lib/hiring-partners";

// ============================================================================
// HOME PAGE METADATA
// ============================================================================

export const metadata: Metadata = generateMetadata({
  title: "Software Testing & Data Science Courses India | CDPL",
  description: "Launch your tech career with CDPL's courses in Software Testing, Data Science & AI/ML — live projects, expert mentors and placement assistance.",
  keywords: [
    "software testing course",
    "data science course",
    "AI ML course",
    "CDPL",
    "Cinute Digital",
    "comprehensive tech training institute",
    "placement support",
    "career change",
    "IT training India",
    "online courses",
    "job assistance",
    "automation testing",
    "machine learning training",
    "software testing course in Mumbai",
    "data science course in Mumbai",
    "IT courses with placement",
    "comprehensive software testing institute",
    "CDPL blog",
    "technology courses"
  ],
  url: '/',
  image: '/og-images/home-page-og.png',
});

// ============================================================================
// HOME PAGE COMPONENT
// ============================================================================

export default async function HomePage(): Promise<React.ReactElement> {
  // ========================================
  // DATA FETCHING
  // ========================================
  // Draft-aware + cache-tagged via sanityFetch (BLG-139/146).
  const latestPosts: SanityPost[] = await sanityFetch<SanityPost[]>({
    query: LATEST_POSTS_QUERY,
    tags: ['post'],
    revalidate: 3600,
  });

  // BLG-133 follow-up: editor-managed hiring partners. Falls back to the
  // hard-coded list inside PlacementsCompanyWallSection when Sanity is empty.
  const hiringPartners = await getHiringPartners();

  // ========================================
  // SCHEMA DATA
  // ========================================

  // The generateHomePageSchema function combines LocalBusiness, ItemList, FAQPage, and VideoObject
  // into a single, optimized array of schemas for the Home Page.
  const homePageSchemas = generateHomePageSchema(HOME_FAQS);

  return (
    <>
      {/* ========================================
          JSON-LD SCHEMA INJECTION
          ======================================== */}
      {homePageSchemas.map((schema, index) => (
        <JsonLd key={index} id={`home-schema-${index}`} schema={schema} />
      ))}

      <div className="relative bg-white">
        {/* ========================================
            PAGE CONTENT
            ======================================== */}
        <HomeHeroSection />
        <HomeTrustBarSection />
        <HomeFeaturedCoursesSection />
        <HomeLearningExperienceSection />
        <HomePlacementSupportSection />
        <section
          className="w-full scroll-mt-[96px] md:scroll-mt-[104px] lg:scroll-mt-[112px]"
          data-scroll-target="placements-partners"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PlacementsCompanyWallSection sanityPartners={hiringPartners} />
          </div>
        </section>
        <HomeWhyChooseSection />
        <HomeLatestBlogSection posts={latestPosts} />
        <HomeFAQSection />
        <HomeFinalCTASection />
      </div>
    </>
  );
}
