// Every course page, built at deploy time from src/data/courses/registry.ts.
//
// The family hubs (/courses/bi-courses etc.) are static folders next to this
// one. Next.js matches full route patterns, so /courses/bi-courses still hits
// its hub page and /courses/bi-courses/power-bi-course lands here. Any
// category/course pair that is not a registry course is a 404.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { courseParams, loadCourse } from "@/data/courses/content";

type Props = { params: Promise<{ category: string; course: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return courseParams();
}

async function getCourseContent(params: Props["params"]) {
  const { category, course } = await params;
  const content = await loadCourse(category, course);
  if (!content) notFound();
  return content;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return courseMetadata(await getCourseContent(params));
}

export default async function Page({ params }: Props) {
  return <CoursePage course={await getCourseContent(params)} />;
}
