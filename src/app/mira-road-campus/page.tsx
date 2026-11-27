import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bus,
  ChevronRight,
  Clock,
  Home,
  Laptop,
  Mail,
  MapPin,
  Navigation,
  Phone,
  School,
  Star,
  TrainFront,
  Users,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import JsonLd from "@/components/JsonLd";
import { FaqSection } from "@/components/ui/FaqSection";
import { WHATSAPP } from "@/components/course-page/parts/CtaButtons";
import { BUSINESS_INFO, REVIEW_PROFILES } from "@/lib/seo-config";
import { getSiteStats } from "@/lib/live-stats";
import { getGoogleReviews } from "@/lib/reviews";
import ReviewsMarquee from "@/components/sections/ReviewMarque";
import { generateBreadcrumbSchema, generateFAQSchema, generateLocalBusinessSchema } from "@/lib/schema-generators";
import CampusVisitButton from "./CampusVisitButton";
import CampusPhotoCarousel from "./CampusPhotoCarousel";
import {
  VISIT_STEPS,
  CAMPUS_FAQS,
  CAMPUS_PHOTOS,
  CLASSROOM_FAMILIES,
  WESTERN_LINE,
} from "./campus-content";

/**
 * /mira-road-campus: CDPL's only physical campus (Mira Road East).
 *
 * Content from the "Mira Road campus page content brief" (Nov 2026); copy and
 * the facts confirmed on 27 Nov 2026 live in ./campus-content.ts.
 *
 * STILL NOINDEX. The brief's minimum to index is real photos + a visit CTA that
 * keeps its promise + the FAQ, shipped together (C4-06). The CTA (the standard
 * enquiry form, titled "Book a Campus Visit") and the FAQ are done; the
 * photo slots in CAMPUS_PHOTOS are placeholders. When real photos are in:
 *   1. set each slot's `src` (they also become the LocalBusiness `image`),
 *   2. delete the `robots` line below,
 *   3. add /mira-road-campus to src/app/sitemap.ts.
 * Parking is left out until it is confirmed.
 */
export const metadata: Metadata = {
  title: { absolute: "IT Training Institute in Mira Road East | CDPL Campus" },
  description:
    "CDPL's campus is opposite Mira Road Station (E), at Shanti Shopping Centre. Classroom batches in Software Testing, Data Science, AI and Digital Marketing. Visit or call to book a seat.",
  alternates: { canonical: "/mira-road-campus" },
  // Until real photos replace the placeholders, see the file header.
  robots: { index: false, follow: true },
};

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

/** Section titles are centred; card content below stays left-aligned. */
function SectionHeader({ id, eyebrow, title, accent }: { id: string; eyebrow: string; title: string; accent: string }) {
  return (
    <header className="text-center">
      <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
        {eyebrow}
      </span>
      <h2 id={id} className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title} <span className="text-brand">{accent}</span>
      </h2>
    </header>
  );
}

const SECTION = "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8";
const CARD = "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm";
/** The intro line under a section title, centred with it. */
const BODY = "mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-slate-600";

