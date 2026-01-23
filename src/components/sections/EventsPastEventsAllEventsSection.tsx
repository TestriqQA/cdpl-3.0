// src/components/sections/EventsPastEventsAllEventsSection.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Users, ArrowRight } from "lucide-react";
import Image from "next/image";

export type AllEvent = {
  id: string | number;
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  attendees: string | number;
  organization: string;
  purpose: string;
  highlights: string[];
  category: string;
  heroImageUrl?: string;
};

const CATEGORY_STYLES: Record<string, { badgeBg: string; btnBg: string; text: string }> = {
  "AI & Machine Learning": { badgeBg: "bg-purple-600", btnBg: "bg-purple-600", text: "text-purple-600" },
  "Software Testing": { badgeBg: "bg-green-600", btnBg: "bg-green-600", text: "text-green-600" },
  "Data Science": { badgeBg: "bg-blue-600", btnBg: "bg-blue-600", text: "text-blue-600" },
  "Academic Training": { badgeBg: "bg-brand", btnBg: "bg-brand", text: "text-brand" },
  "Web Development": { badgeBg: "bg-cyan-600", btnBg: "bg-cyan-600", text: "text-cyan-600" },
  "Industrial Training": { badgeBg: "bg-teal-600", btnBg: "bg-teal-600", text: "text-teal-600" },
  "Corporate Training": { badgeBg: "bg-pink-600", btnBg: "bg-pink-600", text: "text-pink-600" },
  Technology: { badgeBg: "bg-indigo-600", btnBg: "bg-indigo-600", text: "text-indigo-600" },
};
const FALLBACK = { badgeBg: "bg-slate-700", btnBg: "bg-slate-700", text: "text-slate-700" };

export default function EventsPastEventsAllEventsSection({
  events: initialEvents,
  cardMinHClass = "min-h-[480px]",
}: {
  events: AllEvent[];
  cardMinHClass?: string;
}) {
  const [allEvents, setAllEvents] = useState<AllEvent[]>(initialEvents);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Initial props might be sliced (e.g., 12 items). Check if we need to load more.
  // We assume if initialEvents is 12, there *might* be more on the server (or in the full file).
  // A robust check would require a "totalCount" prop, but we can just try to load once if we hit the limit.

  // If we haven't loaded the full set yet, and we are at the end of our current buffer, show button to load rest.
  // Actually, simpler: Always allow loading more if we suspect there is more, or just load on first click.

  const handleLoadMore = async () => {
    // If we have more in local state, just show them.
    if (visibleCount < allEvents.length) {
      setVisibleCount((prev) => prev + 6);
      return;
    }

    // If we reached the end of local data (e.g. 12), try to load the full dataset lazily.
    setIsLoadingMore(true);
    try {
      // Lazy load the full data chunk (separate from main bundle)
      const { pastEvents } = await import("@/data/eventsData");

      // Prune/Map it to match AllEvent shape (Client-side pruning)
      // We must match the transformation logic from page.tsx approx
      const fullMapped: AllEvent[] = pastEvents.map(e => ({
        id: e.id,
        slug: e.slug,
        title: e.title,
        subtitle: e.subtitle,
        date: e.date,
        location: e.location,
        attendees: e.attendees,
        organization: "",
        purpose: e.purpose, // Full text available now
        highlights: [],
        category: e.category,
        heroImageUrl: e.heroImageUrl
      }));

      // Filter out duplicates (the ones we already have)
      const existingIds = new Set(allEvents.map(e => e.id));
      const newEvents = fullMapped.filter(e => !existingIds.has(e.id));

      if (newEvents.length > 0) {
        setAllEvents(prev => [...prev, ...newEvents]);
        setVisibleCount(prev => prev + 6);
      }
    } catch (err) {
      console.error("Failed to load more events", err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  // Show button if we have local hidden items OR we suspect there are more (we just loaded the slice)
  // Simple heuristic: If allow lazy load, always show button until we know for sure we have everything.
  // But how do we know? After first load, we have everything.
  // Let's rely on: visibleCount < allEvents.length (after merge) OR (allEvents.length === initialEvents.length && initialEvents.length > 0)
  // Better: We know initial is 12. If we haven't fetched yet, show button.
  const [hasFetchedFull, setHasFetchedFull] = useState(false);

  const shouldShowLoadMore = visibleCount < allEvents.length || (!hasFetchedFull && allEvents.length > 0);

  const onShowMoreClick = async () => {
    if (!hasFetchedFull && visibleCount >= allEvents.length) {
      await handleLoadMore();
      setHasFetchedFull(true);
    } else {
      setVisibleCount(prev => prev + 6);
    }
  };

  const visibleEvents = allEvents.slice(0, visibleCount);

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleEvents.map((event) => {
          const cs = CATEGORY_STYLES[event.category] ?? FALLBACK;
          return (
            <article
              key={event.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${cardMinHClass}`}
            >
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  {event.heroImageUrl ? (
                    <Image
                      src={event.heroImageUrl}
                      alt={event.title}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      quality={50}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Calendar className="w-16 h-16 text-purple-300" />
                  )}
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`${cs.badgeBg} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md`}>
                    {event.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-2">
                  {event.title}
                </h3>

                {event.subtitle ? (
                  <p className={`mb-3 text-sm font-semibold ${cs.text}`}>
                    {event.subtitle}
                  </p>
                ) : null}

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>{event.attendees} participants</span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {event.purpose}
                </p>

                <div className="mt-auto">
                  <Link href={`/events/${event.slug}`} aria-label={`View details about ${event.title}`}>
                    <button
                      className={`w-full text-white px-4 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer ${cs.btnBg}`}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {shouldShowLoadMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={onShowMoreClick}
            disabled={isLoadingMore}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-700 shadow-md ring-1 ring-slate-200 transition hover:bg-slate-50 hover:text-blue-600 hover:ring-blue-200 disabled:opacity-50"
          >
            {isLoadingMore ? "Loading..." : "Load More Events"}
            {!isLoadingMore && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
          </button>
        </div>
      )}
    </div>
  );
}
