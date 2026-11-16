import { BadgeCheck, Briefcase, Building2 } from "lucide-react";
import CtaButtons from "./parts/CtaButtons";
import { CARD, CourseSection, GRID_GAP, IconTile, SPACE, SectionHeader, SectionOutro } from "./parts/Section";
import { tileColour } from "./parts/icons";
import type { CourseCareer as Career } from "@/types/coursePage";
import type { SectionProps } from "./types";

export default function CourseCareer({ id, tone, data, courseName, sourceName }: SectionProps<Career>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <div className={`${SPACE.body} grid ${GRID_GAP} lg:grid-cols-2`}>
        <section aria-labelledby={`${id}-roles`} className={`${CARD} p-6`}>
          <div className="flex items-center gap-3">
            <IconTile className={tileColour(0)}>
              <Briefcase className="h-5 w-5" />
            </IconTile>
            <h3 id={`${id}-roles`} className="text-lg font-bold text-slate-900">
              {data.rolesTitle}
            </h3>
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-2.5">
            {data.roles.map((role) => (
              <li key={role} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-center text-sm font-medium text-slate-800">
                {role}
              </li>
            ))}
          </ul>
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
            {data.companies.map((c) => (
              <li key={c} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-center text-sm font-semibold text-slate-800">
                {c}
              </li>
            ))}
          </ul>
          {data.companiesNote && <p className="mt-5 text-center text-sm italic text-slate-600">{data.companiesNote}</p>}
        </section>
      </div>

      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Career Section`} className={SPACE.block} />
    </CourseSection>
  );
}
