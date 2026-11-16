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

      <ul className={`${SPACE.body} grid ${GRID_GAP} md:grid-cols-2 lg:grid-cols-3`}>
        {data.paths.map((p, i) => (
          <li key={p.role} className={`${CARD} flex flex-col p-6`}>
            <div className="flex items-start gap-3">
              <IconTile className={tileColour(i)}>
                <Briefcase className="h-5 w-5" />
              </IconTile>
              <div className="min-w-0">
                <h3 className="text-lg font-bold leading-snug text-slate-900">{p.role}</h3>
                {p.experience && <p className="text-sm text-slate-500">{p.experience} Experience</p>}
              </div>
            </div>

            {(p.trending || p.demandLevel) && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.trending && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                    <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                    Trending
                  </span>
                )}
                {p.demandLevel && (
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                    {p.demandLevel} Demand
                  </span>
                )}
              </div>
            )}

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              <Rich text={p.description} />
            </p>

            {p.salaryRange && (
              <p className="mt-4 rounded-xl bg-slate-50 px-4 py-3">
                <span className="block text-xs font-medium uppercase tracking-wide text-slate-500">Salary Range</span>
                <span className="text-lg font-bold text-slate-900">{p.salaryRange}</span>
              </p>
            )}

            {p.skills.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Key skills">
                {p.skills.map((s) => (
                  <li key={s} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                    {s}
                  </li>
                ))}
              </ul>
            )}

            <PathList title="Key Responsibilities" items={p.responsibilities} />
            <PathList title="Industry Opportunities" items={p.opportunities} />
            {p.hiringCompanies && p.hiringCompanies.length > 0 && (
              <p className="mt-4 text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Top Hiring Companies: </span>
                {p.hiringCompanies.join(" · ")}
              </p>
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
    <div className="mt-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <Points points={items} />
    </div>
  );
}
