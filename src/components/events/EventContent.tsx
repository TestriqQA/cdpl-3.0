import React from "react";
import { PastEvent } from "@/data/eventsData";
import Link from "next/link";
import { Target, Lightbulb, Star, Building2, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";

interface EventContentProps {
    event: PastEvent;
}

export default function EventContent({ event }: EventContentProps) {
    return (
        <div className="space-y-10">
            {/* Event Title and Metadata */}


            {/* Purpose Section */}
            <section className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 bg-blue-100 rounded-xl">
                        <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">Purpose</h2>
                </div>
                <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                    <p className="text-base md:text-lg">{event.purpose}</p>
                </div>
            </section>

            {/* Content & Session Highlights */}
            {event.sessionHighlights && event.sessionHighlights.length > 0 && (
                <section className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 bg-amber-100 rounded-xl">
                            <Lightbulb className="w-6 h-6 text-amber-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Content &amp; Session Highlights</h2>
                    </div>

                    <div className="mb-6">
                        <p className="text-slate-700 text-base md:text-lg">{event.trainingDuration}:</p>
                    </div>

                    {/* Introduction text if available */}
                    {event.specialSession && (
                        <div className="mb-6 text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <p className="leading-relaxed text-sm md:text-base">
                                The {event.category.toLowerCase()} was attended by distinguished representatives from both institutions:
                            </p>
                        </div>
                    )}

                    <div className="space-y-5">
                        {event.sessionHighlights.map((session, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-slate-200 to-slate-100 p-5 rounded-xl border border-slate-100">
                                {session.title && (
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{session.title}</h3>
                                )}
                                <ul className="space-y-2.5 list-none">
                                    {session.points.map((point, pIdx) => (
                                        <li key={pIdx} className="flex items-start text-slate-700 leading-relaxed group">
                                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 mt-0.5 mr-3 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <span className="text-sm md:text-base" dangerouslySetInnerHTML={{ __html: point }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Additional highlights if available */}
                    {event.highlights && event.highlights.length > 0 && (
                        <div className="mt-6 bg-blue-50 p-5 rounded-xl border border-blue-100">
                            <p className="text-slate-900 font-semibold mb-4 text-sm md:text-base">
                                Key highlights of this collaboration include:
                            </p>
                            <ul className="space-y-3 list-none">
                                {event.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start text-slate-700 leading-relaxed group">
                                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white mt-0.5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                        <span className="text-sm md:text-base" dangerouslySetInnerHTML={{ __html: highlight }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>
            )}

            {/* Key Takeaway Section */}
            {event.keyTakeaways && event.keyTakeaways.length > 0 && (
                <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2.5 bg-yellow-500/20 rounded-xl backdrop-blur-sm">
                                <Star className="w-6 h-6 text-yellow-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Key Takeaways</h2>
                        </div>

                        <div className="grid gap-4">
                            {event.keyTakeaways.map((takeaway, idx) => (
                                <div key={idx} className="flex items-center bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mr-3 flex-shrink-0 mt-0.5 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-slate-200 leading-relaxed font-semibold text-lg">{takeaway.title}</p>
                                        <p className="mt-1 text-slate-200 leading-relaxed text-sm md:text-base">{takeaway.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Closing Statement if available */}
            {event.subtitle && (
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                    <p className="text-slate-800 leading-relaxed text-base md:text-lg text-center">
                        {event.success}
                    </p>
                </div>
            )}

            {/* Organizer & Venue Section */}
            <div className="grid grid-cols-1 gap-6">
                {/* Organizer */}
                <section className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 bg-blue-100 rounded-xl">
                            <Building2 className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Organizer</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                <Image src={event.organizationImage} alt={event.organization} width={64} height={64} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">{event.organization}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {event.organizationWebsite && (
                                        <Link href={event.organizationWebsite.toString()} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors" title="Website">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.057v-3.057h2.994c-.059 1.143-.212 2.24-.456 3.279-.823-.12-1.674-.188-2.538-.222zm1.957 2.162c-.499 1.33-1.159 2.497-1.957 3.456v-3.62c.666.028 1.319.081 1.957.164zm-1.957-7.219v-3.015c.868-.034 1.721-.103 2.548-.224.238 1.027.389 2.111.446 3.239h-2.994zm0-5.014v-3.661c.806.969 1.471 2.15 1.971 3.496-.642.084-1.3.137-1.971.165zm2.703-3.267c1.237.496 2.354 1.228 3.29 2.146-.642.234-1.311.442-2.019.607-.344-.992-.775-1.91-1.271-2.753zm-7.241 13.56c-.244-1.039-.398-2.136-.456-3.279h2.994v3.057c-.865.034-1.714.102-2.538.222zm2.538 1.776v3.62c-.798-.959-1.458-2.126-1.957-3.456.638-.083 1.291-.136 1.957-.164zm-2.994-7.055c.057-1.128.207-2.212.446-3.239.827.121 1.68.19 2.548.224v3.015h-2.994zm1.024-5.179c.5-1.346 1.165-2.527 1.97-3.496v3.661c-.671-.028-1.329-.081-1.97-.165zm-2.005-.35c-.708-.165-1.377-.373-2.018-.607.937-.918 2.053-1.65 3.29-2.146-.496.844-.927 1.762-1.272 2.753zm-.549 1.918c-.264 1.151-.434 2.36-.492 3.611h-3.933c.165-1.658.739-3.197 1.617-4.518.88.361 1.816.67 2.808.907zm.009 9.262c-.988.236-1.92.542-2.797.9-.89-1.328-1.471-2.879-1.637-4.551h3.934c.058 1.265.231 2.488.5 3.651zm.553 1.917c.342.976.768 1.881 1.257 2.712-1.223-.49-2.326-1.211-3.256-2.115.636-.229 1.299-.435 1.999-.597zm9.924 0c.7.163 1.362.367 1.999.597-.931.903-2.034 1.625-3.257 2.116.489-.832.915-1.737 1.258-2.713zm.553-1.917c.27-1.163.442-2.386.501-3.651h3.934c-.167 1.672-.748 3.223-1.638 4.551-.877-.358-1.81-.664-2.797-.9zm.501-5.651c-.058-1.251-.229-2.46-.492-3.611.992-.237 1.929-.546 2.809-.907.877 1.321 1.451 2.86 1.616 4.518h-3.933z" />
                                            </svg>
                                        </Link>
                                    )}
                                    {event.organizationFacebook && (
                                        <Link href={event.organizationFacebook.toString()} className="text-slate-600 hover:text-blue-600 transition-colors" title="Facebook">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </Link>
                                    )}
                                    {event.organizationInstagram && (
                                        <Link href={event.organizationInstagram.toString()} className="text-slate-600 hover:text-pink-600 transition-colors" title="Instagram">
                                            <FaInstagram className="w-5 h-5" />
                                        </Link>
                                    )}
                                    {event.organizationTwitter && (
                                        <Link href={event.organizationTwitter.toString()} className="text-slate-600 hover:text-black transition-colors" title="Twitter">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </Link>
                                    )}
                                    {event.organizationYoutube && (
                                        <Link href={event.organizationYoutube.toString()} className="text-slate-600 hover:text-red-600 transition-colors" title="Youtube">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed">
                            {event.organizerDetails}
                        </p>
                        {event.organizationAbout && (
                            <Link
                                href={event.organizationAbout.toString()}
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                <span>More Info<span className="sr-only"> about {event.organization}</span></span>
                                <ExternalLink className="w-4 h-4" />
                            </Link>
                        )}
                    </div>
                </section>

                {/* Venue */}
                <section className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 bg-blue-100 rounded-xl">
                            <MapPin className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">Venue</h2>
                    </div>
                    <div className="space-y-4">
                        {event.venueImageUrl && (
                            <div className="rounded-lg overflow-hidden bg-slate-50 p-4 border border-slate-200">
                                <Image
                                    src={event.venueImageUrl}
                                    alt={event.venueTitle || event.location}
                                    className="w-full h-[200px] object-contain"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-slate-900">
                            {event.venueTitle || event.location}
                        </h3>
                        <p className="text-md text-slate-700 leading-relaxed">
                            {event.venueDescription}
                        </p>
                        {event.venueAddress && (
                            <div className="flex items-start gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
                                <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                                <span>{event.venueAddress}</span>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
