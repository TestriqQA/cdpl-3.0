import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BarChart3,
  BrainCircuit,
  ChevronRight,
  Clock,
  Home,
  Mail,
  MapPin,
  Megaphone,
  Navigation,
  Phone,
  PieChart,
  School,
  ShieldCheck,
  Star,
  TrainFront,
  type LucideIcon,
} from "lucide-react";
import { BUSINESS_INFO, REVIEW_PROFILES } from "@/lib/seo-config";
import { SiteStat } from "@/components/stats/SiteStatsProvider";
import CampusVisitButton from "./CampusVisitButton";

/**
 * /mira-road-campus — SCAFFOLD, NOT READY TO INDEX.
 *
 * T-02 (local-SEO audit, Oct 2026). Mira Road East is CDPL's only physical
 * campus and it has no page of its own, which is the base every local play in
 * the audit builds on. The structure lands first so the content team can fill
 * it; the route ships `noindex` and is deliberately absent from sitemap.ts.
 *
 * Rule 2 of the audit applies here: a thin page that is indexed does MORE harm
 * than a noindex one, because it brings cannibalisation back. Do not remove the
 * `robots` block below, and do not add this URL to the sitemap, until every
 * TODO is resolved and SEO confirms the 8-point content gate passes.
 *
 * Brand rework (Nov 2026): everything that can come from BUSINESS_INFO is live
 * (address, map, directions, hours, phone, email, enquiry form). Nothing on
 * the page is a placeholder; the remaining content gate lives here instead:
 *
 * TODO(content) before this page may be indexed:
 *   1. Walking directions from the station exit: minutes on foot and the
 *      landmark to look for.
 *   2. Verify every WESTERN_LINE travel time below.
 *   3. Confirm all five CLASSROOM_COURSES families run classroom batches here.
 *   4. Batch timings: real weekday morning / weekday evening / weekend times.
 *      Never publish placeholder times.
 *   5. Campus facilities (labs, systems, seating) with REAL photographs of
 *      this campus. No stock images.
 *   6. WhatsApp link, once the campus WhatsApp number is confirmed.
 *   7. Campus-specific FAQs. Add FAQPage schema only once the answers are
 *      final, or the markup will not match the visible content.
 */
export const metadata: Metadata = {
  title: { absolute: "IT Training Institute in Mira Road East | CDPL Campus" },
  description:
    "CDPL's campus is opposite Mira Road Station (E), at Shanti Shopping Centre. Classroom batches in Software Testing, Data Science, AI and Digital Marketing. Visit or call to book a seat.",
  alternates: { canonical: "/mira-road-campus" },
  // Hardcoded until the content gate passes — see the file header.
  robots: { index: false, follow: true },
};

/**
 * Western Line stations in real line order, north (Virar side) to south
 * (Churchgate side), with Mira Road in the middle. `minutes` is the local-train
 * time to Mira Road. TODO(content): verify each time.
 */
const WESTERN_LINE: ReadonlyArray<{ station: string; minutes?: string }> = [
  { station: "Vasai Road", minutes: "~20 min" },
  { station: "Naigaon", minutes: "~12 min" },
  { station: "Bhayandar", minutes: "~5 min" },
  { station: "Mira Road" }, // the campus
  { station: "Dahisar", minutes: "~12 min" },
  { station: "Borivali", minutes: "~18 min" },
  { station: "Kandivali", minutes: "~22 min" },
];

