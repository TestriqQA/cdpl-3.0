"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Crown,
} from "lucide-react";
import type React from "react";
import Image from "next/image";

export type FeaturedEvent = {
  id: string | number;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  attendees: string | number;
  organization: string;
  purpose?: string;        // not shown
  highlights?: string[];   // not shown
  category: string;
  categoryColor: string;
  featured?: boolean;
  heroImageUrl?: string;
};

type StyleWithVars = React.CSSProperties & Record<string, string | number>;

const CATEGORY_STYLES: Record<
  string,
  { badgeBg: string; btnBg: string; text: string }
> = {
  "AI & Machine Learning": { badgeBg: "bg-purple-600", btnBg: "bg-purple-600", text: "text-purple-600" },
  "Software Testing": { badgeBg: "bg-green-600", btnBg: "bg-green-600", text: "text-green-600" },
  "Data Science": { badgeBg: "bg-blue-600", btnBg: "bg-blue-600", text: "text-blue-600" },
  "Academic Training": { badgeBg: "bg-brand", btnBg: "bg-brand", text: "text-brand" },
  "Web Development": { badgeBg: "bg-cyan-600", btnBg: "bg-cyan-600", text: "text-cyan-600" },
  "Industrial Training": { badgeBg: "bg-teal-600", btnBg: "bg-teal-600", text: "text-teal-600" },
  "Corporate Training": { badgeBg: "bg-pink-600", btnBg: "bg-pink-600", text: "text-pink-600" },
  Technology: { badgeBg: "bg-indigo-600", btnBg: "bg-indigo-600", text: "text-indigo-600" },
};
const FALLBACK = { badgeBg: "bg-slate-700", btnBg: "bg-slate-700", text: "text-slate-700" };

// Endless loop: clones of the edge cards sit at each end. When the track rests
// on a clone, the next step first jumps (no transition) to its real twin.

const GAP_PX = 24;
const CLONES = 3; // max cards per view
const SWIPE_PX = 40;

// Must match the --pv media queries below.
const readPerView = () =>
  window.matchMedia("(min-width: 1024px)").matches ? 3
    : window.matchMedia("(min-width: 768px)").matches ? 2
      : 1;
const readReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function EventsPastEventsFeaturedEventsSliderSection({
  events,
  autoplayMs = 4500,
  cardHClass = "h-[480px]",
}: {
  events: FeaturedEvent[];
  autoplayMs?: number;
  cardHClass?: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1 });

  const base = useMemo<FeaturedEvent[]>(() => events ?? [], [events]);
  const n = base.length;

  const [perView, setPerView] = useState(readPerView);
  const [reducedMotion, setReducedMotion] = useState(readReducedMotion);
  useEffect(() => {
    const queries = [
      "(min-width: 768px)",
      "(min-width: 1024px)",
      "(prefers-reduced-motion: reduce)",
    ].map((q) => window.matchMedia(q));
    const update = () => {
      setPerView(readPerView());
      setReducedMotion(readReducedMotion());
    };
    queries.forEach((q) => q.addEventListener("change", update));
    return () => queries.forEach((q) => q.removeEventListener("change", update));
  }, []);

  const canLoop = n > perView;
  const head = canLoop ? Math.min(CLONES, n) : 0;

  const slides = useMemo(() => {
    const real = base.map((event, i) => ({ event, real: i, clone: false, key: `${event.id}-${i}` }));
    if (!canLoop) return real;
    return [
      ...real.slice(-head).map((s) => ({ ...s, clone: true, key: `head-${s.key}` })),
      ...real,
      ...real.slice(0, head).map((s) => ({ ...s, clone: true, key: `tail-${s.key}` })),
    ];
  }, [base, canLoop, head]);

  // Index into `slides`; real cards are head .. head + n - 1.
  const [pos, setPos] = useState(head);
  const [animated, setAnimated] = useState(false);
  const posRef = useRef(pos);
  useEffect(() => {
    posRef.current = pos;
  }, [pos]);

  // Clone count changes across breakpoints.
  const [anchoredHead, setAnchoredHead] = useState(head);
  if (anchoredHead !== head) {
    setAnchoredHead(head);
    setPos(head);
    setAnimated(false);
  }

  const [paused, setPaused] = useState(false);

  const place = (p: number, animate: boolean) => {
    posRef.current = p;
    setAnimated(animate);
    setPos(p);
  };

  const step = (target: (from: number) => number) => {
    if (!canLoop) return;
    let from = posRef.current;
    if (from >= head + n) from -= n;
    else if (from < head) from += n;
    if (from !== posRef.current) {
      // Commit the jump before the animated step starts.
      flushSync(() => place(from, false));
      void trackRef.current?.offsetWidth;
    }
    place(target(from), true);
  };
  const next = () => step((p) => p + 1);
  const prev = () => step((p) => p - 1);
  const goTo = (i: number) => step(() => head + i);

  const activeDot = n ? (((pos - head) % n) + n) % n : 0;

  // Tabbing into an off-screen card.
  const reveal = (i: number) => {
    const offset = (i - activeDot + n) % n;
    if (offset >= perView) goTo(i);
  };

  useEffect(() => {
    if (!canLoop || paused || !inView || reducedMotion) return;
    const id = setInterval(next, autoplayMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canLoop, head, n, paused, inView, reducedMotion, autoplayMs]);

  // Touch only; mouse users have the arrows.
  const swipeStart = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);

  if (!n) return null;

  const trackStyle: StyleWithVars = {
    "--gap": `${GAP_PX}px`,
    gap: "var(--gap)",
    transform: `translateX(calc(${-pos} * (100% + var(--gap)) / var(--pv)))`,
  };

  return (
    <div
      ref={inViewRef}
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* clip, not hidden: focus can't scroll a clip box out of line */}
      <div
        className="overflow-clip touch-pan-y"
        style={{ paddingInline: "12px" }}
        aria-roledescription="carousel"
        onPointerDown={(e) => {
          swiped.current = false;
          swipeStart.current = e.pointerType === "mouse" ? null : { x: e.clientX, y: e.clientY };
        }}
        onPointerUp={(e) => {
          const s = swipeStart.current;
          swipeStart.current = null;
          if (!s) return;
          const dx = e.clientX - s.x;
          if (Math.abs(dx) < SWIPE_PX || Math.abs(dx) < Math.abs(e.clientY - s.y)) return;
          swiped.current = true;
          if (dx < 0) next();
          else prev();
        }}
        onPointerCancel={() => {
          swipeStart.current = null;
        }}
        onClickCapture={(e) => {
          if (!swiped.current) return;
          swiped.current = false;
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <style jsx>{`
          .slider-container {
            --pv: 1;
          }
          @media (min-width: 768px) {
            .slider-container {
              --pv: 2;
            }
          }
          @media (min-width: 1024px) {
            .slider-container {
              --pv: 3;
            }
          }
        `}</style>
        <div
          ref={trackRef}
          className={`flex slider-container ${animated ? "transition-transform duration-500 ease-out motion-reduce:transition-none" : ""}`}
          style={trackStyle}
        >
          {slides.map(({ event, real, clone, key }) => {
            const cs = CATEGORY_STYLES[event.category] ?? FALLBACK;

            return (
              <div
                key={key}
                aria-hidden={clone || undefined}
                inert={clone}
                onFocus={clone ? undefined : () => reveal(real)}
                className="box-border shrink-0 grow-0"
                style={{
                  flex: "0 0 calc((100% - (var(--gap) * (var(--pv) - 1))) / var(--pv))",
                }}
              >
                <article
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${cardHClass} flex flex-col`}
                >
                  {/* === FEATURED INDICATORS === */}
                  {event.featured && (
                    <>
                      <span className="sr-only">Featured</span>
                      <div className="absolute inset-x-0 top-0 h-[3px] bg-brand shadow-[0_0_6px_rgba(194,65,12,0.5)] z-10" />
                      <div className="absolute right-3 top-3 z-10">
                        <span className="inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-[11px] font-black uppercase tracking-wide text-white shadow-md ring-1 ring-white/60">
                          <Crown className="h-3.5 w-3.5" />
                          Featured
                        </span>
                      </div>
                    </>
                  )}

                  {/* Header */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 pt-10 md:pt-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {event.heroImageUrl ? (
                        <Image
                          src={event.heroImageUrl}
                          alt={event.title}
                          width={500}
                          height={500}
                          sizes="(max-width: 640px) 384px, (max-width: 1024px) 45vw, 30vw"
                          quality={60}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <Calendar className="h-16 w-16 text-purple-300" />
                      )}
                    </div>
                    <div className="absolute left-3 top-3 z-10">
                      <span className={`${cs.badgeBg} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md`}>
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)] min-h-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2">
                      {event.title}
                    </h3>

                    {event.subtitle && (
                      <p className={`${cs.text} text-sm font-semibold mb-3 line-clamp-1`}>
                        {event.subtitle}
                      </p>
                    )}

                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <span className="line-clamp-1">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="line-clamp-1">
                          {event.attendees} participants • {event.organization}
                        </span>
                      </div>
                    </div>

                    <div className="mt-auto shrink-0">
                      <Link href={`/events/${event.slug}`} aria-label={`View details about ${event.title}`}>
                        <button
                          className={`w-full text-white px-4 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer ${cs.btnBg}`}
                        >
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop/tablet arrows — half-outside, don't cover cards */}
      {canLoop && (
        <div className="pointer-events-none hidden md:block">
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="pointer-events-auto absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 rounded-2xl border border-white/70 bg-white/70 p-3 shadow-lg backdrop-blur-sm transition hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800 transition-transform group-active:scale-90" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="pointer-events-auto absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-2xl border border-white/70 bg-white/70 p-3 shadow-lg backdrop-blur-sm transition hover:bg-white"
          >
            <ChevronRight className="h-6 w-6 text-gray-800 transition-transform group-active:scale-90" />
          </button>
        </div>
      )}

      {/* Mobile arrows (below slider so they don't cover cards) */}
      {canLoop && (
        <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
          <button
            onClick={prev}
            aria-label="Previous"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm active:scale-95"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm active:scale-95"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Dots */}
      {canLoop && (
        <div className="mt-4 flex items-center justify-center gap-5">
          {base.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={[
                "relative h-2.5 rounded-full transition-all after:absolute after:-inset-4 after:content-['']",
                i === activeDot ? "w-6 bg-gray-900" : "w-2.5 bg-gray-300",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
