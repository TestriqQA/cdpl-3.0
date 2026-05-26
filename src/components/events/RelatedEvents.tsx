import React from "react";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import type { PastEvent } from "@/data/eventsData";
import NextImage from "next/image";

interface RelatedEventsProps {
    currentSlug: string;
    // BLG-133 follow-up: caller (the server-side event detail page) now
    // passes the full event corpus from `getEvents()` so Sanity-published
    // events appear here, not just the hard-coded local ones.
    events: PastEvent[];
}

export default function RelatedEvents({ currentSlug, events }: RelatedEventsProps) {
    const relatedEvents = events
        .filter((e) => e.featured && e.slug !== currentSlug)
        .slice(0, 3);

    if (relatedEvents.length === 0) return null;

    return (
        <section className="py-16 border-t border-slate-200 mt-12 bg-slate-50 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
            <div className="container mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold text-slate-900">You Might Also Like</h2>
                    <Link
                        href="/events"
                        className="px-6 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-semibold hover:bg-slate-900 hover:text-white transition-all flex items-center"
                    >
                        View All Events <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedEvents.map((event) => (
                        <Link
                            key={event.id}
                            href={`/events/${event.slug}`}
                            className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="relative h-56 overflow-hidden">
                                {event.heroImageUrl ? (
                                    <React.Fragment>
                                        <div className="relative w-full h-full">
                                            <NextImage
                                                src={event.heroImageUrl}
                                                alt={event.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                    </React.Fragment>
                                ) : (
                                    <div className={`w-full h-full ${event.categoryColor || "bg-blue-600"} opacity-10 group-hover:opacity-20 transition-opacity`} />
                                )}
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-slate-900 shadow-sm`}>
                                        {event.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-xs text-slate-500 font-bold uppercase tracking-wider mb-3">
                                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                                    {event.date}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                    {event.title}
                                </h3>

                                <div className="flex items-center text-slate-500 text-sm">
                                    <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                                    <span className="line-clamp-1">{event.location}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
