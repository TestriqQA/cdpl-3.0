// What each category hub (src/app/courses/[category]/page.tsx) renders: its
// content and its JSON-LD.
//
// The schema calls are the ones each hub's own page.tsx made before the hubs
// moved onto the dynamic route, unchanged. Four hubs still use their own
// generator in src/lib/schema-generators.ts (a made-up "Master Course", a
// HowTo, and a course ItemList that comes out empty because it looks the
// category up by the wrong slug); data science already describes its real
// courses. Replacing the four with one generator modelled on the data science
// one is the follow-up, once the Cycle 4 schema work (C4-02, C4-15) is merged.

import {
  generateArtificialIntelligenceCategoryPageSchema,
  generateBusinessIntelligenceCategoryPageSchema,
  generateDataScienceMachineLearningCategoryPageSchema,
  generateDigitalMarketingCategoryPageSchema,
  generateSoftwareTestingCategoryPageSchema,
} from "@/lib/schema-generators";
import { SITE_STATS } from "@/lib/site-stats";
import { COURSES, type CourseCategoryKey, type CourseSlug } from "@/data/courses/registry";
import type { CategoryHubContent } from "@/types/category-hub";
import type { CourseContent } from "@/types/course-page";
import { aiHub } from "@/data/hubs/ai";
import { biHub } from "@/data/hubs/bi";
import { digitalMarketingHub } from "@/data/hubs/digital-marketing";
import { dsMlHub } from "@/data/hubs/ds-ml";
import { softwareTestingHub } from "@/data/hubs/software-testing";
import { aiCourse } from "@/data/courses/ds-ml/ai-course";
import { dataScienceCourse } from "@/data/courses/ds-ml/data-science-course";
import { dataVisualizationInRProgrammingCourse } from "@/data/courses/ds-ml/data-visualization-in-r-programming";
import { generativeAiCourse } from "@/data/courses/ds-ml/generative-ai-course";
import { machineLearningCourse } from "@/data/courses/ds-ml/machine-learning-course";
import { machineLearningUsingPythonCourse } from "@/data/courses/ds-ml/machine-learning-using-python";
import { pythonCourse } from "@/data/courses/software-testing/python-course";

type Schemas = ReturnType<typeof generateSoftwareTestingCategoryPageSchema>;

export type HubPage = {
  hub: CategoryHubContent;
  /** Prefix of each JSON-LD script's id and React key. */
  schemaId: string;
  schemas: () => Schemas;
};

const faqsOf = (hub: CategoryHubContent) => hub.faq.items.map((f) => ({ question: f.question, answer: f.answer }));

// The course pages the data science hub's cards link to; each one's own
// schema description is reused so the hub and the course page describe a
// course the same way.
const DS_ML_COURSE_PAGES: CourseContent[] = [
  aiCourse,
  dataScienceCourse,
  dataVisualizationInRProgrammingCourse,
  generativeAiCourse,
  machineLearningCourse,
  machineLearningUsingPythonCourse,
  pythonCourse,
];

const dsMlPageFor = (href: string) =>
  DS_ML_COURSE_PAGES.find((c) => COURSES[c.slug as CourseSlug]?.href === href);

