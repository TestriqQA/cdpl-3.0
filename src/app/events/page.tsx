// app/events/page.tsx
import type { Metadata } from "next";
import type { ComponentProps } from "react";
import { getEvents } from "@/lib/events";
import { PAST_EVENTS_FAQS } from "@/data/pastEventsData";
import { generateMetadata } from "@/lib/metadata-generator";
import { generateEventsPageAllSchemas } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// Type-only imports so we can still infer props and event shape
import type {
  default as EventsPastEventsAllEventsSectionType,
} from "@/components/sections/EventsPastEventsAllEventsSection";
import type { FeaturedEvent } from "@/components/sections/EventsPastEventsFeaturedEventsSliderSection";

// ---------- Dynamic sections (SSR enabled) ----------
// Static imports for partial hydration / immediate LCP
import EventsPastEventsHeroSection from "@/components/sections/EventsPastEventsHeroSection";

// Dynamic imports for below-the-fold content
// Client-side wrapper for heavy sections to allow ssr: false
import PastEventsLazySections from "@/components/wrappers/PastEventsLazySections";

// Infer prop types from the AllEvents section to avoid `any`
type AllEventsProps = ComponentProps<
  typeof EventsPastEventsAllEventsSectionType
>;

const CATEGORY_STYLES: Record<
  string,
  { badgeBg: string; btnBg: string; text: string }
> = {
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

// ============================================================================
// SEO METADATA - Consolidated for /events
// ============================================================================
export const metadata: Metadata = generateMetadata({
  title: "Events - Workshops, Webinars & Training Sessions | CDPL",
  description: "Explore CDPL's events including corporate training workshops, technical webinars, industry conferences, and hands-on training sessions on Software Testing, Data Science, AI/ML, and Automation. See highlights, attendees, and success stories from our events.",
  keywords: [
    "CDPL events",
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
  url: "/events",
  image: "/og-images/events-og.webp",
  imageAlt: "CDPL Events - Workshops, Webinars & Training Sessions",
});

// ============================================================================
// EVENTS PAGE COMPONENT
// ============================================================================
export default async function EventsPage() {
  // BLG-133 follow-up: editor-managed events. Falls back to the local
  // pastEvents array inside getEvents() when Sanity is empty.
  const events = await getEvents();

  const featuredEvents: FeaturedEvent[] = events
    .filter((e) => e.featured)
    .slice(0, 6)
    .map((e) => ({
      id: e.id,
      slug: e.slug,
      title: e.title,
      subtitle: e.subtitle,
      date: e.date,
      location: e.location,
      attendees: e.attendees,
      organization: e.organization,
      category: e.category,
      categoryColor: (CATEGORY_STYLES[e.category] ?? FALLBACK).badgeBg,
      featured: e.featured,
      heroImageUrl: e.heroImageUrl,
    }));

  const regularEvents: AllEventsProps["events"] = events
    .slice(0, 12)
    .map((e) => ({
      id: e.id,
      slug: e.slug,
      title: e.title,
      subtitle: e.subtitle,
      date: e.date,
      location: e.location,
      attendees: e.attendees,
      organization: "",
      purpose: e.purpose.length > 250 ? e.purpose.substring(0, 250) + "..." : e.purpose,
      highlights: [],
      category: e.category,
      heroImageUrl: e.heroImageUrl,
    }));

  // Generate the full 8-point schema array
  const schemas = generateEventsPageAllSchemas(
    events.map(e => ({
      title: e.title,
      subtitle: e.subtitle,
      purpose: e.purpose,
      slug: e.slug,
      heroImageUrl: e.heroImageUrl,
      date: e.date,
      location: e.location
    })),
    PAST_EVENTS_FAQS
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`events-schema-${index}`} id={`events-schema-${index}`} schema={schema} />
      ))}

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <EventsPastEventsHeroSection />
        <PastEventsLazySections
          featuredEvents={featuredEvents}
          regularEvents={regularEvents}
        />
      </div>
    </>
  );
}
