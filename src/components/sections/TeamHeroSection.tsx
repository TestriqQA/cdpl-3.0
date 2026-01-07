"use client";

import {
  ArrowRight,
  Star,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const BRAND = "#ff8c00";

const stats = [
  { label: "Expert Mentors", value: "60+", note: "QA, Automation, Data" },
  { label: "Learners Mentored", value: "5000+", note: "Career outcomes" },
  { label: "Hiring Partners", value: "50+", note: "Industry referrals" },
];

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Our Team", href: "/our-team" },
];

const highlights = [
  "Project-based learning with real SDET workflows",
  "Interview prep: DSA sprints, mock interviews, feedback loops",
  "ISO-aligned curriculum & job-ready capstones",
  "Personalized learning paths & 1:1 mentor guidance",
];

const logos = [
  { src: "/images/Skill-India-Color.svg", alt: "Skill India", title: "Skill India" },
  { src: "/images/ISO-9001.png", alt: "ISO Certified", title: "ISO Certified" },
  { src: "/images/ISO-27001.png", alt: "ISO Certified", title: "ISO Certified" },
  { src: "/images/Testriq-Logo-1.webp", alt: "Testriq", title: "Testriq" },
];

const VIS = {
  glowOpacity: 0.32,
  circuitOpacity: 0.28,
  strokeOpacity: 0.8,
  strokeWidth: 2,
  tokenOpacity: 0.75,
};

function BackgroundFuturisticMotion({ brand = "#ff8c00" }) {
  return (
    <div
      className="pointer-events-none absolute z-0 overflow-x-hidden hidden md:block"
      style={{ inset: "-1px", mixBlendMode: "normal", contain: "layout paint" }}
      aria-hidden="true"
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "-12rem",
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
          maxWidth: "1200px",
          height: "58vh",
          filter: "blur(36px) saturate(1.1)",
          opacity: VIS.glowOpacity,
          background: `radial-gradient(700px 260px at 50% 0%, ${brand}99, ${brand}33 60%, transparent 78%)`,
        }}
      />

      <svg
        viewBox="0 0 1400 600"
        fill="none"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          width: "100%",
          height: "46vh",
          maxHeight: 520,
          opacity: VIS.circuitOpacity,
        }}
      >
        {[
          { y: 90, amp: 18 },
          { y: 180, amp: 26 },
          { y: 270, amp: 14 },
          { y: 360, amp: 22 },
        ].map((row, i) => (
          <path
            key={i}
            d={`M0 ${row.y} C 250 ${row.y - row.amp}, 450 ${row.y + row.amp}, 700 ${row.y}
               S 1150 ${row.y - row.amp}, 1400 ${row.y}`}
            stroke={brand}
            strokeOpacity={VIS.strokeOpacity}
            strokeWidth={VIS.strokeWidth}
          />
        ))}

        {[120, 320, 520, 820, 1080, 1280].map((x, i) => (
          <circle
            key={i}
            cx={x}
            cy={i % 2 ? 180 : 270}
            r="3.5"
            fill={brand}
            opacity={0.4}
          />
        ))}
      </svg>
    </div>
  );
}

export default function TeamHero() {
  const brand = BRAND;

  return (
    <section
      aria-labelledby="our-team-heading"
      className="relative isolate mx-auto max-w-7xl w-full bg-white px-4 pb-14 pt-8 md:pt-10 sm:px-6 lg:px-8"
      style={{ overflowX: "clip" }}
    >
      <BackgroundFuturisticMotion brand={brand} />

      {/* Breadcrumbs for SEO */}
      <div className="relative z-10">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                {i === 0 ? <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> : <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>}
                <Link
                  href={c.href}
                  className={`hover:text-indigo-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""
                    }`}
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-8">
            <div className="flex flex-wrap mt-3 items-center gap-3">
              <div className="flex items-center gap-2 border border-slate-300 rounded-2xl p-1 bg-slate-100 text-slate-800 text-xs">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> Future-Ready Mentors
              </div>
              <div className="hidden md:flex items-center gap-2 border border-slate-300 rounded-2xl p-1 bg-slate-100 text-slate-800 text-xs">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> ISO-Aligned Training
              </div>
              <div className="hidden md:flex items-center gap-2 border border-slate-300 rounded-2xl p-1 bg-slate-100 text-slate-800 text-xs">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> Industry Leaders
              </div>
            </div>

            <h1
              id="our-team-heading"
              className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-brand"
            >
              <span className="text-sky-600">Meet the People Behind</span>{" "}
              <span style={{ color: brand }}>Cinute Digital</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg" style={{ fontSizeAdjust: '0.5' }}>
              Learn from senior <strong className="font-bold">Software Testing, Automation, and Data Science</strong> practitioners who ship <strong className="font-bold">production-grade solutions</strong>. Our mentor-led programs blend <strong className="font-bold">agile workflows, CI/CD pipelines, API & UI automation, and analytics</strong> so you graduate with a <strong className="font-bold">job-ready portfolio</strong> and interview-ready skills.
            </p>

            <div className="mt-7 hidden md:inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm text-orange-800">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                5,000+
              </span>{" "}
              learners mentored ·{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Hiring partner referrals
              </span>{" "}
              ·{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">
                Job-ready portfolios
              </span>
            </div>

            <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <div className="flex gap-3">
                <Link
                  href="mentors"
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                  style={{ backgroundColor: brand }}
                >
                  Explore Mentors <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                {/* <button
                  className="inline-flex items-center justify-center rounded-2xl border bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200"
                  style={{ borderColor: brand }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = brand)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
                >
                  Become a Mentor
                </button> */}
              </div>

              <div className="flex mt-5 md:mt-0 items-center gap-1 text-sm text-slate-600">
                <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" aria-hidden="true" />
                <span className="font-semibold text-slate-800">4.9/5</span>
                <span aria-hidden="true">·</span>
                <span>Based on verified learner reviews</span>
              </div>
            </div>
          </div>

          <div className="col-span-4 mt-10 lg:mt-0 flex justify-center">
            <Image
              src="/Our-team-hero.png"
              alt="team-image"
              title="team-image"
              width={380}
              height={285}
              quality={50}
              sizes="380px"
              priority
              fetchPriority="high"
              loading="eager"
            />
          </div>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, idx) => {
            const gradients = [
              'from-rose-600 via-pink-600 to-fuchsia-600',
              'from-cyan-600 via-sky-600 to-blue-600',
              'from-amber-600 via-orange-600 to-red-600'
            ];
            return (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {s.label}
                </dt>
                <dd className={`mt-1 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${gradients[idx]}`}>
                  {s.value}
                </dd>
                {s.note && <p className="mt-0.5 text-xs text-slate-500">{s.note}</p>}
              </div>
            );
          })}
        </dl>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <Check
                className="mt-0.5 h-5 w-5 shrink-0"
                style={{ color: brand }}
              />
              <p className="text-slate-700">{h}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <p className="text-center text-sm font-medium text-slate-500">
            Trusted by industry & aligned with global standards
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 items-center justify-items-center gap-20 md:gap-18">
            {logos.map((l) => (
              <div
                key={l.alt}
                className="relative h-8 w-28 opacity-80 transition hover:opacity-100"
              >
                <Image src={l.src} alt={l.alt} title={l.title} className="object-contain" width={100} height={100} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}