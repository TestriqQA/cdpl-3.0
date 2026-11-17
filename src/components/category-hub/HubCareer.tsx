import { Briefcase, TrendingUp } from "lucide-react";
import { Rich } from "@/components/ui/Rich";
import ContentBlocks, { Points } from "@/components/course-page/parts/ContentBlocks";
import CtaButtons from "@/components/course-page/parts/CtaButtons";
import { CARD, CourseSection, GRID_GAP, IconTile, SPACE, SectionHeader, SectionOutro } from "@/components/course-page/parts/Section";
import { tileColour } from "@/components/course-page/parts/icons";
import type { SectionProps } from "@/components/course-page/types";
import type { HubCareer as Career } from "@/types/categoryHub";

/** Career paths for the category: role, demand, salary, skills and where it leads. */
export default function HubCareer({ id, tone, data, sourceName }: SectionProps<Career>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      {/* Four roles fit one row on wide screens; otherwise rows of three. */}
      <ul
        className={`${SPACE.body} grid ${GRID_GAP} sm:grid-cols-2 ${data.paths.length % 4 === 0 ? "xl:grid-cols-4" : "lg:grid-cols-3"}`}
      >
        {data.paths.map((p, i) => (
          <li key={p.role} className={`${CARD} flex flex-col p-5`}>
            <div className="flex items-center gap-3">
              <IconTile className={tileColour(i)}>
                <Briefcase className="h-5 w-5" />
              </IconTile>
              <div className="min-w-0">
                <h3 className="font-bold leading-snug text-slate-900">{p.role}</h3>
                {p.salaryRange && <p className="text-sm font-semibold text-slate-700">{p.salaryRange}</p>}
              </div>
            </div>

            {(p.trending || p.demandLevel || p.experience) && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.trending && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                    <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                    Trending
                  </span>
                )}
                {p.demandLevel && (
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                    {p.demandLevel} Demand
                  </span>
                )}
                {p.experience && (
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                    {p.experience}
                  </span>
                )}
              </div>
            )}

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              <Rich text={p.description} />
            </p>

            {p.skills.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Key skills">
                {p.skills.map((s) => (
                  <li key={s} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                    {s}
                  </li>
                ))}
              </ul>
            )}

            <PathList title="Key Responsibilities" items={p.responsibilities} />
            {Boolean(p.opportunities?.length || p.hiringCompanies?.length) && (
              <div className="mt-auto pt-4">
                <div className="space-y-1 border-t border-slate-100 pt-3">
                  <InlineList title="Industries" items={p.opportunities} />
                  <InlineList title="Hiring" items={p.hiringCompanies} />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} source={`${sourceName} - Career Section`} className={SPACE.block} />
    </CourseSection>
  );
}

function PathList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="mt-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <Points points={items} />
    </div>
  );
}

/** A short list as one line of text: "Title: a · b · c". */
function InlineList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <p className="text-xs leading-relaxed text-slate-600">
      <span className="font-semibold text-slate-800">{title}: </span>
      {items.join(" · ")}
    </p>
  );
}
