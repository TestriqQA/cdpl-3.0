// components/sections/WhoShouldEnroll.tsx
import { type LucideIcon, UserPlus, Briefcase, Rocket, GraduationCap } from "lucide-react";

type Persona = {
  title: string;
  blurb: string;
  bullets: string[];
  accent: {
    bar: string;     // top bar
    border: string;  // card border
    text: string;    // accent text/icon color
    ring: string;    // focus ring color
    chip: string;    // small chip/bg
  };
  icon: LucideIcon;
};

const PERSONAS: Persona[] = [
  {
    title: "Beginners & Non-Coders",
    blurb:
      "Start your Data Science journey from zero—learn Python, statistics, and analytics step by step with hands-on practice.",
    bullets: [
      "No prior coding required",
      "Guided projects and mentor feedback",
    ],
    accent: {
      bar: "bg-violet-500",
      border: "border-violet-200",
      text: "text-violet-700",
      ring: "focus:ring-violet-300",
      chip: "bg-violet-50",
    },
    icon: UserPlus,
  },
  {
    title: "Working Professionals",
    blurb:
      "Upskill with Python-first ML to boost roles in technology, finance, healthcare, marketing, and education.",
    bullets: [
      "Career-oriented case studies",
      "Practical tools: Pandas, SQL, scikit-learn",
    ],
    accent: {
      bar: "bg-emerald-500",
      border: "border-emerald-200",
      text: "text-emerald-700",
      ring: "focus:ring-emerald-300",
      chip: "bg-emerald-50",
    },
    icon: Briefcase,
  },
  {
    title: "Intermediate Learners",
    blurb:
      "Go deeper into machine learning, model evaluation, and MLOps to deliver production-ready solutions.",
    bullets: [
      "End-to-end ML pipelines",
      "Model tuning, SHAP, experiment tracking",
    ],
    accent: {
      bar: "bg-amber-500",
      border: "border-amber-200",
      text: "text-amber-700",
      ring: "focus:ring-amber-300",
      chip: "bg-amber-50",
    },
    icon: Rocket,
  },
  {
    title: "Students & Career Switchers",
    blurb:
      "Build a job-ready portfolio and transition into high-growth roles like Data Analyst, ML Engineer, or Data Scientist.",
    bullets: [
      "Portfolio projects recruiters love",
      "Interview prep & placement guidance",
    ],
    accent: {
      bar: "bg-sky-500",
      border: "border-sky-200",
      text: "text-sky-700",
      ring: "focus:ring-sky-300",
      chip: "bg-sky-50",
    },
    icon: GraduationCap,
  },
];

export default function WhoShouldEnroll() {
  const seoKeywords =
    "who should enroll data science course, python for beginners, data science for working professionals, machine learning for career switchers, ml for students, data analyst portfolio, job ready data science program, upskill with python, scikit-learn projects, data science placement support";

  return (
    <section
      id="who-should-enroll"
      aria-labelledby="who-should-enroll-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic gridline accent (no loud gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full w-full max-w-7xl opacity-50">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,#f1f5f9_0_18px,transparent_18px_36px)]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="who-should-enroll-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Who Is This <span className="text-DS">Course For</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Whether you’re starting out or leveling up, this program turns{" "}
            <strong>Python</strong>, <strong>Data Science</strong>, and{" "}
            <strong>Machine Learning</strong> skills into measurable career outcomes—portfolio projects,
            practical tooling, and interview-ready confidence.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Cards */}
        <div
          role="list"
          aria-label="Who should enroll list"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {PERSONAS.map((p) => {
            const Icon = p.icon;
            const id = p.title.replace(/\s+/g, "-").toLowerCase();
            return (
              <div
                key={p.title}
                role="listitem"
                tabIndex={0}
                aria-labelledby={id}
                className={[
                  "group relative rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5",
                  p.accent.border,
                  "focus:outline-none",
                  "focus:ring-2",
                  p.accent.ring,
                ].join(" ")}
              >
                {/* top accent bar */}
                <div className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", p.accent.bar].join(" ")} aria-hidden />

                <div className="flex items-start gap-3">
                  <div
                    className={["rounded-xl p-2 shrink-0 border", p.accent.border, p.accent.text].join(" ")}
                    aria-hidden
                  >
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <h3 id={id} className="text-lg md:text-xl font-bold text-slate-900">
                    <span className={p.accent.text}># </span>
                    {p.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm md:text-base text-slate-700">{p.blurb}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={["mt-1 inline-block h-1.5 w-1.5 rounded-full", p.accent.bar].join(" ")} aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Small emphasis row */}
                <div className="mt-5 flex items-center justify-between">
                  <span className={["text-xs font-semibold uppercase tracking-wide", p.accent.text].join(" ")}>
                    Beginner-Friendly • Job-Ready
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Ideal for <strong>Python beginners</strong>,{" "}
            <strong>working professionals</strong>, <strong>intermediate learners</strong>, and{" "}
            <strong>career switchers</strong> seeking <strong>Data Analyst</strong>,{" "}
            <strong>ML Engineer</strong>, or <strong>Data Scientist</strong> roles.
          </p>
          <p className="mt-2 text-[11px] text-slate-500">*Learning paths adapt by background and pace.</p>
        </div>
      </div>

    </section>
  );
}
