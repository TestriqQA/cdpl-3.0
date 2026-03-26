"use client";

import { useMemo } from "react";
import { Briefcase } from "lucide-react";

type Chip = { label: string };

type Props = {
    /** Optional: pass your own chips. If omitted, demo chips are shown. */
    chips?: Chip[];
    /** Pixels per second for marquee speed (approx). */
    speed?: number;
};

export default function PlacementsJobTitlesRow({ chips, speed = 60 }: Props) {
    const CHIPS = useMemo<Chip[]>(
        () =>
            chips ?? [
                { label: "SDE @ CloudSprint (10 LPA)" },
                { label: "Data Analyst @ InsightIQ (6.5 LPA)" },
                { label: "Automation Engg @ TestHub (7.2 LPA)" },
                { label: "DevOps Intern @ BuildFlow (20k/mo)" },
                { label: "QA Engineer @ AccuTest (6 LPA)" },
            ],
        [chips]
    );

    // Duplicate for seamless loop
    const LOOP = [...CHIPS, ...CHIPS];

    // Rough duration calc so speed ≈ px/sec
    const approxTrackPx = LOOP.length * 160;
    const durationSec = Math.max(15, Math.round(approxTrackPx / Math.max(1, speed)));

    return (
        <div className="rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm overflow-hidden">
            {/* min-w-0 lets flex children shrink instead of causing horizontal overflow */}
            <div className="group flex items-center gap-3 min-w-0 max-[425px]:flex-col max-[425px]:items-start">
                {/* Left label pill */}
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-800 shrink-0">
                    <Briefcase className="h-4 w-4 text-brand" />
                    Job Titles
                </span>

                {/* Marquee rail */}
                <div className="relative flex-1 min-w-0 max-[425px]:w-full max-[425px]:mt-2">
                    <div
                        className="overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                        aria-label="Recent job titles marquee"
                    >
                        <div
                            className="flex w-max items-center gap-2 will-change-transform"
                            style={{ animation: `cdpl-marquee ${durationSec}s linear infinite` }}
                        >
                            {LOOP.map((c, idx) => (
                                <button
                                    key={`${c.label}-${idx}`}
                                    type="button"
                                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 hover:border-slate-300 transition whitespace-nowrap"
                                >
                                    {c.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes cdpl-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .group:hover div[style*="cdpl-marquee"] {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}
