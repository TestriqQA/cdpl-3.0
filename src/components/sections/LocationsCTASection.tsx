// src/components/sections/LocationsCTASection.tsx
"use client";

import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";

export default function LocationsCTASection({
  sectionClassName = "",
  containerClassName = "",
}: {
  sectionClassName?: string;
  containerClassName?: string;
}) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const id = "locations-directory";
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className={`w-full ${sectionClassName}`}>
      <div className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 ${containerClassName}`}>
        <div
          className={[
            "relative overflow-hidden rounded-3xl",
            "isolate",
            "will-change-auto",
          ].join(" ")}
        >
          {/* --- Aurora gradient backdrop --- */}
          <div className="absolute inset-0" aria-hidden="true">
            {/* Hide heavy blobs on mobile to avoid overflow jank */}
            <div className="hidden sm:block absolute inset-0 bg-[conic-gradient(at_20%_20%,#e0e7ff_0deg,#bae6fd_90deg,#fbcfe8_180deg,#e9d5ff_270deg,#e0e7ff_360deg)] opacity-90" />
            <div className="hidden sm:block absolute -top-16 -left-10 h-72 w-72 rounded-full bg-indigo-400/50 blur-3xl" />
            <div className="hidden sm:block absolute -bottom-20 -right-8 h-80 w-80 rounded-full bg-rose-400/50 blur-3xl" />
            <div className="hidden sm:block absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/45 blur-3xl" />
            {/* Lightweight mobile backdrop */}
            <div className="sm:hidden absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,#e0e7ff_10%,#ffffff_60%)]" />
            {/* soft vignette for readability */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(85% 85% at 50% 50%, rgba(2,6,23,0) 55%, rgba(2,6,23,0.12) 100%)",
              }}
            />
          </div>

          {/* --- Subtle frame --- */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/10" aria-hidden="true" />

          {/* --- Glassy inner card --- */}
          <div
            className={[
              "relative rounded-3xl bg-white/90",
              "p-6 sm:p-10 md:p-14",
              "ring-1 ring-white/60 backdrop-blur-lg",
              "shadow-[0_14px_40px_rgba(2,6,23,0.16)]",
            ].join(" ")}
          >
            {/* micro-dot pattern */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              aria-hidden="true"
              style={{
                maskImage:
                  "radial-gradient(ellipse at center, black 62%, transparent 82%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 62%, transparent 82%)",
                backgroundImage:
                  "radial-gradient(rgba(15,23,42,0.05) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* pill */}
              <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs sm:text-sm font-semibold text-slate-800 ring-1 ring-slate-200 backdrop-blur">
                <MapPin className="h-4 w-4 text-slate-700" />
                New batches across 50+ cities
              </div>

              {/* heading */}
              <div className="mx-auto max-w-2xl">
                <h2 className="relative text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                  Ready to start learning near you?
                  <span className="pointer-events-none absolute left-1/2 top-[110%] block h-[3px] w-28 sm:w-40 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-500 opacity-80" />
                </h2>
              </div>

              <p className="mx-auto mt-5 max-w-2xl text-[15.5px] sm:text-[17px] leading-7 text-slate-700">
                Join 5000+ learners transforming their careers in their hometowns. Flexible modes,
                mentor support, and placement guidance included.
              </p>

              {/* Actions — full width on mobile */}
              <div className="mt-7 flex flex-col items-stretch sm:items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/contact-us"
                  aria-label="Contact us to get 20% off"
                  className={[
                    "group relative inline-flex items-center justify-center gap-2.5",
                    "overflow-hidden", // clip gradient edges neatly on mobile
                    "rounded-xl px-5 py-3 sm:px-7 sm:py-3.5",
                    "min-h-[48px]", // stable tap target on small screens
                    "font-semibold text-white text-[15px] sm:text-base leading-none",
                    "w-full sm:w-auto",
                    "touch-manipulation",
                    "transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-[1px]",
                    "focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/40",
                    "shadow-lg",
                  ].join(" ")}
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-teal-600 opacity-95 [background-size:220%_100%] group-hover:animate-[gradient-move_3s_linear_infinite]" />
                  <span className="absolute inset-0 rounded-xl ring-1 ring-white/25" />
                  <span className="relative z-10 whitespace-nowrap">Contact Us — 20% off</span>
                  <ArrowRight className="relative z-10 h-5 w-5" />
                </Link>

                <Link
                  href="#locations-directory"
                  onClick={handleScroll}
                  className={[
                    "relative inline-flex items-center justify-center gap-2",
                    "rounded-xl bg-white",
                    "px-5 py-3 sm:px-7 sm:py-3.5",
                    "min-h-[48px]",
                    "font-semibold text-slate-900 ring-1 ring-slate-300",
                    "transition-all hover:-translate-y-0.5 hover:bg-white/95 active:translate-y-[1px]",
                    "focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400/30",
                    "w-full sm:w-auto",
                    "shadow-sm",
                  ].join(" ")}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 whitespace-nowrap">
                    View all locations
                  </span>
                </Link>
              </div>

              {/* Trust row */}
              <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm text-slate-700 sm:flex-row sm:gap-4">
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-slate-800" />
                  100% placement assistance
                </div>
                <span className="hidden sm:inline text-slate-300">•</span>
                <div>No-cost EMI available</div>
                <span className="hidden sm:inline text-slate-300">•</span>
                <div>Hybrid &amp; weekend batches</div>
              </div>
            </div>
          </div>

          {/* gradient frame glow (kept light on mobile) */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl sm:block hidden"
            aria-hidden="true"
            style={{
              padding: "1px",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              background:
                "linear-gradient(135deg, rgba(79,70,229,0.45), rgba(236,72,153,0.45))",
              filter: "blur(10px)",
            }}
          />
        </div>

        {/* local keyframes */}
        <style jsx>{`
          @keyframes gradient-move {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 220% 50%;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
