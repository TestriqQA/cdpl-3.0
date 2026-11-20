// Server Component (the Details toggles are gone; every point is visible).
import { ShieldCheck, Users2, Rocket, Sparkles, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const PILLARS = [
  {
    title: "Verified Listings",
    desc: "We publish only curated, verified job openings so students don’t waste time on stale or ambiguous posts.",
    points: [
      "Human-verified company details & role expectations",
      "Clear application links and walk-in timing windows",
      "Locality tags so you can filter by nearby roles",
    ],
    Icon: ShieldCheck,
    tile: "bg-brand",
  },
  {
    title: "Mentor Help",
    desc: "Mentors help you tailor resumes, align projects to job JD, and prep with the right problem-sets.",
    points: [
      "Resume + LinkedIn review for role keywords",
      "Portfolio/project mapping to JD requirements",
      "Mock interviews: QA automation, Data, Full-Stack, DevOps",
    ],
    Icon: Users2,
    tile: "bg-indigo-600",
  },
  {
    title: "Faster Referrals",
    desc: "CDPL partners with hiring teams; qualified learners get faster callbacks and interview slots.",
    points: [
      "Partner-driven hotlists for urgent roles",
      "Shortlist nudges after assignment reviews",
      "Interview readiness checklist before you apply",
    ],
    Icon: Rocket,
    tile: "bg-emerald-600",
  },
];

const KPIS = [
  { v: "60+", l: "Expert mentors", cls: "text-brand" },
  { v: "5000+", l: "Learners guided", cls: "text-indigo-600" },
  { v: "50+", l: "Hiring partners", cls: "text-emerald-600" },
  { v: "4.9/5", l: "Avg. mentor rating", cls: "text-sky-600" },
];

export default function JobsLiveJobsWhyWePostJobsSection() {
  return (
    <section aria-labelledby="why-cdpl-posts-jobs" className="bg-gray-50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="why-cdpl-posts-jobs"
          pill={<><Sparkles className="h-4 w-4" aria-hidden="true" />Why we post nearby jobs for CDPL students</>}
          title={<>Why CDPL posts <span className="text-brand">verified nearby jobs</span> for students</>}
          intro="We make job search simpler: CDPL curates active roles across QA Automation, Data Science, Full-Stack and DevOps, and pairs them with mentor guidance and hiring-partner referrals, so you can apply confidently and get to interview faster."
        />

        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {KPIS.map(({ v, l, cls }) => (
            <div key={l} className="flex flex-col-reverse rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <dt className="mt-1 text-sm text-slate-600">{l}</dt>
              <dd className={`text-3xl font-extrabold tracking-tight ${cls}`}>{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {PILLARS.map(({ title, desc, points, Icon, tile }) => (
            <div key={title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg">
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${tile} text-white shadow-md`} aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-slate-600">{desc}</p>
              <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-700">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/jobs/live-jobs#openings"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Explore nearby jobs <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/mentors"
            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:border-brand hover:text-brand"
          >
            Get mentor help
          </Link>
        </div>
      </div>
    </section>
  );
}
