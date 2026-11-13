"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play, Video, CheckCircle2, Star } from "lucide-react";
import { DEFAULT_VIDEOS, type VideoTestimonial } from "@/components/sections/JobsLiveJobsTestimonialSection";

const POINTS = [
  "Mentor-led tracks and live projects",
  "Interview preparation and mock tests",
  "Placement guidance, resume reviews and referrals",
];

/** One vertical video story. Shows the poster with an orange play button, then plays in place with native controls. */
function VideoCard({ v }: { v: VideoTestimonial }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    // The <video> is already mounted under the poster; play it right away.
    videoRef.current?.play().catch(() => { });
  };

  return (
    <article id={`video-${v.id}`} className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-[9/16] bg-slate-900">
        <video
          ref={videoRef}
          src={v.src}
          poster={v.poster}
          controls={started}
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {!started && (
          <button
            type="button"
            onClick={start}
            aria-label={`Play ${v.person}'s story: ${v.title}`}
            className="group absolute inset-0 cursor-pointer focus:outline-none"
          >
            <Image
              src={v.poster}
              alt=""
              fill
              sizes="(max-width: 640px) 45vw, 16rem"
              className="object-cover"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
            <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-brand text-white shadow-xl ring-4 sm:h-16 sm:w-16 sm:ring-8 ring-white/25 transition-transform duration-300 group-hover:scale-110 group-focus-visible:ring-orange-300">
              <Play className="ml-1 h-5 w-5 fill-current sm:h-7 sm:w-7" aria-hidden="true" />
            </span>
            <span className="absolute inset-x-3 bottom-3 text-left text-white sm:inset-x-4 sm:bottom-4">
              <span className="block text-sm font-semibold">{v.person}</span>
              <span className="hidden text-xs text-white/85 sm:block">
                {v.role}
                {v.company ? ` @ ${v.company}` : ""}
              </span>
            </span>
          </button>
        )}
      </div>

      <div className="p-3">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-2">
          <h3 className="text-xs font-semibold leading-snug text-slate-900 sm:text-[13px]">{v.title}</h3>
          <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-slate-800">
            <Star className="h-3.5 w-3.5 fill-amber-400 stroke-amber-400" aria-hidden="true" />
            {(v.rating ?? 5).toFixed(1)}
          </span>
        </div>
        {v.transcript && <p className="mt-1.5 hidden text-xs leading-5 text-slate-600 sm:line-clamp-2">{v.transcript}</p>}
        {v.tags?.length ? (
          <ul className="mt-2 hidden flex-wrap gap-1 sm:flex">
            {v.tags.slice(0, 3).map((t) => (
              <li key={t} className="rounded-full bg-orange-50 px-2 py-0.5 text-[11px] font-medium text-orange-700 ring-1 ring-orange-100">
                {t}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

/** Video stories from placed learners: the pitch on the left, the videos on the right. */
export default function ReviewsVideoSection() {
  return (
    <section aria-labelledby="reviews-videos-heading" className="bg-white py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
            <Video className="h-4 w-4" aria-hidden="true" />
            Video Stories
          </span>
          <h2 id="reviews-videos-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Real outcomes, <span className="text-brand">in their own words</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Short stories from learners who used CDPL&apos;s mentor-led tracks and live projects to
            secure interviews and offers.
          </p>
          <ul className="mt-6 grid gap-3 text-slate-700">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto grid w-full max-w-[32rem] grid-cols-2 gap-3 sm:gap-5 lg:col-span-6 lg:mr-0">
          {DEFAULT_VIDEOS.map((v) => (
            <VideoCard key={v.id} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