/** The five families taught at the campus. */
const CLASSROOM_COURSES: ReadonlyArray<{ label: string; href: string; Icon: LucideIcon; tile: string }> = [
  { label: "Software Testing", href: "/courses/software-testing-course", Icon: ShieldCheck, tile: "bg-brand" },
  { label: "Data Science & Machine Learning", href: "/courses/ds-ml-courses", Icon: BarChart3, tile: "bg-sky-600" },
  { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses", Icon: BrainCircuit, tile: "bg-indigo-600" },
  { label: "Business Intelligence", href: "/courses/bi-courses", Icon: PieChart, tile: "bg-emerald-600" },
  { label: "Digital Marketing", href: "/courses/digital-marketing-courses", Icon: Megaphone, tile: "bg-rose-500" },
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/** "09:00" -> "9:00 AM" */
function to12h(t: string) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${suffix}`;
}

/** Opening hours from BUSINESS_INFO, with consecutive identical days merged. */
function openingHours(): { days: string; time: string }[] {
  const byDay = new Map<string, string>();
  for (const entry of BUSINESS_INFO.openingHours) {
    const [day, range] = entry.split(" ");
    const [open, close] = range.split("-");
    byDay.set(day, `${to12h(open)} – ${to12h(close)}`);
  }
  const rows: { start: string; end: string; time: string }[] = [];
  for (const day of DAYS) {
    const time = byDay.get(day) ?? "Closed";
    const last = rows[rows.length - 1];
    if (last && last.time === time) last.end = day;
    else rows.push({ start: day, end: day, time });
  }
  const short = (d: string) => d.slice(0, 3);
  return rows.map((r) => ({
    days: r.start === r.end ? r.start : `${short(r.start)} – ${short(r.end)}`,
    time: r.time,
  }));
}

function SectionHeader({ eyebrow, title, accent }: { eyebrow: string; title: string; accent: string }) {
  return (
    <header>
      <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title} <span className="text-brand">{accent}</span>
      </h2>
    </header>
  );
}

export default function MiraRoadCampusPage() {
  const a = BUSINESS_INFO.address;
  const fullAddress = `${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}`;
  const phoneDisplay = BUSINESS_INFO.phone.replace(/^\+91(\d{5})(\d{5})$/, "+91 $1 $2");
  const hours = openingHours();

  return (
    <main className="relative isolate overflow-hidden">
      {/* Brand glows, as on the About / Reviews heroes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem]">
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -right-24 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-200/40 blur-3xl" />
      </div>

      {/* ---------------- Hero ---------------- */}
      <section aria-labelledby="campus-heading" className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <Home className="h-4 w-4" aria-hidden="true" />
              <Link href="/" className="hover:text-brand">Home</Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <Link href="/locations-we-serve" className="hover:text-brand">Locations</Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span aria-current="page" className="font-semibold text-slate-900">Mira Road Campus</span>
            </li>
          </ol>
        </nav>

        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
              <School className="h-4 w-4" aria-hidden="true" />
              Our Classroom Campus
            </span>
            <h1 id="campus-heading" className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              CDPL Training Campus, <span className="text-brand">Mira Road East</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Right opposite Mira Road Station (E), at Shanti Shopping Centre. Classroom batches in Software
              Testing, Data Science, AI and Digital Marketing. Visit or call to book a seat.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CampusVisitButton source="Mira Road Campus - Hero" />
              <a
                href={BUSINESS_INFO.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-3 font-semibold text-slate-800 shadow-sm transition hover:bg-orange-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              >
                <Navigation className="h-4 w-4 text-brand" aria-hidden="true" />
                Get Directions
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200/70 pt-5 text-sm text-slate-600">
              <a href={REVIEW_PROFILES.google} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand">
                <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" aria-hidden="true" />
                <span className="font-semibold text-slate-900"><SiteStat k="rating" /></span> from <SiteStat k="reviews" /> Google reviews
              </a>
              <span className="inline-flex items-center gap-1.5">
                <TrainFront className="h-4 w-4 text-brand" aria-hidden="true" />
                Opposite Mira Road Station (E)
              </span>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-xl">
              <iframe
                title="CDPL Mira Road East campus on Google Maps"
                src={BUSINESS_INFO.maps.embed}
                className="h-72 w-full rounded-2xl sm:h-96"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Visit info ---------------- */}
      <section aria-labelledby="visit-heading" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 id="visit-heading" className="sr-only">Visit the campus</h2>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white shadow-md" aria-hidden="true">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-slate-900">Where the campus is</h3>
            </div>
            <address className="mt-4 text-[15px] not-italic leading-relaxed text-slate-600">{fullAddress}</address>
            <a
              href={BUSINESS_INFO.maps.place}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
            >
              Open in Google Maps <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-600 text-white shadow-md" aria-hidden="true">
                <Clock className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-slate-900">Opening hours</h3>
            </div>
            <dl className="mt-4 space-y-2 text-[15px]">
              {hours.map(({ days, time }) => (
                <div key={days} className="flex justify-between gap-4 border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                  <dt className="font-medium text-slate-700">{days}</dt>
                  <dd className={time === "Closed" ? "text-slate-400" : "text-slate-600"}>{time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-600 text-white shadow-md" aria-hidden="true">
                <Phone className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-slate-900">Talk to the campus</h3>
            </div>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 font-semibold text-slate-800 hover:text-brand">
                  <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                  {phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="inline-flex items-center gap-2 font-semibold text-slate-800 hover:text-brand">
                  <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate-500">Call ahead and we&apos;ll have a counsellor ready for your visit.</p>
          </div>
        </div>
      </section>

      {/* ---------------- Getting here ---------------- */}
      <section aria-labelledby="getting-here-heading" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div id="getting-here-heading">
          <SectionHeader eyebrow="Getting here" title="Easy to reach on the" accent="Western Line" />
        </div>
        <p className="mt-3 max-w-2xl text-slate-600">
          The campus is right opposite Mira Road Station (E). Approximate Western Line local-train times to Mira Road:
        </p>

        {/* Metro-style line map. Desktop: horizontal, north on the left.
            Mobile: vertical, north at the top. Mira Road sits in the middle. */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-sm sm:px-8 sm:py-8">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <ArrowUp className="h-3.5 w-3.5 md:hidden" aria-hidden="true" />
              <ArrowLeft className="hidden h-3.5 w-3.5 md:block" aria-hidden="true" />
              Towards Virar
            </span>
            <span className="hidden items-center gap-1.5 md:inline-flex">
              Towards Churchgate
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </div>

          <ol aria-label="Western Line stations near the campus, north to south" className="relative mt-4 md:mt-6 md:grid md:grid-cols-7">
            {/* The rail: vertical on mobile, horizontal through the dots on desktop */}
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-[17px] top-0 w-1.5 rounded-full bg-gradient-to-b from-orange-200 via-orange-500 to-orange-200 md:inset-x-0 md:bottom-auto md:left-0 md:top-[57px] md:h-1.5 md:w-auto md:bg-gradient-to-r"
            />
            {WESTERN_LINE.map(({ station, minutes }) => {
              const campus = !minutes;
              return (
                <li
                  key={station}
                  className="relative flex items-center gap-4 py-2.5 md:flex-col md:gap-0 md:py-0"
                  aria-current={campus ? "location" : undefined}
                >
                  {/* Time pill (desktop: above the dot; mobile: right end of the row) */}
                  <span
                    className={`order-3 ml-auto inline-flex h-7 items-center whitespace-nowrap rounded-full px-2.5 text-xs font-bold md:order-1 md:mb-3 md:ml-0 ${campus ? "bg-brand text-white shadow-md shadow-orange-200" : "bg-orange-50 text-brand ring-1 ring-orange-100"}`}
                  >
                    {campus ? "CDPL Campus" : minutes}
                  </span>

                  {/* Station dot */}
                  <span className="order-1 flex h-10 w-10 shrink-0 items-center justify-center md:order-2" aria-hidden="true">
                    {campus ? (
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white shadow-lg ring-4 ring-orange-200">
                        <School className="h-5 w-5" />
                      </span>
                    ) : (
                      <span className="h-5 w-5 rounded-full border-4 border-orange-500 bg-white" />
                    )}
                  </span>

                  {/* Station name */}
                  <span className="order-2 md:order-3 md:mt-3 md:text-center">
                    <span className={`block leading-tight ${campus ? "text-base font-extrabold text-brand" : "text-sm font-semibold text-slate-800"}`}>
                      {station}
                    </span>
                    {campus && <span className="mt-0.5 block text-xs text-slate-500">Opposite station (E)</span>}
                  </span>
                </li>
              );
            })}
          </ol>

          <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 md:hidden">
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
            Towards Churchgate
          </p>
        </div>
        {/* TODO(content): walking directions from the station exit (minutes on
            foot + landmark), and verify every WESTERN_LINE travel time. */}
      </section>

      {/* ---------------- Courses ---------------- */}
      <section aria-labelledby="courses-heading" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div id="courses-heading">
          <SectionHeader eyebrow="Classroom courses" title="What you can learn" accent="on campus" />
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CLASSROOM_COURSES.map(({ label, href, Icon, tile }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md lg:flex-col lg:items-start"
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-md ${tile}`} aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-semibold leading-snug text-slate-900 group-hover:text-brand">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
        {/* TODO(content): confirm all five families run classroom batches here. */}
      </section>

      {/* TODO(content): "Batch timings" section: real weekday morning / weekday
          evening / weekend times. Never publish placeholder times. */}

      {/* TODO(content): "Campus facilities" section: labs, systems and seating,
          with REAL photographs of this campus. No stock images. */}

      {/* TODO(content): campus-specific FAQ section (use the central
          FAQSection). Add FAQPage schema only once the answers are final. */}

      {/* ---------------- Book a visit (orange band, as on Careers / Services) ---------------- */}
      <section aria-labelledby="book-visit-heading" className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />

          <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <h2 id="book-visit-heading" className="text-2xl font-bold sm:text-3xl">Book a campus visit</h2>
              <p className="mt-3 text-white/90">
                See the classrooms, meet a counsellor and find the right course, right opposite Mira Road Station (E).
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
              <CampusVisitButton source="Mira Road Campus - Book a Visit" label="Book a Visit" variant="onBrand" />
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/80 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {phoneDisplay}
              </a>
              {/* TODO(content): WhatsApp link, once the campus WhatsApp number is confirmed. */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
