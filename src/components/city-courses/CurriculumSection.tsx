"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import type { CourseData } from "@/types/courseData";
import { BookOpen, Zap, CheckCircle2 } from "lucide-react";

interface Track {
  id?: number | string;
  title: string;
  weeks: Week[];
}

interface Week {
  number?: string | number;
  title: string;
  description: string;
  deliverables?: string[];
}

/** ---- Framer variants ---- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: 12, transition: { duration: 0.2 } },
};

/** ---- Palette for tabs ---- */
type Variant = {
  activeBg: string;
  activeText: string;
  hoverBorder: string;
  accentColor: string;
};

const VARIANTS: Variant[] = [
  { activeBg: "bg-cyan-700", activeText: "text-white", hoverBorder: "hover:border-cyan-600", accentColor: "text-cyan-700" },
  { activeBg: "bg-fuchsia-700", activeText: "text-white", hoverBorder: "hover:border-fuchsia-600", accentColor: "text-fuchsia-700" },
  { activeBg: "bg-lime-500", activeText: "text-slate-900", hoverBorder: "hover:border-lime-300", accentColor: "text-lime-600" },
  { activeBg: "bg-brand", activeText: "text-white", hoverBorder: "hover:border-brand", accentColor: "text-brand" },
  { activeBg: "bg-indigo-700", activeText: "text-white", hoverBorder: "hover:border-indigo-600", accentColor: "text-indigo-700" },
  { activeBg: "bg-red-700", activeText: "text-white", hoverBorder: "hover:border-red-600", accentColor: "text-red-700" },
];

function pickVariant(i: number): Variant {
  return VARIANTS[i % VARIANTS.length];
}

interface CurriculumSectionProps {
  data: CourseData;
}

const CurriculumSection: React.FC<CurriculumSectionProps> = ({ data }) => {
  const { curriculumContent } = data;

  const tracks = useMemo(() => curriculumContent?.tracks ?? [], [curriculumContent?.tracks]) as Track[];
  const [activeTrack, setActiveTrack] = useState<number>(0);
  const current = tracks[activeTrack];
  const currentVariant = pickVariant(activeTrack);

  const totalWeeks = current?.weeks?.length ?? 0;

  return (
    <section id="curriculum-section" className="relative py-16 sm:py-24 bg-white text-slate-900 overflow-hidden">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-100 blur-[150px]" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-fuchsia-100 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-widest text-cyan-600 uppercase" variants={itemVariants}>
            <Zap className="h-4 w-4" />
            Curriculum Matrix
          </motion.p>
          <motion.h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-slate-900" variants={itemVariants}>
            {curriculumContent.title}
          </motion.h2>
          {curriculumContent.subtitle && tracks.length > 1 && (
            <motion.p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600" variants={itemVariants}>
              {curriculumContent.subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div variants={itemVariants}>
            <div
              role="tablist"
              aria-label="Curriculum tracks"
              className="flex flex-wrap justify-center gap-3 gap-y-3 sm:gap-4 w-full"
            >
              {tracks.map((t: Track, i: number) => {
                const active = i === activeTrack;
                const variant = pickVariant(i);

                return (
                  <button
                    key={t.id ?? i}
                    role="tab"
                    aria-selected={active}
                    aria-controls={`track-panel-${t.id ?? i}`}
                    id={`track-tab-${t.id ?? i}`}
                    onClick={() => setActiveTrack(i)}
                    title={t.title}
                    className={[
                      "flex items-center justify-center text-center",
                      "flex-none max-w-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 rounded-lg",
                      "text-sm font-bold leading-tight whitespace-normal break-words hyphens-auto text-pretty",
                      "transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                      active
                        ? [variant.activeBg, variant.activeText, "shadow-lg shadow-current/30 transform scale-105"].join(" ")
                        : ["bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200/70", variant.hoverBorder].join(" "),
                    ].join(" ")}
                  >
                    <span className="block break-words w-full">{t.title}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Quick meta */}
          {current && (
            <motion.div variants={itemVariants} className="mt-6 text-center text-base text-slate-600">
              <span className="rounded-full bg-slate-100 border border-slate-200 px-4 py-1.5 font-medium">
                <BookOpen className="inline h-4 w-4 mr-2 mb-0.5 text-slate-500" />
                {totalWeeks} {totalWeeks === 1 ? "Module" : "Modules"}
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Tab Panel */}
        <div className="mt-12 lg:mt-16">
          <AnimatePresence mode="wait">
            {current ? (
              <motion.div
                key={current.id ?? activeTrack}
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                id={`track-panel-${current.id ?? activeTrack}`}
                role="tabpanel"
                aria-labelledby={`track-tab-${current.id ?? activeTrack}`}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-6 lg:p-8 shadow-xl shadow-slate-200/50 overflow-hidden"
              >
                {/* Curriculum List/Table */}
                <div className="space-y-6">
                  {current.weeks.map((w: Week, idx: number) => (
                    <div
                      key={idx}
                      className="rounded-xl bg-white border border-slate-100 hover:border-slate-300 transition-all duration-300 shadow-md overflow-hidden"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6">
                        {/* LEFT COLUMN: Module Info (Number + Title/Desc) */}
                        <div className="lg:col-span-8 flex gap-4 sm:gap-6">
                          {/* Week/Module Number */}
                          <div className="flex-shrink-0">
                            <span
                              className={`inline-flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 rounded-full text-lg font-bold shadow-sm ${currentVariant.activeBg} ${currentVariant.activeText}`}
                            >
                              {w.number || String(idx + 1)}
                            </span>
                          </div>

                          {/* Module Title and Description */}
                          <div className="flex-grow min-w-0 pt-1">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight mb-3">
                              {w.title}
                            </h3>
                            <p className="text-base text-slate-600 leading-relaxed">
                              {w.description}
                            </p>
                          </div>
                        </div>

                        {/* RIGHT COLUMN: Deliverables */}
                        <div className="lg:col-span-4">
                          <div className="h-full bg-slate-50/80 rounded-xl border border-slate-100 p-4 sm:p-5">
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-200/60">
                              <CheckCircle2 className="h-4 w-4 text-slate-400" />
                              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                Key Takeaways
                              </span>
                            </div>

                            {Array.isArray(w.deliverables) && w.deliverables.length > 0 ? (
                              <ul className="space-y-3">
                                {w.deliverables.map((d: string, i: number) => (
                                  <li key={i} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                                    <div className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${currentVariant.activeBg}`} />
                                    <span className="leading-snug">{d}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-sm italic text-slate-400 py-2">
                                No specific deliverables listed.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="rounded-xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-600"
              >
                <Zap className="mx-auto h-10 w-10 text-cyan-600 mb-4" />
                <p className="text-lg font-medium">Select a track to view its detailed curriculum.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
