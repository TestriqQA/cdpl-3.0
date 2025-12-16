"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Sparkles } from "lucide-react";

import { getAllReviews, type StudentReview } from "@/data/reviews/reviewsData";
import SafeAvatar from "@/components/sections/SafeAvatar";

const spanClasses: Record<NonNullable<StudentReview["span"]>, string> = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-1",
  tall: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
  big: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2",
};

const colsForWidth = (w: number) => (w >= 1024 ? 4 : w >= 768 ? 3 : w >= 640 ? 2 : 1);

// Card color variants for visual variety
const cardVariants = [
  { bg: "bg-white", border: "border-slate-100", accent: "from-orange-100/50 to-amber-50/30" },
  { bg: "bg-white", border: "border-slate-100", accent: "from-blue-100/50 to-indigo-50/30" },
  { bg: "bg-white", border: "border-slate-100", accent: "from-violet-100/50 to-purple-50/30" },
  { bg: "bg-white", border: "border-slate-100", accent: "from-emerald-100/50 to-teal-50/30" },
  { bg: "bg-white", border: "border-slate-100", accent: "from-rose-100/50 to-pink-50/30" },
];

export default function ReviewsFeedbackSection() {
  const REVIEWS = useMemo(() => getAllReviews(), []);
  const ROWS_PER_PAGE = 3;
  const [perPage, setPerPage] = useState<number>(12);
  const [visible, setVisible] = useState<number>(12);

  useEffect(() => {
    const compute = () => {
      const cols = colsForWidth(window.innerWidth);
      const pp = cols * ROWS_PER_PAGE;
      setPerPage(pp);
      setVisible((v) => (v === 12 ? pp : Math.max(pp, v)));
    };
    compute();
    let t: number | undefined;
    const onResize = () => {
      clearTimeout(t);
      t = window.setTimeout(compute, 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, []);

  const canLoadMore = visible < REVIEWS.length;

  return (
    <section
      id="all-reviews"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white"
      aria-label="Student success stories and testimonials"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 to-slate-50 border border-slate-200 rounded-full px-4 py-2 mb-5 shadow-sm">
              <Sparkles className="h-4 w-4 text-orange-500" />
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                Alumni Testimonials
              </span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            <span className="text-slate-900">What Our </span>
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Alumni Say
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            All reviewers are ex-students from{" "}
            <span className="font-semibold text-slate-800">Testing</span>,{" "}
            <span className="font-semibold text-slate-800">Data Analyst</span>,{" "}
            <span className="font-semibold text-slate-800">Data Science</span>, and{" "}
            <span className="font-semibold text-slate-800">Marketing</span> programs,
            sharing how CDPL prepared them for the industry.
          </motion.p>
        </header>

        {/* Reviews Grid */}
        <ul
          className="
            grid grid-cols-1 gap-5
            [grid-auto-rows:auto]
            sm:grid-cols-2 sm:[grid-auto-rows:minmax(11rem,_auto)]
            md:grid-cols-3 md:[grid-auto-rows:minmax(12rem,_auto)]
            lg:grid-cols-4 lg:[grid-auto-rows:minmax(13rem,_auto)]
            grid-flow-dense
          "
        >
          <AnimatePresence mode="popLayout">
            {REVIEWS.slice(0, visible).map((r, index) => {
              const variant = cardVariants[index % cardVariants.length];
              return (
                <motion.li
                  key={r.id}
                  layout
                  initial={{ scale: 0.95, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
                  className={[
                    "group relative overflow-hidden rounded-2xl border backdrop-blur-sm",
                    "shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-slate-900/10",
                    "transition-all duration-300 hover:-translate-y-1",
                    variant.bg,
                    variant.border,
                    spanClasses[r.span ?? "normal"],
                  ].join(" ")}
                >
                  <article className="flex h-full flex-col relative">
                    {/* Gradient accent */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${variant.accent} rounded-bl-full opacity-60`}
                    />

                    {/* Quote icon */}
                    <div className="absolute top-4 right-4 text-slate-200 group-hover:text-orange-200 transition-colors">
                      <Quote className="h-8 w-8 fill-current" />
                    </div>

                    <div className="flex-1 p-5 relative z-10">
                      {/* Stars */}
                      <div className="mb-3 inline-flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 transition-colors ${i + 0.01 < r.rating
                                ? "text-amber-400 fill-current"
                                : "text-slate-200"
                              }`}
                          />
                        ))}
                        <span className="ml-2 text-xs font-semibold text-slate-500">
                          {r.rating.toFixed(1)}
                        </span>
                      </div>

                      {/* Quote */}
                      <blockquote
                        className="text-sm leading-relaxed text-slate-700 sm:line-clamp-6 group-hover:text-slate-800 transition-colors"
                        itemProp="reviewBody"
                      >
                        "{r.quote}"
                      </blockquote>
                    </div>

                    {/* Footer */}
                    <footer className="mt-auto flex items-center gap-3 border-t border-slate-100 bg-gradient-to-r from-slate-50/80 to-white/80 backdrop-blur-sm p-4">
                      <div className="ring-2 ring-orange-100 ring-offset-1 rounded-full">
                        <SafeAvatar name={r.name} />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-slate-900" itemProp="author">
                          <span itemProp="name">{r.name}</span>
                        </p>
                        <p className="truncate text-xs text-slate-500">
                          {r.role} • {r.course}
                        </p>
                      </div>
                    </footer>

                    {/* Hover border effect */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-orange-500/0 transition-all duration-300 group-hover:ring-2 group-hover:ring-orange-500/20" />
                  </article>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>

        {/* Load More / CTA */}
        <div className="mt-10 flex justify-center">
          {canLoadMore ? (
            <motion.button
              type="button"
              onClick={() => setVisible((v) => Math.min(v + perPage, REVIEWS.length))}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-sm font-semibold cursor-pointer text-white shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
              aria-label="View more reviews"
            >
              <span>Load More Reviews</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          ) : (
            <a
              href="#cta-join"
              onClick={(e) => {
                e.preventDefault();
                const CTA_IDS = ["cta-join", "apply", "cta", "join", "hero-cta"];
                const HEADER_OFFSET = 80;
                const el = CTA_IDS.map((id) => document.getElementById(id)).find(Boolean);
                if (el) {
                  const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
                  window.scrollTo({ top: y, behavior: "smooth" });
                } else {
                  window.location.hash = "cta-join";
                }
              }}
              className="inline-flex items-center gap-2 text-base text-slate-600 cursor-pointer hover:text-orange-500 font-medium transition-colors"
              aria-label="Jump to application call-to-action"
              title="Jump to apply"
            >
              <span>That&apos;s all!</span>
              <span className="text-orange-500 font-bold">Join 1,000+ successful students →</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
