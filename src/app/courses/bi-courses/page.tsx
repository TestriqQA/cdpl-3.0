import CategoryHubPage, { hubMetadata } from "@/components/category-hub/CategoryHubPage";
import JsonLd from "@/components/JsonLd";
import { generateBusinessIntelligenceCategoryPageSchema } from "@/lib/schema-generators";
import { biHub } from "@/data/hubs/bi";
import { SITE_STATS } from "@/lib/site-stats";

export const metadata = hubMetadata(biHub);

export default function Page() {
  const schemas = generateBusinessIntelligenceCategoryPageSchema(
    {
      name: "Business Intelligence Master Course",
      description:
        "Master Data Analytics & Visualization with Power BI, Tableau, and Big Data Engineering. Comprehensive hands-on projects and placement support.",
      url: "/courses/bi-courses",
      slug: "bi-courses",
      level: "Beginner to Advanced",
      duration: "P4M",
      rating: SITE_STATS.rating,
      reviewCount: SITE_STATS.reviewCount,
      instructor: "Industry Experts",
      image: "/og-images/courses-bi-courses-og.webp",
    },
    biHub.faq.items.map((f) => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "BI Courses", url: "/courses/bi-courses" },
    ],
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`bi-schema-${index}`} id={`bi-schema-${index}`} schema={schema} />
      ))}
      <CategoryHubPage hub={biHub} />
    </>
  );
}
