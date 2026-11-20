import CategoryHubPage, { hubMetadata } from "@/components/category-hub/CategoryHubPage";
import JsonLd from "@/components/JsonLd";
import { generateSoftwareTestingCategoryPageSchema } from "@/lib/schema-generators";
import { softwareTestingHub } from "@/data/hubs/software-testing";
import { SITE_STATS } from "@/lib/site-stats";

// National category page; the Mumbai classroom offer is
// /software-testing-course-in-mumbai, linked from the hero note.
export const metadata = hubMetadata(softwareTestingHub);

export default function SoftwareTestingPage() {
  const schemas = generateSoftwareTestingCategoryPageSchema(
    {
      name: "Software Testing Full Course (Manual + Automation)",
      description: softwareTestingHub.seo.description,
      url: "/courses/software-testing-course",
      slug: "software-testing-course",
      level: "Beginner to Advanced",
      duration: "P4M", // 4 Months
      rating: SITE_STATS.rating,
      reviewCount: SITE_STATS.reviewCount,
      instructor: "Industry Experts",
      image: "/og-images/courses-software-testing-course-og.png",
    },
    softwareTestingHub.faq.items.map((f) => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Software Testing Course", url: "/courses/software-testing-course" },
    ],
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={index} id={`software-testing-schema-${index}`} schema={schema} />
      ))}
      <CategoryHubPage hub={softwareTestingHub} />
    </>
  );
}
