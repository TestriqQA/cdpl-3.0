// components/sections/PlacementsHeroSection.tsx
"use client";

import {
  GraduationCap,
  Briefcase,
  Building2,
  BadgeCheck,
  Trophy,
  ArrowRight,
  Home,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
const AdvisorModal = dynamic(() => import("@/components/ui/AdvisorModal"), { ssr: false });

const FLOATERS = [
  { Icon: Briefcase, pos: "-left-4 top-10", color: "text-sky-500", anim: "cdpl-float-a 6s ease-in-out infinite" },
  { Icon: BadgeCheck, pos: "right-0 top-4", color: "text-emerald-500", anim: "cdpl-float-b 7s ease-in-out infinite" },
  { Icon: Building2, pos: "-left-6 bottom-16", color: "text-brand", anim: "cdpl-float-b 6.5s ease-in-out infinite" },
  { Icon: Trophy, pos: "-right-4 bottom-24", color: "text-amber-500", anim: "cdpl-float-a 7.5s ease-in-out infinite" },
];

export default function PlacementsHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                      className={`hover:text-indigo-700 ${isLast ? "font-semibold text-slate-900" : ""}`}
                      aria-current={isLast ? "page" : undefined}
                      title={c.label}
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "font-semibold text-slate-900" : ""}>{c.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2">
          {/* LEFT — text */}
          <div className="order-1 text-left">
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              <span className="text-sky-600">CDPL Student</span>{" "}
              <span className="text-brand">Placements</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
              Explore roles, companies, locations, and success stories from learners across{" "}
              <strong className="text-slate-900">QA Automation</strong>,{" "}
              <strong className="text-slate-900">Data</strong>,{" "}
              <strong className="text-slate-900">Full-Stack</strong>, and{" "}
              <strong className="text-slate-900">Cloud/DevOps</strong> programs by
              Cinute Digital Pvt Ltd (CDPL).
            </p>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg">
              We work closely with mentors and hiring partners to guide profiles, refine resumes,
              and prep for interviews, so students move faster from training to{" "}
              <span className="font-semibold text-slate-900">real offers</span>.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
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
            <div className="mt-8 flex">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex cursor-pointer items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
              >
                Talk to a Placement Advisor
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {FLOATERS.map(({ Icon, pos, color, anim }) => (
                <span
                  key={pos}
                  aria-hidden="true"
                  className={`absolute z-10 grid h-10 w-10 place-items-center rounded-full bg-white shadow-[0_8px_30px_rgba(2,6,23,0.08)] ring-1 ring-slate-200 sm:h-12 sm:w-12 ${pos}`}
                  style={{ animation: anim }}
                >
                  <Icon className={`h-5 w-5 ${color}`} />
                </span>
              ))}
              <Image
                src="/placement_images/placments_hero2.webp"
                alt="CDPL Student Placements illustration"
                title="CDPL Student Placements illustration"
                width={640}
                height={960}
                priority
                fetchPriority="high"
                quality={60}
                sizes="(max-width: 640px) 72vw, 384px"
                className="aspect-[4/5] h-auto w-full max-w-[18rem] rounded-2xl object-cover select-none sm:max-w-[20rem] lg:max-w-[22rem] xl:max-w-[24rem]"
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
