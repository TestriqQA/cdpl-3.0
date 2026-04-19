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
import dynamic from 'next/dynamic';
import type { Metadata } from "next";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateHomePageSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { HOME_FAQS } from "@/components/home/HomeFAQSection";

// ============================================================================
// DYNAMIC IMPORTS (for performance)
// ============================================================================

import HomeHeroSection from '@/components/home/HomeHeroSection';
const HomeTrustBarSection = dynamic(() => import('@/components/home/HomeTrustBarSection'), { ssr: true });
const HomeFeaturedCoursesSection = dynamic(() => import('@/components/home/HomeFeaturedCoursesSection'), { ssr: true });
const HomeLearningExperienceSection = dynamic(() => import('@/components/home/HomeLearningExperienceSection'), { ssr: true });
const HomePlacementSupportSection = dynamic(() => import('@/components/home/HomePlacementSupportSection'), { ssr: true });
const PlacementsCompanyWallSection = dynamic(() => import("@/components/sections/PlacementsCompanyWallSection"), { ssr: true });
const HomeWhyChooseSection = dynamic(() => import('@/components/home/HomeWhyChooseSection'), { ssr: true });
const HomeLatestBlogSection = dynamic(() => import('@/components/home/HomeLatestBlogSection'), { ssr: true });
const HomeFAQSection = dynamic(() => import('@/components/home/HomeFAQSection'), { ssr: true });
const HomeFinalCTASection = dynamic(() => import('@/components/home/HomeFinalCTASection'), { ssr: true });

import { client } from "@/sanity/client";
import { LATEST_POSTS_QUERY } from "@/sanity/lib/queries";
import { SanityPost } from "@/sanity/types";

// ============================================================================
// HOME PAGE METADATA
// ============================================================================

export const metadata: Metadata = generateMetadata({
  title: "Best Software Testing & Data Science Courses India | CDPL",
  description: "Launch your tech career with CDPL's industry-leading courses in Software Testing, Data Science, and AI/ML. 100% Placement Support, Live Projects & Expert Mentors. Book a Free Demo!",
  keywords: [
    "software testing course",
    "data science course",
    "AI ML course",
    "CDPL",
    "Cinute Digital",
    "best tech training institute",
    "100% placement support",
    "career change",
    "IT training India",
    "online courses",
    "job guarantee",
    "automation testing",
    "machine learning training",
    "software testing course in Mumbai",
    "data science course in Mumbai",
    "IT courses with placement",
    "best software testing institute",
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
  const latestPosts: SanityPost[] = await client.fetch(LATEST_POSTS_QUERY, {}, {
    next: { revalidate: 3600 } // Revalidate every hour
  });

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
            <PlacementsCompanyWallSection />
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
