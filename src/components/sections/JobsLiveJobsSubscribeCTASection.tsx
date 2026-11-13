import Link from "next/link";
import { BellRing, CircleCheck } from "lucide-react";

const CHANNEL = "https://whatsapp.com/channel/0029VadXpsi3gvWWrDLReF3N";

const POINTS = ["Weekly verified openings", "QA, Automation, Data & Engineering", "Free to join"];

/**
 * Closing CTA: the orange band used on the other pages, here for the CDPL
 * job-alerts WhatsApp channel, with links to placements and careers below.
 * The heading (now an h2; it was an h3 at section level) keeps its text.
 */
export function JobsLiveJobsSubscribeCTASection() {
  return (
    <section aria-labelledby="wa-jobs" className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />

          <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <h2 id="wa-jobs" className="text-2xl font-bold sm:text-3xl">
                CDPL job alerts on WhatsApp
              </h2>
              <p className="mt-3 text-white/90">
                Join our official WhatsApp Channel for weekly updates on QA, Automation, Data, and Engineering roles,
                only verified openings from CDPL.
              </p>
              <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-white/95 lg:justify-start">
                {POINTS.map((p) => (
                  <li key={p} className="inline-flex items-center gap-1.5">
                    <CircleCheck className="h-4 w-4" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join CDPL WhatsApp Channel (opens in WhatsApp)"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-orange-600 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              Join WhatsApp Channel
            </a>
          </div>
        </div>

        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-slate-600">
          <span>Also see:</span>
          <Link href="/jobs/placements" className="font-semibold text-slate-800 hover:text-brand">Student Placements</Link>
          <span aria-hidden="true" className="text-slate-300">•</span>
          <Link href="/jobs/careers" className="font-semibold text-slate-800 hover:text-brand">Careers @ CDPL</Link>
          <span aria-hidden="true" className="text-slate-300">•</span>
          <Link href={CHANNEL} className="font-semibold text-slate-800 hover:text-brand">Placement Updates (archive)</Link>
        </p>
      </div>
    </section>
  );
}
