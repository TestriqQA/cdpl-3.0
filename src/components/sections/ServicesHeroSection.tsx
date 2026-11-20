// src/components/sections/ServicesHeroSection.tsx
// Laid out after MentorHeroSection: breadcrumbs, two-tone heading, intro,
// two CTAs and a trust line on the left; the hero image with floating icon
// bubbles on the right.
"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  GraduationCap,
  Home,
  Presentation,
  Trophy,
} from "lucide-react";

const WorkshopRequestModal = dynamic(() => import("../WorkshopRequestModal"), { ssr: false });

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

// Same bubbles as the mentors hero (keyframes live in globals.css).
const FLOATERS = [
  { Icon: Presentation, pos: "-left-4 top-6", color: "text-sky-500", anim: "cdpl-float-a 6s ease-in-out infinite" },
  { Icon: GraduationCap, pos: "right-2 -top-4", color: "text-brand", anim: "cdpl-float-b 7s ease-in-out infinite" },
  { Icon: Building2, pos: "-left-6 bottom-10", color: "text-emerald-500", anim: "cdpl-float-b 6.5s ease-in-out infinite" },
  { Icon: Trophy, pos: "-right-4 bottom-16", color: "text-amber-500", anim: "cdpl-float-a 7.5s ease-in-out infinite" },
];

const HIGHLIGHTS = ["Customizable curriculum", "Hands-on labs & capstones", "Interview prep & reporting"];

export default function ServicesHeroSection() {
  const [isWorkshopModalOpen, setIsWorkshopModalOpen] = useState(false);
  const scrollToGrid = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("services-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <section aria-labelledby="services-heading" className="relative isolate overflow-hidden text-slate-900">
        {/* Glow (full-bleed). No solid fill: the page wrapper's gradient shows
            through, so there is no seam with the section below. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-6rem] h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.indigo.200)_0,transparent_60%)] opacity-40 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-12 sm:px-6 lg:px-8">
          {/* Breadcrumbs for SEO & UX */}
          <nav aria-label="Breadcrumb" className="mb-4 -mx-4 overflow-x-auto px-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <ol className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-600">
              {breadcrumbs.map((c, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <li key={c.href} className="flex items-center gap-2">
                    {i === 0 ? <Home className="h-4 w-4" aria-hidden="true" /> : <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                    <Link
                      href={c.href}
                      title={c.label}
                      aria-current={isLast ? "page" : undefined}
                      className={`hover:text-indigo-700 ${isLast ? "font-semibold text-slate-900" : ""}`}
                    >
                      {c.label}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2">
            {/* LEFT — copy */}
            <div className="order-1 text-center lg:text-left">
              <h1 id="services-heading" className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                <span className="text-sky-600">Upskill Teams with</span>{" "}
                <span className="text-brand">Industry-Ready Programs</span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg lg:mx-0">
                End-to-end workshops, bootcamps, and academic collaborations across{" "}
                <strong>Software Testing</strong>, <strong>Automation</strong>, <strong>Data Science</strong>, and{" "}
                <strong>AI/ML</strong>. Live projects, expert mentors, and placement assistance, designed for real impact.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
                <Link
                  href="#services-grid"
                  onClick={scrollToGrid}
                  className="inline-flex items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-orange-200 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                >
                  Explore Programs <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
                <button
                  type="button"
                  onClick={() => setIsWorkshopModalOpen(true)}
                  className="inline-flex cursor-pointer items-center justify-center rounded-2xl border border-orange-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-orange-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                >
                  Request a Workshop
                </button>
              </div>

              {/* Trust line */}
              <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-600 lg:justify-start">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="inline-flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-emerald-600" strokeWidth={3} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — image with floating bubbles */}
            <div className="order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-[28rem]">
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
                  src="/services/events_servies-hero.png"
                  alt="Training & Event Services hero"
                  title="Training & Event Services hero"
                  width={800}
                  height={800}
                  sizes="(max-width: 640px) 80vw, 448px"
                  className="h-auto w-full mix-blend-multiply"
                  priority
                  fetchPriority="high"
                  quality={60}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {isWorkshopModalOpen && (
        <WorkshopRequestModal
          isOpen={isWorkshopModalOpen}
          onClose={() => setIsWorkshopModalOpen(false)}
          source="Services Page - Hero Section"
        />
      )}
    </>
  );
}
