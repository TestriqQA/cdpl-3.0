// Course registry for the shared course template.
// Courses join COURSES as they move onto src/components/course-page; the
// other course lists (header, footer, sitemap…) are pointed here later.
//
// COURSES also decides which course pages exist: the
// src/app/courses/[category]/[course] route builds one page per entry, loading
// its content through src/data/courses/content.ts. Add a course in both places.

import { courseCategories } from "@/data/courses/catalog";

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

/** A category's segment in the URL: "bi-courses" for /courses/bi-courses. */
export function categorySegment(category: CourseCategoryKey): string {
  const href: string = COURSE_CATEGORIES[category].href;
  const match = /^\/courses\/([a-z0-9-]+)$/.exec(href);
  if (!match) throw new Error(`Category "${category}" hub ${href} is not /courses/<segment>`);
  return match[1];
}

/** The category whose hub is /courses/{segment}, or undefined. */
export function categoryForSegment(segment: string): CourseCategoryKey | undefined {
  return (Object.keys(COURSE_CATEGORIES) as CourseCategoryKey[]).find((c) => categorySegment(c) === segment);
}

const ST = "/courses/software-testing-course";
const DSML = "/courses/ds-ml-courses";
const BI = "/courses/bi-courses";
const DM = "/courses/digital-marketing-courses";
const AI = "/courses/artificial-intelligence-courses";

export const COURSES = {
  // Software testing
  "api-testing": { category: "software-testing", href: `${ST}/api-testing` },
  "dbms-course": { category: "software-testing", href: `${ST}/dbms-course` },
  "etl-testing": { category: "software-testing", href: `${ST}/etl-testing` },
  "python-course": { category: "software-testing", href: `${ST}/python-course` },
  "java-course": { category: "software-testing", href: `${ST}/java-course` },
  "automation-testing-course": { category: "software-testing", href: `${ST}/automation-testing-course` },
  "advance-software-testing": { category: "software-testing", href: `${ST}/advance-software-testing` },
  "advance-manual-automation-testing": { category: "software-testing", href: `${ST}/advance-manual-automation-testing` },
  "manual-testing-course": { category: "software-testing", href: `${ST}/manual-testing-course` },
  "sdet-course": { category: "software-testing", href: `${ST}/sdet-course` },
  // Data science & ML
  "ai-course": { category: "ds-ml", href: `${DSML}/ai-course` },
  "data-science-course": { category: "ds-ml", href: `${DSML}/data-science-course` },
  "generative-ai-course": { category: "ds-ml", href: `${DSML}/generative-ai-course` },
  "machine-learning-course": { category: "ds-ml", href: `${DSML}/machine-learning-course` },
  "machine-learning-using-python": { category: "ds-ml", href: `${DSML}/machine-learning-using-python` },
  "data-visualization-in-r-programming": { category: "ds-ml", href: `${DSML}/data-visualization-in-r-programming` },
  // Data analytics & BI
  "data-analytics": { category: "bi", href: `${BI}/data-analytics` },
  "data-analytics-python": { category: "bi", href: `${BI}/data-analytics-python` },
  "data-analytics-with-tableau": { category: "bi", href: `${BI}/data-analytics-with-tableau` },
  "data-analytics-and-visualization": { category: "bi", href: `${BI}/data-analytics-and-visualization` },
  "power-bi-course": { category: "bi", href: `${BI}/power-bi-course` },
  "masters-in-data-engineering": { category: "bi", href: `${BI}/masters-in-data-engineering` },
  // Digital marketing
  "digital-marketing-course": { category: "digital-marketing", href: `${DM}/digital-marketing-course` },
  "ai-in-digital-marketing": { category: "digital-marketing", href: `${DM}/ai-in-digital-marketing` },
  "ai-bootcamp": { category: "digital-marketing", href: `${DM}/ai-bootcamp` },
  // Artificial intelligence
  "prompt-engineering-course": { category: "ai", href: `${AI}/prompt-engineering-course` },
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
