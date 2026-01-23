// components/Sections/TrainersOutcomesSection.tsx
import { CheckCircle2, Trophy, Briefcase, BarChart3, Sparkles } from "lucide-react";
import Link from "next/link";

export default function TrainersOutcomeSection() {
  return (
    <section
      aria-labelledby="outcomes-heading"
      className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
          style={{ boxShadow: "0 10px 30px -15px rgba(255,140,0,0.25)" }}
        >
          <Sparkles className="h-3.5 w-3.5" />
          Mentor-led, job-ready outcomes
        </span>
        <h2 id="outcomes-heading" className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
          From hands-on projects to hiring-ready proof
        </h2>
        <p className="mt-3 text-sm text-slate-700 sm:text-base">
          Level up with <strong>Automation Testing</strong>, <strong>Manual QA</strong>,{" "}
          <strong>API Testing</strong>, <strong>Performance</strong>, and{" "}
          <strong>Data Science</strong>—guided by mentors who build products and hire teams.
          Graduate with a portfolio, interview prep, and real-world confidence.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Trophy, label: "Capstone Projects Shipped", value: "350+" },
          { icon: Briefcase, label: "Mock Interviews Conducted", value: "1,200+" },
          { icon: BarChart3, label: "Employer-aligned Assessments", value: "25+" },
          { icon: CheckCircle2, label: "Avg. Learner Satisfaction", value: "4.8/5" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <s.icon className="h-5 w-5 text-slate-800" />
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{s.label}</p>
            </div>
            <p
              className="mt-2 text-2xl font-semibold text-slate-900"
              style={{ letterSpacing: "-0.02em" }}
              aria-label={s.label}
            >
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {/* Tracks */}
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Job-Ready Skill Tracks</h3>
        <p className="mt-1 text-sm text-slate-700">
          Choose a pathway and master tools that top QA and data teams use daily.
        </p>

        <div className="mt-5 grid gap-6 lg:grid-cols-4">
          {tracks.map((t) => (
            <article
              key={t.title}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-orange-200"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-slate-900">{t.title}</h4>
                <span
                  className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-brand ring-1 ring-inset"
                  style={{ background: "rgba(255,140,0,0.08)", borderColor: "rgba(255,140,0,0.35)" }}
                >
                  {t.duration}
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-800" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Link
                  href={t.href}
                  className="text-sm font-semibold text-slate-800 underline decoration-transparent underline-offset-4 transition hover:decoration-slate-400"
                  aria-label={`View ${t.title} curriculum`}
                >
                  View curriculum
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deliverables */}
      <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
        {/* Portfolio */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Portfolio Deliverables</h3>
          <p className="mt-1 text-sm text-slate-700">
            Build artifacts that recruiters instantly understand and trust.
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Automation Test Suite (Playwright/Cypress)",
              "API Test Collection (Postman/RestAssured)",
              "Performance Baseline Report (JMeter)",
              "Defect Triage & Root Cause Analysis",
              "SQL/ETL Notebook for Data Validation",
              "CI Pipeline with Test Reports (Jenkins/GitHub Actions)",
            ].map((d) => (
              <li
                key={d}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Certification / Proof */}
        <div className="relative overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white p-6 shadow-sm">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(closest-side, rgba(255,140,0,0.25), transparent)" }}
            aria-hidden
          />
          <h3 className="text-lg font-semibold text-slate-900">Proof of Learning</h3>
          <p className="mt-1 text-sm text-slate-700">
            Every learner receives verifiable completion, mentor feedback, and interview-ready summaries.
          </p>
          <dl className="mt-4 grid gap-3 text-sm">
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <dt className="text-slate-600">Verifiable Certificate</dt>
              <dd className="font-semibold text-slate-900">Shareable URL</dd>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <dt className="text-slate-600">Mentor Feedback</dt>
              <dd className="font-semibold text-slate-900">Actionable, role-focused</dd>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <dt className="text-slate-600">Interview Prep</dt>
              <dd className="font-semibold text-slate-900">DSA + QA scenarios</dd>
            </div>
          </dl>

          <div className="mt-5">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center rounded-2xl border border-brand bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-brand hover:text-white hover:-translate-y-0.5 hover:shadow-md"
              style={{ boxShadow: "0 20px 60px -25px rgba(255,140,0,0.25)" }}
            >
              Get mentor-matched
            </Link>
          </div>
        </div>
      </div>

      {/* SEO helper copy (concise, human) */}
      <p className="sr-only">
        Cinute Digital offers mentor-led training in Automation Testing, Manual Testing, API Testing, Performance Testing,
        and Data Science in India. Learn industry tools like Playwright, Cypress, Selenium, Postman, JMeter, SQL, and Git,
        build a hiring-ready portfolio, and prepare with mock interviews.
      </p>
    </section>
  );
}

const tracks = [
  {
    title: "Automation Testing",
    duration: "8–10 weeks",
    href: "/programs/automation-testing",
    points: ["Playwright/Cypress & Selenium", "CI pipelines, flaky test handling", "Hybrid frameworks, reporting"],
  },
  {
    title: "Manual & API Testing",
    duration: "6–8 weeks",
    href: "/programs/manual-api-testing",
    points: ["Test design & strategy", "Postman/RestAssured suites", "Defect lifecycle & RCA"],
  },
  {
    title: "Performance Testing",
    duration: "5–6 weeks",
    href: "/programs/performance-testing",
    points: ["JMeter & baseline profiling", "Bottleneck analysis", "Scalability & SLOs"],
  },
  {
    title: "Data Science Foundations",
    duration: "10–12 weeks",
    href: "/programs/data-science",
    points: ["Python, Pandas, SQL", "EDA & ML basics", "Model evaluation & reporting"],
  },
] as const;
