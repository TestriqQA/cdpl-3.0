import CategoryHubPage, { hubMetadata } from "@/components/category-hub/CategoryHubPage";
import JsonLd from "@/components/JsonLd";
import { generateDataScienceMachineLearningCategoryPageSchema } from "@/lib/schema-generators";
import { dsMlHub } from "@/data/hubs/ds-ml";
import { COURSES, type CourseSlug } from "@/data/courses/registry";
import type { CourseContent } from "@/types/course-page";
import { aiCourse } from "@/data/courses/ds-ml/ai-course";
import { dataScienceCourse } from "@/data/courses/ds-ml/data-science-course";
import { dataVisualizationInRProgrammingCourse } from "@/data/courses/ds-ml/data-visualization-in-r-programming";
import { generativeAiCourse } from "@/data/courses/ds-ml/generative-ai-course";
import { machineLearningCourse } from "@/data/courses/ds-ml/machine-learning-course";
import { machineLearningUsingPythonCourse } from "@/data/courses/ds-ml/machine-learning-using-python";
import { pythonCourse } from "@/data/courses/software-testing/python-course";

export const metadata = hubMetadata(dsMlHub);

// The course pages the hub's cards link to; each one's own schema description
// is reused so the hub and the course page describe a course the same way.
const COURSE_PAGES: CourseContent[] = [
  aiCourse,
  dataScienceCourse,
  dataVisualizationInRProgrammingCourse,
  generativeAiCourse,
  machineLearningCourse,
  machineLearningUsingPythonCourse,
  pythonCourse,
];

const pageFor = (href: string) => COURSE_PAGES.find((c) => COURSES[c.slug as CourseSlug]?.href === href);

export default function Page() {
  const schemas = generateDataScienceMachineLearningCategoryPageSchema(
    {
      description: dsMlHub.seo.description,
      courses: dsMlHub.courses.items.map((card) => ({
        name: card.title,
        description: pageFor(card.link)?.schema.description ?? card.description,
        url: card.link,
        level: card.level,
        hours: parseInt(card.duration, 10),
      })),
    },
    dsMlHub.faq.items.map((f) => ({ question: f.question, answer: f.answer })),
    [
      { name: "Home", url: "/" },
      { name: "Courses", url: "/courses" },
      { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" },
    ],
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`ds-ml-schema-${index}`} id={`ds-ml-schema-${index}`} schema={schema} />
      ))}
      <CategoryHubPage hub={dsMlHub} />
    </>
  );
}
