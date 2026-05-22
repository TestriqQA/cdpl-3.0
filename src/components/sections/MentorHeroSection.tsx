import BrowseMentorsButton from "./BrowseMentorsButton";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Home } from "lucide-react";

export default function MentorHeroSection() {

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Mentors", href: "/mentors" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white text-slate-900">
      {/* background wash (full-bleed) */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute left-1/2 top-[-6rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,theme(colors.indigo.200)_0,transparent_60%)]" />
      </div>

      {/* Decorative layer (no pointer events) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Floating micro-vectors kept high so they never collide with copy */}
        <FloatingBadge className="hidden min-[1040px]:grid absolute left-[6%] top-[9%]">
          <svg viewBox="0 0 64 64" className="h-10 w-10">
            <animateTransform attributeName="transform" type="translate" dur="5.6s" values="0,-8;0,8;0,-8" repeatCount="indefinite" />
            <path d="M10 18h32a10 10 0 0110 10v2a10 10 0 01-10 10H27l-9 8v-8h-8a10 10 0 01-10-10v-2a10 10 0 0110-10z"
              fill="currentColor" style={{ color: "var(--cdpl-accent, #0ea5e9)" }} opacity="0.9" />
            <circle cx="22" cy="29" r="2" fill="#fff" />
            <circle cx="30" cy="29" r="2" fill="#fff" />
            <circle cx="38" cy="29" r="2" fill="#fff" />
          </svg>
        </FloatingBadge>

        <FloatingBadge className="hidden min-[1040px]:grid absolute left-[40%] top-[6%]">
          <svg viewBox="0 0 64 64" className="h-9 w-9">
            <animateTransform attributeName="transform" type="translate" dur="6s" values="0,10;0,-6;0,10" repeatCount="indefinite" />
            <path d="M32 10a14 14 0 00-8 26c1 2 2 3 2 6h12c0-3 1-4 2-6a14 14 0 00-8-26z" fill="currentColor"
              style={{ color: "var(--color-brand, #ff8c00)" }} opacity="0.95" />
            <rect x="26" y="48" width="12" height="6" rx="2" fill="#0f172a" opacity="0.7" />
          </svg>
        </FloatingBadge>

        <FloatingBadge className="hidden min-[1040px]:grid absolute left-[28%] top-[14%]">
          <svg viewBox="0 0 64 64" className="h-10 w-10">
            <animateTransform attributeName="transform" type="translate" dur="5.2s" values="0,-6;0,8;0,-6" repeatCount="indefinite" />
            <rect x="14" y="14" width="36" height="44" rx="4" fill="#fff" />
            <rect x="22" y="10" width="20" height="8" rx="2" fill="currentColor" style={{ color: "var(--color-brand, #ff8c00)" }} />
            <path d="M22 28h20M22 34h16M22 40h12" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          </svg>
        </FloatingBadge>

        <FloatingBadge className="hidden min-[1040px]:grid absolute left-[69%] top-[12%]">
          <svg viewBox="0 0 64 64" className="h-9 w-9">
            <animateTransform attributeName="transform" type="translate" dur="6.8s" values="0,8;0,-8;0,8" repeatCount="indefinite" />
            <path d="M16 18h32v6a12 12 0 01-12 12h-8A12 12 0 0116 24v-6z" fill="currentColor" style={{ color: "var(--color-brand, #ff8c00)" }} />
            <path d="M24 46h16v4H24z" fill="#0f172a" opacity="0.7" />
            <path d="M14 20h-6a8 8 0 008 8" fill="none" stroke="#0ea5e9" strokeWidth="2" />
            <path d="M50 20h6a8 8 0 01-8 8" fill="none" stroke="#0ea5e9" strokeWidth="2" />
          </svg>
        </FloatingBadge>

        <FloatingBadge className="hidden min-[1040px]:grid absolute right-[9%] top-[8%]">
          <svg viewBox="0 0 64 64" className="h-9 w-9">
            <animateTransform attributeName="transform" type="translate" dur="5.8s" values="0,-9;0,7;0,-9" repeatCount="indefinite" />
            <path d="M22 10v44M42 10v44M22 18h20M22 26h20M22 34h20M22 42h20" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </FloatingBadge>

        {/* Ambient sweeping lines */}
        <svg className="absolute left-0 top-0 h-full w-full">
          <defs>
            <linearGradient id="cdpl-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(14,165,233,0)" />
              <stop offset="50%" stopColor="rgba(14,165,233,0.22)" />
              <stop offset="100%" stopColor="rgba(14,165,233,0)" />
            </linearGradient>
          </defs>
          {[0, 90, 180, 270].map((y, i) => (
            <g key={i} transform={`translate(0, ${y})`}>
              <rect x="-45%" y="0" width="90%" height="1.5" fill="url(#cdpl-line)">
                <animate attributeName="x" values="-45%;65%;-45%" dur={`${14 + i * 2}s`} repeatCount="indefinite" />
              </rect>
            </g>
          ))}
        </svg>
      </div>

      {/* ===== Content container — matches About section spacing & breadcrumb placement ===== */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        {/* Breadcrumbs for SEO & UX */}
        <nav aria-label="Breadcrumb" className="mb-4 -mx-4 px-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <ol className="flex items-center gap-2 text-sm text-slate-600 whitespace-nowrap">
            {breadcrumbs.map((c, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={i} className="flex items-center gap-2">
                  {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  <Link
                    href={c.href}
                    className={`hover:text-indigo-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                    aria-current={isLast ? "page" : undefined}
                    title={c.label}
                  >
                    {c.label}
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Two-column layout identical in behavior to About (items-start, gaps, stack on mobile) */}
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2">
          {/* LEFT — text first on all viewports */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur">
              <span
                className="hidden sm:inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--color-brand, #ff8c00)" }}
              />
              One-on-One Mentorship • Resume + Interview Prep • Placement Support
            </p>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl text-[#0069A8]">
              Meet CDPL’s industry{" "}
              <span className="text-brand">mentors</span>
            </h1>

            <p className="mt-4 mx-auto lg:mx-0 max-w-3xl text-base sm:text-lg text-slate-600">
              Learn directly from CDPL mentors across <strong>Software Testing (QA)</strong>,{" "}
              <strong>Data Science &amp; AI/ML</strong>, <strong>Product</strong>, and{" "}
              <strong>Engineering</strong>. Build a job-ready portfolio with real projects, get tailored
              feedback and mock interviews, and follow a clear placement roadmap across India.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-700 lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">50+ real projects</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">100+ datasets</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">Interview prep + mock rounds</span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
              <Link
                href="https://calendar.app.google/tvh9dsXZsX9BujRR8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:opacity-90 cursor-pointer bg-brand"
                aria-label="Book a free mentorship session"
              >
                Book a free session
              </Link>
              <BrowseMentorsButton />
            </div>

            {/* trust row */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm lg:justify-start">
              <div className="inline-flex items-center gap-2">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 text-amber-500" fill="currentColor">
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="text-slate-600">4.8/5 mentor rating</span>
              </div>
              <span className="hidden h-4 w-px bg-slate-200 min-[480px]:block" />
              <span className="text-slate-600">10,000+ session hours delivered</span>
              <span className="hidden h-4 w-px bg-slate-200 min-[480px]:block" />
              <span className="text-slate-600">Outcome-focused curriculum</span>
            </div>

            {/* SR-only keywords for SEO */}
            <p className="sr-only">
              CDPL mentorship, industry mentors, placement assistance, career guidance, ed-tech institute,
              job oriented training, hands-on projects, portfolio building, data science mentorship,
              software testing mentorship, product management coaching, engineering mentorship.
            </p>
          </div>

          {/* RIGHT — image (lifted up to align with content start; content unchanged) */}
          <div className="order-2 lg:order-2 relative flex items-start justify-center lg:justify-end mt-6 lg:mt-0 -translate-y-2 sm:-translate-y-3 lg:-translate-y-10 xl:-translate-y-12">
            <Image
              src="/mentors_images/mentors-hero2.webp"
              alt="CDPL Mentors"
              title="CDPL Mentors"
              width={640}
              height={480}
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 640px"
              className="
                w-full h-auto
                max-w-[28rem] sm:max-w-[34rem]
                lg:min-w-[32rem] lg:max-w-[36rem] xl:max-w-[40rem]
                rounded-2xl
              "
              priority
              fetchPriority="high"
              quality={60}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* === Helpers === */
function FloatingBadge({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`grid place-items-center h-14 w-14 rounded-full bg-white ring-2 ring-white shadow-sm ${className}`}
      aria-hidden={true}
      style={{ boxShadow: "0 8px 30px rgba(2, 6, 23, 0.07)" }}
    >
      {children}
    </div>
  );
}