export default async function MiraRoadCampusPage() {
  const a = BUSINESS_INFO.address;
  const fullAddress = `${a.streetAddress}, ${a.addressLocality}, ${a.addressRegion} ${a.postalCode}`;
  const phoneDisplay = BUSINESS_INFO.phone.replace(/^\+91(\d{5})(\d{5})$/, "+91 $1 $2");
  const hours = openingHours();
  const [stats, { reviews }] = await Promise.all([getSiteStats(), getGoogleReviews()]);
  const photos = CAMPUS_PHOTOS.flatMap((p) => (p.src ? [p.src] : []));

  const schemas = [
    generateLocalBusinessSchema(photos),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Locations", url: "/locations-we-serve" },
      { name: "Mira Road Campus", url: "/mira-road-campus" },
    ]),
    generateFAQSchema([...CAMPUS_FAQS]),
  ];

  return (
    <div className="relative isolate overflow-hidden">
      {schemas.map((schema, i) => (
        <JsonLd key={i} id={`mira-road-campus-schema-${i}`} schema={schema} />
      ))}

      {/* Brand glows, as on the About / Reviews heroes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem]">
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -right-24 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-200/40 blur-3xl" />
      </div>

      {/* ---------------- Hero + answer block ---------------- */}
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
            {/* Answer block: the whole answer to "where is CDPL" in the first 60
                words, as a lead line plus scannable facts (still plain text). */}
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Classroom batches in Software Testing, Data Science, AI, Business Intelligence and Digital Marketing,
              directly opposite Mira Road Station (East).
            </p>
            <dl className="mt-5 max-w-xl space-y-3 text-[15px] text-slate-700">
              <div className="flex items-start gap-3">
                <dt className="mt-0.5 shrink-0">
                  <MapPin className="h-5 w-5 text-brand" aria-hidden="true" />
                  <span className="sr-only">Address</span>
                </dt>
                <dd>Office 203 &amp; 204, B-Wing, 1st Floor, Shanti Shopping Centre, Mira Bhayandar 401107</dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="mt-0.5 shrink-0">
                  <Clock className="h-5 w-5 text-brand" aria-hidden="true" />
                  <span className="sr-only">Opening hours</span>
                </dt>
                <dd>Monday to Friday 9 AM–6 PM · Saturday 9 AM–3 PM</dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="mt-0.5 shrink-0">
                  <TrainFront className="h-5 w-5 text-brand" aria-hidden="true" />
                  <span className="sr-only">Getting here</span>
                </dt>
                <dd>Under a 5-minute walk from the East exit of Mira Road station</dd>
              </div>
            </dl>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CampusVisitButton source="Mira Road Campus - Hero" />
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-300 bg-white px-5 py-3 font-semibold text-slate-800 shadow-sm transition hover:bg-orange-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              >
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                Call {phoneDisplay}
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200/70 pt-5 text-sm text-slate-600">
              <a href={REVIEW_PROFILES.google} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-brand">
                <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" aria-hidden="true" />
                <span className="font-semibold text-slate-900">{stats.text.ratingValue}</span> from {stats.reviewCount} Google reviews
              </a>
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

      {/* ---------------- Inside the campus (photos first, straight after the hero) ---------------- */}
      <section aria-labelledby="inside-heading" className={SECTION}>
        <SectionHeader id="inside-heading" eyebrow="Facilities" title="Inside" accent="the campus" />
        <p className={BODY}>
          The campus has two air-conditioned classrooms with large displays, and Wi-Fi throughout. Batches are capped at
          20 students, so every learner gets time with the trainer.
        </p>
        <CampusPhotoCarousel photos={CAMPUS_PHOTOS} />
      </section>

      {/* ---------------- Where ---------------- */}
      <section aria-labelledby="where-heading" className={SECTION}>
        <SectionHeader id="where-heading" eyebrow="Location" title="Where is the" accent="CDPL campus?" />
        <p className={BODY}>
          We are on the first floor of Shanti Shopping Centre, B-Wing, Offices 203 and 204, right opposite the East exit
          of Mira Road station on the Western Line. If you are coming by train, you can see the building from the
          station.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className={CARD}>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand text-white shadow-md" aria-hidden="true">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-slate-900">Address</h3>
            </div>
            <address className="mt-4 text-[15px] not-italic leading-relaxed text-slate-600">{fullAddress}</address>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              <a href={BUSINESS_INFO.maps.directions} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand hover:underline">
                <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
              </a>
              <a href={BUSINESS_INFO.maps.place} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand hover:underline">
                Open in Google Maps <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className={CARD}>
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

          <div className={CARD}>
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
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-slate-800 hover:text-brand">
                  <FaWhatsapp className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="inline-flex items-center gap-2 font-semibold text-slate-800 hover:text-brand">
                  <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- How to reach ---------------- */}
      <section aria-labelledby="reach-heading" className={SECTION}>
        <SectionHeader id="reach-heading" eyebrow="Getting here" title="How to reach" accent="the campus" />
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className={CARD}>
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <TrainFront className="h-5 w-5 text-brand" aria-hidden="true" /> By train
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              Get off at Mira Road and take the East exit. Shanti Shopping Centre is directly opposite. Walk across,
              enter B-Wing and go up to the first floor. It is under a 5-minute walk from the platform.
            </p>
          </div>
          <div className={CARD}>
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <Bus className="h-5 w-5 text-brand" aria-hidden="true" /> By road
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              By auto or bus, ask for Shanti Shopping Centre, Mira Road East. The building faces the East exit of
              Mira Road station.
            </p>
          </div>
        </div>

        {/* "Areas we serve" lives here, next to the travel times it depends on,
            instead of as a one-paragraph section of its own. */}
        <h3 className="mt-10 text-center text-xl font-bold text-slate-900">Areas we serve</h3>
        <p className="mx-auto mt-2 max-w-3xl text-center leading-7 text-slate-600">
          Students join us from across the Western Line and Mira-Bhayandar: Mira Road, Bhayandar, Kashimira, Dahisar,
          Borivali, Naigaon and Vasai. Most reach us by local train, as the campus is directly opposite the station.
          Approximate slow-train times to Mira Road:
        </p>

        {/* Metro-style line map. Desktop: horizontal, north on the left.
            Mobile: vertical, north at the top. Mira Road sits in the middle. */}
        <div className="mt-4 rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-sm sm:px-8 sm:py-8">
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
                  <span
                    className={`order-3 ml-auto inline-flex h-7 items-center whitespace-nowrap rounded-full px-2.5 text-xs font-bold md:order-1 md:mb-3 md:ml-0 ${campus ? "bg-brand text-white shadow-md shadow-orange-200" : "bg-orange-50 text-brand ring-1 ring-orange-100"}`}
                  >
                    {campus ? "CDPL Campus" : minutes}
                  </span>
                  <span className="order-1 flex h-10 w-10 shrink-0 items-center justify-center md:order-2" aria-hidden="true">
                    {campus ? (
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white shadow-lg ring-4 ring-orange-200">
                        <School className="h-5 w-5" />
                      </span>
                    ) : (
                      <span className="h-5 w-5 rounded-full border-4 border-orange-500 bg-white" />
                    )}
                  </span>
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
      </section>

      {/* ---------------- Courses ---------------- */}
      <section aria-labelledby="courses-heading" className={SECTION}>
        <SectionHeader id="courses-heading" eyebrow="Classroom courses" title="Courses you can take in a" accent="classroom here" />
        <p className={BODY}>
          Every course below runs in classroom batches at this campus as well as live online. The fee is the same
          whichever mode you choose, and it is inclusive of GST.
        </p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CLASSROOM_FAMILIES.map(({ family, summary, href, Icon, tile, courses }) => (
            <li key={family} className={CARD}>
              <Link href={href} className="group flex items-center gap-3">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-md ${tile}`} aria-hidden="true">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand">{family}</h3>
              </Link>
              <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>
              <ul className="mt-4 space-y-2 text-[15px]">
                {courses.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="inline-flex items-start gap-1.5 text-slate-700 hover:text-brand">
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      <span>
                        {c.label} <span className="text-slate-500">({c.hours} hours)</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="mt-6 space-y-2 text-center text-slate-600">
          <p>
            Weekday batches run alongside Saturday batches, so students, graduates and working professionals can all
            train here.
          </p>
          <p>
            <span className="font-semibold text-slate-900">Next classroom batches:</span> call{" "}
            <a href={`tel:${BUSINESS_INFO.phone}`} className="font-semibold text-brand hover:underline">{phoneDisplay}</a> for the
            next batch date.
          </p>
          <p>The Advanced Manual + Automation Master Program includes an assured paid internship for 3 months.</p>
        </div>
      </section>

      {/* ---------------- Classroom or online ---------------- */}
      <section aria-labelledby="mode-heading" className={SECTION}>
        <SectionHeader id="mode-heading" eyebrow="Learning mode" title="Classroom or online:" accent="what's the difference?" />
        <p className={BODY}>
          Both modes cover the same syllabus and the same hours, lead to the same certificate, and cost the same. In the
          classroom you also get in-person guidance and one-on-one help from your trainer. Choose the classroom if you
          live along the Western Line and learn better face to face; choose online if you are further away or working
          full time. You can visit the campus before deciding.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className={CARD}>
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <Users className="h-5 w-5 text-brand" aria-hidden="true" /> Classroom at Mira Road
            </h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-600">
              <li>In-person guidance and one-on-one teaching</li>
              <li>Batches of up to 20 in AC classrooms</li>
              <li>Best if you live along the Western Line</li>
            </ul>
          </div>
          <div className={CARD}>
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <Laptop className="h-5 w-5 text-brand" aria-hidden="true" /> Live online
            </h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-600">
              <li>The same live sessions, joined from anywhere</li>
              <li>Same syllabus, hours, certificate and fee</li>
              <li>Best if you are further away or working full time</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- What happens when you visit ---------------- */}
      <section aria-labelledby="visit-heading" className={SECTION}>
        <SectionHeader id="visit-heading" eyebrow="Visit us" title="What happens when" accent="you visit" />
        <p className={BODY}>
          Walk in any time during opening hours (Monday to Friday 9 AM–6 PM, Saturday 9 AM–3 PM), or book a visit so a
          counsellor is ready for you. A visit covers:
        </p>
        <ol className="mx-auto mt-8 grid max-w-5xl gap-5 sm:grid-cols-2">
          {VISIT_STEPS.map((step, i) => (
            <li key={step} className={`${CARD} flex gap-4`}>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white" aria-hidden="true">
                {i + 1}
              </span>
              <p className="leading-7 text-slate-600">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex justify-center">
          <CampusVisitButton source="Mira Road Campus - What Happens When You Visit" />
        </div>
      </section>

      {/* ---------------- Reviews: the site's shared marquee (text only, no AggregateRating, see C4-02) ---------------- */}
      <section aria-labelledby="reviews-heading" className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader id="reviews-heading" eyebrow="Reviews" title="What students" accent="say" />
          <p className={BODY}>
            Real reviews from learners who trained with us, straight from Google.{" "}
            <a href={REVIEW_PROFILES.google} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline">
              Read them all on Google
            </a>
            .
          </p>
        </div>
        {/* Full width so the rows scroll edge to edge, as on the homepage */}
        <div className="mt-6">
          <ReviewsMarquee initialReviews={reviews} />
        </div>
      </section>

      {/* ---------------- FAQ (FAQPage schema above uses the same list) ---------------- */}
      <FaqSection id="campus-faq" title="Frequently asked questions" items={[...CAMPUS_FAQS]} />

      {/* ---------------- Book a visit (orange band, as on Careers / Services) ---------------- */}
      <section aria-labelledby="book-visit-heading" className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />

          <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <h2 id="book-visit-heading" className="text-2xl font-bold sm:text-3xl">Book a campus visit</h2>
              <p className="mt-3 text-white/90">See the classrooms, meet a counsellor and find the right course.</p>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
              <CampusVisitButton source="Mira Road Campus - Book a Visit" label="Book a Visit" variant="onBrand" />
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/80 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/80 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
