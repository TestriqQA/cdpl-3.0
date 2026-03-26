'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Award, CheckCircle, BadgeCheck } from 'lucide-react';
import Link from 'next/link';

export default function CtaSection() {


  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle top/bottom separators for a sleek, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-5xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Small badge */}
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            Next batch starts in <strong className="font-semibold">2 days</strong> • Limited seats
          </p>

          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Become a <span className="text-ST">MySQL</span> Expert Today
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Talk to a mentor, get the full syllabus & fees, and reserve your seat for the upcoming cohort.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="tel:+917888383788"
              aria-label="Call Think and Do Institute at +91 788-83-83-788"
              className="group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-7 py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 788-83-83-788
            </Link>

            <Link
              href="mailto:contact@cinutedigital.com"
              aria-label="Email Think and Do Institute at contact@cinutedigital.com"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-300 bg-white px-7 py-3 text-sm sm:text-base font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Link>
          </div>

          {/* Key assurances row (distinct, non-repeating colors; no heavy gradients) */}
          <div className="mt-8 grid gap-4 text-left sm:gap-5 md:grid-cols-3">
            <div className="flex items-start gap-3 rounded-2xl border border-sky-200 bg-sky-50 p-5">
              <Clock className="h-6 w-6 text-sky-700" />
              <div>
                <div className="font-semibold text-slate-900">20-Hour Live Training</div>
                <div className="text-sm text-slate-600">Weekend & evening batches</div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <Award className="h-6 w-6 text-amber-700" />
              <div>
                <div className="font-semibold text-slate-900">Global Certification</div>
                <div className="text-sm text-slate-600">QR-verified digital certificate</div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <CheckCircle className="h-6 w-6 text-emerald-700" />
              <div>
                <div className="font-semibold text-slate-900">100% Job Assistance</div>
                <div className="text-sm text-slate-600">Resume, mock interviews & referrals</div>
              </div>
            </div>
          </div>

          {/* Location & microcopy */}
          <div className="mt-6 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="h-4 w-4 text-rose-600" />
              <span>Mira Road &amp; Vasai, Maharashtra</span>
            </div>
            <p className="text-xs text-slate-500">
              Prefer WhatsApp or a call-back? Email us and we’ll reach out within 24 hours.
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
