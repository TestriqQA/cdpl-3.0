import Link from "next/link";
import { ArrowRight, Check, CircleCheck } from "lucide-react";
import { FAQSection } from "@/components/ui/FAQSection";
import { AAA_FAQS } from "@/data/aaaFaqs";
import AAAValidateCertificateButton from "@/components/sections/AAAValidateCertificateButton";

// Same five steps as the page's HowTo schema, so it is visible too.
const STEPS = [
  { name: "Enroll", desc: "Sign up for the AAA Certification course." },
  { name: "Learn & lab", desc: "12 weeks of live sessions and hands-on labs." },
  { name: "Capstone", desc: "Build an end-to-end automation project for review." },
  { name: "Proctored exam", desc: "Pass the AAA-aligned proctored assessment." },
  { name: "Certified", desc: "Get a verifiable digital certificate with a unique ID." },
];

const OUTCOMES = [
  "AAA exam success path + mock test analytics",
  "Portfolio-ready artifacts & capstone",
  "Interview readiness & resume alignment",
  "Access to CDPL partner opportunities",
];

const CTA_POINTS = ["Limited seats", "Mentor bandwidth", "Capstone prep for early applicants"];

/**
 * How certification works (timeline + program outcomes), the FAQ (shared
 * FAQSection, same list as the page's FAQPage schema), and the "Next cohort"
 * CTA in the Our Team footer style. Matches the ACTD page. Server component;
 * the FAQ accordion and the validate button are the client-side pieces.
 */
export default function AAACertificationOutcomesCtaSection() {
  return (
    <>
      <section aria-labelledby="aaa-flow-heading" className="bg-slate-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
              How it works
            </span>
            <h2 id="aaa-flow-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              From enrolment to <span className="text-brand">certified</span>
            </h2>
          </div>

          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-6 hidden h-0.5 bg-orange-200 lg:block" />
            {STEPS.map((s, i) => (
              <li key={s.name} className="relative flex flex-col items-center text-center">
                <span className="relative grid h-12 w-12 place-items-center rounded-full bg-brand text-lg font-extrabold text-white shadow-md ring-4 ring-slate-50">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{s.name}</h3>
                <p className="mt-1 max-w-[22ch] text-sm leading-6 text-slate-600">{s.desc}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-slate-900">
              Program <span className="text-brand">outcomes</span>
            </h3>
            <ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">
              {OUTCOMES.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQSection
        id="aaa-faq"
        title={<>Frequently Asked <span className="text-brand">Questions</span></>}
        subtitle="Everything you need to know about the AAA certification course."
        items={AAA_FAQS}
        className="bg-white"
      />

      <section aria-labelledby="aaa-cta-heading" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />

            <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="max-w-2xl">
                <h2 id="aaa-cta-heading" className="text-2xl font-bold sm:text-3xl">Join the next cohort</h2>
                <p className="mt-3 text-white/90">
                  Limited seats with mentor bandwidth. Early applicants receive capstone prep material.
                </p>
                <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-white/95 lg:justify-start">
                  {CTA_POINTS.map((item) => (
                    <li key={item} className="inline-flex items-center gap-1.5">
                      <CircleCheck className="h-4 w-4" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-orange-600 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500"
                >
                  Talk to admissions <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <AAAValidateCertificateButton className="inline-flex cursor-pointer items-center gap-2 rounded-xl border-2 border-white/80 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
