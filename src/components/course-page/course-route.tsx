// The route exports shared by every family's [course] page
// (src/app/courses/<family>/[course]/page.tsx). Each family file stays a few
// lines: it names its category and re-exports what this returns.

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { courseParams, loadCourse } from "@/data/courses/content";
import type { CourseCategoryKey } from "@/data/courses/registry";

type CourseRouteProps = { params: Promise<{ course: string }> };

export function courseRoute(category: CourseCategoryKey) {
  async function getCourseContent(params: CourseRouteProps["params"]) {
    const { course } = await params;
    const content = await loadCourse(category, course);
    if (!content) notFound();
    return content;
  }

  return {
    generateStaticParams: () => courseParams(category),

    generateMetadata: async ({ params }: CourseRouteProps): Promise<Metadata> =>
      courseMetadata(await getCourseContent(params)),

    Page: async function CourseRoutePage({ params }: CourseRouteProps) {
      return <CoursePage course={await getCourseContent(params)} />;
    },
  };
}
