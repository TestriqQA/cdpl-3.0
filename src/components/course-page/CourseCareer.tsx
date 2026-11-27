import Image from "next/image";
import {
  BadgeCheck,
  BarChart3,
  Bot,
  Brain,
  Briefcase,
  Bug,
  Building2,
  Code2,
  Database,
  Gauge,
  Infinity as InfinityIcon,
  Megaphone,
  Plug,
  ShieldCheck,
  Webhook,
  type LucideIcon,
} from "lucide-react";
import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import ContentBlocks from "./parts/ContentBlocks";
import { CARD, CourseSection, GRID_GAP, IconTile, SPACE, SectionHeader, SectionOutro } from "./parts/Section";
import { tileColour } from "./parts/icons";
import { COMPANY_LOGOS } from "./parts/companyLogos";
import type { CourseCareer as Career } from "@/types/course-page";
import type { SectionProps } from "./types";

// Icon picked from the job title. First match wins, so the specific words
// ("security", "automation", "api") come before the general "test" / "qa".
const ROLE_ICONS: [RegExp, LucideIcon][] = [
  [/security/i, ShieldCheck],
  [/devops/i, InfinityIcon],
  [/performance/i, Gauge],
  [/integration/i, Plug],
  [/automation/i, Bot],
  [/\bapi\b/i, Webhook],
  [/sdet|developer|programmer/i, Code2],
  [/\bqa\b|quality|test/i, Bug],
  [/machine learning|\bai\b|\bml\b|prompt/i, Brain],
  [/marketing|seo|social|content/i, Megaphone],
  [/analyst|analytics|\bbi\b|visuali[sz]ation/i, BarChart3],
  [/data|database|sql|etl/i, Database],
];

function roleIcon(role: string): LucideIcon {
  return ROLE_ICONS.find(([re]) => re.test(role))?.[1] ?? Briefcase;
}

export default function CourseCareer({ id, tone, data, courseName, sourceName }: SectionProps<Career>) {
  const hasCompanies = !!data.companies?.length;
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <div className={`${SPACE.body} grid ${GRID_GAP} ${hasCompanies ? "lg:grid-cols-2" : ""}`}>
        <section aria-labelledby={`${id}-roles`} className={`${CARD} flex flex-col p-6`}>
          <div className="flex items-center gap-3">
            <IconTile className={tileColour(0)}>
              <Briefcase className="h-5 w-5" />
            </IconTile>
            <h3 id={`${id}-roles`} className="text-lg font-bold text-slate-900">
              {data.rolesTitle}
            </h3>
          </div>
          {data.roles.every((r) => typeof r === "string") ? (
            // Beside the companies card: a divided table, one column on phones
            // and two from sm up, whose rows grow to match that card's height.
            // On its own (full width) the same rows sit four across.
            <ul
              className={`mt-5 grid sm:grid-cols-2 ${
                hasCompanies
                  ? "flex-1 auto-rows-fr gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-100"
                  : "gap-2.5 lg:grid-cols-4"
              }`}
            >
              {data.roles.map((role) => {
                const Icon = roleIcon(role as string);
                return (
                  <li
                    key={role as string}
                    className={`flex items-center gap-3 px-3.5 py-2.5 transition-colors hover:bg-orange-50 ${
                      hasCompanies
                        ? "bg-white sm:[&:last-child:nth-child(odd)]:col-span-2"
                        : "rounded-xl border border-slate-200"
                    }`}
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-orange-50 text-orange-600" aria-hidden="true">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{role as string}</span>
                  </li>
                );
              })}
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
            {/* Logo above the name; the name stays as text for search engines
                and screen readers, and shows alone when there is no logo. */}
            <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {data.companies!.map((c) => {
                const logo = COMPANY_LOGOS[c.toLowerCase()];
                return (
                  <li
                    key={c}
                    className="flex h-20 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 text-center transition hover:border-orange-200 hover:shadow-sm"
                  >
                    {logo && <Image src={logo} alt="" width={96} height={28} className="h-7 w-auto max-w-[6rem] object-contain" />}
                    <span className={logo ? "text-xs font-medium text-slate-500" : "text-sm font-semibold text-slate-800"}>{c}</span>
                  </li>
                );
              })}
            </ul>
            {data.companiesNote && (
              <p className="mt-5 text-center text-sm font-medium text-slate-600">{data.companiesNote}</p>
            )}
          </section>
        )}
      </div>

      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Career Section`} className={SPACE.block} />
    </CourseSection>
  );
}
