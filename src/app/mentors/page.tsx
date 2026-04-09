import dynamic from "next/dynamic";
import {
  generateBreadcrumbSchema,
  generateMentorsPageAllSchemas
} from "@/lib/schema-generators";
import { MENTORS } from "@/lib/mentorShared";
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

// ---------- Small, reusable loading UI ----------
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled like your example) ----------
// ---------- Static sections (Critical for LCP/CLS) ----------
import MentorHeroSection from "@/components/sections/MentorHeroSection";
import MentorsImpactSection from "@/components/sections/MentorsImpactSection";

// ---------- Dynamic sections (Below fold) ----------
const MentorProcessFlowSection = dynamic(
  () => import("@/components/sections/MentorProcessFlowSection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading process..." />,
  }
);

const MentorHelpCTASection = dynamic(
  () => import("@/components/sections/MentorHelpCTASection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading help..." />,
  }
);

const MentorOutcomesSection = dynamic(
  () => import("@/components/sections/MentorOutcomesSection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading outcomes..." />,
  }
);



// ============================================================================
// MENTORS PAGE COMPONENT
// ============================================================================
export default function MentorsPage() {
  // Generate Schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Mentors", url: "/mentors" },
  ]);

  // Generate 8-point Schemas dynamically
  const schemas = generateMentorsPageAllSchemas(MENTORS);

  return (
    <>
      {schemas.map((schema: any, index: number) => (
        <JsonLd key={`mentors-schema-${index}`} id={`mentors-schema-${index}`} schema={schema} />
      ))}
      <JsonLd schema={breadcrumbSchema} id="mentors-breadcrumb" />

      {/* Main Content - Semantic HTML Structure */}
      <main
        className="relative bg-white text-slate-900"
      >
        <MentorHeroSection />
        <MentorsImpactSection />
        <MentorOutcomesSection />
        <MentorProcessFlowSection />
        <MentorHelpCTASection />
      </main>
    </>
  );
}
