import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import { CARD, CourseSection, Dot, GRID_GAP, IconTile, SPACE, SectionHeader, SectionOutro } from "./parts/Section";
import { ICONS, tileColour } from "./parts/icons";
import type { CourseProjects as Projects } from "@/types/coursePage";
import type { SectionProps } from "./types";

export default function CourseProjects({ id, tone, data, courseName, sourceName }: SectionProps<Projects>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <ul className={`${SPACE.body} grid ${GRID_GAP} md:grid-cols-2 lg:grid-cols-3`}>
        {data.items.map((p, i) => {
          const Icon = ICONS[p.icon];
          return (
            <li key={p.title} className={`${CARD} flex flex-col p-6`}>
              <div className="flex items-start justify-between gap-3">
                <IconTile className={tileColour(i)}>
                  <Icon className="h-5 w-5" />
                </IconTile>
                {p.tags && p.tags.length > 0 && (
                  <ul className="flex flex-wrap justify-end gap-1.5" aria-label="Stack">
                    {p.tags.map((t) => (
                      <li key={t} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                <Rich text={p.description} />
              </p>
              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Dot />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {data.itemLink && (
                <Link
                  href={data.itemLink.href}
                  className="group mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-slate-700 hover:text-brand"
                  aria-label={`${data.itemLink.label}: ${p.title}`}
                >
                  {data.itemLink.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Projects Section`} className={SPACE.block} />
    </CourseSection>
  );
}
