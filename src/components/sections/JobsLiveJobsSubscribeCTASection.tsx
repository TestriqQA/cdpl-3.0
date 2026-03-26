"use client";

import Link from "next/link";

export function JobsLiveJobsSubscribeCTASection() {
  return (
    <section
      aria-labelledby="wa-jobs"
      className="relative w-full overflow-hidden border-t border-slate-100 bg-white"
    >
      {/* soft ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-7rem] h-56 w-[70rem] -translate-x-1/2 rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,140,0,.18), rgba(255,184,77,.10), transparent 68%)",
          }}
        />
        <div
          className="absolute right-[10%] bottom-[-9rem] h-52 w-[42rem] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(closest-side, rgba(157,123,255,.20), rgba(126,231,255,.15), transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* Card */}
        <div className="relative rounded-3xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur-sm">
          {/* subtle top shine */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,140,0,.05), rgba(255,184,77,0))",
              maskImage: "linear-gradient(black, transparent 68%)",
              WebkitMaskImage: "linear-gradient(black, transparent 68%)",
            }}
          />

          {/* content */}
          <div className="relative grid gap-6 p-5 sm:grid-cols-12 sm:p-6 lg:gap-8 lg:p-8">
            {/* LEFT */}
            <div className="sm:col-span-8">
              <div className="mb-2 inline-flex items-center gap-2">
                <span
                  aria-hidden
                  className="grid h-10 w-10 place-items-center rounded-full"
                  style={{ background: "rgba(37,211,102,.12)" }}
                >
                  {/* WhatsApp glyph (badge) */}
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="#25D366" aria-hidden="true">
                    <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.49 0 .16 5.33.16 11.9c0 2.1.55 4.12 1.6 5.92L0 24l6.38-1.67a11.86 11.86 0 0 0 5.68 1.45h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.4ZM12.06 21.3a9.36 9.36 0 0 1-4.77-1.31l-.34-.2-3.78.99 1.01-3.69-.22-.38a9.34 9.34 0 0 1-1.43-4.81c0-5.16 4.2-9.36 9.36-9.36 2.5 0 4.85.97 6.62 2.74a9.31 9.31 0 0 1 2.74 6.62c0 5.16-4.2 9.36-9.36 9.36Zm5.42-7.02c-.29-.14-1.71-.84-1.97-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.2-.33.22-.62.08-.29-.14-1.21-.45-2.3-1.44-.85-.76-1.42-1.7-1.59-1.99-.17-.29-.02-.45.12-.59.12-.12.29-.32.43-.48.14-.16.19-.26.29-.45.1-.2.05-.36-.03-.5-.08-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49l-.55-.01c-.2 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.02 2.82 1.16 3.01.14.19 2 3.05 4.86 4.27.68.29 1.21.46 1.62.6.68.22 1.29.19 1.78.11.54-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33Z" />
                  </svg>
                </span>
                <h3 id="wa-jobs" className="text-[1.75rem] font-bold tracking-tight">
                  <span className="text-[rgb(0,105,168)]">CDPL job alerts on </span>
                  <span className="text-[#25D366]">WhatsApp</span>
                </h3>
              </div>

              <p className="max-w-2xl text-[0.9375rem] leading-6 text-slate-600">
                Join our official WhatsApp Channel for weekly updates on{" "}
                <strong className="text-slate-900">QA</strong>,{" "}
                <strong className="text-slate-900">Automation</strong>,{" "}
                <strong className="text-slate-900">Data</strong>, and{" "}
                <strong className="text-slate-900">Engineering</strong> roles, only verified openings from CDPL.
              </p>

              {/* links */}
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-600">
                <Link
                  href="https://whatsapp.com/channel/0029VadXpsi3gvWWrDLReF3N"
                  className="underline decoration-dotted underline-offset-4 hover:text-slate-900 hover:decoration-solid"
                  title="CDPL Placement Updates"
                >
                  Placement Updates (archive)
                </Link>
                <span className="hidden text-slate-300 sm:inline">•</span>
                <Link
                  href="/jobs/placements"
                  className="underline decoration-dotted underline-offset-4 hover:text-slate-900 hover:decoration-solid"
                  title="CDPL Student Placements"
                >
                  Student Placements
                </Link>
                <span className="hidden text-slate-300 sm:inline">•</span>
                <Link
                  href="/jobs/careers"
                  className="underline decoration-dotted underline-offset-4 hover:text-slate-900 hover:decoration-solid"
                  title="Careers at CDPL"
                >
                  Careers @ CDPL
                </Link>
              </div>
            </div>

            {/* RIGHT CTA */}
            <div className="sm:col-span-4 flex flex-col items-stretch justify-center sm:items-end">
              <Link
                href="https://whatsapp.com/channel/0029VadXpsi3gvWWrDLReF3N"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap gap-2 rounded-xl px-4 md:px-2 lg:px-4 py-2.5 text-sm sm:text-base font-semibold text-white shadow-sm transition-transform hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#77E39A]"
                // WhatsApp brand color
                style={{ backgroundColor: "#25D366" }}
                aria-label="Join CDPL WhatsApp Channel (opens in WhatsApp)"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  aria-hidden="true"
                  className="mr-1 sm:mr-2"
                >
                  <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.49 0 .16 5.33.16 11.9c0 2.1.55 4.12 1.6 5.92L0 24l6.38-1.67a11.86 11.86 0 0 0 5.68 1.45h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.45-8.4Z" />
                </svg>
                Join WhatsApp Channel
              </Link>
              <span className="mt-1 text-xs text-slate-500">Opens in WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
