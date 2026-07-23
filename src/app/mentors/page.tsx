import {
  generateBreadcrumbSchema,
  generateMentorsPageAllSchemas
} from "@/lib/schema-generators";
import { getMentors } from "@/lib/mentors";
import JsonLd from "@/components/JsonLd";

import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import type { Metadata } from "next";

export const metadata: Metadata = generateStaticPageMetadata({
  title: "Our Mentors | Industry Experts from Top Tech Companies",
  description: "Meet our mentors and industry experts who guide you through your learning journey. Learn from professionals working at top tech companies.",
  url: "/mentors",
  image: "/og-images/mentors-og.webp",
  keywords: ["mentors", "industry experts", "tech mentors", "career guidance", "placement support"],
});

// ... (metadata export remains same)

// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import MentorHeroSection from "@/components/sections/MentorHeroSection";
import MentorsImpactSection from "@/components/sections/MentorsImpactSection";
import MentorProcessFlowSection from "@/components/sections/MentorProcessFlowSection";
import MentorHelpCTASection from "@/components/sections/MentorHelpCTASection";
import MentorOutcomesSection from "@/components/sections/MentorOutcomesSection";

// ============================================================================
// MENTORS PAGE COMPONENT
// ============================================================================
export default async function MentorsPage() {
  // BLG-133 follow-up: editor-managed mentors. Falls back to the local
  // MENTORS array inside getMentors() when Sanity is empty.
  const mentors = await getMentors();

  // Generate Schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Mentors", url: "/mentors" },
  ]);

  // Generate 8-point Schemas dynamically
  const schemas = generateMentorsPageAllSchemas(mentors);

  return (
    <>
      {schemas.map((schema: any, index: number) => (
        <JsonLd key={`mentors-schema-${index}`} id={`mentors-schema-${index}`} schema={schema} />
      ))}
      <JsonLd schema={breadcrumbSchema} id="mentors-breadcrumb" />

      {/* Main Content - Semantic HTML Structure */}
      <div
        className="relative bg-white text-slate-900"
      >
        <MentorHeroSection />
        <MentorsImpactSection mentors={mentors} />
        <MentorOutcomesSection />
        <MentorProcessFlowSection />
        <MentorHelpCTASection />
      </div>
    </>
  );
}
