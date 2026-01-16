"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  BadgeCheck,
  Trophy,
  Briefcase,
  Building2,
  TrendingUp,
  MapPin,
  Home,
  ChevronRight,
} from "lucide-react";



function FloatingIcon({
  children,
  className,
  x,
  y,
  size = 28,
  delay = 0,
  duration = 6,
}: {
  children: React.ReactNode;
  className?: string;
  x: string;
  y: string;
  size?: number;
  delay?: number;
  duration?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute select-none ${className || ""}`}
      style={{
        left: x,
        top: y,
        opacity: 0,
        animation: `float-icon ${duration}s ${delay}s infinite linear forwards`
      }}
    >
      <div
        className="rounded-xl border backdrop-blur-md bg-white/75 border-white/60 shadow-sm"
        style={{ width: size + 14, height: size + 14 }}
      >
        <div className="grid h-full place-items-center">{children}</div>
      </div>
    </div>
  );
}

const styles = `
  @keyframes float-icon {
    0% { opacity: 0; transform: translateY(6px) rotate(-2deg); }
    10% { opacity: 1; transform: translateY(0) rotate(-2deg); }
    30% { transform: translateY(-8px) rotate(2deg); }
    50% { transform: translateY(0) rotate(-1deg); }
    70% { transform: translateY(6px) rotate(2deg); }
    100% { opacity: 1; transform: translateY(0) rotate(-2deg); }
  }
  @keyframes pulse-sprite {
    0% { opacity: 0.6; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(-10px); }
    100% { opacity: 0.9; transform: translateY(0); }
  }
`;

export default function JobsCareersHeroSection() {
  const sprites = [
    { x: "10%", y: "10%", size: 10, d: 4.0 },
    { x: "85%", y: "18%", size: 12, d: 4.5 },
    { x: "18%", y: "65%", size: 8, d: 4.8 },
    { x: "78%", y: "72%", size: 9, d: 5.0 },
    { x: "45%", y: "12%", size: 11, d: 5.2 },
  ];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Jobs" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="
        relative isolate overflow-hidden bg-white text-neutral-900
        pt-[96px] md:pt-[104px] lg:pt-[112px]
        -mt-[96px] md:-mt-[104px] lg:-mt-[112px]
      "
        aria-label="CDPL careers hero section"
        data-scroll-target="careers-hero"
      >
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        {/* Background wash — mirrors Placements */}
        <div className="absolute inset-0 -z-30">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
          <div className="absolute left-1/2 top-[-6rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,theme(colors.sky.200)_0,transparent_60%)]" />
        </div>

        {/* Decorative layer (no pointer events) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <FloatingIcon x="6%" y="9%" className="hidden min-[1040px]:grid">
            <Briefcase className="h-6 w-6 text-[#6aa9ff]" />
          </FloatingIcon>
          <FloatingIcon x="40%" y="6%" className="hidden min-[1040px]:grid">
            <BadgeCheck className="h-6 w-6 text-[#7ee7ff]" />
          </FloatingIcon>
          <FloatingIcon x="28%" y="14%" className="hidden min-[1040px]:grid">
            <Building2 className="h-6 w-6 text-[#6aa9ff]" />
          </FloatingIcon>
          <FloatingIcon x="69%" y="12%" className="hidden min-[1040px]:grid">
            <TrendingUp className="h-6 w-6 text-[#b0b9ff]" />
          </FloatingIcon>
          <FloatingIcon x="91%" y="8%" className="hidden min-[1040px]:grid">
            <Trophy className="h-6 w-6 text-[#9d7bff]" />
          </FloatingIcon>
          <FloatingIcon x="87%" y="26%" className="hidden min-[1040px]:grid">
            <MapPin className="h-6 w-6 text-[#7ee7ff]" />
          </FloatingIcon>

          {/* Ambient dots (masked from center) */}
          <div
            className="absolute inset-0"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse at center, transparent 0%, transparent 42%, black 50%)",
              maskImage:
                "radial-gradient(ellipse at center, transparent 0%, transparent 42%, black 50%)",
            }}
          >
            {sprites.map((s, i) => (
              <div
                key={`bg-${i}`}
                className="absolute opacity-80"
                style={{
                  left: s.x,
                  top: s.y,
                  animation: `pulse-sprite ${s.d}s infinite ease-in-out`
                }}
              >
                <svg width={s.size * 4} height={s.size * 4} viewBox="0 0 40 40" aria-hidden>
                  <defs>
                    <linearGradient id={`g-${i}`} x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#7ee7ff" />
                      <stop offset="100%" stopColor="#9d7bff" />
                    </linearGradient>
                  </defs>
                  <circle cx="20" cy="20" r="8" fill={`url(#g-${i})`} />
                  <path d="M30 22 l6 2 l-6 2 z" fill="#ffd19e" opacity="0.7" />
                </svg>
              </div>
            ))}
          </div>

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

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-8 lg:gap-12">
            {/* LEFT — text */}
            <div className="order-1 md:order-1 max-w-2xl md:flex-1 md:basis-[60%] lg:basis-[62%]">
              <m.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 px-3 py-1 text-sm bg-white/85 backdrop-blur-md text-gray-800"
              >
                <Sparkles className="h-4 w-4 text-[#6aa9ff]" />
                <span>Join the team</span>
              </m.div>

              <m.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
              >
                <span style={{ color: "#0069A8" }}>Build the future of</span>{" "}
                <span style={{ color: "#c2410c" }}>outcomes-first ed-tech</span>
              </m.h1>

              <m.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.14 }}
                className="mt-4 mx-auto max-w-3xl text-base text-gray-700 sm:text-lg lg:mx-0"
              >
                Ship learner-centric experiences, accelerate career outcomes, and raise the bar for
                quality in Indian ed-tech with Cinute Digital Pvt Ltd (CDPL).
              </m.div>

              {/* Compact highlights row */}
              <m.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18 }}
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
              </m.div>

              {/* CTAs */}
              <m.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start"
              >
                <Link
                  href="#open-roles"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white shadow-sm ring-1 ring-white/10 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c2410c] active:translate-y-[1px]"
                  style={{ backgroundColor: "#c2410c" }}
                >
                  View open roles
                </Link>
                <Link
                  href="/about-us"
                  className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition"
                >
                  About CDPL
                </Link>
              </m.div>
            </div>

            {/* RIGHT — visual; enlarge only to increase overall height without touching breadcrumb */}
            <div className="order-2 md:order-2 relative self-start mt-6 md:mt-0 md:basis-[40%] lg:basis-[38%]">
              <div className="relative ml-0 mr-0 w-full md:ml-auto max-w-[26rem] sm:max-w-[28rem] md:w-[348px] lg:w-[420px] xl:w-[468px]">
                <Image
                  src="/careers/careers-hero.png"
                  alt="Student and recruiter shaking hands illustration"
                  title="Student and recruiter shaking hands illustration"
                  width={468}
                  height={468}
                  priority
                  quality={60}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 400px"
                  className="h-auto w-full rounded-2xl select-none"
                />
              </div>
            </div>
          </div>

          {/* small spacer that only shows on >=lg to breathe under the larger image without moving breadcrumb */}
          <div className="hidden lg:block h-2" />
        </div>
      </section>
    </LazyMotion>
  );
}
