import { Fragment, type ReactNode } from "react";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import StickyNav from "@/components/stickynav/StickyNav";
import { generateMetadata as generateSEOMetadata } from "@/lib/metadata-generator";
import { getCourse } from "@/data/courses/registry";
import type { CourseContent } from "@/types/coursePage";
import { courseSchemas } from "./schema";
import CourseHero from "./CourseHero";
import CourseStats from "./CourseStats";
import CourseWhy from "./CourseWhy";
import CourseCurriculum from "./CourseCurriculum";
import CourseTools from "./CourseTools";
import CourseRoadmap from "./CourseRoadmap";
import CourseProjects from "./CourseProjects";
import CourseTestimonials from "./CourseTestimonials";
import CourseCareer from "./CourseCareer";
import CourseAudience from "./CourseAudience";
import CourseFaq from "./CourseFaq";
import CourseCta from "./CourseCta";
import type { Tone } from "./parts/Section";

/** Page metadata for a course, from its content file. */
export function courseMetadata(course: CourseContent): Metadata {
  const { href } = getCourse(course.slug);
  return generateSEOMetadata({
    title: course.seo.title,
    description: course.seo.description,
    keywords: course.seo.keywords,
    url: href,
    image: course.seo.image,
  });
}

/**
 * Shared course page. Sections always appear in this order and only when the
 * course has content for them; the sticky nav lists exactly the sections shown.
 */
export default function CoursePage({ course }: { course: CourseContent }) {
  const { categoryInfo } = getCourse(course.slug);
  const shared = { courseName: course.courseName, sourceName: course.sourceName };

  const sections = ([
    course.stats && { id: "program-stats", label: "Real Metrics", render: (p: Base) => <CourseStats {...p} data={course.stats!} /> },
    course.why && { id: "why-master-program", label: "Why Master Program", render: (p: Base) => <CourseWhy {...p} data={course.why!} /> },
    course.curriculum && { id: "curriculum", label: "Curriculum", render: (p: Base) => <CourseCurriculum {...p} data={course.curriculum!} /> },
    course.tools && { id: "tools", label: "Tools", render: (p: Base) => <CourseTools {...p} data={course.tools!} /> },
    course.roadmap && { id: "roadmap", label: "Roadmap", render: (p: Base) => <CourseRoadmap {...p} data={course.roadmap!} /> },
    course.projects && { id: "projects", label: "Projects", render: (p: Base) => <CourseProjects {...p} data={course.projects!} /> },
    course.testimonials && { id: "testimonials", label: "Reviews", render: (p: Base) => <CourseTestimonials {...p} data={course.testimonials!} /> },
    course.career && { id: "career", label: "Career & Salary", render: (p: Base) => <CourseCareer {...p} data={course.career!} /> },
    course.audience && { id: "who-should-enroll", label: "Enroll", render: (p: Base) => <CourseAudience {...p} data={course.audience!} /> },
    { id: "faqs", label: "FAQs", render: (p: Base) => <CourseFaq id={p.id} tone={p.tone} data={course.faq} /> },
  ] as (Section | undefined)[]).filter((s): s is Section => Boolean(s));

  const navItems = [...sections.map(({ id, label }) => ({ id, label })), { id: "contact", label: "Contact" }];

  const schemas = courseSchemas(course);

  return (
    <>
      {schemas.map((schema, i) => (
        <JsonLd key={`course-schema-${i}`} id={`course-schema-${i}`} schema={schema} />
      ))}

      <CourseHero
        hero={course.hero}
        courseName={course.courseName}
        sourceName={course.sourceName}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: categoryInfo.name, href: categoryInfo.href },
          { label: course.hero.breadcrumb },
        ]}
      />

      {/* Section nav: off-flow, slides in under the site header once the hero is passed. */}
      <div className="hidden md:block">
        <StickyNav items={navItems} reveal />
      </div>

      {sections.map(({ id, render }, i) => (
        <Fragment key={id}>{render({ id, tone: toneAt(i), ...shared })}</Fragment>
      ))}

      <CourseCta id="contact" tone={toneAt(sections.length)} data={course.cta} {...shared} />
    </>
  );
}

// The hero is white, so backgrounds alternate muted / white from the first
// body section through the closing band: every section boundary changes tone.
const toneAt = (i: number): Tone => (i % 2 === 0 ? "muted" : "white");

type Base = { id: string; tone: Tone; courseName?: string; sourceName: string };
type Section = { id: string; label: string; render: (p: Base) => ReactNode };
