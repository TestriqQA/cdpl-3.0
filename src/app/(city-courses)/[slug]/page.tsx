import React from "react";
import type { Metadata } from "next";
import { courseData, type CourseData } from "@/types/courseData";
import { generateMetadata as generateSEOMetadata } from "@/lib/metadata-generator";
import {
  generateCourseSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
} from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

import HeroSection from "@/components/city-courses/HeroSection";
import dynamic from "next/dynamic";
// Dynamic imports for below-the-fold content
const CourseOverviewSection = dynamic(() => import("@/components/city-courses/CourseOverviewSection"), { ssr: true });
const CurriculumSection = dynamic(() => import("@/components/city-courses/CurriculumSection"), { ssr: true });
const ProjectsSection = dynamic(() => import("@/components/city-courses/ProjectsSection"), { ssr: true });
const WhyChooseSection = dynamic(() => import("@/components/city-courses/WhyChooseSection"), { ssr: true });
const CareerPathSection = dynamic(() => import("@/components/city-courses/CareerPathSection"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/city-courses/FAQSection"), { ssr: true });
const CTASection = dynamic(() => import("@/components/city-courses/CTASection"), { ssr: true });

import NotFoundPage from "@/components/NotFoundPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Helper: fetch by the object's internal `slug`
function getByInternalSlug(slug: string): CourseData | undefined {
  const key = slug.toLowerCase();
  return Object.values(courseData).find(
    (c) => c.slug.toLowerCase() === key
  );
}

// Helper: Parse price string to number (e.g., "₹29,999" -> 29999)
function parsePrice(priceStr: string): number {
  return Number(priceStr.replace(/[^0-9]/g, "")) || 0;
}

// Helper: Convert duration string to ISO 8601 duration (approximate)
// e.g., "12 weeks" -> "P12W"
function parseDuration(durationStr: string): string {
  const num = durationStr.match(/\d+/)?.[0];
  if (num && durationStr.toLowerCase().includes("week")) {
    return `P${num}W`;
  }
  if (num && durationStr.toLowerCase().includes("month")) {
    return `P${num}M`;
  }
  return "P3M"; // Default fallback
}

// SEO metadata from the matched course - Enhanced
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getByInternalSlug(slug);

  if (!data) {
    return {
      title: "Course Not Found | 404 - CDPL",
      description: "The requested course page could not be found. Browse our available courses in software testing, automation, and development.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  // Extract city from location
  const city = data.location || "";

  // Build keywords array from metadata.keywords string
  const baseKeywords = data.metadata.keywords
    ? data.metadata.keywords.split(',').map(k => k.trim())
    : [];

  // Add additional keywords
  const additionalKeywords = [
    data.courseName,
    `${data.courseName} course`,
    `${data.courseName} training`,
    city ? `${data.courseName} ${city}` : "",
    city ? `${city} training` : "",
    city ? `${city} courses` : "",
    "CDPL courses",
    "software testing",
    "automation training",
    "QA training",
    "tech courses India"
  ].filter(Boolean);

  const allKeywords = [...baseKeywords, ...additionalKeywords];

  // Enhanced metadata using generateSEO
  return generateSEOMetadata({
    title: data.metadata.title,
    description: data.metadata.description,
    keywords: allKeywords,
    url: `/${slug}`,
    image: data.heroImage || "/og-images/og-image-courses.webp",
    type: "website"
  });
}

// Only prebuild pages using each object's internal `slug`
export async function generateStaticParams() {
  return Object.values(courseData).map((c) => ({ slug: c.slug.toLowerCase() }));
}

// Optional hard lock:
// export const dynamicParams = false;

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const data = getByInternalSlug(slug);

  // Show custom 404 page if course not found
  if (!data) {
    return <NotFoundPage />;
  }

  // --- Structured Data Generation ---

  // 1. Breadcrumb Schema
  const breadcrumbItems = data.breadcrumbs
    ? data.breadcrumbs.map((b) => ({ name: b.label, url: b.href }))
    : [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: data.courseName, url: `/${data.slug}` },
    ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

  // 2. Organization Schema
  const organizationSchema = generateOrganizationSchema();

  // 3. Course Schema
  // Extract learning outcomes from modules
  const learningOutcomes = data.courseOverviewContent.modules.flatMap(m => m.topics).slice(0, 10); // Limit to 10

  const courseSchema = generateCourseSchema({
    name: data.metadata.title, // Use full title for better SEO
    description: data.metadata.description,
    slug: data.slug,
    url: `/${data.slug}`,
    level: data.courseDetails.level,
    learningOutcomes: learningOutcomes,
    prerequisites: ["Basic computer knowledge"], // Default based on FAQ
    duration: parseDuration(data.courseDetails.duration),
    price: parsePrice(data.courseDetails.price),
    rating: 4.8, // Default high rating as per other pages
    reviewCount: 150, // Default review count
    // image: data.heroImage // Optional if available
  });

  // 4. FAQ Schema
  const faqSchema = generateFAQSchema(
    data.faqsContent.faqs.map(f => ({
      question: f.question,
      answer: f.answer
    }))
  );

  return (
    <>
      <JsonLd id={`course-${slug}-breadcrumb`} schema={breadcrumbSchema} />
      <JsonLd id={`course-${slug}-org`} schema={organizationSchema} />
      <JsonLd id={`course-${slug}-schema`} schema={courseSchema} />
      <JsonLd id={`course-${slug}-faq`} schema={faqSchema} />

      {/* Semantic HTML Structure */}
      <main
        className="overflow-hidden"
      >
        <HeroSection data={data} />
        <CourseOverviewSection data={data} />
        <CurriculumSection data={data} />
        <ProjectsSection data={data} />
        <WhyChooseSection data={data} />
        <CareerPathSection data={data} />
        <FAQSection data={data} />
        <CTASection data={data} />
      </main>
    </>
  );
}
