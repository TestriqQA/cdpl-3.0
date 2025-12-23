// src/components/sections/ServicesHeroSection.tsx
"use client";

import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { Home, ChevronRight, Sparkles, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import WorkshopRequestModal from "../WorkshopRequestModal";

const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: easeBezier } as Transition,
};

const gradientText =
  "bg-clip-text text-transparent bg-[linear-gradient(90deg,#0ea5e9,#2563eb,#22c55e)]";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

export default function ServicesHeroSection() {
  const [isWorkshopModalOpen, setIsWorkshopModalOpen] = useState(false);
  const scrollToGrid = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .getElementById("services-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <section
        aria-labelledby="services-heading"
        className="relative mx-auto max-w-7xl px-4 pt-8 pb-10 sm:px-6 lg:px-8 isolate overflow-hidden"
      >
        {/* Background aura across container */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
          <div
            className="mx-auto -mt-20 h-48 w-full max-w-7xl rounded-[999px] blur-3xl sm:h-56"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(14,165,233,0.10) 0%, rgba(34,197,94,0.10) 50%, rgba(37,99,235,0.10) 100%)",
            }}
          />
        </div>

        {/* Floating decorative images (smaller; respect container; behind content) */}
        <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
          {/* Top-left float */}
          <motion.div
            initial={{ y: 0, rotate: -3, opacity: 0.75 }}
            animate={{ y: [-5, 5, -5], rotate: [-3, -1, -3], opacity: 0.8 }}
            transition={{ duration: 5.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="hidden sm:block absolute left-2 top-2"
            style={{ width: 56, height: 56 }}
          >
            <Image
              src="/services/training_board.png"
              alt=""
              width={112}
              height={112}
              className="w-full h-full object-contain opacity-80 mix-blend-multiply dark:mix-blend-normal"
              priority={false}
            />
          </motion.div>

          {/* Middle-top (center-right) float */}
          <motion.div
            initial={{ y: 0, rotate: 2, opacity: 0.75 }}
            animate={{ y: [6, -6, 6], rotate: [2, 3, 2], opacity: 0.85 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.25 }}
            className="hidden md:block absolute right-[20%] top-0"
            style={{ width: 64, height: 64 }}
          >
            <Image
              src="/services/training_board.png"
              alt=""
              width={128}
              height={128}
              className="w-full h-full object-contain opacity-80 mix-blend-multiply dark:mix-blend-normal"
              priority={false}
            />
          </motion.div>

          {/* Bottom-right float */}
          <motion.div
            initial={{ y: 0, rotate: -4, opacity: 0.75 }}
            animate={{ y: [-8, 8, -8], rotate: [-4, -2, -4], opacity: 0.85 }}
            transition={{ duration: 6.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: 0.5 }}
            className="hidden lg:block absolute right-3 bottom-2"
            style={{ width: 72, height: 72 }}
          >
            <Image
              src="/services/training_board.png"
              alt=""
              width={144}
              height={144}
              className="w-full h-full object-contain opacity-80 mix-blend-multiply dark:mix-blend-normal"
              priority={false}
            />
          </motion.div>
        </div>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                <Link
                  href={c.href}
                  className={`hover:text-indigo-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-start gap-6 sm:gap-8 lg:grid-cols-2">
          {/* LEFT */}
          <div className="order-1 lg:order-1 relative z-10">
            <motion.div {...fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Training &amp; Event Services
              </span>
            </motion.div>

            <motion.h1
              id="services-heading"
              {...fadeUp}
              transition={{ ...(fadeUp.transition as Transition), delay: 0.06 }}
              className={`mt-3 py-1 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl ${gradientText} will-change-transform`}
            >
              Upskill Teams with <span className="text-brand">Industry-Ready Programs</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...(fadeUp.transition as Transition), delay: 0.12 }}
              className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-700 sm:text-base md:text-lg"
            >
              End-to-end workshops, bootcamps, and academic collaborations across{" "}
              <strong>Software Testing</strong>, <strong>Automation</strong>,{" "}
              <strong>Data Science</strong>, and <strong>AI/ML</strong>. Live projects, expert mentors,
              and placement assistance—designed for real impact.
            </motion.p>

            <motion.ul
              {...fadeUp}
              transition={{ ...(fadeUp.transition as Transition), delay: 0.18 }}
              className="mt-4 grid gap-2.5 text-sm text-slate-700 sm:text-base"
            >
              {[
                "Customizable curriculum for corporates & institutes",
                "Hands-on labs with case studies and capstones",
                "Interview prep, assessments, and reporting",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-5 w-5 flex-none" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              {...fadeUp}
              transition={{ ...(fadeUp.transition as Transition), delay: 0.24 }}
              className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              {/* Smooth scroll to services grid */}
              <Link
                href="#services-grid"
                onClick={scrollToGrid}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 sm:w-auto"
              >
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>

              <button
                onClick={() => setIsWorkshopModalOpen(true)}
                className="cursor-pointer inline-flex w-full items-center justify-center rounded-2xl border border-brand bg-white/10 px-5 py-3 text-sm font-semibold text-brand shadow-sm transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 sm:w-auto"
              >
                Request a Workshop
              </button>
            </motion.div>
          </div>

          {/* RIGHT — bigger, borderless, blended visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: easeBezier }}
            className="order-2 lg:order-2 relative mt-4 lg:mt-6 h-72 w-full sm:h-80 md:h-[26rem] lg:h-[28rem]"
            aria-label="Team training and events hero visual"
          >
            {/* Soft glow blobs behind the image to blend into hero */}
            <div
              aria-hidden
              className="absolute -inset-x-10 -top-6 h-64 blur-2xl opacity-60"
              style={{
                background:
                  "radial-gradient(60% 60% at 70% 40%, rgba(99,102,241,.28), transparent 60%), radial-gradient(50% 50% at 20% 80%, rgba(34,197,94,.28), transparent 60%)",
              }}
            />
            {/* Bigger image: no border, scaled up slightly */}
            <Image
              src="/services/events_servies-hero.png"
              alt="Training & Event Services hero"
              title="Training & Event Services hero"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain pointer-events-none select-none mix-blend-multiply dark:mix-blend-normal transform-gpu scale-[1.10] md:scale-[1.16] lg:scale-[1.20]"
              priority
            />
          </motion.div>
        </div>
      </section>
      <WorkshopRequestModal
        isOpen={isWorkshopModalOpen}
        onClose={() => setIsWorkshopModalOpen(false)}
        source="Services Page - Hero Section"
      />
    </>
  );
}
