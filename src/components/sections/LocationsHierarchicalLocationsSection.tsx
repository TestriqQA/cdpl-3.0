// src/components/sections/LocationsHierarchicalLocationsSection.tsx
import Link from "next/link";
import { ArrowRight, Building2, ChevronRight, MapPin } from "lucide-react";

type City = {
  name: string;
  lat: number;
  lng: number;
  courseTypes: string[];
  links: Record<string, string>;
};

type District = { district: string; description?: string; cities: City[] };
type StateT = { state: string; description?: string; districts: District[] };
type Country = { country: string; description?: string; states: StateT[] };
type HierarchyData = Country[];

interface Props {
  data: HierarchyData;
}

const COURSE_LABEL: Record<string, string> = {
  "software-testing": "Software Testing",
  "data-science": "Data Science",
  ai: "Artificial Intelligence",
  "business-intelligence": "Business Intelligence",
  "digital-marketing": "Digital Marketing",
  "web-development": "Web Development",
  programming: "Web Development", // legacy alias
};

const toHref = (slug: string) => (slug.startsWith("/") ? slug : `/${slug}`);

/**
 * Directory of the cities we publish course pages for: one plain card per
 * city with its course links as a simple list.
 *
 * Server component with every city and course link in the HTML: the old
 * version started collapsed and only mounted the links after a click, so
 * crawlers never saw them. The list is short (Tier 1 cities only, see
 * buildLocationsHierarchy), so it no longer needs accordions.
 */
export default function LocationsHierarchicalLocationsSection({ data }: Props) {
  const cities = data.flatMap((c) =>
    c.states.flatMap((s) => s.districts.flatMap((d) => d.cities.map((city) => ({ ...city, state: s.state }))))
  );

  return (
    <section id="locations-directory" aria-labelledby="locations-directory-heading" className="scroll-mt-20 bg-slate-50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Our locations
          </span>
          <h2 id="locations-directory-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Browse our <span className="text-brand">locations</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Pick your city to see the courses we run there, on campus at Mira Road or in live-online batches.
          </p>
        </div>

        {/* Campus highlight */}
        <div className="mb-6 flex flex-col items-start gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange-100 text-brand">
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Mira Road campus, Mumbai</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Our classroom campus in Mira Road East. Every other city learns with us in live-online batches.
              </p>
            </div>
          </div>
          <Link
            href="/mira-road-campus"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Visit the campus page <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Cities */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <article key={`${city.state}-${city.name}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">{city.name}</h3>
              <p className="text-sm text-slate-500">{city.state}</p>

              <ul className="mt-4 divide-y divide-slate-100 border-t border-slate-100">
                {city.courseTypes.map((type) => {
                  const label = COURSE_LABEL[type];
                  if (!label) return null;
                  return (
                    <li key={type}>
                      <Link
                        href={toHref(city.links[type])}
                        className="group flex items-center justify-between py-2.5 text-sm font-medium text-slate-700 transition-colors hover:text-brand"
                      >
                        <span>
                          {label}
                          <span className="sr-only"> course in {city.name}</span>
                        </span>
                        <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand" aria-hidden="true" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
