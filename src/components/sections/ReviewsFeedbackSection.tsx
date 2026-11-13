"use client";

import { useMemo, useState } from "react";
import { Star, Filter, ShieldCheck, Trophy, BadgeCheck } from "lucide-react";

import { getAllReviews, type StudentReview } from "@/data/reviews/reviewsData";
import SafeAvatar from "@/components/sections/SafeAvatar";
import { SiteStat } from "@/components/stats/SiteStatsProvider";

// --- Configuration ---
const FILTERS = [
  { id: "all", label: "All Reviews" },
  { id: "testing", label: "Software Testing" },
  { id: "data", label: "Data & Analytics" },
  { id: "marketing", label: "Digital Marketing" },
];

const PAGE_SIZE = 8;

function getCategory(role: string): string {
  if (["Software Testing", "QA Engineer"].includes(role)) return "testing";
  if (["Data Analyst", "Data Scientist"].includes(role)) return "data";
  if (["Digital Marketing"].includes(role)) return "marketing";
  return "other";
}

// --- Components ---

function ReviewCard({ review }: { review: StudentReview }) {
  const stars = Math.round(review.rating);

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <SafeAvatar
            name={review.name}
            sizes="48px"
            className="!h-12 !w-12 shrink-0 rounded-full ring-2 ring-slate-100 transition-all group-hover:ring-orange-100"
          />
          <div className="min-w-0">
            <h3 className="flex items-center gap-1.5 text-base font-bold text-slate-900">
              {review.name}
              <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-600" aria-label="Verified learner" />
            </h3>
            <p className="text-xs font-medium text-slate-500">{review.role}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <div className="flex items-center gap-0.5" role="img" aria-label={`Rated ${review.rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                aria-hidden="true"
                className={`h-3.5 w-3.5 ${i < stars ? "fill-amber-400 stroke-amber-400" : "fill-slate-100 stroke-slate-200"}`}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-slate-600">{review.rating.toFixed(1)}</span>
        </div>
      </div>

      <span className="mt-4 self-start rounded-md bg-orange-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-700 ring-1 ring-orange-100">
        {review.course}
      </span>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{review.quote}</p>

      {review.company && (
        <p className="mt-4 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">Placed at {review.company}</p>
      )}
    </article>
  );
}

export default function ReviewsFeedbackSection() {
  const allReviews = useMemo(() => getAllReviews(), []);

  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredReviews = useMemo(() => {
    if (activeFilter === "all") return allReviews;
    return allReviews.filter((r) => getCategory(r.role) === activeFilter);
  }, [allReviews, activeFilter]);

  const displayReviews = filteredReviews.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredReviews.length;

  const handleFilterChange = (id: string) => {
    setActiveFilter(id);
    setVisibleCount(PAGE_SIZE); // Reset pagination on filter change
  };

  return (
    <section id="all-reviews" aria-labelledby="all-reviews-heading" className="scroll-mt-20 bg-slate-50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* --- LEFT: header, stats and filters (sticky on desktop) --- */}
          <div className="space-y-8 lg:sticky lg:top-24 lg:col-span-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
                <Trophy className="h-4 w-4" aria-hidden="true" />
                Student Success
              </span>
              <h2 id="all-reviews-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Real results. <span className="text-brand">Real reviews.</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Explore how professionals transformed their careers. Filter by your domain to see relevant stories.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
                <p className="text-3xl font-extrabold tracking-tight text-brand"><SiteStat k="ratingValue" /></p>
                <p className="mt-1 text-sm font-semibold text-slate-700">Avg Rating</p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-emerald-600" />
                <p className="text-3xl font-extrabold tracking-tight text-emerald-600"><SiteStat k="studentsPlaced" /></p>
                <p className="mt-1 text-sm font-semibold text-slate-700">Alumni Placed</p>
              </div>
            </div>

            <div>
              <p id="review-filter-label" className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600">
                <Filter className="h-3 w-3" aria-hidden="true" />
                Filter by Role
              </p>
              <div className="flex flex-wrap gap-2" role="group" aria-labelledby="review-filter-label">
                {FILTERS.map((f) => {
                  const active = activeFilter === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => handleFilterChange(f.id)}
                      aria-pressed={active}
                      className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 ${active
                        ? "border-brand bg-brand text-white shadow-md"
                        : "border-slate-200 bg-white text-slate-700 hover:border-brand hover:text-brand"
                        }`}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 lg:flex">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">100% Verified</p>
                <p className="text-xs text-slate-500">Reviews from actual students</p>
              </div>
            </div>
          </div>

          {/* --- RIGHT: feed --- */}
          <div className="space-y-6 lg:col-span-8">
            <p className="border-b border-slate-200 pb-4 text-sm font-semibold text-slate-500" aria-live="polite">
              Showing {displayReviews.length} of {filteredReviews.length} reviews
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {displayReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>

            {canLoadMore ? (
              <div className="flex justify-center pt-4">
                <button
                  type="button"
                  onClick={() => setVisibleCount((c) => c + 6)}
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
                >
                  Load More Stories
                </button>
              </div>
            ) : (
              filteredReviews.length > 0 && (
                <p className="py-6 text-center text-sm font-medium text-slate-400">You&apos;ve reached the end of the list.</p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
