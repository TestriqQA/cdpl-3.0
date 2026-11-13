import type { LucideIcon } from "lucide-react";
import { Award, BadgeCheck, Briefcase, CalendarClock, Handshake, Users } from "lucide-react";

const ITEMS: { t: string; d: string; Icon: LucideIcon; tile: string }[] = [
  { t: "Industry-aligned", d: "Mapped to AAA blueprint with graded labs & capstone.", Icon: BadgeCheck, tile: "bg-orange-100 text-orange-600" },
  { t: "Mentor guidance", d: "1:1 feedback on projects and exam readiness.", Icon: Users, tile: "bg-sky-100 text-sky-600" },
  { t: "Outcome-focused", d: "Portfolio artifacts recruiters can evaluate.", Icon: Briefcase, tile: "bg-violet-100 text-violet-600" },
  { t: "Flexible learning", d: "Live + recorded sessions, weekend cohorts.", Icon: CalendarClock, tile: "bg-emerald-100 text-emerald-600" },
  { t: "Shareable badge", d: "Verifiable digital certificate with unique ID.", Icon: Award, tile: "bg-rose-100 text-rose-600" },
  { t: "Hiring visibility", d: "Surfaced to CDPL partner network.", Icon: Handshake, tile: "bg-amber-100 text-amber-600" },
];

/** Six reasons as white cards with an icon tile. Server component. */
export default function AAACertificationWhySection() {
  return (
    <section aria-labelledby="aaa-why-heading" className="bg-slate-50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
            Why CDPL
          </span>
          <h2 id="aaa-why-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Why AAA with <span className="text-brand">CDPL</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Cinute Digital Pvt. Ltd. blends instructor expertise, labs, and structured assessment for employability.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ t, d, Icon, tile }) => (
            <li
              key={t}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tile}`} aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-slate-900">{t}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
