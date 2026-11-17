"use client";

// The one course card used across the site (homepage, /courses, category
// hubs). Design from the homepage "Explore Our Industry-Ready Courses" grid:
// coloured header with icon, a subtle "Popular" tag, title and a 2-line
// description; three plain features; duration / level / learners as labelled
// columns; one solid button plus a text-style syllabus link.

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle,
  Code,
  Cog,
  Cpu,
  Database,
  Download,
  FileSpreadsheet,
  Gauge,
  GraduationCap,
  LayoutGrid,
  Megaphone,
  PieChart,
  Rocket,
  Shield,
  Smartphone,
  Sparkles,
  TrendingUp,
  Trophy,
  Briefcase,
  Workflow,
  Zap,
} from "lucide-react";
import { FaChartBar } from "react-icons/fa6";
import { DownloadFormButton } from "@/components/DownloadForm";

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
  popular?: boolean;
  /** Course page URL. */
  link: string;
  /** title attribute for the course link; defaults to the course title. */
  linkTitle?: string;
  features: string[];
  /** Direct PDF for the syllabus download form. */
  syllabusLink?: string;
  icon?: CourseCardIcon | string;
};

// Header / button colours rotate by position in the grid.
const VARIANTS = [
  { header: "bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white", button: "bg-indigo-600" },
  { header: "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white", button: "bg-emerald-600" },
  { header: "bg-gradient-to-br from-rose-600 via-pink-600 to-orange-500 text-white", button: "bg-rose-600" },
];

export default function CourseCard({
  course,
  index,
  hidden = false,
  subgrid = false,
  className = "",
  source,
}: {
  course: CourseCardData;
  /** Position among visible cards; picks the header colour. */
  index: number;
  hidden?: boolean;
  /**
   * Span two rows of the parent grid as a subgrid (header row, body row) so
   * headers in a row line up. Only when the card is a direct grid child.
   */
  subgrid?: boolean;
  className?: string;
  /** Lead source for the syllabus form. */
  source?: string;
}) {
  const variant = VARIANTS[index % VARIANTS.length];
  const Icon = COURSE_CARD_ICONS[(course.icon ?? "BookOpen") as CourseCardIcon] ?? BookOpen;
  const hasStudents = !!course.students && /\d/.test(course.students);
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
      <div className={`${variant.header} px-5 py-4`}>
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

        <div className="flex flex-col gap-1 pt-1">
          <Link
            href={course.link}
            title={course.linkTitle || course.title}
            className={`flex w-full items-center justify-center gap-1.5 ${variant.button} rounded-lg py-2.5 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90`}
          >
            {/* The hidden course name gives each link descriptive anchor text
                (for search engines and screen readers) instead of many
                identical "View Course Details" links; visually unchanged. */}
            <span>
              View Course Details<span className="sr-only">: {course.title}</span>
            </span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

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
            buttonClassName="w-full flex items-center justify-center text-slate-500 hover:text-slate-800 text-sm font-medium py-2 transition-colors duration-200"
            onSubmit={() => {}}
          />
        </div>
      </div>
    </article>
  );
}
