"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Play, Share2, X, Sparkles, Clock, Star } from "lucide-react";
import { createPortal } from "react-dom";

/* ----------------------------- Types --------------------------------- */
export type VideoTestimonial = {
  id: string;
  title: string;
  person: string;
  role?: string;
  company?: string;
  city?: string;
  src: string;    // mp4 or YouTube embed url
  poster: string; // preview image
  duration?: string; // "2:31"
  tags?: string[];
  rating?: number;   // 0-5
  transcript?: string;
};

export type JobsLiveJobsVideoTestimonialsSectionProps = {
  heading?: string;
  subheading?: string;
  videos?: VideoTestimonial[];
  defaultTag?: string | null; // kept for API compatibility (not used now)
};

/* ----------------------------- Sample Data --------------------------- */
const DEFAULT_VIDEOS: VideoTestimonial[] = [
  {
    id: "bhagyesh-suresh-mahadik",
    title: "Placed as Manual Tester at Interactive Brokers",
    person: "Bhagyesh Suresh Mahadik",
    role: "Manual Tester",
    company: "Interactive Brokers",
    src: "/live-jobs_images/bhagyesh_suresh_mahadik.mp4",
    poster: "/live-jobs_images/video_testimonial_thumbnail.png",
    tags: ["Live Jobs", "Manual Testing"],
    rating: 5,
    transcript:
      "Secured a Manual Testing role after hands-on practice with test cases, bug reports, and mentor feedback.",
  },
  {
    id: "rucha-arun-pawar",
    title: "Placed in Manual & Automation Testing",
    person: "Rucha Arun Pawar",
    role: "QA Engineer (Manual & Automation)",
    src: "/live-jobs_images/rucha_arun_pawar.mp4",
    poster: "/live-jobs_images/video_testimonial_thumbnail.png",
    tags: ["Live Jobs", "Manual Testing", "Automation"],
    rating: 5,
    transcript:
      "From fundamentals to frameworks—built test suites and automation scripts that impressed interviewers.",
  },
  /* 
  {
    id: "vidhi-gohil",
    title: "Placed as Manual Software Tester",
    person: "Vidhi Gohil",
    role: "Manual Software Tester",
    src: "/live-jobs_images/vidhi_gohil.mp4",
    poster: "/live-jobs_images/video_testimonial_thumbnail.png",
    tags: ["Live Jobs", "Manual Testing"],
    rating: 5,
    transcript:
      "Gained confidence through real defect triage, test planning, and interview prep with mentors.",
  }
  */
];

/* ----------------------------- Helpers ------------------------------- */
function cx(...cls: (string | false | null | undefined)[]) {
  return cls.filter(Boolean).join(" ");
}

const LIGHT = {
  page: "relative isolate bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50",
  textPrimary: "text-slate-800",
  textSecondary: "text-slate-600",
  chip: "bg-white/80 border border-black/10",
  card: "bg-white/90 border border-black/10",
  btn: "bg-white hover:bg-white/90 border border-black/10 text-slate-900",
  iconBtn: "bg-white/90 hover:bg-white text-slate-900",
};

const BRAND_TEXT = "text-brand";

function splitHeadingForColoring(input: string): { left: string; right: string } {
  const emDashIdx = input.indexOf("—");
  if (emDashIdx !== -1) return { left: input.slice(0, emDashIdx + 1).trim(), right: input.slice(emDashIdx + 1).trim() };
  const commaIdx = input.indexOf(",");
  if (commaIdx !== -1) return { left: input.slice(0, commaIdx + 1).trim(), right: input.slice(1 + commaIdx).trim() };
  const words = input.split(/\s+/);
  const mid = Math.floor(words.length / 2);
  return { left: words.slice(0, mid).join(" "), right: words.slice(mid).join(" ") };
}

