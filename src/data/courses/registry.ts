// Course registry for the shared course template.
// Courses join COURSES as they move onto src/components/course-page; the
// other course lists (header, footer, sitemap…) are pointed here later.

import { courseCategories } from "@/data/headerData";

export const COURSE_CATEGORIES = {
  "software-testing": {
    name: "Software Testing",
    href: "/courses/software-testing-course",
    listName: "Software Testing Courses Directory",
  },
  "ds-ml": {
    name: "Data Science & ML",
    href: "/courses/ds-ml-courses",
    listName: "Data Science & Machine Learning Courses Directory",
  },
  bi: {
    name: "Data Analytics & BI",
    href: "/courses/bi-courses",
    listName: "Data Analytics & BI Courses Directory",
  },
  "digital-marketing": {
    name: "Digital Marketing",
    href: "/courses/digital-marketing-courses",
    listName: "Digital Marketing Courses Directory",
  },
  ai: {
    name: "Artificial Intelligence",
    href: "/courses/artificial-intelligence-courses",
    listName: "Artificial Intelligence Courses Directory",
  },
} as const;

export type CourseCategoryKey = keyof typeof COURSE_CATEGORIES;

export const COURSES = {
  "api-testing": {
    category: "software-testing",
    href: "/courses/software-testing-course/api-testing",
  },
} as const satisfies Record<string, { category: CourseCategoryKey; href: string }>;

export type CourseSlug = keyof typeof COURSES;

export function getCourse(slug: string) {
  const course = COURSES[slug as CourseSlug];
  if (!course) throw new Error(`Unknown course slug "${slug}" — add it to src/data/courses/registry.ts`);
  return { ...course, categoryInfo: COURSE_CATEGORIES[course.category] };
}

/** The other courses in the same category, from the header menu data. */
export function getSiblingCourses(slug: string) {
  const { href, categoryInfo } = getCourse(slug);
  // Header slugs have no leading slash ("courses/software-testing-course").
  const toHref = (s?: string) => (s ? `/${s.replace(/^\//, "")}` : "");
  const category = courseCategories.find((c) => toHref(c.slug) === categoryInfo.href);
  return (category?.courses ?? [])
    .map((c) => ({ name: c.name.trim(), href: toHref(c.slug), description: c.description }))
    .filter((c) => c.href && c.href !== href);
}
