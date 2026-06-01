// components/sections/CtaSection.tsx
// Server component — sleek, slightly futuristic CTA. Fully responsive, SEO-friendly.

import Link from "next/link";

export default function CtaSection() {


  return (
    <section
      id="enroll"
      aria-labelledby="cta-heading"
      className="relative py-10"
    >
      {/* Futuristic but subtle background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[140px] bg-[radial-gradient(800px_160px_at_50%_0%,rgba(20,184,166,0.10),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <header className="mx-auto max-w-3xl">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Start Your <span className="text-FS">Python Journey</span> Today
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Enroll now in the <strong>80-hour, mentor-led</strong> program with{" "}
            <strong>placement assistance</strong>, portfolio projects, and a{" "}
            <strong>QR-verified certificate</strong>.
          </p>

          {/* Micro-badges (distinct colors, no repeats) */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-800">
              Live Online + Classroom
            </span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">
              40+ Projects
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">
              Job Assistance
            </span>
          </div>
        </header>

        {/* CTA buttons — distinct, simple colors */}
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="tel:+917888383788"
            title="Call Admissions for Python Programming Program"
            className="inline-flex items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Call CDPL admissions"
          >
            Call Admissions: +91 788-83-83-788
          </Link>
          <Link
            href="mailto:contact@cinutedigital.com"
            title="Email us for course details and syllabus"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-6 py-3 text-base font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            aria-label="Email CDPL"
          >
            Email Us
          </Link>

        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3 text-left">
          <TrustItem
            title="Mentor-Led"
            note="Small cohorts, code reviews, and doubt clearing"
            color="border-indigo-200 bg-indigo-50 text-indigo-900"
          />
          <TrustItem
            title="Certificate"
            note="Globally recognized, QR verified on completion"
            color="border-rose-200 bg-rose-50 text-rose-900"
          />
          <TrustItem
            title="Placement"
            note="Resume polish, mock interviews, job alerts"
            color="border-amber-200 bg-amber-50 text-amber-900"
          />
        </div>

        {/* Location + schedule hint */}
        <p className="mt-6 text-xs sm:text-sm text-slate-900">
          Mira Road &amp; Vasai, Maharashtra • Weekday/Weekend batches • Hybrid learning available
        </p>
      </div>

    </section>
  );
}

function TrustItem({
  title,
  note,
  color,
}: {
  title: string;
  note: string;
  color: string;
}) {
  return (
    <div
      className={[
        "rounded-xl border p-4 shadow-[0_1px_0_0_rgba(15,23,42,0.05)]",
        color,
      ].join(" ")}
    >
      <div className="text-sm font-bold">{title}</div>
      <div className="mt-1 text-[13px] opacity-90">{note}</div>
    </div>
  );
}
