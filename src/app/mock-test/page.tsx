// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import MockTestHero from "@/components/mock-test/MockTestHero";
import MockTestListing from "@/components/mock-test/MockTestListing";
import { generateMockTestPageAllSchemas } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";

export const metadata = generateStaticPageMetadata({
  title: "Free Online Mock Tests & Premium Assessments",
  description:
    "Validate your expertise with precision. CDPL mock tests for Software Testing, Databases, Cloud, Security, Automation, and Web Development.",
  url: "/mock-test",
  image: "/og-images/mock-test-og.webp",
});

export default function MockTestLandingPage() {
  const mockSchemas = generateMockTestPageAllSchemas({
    faqs: [
      {
        question: "What domains are covered in the mock tests?",
        answer:
          "We provide comprehensive mock assessments for Software Testing, Databases, Cloud Computing, Automation, Security, and Web Development.",
      },
      {
        question: "Are the mock test results instant?",
        answer:
          "Yes, our platform provides real-time scoring and instant feedback upon completion of the assessment.",
      },
      {
        question: "Is there a cost for the mock assessments?",
        answer:
          "Many of our basic assessments are free to access, providing instant results for students and professionals.",
      },
    ],
    howToSteps: [
      {
        name: "Domain Selection",
        text: "Choose your technical domain from Software Testing, Cloud, Security, or Development.",
      },
      {
        name: "Registration",
        text: "Provide your basic details to access the premium assessment portal.",
      },
      {
        name: "Assessment",
        text: "Complete the industry-standard simulation test in a timed environment.",
      },
      {
        name: "Results",
        text: "Receive instant certification and real-time score analysis upon completion.",
      },
    ],
    categories: [
      "Software Testing",
      "Database Management",
      "Cloud Computing",
      "Test Automation",
      "Cyber Security",
      "Full Stack Development",
    ],
  });

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-brand-100 selection:text-brand-900">
      {mockSchemas.map((schema, index) => (
        <JsonLd
          key={`mock-schema-${index}`}
          id={`mock-schema-${index}`}
          schema={schema}
        />
      ))}

      {/* Background Decorations - Static */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-24">
        {/* LCP Element (Server Component - No Hydration) */}
        <MockTestHero />

        {/* Interactive Elements (Client Component) */}
        <MockTestListing />
      </div>
    </div>
  );
}
