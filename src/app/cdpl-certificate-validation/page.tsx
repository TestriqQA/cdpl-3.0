import type { Metadata } from "next";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateCertificateValidationPageAllSchemas } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { VALIDATION_FAQS, VALIDATION_STEPS } from "@/data/certificateValidationFaqs";

// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import CertificationBreadcrumb from "@/components/sections/CertificationBreadcrumb";
import CertificationValidatorSection from "@/components/sections/CertificationValidatorSection";
import CertificationSampleSection from "@/components/sections/CertificationSampleSection";
import CertificationFeaturesSection from "@/components/sections/CertificationFeaturesSection";

/* ---------- SEO ---------- */
export const metadata: Metadata = generateStaticPageMetadata({
  title: "Certificate Validation | Verify CDPL Certificates",
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
  image: "/og-images/cdpl-certificate-validation-og.webp",

});

/* ---------- Page (server component) ---------- */
export default function CertificateValidationPage() {
  const consolidatedSchemas = generateCertificateValidationPageAllSchemas({
    // Same data the page shows, so the FAQPage / HowTo schema match the visible content.
    faqs: VALIDATION_FAQS,
    howToSteps: VALIDATION_STEPS,
    features: [
      "Instant Verification",
      "Tamper-Proof Security",
      "Globally Recognized"
    ]
  });

  return (
    <div
      className="bg-white text-slate-900"
    >
      {consolidatedSchemas.map((schema, index) => (
        <JsonLd key={`validation-schema-${index}`} id={`validation-schema-${index}`} schema={schema} />
      ))}

      {/* Header + validator share one glow backdrop, as on the other reworked heroes. */}
      <div className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -right-24 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-200/40 blur-3xl" />
        </div>
        <CertificationBreadcrumb />
        <CertificationValidatorSection />
      </div>

      <CertificationSampleSection />
      <CertificationFeaturesSection />
    </div>
  );
}
