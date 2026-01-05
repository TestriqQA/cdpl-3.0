import React from "react";
import { PastEvent } from "@/data/eventsData";
import Image from "next/image";




interface EventHeroProps {
    event: PastEvent;
}

export default function EventHero({ event }: EventHeroProps) {
    return (
        <div className="relative w-full overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm">
            {/* Hero Image Section - Top Banner */}
            <div className="relative w-full h-[300px] md:h-[500px] bg-slate-900 overflow-hidden">
                {/* 1. Blurred Background Layer */}
                {event.heroImageUrl && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={event.heroImageUrl}
                            alt=""
                            fill
                            priority
                            fetchPriority="high"
                            sizes="100vw"
                            className="object-cover opacity-60 blur-2xl scale-110"
                            aria-hidden="true"
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                )}

                {/* 2. Foreground Image Layer */}
                <div className="relative z-10 w-full h-full p-4 md:p-6 flex items-center justify-center">
                    {event.heroImageUrl ? (
                        <Image
                            src={event.heroImageUrl}
                            alt={event.title}
                            fill
                            priority
                            className="object-contain drop-shadow-2xl"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-slate-400">
                            <span className="text-lg">No Image Available</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Content Section - Bottom Block */}
            <div className="p-6 md:p-10">
                {/* Category Badge */}
                <div className="flex flex-wrap gap-3 mb-6">
                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${event.categoryColor || "bg-blue-600"}`}>
                        {event.category}
                    </span>
                    {event.featured && (
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-500 text-slate-900">
                            Featured
                        </span>
                    )}
                </div>

                {/* Event Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight max-w-full">
                    {event.title}
                </h1>

                {/* Subtitle */}
                {event.subtitle && (
                    <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mb-8">
                        {event.subtitle}
                    </p>
                )}

                {/* Meta Information */}
                <div className="flex flex-wrap gap-4 text-slate-700">
                    <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-medium">{event.location}</span>
                    </div>
                    {event.attendees && (
                        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="text-sm font-medium">{event.attendees}+ Attendees</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
