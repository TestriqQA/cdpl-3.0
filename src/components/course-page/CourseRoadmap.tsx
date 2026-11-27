import { Briefcase, CalendarDays, ClipboardCheck, Flag } from "lucide-react";
import { Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import ContentBlocks, { Points } from "./parts/ContentBlocks";
import { CARD, CourseSection, Dot, SPACE, SectionHeader, SectionOutro } from "./parts/Section";
import type { ContentBlock, CourseRoadmap as Roadmap } from "@/types/course-page";
import type { SectionProps } from "./types";

type TextOrList = Extract<ContentBlock, { kind: "text" | "list" }>;

/**
 * Where the road ends: titled text / list extras (e.g. "Career Outcomes" and
 * "What You'll Deliver") side by side in one card, instead of separate
 * centred blocks. Same headings and text as ContentBlocks would render.
 */
function Destination({ blocks }: { blocks: TextOrList[] }) {
  return (
    <div
      className={`${SPACE.block} ${CARD} mx-auto grid max-w-5xl divide-y divide-slate-100 overflow-hidden md:divide-x md:divide-y-0 ${
        blocks.length > 1 ? "md:grid-cols-2" : ""
      }`}
    >
      {blocks.map((b, i) => {
        const Icon = b.kind === "list" ? ClipboardCheck : Briefcase;
        return (
          <div key={i} className="p-6 sm:p-7">
            {b.title && (
              <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-slate-900">
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-orange-50 text-brand ring-1 ring-orange-100"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>
                {b.title}
              </h3>
            )}
            {b.kind === "text" ? (
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7">
                <Rich text={b.text} />
              </p>
            ) : (
              <ul className="space-y-2.5">
                {b.items.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-slate-700 sm:text-base">
                    <Dot accent />
                    <span>
                      <Rich text={t} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Up to 5 stages run left to right on desktop; longer paths, and every path
// on smaller screens, run down a vertical line.
const ACROSS_COLS: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

/** Learning / career path drawn as a road: milestones joined by a dashed line. */
export default function CourseRoadmap({ id, tone, data, courseName, sourceName }: SectionProps<Roadmap>) {
  const steps = data.steps;
  const across = ACROSS_COLS[steps.length];

  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      {steps.length > 0 && (
        <ol
          className={`${SPACE.body} grid gap-6 ${
            across ? `lg:gap-5 ${across}` : "mx-auto max-w-3xl"
          }`}
        >
          {steps.map((s, i) => {
            const last = i === steps.length - 1;
            return (
              <li key={s.title} className={`relative flex flex-col pl-14 ${across ? "lg:pl-0" : ""}`}>
                {/* Path: vertical (down to the next stage) … */}
                {!last && (
                  <span
                    className={`absolute bottom-[-1.5rem] left-5 top-10 border-l-2 border-dashed border-orange-300 ${across ? "lg:hidden" : ""}`}
                    aria-hidden="true"
                  />
                )}
                {/* … or horizontal, centre to centre: from this milestone's right
                    edge (50% + 20px) to the next one's left edge, which with the
                    20px column gap lands at -50%. */}
                {!last && across && (
                  <span
                    className="absolute left-[calc(50%+20px)] right-[-50%] top-5 hidden border-t-2 border-dashed border-orange-300 lg:block"
                    aria-hidden="true"
                  />
                )}

                {/* Milestone: number, or a finish flag on the last stage. */}
                <span
                  className={`absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full text-sm font-bold ring-4 ${
                    last ? "bg-slate-900 text-white ring-slate-200" : "bg-brand text-white ring-orange-100"
                  } ${across ? "lg:relative lg:self-center" : ""}`}
                  aria-hidden="true"
                >
                  {last ? <Flag className="h-4 w-4" /> : i + 1}
                </span>

                <div className={`${CARD} flex flex-1 flex-col p-5 transition duration-300 hover:border-orange-200 hover:shadow-md ${across ? "lg:mt-5" : ""}`}>
                  {s.badge && (
                    <span className="mb-3 w-fit rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-semibold text-orange-700 ring-1 ring-orange-100">
                      {s.badge}
                    </span>
                  )}
                  <h3 className="text-lg font-bold leading-snug text-slate-900">{s.title}</h3>
                  {s.duration && (
                    <p className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {s.duration}
                    </p>
                  )}
                  {s.description && (
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      <Rich text={s.description} />
                    </p>
                  )}
                  <Points points={s.points} />
                </div>
              </li>
            );
          })}
        </ol>
      )}

      {data.extras && data.extras.length > 0 && data.extras.every((b): b is TextOrList => b.kind === "text" || b.kind === "list") ? (
        <Destination blocks={data.extras} />
      ) : (
        <ContentBlocks blocks={data.extras} />
      )}
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Roadmap Section`} className={SPACE.block} />
    </CourseSection>
  );
}
