import BrowseMentorsButton from "./BrowseMentorsButton";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, ClipboardCheck, Home, Lightbulb, MessagesSquare, Star, Trophy } from "lucide-react";

const FLOATERS = [
  { Icon: MessagesSquare, pos: "-left-4 top-6", color: "text-sky-500", anim: "cdpl-float-a 6s ease-in-out infinite" },
  { Icon: Lightbulb, pos: "right-2 -top-4", color: "text-brand", anim: "cdpl-float-b 7s ease-in-out infinite" },
  { Icon: ClipboardCheck, pos: "-left-6 bottom-10", color: "text-emerald-500", anim: "cdpl-float-b 6.5s ease-in-out infinite" },
  { Icon: Trophy, pos: "-right-4 bottom-16", color: "text-amber-500", anim: "cdpl-float-a 7.5s ease-in-out infinite" },
];

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
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2">
          {/* LEFT — text first on all viewports */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              <span className="text-sky-600">Meet CDPL’s Industry</span>{" "}
              <span className="text-brand">Mentors</span>
            </h1>

            <p className="mt-6 mx-auto lg:mx-0 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
              Learn directly from CDPL mentors across <strong>Software Testing (QA)</strong>,{" "}
              <strong>Data Science &amp; AI/ML</strong>, <strong>Product</strong>, and{" "}
              <strong>Engineering</strong>. Build a job-ready portfolio with real projects, get tailored
              feedback and mock interviews, and follow a clear placement roadmap across India.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
              <Link
                href="https://calendar.app.google/tvh9dsXZsX9BujRR8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                aria-label="Book a free mentorship session"
              >
                Book a free session <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              <BrowseMentorsButton />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-1 text-sm text-slate-600 lg:justify-start">
              <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" aria-hidden="true" />
              <span className="font-semibold text-slate-800">4.8/5</span>
              <span>mentor rating</span>
              <span aria-hidden="true">·</span>
              <span>10,000+ session hours delivered</span>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {FLOATERS.map(({ Icon, pos, color, anim }) => (
                <span
                  key={pos}
                  aria-hidden="true"
                  className={`absolute z-10 hidden h-12 w-12 place-items-center rounded-full bg-white shadow-[0_8px_30px_rgba(2,6,23,0.08)] ring-1 ring-slate-200 sm:grid ${pos}`}
                  style={{ animation: anim }}
                >
                  <Icon className={`h-5 w-5 ${color}`} />
                </span>
              ))}
              <Image
                src="/mentors_images/mentors-hero2.webp"
                alt="CDPL Mentors"
                title="CDPL Mentors"
                width={640}
                height={480}
                sizes="(max-width: 640px) 80vw, 448px"
                className="h-auto w-full max-w-[20rem] rounded-2xl sm:max-w-[24rem] lg:max-w-[26rem] xl:max-w-[28rem]"
                priority
                fetchPriority="high"
                quality={60}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

