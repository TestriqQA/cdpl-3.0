// Every category hub (/courses/bi-courses etc.), built at deploy time: one
// page per category in COURSE_CATEGORIES (src/data/courses/registry.ts), with
// its content and schema from src/data/hubs/hub-pages.ts. Course pages are
// ./[course]/page.tsx. Any other segment is a 404.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryHubPage, { hubMetadata } from "@/components/category-hub/CategoryHubPage";
import JsonLd from "@/components/JsonLd";
import { COURSE_CATEGORIES, categoryForSegment, categorySegment, type CourseCategoryKey } from "@/data/courses/registry";
import { HUB_PAGES } from "@/data/hubs/hub-pages";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return (Object.keys(COURSE_CATEGORIES) as CourseCategoryKey[]).map((c) => ({ category: categorySegment(c) }));
}

async function getHubPage(params: Props["params"]) {
  const category = categoryForSegment((await params).category);
  if (!category) notFound();
  return HUB_PAGES[category];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return hubMetadata((await getHubPage(params)).hub);
}

export default async function Page({ params }: Props) {
  const { hub, schemaId, schemas } = await getHubPage(params);
  return (
    <>
      {schemas().map((schema, index) => (
        <JsonLd key={`${schemaId}-${index}`} id={`${schemaId}-${index}`} schema={schema} />
      ))}
      <CategoryHubPage hub={hub} />
    </>
  );
}
