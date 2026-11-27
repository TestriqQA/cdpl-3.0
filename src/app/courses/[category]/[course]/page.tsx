// Every course page, built at deploy time from src/data/courses/registry.ts.
// The category's hub is ../page.tsx. Any category/course pair that is not a
// registry course is a 404.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { courseParams, loadCourse } from "@/data/courses/content";

type Props = { params: Promise<{ category: string; course: string }> };

export const dynamicParams = false;

// Both params, for every course. ../page.tsx's generateStaticParams is for the
// hub route only: Next.js passes parent params down from a layout, not a page.
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
