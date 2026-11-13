import type { Metadata } from "next";

import { buildLocationsHierarchy } from "@/data/courseData/buildLocationsHierarchy";
import { generateLocationsPageAllSchemas } from "@/lib/schema-generators";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import JsonLd from "@/components/JsonLd";

// Types
import type { CourseData } from "@/types/courseData";

// Your data (currently a Record<string, CourseData>)
import { courseData } from "@/types/courseData";

// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import LocationsHeroSection from "@/components/sections/LocationsHeroSection";
import HierarchicalLocationsSection from "@/components/sections/LocationsHierarchicalLocationsSection";
import LocationsBenefitsSection from "@/components/sections/LocationsBenefitsSection";
import LocationsCTASection from "@/components/sections/LocationsCTASection";
import LocationsServicesSection from "@/components/sections/LocationsServicesSection";

/* --------------------------------- Metadata --------------------------------- */

// ============================================================================
// ENHANCED METADATA FOR SEO
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
  // T-10 (local-SEO audit, Oct 2026): the UAE/Dubai city pages are noindex,
  // so promising them in the title and description sets an expectation the
  // search result cannot meet. Scope the copy to the cities we actually
  // serve and index.
  // generateStaticPageMetadata appends " | CDPL" to a plain string, which
  // doubled the suffix here. An absolute title opts out of that append.
  title: { absolute: "Locations We Serve | CDPL Training Across India" },
  description:
    "CDPL software testing, data science & programming courses across India — classroom training at our Mira Road campus plus online batches for Mumbai, Pune, Chennai, Kolkata, Hyderabad and more.",
  keywords: [
    "software testing courses locations India",
    "programming training centers Maharashtra",
    "CDPL training centers",
    "Cinute Digital locations",
    "software testing Mumbai",
    "programming courses Pune",
    "tech training Hyderabad",
    "software courses Chennai",
    "software testing course Kolkata",
    "training centers India",
    "course locations near me"
  ],
  url: "/locations-we-serve",
  image: "/og-images/locations-we-serve-og.webp",
});

/* ------------------------------- Utilities ------------------------------- */

function normalizeCourses(
  raw: CourseData[] | Record<string, CourseData> | undefined | null
): CourseData[] {
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  if (typeof raw === "object") return Object.values(raw);
  return [];
}

/* --------------------------------- Page --------------------------------- */

export default function LocationsWeServePage() {
  // Normalize your dataset to CourseData[]
  const courses: CourseData[] = normalizeCourses(courseData);

  // Build Country → State → District("Cities") → City hierarchy
  const countriesData = buildLocationsHierarchy(courses);

  // Extract unique locations for structured data
  const uniqueStates = new Set<string>();
  const uniqueCities = new Set<string>();

  courses.forEach(course => {
    if (course.state) uniqueStates.add(course.state);
    if (course.location) uniqueCities.add(course.location);
  });


  // Generate 8-point Schemas dynamically
  const uniqueCountries = countriesData.map(c => c.country);
  const locationNames = Array.from(new Set([...uniqueCountries, ...Array.from(uniqueStates), ...Array.from(uniqueCities)]));
  const schemas = generateLocationsPageAllSchemas(locationNames);

  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      {schemas.map((schema: any, index: number) => (
        <JsonLd key={`locations-schema-${index}`} id={`locations-schema-${index}`} schema={schema} />
      ))}


      {/* Each section sets its own background and container. */}
      <div className="w-full bg-white" itemScope itemType="https://schema.org/WebPage">
        <meta itemProp="name" content="Locations We Serve | CDPL Training Across India" />
        <meta itemProp="description" content="CDPL courses across India: classroom training at our Mira Road campus plus live-online batches for Mumbai, Pune, Chennai, Kolkata, Hyderabad and more." />

        <LocationsHeroSection />
        <HierarchicalLocationsSection data={countriesData} />
        <LocationsServicesSection />
        <LocationsBenefitsSection />
        <LocationsCTASection />
      </div>
    </>
  );
}
