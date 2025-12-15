import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { trainingServices, type TrainingService } from '@/data/servicesData';
import { pastEvents } from '@/data/eventsData';
import { type ServiceClient } from '@/types/service';
import { generateMetadata as generateSEOMetadata } from '@/lib/metadata-generator';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema-generators';
import JsonLd from '@/components/JsonLd';

// Helper functions
function getServiceBySlug(slug: string): TrainingService | undefined {
  return trainingServices.find(s => s.slug === slug);
}

function getEventsByService(slug: string) {
  return pastEvents.filter(e => e.serviceType === slug);
}

// --- map server model -> serializable client model (no React components) ---
function toClientService(s: TrainingService): ServiceClient {
  // some datasets may not declare these extras in the TS type
  const extras = s as unknown as {
    iconName?: string;
    stats?: ServiceClient['stats'];
    keywords?: ServiceClient['keywords'];
  };

  return {
    id: s.id,
    slug: s.slug,
    iconName: extras.iconName ?? 'GraduationCap', // send only a string, never a component
    title: s.title,
    tagline: s.tagline,
    shortDescription: s.shortDescription,
    fullDescription: s.fullDescription,
    color: s.color,
    features: s.features,
    benefits: s.benefits,
    whoShouldAttend: s.whoShouldAttend,
    deliveryFormats: s.deliveryFormats,
    outcomes: s.outcomes,
    methodology: s.methodology,
    stats: extras.stats,
    keywords: extras.keywords,
  };
}

// ------- Reusable loader for dynamic sections -------
function SectionLoader({ label = 'Loading...' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

// ---------- Dynamic sections (SSR enabled) ----------
const ServiceDetailHeroSection = dynamic(
  () => import('@/components/sections/ServiceDetailHeroSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
);
const ServiceDetailAboutSection = dynamic(
  () => import('@/components/sections/ServiceDetailAboutSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading about..." /> }
);
const ServiceDetailStatsSection = dynamic(
  () => import('@/components/sections/ServiceDetailStatsSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading stats..." /> }
);
const ServiceDetailFeaturesBenefitsSection = dynamic(
  () => import('@/components/sections/ServiceDetailFeaturesBenefitsSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading features..." /> }
);
const ServiceDetailAudienceSection = dynamic(
  () => import('@/components/sections/ServiceDetailAudienceSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading audience..." /> }
);
const ServiceDetailOutcomesSection = dynamic(
  () => import('@/components/sections/ServiceDetailOutcomesSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading outcomes..." /> }
);
const ServiceDetailMethodologySection = dynamic(
  () => import('@/components/sections/ServiceDetailMethodologySection'),
  { ssr: true, loading: () => <SectionLoader label="Loading methodology..." /> }
);
const ServiceDetailPastEventsSection = dynamic(
  () => import('@/components/sections/ServiceDetailPastEventsSection'),
  { ssr: true, loading: () => <SectionLoader label="Loading events..." /> }
);
const ServiceDetailCTASection = dynamic(
  () => import('@/components/sections/ServiceDetailCTASection'),
  { ssr: true, loading: () => <SectionLoader label="Loading call-to-action..." /> }
);

// ============================================================================
// ENHANCED METADATA GENERATION FOR SEO
// ============================================================================
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | 404 - CDPL',
      description: 'The requested service page could not be found. Browse our available training services and corporate programs.',
      robots: {
        index: false,
        follow: true
      }
    };
  }

  // Extract keywords from service data
  const extras = service as unknown as { keywords?: string[] };
  const serviceKeywords = extras.keywords || [];

  // Build comprehensive keywords array
  const keywords = [
    service.title,
    `${service.title} training`,
    `${service.title} course`,
    `${service.title} corporate training`,
    `${service.title} workshop`,
    `${service.title} certification`,
    ...serviceKeywords,
    'CDPL training',
    'corporate training India',
    'professional development',
    'skill development',
    'industry training',
    'hands-on training',
    'mentor-led training',
    'job-ready skills',
    'Cinute Digital training'
  ];

  // Generate enhanced metadata using SEO utility
  return generateSEOMetadata({
    title: `${service.title} | CDPL`,
    description: `${service.tagline} — ${service.shortDescription} Learn ${service.title} with industry projects, mentor-led classes, and job-ready skills at CDPL.`,
    keywords,
    url: `/services/${slug}`,
    image: `/og-images/og-service-${slug}.webp`,
    type: 'article'
  });
}

export default async function ServiceDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const pastEvents = getEventsByService(slug);

  // map to client-safe shape (no Record<string, unknown> cast; no destructuring of icon)
  const serviceForClient = toClientService(service);

  // 1. Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` },
  ]);

  // 2. Service Schema
  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.shortDescription,
    url: `/services/${service.slug}`,
    serviceType: "Corporate Training",
    image: `/og-images/og-service-${service.slug}.webp`
  });

  return (
    <>
      <JsonLd id={`service-${slug}-breadcrumb`} schema={breadcrumbSchema} />
      <JsonLd id={`service-${slug}-schema`} schema={serviceSchema} />

      {/* Semantic HTML Structure */}
      <main
        className="overflow-hidden"
      >

        <ServiceDetailHeroSection service={serviceForClient} />
        <ServiceDetailAboutSection service={serviceForClient} />
        <ServiceDetailStatsSection service={serviceForClient} />
        <ServiceDetailFeaturesBenefitsSection service={serviceForClient} />
        <ServiceDetailAudienceSection service={serviceForClient} />
        <ServiceDetailOutcomesSection service={serviceForClient} />
        <ServiceDetailMethodologySection service={serviceForClient} />
        {pastEvents?.length > 0 && <ServiceDetailPastEventsSection events={pastEvents} />}
        <ServiceDetailCTASection service={serviceForClient} />
      </main>
    </>
  );
}
