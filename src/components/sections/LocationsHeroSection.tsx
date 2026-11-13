import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Home, MapPin } from "lucide-react";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Locations We Serve", href: "/locations-we-serve" },
];

const CHIPS = ["Mira Road campus", "Live-online across India", "Pan-India placements", "Local mentor support"];

/**
 * Locations hero, in the site's hero style (About / Reviews): breadcrumbs,
 * orange pill, dark heading with an orange key word, brand CTAs, and the
 * globe illustration on a soft orange glow. Server component.
 */
export default function LocationsHeroSection() {
  return (
    <section aria-labelledby="locations-heading" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -right-24 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={c.href} className="flex items-center gap-2">
                  {i === 0 ? <Home className="h-4 w-4" aria-hidden="true" /> : <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                  <Link
                    href={c.href}
                    aria-current={isLast ? "page" : undefined}
                    className={`transition-colors hover:text-brand ${isLast ? "font-semibold text-slate-900" : ""}`}
                  >
                    {c.label}
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              India-wide presence
            </span>

            <h1 id="locations-heading" className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Explore our <span className="text-brand">locations</span> across India
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              From our Mira Road campus to live-online batches across India, discover CDPL&apos;s industry-leading{" "}
              <strong className="text-slate-800">Software Testing (QA)</strong>,{" "}
              <strong className="text-slate-800">Data Science &amp; AI/ML</strong>,{" "}
              <strong className="text-slate-800">Business Intelligence</strong> and{" "}
              <strong className="text-slate-800">Digital Marketing</strong> programs near you.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/contact-us"
                className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 sm:w-auto"
              >
                Talk to our team <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#locations-directory"
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 sm:w-auto"
              >
                Find your city
              </a>
            </div>

            <ul className="mt-7 grid gap-3 border-t border-slate-200/70 pt-6 text-[15px] text-slate-700 sm:grid-cols-2 sm:text-base">
              {CHIPS.map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — globe on a soft glow */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[22rem] sm:max-w-[28rem]">
              <div aria-hidden="true" className="absolute inset-8 rounded-full bg-brand/20 blur-3xl" />
              <Image
                src="/locations/earth.png"
                alt="Earth illustration"
                width={500}
                height={500}
                sizes="(min-width: 1024px) 448px, (min-width: 640px) 448px, 352px"
                className="relative h-auto w-full object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
