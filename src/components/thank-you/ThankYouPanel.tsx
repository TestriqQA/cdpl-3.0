/**
 * Shared body of every thank-you URL on the site.
 *
 * Deliberately a server component with no interactivity: this page sits at the
 * end of a conversion and is where analytics/Ads conversion tags fire, so it
 * should paint immediately and ship no client JS of its own.
 *
 * Two things vary, and nothing else needs to:
 *   - the eyebrow label, derived from the PAGE the form was on;
 *   - the heading, message and steps, from the INTENT — what the visitor
 *     actually asked for. "Check your email for the download link" and "an
 *     advisor will call you" are both wrong in the other's case, and the same
 *     course page hosts both forms.
 *
 * Course-level or campaign-level copy deliberately stops here: it would need a
 * per-page registry, which is what the path-derived scheme exists to avoid.
 */
import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";

import { BUSINESS_INFO } from "@/lib/seo-config";
import type { ThankYouIntentContent } from "@/lib/thank-you";

export default function ThankYouPanel({
  label,
  intent,
}: {
  label?: string;
  intent: ThankYouIntentContent;
}) {
  const { heading, message, steps } = intent;

  return (
    <div className="bg-white text-slate-800 [color-scheme:light] dark:bg-white dark:text-slate-800">
      <section className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20">
        {/* Confirmation badge */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-9 w-9 text-green-600" aria-hidden="true" />
        </div>

        {label && (
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-brand">
            {label}
          </p>
        )}

        <h1 className="mt-2 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          {heading}
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-center text-base text-gray-600 sm:text-lg">
          {message}
        </p>

        {/* What happens next */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-gray-900">What happens next</h2>
          <ol className="mt-4 space-y-4">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="pt-0.5 text-sm text-gray-700 sm:text-base">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Onward routes — kept to destinations that exist for every funnel. */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/courses"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
          >
            Browse all courses
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-6 py-3.5 font-semibold text-gray-800 transition-colors hover:border-brand hover:text-brand"
          >
            Back to home
          </Link>
        </div>

        {/* Immediate contact, for anyone who would rather not wait for the call */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">Prefer to reach us directly?</p>
          <div className="mt-3 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-brand"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {BUSINESS_INFO.phone}
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-brand"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
