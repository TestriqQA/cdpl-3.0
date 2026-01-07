import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

/* ---------- Small, reusable loading UI ---------- */
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

import CertificationBreadcrumb from "@/components/sections/CertificationBreadcrumb";
import CertificationValidatorSection from "@/components/sections/CertificationValidatorSection";
import CertificationSampleSection from "@/components/sections/CertificationSampleSection";

/* ---------- Dynamic sections (client components) ---------- */
// Kept Features dynamic as it is likely below fold
const CertificationFeaturesSection = dynamic(
  () => import("@/components/sections/CertificationFeaturesSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading features..." /> }
);

/* ---------- SEO ---------- */
export const metadata: Metadata = generateStaticPageMetadata({
  title: "CDPL Certificate Validation - Verify AAA & ACTD Certificates Online",
  description:
    "Instantly validate and verify CDPL certificates online. Check authenticity of AAA, ACTD, and other CDPL certification courses. Enter certificate ID for instant verification. Trusted by employers worldwide.",
  keywords: [
    "CDPL certificate validation",
    "verify CDPL certificate",
    "AAA certificate verification",
    "ACTD certificate verification",
    "certificate authenticity check",
    "online certificate validation",
    "CDPL certification verify",
    "check certificate validity",
    "certificate ID verification",
    "validate training certificate",
    "employer certificate verification",
    "authentic certificate check",
    "CDPL certificate lookup",
    "certification verification tool",
    "digital certificate validation",
  ],
  url: "/cdpl-certificate-validation",
  image: "/og-image-certificate-validation.jpg",
});

/* ---------- Page (server component) ---------- */
export default function CertificateValidationPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Certificate Validation", url: "/cdpl-certificate-validation" },
  ]);

  const webPageSchema = generateWebPageSchema({
    name: "CDPL Certificate Validation - Verify AAA & ACTD Certificates Online",
    description: "Instantly validate and verify CDPL certificates online. Check authenticity of AAA, ACTD, and other CDPL certification courses.",
    url: "/cdpl-certificate-validation",
    isPartOf: {
      "@id": "https://www.cinutedigital.com/#website"
    }
  });

  return (
    <main
      className="bg-white text-slate-900"
    >
      <JsonLd id="validation-breadcrumb" schema={breadcrumbSchema} />
      <JsonLd id="validation-webpage" schema={webPageSchema} />

      <meta itemProp="name" content="CDPL Certificate Validation Tool" />
      <meta itemProp="description" content="Verify CDPL certificate authenticity online" />
      <meta itemProp="url" content="https://www.cinutedigital.com/cdpl-certificate-validation" />
      <meta itemProp="applicationCategory" content="BusinessApplication" />

      <CertificationBreadcrumb />
      <CertificationValidatorSection />
      <CertificationSampleSection />
      <CertificationFeaturesSection />
    </main>
  );
}
