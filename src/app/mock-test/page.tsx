// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import MockTestHero from "@/components/mock-test/MockTestHero";
import MockTestListing, { type MockCategorySummary } from "@/components/mock-test/MockTestListing";
import { mockCategories } from "@/data/mockTestData";
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

  // The listing only needs names, slugs and question counts. Passing this
  // summary (instead of the listing importing mockTestData itself) keeps the
  // whole question bank out of the client bundle.
  const categories: MockCategorySummary[] = mockCategories.map((c) => ({
    id: c.id,
    name: c.name,
    tests: c.courses.map((t) => ({
      id: t.id,
      slug: t.slug,
      name: t.name,
      categoryId: t.categoryId,
      questionCount: t.questions.length,
    })),
  }));
  const testCount = categories.reduce((n, c) => n + c.tests.length, 0);

  return (
    <div className="bg-white text-slate-800 selection:bg-brand-100 selection:text-brand-900">
      {mockSchemas.map((schema, index) => (
        <JsonLd
          key={`mock-schema-${index}`}
          id={`mock-schema-${index}`}
          schema={schema}
        />
      ))}

      {/* LCP Element (Server Component - No Hydration) */}
      <MockTestHero testCount={testCount} domainCount={categories.length} />

      {/* Search, domain filter and the tests (Client Component) */}
      <MockTestListing categories={categories} />
    </div>
  );
}
