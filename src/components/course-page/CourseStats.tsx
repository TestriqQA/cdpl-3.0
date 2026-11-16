import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import { CARD, CourseSection, GRID_GAP, SPACE, SectionHeader, SectionNote, SectionOutro } from "./parts/Section";
import type { CourseStats as Stats } from "@/types/coursePage";
import type { SectionProps } from "./types";

export default function CourseStats({ id, tone, data, courseName, sourceName }: SectionProps<Stats>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <dl className={`${SPACE.body} grid grid-cols-2 ${GRID_GAP} lg:grid-cols-5`}>
        {data.items.map((s) => (
          <div key={s.label} className={`${CARD} p-5 text-center`}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block text-2xl font-extrabold text-slate-900 sm:text-3xl">{s.value}</span>
              <span className="mt-1 block text-sm font-medium text-slate-600">{s.label}</span>
              {s.note && (
                <span className="mt-1 block text-xs text-slate-500">
                  <Rich text={s.note} />
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>
      <SectionNote text={data.footnote} />

      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Stats Section`} className={SPACE.block} />
    </CourseSection>
  );
}
