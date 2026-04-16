import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { trainingServices, type TrainingService } from '@/data/servicesData';
import { pastEvents } from '@/data/eventsData';
import { type ServiceClient } from '@/types/service';
import { generateMetadata as generateSEOMetadata, generateMetaDescription } from '@/lib/metadata-generator';
import { generateServiceDetailPageAllSchemas } from '@/lib/schema-generators';
import JsonLd from '@/components/JsonLd';

// ============================================================================
// STATIC SITE GENERATION — Pre-build all service pages at deploy time
// Without this, service pages are fully dynamic (SSR-only) and not pre-rendered.
// ============================================================================
export async function generateStaticParams() {
  return trainingServices.map((service) => ({
    slug: service.slug,
  }));
}

// Revalidate daily so content stays fresh without full rebuilds
export const revalidate = 86400;

// Helper functions
function getServiceBySlug(slug: string): TrainingService | undefined {
  return trainingServices.find(s => s.slug === slug);
}

function getEventsByService(slug: string) {
  return pastEvents.filter(e => e.serviceType === slug);
}

// --- map server model -> serializable client model (no React components) ---
function toClientService(s: TrainingService): ServiceClient {
  const extras = s as unknown as {
    iconName?: string;
    stats?: ServiceClient['stats'];
    keywords?: ServiceClient['keywords'];
  };

  return {
    id: s.id,
    slug: s.slug,
    iconName: extras.iconName ?? 'GraduationCap',
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

// ---------- Static Import for Hero (LCP Optimization) ----------
import ServiceDetailHeroSection from '@/components/sections/ServiceDetailHeroSection';

// ---------- Dynamic sections (SSR enabled) ----------
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
      robots: { index: false, follow: true }
    };
  }

  const extras = service as unknown as { keywords?: string[]; ogImage?: string };
  const serviceKeywords = extras.keywords || [];
  const customOgImage = extras.ogImage;
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

  const rawDescription = `${service.tagline} ${service.shortDescription}`;
  const generatedDesc = generateMetaDescription(rawDescription, 160);
  const finalDescription = (generatedDesc && generatedDesc.length > 10)
    ? generatedDesc
    : `Join CDPL's ${service.title} training program. Industry-expert led courses with 100% placement support. Master usage with real-world projects.`;

  return generateSEOMetadata({
    title: `${service.title} | CDPL`,
    description: finalDescription,
    keywords,
    url: `/services/${slug}`,
    image: customOgImage || `/og-images/og-service-${slug}.webp`,
    type: 'article'
  });
}

export default async function ServiceDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const events = getEventsByService(slug);
  const serviceForClient = toClientService(service);

  // Generate all 8 schemas dynamically from real service data
  const schemas = generateServiceDetailPageAllSchemas({
    slug: service.slug,
    title: service.title,
    tagline: service.tagline,
    shortDescription: service.shortDescription,
    fullDescription: service.fullDescription,
    features: service.features,
    benefits: service.benefits,
    outcomes: service.outcomes,
    methodology: service.methodology,
    deliveryFormats: service.deliveryFormats,
    whoShouldAttend: service.whoShouldAttend,
  });

  return (
    <>
      {schemas.map((schema, index) => (
        <JsonLd key={`service-${slug}-schema-${index}`} id={`service-${slug}-schema-${index}`} schema={schema} />
      ))}

      {/* Semantic HTML Structure */}
      <main className="overflow-hidden">
        <ServiceDetailHeroSection service={serviceForClient} />
        <ServiceDetailAboutSection service={serviceForClient} />
        <ServiceDetailStatsSection service={serviceForClient} />
        <ServiceDetailFeaturesBenefitsSection service={serviceForClient} />
        <ServiceDetailAudienceSection service={serviceForClient} />
        <ServiceDetailOutcomesSection service={serviceForClient} />
        <ServiceDetailMethodologySection service={serviceForClient} />
        {events?.length > 0 && <ServiceDetailPastEventsSection events={events} />}
        <ServiceDetailCTASection service={serviceForClient} />
      </main>
    </>
  );
}
