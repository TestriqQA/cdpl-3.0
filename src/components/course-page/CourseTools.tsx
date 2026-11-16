import Image from "next/image";
import { Wrench } from "lucide-react";
import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import { CARD, CourseSection, GRID_GAP, IconTile, SPACE, SectionHeader, SectionNote, SectionOutro } from "./parts/Section";
import { ICONS } from "./parts/icons";
import type { CourseTools as Tools } from "@/types/coursePage";
import type { SectionProps } from "./types";

export default function CourseTools({ id, tone, data, courseName, sourceName }: SectionProps<Tools>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <ul className={`${SPACE.body} grid grid-cols-2 ${GRID_GAP} md:grid-cols-3 lg:grid-cols-4`}>
        {data.items.map((tool) => {
          const Icon = tool.icon ? ICONS[tool.icon] : Wrench;
          return (
            <li key={tool.name} className={`${CARD} p-5`}>
              {data.itemTag && (
                <span className="mb-3 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                  {data.itemTag}
                </span>
              )}
              <div className="flex items-center gap-3">
                <IconTile className="border border-slate-200 bg-white text-slate-500">
                  {tool.logo ? (
                    <Image src={tool.logo} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </IconTile>
                <h3 className="min-w-0 text-sm font-bold text-slate-900 sm:text-base">{tool.name}</h3>
              </div>
              {tool.description && (
                <p className="mt-3 text-sm text-slate-600">
                  <Rich text={tool.description} />
                </p>
              )}
            </li>
          );
        })}
      </ul>
      <SectionNote text={data.itemNote} />

      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Tools Section`} className={SPACE.block} />
    </CourseSection>
  );
}
