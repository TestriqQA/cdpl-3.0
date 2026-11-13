import Image from "next/image";
import Link from "next/link";
import { Sparkles, Home, ChevronRight, ArrowDown, ShieldCheck, Users2, Bell } from "lucide-react";
import { JobsLiveJobsHeroCTA } from "./JobsLiveJobsHeroCTA";

interface Props {
  customTitle?: React.ReactNode;
  customDescription?: string;
}

const TRUST = [
  { Icon: ShieldCheck, label: "Verified before posting" },
  { Icon: Users2, label: "Mentor help to apply" },
  { Icon: Bell, label: "Alerts on WhatsApp" },
];

/**
 * Live Jobs hero, in the homepage hero's language: light wash, dark h1 with a
 * brand-orange word, orange pill and buttons. Copy unchanged (the second
 * paragraph is kept; it carries the page's supporting keywords).
 */
export default function JobsLiveJobsJobsHeroSection({ customTitle, customDescription }: Props) {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Jobs" },
    { label: "Live Jobs", href: "/jobs/live-jobs" },
  ];

  return (
    <section aria-label="CDPL jobs hero" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-10 top-16 h-96 w-96 rounded-full bg-gradient-to-br from-orange-200 to-orange-100 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-200 to-blue-100 opacity-20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={i} className="flex items-center gap-2">
                  {i === 0 ? <Home className="h-4 w-4" aria-hidden="true" /> : <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className={isLast ? "font-semibold text-slate-900" : "transition-colors hover:text-brand"}
                      aria-current={isLast ? "page" : undefined}
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span>{c.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              CDPL Live Jobs • Verified nearby roles
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {customTitle ? (
                customTitle
              ) : (
                <>
                  Helping CDPL learners land the right opportunities &ndash;{" "}
                  <span className="text-brand">faster.</span>
                </>
              )}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
              {customDescription || "Explore verified roles in QA Automation, Data Science, Full Stack Development, and DevOps, curated specially for CDPL students."}
            </p>
            <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
              Through our network of industry mentors, hiring partners, and local job listings, CDPL supports
              you with personalized job alerts, resume guidance, and interview preparation to accelerate your
              career growth across India.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#openings"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                See latest openings
                <ArrowDown className="h-5 w-5" aria-hidden="true" />
              </Link>
              <JobsLiveJobsHeroCTA />
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-700">
              {TRUST.map(({ Icon, label }) => (
                <li key={label} className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <Image
              src="/live-jobs_images/live-jobs_hero2.png"
              alt="Live jobs hero"
              title="Live jobs hero"
              width={960}
              height={960}
              priority
              fetchPriority="high"
              decoding="async"
              quality={60}
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 50vw, 420px"
              className="h-auto w-full max-w-[20rem] select-none rounded-2xl sm:max-w-[24rem] lg:max-w-[26rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
