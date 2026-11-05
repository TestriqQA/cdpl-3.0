"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Star, GraduationCap, BadgeCheck, Globe2, Sparkles, ArrowRight } from "lucide-react";
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
  const [expertise, setExpertise] = useState<string>("All");
  const [lang, setLang] = useState<string>("All");

  void setExpertise;
  void setLang;

  const filtered = useMemo(() => {
    return trainers.filter((t) => {
      const matchesExpertise =
        expertise === "All" || t.specialties.includes(expertise);

      const matchesLang =
        lang === "All" || (t.languages ?? []).includes(lang);

      return matchesExpertise && matchesLang;
    });
  }, [trainers, expertise, lang]);

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

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <article
            key={t.id}
            className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200">
                <Image
                  src={t.avatar}
                  alt={`${t.name}, ${t.role}`}
                  title={`${t.name}, ${t.role}`}
                  width={112}
                  height={112}
                  sizes="112px"
                  quality={90}
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-center text-lg font-bold leading-snug text-slate-900 md:text-start">
                  {t.name}
                </h3>
                <p className="truncate text-center text-sm text-slate-600 md:text-start">{t.role}</p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5 text-xs md:justify-start">
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

            <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
              {t.bio}
            </p>

            {/* Specialties */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {t.specialties.slice(0, 5).map((sp) => (
                <span
                  key={sp}
                  className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200"
                >
                  <Check className="h-3 w-3" style={{ color: BRAND }} />
                  {sp}
                </span>
              ))}
              {t.specialties.length > 5 && (
                <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-xs text-slate-600 ring-1 ring-slate-200">
                  +{t.specialties.length - 5} more
                </span>
              )}
            </div>

            {/* Certifications / Outcomes */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {t.certifications && t.certifications.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <BadgeCheck className="h-3.5 w-3.5 text-brand" />
                    Certifications
                  </div>
                  <ul className="mt-1.5 space-y-0.5">
                    {t.certifications.slice(0, 3).map((c) => (
                      <li key={c} className="text-sm text-slate-800">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {typeof t.successStories === "number" && (
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <Star className="h-3.5 w-3.5" style={{ color: BRAND }} />
                    Success Stories
                  </div>
                  <p className="mt-1.5 text-sm text-slate-800">
                    {t.successStories}+ learners placed
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between gap-3 pt-5">
              <div className="min-w-0 text-xs leading-5 text-slate-500">
                <span className="whitespace-nowrap">Personalized feedback •</span>{" "}
                <span className="whitespace-nowrap">Live code reviews •</span>{" "}
                <span className="whitespace-nowrap">Interview prep</span>
              </div>
              {t.linkedin ? (
                <Link
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.name} on LinkedIn`}
                  className="inline-flex shrink-0 items-center rounded-xl bg-blue-900 px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-brand"
                >
                  LinkedIn
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 flex flex-col items-center gap-6 rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 via-white to-amber-50 p-6 text-center shadow-sm sm:p-8 md:flex-row md:text-left">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-orange-100 text-brand" aria-hidden="true">
          <GraduationCap className="h-7 w-7" />
        </span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Learn from mentors who&apos;ve shipped and tested real products
          </h3>
          <p className="mt-2 text-slate-600">
            Live classes, hands-on projects and code reviews with working practitioners in{" "}
            <strong className="font-semibold text-slate-800">software testing</strong>,{" "}
            <strong className="font-semibold text-slate-800">data science</strong> and{" "}
            <strong className="font-semibold text-slate-800">AI</strong>.
          </p>
        </div>
        <Link
          href={ctaHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          style={{ backgroundColor: BRAND }}
        >
          {ctaText}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
