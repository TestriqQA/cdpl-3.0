"use client";

import React from "react";
import type { CourseData } from "@/types/courseData";
import {
  BookOpen,
  CheckCircle,
  Zap,
  Gauge,
  Shield,
  Smartphone,
  ArrowRight,
  Star,
  Users,
  Clock,
  Download,
  Sparkles,
} from "lucide-react";
import { DownloadFormButton } from "@/components/DownloadForm";
import Link from "next/link";

interface CourseOverviewSectionProps {
  data: CourseData;
}

interface Module {
  name: string;
  description: string;
  icon: string;
  rating?: number;
  duration?: string;
  level?: string;
  studentsEnrolled?: number;
  features?: string[];
  trending?: boolean;
  offerEndsAt?: string | Date;
  topics?: string[];
  link: string;
}

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-10 h-10" />,
  CheckCircle: <CheckCircle className="w-10 h-10" />,
  Zap: <Zap className="w-10 h-10" />,
  Gauge: <Gauge className="w-10 h-10" />,
  Shield: <Shield className="w-10 h-10" />,
  Smartphone: <Smartphone className="w-10 h-10" />,
};

type Variant = {
  header: string;
  button: string;
  hoverBorder: string;
};

const VARIANTS: Variant[] = [
  {
    header:
      "bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white",
    button: "bg-gradient-to-r from-indigo-600 to-fuchsia-600",
    hoverBorder: "hover:border-indigo-300",
  },
  {
    header:
      "bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white",
    button: "bg-gradient-to-r from-emerald-600 to-cyan-600",
    hoverBorder: "hover:border-emerald-300",
  },
  {
    header:
      "bg-gradient-to-br from-rose-600 via-pink-600 to-orange-500 text-white",
    button: "bg-gradient-to-r from-rose-600 to-orange-500",
    hoverBorder: "hover:border-rose-300",
  },
];

// Explicitly typed pickVariant function
const pickVariant = (i: number): Variant => {
  return VARIANTS[i % VARIANTS.length];
};

const pad = (n: number) => n.toString().padStart(2, "0");

// Self-ticking countdown leaf. Owns its OWN 1s interval so only this small
// component re-renders each second, instead of the parent re-reconciling the
// entire card grid. Markup preserved byte-for-byte from the original inline
// timer block (responsive sizing + mt-0.5 labels differ from the shared
// OfferCountdown, so this stays local). Falls back to a 48h window.
const OfferCountdown: React.FC<{ offerEndsAt?: string | Date | null }> = ({
  offerEndsAt,
}) => {
  const deadlineRef = React.useRef<number>(
    offerEndsAt
      ? new Date(offerEndsAt).getTime()
      : Date.now() + 48 * 3600 * 1000
  );
  const [now, setNow] = React.useState<number>(() => Date.now());

  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, deadlineRef.current - now);
  const totalSeconds = Math.floor(diff / 1000);
  const hours = pad(Math.floor(totalSeconds / 3600));
  const minutes = pad(Math.floor((totalSeconds % 3600) / 60));
  const seconds = pad(totalSeconds % 60);
  const isOver = diff <= 0;

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold text-slate-600 mb-2">
        Limited-time offer ends in
      </p>

      <div
        className="grid grid-cols-3 gap-2 sm:gap-3 text-center"
        role="timer"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="rounded-lg bg-white shadow-sm p-2 sm:p-3">
          <div
            className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums"
            suppressHydrationWarning
          >
            {hours}
          </div>
          <div className="text-[9px] sm:text-[10px] text-slate-500 tracking-wide uppercase mt-0.5">
            Hours
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-sm p-2 sm:p-3">
          <div
            className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums"
            suppressHydrationWarning
          >
            {minutes}
          </div>
          <div className="text-[9px] sm:text-[10px] text-slate-500 tracking-wide uppercase mt-0.5">
            Minutes
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-sm p-2 sm:p-3">
          <div
            className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums"
            suppressHydrationWarning
          >
            {seconds}
          </div>
          <div className="text-[9px] sm:text-[10px] text-slate-500 tracking-wide uppercase mt-0.5">
            Seconds
          </div>
        </div>
      </div>

      {isOver && (
        <p className="mt-2 text-xs text-red-600 font-semibold">
          Offer has ended.
        </p>
      )}
    </div>
  );
};

