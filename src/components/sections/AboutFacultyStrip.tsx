// app/components/AboutFacultyStrip.tsx
"use client";

import Image from "next/image";
import clsx from "clsx";
import {
  Users,
  ShieldCheck,
  Brain,
  Bot,
  FlaskConical,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type Mentor = {
  name: string;
  role: string;
  avatar: string;
  experience?: string; // "12+ yrs"
  tag?: "QA" | "Data" | "Automation" | "AI/ML";
  desc: string;
};

type Props = {
  className?: string;
  brand?: string; // single accent; defaults to warm, engaging orange
  mentors?: Mentor[];
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
};

const DEFAULT_MENTORS: Mentor[] = [
  { name: "Pravin Mhaske", role: "Data Science Manager at Infosys(India)", avatar: "/mentors_images/Pravin-Maske.jpg", experience: "12+ yrs", tag: "Data", desc: "Pravin Maske is a seasoned professional with over two decades of comprehensive experience in the realm of data science, analytics, and machine learning." },
  { name: "Piyali Mondal", role: "Program Leader | M.Sc (Data science AI & ML) at Exeed College (UAE)", avatar: "/mentors_images/Piyali-Mondal.jpg", experience: "10+ yrs", tag: "Data", desc: "Piyali Mondal is an accomplished academician, engineering professor, and Ph.D. scholar with a wealth of experience in the field." },
  { name: "Revathi Soundarrajan", role: "Data Scientist (PHD) at Electra vehicles (USA)", avatar: "/mentors_images/Revathi-Soundarrajan.jpg", experience: "11+ yrs", tag: "Automation", desc: "Dr. S. Revathi, an accomplished Data Scientist, brings over a decade of expertise in research, teaching, and practical application of machine learning across diverse domains." },
  { name: "Urvi Verma", role: "AVP – Data engineering at Deutsche bank (Germany)", avatar: "/mentors_images/Urvi-Verma.jpg", experience: "9+ yrs", tag: "AI/ML", desc: "I work as Data engineer in deutsche bank. I have experience with big data technologies, java, python, SQL and cloud services like AWS, GCP. I have experience of 5+ years in the industry." },
];

export default function AboutFacultyStrip({
  className,
  brand = "#ff8c00",
  mentors = DEFAULT_MENTORS,
  heading = (<>Learn from <span className="text-brand">Mentors</span> </>),
  subheading = (<>10+ years average experience across <strong>Software Testing</strong>, <strong>Automation</strong>, <strong>Data Science</strong> & <strong>AI/ML</strong>.</>),
  primaryCtaHref = "/mentors",
}: Props) {
  const TagIcon = ({ tag }: { tag?: Mentor["tag"] }) => {
    const common = "h-3.5 w-3.5";
    switch (tag) {
      case "QA":
        return <ShieldCheck className={common} aria-hidden="true" />;
      case "Data":
        return <FlaskConical className={common} aria-hidden="true" />;
      case "Automation":
        return <Users className={common} aria-hidden="true" />;
      case "AI/ML":
        return <Bot className={common} aria-hidden="true" />;
      default:
        return <Brain className={common} aria-hidden="true" />;
    }
  };

  return (
    <section
      aria-labelledby="faculty-strip-title"
      className={clsx(
        "relative mx-auto max-w-7xl px-4 py-6 md:py-14 sm:px-6 lg:px-8",
        "bg-white text-slate-900",
        className
      )}
    >
      {/* Subtle top gradient wash (very light, non-distracting) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-40"
        style={{
          background: `radial-gradient(800px 200px at 50% -20%, ${brand}12, transparent 65%)`,
          maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
        }}
      />

      {/* Header */}
      <header className="mb-8 text-center">


        <span className="inline-flex items-center gap-2 mb-2 rounded-full border border-slate-300 bg-white px-3 py-2 text-[12px] font-medium text-slate-700 shadow-sm">
          <Sparkles className="h-4 w-4" style={{ color: brand }} />
          Industry-Aligned Mentors
        </span>


        <div className="flex flex-col items-center gap-3">
          <div className="max-w-5xl">
            <h2
              id="faculty-strip-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {heading}
            </h2>
            <p className="mt-4 md:text-lg text-slate-600 sm:text-base mx-auto">
              {subheading}
            </p>
          </div>


        </div>

        {/* Accent rule — centered */}
        <div
          aria-hidden="true"
          className="mt-6 h-[2px] w-16 rounded-full mx-auto"
          style={{ backgroundColor: brand }}
        />
      </header>


      {/* Mentors grid */}
      <ul
        className="grid gap-4 grid-cols-1 md:grid-cols-2"
        role="list"
        aria-label="Mentors and faculty"
      >
        {mentors.map((m) => (
          <li key={m.name}>
            <article
              className={clsx(
                "group relative flex flex-col lg:flex-row items-center gap-4 rounded-3xl border bg-white p-4 shadow-sm",
                "transition-transform duration-150 hover:-translate-y-0.5"
              )}
              style={{ borderColor: "rgba(15,23,42,0.12)" }}
            >
              {/* Avatar with subtle gradient halo */}
              <figure
                className="relative h-40 w-40 shrink-0 rounded-2xl p-[2px]"
                aria-labelledby={`${slugify(m.name)}-name`}
                aria-describedby={`${slugify(m.name)}-role`}

              >
                <div className="relative h-full w-full overflow-hidden rounded-[0.9rem] bg-white">
                  <Image
                    src={m.avatar}
                    alt={`${m.name}, ${m.role}`}
                    title={`${m.name}, ${m.role}`}
                    width={200}
                    height={100}
                    className="object-cover"

                    priority={false}
                  />
                </div>
              </figure>

              {/* Text */}
              <div className="min-w-0">
                <h3
                  id={`${slugify(m.name)}-name`}
                  className="truncate font-medium text-slate-900"
                >
                  {m.name}
                </h3>
                <p
                  id={`${slugify(m.name)}-role`}
                  className="mt-0.5 line-clamp-2 text-xs text-slate-600"
                >
                  {m.role}
                  {m.experience ? (
                    <>
                      {" "}
                      ·{" "}
                      <span className="font-medium" style={{ color: brand }}>
                        {m.experience}
                      </span>
                    </>
                  ) : null}
                </p>

                {/* Tag chip with tiny icon */}
                {m.tag && (
                  <span
                    className="mt-2 inline-flex items-center gap-1.5 rounded-full border bg-white px-2 py-0.5 text-[11px] font-medium text-slate-700"
                    style={{ borderColor: "rgba(15,23,42,0.10)" }}
                  >
                    <TagIcon tag={m.tag} />
                    {m.tag}
                  </span>
                )}

                <p className="text-sm mt-2">{m.desc}</p>
              </div>

              {/* Corner pixel accent */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-3 h-1.5 w-1.5 rounded-sm opacity-90"
                style={{ backgroundColor: brand }}
              />
            </article>
          </li>
        ))}
      </ul>

      {/* CTAs — centered */}
      <div className="flex justify-center gap-2 pt-1 mt-10">
        <Link
          href={primaryCtaHref}
          className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium bg-brand text-slate-900 shadow-sm transition hover:bg-amber-600 hover:text-white"

        >
          Meet the Mentors
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        {/* <button
          className={clsx(
            "inline-flex items-center border-brand gap-2 rounded-full border-2 bg-white px-3.5 py-2 text-sm font-medium text-slate-900 hover:bg-brand hover:text-white",
            "transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          )}

        >
          Become a Mentor
        </button> */}
      </div>

      {/* SEO helper for screen readers */}
      <p className="sr-only">
        Expert mentors with real-world experience in Software Testing, Automation Testing, API Testing, Data Science, and
        AI/ML lead our job-ready, industry-aligned training with portfolio-first projects and interview preparation.
      </p>

      {/* Organization schema is in layout.tsx - no need to duplicate here */}
    </section>
  );
}

/* ---------- Utilities ---------- */

function slugify(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

