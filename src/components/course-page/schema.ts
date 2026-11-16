// JSON-LD for a course page, built from its content file. Plain module (no
// JSX) so scripts like test_schema.ts can call it too.
import { generateCoursePageSchema } from "@/lib/schema-generators";
import { getCourse, getSiblingCourses } from "@/data/courses/registry";
import { stripMarkup } from "@/lib/richText";
import type { CourseContent } from "@/types/coursePage";

export function courseSchemas(course: CourseContent) {
  const { href, categoryInfo } = getCourse(course.slug);
  return generateCoursePageSchema({
    ...course.schema,
    url: href,
    slug: course.slug,
    image: course.seo.image,
    category: categoryInfo,
    siblings: getSiblingCourses(course.slug),
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: categoryInfo.name, url: categoryInfo.href },
      { name: course.hero.breadcrumb, url: href },
    ],
    faqs: course.faq.items.map((f) => ({ question: f.question, answer: stripMarkup(f.answer) })),
  });
}