/* ----------------------------- UI Pill ------------------------------- */
function Pill({
  children,
  className,
  title,
  as,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  as?: "button";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  if (as === "button") {
    return (
      <button
        title={title}
        {...rest}
        className={cx(
          "inline-flex items-center px-2.5 py-1 rounded-full text-[0.875rem] font-medium transition-colors",
          LIGHT.chip,
          className
        )}
      >
        {children}
      </button>
    );
  }
  return (
    <span
      title={title}
      className={cx(
        "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium",
        LIGHT.chip,
        className
      )}
    >
      {children}
    </span>
  );
}

/* ----------------------------- Shorts Card --------------------------- */
function ShortsCard({
  v,
  onPlay,
  onShare,
  cardWidth,
}: {
  v: VideoTestimonial;
  onPlay: () => void;
  onShare: () => void;
  cardWidth: number;
}) {
  const [hovering, setHovering] = useState(false);
  const vidRef = useRef<HTMLVideoElement | null>(null);
  const isMp4 = !v.src.includes("youtube.com") && !v.src.includes("youtu.be");

  useEffect(() => {
    if (!vidRef.current) return;
    if (hovering) {
      vidRef.current.play().catch(() => { });
    } else {
      vidRef.current.pause();
      vidRef.current.currentTime = 0;
    }
  }, [hovering]);

  return (
    <div
      id={`video-${v.id}`}
      data-card
      className={cx("shrink-0 snap-start rounded-2xl overflow-hidden flex flex-col", LIGHT.card)}
      style={{ width: `${Math.max(220, Math.round(cardWidth))}px` }}
    >
      <div className="p-4 pb-2">
        <div className="flex items-start justify-between gap-2 min-h-14 sm:min-h-[3.25rem]">
          <h3 className="text-sm font-semibold leading-tight line-clamp-2 text-slate-900">
            {v.title}
          </h3>
          <span className="inline-flex items-center gap-1 text-amber-500 shrink-0">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-xs font-medium">{(v.rating ?? 4.8).toFixed(1)}</span>
          </span>
        </div>
      </div>

      <div className="px-4">
        <div
          className="relative aspect-[9/16] overflow-hidden rounded-xl border border-black/10"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <Image
            src={v.poster}
            alt={`${v.person} — ${v.title}`}
            title={`${v.person} — ${v.title}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 26rem"
            className="object-cover pointer-events-none"
            priority={false}
          />

          {isMp4 && (
            <video
              ref={vidRef}
              src={v.src + "#t=0.1"}
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none"
            />
          )}

          {v.duration && (
            <span className="absolute left-2 top-2 text-[11px] px-2 py-0.5 rounded-full bg-black/70 text-white">
              <Clock className="inline-block h-3 w-3 mr-1" />
              {v.duration}
            </span>
          )}

          <div className="absolute right-2 bottom-3 flex flex-col gap-2 z-10">
            <button
              type="button"
              aria-label="Share"
              className={cx("h-10 w-10 rounded-full shadow pointer-events-auto", LIGHT.iconBtn)}
              onClick={onShare}
            >
              <Share2 className="h-4 w-4 mx-auto" />
            </button>
            <button
              type="button"
              aria-label="Play"
              className={cx("h-10 w-10 rounded-full shadow pointer-events-auto", LIGHT.iconBtn)}
              onClick={onPlay}
            >
              <Play className="h-4 w-4 mx-auto" />
            </button>
          </div>

          <div className="absolute left-2 bottom-3 text-white drop-shadow">
            <div className="text-xs font-semibold">
              {v.person}
              {v.role ? " • " + v.role : ""}
            </div>
            <div className="text-[11px] opacity-90">
              {v.company ? "@ " + v.company : ""}
              {v.city ? " • " + v.city : ""}
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-2 min-h-10">
        {v.tags?.length ? (
          <div className="flex flex-wrap gap-1.5">
            {v.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 border border-black/10 text-slate-700 transition-colors hover:bg-orange-100 active:bg-orange-200"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* ------------------------ Client Portal for Modal -------------------- */
function ClientPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

/* ----------------------------- Component ----------------------------- */
export default function JobsLiveJobsTestimonialSection(
  props: JobsLiveJobsVideoTestimonialsSectionProps
) {
  const {
    heading = "CDPL Learner Shorts: Real Outcomes, Live Jobs",
    subheading =
    "Swipe through short, vertical stories from learners who used CDPL's mentor-led tracks and live projects to secure interviews and offers.",
    videos = DEFAULT_VIDEOS,
    // defaultTag stays in type but isn't destructured/used to avoid ESLint error
  } = props;

  const [active, setActive] = useState<VideoTestimonial | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [cardW, setCardW] = useState<number>(0);

  // No tag filtering while tags UI is disabled
  const filtered = videos;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash.startsWith("video-")) return;
    const id = hash.replace("video-", "");
    const found = videos.find((v) => v.id === id);
    if (found) setActive(found);
  }, [videos]);

  const copyLink = (id: string) => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#video-${id}`;
      navigator.clipboard.writeText(url);
      const el = document.createElement("div");
      el.textContent = "Link copied";
      el.className =
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-[70] px-3 py-1.5 rounded-full text-sm bg-black/80 text-white";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1200);
    } catch { }
  };


  const GAP = 16;

  function computeCardWidth(containerWidth: number) {
    if (containerWidth <= 0) return 0;
    const DEFAULT = 387;
    const candidates = [1, 2, 3];
    let bestCols = 1;
    let bestLeftover = Number.POSITIVE_INFINITY;
    for (const cols of candidates) {
      const totalGaps = GAP * (cols - 1);
      const widthForCards = containerWidth - totalGaps;
      const perCard = widthForCards / cols;
      const leftover = Math.abs(perCard - DEFAULT);
      if (leftover < bestLeftover) {
        bestLeftover = leftover;
        bestCols = cols;
      }
    }
    const exact = (containerWidth - GAP * (bestCols - 1)) / bestCols;
    const MIN = 260;
    const MAX = 520;
    return Math.max(MIN, Math.min(MAX, exact));
  }

  const refreshLayout = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const containerW = el.clientWidth;
    setCardW(computeCardWidth(containerW));
    const max = el.scrollWidth - el.clientWidth - 1;
    setCanPrev(el.scrollLeft > 0);
    setCanNext(el.scrollLeft < max);
  }, []);

  useEffect(() => {
    refreshLayout();
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth - 1;
      setCanPrev(el.scrollLeft > 0);
      setCanNext(el.scrollLeft < max);
    };
    const onResize = () => refreshLayout();

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const ro = new ResizeObserver(() => refreshLayout());
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, [videos.length, refreshLayout]);

  const handlePrev = () => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: -(cardW + GAP), behavior: "smooth" });
  };

  const handleNext = () => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: cardW + GAP, behavior: "smooth" });
  };

  const split = useMemo(() => splitHeadingForColoring(heading), [heading]);

  return (
    <section className={LIGHT.page}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-5xl text-center">
          <Pill className="mb-3">
            <Sparkles className="h-4 w-4 mr-1" />
            CDPL Success Stories
          </Pill>

          <h2 className="mx-auto text-4xl font-bold tracking-tight leading-tight text-slate-900">
            <span className="text-slate-900">{split.left}</span>{" "}
            <span className={BRAND_TEXT}>{split.right}</span>
          </h2>

          <p className="mt-6 text-base sm:text-base md:text-lg leading-6 text-slate-600">{subheading}</p>
        </div>

        {/* Shorts Carousel */}
        <div className="mt-8 relative">
          <div className="absolute left-2 lg:left-0 top-1/2 -translate-y-1/2 lg:-translate-x-1/2 z-10">
            <button
              type="button"
              aria-label="Previous"
              onClick={handlePrev}
              disabled={!canPrev}
              className={cx(
                "h-10 w-10 rounded-full shadow transition",
                LIGHT.btn,
                !canPrev && "opacity-40 cursor-not-allowed"
              )}
            >
              ‹
            </button>
          </div>
          <div className="absolute right-2 lg:right-0 top-1/2 -translate-y-1/2 lg:translate-x-1/2 z-10">
            <button
              type="button"
              aria-label="Next"
              onClick={handleNext}
              disabled={!canNext}
              className={cx(
                "h-10 w-10 rounded-full shadow transition",
                LIGHT.btn,
                !canNext && "opacity-40 cursor-not-allowed"
              )}
            >
              ›
            </button>
          </div>

          <div
            ref={scrollerRef}
            role="region"
            aria-label="Testimonial shorts carousel"
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {filtered.map((v) => (
              <ShortsCard
                key={v.id}
                v={v}
                onPlay={() => setActive(v)}
                onShare={() => copyLink(v.id)}
                cardWidth={cardW || 387}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Player Modal — PORTALED to <body> with very high z-index */}
      <ClientPortal>
          {active && (
            <div
              className="fixed inset-0 z-[9999] cdpl-animate-fade-in"
            >
              {/* Backdrop made fixed to escape any ancestor stacking context */}
              <div className="fixed inset-0 bg-black/60" onClick={() => setActive(null)} />
              <div
                role="dialog"
                aria-modal="true"
                className="fixed left-1/2 top-1/2 w-[94vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl z-[10000] cdpl-animate-modal-in"
              >
                <div className="relative aspect-video w-full">
                  {(active?.src.includes("youtube.com") || active?.src.includes("youtu.be")) ? (
                    <iframe
                      src={active?.src}
                      title={active?.title}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={active?.src}
                      poster={active?.poster}
                      controls
                      preload="metadata"
                      className="absolute inset-0 h-full w-full bg-black"
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    aria-label="Close"
                    className="absolute right-3 top-3 z-[10001] inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                {active && (
                  <div className="px-4 py-3">
                    <h3 className="text-base text-slate-800 sm:text-lg font-semibold">{active.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {active.person}
                      {active.role ? " • " + active.role : ""}
                      {active.company ? " @ " + active.company : ""}
                      {active.city ? " • " + active.city : ""}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
      </ClientPortal>

    </section>
  );
}
