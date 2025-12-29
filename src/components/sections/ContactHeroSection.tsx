// hero section
"use client";

import dynamic from 'next/dynamic';
import { Phone, Mail, CalendarDays, Home, ChevronRight } from "lucide-react";
import Link from "next/link";

const ContactHeroForm = dynamic(() => import('@/components/forms/ContactHeroForm').then(mod => mod.ContactHeroForm), {
  ssr: false,
  loading: () => <div className="min-h-[400px] w-full flex items-center justify-center text-slate-400">Loading Form...</div>
});

export function ContactHeroSection() {


  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
  ]

  return (
    <>


      <section className="relative isolate overflow-hidden bg-white" id="contact-hero">
        {/* themed blobs ABOVE the white background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(60% 50% at 10% 10%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(50% 40% at 90% 10%, rgba(167,139,250,0.18), transparent 60%)",
            willChange: "transform",
          }}
        />
        {/* subtle grid overlay ABOVE white, BELOW content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />


        {/* CONTENT on top */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-10">

          {/* Breadcrumbs for SEO & UX */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
              {breadcrumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  <a
                    href={c.href}
                    className={`hover:text-indigo-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-10 items-start">
            {/* Left column: Main content + Form on mobile */}
            <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-start md:pt-1">
              <span className="md:inline-flex text-center w-fit items-center gap-2 rounded-full border border-sky-200/70 bg-white/70 px-3 py-1 text-[11px] font-medium text-sky-700 shadow-sm backdrop-blur">
                🎓 Industry-recognized • ⚡ Fast Response <span className="opacity-70">under 24 hrs</span>
              </span>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-slate-700">
                Contact <span className="text-brand">CDPL (Cinute Digital)</span> - Start Your Tech Career
              </h1>

              {/* Form: Display below h1 on mobile only */}
              <div className="md:hidden mt-6">
                {/* gradient outer skin + 1px border */}
                <div className="rounded-3xl p-[1px] bg-gradient-to-br from-sky-100/70 via-indigo-100/60 to-orange-100/70 shadow-2xl">
                  {/* inner glass panel */}
                  <div className="rounded-[calc(1.5rem-1px)] backdrop-blur p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
                    <p className="mt-1.5 text-slate-600">
                      Have questions about our courses or placements? Our expert counselors are here to help you.
                    </p>

                    <ContactHeroForm />

                    <p className="mt-4 text-[12px] text-slate-500">
                      By submitting, you agree to be contacted about admissions and courses. We respect your privacy.
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-lg text-slate-600 max-w-prose">
                Reach India&apos;s leading ed-tech institute for <strong>Software Testing</strong>,{" "}
                <strong>Data Science &amp; AI</strong>, and <strong>Full-Stack Development</strong>. Get{" "}
                <strong>job-ready training</strong>, <strong>placement assistance</strong>, and{" "}
                <strong>industry-recognized certificates</strong> with live mentor-led classes and hands-on
                capstone projects.
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {[
                  "Live Online Classes + Recordings",
                  "Placement Assistance & Mock Interviews",
                  "Project-based Learning & Capstones",
                  "Corporate Training & Team Upskilling",
                  "Flexible EMIs & Scholarships",
                  "Mentor Support • Doubt-solving",
                ].map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2 shadow-sm backdrop-blur"
                  >
                    <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Quick Contact Buttons */}
              <div className="mt-6">
                <div className="mb-2 text-sm font-semibold text-slate-700">Quick Contact Options</div>

                {/* Responsive, non-overlapping grid */}
                <div
                  className="grid gap-4 lg:gap-3 xl:gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]"
                >
                  {/* Call Now */}
                  <Link
                    href="tel:+918488988984"
                    aria-label="Call Now"
                    className="group inline-flex w-full items-center gap-4 lg:gap-3 xl:gap-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 overflow-hidden"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/90 text-white shadow-sm">
                      <Phone className="h-6 w-6 lg:h-7 lg:w-7" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-base font-semibold text-slate-900">Call Now</span>
                      <span className="text-[12px] text-slate-600 group-hover:text-slate-700 truncate whitespace-nowrap">
                        +91 84-889-889-84
                      </span>
                    </span>
                  </Link>

                  {/* Email Us */}
                  <Link
                    href="mailto:contact@cinutedigital.com"
                    aria-label="Email Us"
                    className="group inline-flex w-full items-center gap-4 lg:gap-3 xl:gap-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 overflow-hidden"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/90 text-white shadow-sm">
                      <Mail className="h-6 w-6 lg:h-7 lg:w-7" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-base font-semibold text-slate-900">Email Us</span>
                      <span className="text-[12px] text-slate-600 group-hover:text-slate-700 truncate whitespace-nowrap">
                        contact@cinutedigital.com
                      </span>
                    </span>
                  </Link>

                  {/* Schedule Meeting */}
                  <Link
                    href="https://calendar.app.google/tvh9dsXZsX9BujRR8"
                    target="_blank"
                    aria-label="Schedule a Meeting"
                    className="group inline-flex w-full items-center gap-4 lg:gap-3 xl:gap-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 overflow-hidden"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fuchsia-600/90 text-white shadow-sm">
                      <CalendarDays className="h-6 w-6 lg:h-7 lg:w-7" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col">
                      <span className="text-base font-semibold text-slate-900">Schedule Meeting</span>
                      <span className="text-[12px] text-slate-600 group-hover:text-slate-700 truncate whitespace-nowrap">
                        Book a Call
                      </span>
                    </span>
                  </Link>
                </div>
              </div>


              <p className="mt-5 text-[15px] text-slate-600">
                Serving learners across India - Mumbai, Pune, Bengaluru &amp; beyond. Talk to our{" "}
                <strong>admissions counselors</strong> for <strong>course fees</strong>,{" "}
                <strong>syllabus &amp; roadmaps</strong>, <strong>placement support</strong>, or{" "}
                <strong>custom corporate training</strong>.
              </p>

              <p className="mt-3 text-[13px] text-slate-500">
                No spam. Our advisors respond within 24 hours with course advice, career guidance, and next steps.
              </p>
            </div>

            {/* Right column: Form on desktop only */}
            <div className="hidden md:block md:col-span-6 lg:col-span-5 relative">
              {/* gradient outer skin + 1px border */}
              <div className="rounded-3xl p-[1px] bg-gradient-to-br from-sky-100/70 via-indigo-100/60 to-orange-100/70 shadow-2xl">
                {/* inner glass panel — constrained width */}
                <div className="rounded-[calc(1.5rem-1px)] backdrop-blur p-6 sm:p-8 w-full md:max-w-md lg:max-w-sm xl:max-w-md">
                  <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
                  <p className="mt-1.5 text-slate-600">
                    Share your goals — we&apos;ll help you find the perfect course or training plan.
                  </p>

                  <ContactHeroForm idPrefix="desktop_" />

                  <p className="mt-4 text-[12px] text-slate-500">
                    By submitting, you agree to be contacted about admissions and courses. We respect your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
