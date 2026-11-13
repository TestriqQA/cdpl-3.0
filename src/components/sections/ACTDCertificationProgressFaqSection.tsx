import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import { FAQSection } from "@/components/ui/FAQSection";
import { ACTD_FAQS } from "@/data/actdFaqs";

const STEPS = [
  { name: "Enroll", desc: "Join the next cohort and pick your focus." },
  { name: "Learn", desc: "Live sessions and hands-on labs in short sprints." },
  { name: "Build", desc: "Ship a mentor-reviewed capstone for your portfolio." },
  { name: "Assess", desc: "Clear the milestone assessments and final exam." },
  { name: "Share", desc: "Share your certificate with its verification ID." },
];

const CTA_POINTS = ["10-week cohort", "Mentor reviews", "Placement support"];

/**
 * Cohort flow as a numbered five-step timeline, the FAQ (shared FAQSection,
 * same list as the page's FAQPage schema), and a closing CTA in the Our Team
 * footer style. Server component; only the FAQ accordion is client-side.
 */
export default function ACTDCertificationProgressFaqSection() {
  return (
    <>
      <section aria-labelledby="actd-flow-heading" className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
              Cohort flow
            </span>
            <h2 id="actd-flow-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              From enrolment to <span className="text-brand">certified</span>
            </h2>
          </div>

          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {/* Connector line on desktop */}
            <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-6 hidden h-0.5 bg-orange-200 lg:block" />
            {STEPS.map((s, i) => (
              <li key={s.name} className="relative flex flex-col items-center text-center">
                <span className="relative grid h-12 w-12 place-items-center rounded-full bg-brand text-lg font-extrabold text-white shadow-md ring-4 ring-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{s.name}</h3>
                <p className="mt-1 max-w-[22ch] text-sm leading-6 text-slate-600">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FAQSection
        id="actd-faq"
        title={<>Frequently Asked <span className="text-brand">Questions</span></>}
        subtitle="Everything you need to know about the ACTD certification program."
        items={ACTD_FAQS}
        className="bg-slate-50"
      />

      <section aria-labelledby="actd-cta-heading" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />

            <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="max-w-2xl">
                <h2 id="actd-cta-heading" className="text-2xl font-bold sm:text-3xl">Ready to get ACTD certified?</h2>
                <p className="mt-3 text-white/90">
                  Talk to our admissions team about the next cohort, eligibility and fees.
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
                  Talk to an advisor <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="#actd-tracks"
                  className="inline-flex items-center rounded-xl border-2 border-white/80 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500"
                >
                  Explore tracks
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
