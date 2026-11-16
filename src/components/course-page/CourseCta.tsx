import { Heading, Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import { ICONS } from "./parts/icons";
import { GRID_GAP, SPACE, TONE_BG, type Tone } from "./parts/Section";
import type { CourseCta as Cta } from "@/types/coursePage";

/**
 * Closing band in two tones: an orange top with the ask, and a black base
 * with the highlights and location line (shown only when the course has them).
 */
export default function CourseCta({
  id,
  tone,
  data,
  courseName,
  sourceName,
}: {
  id: string;
  tone: Tone;
  data: Cta;
  courseName: string;
  sourceName: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`scroll-mt-32 ${TONE_BG[tone]}`}>
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${SPACE.section}`}>
        <div className="overflow-hidden rounded-3xl text-white shadow-lg">
          {/* Orange top: the ask */}
          <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 sm:px-10 lg:py-12">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/30 blur-2xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              {data.eyebrow && (
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {data.eyebrow}
                </span>
              )}
              <h2 id={`${id}-heading`} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                <Heading text={data.heading} accentClassName="text-white underline decoration-white/50 decoration-4 underline-offset-4" />
              </h2>
              {data.intro && (
                <p className="mt-3 text-base text-white/90 sm:text-lg [&_strong]:text-white">
                  <Rich text={data.intro} />
                </p>
              )}
              <CtaButtons actions={data.actions} courseName={courseName} source={`${sourceName} - CTA Section`} tone="band" className="mt-8" />
            </div>
          </div>

          {/* Black base: what you get, where we are */}
          {!!(data.highlights?.length || data.footnotes?.length) && (
            <div className="bg-slate-950 px-6 py-8 sm:px-10">
              {data.highlights && data.highlights.length > 0 && (
                <ul className={`grid ${GRID_GAP} sm:grid-cols-3`}>
                  {data.highlights.map(({ icon, title, description }) => {
                    const Icon = ICONS[icon];
                    return (
                      <li key={title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-white" aria-hidden="true">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-semibold">{title}</p>
                          {description && (
                            <p className="text-sm text-slate-400">
                              <Rich text={description} />
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}

              {data.footnotes && data.footnotes.length > 0 && (
                <ul className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-slate-400 sm:flex-row sm:gap-6">
                  {data.footnotes.map(({ icon, text }) => {
                    const Icon = ICONS[icon];
                    return (
                      <li key={text} className="inline-flex items-center gap-2">
                        <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                        <Rich text={text} />
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
