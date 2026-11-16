import CategoryHubPage, { hubMetadata } from "@/components/category-hub/CategoryHubPage";
import JsonLd from "@/components/JsonLd";
import { generateArtificialIntelligenceCategoryPageSchema } from "@/lib/schema-generators";
import { aiHub } from "@/data/hubs/ai";
import { SITE_STATS } from "@/lib/siteStats";

export const metadata = hubMetadata(aiHub);

export default function Page() {
  const schemas = generateArtificialIntelligenceCategoryPageSchema(
    {
      name: "Artificial Intelligence Master Course",
      description:
        "Advance your career with our specialized Artificial Intelligence courses. Learn Generative AI, NLP, Deep Learning, and more.",
      url: "/courses/artificial-intelligence-courses",
      slug: "artificial-intelligence-courses",
      level: "Beginner to Advanced",
      duration: "P4M", // 4 Months
      rating: SITE_STATS.rating,
      reviewCount: SITE_STATS.reviewCount,
      instructor: "Industry Experts",
      image: "/og-images/courses-artificial-intelligence-courses-og.webp",
    },
    aiHub.faq.items.map((f) => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Artificial Intelligence Courses", url: "/courses/artificial-intelligence-courses" },
    ],
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`ai-schema-${index}`} id={`ai-schema-${index}`} schema={schema} />
      ))}
      <CategoryHubPage hub={aiHub} />
    </>
  );
}
