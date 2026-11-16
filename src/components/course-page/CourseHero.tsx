import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import LeadForm from "@/components/forms/ApiCourseLeadForm";
import { Heading, Rich } from "@/components/ui/Rich";
import CtaButtons from "./parts/CtaButtons";
import { CARD, Dot, GRID_GAP, IconTile, SPACE } from "./parts/Section";
import { ICONS, tileColour } from "./parts/icons";
import type { CourseHero as Hero } from "@/types/coursePage";

/** Hero for course and category-hub pages. The last crumb has no href. */
export default function CourseHero({
  hero,
  crumbs,
  courseName,
  sourceName,
}: {
  hero: Hero;
  crumbs: { label: string; href?: string }[];
  /** Sent with leads; empty on hub pages (no single course). */
  courseName?: string;
  sourceName: string;
}) {
  const source = `${sourceName} - Hero Section`;

  return (
    <section id="hero" aria-labelledby="course-hero-heading" className="relative overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 sm:pb-12 md:pb-16 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1.5">
                {i === 0 ? (
                  <Home className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                )}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-brand">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-semibold text-slate-800">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* One lead form: under the h1 on mobile, in the right column from md up. */}
        <div className="mt-8 grid items-start gap-x-10 gap-y-6 md:grid-cols-12">
          <div className="md:col-span-7 lg:col-span-8">
            {hero.badges && hero.badges.length > 0 && (
              <ul className="mb-4 flex flex-wrap gap-2">
                {hero.badges.map(({ icon, text }) => {
                  const Icon = ICONS[icon];
                  return (
                    <li
                      key={text}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur"
                    >
                      <Icon className={`h-4 w-4 ${icon === "star" ? "fill-amber-400 text-amber-400" : "text-slate-500"}`} aria-hidden="true" />
                      <Rich text={text} />
                    </li>
                  );
                })}
              </ul>
            )}
            <h1
              id="course-hero-heading"
              className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl xl:text-5xl"
            >
              <Heading text={hero.h1} />
            </h1>
            {hero.note && (
              <p className="mt-3 text-sm text-slate-600">
                {hero.note.text}{" "}
                <Link
                  href={hero.note.link.href}
                  className="font-semibold text-brand underline underline-offset-2 hover:text-slate-900"
                >
                  {hero.note.link.label}
                </Link>
                .
              </p>
            )}
          </div>

          <aside className="md:col-span-5 md:col-start-8 md:row-span-2 md:row-start-1 lg:col-span-4 lg:col-start-9">
            <LeadForm variant="elevated" source={source} courseName={courseName} />
          </aside>

          <div className="md:col-span-7 md:row-start-2 lg:col-span-8">
            <p className="max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
              <Rich text={hero.subtitle} />
            </p>
            {hero.description && (
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600">
                <Rich text={hero.description} />
              </p>
            )}

            <CtaButtons
              actions={hero.ctas}
              courseName={courseName}
              source={source}
              tone="brand"
              center={false}
              className="mt-8"
            />

            {hero.highlights && hero.highlights.length > 0 && (
              <ul className="mt-8 grid max-w-3xl gap-2.5 text-sm text-slate-700 sm:grid-cols-2">
                {hero.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5">
                    <Dot />
                    <span>
                      <Rich text={h} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {hero.features && hero.features.length > 0 && (
          <div className={SPACE.body}>
            {hero.featuresTitle && <h2 className="sr-only">{hero.featuresTitle}</h2>}
            {/* 4 features: 2×2, one row on wide screens. 3 or 6: rows of three. */}
            <ul className={`grid ${GRID_GAP} sm:grid-cols-2 ${hero.features.length % 4 === 0 ? "xl:grid-cols-4" : "lg:grid-cols-3"}`}>
              {hero.features.map(({ icon, title, description }, i) => {
                const Icon = ICONS[icon];
                return (
                  <li key={title} className={`${CARD} flex items-center gap-3 p-5`}>
                    <IconTile className={tileColour(i)}>
                      <Icon className="h-5 w-5" />
                    </IconTile>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-slate-900">{title}</h3>
                      {description && (
                        <p className="text-sm text-slate-600">
                          <Rich text={description} />
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
