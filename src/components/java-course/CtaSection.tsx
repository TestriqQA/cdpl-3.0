// components/sections/CtaSection.tsx
// Sleek, responsive, slightly futuristic CTA (no heavy gradients, unique accents, SEO-ready).

import Link from "next/link";

export default function CtaSection() {
  const title = "Become a Top 1% Java Developer";
  const subtitle =
    "Enroll now for mentor-led, job-ready training in Core Java, Spring Boot, Microservices, Docker, and AWS—with interview prep and portfolio projects.";

  const keywords =
    "Java course enrollment, Spring Boot training, microservices program, Java developer placement, Docker and AWS for Java, job-ready Java";

  return (
    <section
      id="enroll-cta"
      aria-labelledby="cta-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic backdrop (grid + soft radial highlight) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(147,51,234,0.10),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] backdrop-blur">
          <header className="text-center">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              {`Become a `}
              <span className="text-FS">
                Top 1% Java Developer
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-700">{subtitle}</p>
            {/* SEO assist for crawlers */}
            <p className="sr-only">{keywords}</p>
          </header>

          {/* Trust strip */}
          <div className="mt-5 grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-lg font-extrabold text-slate-900">80 Hrs</p>
              <p className="text-[11px] font-medium text-slate-600">Hands-on</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-lg font-extrabold text-slate-900">3+</p>
              <p className="text-[11px] font-medium text-slate-600">Live Projects</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-lg font-extrabold text-slate-900">Mentor</p>
              <p className="text-[11px] font-medium text-slate-600">Guided</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="text-lg font-extrabold text-slate-900">Placement</p>
              <p className="text-[11px] font-medium text-slate-600">Assistance</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="tel:+917888383788"
              title="Call Admissions for Java Programming Program"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300 sm:w-auto"
              aria-label="Call admissions at +91 788-83-83-788"
            >
              Call: +91 788-83-83-788
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M2.003 5.884c-.053-1.09.79-2.01 1.88-2.064l1.78-.086a1 1 0 01.995.86l.223 1.564a1 1 0 01-.63 1.07l-1.052.42a12.042 12.042 0 006.516 6.516l.42-1.052a1 1 0 011.07-.63l1.564.223a1 1 0 01.86.995l-.086 1.78a1.875 1.875 0 01-2.064 1.88A15.997 15.997 0 012.003 5.884z" />
              </svg>
            </Link>

            <Link
              href="mailto:contact@cinutedigital.com"
              title="Email us for course details and syllabus"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-purple-200 sm:w-auto"
              aria-label="Visit Cinute Digital website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H7a1 1 0 110-2h7.585l-2.292-2.293a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </div>

          {/* Safety/assurance note */}
          <p className="mt-3 text-center text-xs text-slate-600">
            Limited seats • Mentor-led batches • Interview preparation included
          </p>
        </div>
      </div>

      {/* Accessibility helpers */}
      <p className="sr-only">{title}</p>
      <p className="sr-only">{subtitle}</p>
    </section>
  );
}
