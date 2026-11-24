"use client";

// The one course card used across the site (homepage, /courses, category
// hubs).
//
// Two layouts, chosen with the `variant` prop:
//   "classic" (default) — coloured gradient header, feature checklist, a
//       three-column facts row, then the price and the buttons. Used by
//       /courses and the category hubs.
//   "home" — the homepage treatment: white card with a thin accent bar, an
//       icon tile, compact fact chips, and a tinted price/action panel that
//       anchors the bottom of every card in the row.

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle,
  Clock,
  Code,
  Cog,
  Cpu,
  Database,
  Download,
  FileSpreadsheet,
  Flame,
  Gauge,
  GraduationCap,
  LayoutGrid,  Megaphone,
  PieChart,
  Rocket,
  Shield,
  Smartphone,
  Sparkles,
  TrendingUp,
  Trophy,
  Briefcase,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { FaChartBar } from "react-icons/fa6";
import { DownloadFormButton } from "@/components/DownloadForm";
import { discountPercent, formatINR } from "@/lib/format";

/** Icon keys a course may name (string keys keep course data serialisable). */
export const COURSE_CARD_ICONS = {
  BookOpen,
  Zap,
  Gauge,
  Shield,
  Smartphone,
  Cpu,
  BarChart3,
  Code,
  TrendingUp,
  ChartBar: FaChartBar,
  Cog,
  Trophy,
  Brain,
  Database,
  Megaphone,
  Briefcase,
  Rocket,
  PieChart,
  FileSpreadsheet,
  LayoutGrid,
  GraduationCap,
  Workflow,
  Sparkles,
} as const;

export type CourseCardIcon = keyof typeof COURSE_CARD_ICONS;

export type CourseCardData = {
  title: string;
  description: string;
  duration: string;
  level: string;
  /** e.g. "2,200+"; left out when it has no number ("Not specified"). */
  students?: string;
  /** Shown as an eyebrow on the "home" variant only. */
  category?: string;
  popular?: boolean;
  /** Selling price in rupees. Left out when no fee is published — the card then shows no price. */
  price?: number;
  /** Strike-through list price; a discount chip appears when it is higher than `price`. */
  listPrice?: number;
  /** Small print under the price, e.g. "GST as applicable". */
  priceNote?: string;
  /** Course page URL. */
  link: string;
  /** title attribute for the course link; defaults to the course title. */
  linkTitle?: string;
  features: string[];
  /** Direct PDF for the syllabus download form. */
  syllabusLink?: string;
  icon?: CourseCardIcon | string;
};

// Classic layout colours: gradient header + matching button, rotating by position.
const VARIANTS = [
  { header: "bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white", button: "bg-indigo-600" },
  { header: "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white", button: "bg-emerald-600" },
  { header: "bg-gradient-to-br from-rose-600 via-pink-600 to-orange-500 text-white", button: "bg-rose-600" },
];

// Home layout colours: accent bar, icon and primary button, same rotation.
const ACCENTS = [
  { bar: "from-indigo-500 via-purple-500 to-fuchsia-500", icon: "text-indigo-600", button: "bg-indigo-600 hover:bg-indigo-700" },
  { bar: "from-emerald-500 via-teal-500 to-cyan-500", icon: "text-emerald-600", button: "bg-emerald-600 hover:bg-emerald-700" },
  { bar: "from-rose-500 via-pink-500 to-orange-400", icon: "text-rose-600", button: "bg-rose-600 hover:bg-rose-700" },
];

/** "Download Syllabus" trigger, shared by both layouts. */
function SyllabusButton({
  course,
  source,
  className = "",
}: {
  course: CourseCardData;
  source?: string;
  className?: string;
}) {
  return (
    <DownloadFormButton
      courseTitle={course.title}
      syllabusLink={course.syllabusLink}
      source={source}
      buttonText={
        <span className="flex items-center justify-center gap-1.5">
          <Download className="h-4 w-4" aria-hidden="true" />
          <span>Download Syllabus</span>
        </span>
      }
      buttonClassName={className}
      onSubmit={() => {}}
    />
  );
}

