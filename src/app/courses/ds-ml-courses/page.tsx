import CategoryHubPage, { hubMetadata } from "@/components/category-hub/CategoryHubPage";
import JsonLd from "@/components/JsonLd";
import { generateDataScienceMachineLearningCategoryPageSchema } from "@/lib/schema-generators";
import { dsMlHub } from "@/data/hubs/ds-ml";
import { SITE_STATS } from "@/lib/siteStats";

export const metadata = hubMetadata(dsMlHub);

export default function Page() {
  const schemas = generateDataScienceMachineLearningCategoryPageSchema(
    {
      name: "Data Science & Machine Learning Master Course",
      description: dsMlHub.seo.description,
      url: "/courses/ds-ml-courses",
      slug: "ds-ml-courses",
      level: "Beginner to Advanced",
      duration: "P4M", // 4 Months
      rating: SITE_STATS.rating,
      reviewCount: SITE_STATS.reviewCount,
      instructor: "Industry Experts",
    },
    dsMlHub.faq.items.map((f) => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" },
    ],
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`ds-ml-schema-${index}`} id={`ds-ml-schema-${index}`} schema={schema} />
      ))}
      <CategoryHubPage hub={dsMlHub} />
    </>
  );
}
