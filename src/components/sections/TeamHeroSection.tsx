"use client";

import {
  ArrowRight,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteStat } from "@/components/stats/SiteStatsProvider";


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

const logos = [
  { src: "/images/Skill-India-Color.svg", alt: "Skill India", title: "Skill India" },
  { src: "/images/ISO-9001.png", alt: "ISO 9001 Certified", title: "ISO 9001 Certified" },
  { src: "/images/ISO-27001.png", alt: "ISO 27001 Certified", title: "ISO 27001 Certified" },
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
            <h1
              id="our-team-heading"
              className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-brand"
            >
              <span className="text-sky-600">Meet the People Behind</span>{" "}
              <span style={{ color: "#ff8c00" }}>Cinute Digital</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg" style={{ fontSizeAdjust: '0.5' }}>
              Learn from senior <strong className="font-bold">Software Testing, Automation, and Data Science</strong> practitioners who ship <strong className="font-bold">production-grade solutions</strong>. Our mentor-led programs blend <strong className="font-bold">agile workflows, CI/CD pipelines, API & UI automation, and analytics</strong> so you graduate with a <strong className="font-bold">job-ready portfolio</strong> and interview-ready skills.
            </p>

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
                <span className="font-semibold text-slate-800"><SiteStat k="rating" /></span>
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

        <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {stats.map((s, idx) => {
            const gradients = [
              'from-rose-600 via-pink-600 to-fuchsia-600',
              'from-cyan-600 via-sky-600 to-blue-600',
              'from-amber-600 via-brand to-red-600'
            ];
            return (
              <div
                key={s.label}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-6 text-center shadow-md sm:py-8"
              >
                <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${gradients[idx]}`} />
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-600">
                  {s.label}
                </dt>
                <dd className={`mt-2 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br sm:text-5xl ${gradients[idx]}`}>
                  {s.value}
                </dd>
                {s.note && <dd className="mt-2 text-sm text-slate-500">{s.note}</dd>}
              </div>
            );
          })}
        </dl>

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
