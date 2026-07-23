import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServices, getServiceBySlug } from '@/lib/services';
import { getEvents } from '@/lib/events';
import { generateMetadata as generateSEOMetadata, generateMetaDescription } from '@/lib/metadata-generator';
import { generateServiceDetailPageAllSchemas } from '@/lib/schema-generators';
import JsonLd from '@/components/JsonLd';

// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import ServiceDetailHeroSection from '@/components/sections/ServiceDetailHeroSection';
import ServiceDetailAboutSection from '@/components/sections/ServiceDetailAboutSection';
import ServiceDetailStatsSection from '@/components/sections/ServiceDetailStatsSection';
import ServiceDetailFeaturesBenefitsSection from '@/components/sections/ServiceDetailFeaturesBenefitsSection';
import ServiceDetailAudienceSection from '@/components/sections/ServiceDetailAudienceSection';
import ServiceDetailOutcomesSection from '@/components/sections/ServiceDetailOutcomesSection';
import ServiceDetailMethodologySection from '@/components/sections/ServiceDetailMethodologySection';
import ServiceDetailPastEventsSection from '@/components/sections/ServiceDetailPastEventsSection';
import ServiceDetailCTASection from '@/components/sections/ServiceDetailCTASection';

// ============================================================================
// STATIC SITE GENERATION — Pre-build all service pages at deploy time
// Without this, service pages are fully dynamic (SSR-only) and not pre-rendered.
// ============================================================================
export async function generateStaticParams() {
  // BLG-133 follow-up: pulls slugs from Sanity first; falls back to the
  // local trainingServices array inside getServices() when Sanity is empty.
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

// Revalidate daily so content stays fresh without full rebuilds
export const revalidate = 86400;

// ============================================================================
// ENHANCED METADATA GENERATION FOR SEO
// ============================================================================
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | 404 - CDPL',
      description: 'The requested service page could not be found. Browse our available training services and corporate programs.',
      robots: { index: false, follow: true }
    };
  }

  const serviceKeywords = service.keywords || [];
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
    : `Join CDPL's ${service.title} training program. Industry-expert led courses with placement support. Master usage with real-world projects.`;

  return generateSEOMetadata({
    title: `${service.title} — Training Programs & Solutions | CDPL`,
    description: finalDescription,
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
  const serviceForClient = await getServiceBySlug(slug);
  if (!serviceForClient) notFound();
  // Alias kept for the schema-generator call below, which historically
  // took the full TrainingService shape; ServiceClient is a superset of
  // every field it actually reads.
  const service = serviceForClient;

  // BLG-133 follow-up: related events now come from getEvents() (Sanity
  // first, local pastEvents fallback) so editor-published events with a
  // matching serviceType show up here too.
  const allEvents = await getEvents();
  const events = allEvents.filter((e) => e.serviceType === slug);

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
      <div className="overflow-hidden">
        <ServiceDetailHeroSection service={serviceForClient} />
        <ServiceDetailAboutSection service={serviceForClient} />
        <ServiceDetailStatsSection service={serviceForClient} />
        <ServiceDetailFeaturesBenefitsSection service={serviceForClient} />
        <ServiceDetailAudienceSection service={serviceForClient} />
        <ServiceDetailOutcomesSection service={serviceForClient} />
        <ServiceDetailMethodologySection service={serviceForClient} />
        {events?.length > 0 && <ServiceDetailPastEventsSection events={events} />}
        <ServiceDetailCTASection service={serviceForClient} />
      </div>
    </>
  );
}
