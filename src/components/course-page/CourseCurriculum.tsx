import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import ContentBlocks from "./parts/ContentBlocks";
import { CARD, CourseSection, Dot, GRID_GAP, SPACE, SectionHeader, SectionNote, SectionOutro } from "./parts/Section";
import type { CourseCurriculum as Curriculum } from "@/types/course-page";
import type { SectionProps } from "./types";

export default function CourseCurriculum({ id, tone, data, courseName, sourceName }: SectionProps<Curriculum>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <ol className={`${SPACE.body} grid ${GRID_GAP} md:grid-cols-2`}>
        {data.modules.map((m, i) => (
          <li key={m.title} className={`${CARD} flex flex-col p-6`}>
            <div className="flex items-start gap-3">
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="min-w-0 pt-1">
                <h3 className="text-lg font-bold leading-snug text-slate-900">{m.title}</h3>
                {m.duration && (
                  <p className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {m.duration}
                  </p>
                )}
              </div>
            </div>
            {m.topics.length > 0 && (
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {m.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Dot />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            )}
            {m.projects && m.projects.length > 0 && (
              <p className="mt-4 text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Projects: </span>
                {m.projects.join(" · ")}
              </p>
            )}
            {m.outcome && (
              <p className="mt-4 text-sm text-slate-600">
                <Rich text={m.outcome} />
              </p>
            )}
            {m.link && (
              <Link
                href={m.link.href}
                className="group mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-slate-700 hover:text-brand"
              >
                {m.link.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            )}
          </li>
        ))}
      </ol>
      <SectionNote text={data.moduleNote} />

      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Curriculum Section`} className={SPACE.block} />
    </CourseSection>
  );
}
