// Content shape for the shared category-hub template (src/components/category-hub).
// One CategoryHubContent per hub lives in src/data/hubs/<category>.ts. Sections the
// hubs share with course pages reuse the course-page types and components.

import type {
  CourseCta,
  CourseFaq,
  CourseHero,
  CourseProjects,
  CourseTestimonials,
  CourseWhy,
  SectionBase,
  Text,
} from "@/types/coursePage";
import type { CourseCategoryKey } from "@/data/courses/registry";
import type { CourseCardData } from "@/components/courses/CourseCard";

export type HubCourses = SectionBase & {
  /** Rendered with the site-wide CourseCard. */
  items: CourseCardData[];
  viewAll?: { label: string; href: string; title?: string };
};

export type HubTrack = {
  id: string;
  title: string;
  modules: { number?: string; title: string; description: Text; deliverables?: string[] }[];
};

export type HubCurriculum = SectionBase & {
  tracks: HubTrack[];
  /** Small facts shown next to the track tabs, e.g. "Industry Certification". */
  facts?: string[];
};

/** One step of a learning path: what it covers and which courses teach it. */
export type HubPathStage = {
  title: string;
  description: Text;
  /** Short topic chips (keywords from the courses' syllabi). */
  topics: string[];
  courses: { title: string; href: string }[];
};

/**
 * Compact alternative to HubCurriculum: the order to take the category's
 * courses in, linking to each course page for its full syllabus.
 */
export type HubLearningPath = SectionBase & { stages: HubPathStage[] };

export type HubCareerPath = {
  role: string;
  trending?: boolean;
  demandLevel?: string;
  experience?: string;
  description: Text;
  salaryRange?: string;
  skills: string[];
  responsibilities?: string[];
  opportunities?: string[];
  hiringCompanies?: string[];
};

export type HubCareer = SectionBase & { paths: HubCareerPath[] };

export type CategoryHubContent = {
  /** Key into COURSE_CATEGORIES in src/data/courses/registry.ts. */
  category: CourseCategoryKey;
  /** Prefix for lead "source" strings, e.g. "Business Intelligence Course Category Page". */
  sourceName: string;
  seo: { title: string; description: string; keywords?: string[]; image: string };
  hero: CourseHero;
  why?: CourseWhy;
  courses: HubCourses;
  /** Full module-by-module tracks, or the compact learning path (one or the other). */
  curriculum?: HubCurriculum;
  path?: HubLearningPath;
  testimonials?: CourseTestimonials;
  projects?: CourseProjects;
  career?: HubCareer;
  faq: CourseFaq;
  cta: CourseCta;
};
