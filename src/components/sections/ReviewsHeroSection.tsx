// /src/components/sections/ReviewsHeroSection.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Star,
  ArrowRight,
  Quote,
  MessageSquareQuote,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Home,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { getAllReviews } from "@/data/reviews/reviewsData";
import SafeAvatar from "@/components/sections/SafeAvatar";
import { useSiteStats } from "@/components/stats/SiteStatsProvider";
import { REVIEW_PROFILES } from "@/lib/seo-config";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Reviews", href: "/reviews" },
];

const PLATFORMS = [
  { src: "/slider_logos/google-logo.svg", name: "Google", w: 64, h: 20, href: REVIEW_PROFILES.google },
  { src: "/slider_logos/sulekha.svg", name: "Sulekha", w: 75, h: 20, href: REVIEW_PROFILES.sulekha },
  { src: "/slider_logos/justdial.svg", name: "Justdial", w: 76, h: 20, href: REVIEW_PROFILES.justdial },
];

const ROTATE_MS = 6000;

/**
 * Reviews hero, in the site's hero style (About / Home): breadcrumbs, orange
 * pill, dark heading with an orange key phrase, brand CTAs. The right side
 * rotates through learner reviews; it pauses on hover or focus, and stays on
 * the first review under reduced motion (the dots still switch it).
 */
export default function ReviewsHeroSection() {
  const siteStats = useSiteStats();
  const allReviews = getAllReviews();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isPaused || reducedMotion || allReviews.length < 2) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allReviews.length);
    }, ROTATE_MS);
    return () => clearInterval(interval);
  }, [allReviews.length, isPaused, reducedMotion]);

  const review = allReviews[activeIndex];
  const stars = Math.round(review.rating);

  const STATS = [
    { label: "Learner Rating", val: siteStats.text.rating, Icon: Star, tile: "bg-brand", text: "text-brand" },
    { label: "Active Learners", val: "12k+", Icon: TrendingUp, tile: "bg-sky-600", text: "text-sky-700" },
    { label: "Completion Rate", val: "94%", Icon: CheckCircle2, tile: "bg-emerald-600", text: "text-emerald-700" },
  ];

  return (
    <section aria-labelledby="reviews-heading" className="relative isolate overflow-hidden">
      {/* Background glows, as on the About hero */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -right-24 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={c.href} className="flex items-center gap-2">
                  {i === 0 ? <Home className="h-4 w-4" aria-hidden="true" /> : <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                  <Link
                    href={c.href}
                    aria-current={isLast ? "page" : undefined}
                    className={`transition-colors hover:text-brand ${isLast ? "font-semibold text-slate-900" : ""}`}
                  >
                    {c.label}
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* LEFT — copy */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
              <MessageSquareQuote className="h-4 w-4" aria-hidden="true" />
              Student Reviews &amp; Testimonials
            </span>

            <h1 id="reviews-heading" className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Stories that <span className="text-brand">inspire action</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Join thousands of professionals who accelerated their careers with Cinute Digital.
              Real feedback from real students, verified by top platforms.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#all-reviews"
                className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 sm:w-auto"
              >
                Read All Reviews <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/courses"
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 sm:w-auto"
              >
                Explore Courses
              </Link>
            </div>

            {/* Quick stats */}
            <ul className="mt-8 grid grid-cols-3 gap-3">
              {STATS.map(({ label, val, Icon, tile, text }) => (
                <li key={label} className="rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm sm:p-4">
                  <span className={`grid h-8 w-8 place-items-center rounded-lg text-white ${tile}`}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className={`mt-2 text-xl font-extrabold leading-none sm:text-2xl ${text}`}>{val}</p>
                  <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">{label}</p>
                </li>
              ))}
            </ul>

            {/* Platforms */}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-200/70 pt-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Verified on</span>
              {PLATFORMS.map(({ src, name, w, h, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Read CDPL reviews on ${name}`}
                  aria-label={`Read CDPL reviews on ${name} (opens in a new tab)`}
                  className="rounded-md opacity-90 transition hover:-translate-y-0.5 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                >
                  <Image src={src} width={w} height={h} alt={name} className="h-5 w-auto" />
                </a>
              ))}
              <span className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                Reviews from real alumni
              </span>
            </div>
          </div>

          {/* RIGHT — rotating review */}
          <div
            className="relative lg:col-span-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            <div aria-hidden="true" className="absolute inset-8 rounded-full bg-brand/20 blur-3xl" />

            <div className="relative mx-auto w-full max-w-[460px]">
              {/* Back layers for depth */}
              <div aria-hidden="true" className="absolute inset-x-6 -bottom-3 top-3 rounded-3xl border border-orange-100 bg-white/70 shadow-sm" />
              <div aria-hidden="true" className="absolute inset-x-12 -bottom-6 top-6 rounded-3xl border border-orange-100/70 bg-white/40" />

              <figure className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />

                <div className="flex items-start justify-between gap-4">
                  <figcaption className="flex items-center gap-4">
                    <div className="relative">
                      <SafeAvatar name={review.name} sizes="56px" className="!h-14 !w-14 rounded-full border-4 border-white shadow-md" />
                      <span className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full border-2 border-white bg-brand text-white">
                        <Quote className="h-3 w-3 fill-current" aria-hidden="true" />
                      </span>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">{review.name}</p>
                      <p className="text-sm text-slate-600">{review.role}</p>
                    </div>
                  </figcaption>
                  <div className="flex shrink-0 items-center gap-1" role="img" aria-label={`Rated ${review.rating} out of 5`}>
                    <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" aria-hidden="true" />
                    <span className="text-sm font-bold text-slate-800">{review.rating.toFixed(1)}</span>
                  </div>
                </div>

                <div className="mt-3 flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < stars ? "fill-amber-400 stroke-amber-400" : "fill-slate-100 stroke-slate-200"}`} />
                  ))}
                </div>

                {/* Fixed height so the card does not jump between reviews */}
                <blockquote className="mt-4 min-h-[9rem] text-base font-medium leading-relaxed text-slate-700 sm:min-h-[10.5rem] sm:text-lg">
                  <p className="line-clamp-6 sm:line-clamp-5">&ldquo;{review.quote}&rdquo;</p>
                </blockquote>

                <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                  <span className="rounded-lg bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-100">
                    {review.course}
                  </span>
                  {review.company && (
                    <span className="rounded-lg bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                      Placed at {review.company}
                    </span>
                  )}
                </div>
              </figure>

              {/* Rating badge */}
              <a
                href={REVIEW_PROFILES.google}
                target="_blank"
                rel="noopener noreferrer"
                title="Read CDPL reviews on Google"
                aria-label={`Rated ${siteStats.text.rating} from ${siteStats.text.reviews} Google reviews (opens in a new tab)`}
                className="absolute -left-3 -top-5 hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:flex lg:-left-8"
              >
                <Image src="/slider_logos/google.svg" width={48} height={16} alt="Google" className="h-4 w-auto" />
                <span className="text-sm font-bold text-slate-900">{siteStats.text.rating}</span>
                <span className="text-xs text-slate-500">· {siteStats.text.reviews} reviews</span>
              </a>
            </div>

            {/* Dots */}
            <div className="relative mt-10 flex flex-wrap justify-center gap-1.5" role="group" aria-label="Choose a review">
              {allReviews.map((r, i) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show review ${i + 1} of ${allReviews.length}, by ${r.name}`}
                  aria-current={i === activeIndex ? "true" : undefined}
                  className={`h-2 cursor-pointer rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${i === activeIndex ? "w-6 bg-brand" : "w-2 bg-slate-300 hover:bg-orange-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
