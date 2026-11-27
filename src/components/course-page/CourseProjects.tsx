import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import ContentBlocks from "./parts/ContentBlocks";
import { CARD, CourseSection, Dot, GRID_GAP, IconTile, SPACE, SectionHeader, SectionOutro } from "./parts/Section";
import { ICONS, tileColour } from "./parts/icons";
import { TOOL_LOGOS } from "./parts/toolLogos";
import type { CourseProjects as Projects } from "@/types/course-page";
import type { SectionProps } from "./types";

const LEVEL_CHIP: Record<string, string> = {
  beginner: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  intermediate: "bg-amber-50 text-amber-700 ring-amber-100",
  advanced: "bg-rose-50 text-rose-700 ring-rose-100",
};

/** "Retail · B2C • Intermediate • 2–3 Weeks" → domain text, level chip, duration chip. */
function MetaRow({ meta }: { meta: string }) {
  const parts = meta.split("•").map((p) => p.trim()).filter(Boolean);
  return (
    <p className="mt-2 flex flex-wrap items-center gap-1.5 text-xs font-semibold">
      {parts.map((part, i) => {
        const level = /beginner|intermediate|advanced/i.exec(part)?.[0].toLowerCase();
        if (level) {
          return (
            <span key={i} className={`rounded-full px-2.5 py-0.5 ring-1 ${LEVEL_CHIP[level]}`}>
              {part}
            </span>
          );
        }
        if (/\b(weeks?|days?|hours?|months?)\b/i.test(part)) {
          return (
            <span key={i} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-700">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {part}
            </span>
          );
        }
        return (
          <span key={i} className="pr-1 uppercase tracking-wide text-slate-500">
            {part}
          </span>
        );
      })}
    </p>
  );
}

export default function CourseProjects({
  id,
  tone,
  data,
  courseName,
  sourceName,
  toolLogos,
}: SectionProps<Projects> & {
  /** Lower-case tool name → logo, from the course's Tools section. */
  toolLogos?: Record<string, string>;
}) {
  const logoFor = (name: string) => toolLogos?.[name.toLowerCase()] ?? TOOL_LOGOS[name.toLowerCase()];

  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <ul className={`${SPACE.body} grid ${GRID_GAP} md:grid-cols-2 lg:grid-cols-3`}>
        {data.items.map((p, i) => (
          <li
            key={p.title}
            className={`${CARD} flex flex-col p-6 transition duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md`}
          >
            {/* Same HTML order as before (title, meta, tools, description,
                features, link); the tools row sits at the bottom visually. */}
            <div className="flex flex-1 flex-col">
              <div className="flex items-start gap-3">
                <IconTile className={tileColour(i)}>
                  {(() => {
                    const Icon = ICONS[p.icon];
                    return <Icon className="h-5 w-5" />;
                  })()}
                </IconTile>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold leading-snug text-slate-900">{p.title}</h3>
                  {p.meta && <MetaRow meta={p.meta} />}
                </div>
              </div>
              {p.tags && p.tags.length > 0 && (
                <ul
                  className="order-1 mt-auto flex flex-wrap items-center gap-1.5 border-t border-slate-100 pt-4"
                  aria-label="Stack"
                >
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-700"
                    >
                      {logoFor(t) && (
                        <Image src={logoFor(t)!} alt="" width={14} height={14} className="h-3.5 w-3.5 object-contain" />
                      )}
                      {t}
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                <Rich text={p.description} />
              </p>
              {p.features && p.features.length > 0 && (
                <ul className="mb-5 mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <Dot accent />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
              {data.itemLink && (
                <Link
                  href={data.itemLink.href}
                  className={`group/link order-2 ${p.tags?.length ? "" : "mt-auto"} inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-slate-700 hover:text-brand`}
                  aria-label={`${data.itemLink.label}: ${p.title}`}
                >
                  {data.itemLink.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>

      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Projects Section`} className={SPACE.block} />
    </CourseSection>
  );
}
