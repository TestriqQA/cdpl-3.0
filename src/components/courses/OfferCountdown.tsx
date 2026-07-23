"use client";

import { useEffect, useRef, useState } from "react";

const pad = (n: number) => n.toString().padStart(2, "0");

/**
 * Self-contained "limited-time offer" countdown for a course card.
 *
 * Owns its OWN 1-second interval so only this small leaf re-renders each tick.
 * Previously the tick (`nowMs`) lived in FilterableCourseSections and its
 * setInterval re-rendered the entire course catalogue (30+ CourseCards) every
 * second — a large, continuous main-thread / TBT cost on mobile. Isolating the
 * timer here keeps the per-second work to a handful of text nodes per card.
 *
 * If the course has no real `offerEndsAt`, it falls back to a 48-hour window
 * from first mount (unchanged behaviour). The numeric cells carry
 * suppressHydrationWarning because the value depends on the client clock.
 */
export default function OfferCountdown({ offerEndsAt }: { offerEndsAt?: string | Date }) {
    const deadlineRef = useRef<number>(
        offerEndsAt ? new Date(offerEndsAt).getTime() : Date.now() + 48 * 3600 * 1000
    );
    const [now, setNow] = useState(() => Date.now());

    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(id);
    }, []);

    const diff = Math.max(0, deadlineRef.current - now);
    const totalSeconds = Math.floor(diff / 1000);
    const hours = pad(Math.floor(totalSeconds / 3600));
    const minutes = pad(Math.floor((totalSeconds % 3600) / 60));
    const seconds = pad(totalSeconds % 60);
    const isOver = diff <= 0;

    return (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600 mb-2">
                Limited-time offer ends in
            </p>

            <div
                className="grid grid-cols-3 gap-3 text-center"
                role="timer"
                aria-live="polite"
                aria-atomic="true"
            >
                <div className="rounded-lg bg-white shadow-sm p-3">
                    <div className="text-xl font-bold text-slate-900 tabular-nums" suppressHydrationWarning>
                        {hours}
                    </div>
                    <div className="text-[10px] text-slate-500 tracking-wide uppercase">
                        Hours
                    </div>
                </div>
                <div className="rounded-lg bg-white shadow-sm p-3">
                    <div className="text-xl font-bold text-slate-900 tabular-nums" suppressHydrationWarning>
                        {minutes}
                    </div>
                    <div className="text-[10px] text-slate-500 tracking-wide uppercase">
                        Minutes
                    </div>
                </div>
                <div className="rounded-lg bg-white shadow-sm p-3">
                    <div className="text-xl font-bold text-slate-900 tabular-nums" suppressHydrationWarning>
                        {seconds}
                    </div>
                    <div className="text-[10px] text-slate-500 tracking-wide uppercase">
                        Seconds
                    </div>
                </div>
            </div>

            {isOver && (
                <p className="mt-2 text-xs text-red-600 font-semibold">
                    Offer has ended.
                </p>
            )}
        </div>
    );
}
