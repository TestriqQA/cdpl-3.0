import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateServicesPageAllSchemas } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { trainingServices } from "@/data/servicesData";

// ============================================================================
// SEO METADATA - Optimized for Services Page
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
  title: "Our Services | Training, Consulting & Custom Solutions – CDPL",
  description: "CDPL offers comprehensive corporate training, software testing consulting, custom automation solutions, and technical workshops for enterprises. Upskill your team with industry-expert trainers in Software Testing, Data Science, AI/ML, and DevOps.",
  keywords: [
    "CDPL services",
    "corporate training",
    "software testing consulting",
    "automation solutions",
    "technical workshops",
    "enterprise training",
    "custom training programs",
    "QA consulting",
    "test automation services",
    "data science corporate training",
    "AI ML workshops",
    "DevOps training",
    "team upskilling",
  ],
  url: "/services",
  image: "/og-images/og-image-services.webp",
});

// Simple loading UI used by all sections
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-10">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// ---------- Static Import for Hero (LCP Optimization) ----------
import ServicesHeroSection from "@/components/sections/ServicesHeroSection";

// ---------- Dynamic sections (SSR enabled) ----------
const ServicesGridSection = dynamic(
  () => import("@/components/sections/ServicesGridSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading services..." /> }
);

const ServicesWhyChooseUsSection = dynamic(
  () => import("@/components/sections/ServicesWhyChooseUsSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading benefits..." /> }
);

const ServicesCTASection = dynamic(
  () => import("@/components/sections/ServicesCTASection"),
  { ssr: true, loading: () => <SectionLoader label="Loading CTA..." /> }
);

// ============================================================================
// SERVICES PAGE COMPONENT
// ============================================================================
export default function TrainingServicesPage() {
  const schemas = generateServicesPageAllSchemas(
    trainingServices.map(s => ({
      id: s.id,
      slug: s.slug,
      title: s.title,
      shortDescription: s.shortDescription,
    }))
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`services-schema-${index}`} id={`services-schema-${index}`} schema={schema} />
      ))}

      {/* Main Content - Semantic HTML Structure */}
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <ServicesHeroSection />
        <ServicesGridSection />
        <ServicesWhyChooseUsSection />
        <ServicesCTASection />
      </main>
    </>
  );
}
