// src/components/sections/AffiliateHeroSection.tsx
// Site hero style (About / Reviews / Services): brand glows, breadcrumbs,
// orange pill, two-tone h1, solid-tile key facts, brand CTAs, image right.
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, CalendarClock, ChevronRight, Home, Percent, Sparkles, Timer, type LucideIcon } from "lucide-react";
import WorkshopRequestModal from "../WorkshopRequestModal";

// Key programme facts, as stated across this page (tiers, payouts, FAQ).
const FACTS: { value: string; label: string; Icon: LucideIcon; tile: string; text: string }[] = [
  { value: "Up to 25%", label: "Commission", Icon: Percent, tile: "bg-brand", text: "text-brand" },
  { value: "60-day", label: "Cookie window", Icon: Timer, tile: "bg-sky-600", text: "text-sky-700" },
  { value: "Monthly", label: "Payouts", Icon: CalendarClock, tile: "bg-emerald-600", text: "text-emerald-700" },
];

export default function AffiliateHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section aria-labelledby="affiliate-heading" className="relative isolate overflow-hidden" data-scroll-target="affiliate-hero">
      {/* Background glows, as on the About / Reviews heroes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -right-24 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-12 md:pb-16 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <Home className="h-4 w-4" aria-hidden="true" />
              <Link href="/" className="transition-colors hover:text-brand">Home</Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
              <span aria-current="page" className="font-semibold text-slate-900">Affiliate Program</span>
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              CDPL Partner Ecosystem
            </span>

            <h1 id="affiliate-heading" className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              <span className="text-sky-600">CDPL Affiliate</span> <span className="text-brand">Program</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Earn commissions by promoting CDPL’s training, developer events, and engineering services. Transparent
              tracking, fast payouts, and content built for conversions.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md shadow-orange-200 transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 sm:w-auto"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
              <a
                href="#how-it-works"
                className="inline-flex w-full items-center justify-center rounded-xl border border-orange-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition hover:bg-orange-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:w-auto"
              >
                How it works
              </a>
            </div>

            {/* Key facts */}
            <ul className="mt-8 grid grid-cols-3 gap-3">
              {FACTS.map(({ value, label, Icon, tile, text }) => (
                <li key={label} className="rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm sm:p-4">
                  <span className={`grid h-8 w-8 place-items-center rounded-lg text-white ${tile}`} aria-hidden="true">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className={`mt-2 text-lg font-extrabold leading-none sm:text-2xl ${text}`}>{value}</p>
                  <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">{label}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — illustration */}
          <div className="relative lg:col-span-5">
            <div aria-hidden="true" className="absolute inset-8 rounded-full bg-brand/20 blur-3xl" />
            <Image
              src="/affiliate_images/affiliate_hero.png"
              alt="CDPL Affiliate Program — partner growth illustration"
              width={1600}
              height={1200}
              priority
              sizes="(max-width: 1024px) 92vw, 520px"
              className="relative mx-auto h-auto w-full max-w-[32rem] select-none"
              quality={50}
              style={{
                WebkitMaskImage: "radial-gradient(130% 130% at 60% 40%, black 72%, transparent 100%)",
                maskImage: "radial-gradient(130% 130% at 60% 40%, black 72%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>

      <WorkshopRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        variant="affiliate"
        title="Apply for Affiliate Program"
        subtitle="Join our partner ecosystem today"
        source="Affiliate Program Page - Hero Section - Apply Now Button"
      />
    </section>
  );
}
