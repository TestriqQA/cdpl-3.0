import { BadgeCheck, Check, Compass, GraduationCap, Video } from "lucide-react";
import type { Mentor } from "@/lib/mentorShared";

const IMG_TWEAKS: Record<string, string> = {
  "Dnyaneshwar Bhabad": "object-[50%_30%] scale-[1.06]",
};

const PILLARS = [
  { label: "Professional Industry Experts", Icon: BadgeCheck, tile: "bg-orange-100 text-orange-600" },
  { label: "1:1 Live Mentorship", Icon: Video, tile: "bg-sky-100 text-sky-600" },
  { label: "Career-Focused Guidance", Icon: Compass, tile: "bg-emerald-100 text-emerald-600" },
];

// Mentors are resolved on the server (Sanity, then local fallback) and passed in.
export default function MentorsImpactSection({ mentors }: { mentors: Mentor[] }) {
  return (
    <section
      id="mentors-impact"
      aria-labelledby="mentors-impact-title"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-12"
    >
      <ul className="mx-auto mb-10 grid max-w-5xl gap-4 sm:grid-cols-3">
        {PILLARS.map(({ label, Icon, tile }) => (
          <li
            key={label}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:justify-center"
          >
            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tile}`} aria-hidden="true">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-base font-semibold text-slate-900">{label}</span>
          </li>
        ))}
      </ul>

      <div className="mx-auto max-w-3xl text-center">
        <h2 id="mentors-impact-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Learn Faster with <span className="text-brand">CDPL World-Class Mentors</span>
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Accelerate your career with <strong className="font-semibold text-slate-800">outcome-driven mentorship</strong> from
          leaders at Google, Microsoft, Amazon, and high-growth startups. Master{" "}
          <strong className="font-semibold text-slate-800">Data Science</strong>,{" "}
          <strong className="font-semibold text-slate-800">Machine Learning</strong>,{" "}
          <strong className="font-semibold text-slate-800">Software Testing</strong> and{" "}
          <strong className="font-semibold text-slate-800">Product Management</strong> through live projects, interview
          prep, and portfolio reviews designed for <strong className="font-semibold text-slate-800">job placement</strong> and{" "}
          <strong className="font-semibold text-slate-800">promotions</strong>.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mentors.map((m) => {
          const linkedin = m.socials?.find((s) => s.platform === "linkedin")?.url;
          return (
            <article
              key={m.name}
              aria-label={`${m.name}, ${m.title}${m.company ? `, ${m.company}` : ""}`}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200">
                  <img
                    src={m.avatar}
                    alt={`${m.name} - ${m.domain} mentor at ${m.company}`}
                    title={`${m.name} - ${m.domain} mentor at ${m.company}`}
                    width={112}
                    height={112}
                    loading="lazy"
                    className={`h-full w-full object-cover ${IMG_TWEAKS[m.name] || ""}`}
                  />
                </div>
                <div className="min-w-0 flex-1 text-center md:text-start">
                  <h3 className="text-lg font-bold leading-snug text-slate-900">{m.name}</h3>
                  <p className="text-sm text-slate-600">{m.title}</p>
                  {m.company && <p className="text-sm font-medium text-slate-800">{m.company}</p>}
                  <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5 text-xs md:justify-start">
                    <span className="inline-flex items-center rounded-full bg-orange-50 px-2 py-0.5 font-medium text-brand ring-1 ring-inset ring-orange-200">
                      {m.domain}
                    </span>
                    {m.experience && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                        <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                        {m.experience}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {m.highlights && m.highlights.length > 0 && (
                <ul className="mt-4 flex flex-wrap justify-center gap-1.5">
                  {m.highlights.slice(0, 4).map((t) => (
                    <li
                      key={t}
                      className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200"
                    >
                      <Check className="h-3 w-3 text-brand" aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              {linkedin && (
                <div className="mt-auto pt-5">
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="inline-flex items-center rounded-xl bg-blue-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand"
                  >
                    LinkedIn
                  </a>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
