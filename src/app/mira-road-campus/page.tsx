import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/seo-config";

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
 */
export const metadata: Metadata = {
  title: { absolute: "IT Training Institute in Mira Road East | CDPL Campus" },
  description:
    "CDPL's campus is opposite Mira Road Station (E), at Shanti Shopping Centre. Classroom batches in Software Testing, Data Science, AI and Digital Marketing. Visit or call to book a seat.",
  alternates: { canonical: "/mira-road-campus" },
  // Hardcoded until the content gate passes — see the file header.
  robots: { index: false, follow: true },
};

/** Western Line travel times into Mira Road. TODO(content): verify each one. */
const TRAVEL_TIMES: ReadonlyArray<{ from: string; via: string; minutes: string }> = [
  { from: "Bhayandar", via: "Western Line local", minutes: "~5 min" },
  { from: "Naigaon", via: "Western Line local", minutes: "~12 min" },
  { from: "Dahisar", via: "Western Line local", minutes: "~12 min" },
  { from: "Borivali", via: "Western Line local", minutes: "~18 min" },
  { from: "Vasai Road", via: "Western Line local", minutes: "~20 min" },
  { from: "Kandivali", via: "Western Line local", minutes: "~22 min" },
];

/** The five families taught at the campus. */
const CLASSROOM_COURSES: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Software Testing", href: "/courses/software-testing-course" },
  { label: "Data Science & Machine Learning", href: "/courses/ds-ml-courses" },
  { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
  { label: "Business Intelligence", href: "/courses/bi-courses" },
  { label: "Digital Marketing", href: "/courses/digital-marketing-courses" },
];

function Todo({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-lg border border-dashed border-amber-400 bg-amber-50 p-3 text-sm text-amber-900">
      <strong>TODO (content):</strong> {children}
    </p>
  );
}

export default function MiraRoadCampusPage() {
  const a = BUSINESS_INFO.address;

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
        CDPL Training Campus, Mira Road East
      </h1>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Where the campus is</h2>
        <address className="mt-3 not-italic text-slate-700">
          {a.streetAddress}, {a.addressLocality}, {a.addressRegion} {a.postalCode}
        </address>
        <Todo>Embed the Google Map and add a &ldquo;Get Directions&rdquo; button.</Todo>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">
          Getting here from Mira Road station
        </h2>
        <Todo>
          Walking directions from the station exit, minutes on foot, and the landmark to
          look for.
        </Todo>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">
          Courses available in the classroom
        </h2>
        <ul className="mt-3 space-y-2">
          {CLASSROOM_COURSES.map((c) => (
            <li key={c.href}>
              <Link href={c.href} className="text-slate-900 underline hover:text-brand">
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
        <Todo>Confirm all five families actually run classroom batches here.</Todo>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Batch timings</h2>
        <Todo>
          Real weekday morning / weekday evening / weekend timings. Do not publish
          placeholder times.
        </Todo>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Campus facilities</h2>
        <Todo>
          Labs, systems and seating, with <strong>real photographs</strong> of this
          campus. Stock images must not be used.
        </Todo>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">
          For students around Mira Road
        </h2>
        <table className="mt-3 w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-300">
              <th className="py-2 pr-4 font-semibold">From</th>
              <th className="py-2 pr-4 font-semibold">How</th>
              <th className="py-2 font-semibold">Time</th>
            </tr>
          </thead>
          <tbody>
            {TRAVEL_TIMES.map((t) => (
              <tr key={t.from} className="border-b border-slate-200">
                <td className="py-2 pr-4">{t.from}</td>
                <td className="py-2 pr-4">{t.via}</td>
                <td className="py-2">{t.minutes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Book a campus visit</h2>
        <Todo>Phone, WhatsApp and the enquiry form, wired to the standard thank-you flow.</Todo>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">
          Frequently asked questions
        </h2>
        <Todo>
          Campus-specific questions only. Add FAQPage schema once the answers are final
          — not before, or the markup will not match the visible content.
        </Todo>
      </section>
    </main>
  );
}
