import { BadgeCheck, Briefcase, Building2 } from "lucide-react";
import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import ContentBlocks from "./parts/ContentBlocks";
import { CARD, CourseSection, GRID_GAP, IconTile, SPACE, SectionHeader, SectionOutro } from "./parts/Section";
import { tileColour } from "./parts/icons";
import type { CourseCareer as Career } from "@/types/coursePage";
import type { SectionProps } from "./types";

export default function CourseCareer({ id, tone, data, courseName, sourceName }: SectionProps<Career>) {
  const hasCompanies = !!data.companies?.length;
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <div className={`${SPACE.body} grid ${GRID_GAP} ${hasCompanies ? "lg:grid-cols-2" : ""}`}>
        <section aria-labelledby={`${id}-roles`} className={`${CARD} p-6`}>
          <div className="flex items-center gap-3">
            <IconTile className={tileColour(0)}>
              <Briefcase className="h-5 w-5" />
            </IconTile>
            <h3 id={`${id}-roles`} className="text-lg font-bold text-slate-900">
              {data.rolesTitle}
            </h3>
          </div>
          {data.roles.every((r) => typeof r === "string") ? (
            <ul className={`mt-5 grid grid-cols-2 gap-2.5 ${hasCompanies ? "" : "sm:grid-cols-3 lg:grid-cols-4"}`}>
              {data.roles.map((role) => (
                <li key={role as string} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-center text-sm font-medium text-slate-800">
                  {role as string}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-5 space-y-2.5">
              {data.roles.map((role) => {
                const r = typeof role === "string" ? { title: role } : role;
                return (
                  <li key={r.title} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <span className="text-sm font-semibold text-slate-900">{r.title}</span>
                      {"salary" in r && r.salary && <span className="text-xs font-semibold text-emerald-700">{r.salary}</span>}
                    </div>
                    {"description" in r && r.description && (
                      <p className="mt-1 text-sm text-slate-600">
                        <Rich text={r.description} />
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
          {data.rolesBadges && data.rolesBadges.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {data.rolesBadges.map((b) => (
                <li key={b} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">
                  <BadgeCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </section>

        {hasCompanies && (
          <section aria-labelledby={`${id}-companies`} className={`${CARD} p-6`}>
            <div className="flex items-center gap-3">
              <IconTile className={tileColour(1)}>
                <Building2 className="h-5 w-5" />
              </IconTile>
              <h3 id={`${id}-companies`} className="text-lg font-bold text-slate-900">
                {data.companiesTitle}
              </h3>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {data.companies!.map((c) => (
                <li key={c} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-center text-sm font-semibold text-slate-800">
                  {c}
                </li>
              ))}
            </ul>
            {data.companiesNote && <p className="mt-5 text-center text-sm italic text-slate-600">{data.companiesNote}</p>}
          </section>
        )}
      </div>

      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Career Section`} className={SPACE.block} />
    </CourseSection>
  );
}
