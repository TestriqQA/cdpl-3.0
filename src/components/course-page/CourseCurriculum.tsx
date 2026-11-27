import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import ContentBlocks from "./parts/ContentBlocks";
import { CARD, CourseSection, GRID_GAP, SPACE, SectionHeader, SectionNote, SectionOutro } from "./parts/Section";
import type { CourseCurriculum as Curriculum } from "@/types/course-page";
import type { SectionProps } from "./types";

export default function CourseCurriculum({ id, tone, data, courseName, sourceName }: SectionProps<Curriculum>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <ol className={`${SPACE.body} grid ${GRID_GAP} md:grid-cols-2`}>
        {data.modules.map((m) => (
          <li key={m.title} className={`${CARD} flex flex-col p-6`}>
            {/* Title on the left, week chip on the right of the same line. */}
            <div className="flex items-start justify-between gap-3">
              <h3 className="pt-1 text-lg font-bold leading-snug text-slate-900">{m.title}</h3>
              {m.duration && (
                <p className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-white">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {m.duration}
                </p>
              )}
            </div>
            {m.topics.length > 0 && (
              <ul className="mt-5 grid gap-y-2.5 border-t border-slate-100 pt-5">
                {m.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                    {/* **bold** marks the key terms in a topic. */}
                    <span>
                      <Rich text={t} />
                    </span>
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
