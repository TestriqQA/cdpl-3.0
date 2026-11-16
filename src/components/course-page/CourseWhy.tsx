import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import ContentBlocks, { Points } from "./parts/ContentBlocks";
import { CARD, CourseSection, GRID_GAP, IconTile, SPACE, SectionHeader, SectionOutro } from "./parts/Section";
import { ICONS, tileColour } from "./parts/icons";
import type { CourseWhy as Why } from "@/types/coursePage";
import type { SectionProps } from "./types";

export default function CourseWhy({ id, tone, data, courseName, sourceName }: SectionProps<Why>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      {data.points && data.points.length > 0 && (
        <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
          {data.points.map(({ icon, text }) => {
            const Icon = ICONS[icon];
            return (
              <li
                key={text}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700"
              >
                <Icon className="h-4 w-4 text-slate-500" aria-hidden="true" />
                <Rich text={text} />
              </li>
            );
          })}
        </ul>
      )}

      {data.cards.length > 0 && (
        <ul className={`${SPACE.body} grid ${GRID_GAP} md:grid-cols-2 lg:grid-cols-3`}>
          {data.cards.map(({ icon, title, description, points }, i) => {
            const Icon = ICONS[icon];
            return (
              <li key={title} className={`${CARD} p-6`}>
                <div className="flex items-center gap-3">
                  <IconTile className={tileColour(i)}>
                    <Icon className="h-5 w-5" />
                  </IconTile>
                  <h3 className="text-base font-bold leading-snug text-slate-900">{title}</h3>
                </div>
                {description && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    <Rich text={description} />
                  </p>
                )}
                <Points points={points} />
              </li>
            );
          })}
        </ul>
      )}

      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Why Section`} className={SPACE.block} />
    </CourseSection>
  );
}
