// Accreditations & certifications. Server Component.
//
// Kept: the h2, the four h3 highlights, the three accreditation logos (alt
// text unchanged) and both links (certificate validation, placements).
// Removed as clutter: the unsourced "98% satisfaction / 91% completion" box,
// the anonymous hiring-partner quote and the jargon bullet row.
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const LOGOS = [
  { src: "/images/Skill-India-Color.svg", alt: "Skill India (NSDC)", title: "Skill India (NSDC)" },
  { src: "/images/ISO-9001.png", alt: "ISO 9001:2015 Certified", title: "ISO 9001:2015 Certified" },
  { src: "/images/Testriq-Logo-1.webp", alt: "Testriq – Hiring Partner", title: "Testriq – Hiring Partner" },
];

const HIGHLIGHTS = [
  { title: "Industry-recognized standards", text: "Curriculum aligned to ISO 9001:2015 quality practices and Skill India (NSDC) outcomes, ensuring rigorous delivery and assessment." },
  { title: "Job-ready certifications", text: "Earn verifiable certificates in Software Testing, Automation, API Testing, Data Science, AI/ML, and Analytics—optimized for employer ATS and LinkedIn." },
  { title: "Hiring partner network", text: "Screened placement pipeline with product companies, startups, and consulting partners for internships and full‑time roles." },
  { title: "Modern tooling", text: "Hands-on projects with Selenium, Playwright, Postman, Git, CI/CD, Python, SQL, and cloud sandboxes that mirror real engineering workflows." },
];

export default function AboutAccreditations() {
  return (
    <section aria-labelledby="accreditations-heading" className="bg-gray-50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="accreditations-heading"
          pill={<><ShieldCheck className="h-4 w-4" aria-hidden="true" />Verified Quality & Placement Focus</>}
          title={<>Trusted <span className="text-brand">Accreditations</span> & <br className="hidden sm:block" />Employer‑Ready <span className="text-brand">Certifications</span></>}
          intro="Our quality framework blends ISO 9001:2015 standards with Skill India (NSDC) outcomes, so every program is measured, verifiable and built for employers."
        />

        {/* Editorial layout, deliberately unlike the icon cards elsewhere on
            the page: the accreditation logos as the proof on the left, the four
            highlights as divided rows on the right (no icons, no numbers). */}
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Proof: who recognises us */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Recognised by</p>
            <ul className="mt-6 grid grid-cols-3 items-center gap-6 lg:grid-cols-1 lg:gap-0 lg:divide-y lg:divide-slate-100">
              {LOGOS.map((l) => (
                <li key={l.alt} className="flex flex-col items-center gap-3 lg:flex-row lg:gap-5 lg:py-5 lg:first:pt-0 lg:last:pb-0">
                  <span className="grid h-16 w-full place-items-center rounded-2xl bg-slate-50 px-3 lg:w-32 lg:shrink-0">
                    <Image src={l.src} alt={l.alt} title={l.title} width={120} height={48} className="h-10 w-auto object-contain" loading="lazy" />
                  </span>
                  <span className="hidden font-semibold text-gray-900 lg:block">{l.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Highlights: divided rows, an orange accent bar that lengthens on hover */}
          <ul className="divide-y divide-slate-200 lg:col-span-7">
            {HIGHLIGHTS.map(({ title, text }) => (
              <li key={title} className="group py-6 first:pt-0 last:pb-0 sm:py-7">
                <h3 className="flex items-center gap-3 text-xl font-bold leading-snug text-gray-900">
                  <span
                    aria-hidden="true"
                    className="h-1 w-6 shrink-0 rounded-full bg-brand transition-all duration-300 group-hover:w-10 motion-reduce:transition-none"
                  />
                  {title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600 sm:pl-9">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/cdpl-certificate-validation"
            className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Browse Certifications
          </Link>
          <Link
            href="/jobs/placements"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:border-brand hover:text-brand"
          >
            View Hiring Partners
          </Link>
        </div>
      </div>
    </section>
  );
}
