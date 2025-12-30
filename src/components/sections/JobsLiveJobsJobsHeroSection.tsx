"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Home, ChevronRight } from "lucide-react";
import { useState } from "react";
import AdvisorModal from "@/components/ui/AdvisorModal";

export default function JobsLiveJobsJobsHeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Jobs" },
    { label: "Live Jobs", href: "/jobs/live-jobs" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <section aria-label="CDPL jobs hero" className="bg-white text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 font-sans">
          {/* Breadcrumb */}
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
            {/* LEFT — hero copy */}
            <div className="order-1 md:order-1 max-w-2xl md:flex-1 md:basis-[60%] lg:basis-[62%]">
              <m.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur sm:text-xs"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#ff8c00]" />
                <span>CDPL Live Jobs • Verified nearby roles</span>
              </m.div>

              <m.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 py-1 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]"
              >
                <span style={{ color: "rgb(0, 105, 168)" }}>
                  Helping CDPL learners land the right opportunities
                </span>{" "}
                <span>&ndash; </span>
                <span style={{ color: "#ff8c00" }}>faster.</span>
              </m.h1>

              <m.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-700 sm:text-base md:text-lg"
              >
                Explore verified roles in QA Automation, Data Science, Full Stack Development, and DevOps,
                curated specially for CDPL students.
              </m.p>

              <m.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-700 sm:text-base md:text-lg"
              >
                Through our network of industry mentors, hiring partners, and local job listings, CDPL supports
                you with personalized job alerts, resume guidance, and interview preparation to accelerate your
                career growth across India.
              </m.p>

              <m.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              >
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer"
                  style={{ backgroundColor: "#ff8c00" }}
                >
                  Talk to a Career Advisor
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </m.div>
            </div>

            {/* RIGHT — visual */}
            <div className="order-2 md:order-2 relative self-start mt-6 md:mt-0 md:basis-[40%] lg:basis-[38%] -translate-y-1 sm:-translate-y-2 md:-translate-y-4 lg:-translate-y-8">
              <div className="relative ml-0 mr-0 w-full md:ml-auto max-w-[24rem] sm:max-w-[26rem] md:w-[300px] lg:w-[360px] xl:w-[400px]">
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
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 36vw, 400px"
                  className="h-auto w-full rounded-2xl select-none"
                />
              </div>

              {/* subtle floating shapes */}
              <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
                <m.svg
                  viewBox="0 0 60 60"
                  className="absolute -right-6 top-6 h-10 w-10"
                  initial={{ y: 0, opacity: 0.9 }}
                  animate={{ y: [-4, 2, -4] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <defs>
                    <linearGradient id="cdplStroke" x1="0" x2="1">
                      <stop offset="0%" stopColor="#ff8c00" />
                      <stop offset="50%" stopColor="#ffb558" />
                      <stop offset="100%" stopColor="#ffd19e" />
                    </linearGradient>
                  </defs>
                  <circle cx="30" cy="30" r="15" fill="none" stroke="url(#cdplStroke)" strokeWidth="1.8" />
                </m.svg>

                <m.div
                  className="absolute -right-2 bottom-10 h-3.5 w-3.5 rounded-[4px]"
                  style={{
                    transform: "rotate(45deg)",
                    background: "linear-gradient(180deg, rgba(157,123,255,0.95), rgba(157,123,255,0.7))",
                    boxShadow: "0 6px 14px rgba(157,123,255,0.35)",
                  }}
                  initial={{ y: 0, opacity: 0.95 }}
                  animate={{ y: [3, -3, 3] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </div>

        <AdvisorModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          source="Live Jobs Page - Hero Section"
        />
      </section>
    </LazyMotion>
  );
}
