import type { Metadata } from "next";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateServicesPageAllSchemas } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { getServices } from "@/lib/services";

// ============================================================================
// SEO METADATA - Optimized for Services Page
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
  title: "Our Services | Corporate Training & Consulting | CDPL",
  description: "CDPL corporate training, software testing consulting, custom automation solutions & technical workshops — upskill your team with industry-expert trainers.",
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
  image: "/og-images/services-og.webp",
});

// ---------- Static Import for Hero (LCP Optimization) ----------
import ServicesHeroSection from "@/components/sections/ServicesHeroSection";
// ServicesGridSection is now a server component that takes a `services`
// prop — static import so the page-level fetched data can be passed in.
import ServicesGridSection from "@/components/sections/ServicesGridSection";

// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import ServicesWhyChooseUsSection from "@/components/sections/ServicesWhyChooseUsSection";
import ServicesCTASection from "@/components/sections/ServicesCTASection";

// ============================================================================
// SERVICES PAGE COMPONENT
// ============================================================================
export default async function TrainingServicesPage() {
  // BLG-133 follow-up: editor-managed services. Falls back to the local
  // trainingServices array inside getServices() when Sanity is empty.
  const services = await getServices();

  const schemas = generateServicesPageAllSchemas(
    services.map(s => ({
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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <ServicesHeroSection />
        <ServicesGridSection services={services} />
        <ServicesWhyChooseUsSection />
        <ServicesCTASection />
      </div>
    </>
  );
}