export const HUB_PAGES = {
  // National category page; the Mumbai classroom offer is
  // /software-testing-course-in-mumbai, linked from the hero note.
  "software-testing": {
    hub: softwareTestingHub,
    schemaId: "software-testing-schema",
    schemas: () =>
      generateSoftwareTestingCategoryPageSchema(
        {
          name: "Software Testing Full Course (Manual + Automation)",
          description: softwareTestingHub.seo.description,
          url: "/courses/software-testing-course",
          slug: "software-testing-course",
          level: "Beginner to Advanced",
          duration: "P4M", // 4 Months
          rating: SITE_STATS.rating,
          reviewCount: SITE_STATS.reviewCount,
          instructor: "Industry Experts",
          image: "/og-images/courses-software-testing-course-og.png",
        },
        faqsOf(softwareTestingHub),
        [
          { name: "Home", url: "/" },
          { name: "Courses", url: "/courses" },
          { name: "Software Testing Course", url: "/courses/software-testing-course" },
        ],
      ),
  },

  "ds-ml": {
    hub: dsMlHub,
    schemaId: "ds-ml-schema",
    schemas: () =>
      generateDataScienceMachineLearningCategoryPageSchema(
        {
          description: dsMlHub.seo.description,
          courses: dsMlHub.courses.items.map((card) => ({
            name: card.title,
            description: dsMlPageFor(card.link)?.schema.description ?? card.description,
            url: card.link,
            level: card.level,
            hours: parseInt(card.duration, 10),
          })),
        },
        faqsOf(dsMlHub),
        [
          { name: "Home", url: "/" },
          { name: "Courses", url: "/courses" },
          { name: "Data Science & ML Courses", url: "/courses/ds-ml-courses" },
        ],
      ),
  },

  bi: {
    hub: biHub,
    schemaId: "bi-schema",
    schemas: () =>
      generateBusinessIntelligenceCategoryPageSchema(
        {
          name: "Business Intelligence Master Course",
          description:
            "Master Data Analytics & Visualization with Power BI, Tableau, and Big Data Engineering. Comprehensive hands-on projects and placement support.",
          url: "/courses/bi-courses",
          slug: "bi-courses",
          level: "Beginner to Advanced",
          duration: "P4M",
          rating: SITE_STATS.rating,
          reviewCount: SITE_STATS.reviewCount,
          instructor: "Industry Experts",
          image: "/og-images/courses-bi-courses-og.webp",
        },
        faqsOf(biHub),
        [
          { name: "Home", url: "/" },
          { name: "Courses", url: "/courses" },
          { name: "BI Courses", url: "/courses/bi-courses" },
        ],
      ),
  },

  "digital-marketing": {
    hub: digitalMarketingHub,
    schemaId: "dm-schema",
    schemas: () =>
      generateDigitalMarketingCategoryPageSchema(
        {
          name: "Digital Marketing Master Course",
          description: digitalMarketingHub.seo.description,
          url: "/courses/digital-marketing-courses",
          slug: "digital-marketing-courses",
          level: "Beginner to Advanced",
          duration: "P3M", // 3 Months
          rating: SITE_STATS.rating,
          reviewCount: SITE_STATS.reviewCount,
          instructor: "Industry Experts",
          image: "/og-images/courses-digital-marketing-courses-og.webp",
        },
        faqsOf(digitalMarketingHub),
        [
          { name: "Home", url: "/" },
          { name: "Courses", url: "/courses" },
          { name: "Digital Marketing Courses", url: "/courses/digital-marketing-courses" },
        ],
      ),
  },

  ai: {
    hub: aiHub,
    schemaId: "ai-schema",
    schemas: () =>
      generateArtificialIntelligenceCategoryPageSchema(
        {
          name: "Artificial Intelligence Master Course",
          description:
            "Advance your career with our specialized Artificial Intelligence courses. Learn Generative AI, NLP, Deep Learning, and more.",
          url: "/courses/artificial-intelligence-courses",
          slug: "artificial-intelligence-courses",
          level: "Beginner to Advanced",
          duration: "P4M", // 4 Months
          rating: SITE_STATS.rating,
          reviewCount: SITE_STATS.reviewCount,
          instructor: "Industry Experts",
          image: "/og-images/courses-artificial-intelligence-courses-og.webp",
        },
        faqsOf(aiHub),
        [
          { name: "Home", url: "/" },
          { name: "Courses", url: "/courses" },
          { name: "Artificial Intelligence Courses", url: "/courses/artificial-intelligence-courses" },
        ],
      ),
  },
} satisfies Record<CourseCategoryKey, HubPage>;
