"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Check, Star, GraduationCap, BadgeCheck, Search, Globe2, Sparkles } from "lucide-react";
import { Trainer } from "@/app/our-team/types";

type TrainersSectionProps = {
  trainers: Trainer[];
  heading?: string;
  subheading?: string;
  ctaHref?: string;
  ctaText?: string;
  className?: string;
};

/** Brand color (Cinute Digital) */
const BRAND = "#ff8c00";

/** Accent utilities */
const brandRing: CSSProperties = { boxShadow: `0 0 0 2px ${BRAND}1A` }; // subtle ring

/** ============================
 * Component
 * ============================ */
export default function TeamTrainersSection({
  trainers,
  heading = "Meet Our Expert Trainers",
  subheading = "Mentor-led, job-focused learning from industry practitioners in Quality Engineering, Automation Testing, and DevOps.",
  ctaHref = "/contact-us",
  ctaText = "Book a Free Demo Session",
  className = "",
}: TrainersSectionProps) {
  const [query, setQuery] = useState("");
  const [expertise, setExpertise] = useState<string>("All");
  const [lang, setLang] = useState<string>("All");

  void setExpertise;
  void setLang;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return trainers.filter((t) => {
      const matchesQuery =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.role.toLowerCase().includes(q) ||
        t.specialties.some((sp) => sp.toLowerCase().includes(q)) ||
        t.bio.toLowerCase().includes(q);

      const matchesExpertise =
        expertise === "All" || t.specialties.includes(expertise);

      const matchesLang =
        lang === "All" || (t.languages ?? []).includes(lang);

      return matchesQuery && matchesExpertise && matchesLang;
    });
  }, [trainers, query, expertise, lang]);

  /** JSON-LD: ItemList of Person for SEO */
  const jsonLd = useMemo(() => {
    const itemListElements = trainers.map((t, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Person",
        name: t.name,
        jobTitle: t.role,
        knowsAbout: t.specialties,
        worksFor: {
          "@type": "Organization",
          name: "Cinute Digital",
        },
      },
    }));
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Cinute Digital Trainers",
      itemListElement: itemListElements,
    };
  }, [trainers]);

  return (
    <section
      aria-labelledby="trainers-heading"
      className={`mx-auto max-w-7xl py-10 md:py-6 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {/* SEO Headings */}
      <div className="mx-auto max-w-5xl text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
          aria-hidden="true"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Mentor-Led • Job-Ready • Industry-Backed
        </span>
        <h2
          id="trainers-heading"
          className="mt-6 md:mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          {heading}{" "}
          <span className="text-brand">
            at Cinute Digital
          </span>
        </h2>
        <p className="mt-6 text-lg leading-7 text-slate-700">
          {subheading} Our seasoned mentors bring{" "}
          <strong>real-world projects</strong>, <strong>industry certifications</strong>, and{" "}
          <strong>placement-focused guidance</strong> to accelerate your career growth.
        </p>
      </div>

      {/* Controls */}
      <div className="mt-16 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search trainers by name, skill, or role…"
            aria-label="Search trainers"
            className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-500 shadow-sm focus:border-transparent focus:outline-none"
            style={brandRing}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <article
            key={t.id}
            className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="relative w-40 h-40 md:h-35 md:w-35 overflow-hidden rounded-full ring-1 ring-slate-200">
                <Image
                  src={t.avatar}
                  alt={`${t.name}, ${t.role}`}
                  title={`${t.name}, ${t.role}`}
                  width={160}
                  height={160}
                  sizes="160px"
                  quality={90}
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-lg text-center md:text-start font-bold text-slate-900">
                  {t.name}
                </h3>
                <p className="truncate text-md text-center md:text-start text-slate-600">{t.role}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-0.5 font-medium text-brand ring-1 ring-inset ring-orange-200">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {t.yearsExp}+ yrs exp
                  </span>
                  {typeof t.rating === "number" && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-0.5 font-medium text-yellow-800 ring-1 ring-inset ring-yellow-200">
                      <Star className="h-3.5 w-3.5" />
                      {t.rating.toFixed(1)}
                    </span>
                  )}
                  {t.languages && t.languages.length > 0 && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                      <Globe2 className="h-3.5 w-3.5" />
                      {t.languages.slice(0, 2).join(", ")}
                      {t.languages.length > 2 ? " +" : ""}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-700">
              {t.bio}
            </p>

            {/* Specialties */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {t.specialties.slice(0, 5).map((sp) => (
                <span
                  key={sp}
                  className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text[14px] font-medium text-slate-700 ring-1 ring-inset ring-slate-200"
                >
                  <Check className="h-3.5 w-3.5" style={{ color: BRAND }} />
                  {sp}
                </span>
              ))}
              {t.specialties.length > 5 && (
                <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] text-slate-600 ring-1 ring-slate-200">
                  +{t.specialties.length - 5} more
                </span>
              )}
            </div>

            {/* Certifications / Outcomes */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {t.certifications && t.certifications.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
                    <BadgeCheck className="h-4 w-4 hidden md:block text-brand" />
                    Certifications
                  </div>
                  <ul className="mt-1.5 list-inside space-y-1">
                    {t.certifications.slice(0, 3).map((c) => (
                      <li key={c} className="text-xs text-slate-700">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {typeof t.successStories === "number" && (
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <Star className="h-4 w-4" style={{ color: BRAND }} />
                    Success Stories
                  </div>
                  <p className="mt-1.5 text-md font-semibold text-slate-900">
                    {t.successStories}+ learners placed
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-7 flex items-center justify-between">
              <div className="text-sm text-slate-600">
                Personalized feedback • Live code reviews • Interview prep
              </div>
              {t.slug ? (
                <Link
                  href={`${t.linkedin}`}
                  className="inline-flex items-center rounded-xl bg-blue-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-brand"
                >
                  LinkedIn
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">
          Learn from mentors who’ve shipped and tested real products.
        </h3>
        <p className="mt-4 md:mt-1 text-sm text-slate-700">
          Get hands-on with <strong>Automation Testing</strong>, <strong>API Testing</strong>,{" "}
          <strong>Playwright</strong>, <strong>Cypress</strong>, and <strong>DevOps fundamentals</strong>.
        </p>
        <Link
          href={ctaHref}
          className="mt-6 md:mt-4 inline-flex items-center justify-center rounded-2xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          style={{ backgroundColor: BRAND }}
        >
          {ctaText}
        </Link>
      </div>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
