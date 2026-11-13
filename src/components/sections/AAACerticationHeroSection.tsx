import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Check, ChevronRight, Home } from "lucide-react";
import AAAValidateCertificateButton from "@/components/sections/AAAValidateCertificateButton";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "AAA Certification", href: "/aaa-certification" },
];

// Facts from the page's own FAQ and HowTo (duration, weekly hours, assessment).
const HIGHLIGHTS = [
  "12-week program, about 20 hours a week",
  "Live sessions, hands-on labs and mentor guidance",
  "End-to-end capstone reviewed by mentors",
  "Proctored exam and a verifiable digital certificate",
];

/**
 * AAA hero, matching the ACTD page: breadcrumbs, orange pill, dark heading
 * with an orange key phrase, brand CTAs, and CDPL's accreditation
 * certificate in a white frame on a soft orange glow. Server component; only
 * the "Validate a certificate" button is client-side.
 */
export default function AAACerticationHeroSection() {
  return (
    <section aria-labelledby="aaa-heading" className="relative isolate overflow-hidden">
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
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              Official AAA-aligned · Proctored exam
            </span>

            <h1 id="aaa-heading" className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              AAA Certification <span className="text-brand">by CDPL</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Master <strong className="text-slate-800">automation frameworks</strong>,{" "}
              <strong className="text-slate-800">CI/CD</strong>, <strong className="text-slate-800">cloud testing</strong> and{" "}
              <strong className="text-slate-800">API automation</strong>. Hands-on labs, mentor guidance, and a verifiable
              digital certificate designed for hiring outcomes.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#aaa-curriculum"
                className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 sm:w-auto"
              >
                View curriculum <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <AAAValidateCertificateButton className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 sm:w-auto" />
            </div>

            <ul className="mt-7 grid gap-3 border-t border-slate-200/70 pt-6 text-[15px] text-slate-700 sm:text-base">
              {HIGHLIGHTS.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — accreditation certificate */}
          <div className="relative lg:col-span-6">
            <div aria-hidden="true" className="absolute inset-6 rounded-3xl bg-brand/20 blur-3xl" />
            <figure className="relative mx-auto max-w-[36rem] rounded-3xl border border-slate-200 bg-white p-3 shadow-xl sm:p-4">
              <Image
                src="/certifications_images/aaa_certifications/aaa_certificate_cinute.jpg"
                alt="American Accreditation Association (AAA) Accreditation Certificate awarded to Cinute Digital Private Limited"
                title="AAA Accreditation Certificate"
                width={1000}
                height={704}
                className="h-auto w-full rounded-2xl"
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 80vw, 576px"
                quality={60}
                priority
              />
              <figcaption className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-slate-600">
                <BadgeCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                CDPL is an AAA-accredited training provider
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
