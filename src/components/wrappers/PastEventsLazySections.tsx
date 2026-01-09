"use client";

import dynamic from "next/dynamic";
// I need types. I'll just import the types from the components or infer them if possible. 
// Actually I can pass specific props.

// Define loaders here so I don't depend on external if possible, or use the one I saw in page.tsx
// wait, page.tsx uses <SectionLoader>. I need to check where it comes from.
// It seems `SectionLoader` is imported in page.tsx. I should check imports in page.tsx.

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
    featuredEvents: any[]; // refined later
    regularEvents: any[];
    CATEGORY_STYLES?: any;
};

export default function PastEventsLazySections({
    featuredEvents,
    regularEvents
}: LazySectionsProps) {
    return (
        <>
            {/* Featured */}
            {featuredEvents.length > 0 && (
                <section
                    id="featured-events"
                    className="py-10 w-full"
                    style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 500px' } as React.CSSProperties}
                >
                    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                        <h2 className="mb-6 text-4xl font-bold">
                            <span style={{ color: "rgb(0, 105, 168)" }}>Featured</span>{" "}
                            <span style={{ color: "rgb(255, 140, 0)" }}>Events</span>
                        </h2>
                        <EventsPastEventsFeaturedEventsSliderSection
                            events={featuredEvents}
                            autoplayMs={4500}
                            cardHClass="h-[480px]"
                        />
                    </div>
                </section>
            )}

            {/* All Past Events */}
            <section
                id="all-past-events"
                className="py-4 w-full"
                style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' } as React.CSSProperties}
            >
                <div className="max-w-7xl mx-auto px-4 py-0 sm:px-6 lg:px-8">
                    <h2 className="mb-6 text-4xl font-bold">
                        <span style={{ color: "rgb(0, 105, 168)" }}>All Past</span>{" "}
                        <span style={{ color: "rgb(255, 140, 0)" }}>Events</span>
                    </h2>
                    <EventsPastEventsAllEventsSection
                        events={regularEvents}
                        cardMinHClass="min-h-[480px]"
                    />
                </div>
            </section>

            {/* CTA */}
            < EventsPastEventsCTASection />
        </>
    );
}

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
