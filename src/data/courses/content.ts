// Loads each course's content for the dynamic course routes
// (src/app/courses/<family>/[course]/page.tsx).
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
import {
  COURSES,
  COURSE_CATEGORIES,
  type CourseCategoryKey,
  type CourseSlug,
} from "@/data/courses/registry";

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
 * `generateStaticParams` for one family's [course] route.
 *
 * The URL is now built from the route folder plus the slug, while the canonical,
 * breadcrumbs and internal links still come from the registry `href`. This
 * throws at build time if the two would ever disagree, so a page can never be
 * served at one URL and declare another as canonical.
 */
export function courseParams(category: CourseCategoryKey): { course: CourseSlug }[] {
  const base = COURSE_CATEGORIES[category].href;
  return (Object.keys(COURSES) as CourseSlug[])
    .filter((slug) => COURSES[slug].category === category)
    .map((slug) => {
      const href: string = COURSES[slug].href;
      if (href !== `${base}/${slug}`) {
        throw new Error(`Course "${slug}" has href ${href}; its route serves ${base}/${slug}`);
      }
      return { course: slug };
    });
}

/**
 * The content for `slug`, or undefined when it is not a course in `category`
 * (a real slug requested under the wrong family included).
 */
export async function loadCourse(category: CourseCategoryKey, slug: string): Promise<CourseContent | undefined> {
  if (!isCourseSlug(slug) || COURSES[slug].category !== category) return undefined;
  const course = await LOADERS[slug]();
  if (course.slug !== slug) {
    throw new Error(`Course file for "${slug}" declares slug "${course.slug}"`);
  }
  return course;
}
