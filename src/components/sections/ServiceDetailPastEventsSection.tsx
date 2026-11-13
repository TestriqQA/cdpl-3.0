import Link from 'next/link';
import { Calendar, Building2, Users, ArrowRight } from 'lucide-react';
import type { ServiceEvent } from '@/types/service';
import { ServiceSectionHeader } from './serviceDetailShared';

/**
 * Past Events & Programs. Each card is one link (the old card nested a
 * <button> inside the <a>, which is invalid and gave keyboard users two stops).
 */
export default function ServiceDetailPastEventsSection({ events }: { events: ServiceEvent[] }) {
  return (
    <section className="bg-gray-50 py-12 lg:py-16" aria-labelledby="past-events-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader
          id="past-events-heading"
          pill="Track Record"
          title={<>Past Events &amp; <span className="text-brand">Programs</span></>}
          intro="See how we've successfully delivered this service to organizations like yours."
        />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <li key={event.id}>
              <Link
                href={`/events/${event.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand" />
                <span className={`self-start rounded-full ${event.categoryColor} px-3 py-1 text-xs font-semibold text-white`}>
                  {event.category}
                </span>

                <h3 className="mt-4 line-clamp-2 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-brand">
                  {event.title}
                </h3>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {event.date}
                  </li>
                  <li className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span className="line-clamp-1">{event.organization}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {event.attendees} participants
                  </li>
                </ul>

                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-slate-700">{event.purpose}</p>

                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand">
                  View Full Details
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