/** Price + strike-through + discount chip, used by both layouts. */
function Price({
  course,
  className = "",
  priceClassName = "text-xl",
}: {
  course: CourseCardData;
  className?: string;
  priceClassName?: string;
}) {
  if (course.price == null) return null;
  const discount = discountPercent(course.price, course.listPrice);

  return (
    <div className={className}>
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className={`${priceClassName} font-extrabold tracking-tight text-slate-900`}>{formatINR(course.price)}</span>
        {course.listPrice != null && course.listPrice > course.price && (
          <span className="text-sm text-slate-400 line-through">
            <span className="sr-only">List price </span>
            {formatINR(course.listPrice)}
          </span>
        )}
        {discount > 0 && (
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-200">
            {discount}% off
          </span>
        )}
      </div>
      {course.priceNote && <p className="mt-0.5 text-[11px] text-slate-500">{course.priceNote}</p>}
    </div>
  );
}

export default function CourseCard({
  course,
  index,
  hidden = false,
  subgrid = false,
  variant = "classic",
  className = "",
  source,
}: {
  course: CourseCardData;
  /** Position among visible cards; picks the accent colour. */
  index: number;
  hidden?: boolean;
  /**
   * Span two rows of the parent grid as a subgrid (header row, body row) so
   * headers in a row line up. Only when the card is a direct grid child, and
   * only used by the classic layout.
   */
  subgrid?: boolean;
  /** "classic" (default) or the homepage "home" treatment. */
  variant?: "classic" | "home";
  className?: string;
  /** Lead source for the syllabus form. */
  source?: string;
}) {
  const Icon = COURSE_CARD_ICONS[(course.icon ?? "BookOpen") as CourseCardIcon] ?? BookOpen;
  const hasStudents = !!course.students && /\d/.test(course.students);

  if (variant === "home") {
    const accent = ACCENTS[index % ACCENTS.length];
    const chips = [
      { key: "duration", icon: Clock, text: course.duration },
      { key: "level", icon: Gauge, text: course.level },
      ...(hasStudents ? [{ key: "learners", icon: Users, text: `${course.students} learners` }] : []),
    ];

    return (
      <article
        hidden={hidden}
        className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl [&[hidden]]:hidden ${className}`}
      >
        <span className={`h-1 w-full bg-gradient-to-r ${accent.bar}`} aria-hidden="true" />

        <div className="flex flex-grow flex-col p-5">
          {/* Popular marker: a flame in the card's top-right corner. */}
          {course.popular && (
            <span className="absolute right-4 top-4" title="Popular course">
              <Flame className="h-4 w-4 fill-amber-500 text-amber-500" aria-hidden="true" />
              <span className="sr-only">Popular course</span>
            </span>
          )}

          <div className={`flex items-start gap-2.5 ${course.popular ? "pr-9" : ""}`}>
            <Icon className={`mt-0.5 h-6 w-6 shrink-0 ${accent.icon}`} aria-hidden="true" />
            {course.category && <span className="sr-only">{course.category}</span>}

            <h3 className="min-w-0 flex-1 text-lg font-bold leading-snug text-slate-900">
              <Link
                href={course.link}
                title={course.linkTitle || course.title}
                className="transition-colors hover:text-slate-700 focus:outline-none focus-visible:underline"
              >
                {course.title}
              </Link>
            </h3>
          </div>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">{course.description}</p>

          <ul className="mt-3 flex flex-wrap gap-1.5">
            {chips.map(({ key, icon: ChipIcon, text }) => (
              <li
                key={key}
                className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600 ring-1 ring-slate-200"
              >
                <ChipIcon className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>

          {course.features.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {course.features.slice(0, 3).map((feature) => (
                <li key={feature} className="flex items-start gap-1.5 text-[13px] leading-snug text-slate-600">
                  <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" aria-hidden="true" />
                  {/* Full text, no clamp: the card grows instead of cutting a
                      feature mid-sentence. */}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Price + actions as a tinted panel bled to the card edges, so every
              card in a row anchors its price and button on the same line. */}
          <div className="-mx-5 -mb-5 mt-auto border-t border-slate-100 bg-slate-50 px-5 py-4">
            <div className="flex items-end justify-between gap-2">
              {course.price != null ? (
                <Price course={course} priceClassName="text-2xl" />
              ) : (
                <p className="text-sm font-semibold text-slate-500">Fee on request</p>
              )}
            </div>

            <Link
              href={course.link}
              title={course.linkTitle || course.title}
              className={`mt-3 flex w-full items-center justify-center gap-1.5 ${accent.button} rounded-xl py-2.5 text-sm font-semibold text-white transition-colors duration-200`}
            >
              {/* Hidden course name keeps the anchor text descriptive for
                  search engines and screen readers; visually unchanged. */}
              <span>
                Explore Course<span className="sr-only">: {course.title}</span>
              </span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <SyllabusButton
              course={course}
              source={source}
              className="w-full flex items-center justify-center text-slate-500 hover:text-slate-800 text-xs font-medium py-1.5 transition-colors duration-200"
            />
          </div>
        </div>
      </article>
    );
  }

  const variantTheme = VARIANTS[index % VARIANTS.length];
  const facts = [
    { label: "Duration", value: course.duration },
    { label: "Level", value: course.level },
    ...(hasStudents ? [{ label: "Learners", value: course.students! }] : []),
  ];

  return (
    <article
      hidden={hidden}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md [&[hidden]]:hidden ${
        subgrid ? "row-span-2 grid grid-rows-subgrid gap-0" : "flex h-full flex-col"
      } ${className}`}
    >
      <div className={`${variantTheme.header} px-5 py-4`}>
        <div className="mb-3 flex items-center justify-between">
          <Icon className="h-6 w-6 text-white/90" aria-hidden="true" />
          {course.popular && (
            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white ring-1 ring-white/30">
              <Zap className="h-3 w-3" aria-hidden="true" />
              Popular
            </span>
          )}
        </div>

        <h3 className="mb-1 text-lg font-bold leading-snug text-white">{course.title}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-white/80">{course.description}</p>
      </div>

      <div className="flex flex-grow flex-col gap-3 px-5 py-4">
        <ul className="space-y-1.5">
          {course.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" aria-hidden="true" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>

        {/* mt-auto pins the facts and buttons to the bottom, so they line up across a row. */}
        <dl className={`mt-auto grid ${facts.length === 3 ? "grid-cols-3" : "grid-cols-2"} gap-2 border-t border-slate-100 pt-3`}>
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{f.label}</dt>
              <dd className="text-sm font-bold text-slate-800">{f.value}</dd>
            </div>
          ))}
        </dl>

        {/* Price band: selling price, struck list price, discount chip. Cards
            without a published fee (ETL, SDET) render nothing here. */}
        {course.price != null && <Price course={course} className="border-t border-slate-100 pt-3" />}

        <div className="flex flex-col gap-1 pt-1">
          <Link
            href={course.link}
            title={course.linkTitle || course.title}
            className={`flex w-full items-center justify-center gap-1.5 ${variantTheme.button} rounded-lg py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90`}
          >
            {/* The hidden course name gives each link descriptive anchor text
                (for search engines and screen readers) instead of many
                identical "View Course Details" links; visually unchanged. */}
            <span>
              View Course Details<span className="sr-only">: {course.title}</span>
            </span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <SyllabusButton
            course={course}
            source={source}
            className="w-full flex items-center justify-center text-slate-500 hover:text-slate-800 text-sm font-medium py-2 transition-colors duration-200"
          />
        </div>
      </div>
    </article>
  );
}
