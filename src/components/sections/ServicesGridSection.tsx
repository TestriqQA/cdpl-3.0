// src/components/sections/ServicesGridSection.tsx
//
// BLG-133 follow-up — server component. Receives services as a prop from
// the /services page (which fetches them from Sanity with a local fallback
// in src/lib/services.ts). Resolves the editor-picked `iconName` string to
// a lucide-react component via the same `Icons[key]` lookup pattern used
// by ServiceDetailHeroSection / CTASection.
import * as Icons from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import type { ServiceClient } from "@/types/service";
import ServiceCardGrid from "./ServiceCardGrid";

type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;
function getIcon(name: string): LucideIcon {
  const key = name as keyof typeof Icons;
  const Icon = Icons[key];
  return (Icon as unknown as LucideIcon) ?? Icons.GraduationCap;
}

interface ServicesGridSectionProps {
  services: ServiceClient[];
}

export default function ServicesGridSection({ services }: ServicesGridSectionProps) {
  return (
    <section id="services-grid" className="pt-6 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <header className="mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-[rgb(0,105,168)]">Our</span>{" "}
            <span className="text-[rgb(255,140,0)]">programs</span>
          </h2>
        </header>

        {/* Closed cards show only icon + title so the whole catalogue fits on
            one screen; one card opens at a time. Icons are resolved here so
            lucide's full icon set stays on the server. */}
        <ServiceCardGrid
          items={services.map((service) => {
            const IconComponent = getIcon(service.iconName);
            return {
              id: service.id,
              title: service.title,
              tagline: service.tagline,
              description: service.shortDescription,
              features: service.features.slice(0, 4),
              href: `/services/${service.slug}`,
              color: service.color,
              icon: <IconComponent className="h-6 w-6" />,
            };
          })}
        />
      </div>
    </section>
  );
}

