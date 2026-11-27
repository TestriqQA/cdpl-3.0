// Loads each course's content for the dynamic course route
// (src/app/courses/[category]/[course]/page.tsx).
//
// Kept apart from registry.ts on purpose: the header, hubs and campus page read
// the course list from the registry, and must not pull every course's full
// content into their bundles. Each loader is a lazy import, so a route only
// loads the course it is rendering.
//
// Adding a course: write its file under src/data/courses/<category>/, add it to
// COURSES in registry.ts, and add its loader here. The `satisfies` below fails
// the typecheck if a registry course has no loader, or a loader has no course.

import type { CourseContent } from "@/types/course-page";
import { COURSES, categorySegment, type CourseSlug } from "@/data/courses/registry";

const LOADERS = {
  // Software testing
  "api-testing": () => import("./software-testing/api-testing").then((m) => m.apiTestingCourse),
  "dbms-course": () => import("./software-testing/dbms-course").then((m) => m.dbmsCourse),
  "etl-testing": () => import("./software-testing/etl-testing").then((m) => m.etlTestingCourse),
  "python-course": () => import("./software-testing/python-course").then((m) => m.pythonCourse),
  "java-course": () => import("./software-testing/java-course").then((m) => m.javaCourse),
  "automation-testing-course": () =>
    import("./software-testing/automation-testing-course").then((m) => m.automationTestingCourse),
  "advance-software-testing": () =>
    import("./software-testing/advance-software-testing").then((m) => m.advanceSoftwareTestingCourse),
  "advance-manual-automation-testing": () =>
    import("./software-testing/advance-manual-automation-testing").then(
      (m) => m.advanceManualAutomationTestingCourse,
    ),
  "manual-testing-course": () =>
    import("./software-testing/manual-testing-course").then((m) => m.manualTestingCourse),
  "sdet-course": () => import("./software-testing/sdet-course").then((m) => m.sdetCourse),
  // Data science & ML
  "ai-course": () => import("./ds-ml/ai-course").then((m) => m.aiCourse),
  "data-science-course": () => import("./ds-ml/data-science-course").then((m) => m.dataScienceCourse),
  "generative-ai-course": () => import("./ds-ml/generative-ai-course").then((m) => m.generativeAiCourse),
  "machine-learning-course": () =>
    import("./ds-ml/machine-learning-course").then((m) => m.machineLearningCourse),
  "machine-learning-using-python": () =>
    import("./ds-ml/machine-learning-using-python").then((m) => m.machineLearningUsingPythonCourse),
  "data-visualization-in-r-programming": () =>
    import("./ds-ml/data-visualization-in-r-programming").then(
      (m) => m.dataVisualizationInRProgrammingCourse,
    ),
  // Data analytics & BI
  "data-analytics": () => import("./bi/data-analytics").then((m) => m.dataAnalyticsCourse),
  "data-analytics-python": () => import("./bi/data-analytics-python").then((m) => m.dataAnalyticsPythonCourse),
  "data-analytics-with-tableau": () =>
    import("./bi/data-analytics-with-tableau").then((m) => m.dataAnalyticsWithTableauCourse),
  "data-analytics-and-visualization": () =>
    import("./bi/data-analytics-and-visualization").then((m) => m.dataAnalyticsAndVisualizationCourse),
  "power-bi-course": () => import("./bi/power-bi-course").then((m) => m.powerBiCourse),
  "masters-in-data-engineering": () =>
    import("./bi/masters-in-data-engineering").then((m) => m.mastersInDataEngineeringCourse),
  // Digital marketing
  "digital-marketing-course": () =>
    import("./digital-marketing/digital-marketing-course").then((m) => m.digitalMarketingCourse),
  "ai-in-digital-marketing": () =>
    import("./digital-marketing/ai-in-digital-marketing").then((m) => m.aiInDigitalMarketingCourse),
  "ai-bootcamp": () => import("./digital-marketing/ai-bootcamp").then((m) => m.aiBootcampCourse),
  // Artificial intelligence
  "prompt-engineering-course": () =>
    import("./ai/prompt-engineering-course").then((m) => m.promptEngineeringCourse),
} satisfies Record<CourseSlug, () => Promise<CourseContent>>;

const isCourseSlug = (slug: string): slug is CourseSlug => Object.hasOwn(COURSES, slug);

/**
 * `generateStaticParams` for the [category]/[course] route: one
 * { category, course } pair per course in the registry.
 *
 * It returns both params itself. Next.js only passes parent params down from a
 * generateStaticParams in a layout; the one in [category]/page.tsx belongs to
 * the hub route and never reaches this one.
 *
 * The URL is built from the two params, while the canonical, breadcrumbs and
 * internal links still come from the registry `href`. This throws at build
 * time if the two would ever disagree, so a page can never be served at one
 * URL and declare another as canonical.
 */
export function courseParams(): { category: string; course: CourseSlug }[] {
  return (Object.keys(COURSES) as CourseSlug[]).map((slug) => {
    const category = categorySegment(COURSES[slug].category);
    const href: string = COURSES[slug].href;
    if (href !== `/courses/${category}/${slug}`) {
      throw new Error(`Course "${slug}" has href ${href}; the route serves /courses/${category}/${slug}`);
    }
    return { category, course: slug };
  });
}

/**
 * The content for /courses/{segment}/{slug}, or undefined when that is not a
 * course page (a real slug under the wrong category included).
 */
export async function loadCourse(segment: string, slug: string): Promise<CourseContent | undefined> {
  if (!isCourseSlug(slug) || categorySegment(COURSES[slug].category) !== segment) return undefined;
  const course = await LOADERS[slug]();
  if (course.slug !== slug) {
    throw new Error(`Course file for "${slug}" declares slug "${course.slug}"`);
  }
  return course;
}