const ModuleCard: React.FC<{
  category: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    rating: number;
    duration: string;
    level: string;
    studentsEnrolled: number;
    features: string[];
    trending?: boolean;
    offerEndsAt?: Date | null;
    link: string;
  };
  variant: Variant;
  location?: string;
  courseName?: string;
}> = ({ category, variant, location, courseName }) => {
  return (
    <>
      <article
        className={`relative group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 ${variant.hoverBorder} transform hover:-translate-y-2 flex flex-col h-full`}
      >
        <div className={`${variant.header} p-6 relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <div
                className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg"
                aria-label={`Rating ${category.rating.toFixed(1)} out of 5`}
              >
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold text-gray-800">
                  {category.rating.toFixed(1)}
                </span>
              </div>
            </div>

            {category.trending && (
              <span className="inline-flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-lg">
                <Zap className="w-3 h-3" />
                TRENDING
              </span>
            )}

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
              {category.title}
            </h3>

            <p className="text-white/90 text-sm leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex items-center space-x-2 text-slate-700">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="font-medium">{category.duration}</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-xs font-semibold">
                {category.level}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-slate-700 bg-slate-50 rounded-lg p-3">
            <Users className="w-4 h-4 text-purple-500" />
            <span className="font-medium">
              {category.studentsEnrolled.toLocaleString()}+ students enrolled
            </span>
          </div>

          <ul className="space-y-2 flex-grow">
            {category.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start space-x-2 text-sm text-slate-700"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <OfferCountdown offerEndsAt={category.offerEndsAt} />

          <div className="pt-4 space-y-3 mt-auto">
            <Link
              href={category.link}
              aria-label={category.title}
              className={`flex items-center justify-center gap-2 w-full ${variant.button} text-white font-semibold py-3 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}
            >
              <span>View Course Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <DownloadFormButton
              courseTitle={category.title}
              buttonText={
                <span className="flex items-center justify-center cursor-pointer gap-2">
                  <Download className="w-5 h-5" />
                  <span>Download Brochure</span>
                </span> as unknown as string
              }
              // keep existing button styling for a perfect drop-in look
              buttonClassName="w-full flex items-center justify-center space-x-2 text-slate-700 font-semibold py-3 rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
              location={location}
              source={`${location ? location + ' City ' : ''}${courseName || 'Course'} Page - ${category.title} - Course Overview Section - Download Brochure Button`}
              onSubmit={(values) => {
                // your custom submit logic (API call, analytics, start file download, etc.)
                console.log("Download form submitted:", { ...values, course: category.title });
              }}
            />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/0 group-hover:from-black/0 group-hover:to-black/0 transition-all duration-500 pointer-events-none" />
      </article>
    </>
  );
};

const CourseOverviewSection: React.FC<CourseOverviewSectionProps> = ({ data }) => {
  const { courseOverviewContent } = data;

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-fuchsia-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-cyan-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-10 sm:mb-14"
        >
          <p
            className="text-sm font-semibold tracking-wider text-indigo-600 uppercase mb-3"
          >
            Course Structure
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4"
          >
            {courseOverviewContent.title}
          </h2>
          <p
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            {courseOverviewContent.description}
          </p>
          {courseOverviewContent.subtitle && (
            <p
              className="text-sm sm:text-base text-slate-500 mt-3"
            >
              {courseOverviewContent.subtitle}
            </p>
          )}
        </div>

        {/* City Career Hub - SEO Highlight */}
        {data.localJobMarketInsight && (
          <div
            className="mb-12 sm:mb-16 p-4 sm:p-6 bg-indigo-50/50 rounded-2xl border border-indigo-100 flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
              <Sparkles className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-1 flex items-center gap-2">
                City Career Hub: {data.location}
                <span className="text-xs font-medium px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full">Localized Insight</span>
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {data.localJobMarketInsight}
              </p>
            </div>
          </div>
        )}

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {courseOverviewContent.modules.map((mod: Module, idx) => {
            const variant = pickVariant(idx);
            const category = {
              id: idx,
              title: mod.name,
              description: mod.description,
              icon: iconMap[mod.icon] || <BookOpen className="w-10 h-10" />,
              rating: typeof mod.rating === "number" ? mod.rating : 4.8,
              duration: mod.duration ?? "6–8 weeks",
              level: mod.level ?? "Beginner",
              studentsEnrolled:
                typeof mod.studentsEnrolled === "number"
                  ? mod.studentsEnrolled
                  : 2200 + idx * 17,
              features:
                Array.isArray(mod.features) && mod.features.length
                  ? mod.features
                  : (mod.topics ?? []).slice(0, 4),
              trending: !!mod.trending,
              offerEndsAt: mod.offerEndsAt ? new Date(mod.offerEndsAt) : null,
              // ✅ FIX: ensure `link` is present to satisfy ModuleCard props
              link: mod.link ?? "#",
            } as const;

            return (
              <ModuleCard
                key={idx}
                category={category}
                variant={variant}
                location={data.location} // Pass location to the card
                courseName={data.courseName} // Pass courseName for source construction
              />
            );
          })}
        </div>

        <div
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-slate-600 mb-6">
            Ready to explore all modules in detail?
          </p>
          <button
            onClick={() => {
              const section = document.getElementById('curriculum-section');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="px-6 sm:px-8 py-3 sm:py-4 cursor-pointer bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            View Full Curriculum
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseOverviewSection;
