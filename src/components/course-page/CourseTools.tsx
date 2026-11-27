import Image from "next/image";
import { Wrench } from "lucide-react";
import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import ContentBlocks from "./parts/ContentBlocks";
import { CARD, CourseSection, GRID_GAP, IconTile, SPACE, SectionHeader, SectionNote, SectionOutro } from "./parts/Section";
import { ICONS } from "./parts/icons";
import type { CourseTools as Tools } from "@/types/course-page";
import type { SectionProps } from "./types";

type Tool = Tools["items"][number];

export default function CourseTools({ id, tone, data, courseName, sourceName }: SectionProps<Tools>) {
  // Tools with a category are grouped (in first-seen order); otherwise one grid.
  const groups: { category?: string; items: Tool[] }[] = [];
  for (const tool of data.items) {
    const g = groups.find((x) => x.category === tool.category);
    if (g) g.items.push(tool);
    else groups.push({ category: tool.category, items: [tool] });
  }
  const grouped = groups.some((g) => g.category);

  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      {data.items.length > 0 &&
        (grouped ? (
          // Table-style: one row per category, the category in a left column
          // and its tools in a grid on the right (stacked on phones).
          <div className={`${SPACE.body} ${CARD} overflow-hidden`}>
            {groups.map((g) => (
              <div
                key={g.category ?? "other"}
                className="border-b border-slate-200 last:border-b-0 md:grid md:grid-cols-[13rem_1fr]"
              >
                <div className="border-b border-slate-100 bg-slate-50 px-5 py-3 md:border-b-0 md:border-r md:border-slate-200 md:py-6">
                  {g.category && (
                    <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">{g.category}</h3>
                  )}
                </div>
                <ul className="grid gap-x-8 gap-y-5 p-5 sm:grid-cols-2 md:py-6 xl:grid-cols-3">
                  {g.items.map((tool) => (
                    <li key={tool.name}>
                      <ToolRow tool={tool} itemTag={data.itemTag} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <ul
            className={`${SPACE.body} grid ${GRID_GAP} ${
              data.items.some((t) => t.description)
                ? "sm:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
            }`}
          >
            {data.items.map((tool) => (
              <li
                key={tool.name}
                className={`${CARD} p-5 transition duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md`}
              >
                <ToolRow tool={tool} itemTag={data.itemTag} />
              </li>
            ))}
          </ul>
        ))}
      <SectionNote text={data.itemNote} />

      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Tools Section`} className={SPACE.block} />
    </CourseSection>
  );
}

/** Logo tile beside the tool name, with the optional tag and description. */
function ToolRow({ tool, itemTag }: { tool: Tool; itemTag?: string }) {
  const Icon = tool.icon ? ICONS[tool.icon] : Wrench;
  return (
    <div className={`flex gap-4 ${tool.description ? "items-start" : "items-center"}`}>
      <IconTile className="border border-slate-200 bg-white text-slate-500 shadow-sm">
        {tool.logo ? (
          <Image src={tool.logo} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
        ) : (
          <Icon className="h-5 w-5" />
        )}
      </IconTile>
      <div className="min-w-0">
        {itemTag && (
          <span className="mb-1 inline-block rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
            {itemTag}
          </span>
        )}
        <h3 className="text-sm font-bold text-slate-900 sm:text-base">{tool.name}</h3>
        {tool.description && (
          <p className="mt-1 text-sm leading-relaxed text-slate-600">
            <Rich text={tool.description} />
          </p>
        )}
      </div>
    </div>
  );
}
