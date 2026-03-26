import { getEventBySlug, pastEvents } from "@/data/eventsData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateEventMetadata } from "@/lib/metadata-generator";
import { generateEventSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import EventHero from "@/components/events/EventHero";
import EventContent from "@/components/events/EventContent";
import EventSidebar from "@/components/events/EventSidebar";
import EventGallery from "@/components/events/EventGallery";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import RelatedEvents from "@/components/events/RelatedEvents";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return pastEvents.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return { title: "Event Not Found" };
  const event = getEventBySlug(slug as string);
  if (!event) return { title: "Event Not Found" };

  return generateEventMetadata({
    title: event.title,
    description: `${event.purpose || event.subtitle} - ${event.category} event organized by ${event.organization || "CDPL"} at ${event.location}. ${event.attendees ? `Attended by ${event.attendees}+ participants.` : ""} View highlights, sessions, and key takeaways.`,
    slug: event.slug,
    category: event.category,
    organizer: event.organization,
    location: event.location,
    image: event.heroImageUrl,
    keywords: [
      ...(event.category.toLowerCase().includes("testing") ? ["software testing", "QA training"] : []),
      ...(event.category.toLowerCase().includes("data") ? ["data science", "analytics"] : []),
      ...(event.category.toLowerCase().includes("ai") ? ["artificial intelligence", "machine learning"] : []),
    ],
  });
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) notFound();
  const event = getEventBySlug(slug as string);
  if (!event) notFound();

  // Generate Schemas
  const eventSchema = generateEventSchema({
    name: event.title,
    description: event.purpose || event.subtitle || "",
    startDate: event.date,
    endDate: event.date,
    location: {
      name: event.location,
      address: event.venueAddress || event.location,
    },
    image: event.heroImageUrl,
    eventStatus: "EventScheduled",
    eventAttendanceMode: "OfflineEventAttendanceMode",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Events", url: "/events" },
    { name: event.title, url: `/events/${event.slug}` },
  ]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* JSON-LD Schemas */}
      <JsonLd id="event-schema" schema={eventSchema} />
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />

      {/* Main Content Area - Contained */}
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-slate-400" />
              <Link href="/events" className="hover:text-blue-600 transition-colors">Events</Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-slate-400" />
              <span className="font-semibold text-slate-900 truncate max-w-[200px] md:max-w-md">{event.title}</span>
            </li>
          </ol>
        </nav>

        {/* Hero Section - Now Contained */}
        <div className="mb-8">
          <EventHero event={event} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column (2/3 width on desktop) */}
          <div className="lg:col-span-2 space-y-8">
            <EventContent event={event} />

            {event.gallery && event.gallery.length > 0 && (
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm">
                <EventGallery event={event} />
              </div>
            )}
          </div>

          {/* Sidebar Column (1/3 width on desktop) */}
          <div className="lg:col-span-1">
            <EventSidebar event={event} />
          </div>
        </div>

        {/* Related Events Section - Full Width within Container */}
        {pastEvents.length > 1 && (
          <div className="mt-16">
            <RelatedEvents currentSlug={slug} />
          </div>
        )}
      </div>
    </div>
  );
}
