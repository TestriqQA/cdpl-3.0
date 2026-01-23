"use client";

import Link from "next/link";
import Script from "next/script";

export function ContactBookCallSection() {
  return (
    <section id="book" className="relative bg-white dark:[color-scheme:light]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 10% 0%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(50% 40% at 90% 0%, rgba(167,139,250,0.10), transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur shadow-lg overflow-hidden">
          <div className="relative p-8 md:p-10">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "linear-gradient(180deg, rgba(224,242,254,0.7), rgba(237,233,254,0.65))",
              }}
            />
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">
                Book a <span className="text-brand">Free 1:1 Career Counseling</span> Session
              </h2>
              <p className="mt-5 text-lg max-w-5xl text-slate-600">
                Get personalized guidance on <strong>Software Testing</strong>, <strong>Data Science &amp; AI</strong>, and{" "}
                <strong>Full-Stack Development</strong> programs. Discuss <strong>placements</strong>,{" "}
                <strong>EMI &amp; scholarships</strong>, and your <strong>job-ready learning roadmap</strong>.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                {[
                  { title: "15–20 mins on Zoom/Phone", bgColor: "bg-purple-50", textColor: "text-purple-700" },
                  { title: "Free advisory call", bgColor: "bg-orange-50", textColor: "text-brand" },
                  { title: "Live mentor-led courses", bgColor: "bg-indigo-50", textColor: "text-indigo-700" },
                  { title: "Placement assistance", bgColor: "bg-emerald-50", textColor: "text-emerald-700" }
                ].map((t) => (
                  <span key={t.title} className={`rounded-full border border-slate-200 ${t.bgColor} px-3 py-1 text-xs font-medium ${t.textColor} shadow-sm`}>
                    {t.title}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="https://calendar.app.google/tvh9dsXZsX9BujRR8"
                  target="_blank"
                  className="group relative inline-flex items-center justify-center rounded-full bg-blue-700 px-6 py-3 font-semibold text-white shadow-md transition hover:brightness-110"
                  aria-label="Schedule a counseling call"
                >
                  <span className="relative z-[1]">Schedule a Call</span>
                  <span aria-hidden className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] transition-transform duration-700 group-hover:translate-x-full rounded-full" />
                </Link>
              </div>

              <div className="mt-4 text-sm text-slate-500">
                No spam. Our advisors reply within 24 hours. Reschedule anytime.
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { k: "Personalized Roadmap", v: "Course mapping for your goals & experience" },
                { k: "Syllabus & Projects", v: "Hands-on curriculum with capstones & case studies" },
                { k: "Placements", v: "Resume review, mock interviews, hiring drives" },
                { k: "Financing", v: "Scholarships & flexible EMI options" },
              ].map((item, i) => (
                <div key={item.k} className={`p-5 text-center ${i < 3 ? "sm:border-r" : ""} border-slate-100`}>
                  <div className="text-sm font-semibold text-slate-900">{item.k}</div>
                  <div className="mt-1 text-xs text-slate-600">{item.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-3 text-center text-sm text-slate-500">Available in Mumbai • Online (IST)</p>
      </div>

      <Script id="schedule-jsonld" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ScheduleAction",
          agent: { "@type": "Organization", name: "Cinute Digital" },
          object: { "@type": "EducationalOrganization", name: "Cinute Digital", areaServed: "IN" },
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://cal.com/your-link",
            actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
            inLanguage: "en-IN",
          },

        })}
      </Script>
    </section>
  );
}
