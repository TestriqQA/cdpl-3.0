import { Clock } from "lucide-react";
import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import ContentBlocks, { Points } from "./parts/ContentBlocks";
import { CARD, CourseSection, GRID_GAP, SPACE, SectionHeader, SectionOutro } from "./parts/Section";
import type { CourseRoadmap as Roadmap } from "@/types/coursePage";
import type { SectionProps } from "./types";

/** Numbered career / learning path. */
export default function CourseRoadmap({ id, tone, data, courseName, sourceName }: SectionProps<Roadmap>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <ol className={`${data.steps.length ? SPACE.body : "hidden"} grid ${GRID_GAP} md:grid-cols-2 lg:grid-cols-3`}>
        {data.steps.map((s, i) => (
          <li key={s.title} className={`${CARD} flex flex-col p-6`}>
            <div className="flex items-center justify-between gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-900 text-sm font-bold text-white" aria-hidden="true">
                {i + 1}
              </span>
              {s.badge && (
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">{s.badge}</span>
              )}
            </div>
            <h3 className="mt-4 text-base font-bold leading-snug text-slate-900">{s.title}</h3>
            {s.duration && (
              <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {s.duration}
              </p>
            )}
            {s.description && (
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                <Rich text={s.description} />
              </p>
            )}
            <Points points={s.points} />
          </li>
        ))}
      </ol>

      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Roadmap Section`} className={SPACE.block} />
    </CourseSection>
  );
}
