import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateCertificateValidationPageAllSchemas } from "@/lib/schema-generators";
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
  image: "/og-images/cdpl-certificate-validation-og.webp",

});

/* ---------- Page (server component) ---------- */
export default function CertificateValidationPage() {
  const consolidatedSchemas = generateCertificateValidationPageAllSchemas({
    faqs: [
      {
        question: "How can I verify a CDPL certificate?",
        answer: "You can verify any CDPL, AAA, or ACTD certificate by entering the unique Certificate ID on our official validation page. The system will provide instant confirmation of the holder's name and certificate status.",
      },
      {
        question: "What certificates can be validated here?",
        answer: "This tool validates all official certifications issued by Cinute Digital Pvt. Ltd., including Advanced Automation Architecture (AAA) and Agile, Cloud & Test-Driven Development (ACTD) programs.",
      },
      {
        question: "Is this validation recognized by employers?",
        answer: "Yes, our digital certificates come with an immutable ID that employers can verify in real-time to ensure the authenticity of your qualifications.",
      },
      {
        question: "Can I share my verified status?",
        answer: "Yes, once a certificate is validated, the system generates a unique shareable link that you can include on your LinkedIn profile, resume, or portfolio.",
      },
    ],
    howToSteps: [
      { name: "Obtain Certificate ID", text: "Locate the unique alphanumeric ID on your CDPL, AAA, or ACTD certificate." },
      { name: "Enter ID", text: "Input the Certificate ID into the secure validation search field on the CDPL website." },
      { name: "Initiate Validation", text: "Click the 'Validate' button to cross-reference the ID with our secure global registry." },
      { name: "Verify Authenticity", text: "Instantly view the student's name, program, and current certification status." },
      { name: "Share or Save", text: "Use the unique shareable link to provide proof of qualification to employers." }
    ],
    features: [
      "Instant Verification",
      "Tamper-Proof Security",
      "Globally Recognized"
    ]
  });

  return (
    <main
      className="bg-white text-slate-900"
    >
      {consolidatedSchemas.map((schema, index) => (
        <JsonLd key={`validation-schema-${index}`} id={`validation-schema-${index}`} schema={schema} />
      ))}

      <meta itemProp="name" content="CDPL Certificate Validation Tool" />
      <meta itemProp="description" content="Verify CDPL certificate authenticity online" />
      <meta itemProp="url" content="https://www.cinutedigital.com/cdpl-certificate-validation" />
      <meta itemProp="applicationCategory" content="BusinessApplication" />

      <CertificationBreadcrumb />

      {/* Page Title */}
      <div className="mx-auto max-w-7xl px-4 pt-1 pb-1 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-indigo-700">Certificate</span> <span className="text-brand">Validation</span>
        </h1>
        <p className="mt-2 max-w-2xl text-lg text-slate-600">
          Verify the authenticity of CDPL, AAA, and ACTD certifications instantly.
        </p>
      </div>

      <CertificationValidatorSection />
      <CertificationSampleSection />
      <CertificationFeaturesSection />
    </main>
  );
}
