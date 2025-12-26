"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  );
}

const PlacementsCompanyWallSection = dynamic(
  () => import("@/components/sections/PlacementsCompanyWallSection"),
  { ssr: true, loading: () => <SectionLoader label="Loading partners…" /> }
);

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

const BRAND = "#ff8c00";
const GRADIENT_BRAND =
  "linear-gradient(90deg, #ff8c00 0%, #ffb558 55%, #ffd19e 100%)";
const GRADIENT_ACCENT = "linear-gradient(90deg,#e0f2ff 0%,#efe9ff 100%)";

const DOMAINS = ["All", "QA", "Full-Stack", "Cloud & DevOps"];
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
  const [tab, setTab] = useState<string>("All");
  const filtered = useMemo(
    () => (tab === "All" ? CASES : CASES.filter((c) => c.domain === tab)),
    [tab]
  );
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="mentor-outcomes"
      className="relative isolate overflow-hidden bg-white text-zinc-900"
      aria-labelledby="mentor-outcomes-title"
    >
      {/* soft background aura */}
      <div
        className="pointer-events-none absolute -top-24 right-[-12%] h-72 w-[46rem] rounded-full blur[70px] opacity-25"
        style={{ background: GRADIENT_ACCENT }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-[-12%] h-72 w-[46rem] rounded-full blur[70px] opacity-20"
        style={{ background: GRADIENT_BRAND }}
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6 sm:pt-8 sm:pb-16 lg:px-8">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <h2
            id="mentor-outcomes-title"
            className="text-3xl font-extrabold leading-tight sm:text-4xl"
          >
            <span style={{ color: BRAND }}>Featured </span>
            Learner Outcomes{" "}
          </h2>
        </header>

        {/* Tabs */}
        <div className="mb-4 flex flex-wrap gap-2">
          {DOMAINS.map((d) => {
            const active = d === tab;
            return (
              <button
                key={d}
                onClick={() => {
                  setTab(d);
                  setActiveIdx(0);
                }}
                className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${active
                  ? "border-zinc-300 text-zinc-900 shadow-sm"
                  : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
                  }`}
                style={active ? { backgroundImage: GRADIENT_BRAND } : {}}
                aria-pressed={active}
              >
                {d}
              </button>
            );
          })}
        </div>

        {/* KPIs */}
        <div className="mb-8 grid grid-cols-1 min-[286px]:grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            {
              num: "92%",
              label: "Offer rate post mock rounds",
              cls: "text-orange-600",
              card:
                "relative overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-100 p-4 text-center shadow-sm",
              deco:
                "absolute -right-6 -top-6 h-20 w-20 rounded-full bg-orange-200/40",
            },
            {
              num: "1.5x",
              label: "Avg. salary jump (select tracks)",
              cls: "text-indigo-600",
              card:
                "relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-100 p-4 text-center shadow-sm",
              deco:
                "absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-indigo-200/40",
            },
            {
              num: "30–90 days",
              label: "Typical time-to-offer",
              cls: "text-emerald-600",
              card:
                "relative overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-100 p-4 text-center shadow-sm",
              deco:
                "absolute -right-8 bottom-0 h-24 w-24 rounded-full bg-emerald-200/40",
            },
            {
              num: "50+",
              label: "Active hiring partners",
              cls: "text-sky-600",
              card:
                "relative overflow-hidden rounded-2xl border border-sky-100 bg-gradient-to-br from-sky-50 to-cyan-100 p-4 text-center shadow-sm",
              deco:
                "absolute -left-8 top-0 h-24 w-24 rounded-full bg-sky-200/40",
            },
          ].map((m) => (
            <div key={m.label} className={m.card}>
              <div aria-hidden className={m.deco} />
              <div className={`text-xl font-extrabold tracking-wide ${m.cls}`}>
                {m.num}
              </div>
              <div className="mt-1 text-xs text-zinc-800">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Orbit */}
        <Orbit
          cases={filtered}
          activeIdx={activeIdx}
          setActiveIdx={setActiveIdx}
        />

        {/* Brand strip */}


        <PlacementsCompanyWallSection />

        <p className="mt-4 text-center text-xs text-zinc-700">
          Results vary by effort, background, and market conditions. Your CDPL
          mentor will map a plan that fits your goals.
        </p>
      </div>

      <div className="sr-only">
        CDPL outcomes include placements with technoscripts, jm-financial,
        vistaar, sp-ultraflex, marqetrix, raw-engineering, galentic,
        tech-cryptors, axiom, medi-venturz, aryan-technologies, credility,
        idfy, and testriq.
      </div>
    </section>
  );
}

/* ============================ Orbit ============================ */
function Orbit({
  cases,
  activeIdx,
  setActiveIdx,
}: {
  cases: Case[];
  activeIdx: number;
  setActiveIdx: (i: number) => void;
}) {
  const N = Math.max(1, cases.length);

  /** Use SAME radius for ring drawing and avatar centers */
  const RING_R = 38.5; // matches the SVG circle r

  const positions = useMemo(() => {
    const start = -90; // top
    return new Array(N).fill(0).map((_, i) => {
      const angle = start + (360 / N) * i;
      const rad = (angle * Math.PI) / 180;
      return {
        cx: 50 + Math.cos(rad) * RING_R,
        cy: 50 + Math.sin(rad) * RING_R, // no vertical compression
      };
    });
  }, [N]);

  const active = cases[Math.min(activeIdx, Math.max(0, N - 1))];

  return (
    <div className="relative mx-auto grid w-full max-w-5xl place-items-center">
      <div className="relative aspect-square w-full min-w-[280px] max-w-[720px]">
        {/* Soft ring */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
            <defs>
              <radialGradient id="o-fill" cx="50%" cy="50%">
                <stop offset="0%" stopColor="rgba(255,140,0,0.10)" />
                <stop offset="55%" stopColor="rgba(255,140,0,0.05)" />
                <stop offset="100%" stopColor="rgba(255,140,0,0)" />
              </radialGradient>
              <linearGradient id="o-stroke" x1="0" y1="0" x2="100" y2="0">
                <stop stopColor="#ffd8b0" />
                <stop offset="1" stopColor="#ffe8cb" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r={RING_R} fill="url(#o-fill)" />
            <circle
              cx="50"
              cy="50"
              r={RING_R}
              fill="none"
              stroke="url(#o-stroke)"
              strokeWidth="0.8"
            />
          </svg>
        </div>

        {/* Center card */}
        <div className="absolute left-1/2 top-1/2 w-[92%] max-w-[480px] -translate-x-1/2 -translate-y-1/2 sm:w-[72%]">
          <div className="rounded-3xl border border-zinc-200 bg-white/95 p-5 shadow-[0_22px_50px_-30px_rgba(2,6,23,0.45)] backdrop-blur">
            {active ? (
              <>
                <div className="flex items-center gap-3">

                  <img
                    src={active.avatar}
                    alt={`${active.name} avatar`}
                    title={`${active.name} avatar`}
                    className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover ring-2 ring-white shadow-sm"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-extrabold leading-tight">
                      {active.name} - {active.role}
                    </div>
                    <div className="text-xs text-zinc-700">{active.company}</div>
                  </div>
                </div>

                <dl className="mt-3 grid gap-1.5 text-[12px] text-zinc-800">
                  <div className="flex gap-2">
                    <dt className="min-w-14 font-semibold">Before</dt>
                    <dd>{active.before}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="min-w-14 font-semibold">After</dt>
                    <dd>{active.after}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="min-w-14 font-semibold">Outcome</dt>
                    <dd className="font-semibold">{active.outcome}</dd>
                  </div>
                </dl>

                <div className="mt-3 inline-flex items-center gap-2 text-[11px] text-zinc-600">
                  <span className="rounded-full border border-zinc-200 bg-white px-2 py-0.5">
                    {active.domain}
                  </span>
                  <span className="text-zinc-300">•</span>
                  <span>CDPL Mentorship</span>
                </div>
              </>
            ) : (
              <div className="text-center text-sm text-zinc-700">
                No outcomes in this track yet.
              </div>
            )}
          </div>
        </div>

        {/* MOBILE: larger stacked avatars */}
        <div className="absolute inset-x-0 bottom-[8%] flex items-end justify-center gap-2 sm:hidden">
          {cases.map((c, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={c.name + c.company + "m"}
                onClick={() => setActiveIdx(i)}
                className="relative"
                aria-label={`${c.name}, ${c.role} at ${c.company}`}
                style={{ zIndex: isActive ? 100 : 10 + i }}
              >

                <img
                  src={c.avatar}
                  alt=""
                  className={`h-14 w-14 rounded-full object-cover ring-2 ring-white shadow-sm transition-transform ${isActive ? "scale-105" : "scale-100"
                    }`}
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>

        {/* DESKTOP: orbiting avatars — centered on ring */}
        {cases.map((c, i) => {
          const { cx, cy } = positions[i];
          const isActive = i === activeIdx;
          return (
            <button
              key={c.name + c.company}
              onMouseEnter={() => setActiveIdx(i)}
              onFocus={() => setActiveIdx(i)}
              onClick={() => setActiveIdx(i)}
              className="hidden sm:block sm:absolute -translate-x-1/2 -translate-y-1/2 outline-none"
              style={{ left: `${cx}%`, top: `${cy}%` }}
              aria-label={`${c.name}, ${c.role} at ${c.company}`}
            >

              <img
                src={c.avatar}
                alt=""
                className={`h-20 w-20 lg:h-24 lg:w-24 rounded-full object-cover ring-2 ring-white shadow-md transition-transform ${isActive ? "scale-[1.06]" : "scale-100"
                  }`}
                loading="lazy"
                style={{
                  boxShadow: isActive
                    ? "0 24px 48px -22px rgba(255,140,0,0.35)"
                    : "0 18px 36px -22px rgba(2,6,23,0.35)",
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
