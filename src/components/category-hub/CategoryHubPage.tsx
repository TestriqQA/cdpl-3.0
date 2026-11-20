import { Fragment, type ReactNode } from "react";
import type { Metadata } from "next";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { COURSE_CATEGORIES } from "@/data/courses/registry";
import CourseHero from "@/components/course-page/CourseHero";
import CourseWhy from "@/components/course-page/CourseWhy";
import CourseProjects from "@/components/course-page/CourseProjects";
import CourseTestimonials from "@/components/course-page/CourseTestimonials";
import CourseFaq from "@/components/course-page/CourseFaq";
import CourseCta from "@/components/course-page/CourseCta";
import type { Tone } from "@/components/course-page/parts/Section";
import type { CategoryHubContent } from "@/types/category-hub";
import HubCourses from "./HubCourses";
import HubPath from "./HubPath";
import HubCareer from "./HubCareer";

/** Page metadata for a hub (" | CDPL" is appended by generateStaticPageMetadata). */
export function hubMetadata(hub: CategoryHubContent): Metadata {
  return generateStaticPageMetadata({
    title: hub.seo.title,
    description: hub.seo.description,
    keywords: hub.seo.keywords,
    url: COURSE_CATEGORIES[hub.category].href,
    image: hub.seo.image,
  });
}

/**
 * Shared category hub. Built from the course-page
 * sections plus hub-only ones: course cards, a learning path and career paths. JSON-LD stays in each hub's page.tsx.
 */
export default function CategoryHubPage({ hub }: { hub: CategoryHubContent }) {
  const { sourceName } = hub;
  const sections = ([
    hub.why && { id: "why", render: (p: Base) => <CourseWhy {...p} data={hub.why!} /> },
    { id: "courses", render: (p: Base) => <HubCourses {...p} data={hub.courses} /> },
    hub.path && { id: "curriculum", render: (p: Base) => <HubPath {...p} data={hub.path!} /> },
    hub.testimonials && { id: "testimonials", render: (p: Base) => <CourseTestimonials {...p} data={hub.testimonials!} /> },
    hub.projects && { id: "projects", render: (p: Base) => <CourseProjects {...p} data={hub.projects!} /> },
    hub.career && { id: "career", render: (p: Base) => <HubCareer {...p} data={hub.career!} /> },
    { id: "faqs", render: (p: Base) => <CourseFaq id={p.id} tone={p.tone} data={hub.faq} /> },
  ] as (Section | undefined)[]).filter((s): s is Section => Boolean(s));

  return (
    <>
      <CourseHero
        hero={hub.hero}
        sourceName={sourceName}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: hub.hero.breadcrumb },
        ]}
      />

      {sections.map(({ id, render }, i) => (
        <Fragment key={id}>{render({ id, tone: toneAt(i), sourceName })}</Fragment>
      ))}

      <CourseCta id="contact" tone={toneAt(sections.length)} data={hub.cta} sourceName={sourceName} />
    </>
  );
}

// Hero is white; backgrounds alternate from the first section to the band.
const toneAt = (i: number): Tone => (i % 2 === 0 ? "muted" : "white");

type Base = { id: string; tone: Tone; sourceName: string };
type Section = { id: string; render: (p: Base) => ReactNode };
