"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";

// Use a simple specialized loader or the existing one
function SectionLoader({ label }: { label: string }) {
    return (
        <div className="flex h-96 w-full items-center justify-center rounded-3xl bg-slate-50/50">
            <div className="flex flex-col items-center gap-2">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600" />
                <p className="text-sm font-medium text-slate-500">{label}</p>
            </div>
        </div>
    );
}

const EventsPastEventsFeaturedEventsSliderSection = dynamic(
    () => import("@/components/sections/EventsPastEventsFeaturedEventsSliderSection"),
    {
        ssr: false,
        loading: () => <SectionLoader label="Loading featured events..." />,
    }
);

const EventsPastEventsAllEventsSection = dynamic(
    () => import("@/components/sections/EventsPastEventsAllEventsSection"),
    {
        ssr: false,
        loading: () => <SectionLoader label="Loading events..." />,
    }
);

const EventsPastEventsCTASection = dynamic(
    () => import("@/components/sections/EventsPastEventsCTASection"),
    {
        ssr: false,
    }
);

type LazySectionsProps = {
    featuredEvents: any[];
    regularEvents: any[];
    CATEGORY_STYLES?: any;
};

export default function PastEventsLazySections({
    featuredEvents,
    regularEvents
}: LazySectionsProps) {
    const [shouldLoadFeatured, setShouldLoadFeatured] = useState(false);
    const [shouldLoadAll, setShouldLoadAll] = useState(false);
    const [shouldLoadCTA, setShouldLoadCTA] = useState(false);

    const featuredRef = useRef<HTMLDivElement>(null);
    const allRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === featuredRef.current) {
                            setShouldLoadFeatured(true);
                        } else if (entry.target === allRef.current) {
                            setShouldLoadAll(true);
                        } else if (entry.target === ctaRef.current) {
                            setShouldLoadCTA(true);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "200px" } // Start loading 200px before they appear
        );

        if (featuredRef.current) observer.observe(featuredRef.current);
        if (allRef.current) observer.observe(allRef.current);
        if (ctaRef.current) observer.observe(ctaRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Featured */}
            {featuredEvents.length > 0 && (
                <section
                    ref={featuredRef}
                    id="featured-events"
                    className="py-10 w-full"
                    style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 500px' } as React.CSSProperties}
                >
                    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                        <h2 className="mb-6 text-4xl font-bold">
                            <span style={{ color: "rgb(0, 105, 168)" }}>Featured</span>{" "}
                            <span style={{ color: "rgb(255, 140, 0)" }}>Events</span>
                        </h2>
                        {shouldLoadFeatured ? (
                            <EventsPastEventsFeaturedEventsSliderSection
                                events={featuredEvents}
                                autoplayMs={4500}
                                cardHClass="h-[480px]"
                            />
                        ) : (
                            <div className="h-[480px]" />
                        )}
                    </div>
                </section>
            )}

            {/* All Past Events */}
            <section
                ref={allRef}
                id="all-past-events"
                className="py-4 w-full"
                style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' } as React.CSSProperties}
            >
                <div className="max-w-7xl mx-auto px-4 py-0 sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-4xl font-bold">
                        <span style={{ color: "rgb(0, 105, 168)" }}>All Past</span>{" "}
                        <span style={{ color: "rgb(255, 140, 0)" }}>Events</span>
                    </h2>
                    {shouldLoadAll ? (
                        <EventsPastEventsAllEventsSection
                            events={regularEvents}
                            cardMinHClass="min-h-[480px]"
                        />
                    ) : (
                        <div className="min-h-[480px]" />
                    )}
                </div>
            </section>

            {/* CTA - lower priority */}
            <div ref={ctaRef}>
                {shouldLoadCTA && <EventsPastEventsCTASection />}
            </div>
        </>
    );
}
