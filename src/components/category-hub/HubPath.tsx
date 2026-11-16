import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Rich } from "@/components/ui/Rich";
import ContentBlocks from "@/components/course-page/parts/ContentBlocks";
import CtaButtons from "@/components/course-page/parts/CtaButtons";
import { CARD, CourseSection, SPACE, SectionHeader, SectionOutro } from "@/components/course-page/parts/Section";
import type { SectionProps } from "@/components/course-page/types";
import type { HubLearningPath } from "@/types/categoryHub";

/**
 * The order to take a category's courses in. Each stage names its topics and
 * links to the course pages, which hold the full module-by-module syllabus.
 */
export default function HubPath({ id, tone, data, sourceName }: SectionProps<HubLearningPath>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <ol className={`${SPACE.body} mx-auto max-w-5xl space-y-4`}>
        {data.stages.map((stage, i) => (
          <li key={stage.title} className={`${CARD} grid gap-4 p-5 sm:p-6 md:grid-cols-[auto_1fr_15rem] md:gap-6`}>
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0">
              <h3 className="text-lg font-bold text-slate-900">{stage.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                <Rich text={stage.description} />
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {stage.topics.map((t) => (
                  <li key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="space-y-2 border-t border-slate-100 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              {stage.courses.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    title={`${c.title} syllabus`}
                    className="group flex items-start gap-1.5 text-sm font-semibold text-slate-800 hover:text-brand"
                  >
                    <ArrowRight
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} source={`${sourceName} - Curriculum Section`} className={SPACE.block} />
    </CourseSection>
  );
}
