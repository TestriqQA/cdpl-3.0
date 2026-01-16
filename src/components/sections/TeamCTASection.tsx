// =============================
// components/our-team/TeamCTA.tsx
// =============================
"use client";

import Link from "next/link";
import Script from "next/script";
import { Check, ShieldCheck, Clock, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import AdvisorModal from "@/components/ui/AdvisorModal";

export default function TeamCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      aria-labelledby="team-cta-heading"
      className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8"
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-white p-8 sm:p-12"
        style={{ boxShadow: "0 30px 80px -30px rgba(255,140,0,0.25)" }}
      >
        {/* Glow accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,140,0,0.25), transparent)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-16 h-60 w-60 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,140,0,0.12), transparent)",
          }}
        />

        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-xs font-medium text-orange-700 shadow-sm backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" />
              Mentor-Led, Job-Ready Learning
            </div>

            <h2
              id="team-cta-heading"
              className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
            >
              Learn with mentors who build{" "}
              <span className="text-[#ea580c]">careers</span>—not just courses
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-700 sm:text-base">
              Join industry experts for{" "}
              <strong>Manual & Automation Testing</strong>,{" "}
              <strong>API Testing</strong>, and <strong>Data Science</strong>.
              Our <em>hands-on curriculum</em>, <em>live projects</em>, and
              <em> structured interview prep</em> help you earn{" "}
              <strong>job-ready skills</strong> faster—aligned to hiring partner
              expectations and modern QA/DS workflows.
            </p>

            {/* Feature bullets */}
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Mentor-led live sessions & code reviews",
                "Portfolio & GitHub-first learning",
                "Mock interviews & referrals",
                "ISO-aligned, industry-relevant syllabus",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-orange-100 ring-1 ring-orange-200">
                    <Check className="h-3.5 w-3.5 text-[#c2410c]" />
                  </span>
                  <span className="text-sm text-slate-800">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="courses"
                className="inline-flex items-center justify-center rounded-2xl bg-[#c2410c] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
                style={{ backgroundColor: "#c2410c" }}
                aria-label="Explore programs and view curriculum"
              >
                Explore Programs
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
                aria-label="Talk to admissions at Cinute Digital"
              >
                Talk to Admissions
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 ring-1 ring-inset ring-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-100 active:translate-y-0 cursor-pointer"
                aria-label="Talk to a mentor"
              >
                Talk to a mentor
              </button>
            </div>

            {/* Social proof mini */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                4.8/5 learner satisfaction
              </span>
              <span className="hidden h-3 w-px bg-slate-300 sm:inline-block" />
              <span className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4 text-slate-500" />
                Flexible weekend cohorts
              </span>
            </div>
          </div>

          {/* RIGHT: Stats / Trust */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { value: "25+", label: "Active Mentors" },
                  { value: "300+", label: "Career Transitions" },
                  { value: "50+", label: "Hiring Partners" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center sm:text-left lg:text-center"
                  >
                    <div className="text-3xl font-bold tracking-tight text-slate-900">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs font-medium text-slate-600">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-4">
                <p className="text-sm text-slate-800">
                  “Our mentors are seasoned{" "}
                  <strong>QA Engineers, SDETs, and Data Scientists</strong> who
                  ship in production—so you learn{" "}
                  <em>the way teams really work</em>.”
                </p>
              </div>

              {/* Inline trust strip (replace src with real logos when ready) */}
              <div className="mt-6 grid grid-cols-3 place-items-center gap-4 opacity-80 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                <div className="text-[10px] font-semibold text-slate-500">
                  <Image src="/images/Skill-India-Color.svg" alt="Skill India Logo" width={100} height={100} />
                </div>
                <div className="text-[10px] font-semibold text-slate-500">
                  <Image src="/images/ISO-9001.png" alt="ISO 9001 Logo" width={100} height={100} />
                </div>
                <div className="text-[10px] font-semibold text-slate-500">
                  <Image src="/images/Testriq-Logo-1.webp" alt="Testriq Logo" width={100} height={100} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative edge line */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      </div>

      {/* SEO: Structured data for Educational Organization & Offers */}
      <Script id="team-cta-ldjson" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Cinute Digital",
          url: "https://cinutedigital.com",
          sameAs: [
            "https://cinutedigital.com/mentors",
            "https://cinutedigital.com/courses",
          ],
          offers: [
            {
              "@type": "Offer",
              name: "Manual & Automation Testing",
              availability: "https://schema.org/InStock",
              category: "Software Testing",
            },
            {
              "@type": "Offer",
              name: "API Testing using REST & Postman",
              availability: "https://schema.org/InStock",
              category: "Software Testing",
            },
            {
              "@type": "Offer",
              name: "Data Science Foundations",
              availability: "https://schema.org/InStock",
              category: "Data Science",
            },
          ],
        })}
      </Script>

      <AdvisorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="Team Page - Mentor Section"
      />
    </section>
  );
}
