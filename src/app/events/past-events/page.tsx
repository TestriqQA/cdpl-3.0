// app/events/past-events/page.tsx
import type { Metadata } from "next";
import type { ComponentProps } from "react";
import dynamic from "next/dynamic";
import { pastEvents } from "@/data/eventsData";
import { PAST_EVENTS_FAQS } from "@/data/pastEventsData";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateBreadcrumbSchema, generateFAQSchema, generateCollectionPageSchema, generateEventSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// Type-only imports so we can still infer props and event shape
import type {
  default as EventsPastEventsAllEventsSectionType,
} from "@/components/sections/EventsPastEventsAllEventsSection";
import type { FeaturedEvent } from "@/components/sections/EventsPastEventsFeaturedEventsSliderSection";

// Small inline loader for dynamic sections
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-8">
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled) ----------
// Static imports for partial hydration / immediate LCP
import EventsPastEventsHeroSection from "@/components/sections/EventsPastEventsHeroSection";

// Dynamic imports for below-the-fold content
const EventsPastEventsFeaturedEventsSliderSection = dynamic(
  () => import("@/components/sections/EventsPastEventsFeaturedEventsSliderSection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading featured events..." />,
  }
);

const EventsPastEventsAllEventsSection = dynamic(
  () => import("@/components/sections/EventsPastEventsAllEventsSection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading events..." />,
  }
);



const EventsPastEventsCTASection = dynamic(
  () => import("@/components/sections/EventsPastEventsCTASection"),
  {
    ssr: true,
    loading: () => <SectionLoader label="Loading call-to-action..." />,
  }
);

// Infer prop types from the AllEvents section to avoid `any`
type AllEventsProps = ComponentProps<
  typeof EventsPastEventsAllEventsSectionType
>;

const CATEGORY_STYLES: Record<
  string,
  { badgeBg: string; btnBg: string; text: string }
> = {
  "AI & Machine Learning": {
    badgeBg: "bg-purple-600",
    btnBg: "bg-purple-600",
    text: "text-purple-600",
  },
  "Software Testing": {
    badgeBg: "bg-green-600",
    btnBg: "bg-green-600",
    text: "text-green-600",
  },
  "Data Science": {
    badgeBg: "bg-blue-600",
    btnBg: "bg-blue-600",
    text: "text-blue-600",
  },
  "Academic Training": {
    badgeBg: "bg-orange-600",
    btnBg: "bg-orange-600",
    text: "text-orange-600",
  },
  "Web Development": {
    badgeBg: "bg-cyan-600",
    btnBg: "bg-cyan-600",
    text: "text-cyan-600",
  },
  "Industrial Training": {
    badgeBg: "bg-teal-600",
    btnBg: "bg-teal-600",
    text: "text-teal-600",
  },
  "Corporate Training": {
    badgeBg: "bg-pink-600",
    btnBg: "bg-pink-600",
    text: "text-pink-600",
  },
  Technology: {
    badgeBg: "bg-indigo-600",
    btnBg: "bg-indigo-600",
    text: "text-indigo-600",
  },
};

const FALLBACK = {
  badgeBg: "bg-slate-700",
  btnBg: "bg-slate-700",
  text: "text-slate-700",
};

// ============================================================================
// SEO METADATA - Enhanced for Past Events Page
// ============================================================================
export const metadata: Metadata = generateMetadata({
  title: "Past Events - Workshops, Webinars & Training Sessions | CDPL",
  description: "Explore CDPL's past events including corporate training workshops, technical webinars, industry conferences, and hands-on training sessions on Software Testing, Data Science, AI/ML, and Automation. See highlights, attendees, and success stories from our events.",
  keywords: [
    "CDPL past events",
    "software testing workshops",
    "data science webinars",
    "technical training sessions",
    "corporate training events",
    "AI ML workshops",
    "automation testing events",
    "industry conferences",
    "CDPL events gallery",
    "training highlights",
    "tech events India",
    "developer workshops",
    "QA training events",
    "cloud computing workshops",
    "DevOps training sessions",
  ],
  url: "/events/past-events",
  image: "/og-images/og-image-events.webp",
  imageAlt: "CDPL Past Events - Workshops, Webinars & Training Sessions",
});



// ============================================================================
// PAST EVENTS PAGE COMPONENT
// ============================================================================
export default function PastEventsPage() {
  const featuredEvents: FeaturedEvent[] = pastEvents
    .filter((e) => e.featured)
    .slice(0, 10)
    .map((e) => ({
      id: e.id,
      slug: e.slug,
      title: e.title,
      subtitle: e.subtitle,
      date: e.date,
      location: e.location,
      attendees: e.attendees,
      organization: e.organization,
      purpose: e.purpose,
      highlights: e.highlights,
      category: e.category,
      categoryColor: (CATEGORY_STYLES[e.category] ?? FALLBACK).badgeBg,
      featured: e.featured,
      heroImageUrl: e.heroImageUrl,
    }));

  // Type this exactly as the AllEvents section expects
  const regularEvents: AllEventsProps["events"] = pastEvents
    .map((e) => ({
      id: e.id,
      slug: e.slug,
      title: e.title,
      subtitle: e.subtitle,
      date: e.date,
      location: e.location,
      attendees: e.attendees,
      organization: e.organization,
      purpose: e.purpose,
      highlights: e.highlights,
      category: e.category,
      heroImageUrl: e.heroImageUrl,
    }));



  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Events", url: "/events/past-events" },
    { name: "Past Events", url: "/events/past-events" },
  ]);

  // CollectionPage Schema with Events
  const collectionPageSchema = generateCollectionPageSchema({
    name: "CDPL Past Events",
    description: "Browse our past workshops, webinars, and training events",
    url: "/events/past-events",
    hasPart: pastEvents.slice(0, 10).map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: generateEventSchema({
        name: event.title,
        description: event.subtitle || event.purpose,
        startDate: event.date,
        location: { name: event.location },
        image: event.heroImageUrl,
        eventStatus: "EventScheduled",
        eventAttendanceMode: "OfflineEventAttendanceMode",
      })
    }))
  });

  // FAQ Schema
  const faqs = PAST_EVENTS_FAQS;
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      {/* Structured Data */}
      <JsonLd id="breadcrumb-schema" schema={breadcrumbSchema} />
      <JsonLd id="collection-page-schema" schema={collectionPageSchema} />
      <JsonLd id="faq-schema" schema={faqSchema} />

      {/* Main Content */}
      <div
        className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"
      >
        {/* HERO (separate component) */}
        <EventsPastEventsHeroSection />

        {/* Featured */}
        {featuredEvents.length > 0 && (
          <section id="featured-events" className="py-10 w-full">
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
        <section id="all-past-events" className="py-4 w-full">
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

        {/* CTA (separate component) */}
        <EventsPastEventsCTASection />
      </div>
    </>
  );
}
