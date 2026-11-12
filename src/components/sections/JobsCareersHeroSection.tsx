import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  BadgeCheck,
  Trophy,
  Briefcase,
  Lightbulb,
  TrendingUp,
  Home,
  ChevronRight,
} from "lucide-react";


// Icon badges around the image, same treatment as the mentors hero.
const FLOATERS = [
  { Icon: Briefcase, pos: "-left-4 top-6", color: "text-sky-500", anim: "cdpl-float-a 6s ease-in-out infinite" },
  { Icon: Lightbulb, pos: "right-2 -top-4", color: "text-brand", anim: "cdpl-float-b 7s ease-in-out infinite" },
  { Icon: BadgeCheck, pos: "-left-6 bottom-10", color: "text-emerald-500", anim: "cdpl-float-b 6.5s ease-in-out infinite" },
  { Icon: TrendingUp, pos: "-right-4 bottom-16", color: "text-amber-500", anim: "cdpl-float-a 7.5s ease-in-out infinite" },
];

export default function JobsCareersHeroSection() {
  // Careers sits under About in the nav, so the trail follows it. The page URL
  // stays /jobs/careers.
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Careers", href: "/jobs/careers" },
  ];

  return (
    <section
      className="
        relative isolate overflow-hidden bg-white text-neutral-900
        pt-[96px] md:pt-[104px] lg:pt-[112px]
        -mt-[96px] md:-mt-[104px] lg:-mt-[112px]
      "
      aria-label="CDPL careers hero section"
      data-scroll-target="careers-hero"
    >
      {/* Background wash — mirrors Placements */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
        <div className="absolute left-1/2 top-[-6rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,theme(colors.sky.200)_0,transparent_60%)]" />
      </div>

      {/* Content container — breadcrumb stays EXACT (pt-10 + mb-3). We gain height by enlarging the illustration only. */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        {/* Breadcrumbs for SEO & UX */}
        <nav aria-label="Breadcrumb" className="mb-4 -mx-4 px-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <ol className="flex items-center gap-2 text-sm text-slate-600 whitespace-nowrap">
            {breadcrumbs.map((c, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={i} className="flex items-center gap-2">
                  {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className={`hover:text-indigo-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                      aria-current={isLast ? "page" : undefined}
                      title={c.label}
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className={`${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}>
                      {c.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2">
          {/* LEFT — text */}
          <div className="order-1 max-w-2xl">
            <h1
              className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
            >
              <span style={{ color: "#0069A8" }}>Build the future of</span>{" "}
              <span style={{ color: "#ff8c00" }}>outcomes-first ed-tech</span>
            </h1>

            <div
              className="mt-4 mx-auto max-w-3xl text-base text-gray-700 sm:text-lg lg:mx-0"
            >
              Ship learner-centric experiences, accelerate career outcomes, and raise the bar for
              quality in Indian ed-tech with Cinute Digital Pvt Ltd (CDPL).
            </div>

            {/* Compact highlights row */}
            <div
              className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
            >
              <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-2 ring-1 ring-green-200">
                <BadgeCheck className="h-4 w-4 text-green-700" />
                <span className="text-sm text-green-700">Product-first team</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-sky-50 px-4 py-2 ring-1 ring-sky-200">
                <Sparkles className="h-4 w-4 text-sky-700" />
                <span className="text-sm text-sky-700">Growth mindset</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-indigo-50 px-4 py-2 ring-1 ring-indigo-200">
                <Trophy className="h-4 w-4 text-indigo-700" />
                <span className="text-sm text-indigo-700">Outcome obsessed</span>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start"
            >
              <Link
                href="#open-roles"
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white shadow-sm ring-1 ring-white/10 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ff8c00] active:translate-y-[1px]"
                style={{ backgroundColor: "#ff8c00" }}
              >
                View open roles
              </Link>
              <Link
                href="/about-us"
                className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition"
              >
                About CDPL
              </Link>
            </div>
          </div>

          {/* RIGHT — image with floating icon badges (as on the mentors hero) */}
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
                src="/careers/careers-hero.png"
                alt="Student and recruiter shaking hands illustration"
                title="Student and recruiter shaking hands illustration"
                width={468}
                height={468}
                sizes="(max-width: 640px) 80vw, 448px"
                className="h-auto w-full max-w-[20rem] rounded-2xl select-none sm:max-w-[24rem] lg:max-w-[26rem] xl:max-w-[28rem]"
                priority
                fetchPriority="high"
                quality={60}
              />
            </div>
          </div>
        </div>

        {/* small spacer that only shows on >=lg to breathe under the larger image without moving breadcrumb */}
        <div className="hidden lg:block h-2" />
      </div>
    </section>
  );
}
