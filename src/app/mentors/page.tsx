import dynamic from "next/dynamic";
import {
  generateBreadcrumbSchema,
  generateCollectionPageSchema,
  generatePersonSchema
} from "@/lib/schema-generators";
import { MENTORS } from "@/lib/mentorShared";
import JsonLd from "@/components/JsonLd";

import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import type { Metadata } from "next";

export const metadata: Metadata = generateStaticPageMetadata({
  title: "Our Mentors | Industry Experts from Top Tech Companies",
  description: "Meet our mentors and industry experts who guide you through your learning journey. Learn from professionals working at top tech companies.",
  url: "/mentors",
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

  const collectionPageSchema = generateCollectionPageSchema({
    name: "CDPL Mentors",
    description: "Meet the mentors guiding learners across QA, Data, Product, and Engineering",
    url: "/mentors",
    hasPart: MENTORS.map(mentor => generatePersonSchema({
      name: mentor.name,
      jobTitle: mentor.title,
      description: mentor.bio,
      image: mentor.avatar,
    }))
  });

  return (
    <>
      <JsonLd schema={breadcrumbSchema} id="mentors-breadcrumb" />
      <JsonLd schema={collectionPageSchema} id="mentors-collection" />

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
