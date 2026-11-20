import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import ContentBlocks from "./parts/ContentBlocks";
import { CARD, CourseSection, GRID_GAP, SPACE, SectionHeader, SectionNote, SectionOutro } from "./parts/Section";
import type { CourseStats as Stats } from "@/types/course-page";
import type { SectionProps } from "./types";

// Full rows on desktop for any count: 6 → 3+3, 5 → one row, 4 → one row…
const STAT_COLS: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-3",
  8: "lg:grid-cols-4",
};

export default function CourseStats({ id, tone, data, courseName, sourceName }: SectionProps<Stats>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <dl className={`${SPACE.body} grid grid-cols-2 ${GRID_GAP} ${STAT_COLS[data.items.length] ?? "lg:grid-cols-4"}`}>
        {data.items.map((s) => (
          <div key={s.label} className={`${CARD} p-5 text-center`}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block text-2xl font-extrabold text-slate-900 sm:text-3xl">
                <Rich text={s.value} />
              </span>
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

      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Stats Section`} className={SPACE.block} />
    </CourseSection>
  );
}
