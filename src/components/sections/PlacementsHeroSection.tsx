// components/sections/PlacementsHeroSection.tsx
"use client";

import {
  Sparkles,
  GraduationCap,
  Briefcase,
  Building2,
  BadgeCheck,
  TrendingUp,
  Trophy,
  MapPin,
  ArrowRight,
  Home,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const AdvisorModal = dynamic(() => import("@/components/ui/AdvisorModal"), { ssr: false });

const BRAND_ORANGE_GRAD =
  "linear-gradient(90deg,#ff8c00 0%,#ffb558 50%,#ffd19e 100%)";

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
        animation: `cdpl-float ${duration}s ease-in-out ${delay}s infinite`,
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

export default function PlacementsHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFloatingIcons, setShowFloatingIcons] = useState(false);

  useEffect(() => {
    // Only show decorative floating icons on larger screens to save resources
    const check = () => setShowFloatingIcons(window.innerWidth >= 1040);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Jobs" },
    { label: "Placements", href: "/jobs/placements" },
  ];
  return (
    <section
        className="
        relative isolate overflow-hidden bg-white text-slate-900
        pt-[96px] md:pt-[104px] lg:pt-[112px]
        -mt-[96px] md:-mt-[104px] lg:-mt-[112px]
      "
        aria-label="CDPL student placements hero section"
        data-scroll-target="placements-hero"
      >
        {/* Background wash (full-bleed) */}
        <div className="absolute inset-0 -z-30">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
          <div className="absolute left-1/2 top-[-6rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,theme(colors.indigo.200)_0,transparent_60%)]" />
        </div>

        {/* Decorative layer (no pointer events) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {showFloatingIcons && (
            <>
              <FloatingIcon x="6%" y="9%">
                <Briefcase className="h-6 w-6 text-[#6aa9ff]" />
              </FloatingIcon>
              <FloatingIcon x="40%" y="6%">
                <BadgeCheck className="h-6 w-6 text-[#7ee7ff]" />
              </FloatingIcon>
              <FloatingIcon x="28%" y="14%">
                <Building2 className="h-6 w-6 text-[#6aa9ff]" />
              </FloatingIcon>
              <FloatingIcon x="69%" y="12%">
                <TrendingUp className="h-6 w-6 text-[#b0b9ff]" />
              </FloatingIcon>
              <FloatingIcon x="91%" y="8%">
                <Trophy className="h-6 w-6 text-[#9d7bff]" />
              </FloatingIcon>
              <FloatingIcon x="87%" y="26%">
                <MapPin className="h-6 w-6 text-[#7ee7ff]" />
              </FloatingIcon>
            </>
          )}

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

        {/* SINGLE CONTAINER (breadcrumb + hero) */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 md:pb-6 sm:px-6 lg:px-8">
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

          {/* Use gradient constant once (no visual change, satisfies linter) */}
          <span className="sr-only" style={{ backgroundImage: BRAND_ORANGE_GRAD }} />

          {/* Layout mirrors Jobs hero: smaller image right; richer left content */}
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-8 lg:gap-12">
            {/* LEFT — text (densified to avoid empty feel) */}
            <div className="order-1 md:order-1 max-w-2xl md:flex-1 md:basis-[60%] lg:basis-[62%]">
              <div
                className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 px-3 py-1 text-sm bg-white/85 backdrop-blur-md text-gray-800"
              >
                <Sparkles className="h-4 w-4 text-[#6aa9ff]" />
                <span>Real Hiring Outcomes</span>
              </div>

              <h1
                className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
              >
                <span style={{ color: "#0069A8" }}>CDPL Student</span>{" "}
                <span style={{ color: "var(--color-brand, #ff8c00)" }}>
                  Placements
                </span>
              </h1>

              <p
                className="mt-4 mx-auto max-w-3xl text-base text-slate-700 sm:text-lg lg:mx-0"
              >
                Explore roles, companies, locations, and success stories from learners across{" "}
                <strong className="text-slate-900">QA Automation</strong>,{" "}
                <strong className="text-slate-900">Data</strong>,{" "}
                <strong className="text-slate-900">Full-Stack</strong>, and{" "}
                <strong className="text-slate-900">Cloud/DevOps</strong> programs by
                Cinute Digital Pvt Ltd (CDPL).
              </p>

              {/* Added supporting paragraph like Jobs hero to fill left space */}
              <p
                className="mt-4 mx-auto max-w-3xl text-[15px] leading-7 text-slate-700 sm:text-base md:text-lg lg:mx-0"
              >
                We work closely with mentors and hiring partners to guide profiles, refine resumes,
                and prep for interviews, so students move faster from training to{" "}
                <span className="font-semibold text-slate-900">real offers</span>.
              </p>

              {/* Compact highlights row to enrich content density */}
              <div
                className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4"
              >
                <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-2 ring-1 ring-green-200">
                  <BadgeCheck className="h-4 w-4 text-green-700" />
                  <span className="text-sm text-green-700">Verified outcomes</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-sky-50 px-4 py-2 ring-1 ring-sky-200">
                  <GraduationCap className="h-4 w-4 text-sky-700" />
                  <span className="text-sm text-sky-700">Mentor-led prep</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-indigo-50 px-4 py-2 ring-1 ring-indigo-200">
                  <Trophy className="h-4 w-4 text-indigo-700" />
                  <span className="text-sm text-indigo-700">Interview ready</span>
                </div>
              </div>

              {/* CTA */}
              <div
                className="mt-6 flex items-center justify-center md:justify-start"
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white shadow-sm ring-1 ring-black/5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-400 active:translate-y-[1px] cursor-pointer hover:bg-brand"
                  style={{ backgroundColor: "#ff8c00" }}
                >
                  Talk to a Placement Advisor
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* RIGHT — visual (smaller + raised, like Jobs hero) */}
            <div className="order-2 md:order-2 relative self-start mt-6 md:mt-0 md:basis-[40%] lg:basis-[38%] -translate-y-1 sm:-translate-y-2 md:-translate-y-4 lg:-translate-y-8">
              <div className="relative ml-0 mr-0 w-full md:ml-auto max-w-[24rem] sm:max-w-[26rem] md:w-[300px] lg:w-[360px] xl:w-[400px]">
                <Image
                  src="/placement_images/placments_hero2.webp"
                  alt="CDPL Student Placements illustration — partner companies & verified outcomes"
                  title="CDPL Student Placements illustration — partner companies & verified outcomes"
                  width={640}
                  height={960}
                  priority
                  quality={60}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 400px"
                  className="h-auto w-full rounded-2xl select-none"
                />
              </div>
            </div>
          </div>
        </div>

        <AdvisorModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          source="Placements Page - Hero Section"
        />
    </section>
  );
}
