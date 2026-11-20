import { ArrowRight, Info } from "lucide-react";
// Imported directly: dynamic(ssr:true) kept the markup in the server HTML but
// added a client Suspense boundary whose "Loading partners…" fallback replaced
// the real section during hydration — the layout-shift pattern fixed in
// d34d08e / BLG-010.
import PlacementsCompanyWallSection from "@/components/sections/PlacementsCompanyWallSection";

type Case = {
  name: string;
  role: string;
  company: string;
  before: string;
  after: string;
  outcome: string;
  domain: string;
  avatar: string;
};

const KPIS = [
  { num: "92%", label: "Offer rate post mock rounds", gradient: "from-amber-600 via-brand to-red-600" },
  { num: "1.5x", label: "Avg. salary jump (select tracks)", gradient: "from-rose-600 via-pink-600 to-fuchsia-600" },
  { num: "30–90 days", label: "Typical time-to-offer", gradient: "from-emerald-600 via-teal-600 to-cyan-600" },
  { num: "50+", label: "Active hiring partners", gradient: "from-cyan-600 via-sky-600 to-blue-600" },
];

const ANONYMOUS = "/placement_images/anonymous_student.png";

const CASES: Case[] = [
  {
    name: "Jaynam Shah",
    role: "QA (Business Delivery)",
    company: "IDfy",
    before: "CDPL Trainee",
    after: "Quality Assurance",
    outcome: "Joined IDfy: July 2023",
    domain: "QA",
    avatar: "/placements/Jaynam Shah.jpg",
  },
  {
    name: "Shrikanth Suri",
    role: "Junior Manual Tester",
    company: "eClerx",
    before: "CDPL Trainee",
    after: "QA / Manual Tester",
    outcome: "Hired at eClerx",
    domain: "QA",
    avatar: "/placements/Shrikanth Suri.jpg",
  },
  {
    name: "Asifali Sayed",
    role: "Full Stack Developer",
    company: "Marqetrix Web Solutions",
    before: "CDPL Trainee",
    after: "Full Stack Developer",
    outcome: "Offer at Marqetrix",
    domain: "Full-Stack",
    avatar: ANONYMOUS,
  },
  {
    name: "Avdhut Patil",
    role: "Software Deployment Executive",
    company: "Mediventurz",
    before: "CDPL Trainee",
    after: "Deployment / Ops",
    outcome: "22,000 per month",
    domain: "Cloud & DevOps",
    avatar: ANONYMOUS,
  },
];

export default function MentorOutcomesSection() {
  return (
    <section
      id="mentor-outcomes"
      className="relative isolate overflow-hidden bg-white text-zinc-900"
      aria-labelledby="mentor-outcomes-title"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="mentor-outcomes-title"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Featured <span className="text-brand">Learner Outcomes</span>
          </h2>
        </div>

        <dl className="mt-8 mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {KPIS.map((k) => (
            <div
              key={k.label}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center shadow-md"
            >
              <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${k.gradient}`} />
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-600">{k.label}</dt>
              <dd className={`mt-2 bg-gradient-to-br bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl ${k.gradient}`}>
                {k.num}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CASES.map((c) => (
            <li
              key={c.name}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md"
            >
              <img
                src={c.avatar}
                alt={`${c.name}, ${c.role} at ${c.company}`}
                title={`${c.name}, ${c.role} at ${c.company}`}
                width={80}
                height={80}
                loading="lazy"
                className="mx-auto h-20 w-20 rounded-full object-cover ring-1 ring-slate-200"
              />
              <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900">{c.name}</h3>
              <p className="text-sm text-slate-600">{c.role}</p>
              <p className="text-sm font-medium text-slate-800">{c.company}</p>

              <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-600">
                <span>{c.before}</span>
                <ArrowRight className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                <span className="font-medium text-slate-800">{c.after}</span>
              </div>

              <div className="mt-auto flex flex-wrap justify-center gap-1.5 pt-4 text-xs">
                <span className="inline-flex items-center rounded-full bg-orange-50 px-2 py-0.5 font-medium text-brand ring-1 ring-inset ring-orange-200">
                  {c.outcome}
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                  {c.domain}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="mb-10 mt-5 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
          <Info className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          Results vary by effort, background, and market conditions. Your CDPL mentor will map a plan that fits your goals.
        </p>

        <PlacementsCompanyWallSection />
      </div>
    </section>
  );
}

