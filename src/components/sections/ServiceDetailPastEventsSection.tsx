import Link from 'next/link';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import type { ServiceEvent } from '@/types/service';

export default function ServiceDetailPastEventsSection({ events }: { events: ServiceEvent[] }) {
    return (
        <section className="w-full">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Past Events & Programs</h2>
                <p className="text-lg text-gray-600 mb-8">
                    See how we’ve successfully delivered this service to organizations like yours.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <article
                            key={event.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ring-1 ring-black/5"
                        >
                            <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Calendar className="w-16 h-16 text-purple-300" />
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className={`${event.categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md`}>
                                        {event.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <Calendar className="w-4 h-4 text-purple-600" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <MapPin className="w-4 h-4 text-green-600" />
                                        <span className="line-clamp-1">{event.organization}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                                        <Users className="w-4 h-4 text-blue-600" />
                                        <span>{event.attendees} participants</span>
                                    </div>
                                </div>

                                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{event.purpose}</p>

                                <Link href={`/events/${event.slug}`} className="block">
                                    <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                                        View Full Details
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
