// Content shape for the shared course template (src/components/course-page).
// One CourseContent per course lives in src/data/courses/<slug>.ts.
//
// Text conventions (rendered by course-page/parts/Rich):
//   Text     — inline **bold** and *em*; {rating} {ratingValue} {reviews}
//              {studentsPlaced} are replaced with the live site stats.
//   Heading  — plain text with [[key phrase]] shown in the brand colour.

import type { IconName } from "@/components/course-page/parts/icons";
import type { QA } from "@/types/faq";

export type Text = string;
export type Heading = string;

export type CtaKind =
  | "enroll"
  | "syllabus"
  | "careerSession"
  | "scroll"
  | "tel"
  | "mailto"
  | "whatsapp"
  | "link";

export type CtaAction = {
  label: string;
  kind: CtaKind;
  /** Section id for "scroll", URL for "link"; tel/mailto/whatsapp use site defaults when omitted. */
  href?: string;
  ariaLabel?: string;
  /** Rendered as the filled button; others are outlined. Defaults to the first action. */
  primary?: boolean;
};

export type IconItem = { icon: IconName; title: string; description?: Text; points?: Text[] };

/**
 * Generic block for one-off content a course has that its section type
 * doesn't model (a prerequisites list, salary bands, a phase table…).
 * Rendered under the section body, before the outro.
 */
export type ContentBlock =
  | { kind: "cards"; title?: string; items: IconItem[] }
  | { kind: "list"; title?: string; items: Text[] }
  | { kind: "stats"; title?: string; items: { value: Text; label: string; note?: Text }[] }
  | { kind: "steps"; title?: string; items: { title: string; description?: Text; meta?: string }[] }
  | { kind: "text"; title?: string; text: Text };

/** Fields every body section shares. */
export type SectionBase = {
  /** Small label above the heading. Only shown when set. */
  eyebrow?: string;
  heading: Heading;
  intro?: Text;
  /** One-off blocks under the section body. */
  extras?: ContentBlock[];
  /** Closing paragraph under the section body. */
  outro?: Text;
  ctas?: CtaAction[];
};

export type CourseHero = {
  /** Last breadcrumb, also the BreadcrumbList name. */
  breadcrumb: string;
  /** Pill row above the h1. */
  badges?: { icon: IconName; text: Text }[];
  h1: Heading;
  subtitle: Text;
  description?: Text;
  ctas: CtaAction[];
  highlights?: Text[];
  /** Screen-reader heading for the feature cards. */
  featuresTitle?: string;
  features?: IconItem[];
  leadForm?: "api";
};

export type CourseStats = SectionBase & {
  /** value is Text so it can use {studentsPlaced} etc. */
  items: { value: Text; label: string; note?: Text }[];
  /** Footnote shown once under the grid. */
  footnote?: Text;
};

export type CourseWhy = SectionBase & {
  points?: { icon: IconName; text: Text }[];
  cards: IconItem[];
};

export type CourseCurriculum = SectionBase & {
  modules: { title: string; topics: string[]; duration?: string; outcome?: Text; projects?: string[] }[];
  /** Note that applies to every module, shown once. */
  moduleNote?: Text;
};

export type CourseTools = SectionBase & {
  /** Tools with a category are shown in groups, in first-seen order. */
  items: { name: string; logo?: string; icon?: IconName; description?: Text; category?: string }[];
  /** Small tag shown on every tool. */
  itemTag?: string;
  /** Line that applies to every tool, shown once. */
  itemNote?: Text;
};

export type CourseProjects = SectionBase & {
  items: { icon: IconName; title: string; description: Text; features?: string[]; tags?: string[]; meta?: string }[];
  /** Link shown on every project card. */
  itemLink?: { label: string; href: string };
};

export type CourseTestimonials = SectionBase;

export type CourseCareer = SectionBase & {
  rolesTitle: string;
  /** Plain names render as chips; objects as small cards with description / salary. */
  roles: (string | { title: string; description?: Text; salary?: string })[];
  rolesBadges?: string[];
  /** Optional: without companies the roles card spans the full width. */
  companiesTitle?: string;
  companies?: string[];
  companiesNote?: string;
};

export type CourseAudience = SectionBase & { items: IconItem[] };

export type CourseRoadmap = SectionBase & {
  steps: { title: string; description?: Text; badge?: string; duration?: string; icon?: IconName; points?: Text[] }[];
};

export type CourseFaq = {
  heading?: Heading;
  intro?: Text;
  items: QA[];
  categories?: readonly string[];
};

export type CourseCta = {
  eyebrow?: string;
  heading: Heading;
  intro?: Text;
  actions: CtaAction[];
  highlights?: IconItem[];
  footnotes?: { icon: IconName; text: Text }[];
};

export type CourseSchemaContent = {
  /** Course and WebPage name. */
  name: string;
  description: string;
  /** ISO 8601, e.g. PT15H. */
  duration?: string;
  instructor?: string;
  howTo: { name: string; description: string; steps: { name: string; text: string }[] };
  program?: { programType: string; timeToComplete?: string; occupationalCategory?: string };
};

export type CourseContent = {
  /** Key into COURSES in src/data/courses/registry.ts. */
  slug: string;
  /** Sent with every lead form; must match a SYLLABUS_LINKS key in app/api/contact/route.ts. */
  courseName: string;
  /** Prefix for lead "source" strings, e.g. "API Testing Course Page". */
  sourceName: string;
  seo: { title: string; description: string; keywords?: string[]; image: string };
  schema: CourseSchemaContent;
  hero: CourseHero;
  stats?: CourseStats;
  why?: CourseWhy;
  curriculum?: CourseCurriculum;
  tools?: CourseTools;
  roadmap?: CourseRoadmap;
  projects?: CourseProjects;
  testimonials?: CourseTestimonials;
  career?: CourseCareer;
  audience?: CourseAudience;
  faq: CourseFaq;
  cta: CourseCta;
};
