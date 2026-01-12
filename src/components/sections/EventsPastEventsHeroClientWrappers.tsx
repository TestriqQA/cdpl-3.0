"use client";

import dynamic from "next/dynamic";
import React from "react";

// OPTIMIZATION: Defer hydration of interactive/heavy components to reduce TBT (1.5s block)
// This file acts as a Client Component boundary to allow `ssr: false` usage.

export const EventsPastEventsFloatingLanternsDynamic = dynamic(
    () => import("./EventsPastEventsFloatingLanterns"),
    { ssr: false }
);

export const EventsPastEventsHeroActionsDynamic = dynamic(
    () => import("./EventsPastEventsHeroActions"),
    {
        ssr: false,
        loading: () => (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                {/* Enquire Button Skeleton */}
                <div className="h-[46px] w-full rounded-2xl bg-slate-200 animate-pulse sm:w-[200px]" />
                {/* Browse Button Skeleton */}
                <div className="h-[46px] w-full rounded-2xl bg-white/50 border border-slate-200/50 sm:w-[180px]" />
            </div>
        )
    }
);
