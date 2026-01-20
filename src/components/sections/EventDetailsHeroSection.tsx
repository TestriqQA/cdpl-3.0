"use client";

import type { PastEvent } from "@/data/eventsData";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Props = { event: PastEvent };

export default function EventDetailsHeroSection({ event }: Props) {
  // Only use heroImageUrl if present, else fallback.
  const fallbackSrc = "/events/event-fallback.png"; // put this file under /public/events/
  const initialSrc = useMemo(
    () => (event.heroImageUrl?.trim() ? event.heroImageUrl!.trim() : fallbackSrc),
    [event.heroImageUrl]
  );

  const [imgSrc, setImgSrc] = useState(initialSrc);

  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-900">
      {/* Background wash */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute left-1/2 top-[-6rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,theme(colors.indigo.200)_0,transparent_60%)]" />
      </div>

      {/* Subtle sweep lines */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg className="absolute left-0 top-0 h-full w-full">
          <defs>
            <linearGradient id="event-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(14,165,233,0)" />
              <stop offset="50%" stopColor="rgba(14,165,233,0.18)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0)" />
            </linearGradient>
          </defs>
          {[0, 90, 180, 270].map((y, i) => (
            <g key={i} transform={`translate(0, ${y})`}>
              <rect x="-45%" y="0" width="90%" height="1.5" fill="url(#event-line)">
                <animate
                  attributeName="x"
                  values="-45%;65%;-45%"
                  dur={`${14 + i * 2}s`}
                  repeatCount="indefinite"
                />
              </rect>
            </g>
          ))}
        </svg>
      </div>

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-700">
                Home
              </Link>
            </li>
            <li aria-hidden className="text-slate-400">
              ›
            </li>
            <li>
              <Link
                href="/events"
                className="font-medium text-slate-700 hover:text-slate-900"
              >
                Events
              </Link>
            </li>
            <li aria-hidden className="text-slate-400">
              ›
            </li>
            <Link href={`/events/${event.slug}`} className="truncate max-w-[45ch] text-slate-700">{event.slug}</Link>
          </ol>
        </nav>

        {/* Category pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur">
          <span
            className={[
              "inline-block h-2 w-2 rounded-full",
              event.categoryColor?.startsWith("bg-") ? event.categoryColor : "bg-orange-500",
            ].join(" ")}
          />
          <span className="uppercase tracking-wide">{event.category}</span>
        </div>

        {/* Title + optional subtitle */}
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
          {event.title}
        </h1>
        {event.subtitle ? (
          <p className="mt-2 text-lg font-semibold" style={{ color: "var(--color-brand, #ff8c00)" }}>
            {event.subtitle}
          </p>
        ) : null}

        {/* Hero image — fixed 400px tall */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-orange-50 to-sky-50 shadow-sm">
          <div className="relative w-full h-[400px]">
            <Image
              src={imgSrc}
              alt={`${event.title} cover image`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              onError={() => {
                if (imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
