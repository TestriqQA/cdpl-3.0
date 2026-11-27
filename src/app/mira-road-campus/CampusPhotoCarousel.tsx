"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";

/** Time each slide stays before the carousel moves on. */
const AUTOPLAY_MS = 4000;

type Photo = { alt: string; src?: string };

/**
 * Looping photo carousel for the campus page: 1 photo per view on phones, 2 on
 * tablets, 3 on desktop. Moves on by itself and wraps from the last photo back
 * to the first; swipeable (native scroll-snap), with arrows and dots. Pauses
 * while hovered or focused, and does not auto-play under reduced motion.
 * A photo without `src` renders a labelled placeholder (real photos only, never
 * stock; see CAMPUS_PHOTOS).
 */
export default function CampusPhotoCarousel({ photos }: { photos: readonly Photo[] }) {
  const id = useId();
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const count = photos.length;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const scrollToSlide = useCallback((i: number) => {
    const el = track.current;
    const slide = el?.children[i] as HTMLElement | undefined;
    if (el && slide) el.scrollTo({ left: slide.offsetLeft, behavior: reducedMotion ? "auto" : "smooth" });
  }, [reducedMotion]);

  // Wraps at both ends. Once the last photos are all in view the track cannot
  // scroll further, so "next" from there goes back to the first photo.
  const next = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    scrollToSlide(atEnd ? 0 : Math.min(index + 1, count - 1));
  }, [count, index, scrollToSlide]);

  const prev = useCallback(() => {
    const el = track.current;
    if (!el) return;
    if (el.scrollLeft <= 4) el.scrollTo({ left: el.scrollWidth, behavior: reducedMotion ? "auto" : "smooth" });
    else scrollToSlide(Math.max(index - 1, 0));
  }, [index, reducedMotion, scrollToSlide]);

  // The active slide follows the scroll position, so swipes and arrows agree.
  const onScroll = () => {
    const el = track.current;
    const first = el?.children[0] as HTMLElement | undefined;
    const second = el?.children[1] as HTMLElement | undefined;
    if (!el || !first) return;
    const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
    setIndex(Math.min(count - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  };

  useEffect(() => {
    if (paused || reducedMotion || count < 2) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") next();
    }, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, count, next]);

  const arrow =
    "absolute top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white/95 text-slate-700 shadow-md transition hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of the CDPL Mira Road campus"
      className="relative mt-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <ul
        id={id}
        ref={track}
        onScroll={onScroll}
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 motion-reduce:scroll-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map(({ alt, src }, i) => (
          <li
            key={alt}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
          >
            <figure className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              {src ? (
                <Image
                  src={src}
                  alt={alt}
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="grid aspect-[4/3] place-items-center border-b border-dashed border-slate-300 bg-slate-50 text-slate-400">
                  <span className="flex flex-col items-center gap-1 text-xs font-semibold uppercase tracking-wider">
                    <Camera className="h-6 w-6" aria-hidden="true" />
                    Photo coming soon
                  </span>
                </div>
              )}
              <figcaption className="p-3 text-sm text-slate-600">{alt}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {count > 1 && (
        <>
          <button type="button" onClick={prev} aria-controls={id} aria-label="Previous photo" className={`${arrow} -left-2 sm:-left-4`}>
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" onClick={next} aria-controls={id} aria-label="Next photo" className={`${arrow} -right-2 sm:-right-4`}>
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {photos.map(({ alt }, i) => (
              <button
                key={alt}
                type="button"
                onClick={() => scrollToSlide(i)}
                aria-controls={id}
                aria-label={`Show photo ${i + 1}: ${alt}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-brand" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
