import CategoryHubPage, { hubMetadata } from "@/components/category-hub/CategoryHubPage";
import JsonLd from "@/components/JsonLd";
import { generateDigitalMarketingCategoryPageSchema } from "@/lib/schema-generators";
import { digitalMarketingHub } from "@/data/hubs/digital-marketing";
import { SITE_STATS } from "@/lib/siteStats";

export const metadata = hubMetadata(digitalMarketingHub);

export default function Page() {
  const schemas = generateDigitalMarketingCategoryPageSchema(
    {
      name: "Digital Marketing Master Course",
      description: digitalMarketingHub.seo.description,
      url: "/courses/digital-marketing-courses",
      slug: "digital-marketing-courses",
      level: "Beginner to Advanced",
      duration: "P3M", // 3 Months
      rating: SITE_STATS.rating,
      reviewCount: SITE_STATS.reviewCount,
      instructor: "Industry Experts",
      image: "/og-images/courses-digital-marketing-courses-og.webp",
    },
    digitalMarketingHub.faq.items.map((f) => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Digital Marketing Courses", url: "/courses/digital-marketing-courses" },
    ],
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`dm-schema-${index}`} id={`dm-schema-${index}`} schema={schema} />
      ))}
      <CategoryHubPage hub={digitalMarketingHub} />
    </>
  );
}
