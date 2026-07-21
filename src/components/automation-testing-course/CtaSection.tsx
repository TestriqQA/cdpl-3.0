import { Phone, Mail, MapPin, Clock, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CtaSection() {


  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative overflow-hidden py-10"
    >
      {/* Clean, light background with subtle accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        {/* hairline top/bottom frames */}
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-6xl bg-slate-100" />
        {/* soft radial glow for a sleek, slightly futuristic feel */}
        <div className="absolute left-1/2 top-[-20%] h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <header
          className="mx-auto max-w-3xl"
        >
          <h2
            id="cta-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Become a <span className="text-indigo-700">Next-Gen SDET</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
            Cohort starts in <strong>1 day</strong> — only <strong>15 seats</strong> left. Live, mentor-led classes,
            ISTQB + AI automation, and <strong>placement assistance</strong>.
          </p>
        </header>

        {/* Primary actions */}
        <div
          className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row"
        >
          <Link
            href="tel:+917888383788"
            title="Call us for current batch details and syllabus"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-600 bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:scale-[1.01] hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200"
            aria-label="Call admissions for enrollment"
          >
            <Phone className="h-5 w-5" />
            Call Admissions: +91 788-83-83-788
          </Link>
          <Link
            href="mailto:contact@cinutedigital.com"
            title="Inquire about course details and automation certification"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-200"
            aria-label="Email us your questions"
          >
            <Mail className="h-5 w-5" />
            Email Your Questions
          </Link>
        </div>

        {/* Trust / highlight strip (distinct colors, no heavy gradients) */}
        <div className="mx-auto mt-8 grid gap-4 text-left sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-amber-700" />
              <div>
                <div className="font-semibold text-amber-900">30-Hour Live Training</div>
                <div className="text-sm text-amber-900">Weekend & evening batches</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex items-start gap-3">
              <Award className="h-6 w-6 text-emerald-700" />
              <div>
                <div className="font-semibold text-emerald-900">ISTQB + AI Certification</div>
                <div className="text-sm text-emerald-900">QR-verified credential</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-violet-700" />
              <div>
                <div className="font-semibold text-violet-900">Placement Support</div>
                <div className="text-sm text-violet-900">Resume, mock interviews, referrals</div>
              </div>
            </div>
          </div>
        </div>

        {/* Location + micro-badges */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="h-4 w-4" />
            <span>Mira Road &amp; Vasai, Maharashtra · Live Online &amp; Classroom</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-800">Beginner Friendly</span>
            <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-rose-800">Project-Based</span>
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-800">FAANG-Style Prep</span>
          </div>
        </div>

        {/* Soft footer CTA */}
        <div className="mt-8">
          <Link
            href="#curriculum"
            title="Jump to the detailed Automation Testing curriculum section"
            className="inline-flex items-center justify-center rounded-xl border border-indigo-300 bg-white px-5 py-2.5 text-sm font-semibold text-indigo-800 shadow-sm transition hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            aria-label="View curriculum and modules"
          >
            View Curriculum & Modules
          </Link>
        </div>
      </div>

    </section>
  );
}
