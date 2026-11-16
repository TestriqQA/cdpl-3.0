import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import { CARD, CourseSection, GRID_GAP, IconTile, SPACE, SectionHeader, SectionOutro } from "./parts/Section";
import { ICONS, tileColour } from "./parts/icons";
import type { CourseAudience as Audience } from "@/types/coursePage";
import type { SectionProps } from "./types";

export default function CourseAudience({ id, tone, data, courseName, sourceName }: SectionProps<Audience>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <ul className={`${SPACE.body} grid ${GRID_GAP} md:grid-cols-2 lg:grid-cols-4`}>
        {data.items.map(({ icon, title, description }, i) => {
          const Icon = ICONS[icon];
          return (
            <li key={title} className={`${CARD} p-6`}>
              <IconTile className={tileColour(i)}>
                <Icon className="h-5 w-5" />
              </IconTile>
              <h3 className="mt-4 text-base font-bold text-slate-900">{title}</h3>
              {description && (
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  <Rich text={description} />
                </p>
              )}
            </li>
          );
        })}
      </ul>

      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Who Should Enroll Section`} className={SPACE.block} />
    </CourseSection>
  );
}
