"use client";

import { CheckCircle } from 'lucide-react';
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";

type Module = {
  num: string;
  title: string;
  outcome: string;
  accent: { bg: string; text: string; border: string; ring: string };
};

const MODULES: Module[] = [
  {
    num: "01",
    title: "Python Programming Fundamentals",
    outcome:
      "History & setup (Jupyter), syntax, variables, data types, operators, input/print, strings, and clean coding foundations.",
    accent: { bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200", ring: "focus:ring-sky-300" },
  },
  {
    num: "02",
    title: "Control Flow & Core Data Structures",
    outcome:
      "If/elif/else, logical ops, loops; lists, tuples, sets, dictionaries with indexing/slicing, CRUD, and common methods.",
    accent: { bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200", ring: "focus:ring-emerald-300" },
  },
  {
    num: "03",
    title: "Functions, Recursion, File I/O & Modules",
    outcome:
      "Defining/calling functions (args, scope), recursion, exception handling, open/read/write files, stdlib & custom modules.",
    accent: { bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", ring: "focus:ring-amber-300" },
  },
  {
    num: "04",
    title: "Object-Oriented Programming in Python",
    outcome:
      "Classes/objects, instance/class vars & methods, inheritance (single/multiple), polymorphism, encapsulation, properties.",
    accent: { bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-200", ring: "focus:ring-rose-300" },
  },
  {
    num: "05",
    title: "NumPy for Scientific Computing",
    outcome:
      "Arrays vs lists, creation (1D/2D/nD), indexing/slicing, reshaping/broadcasting, random, math/linear algebra utilities.",
    accent: { bg: "bg-indigo-50", text: "text-indigo-900", border: "border-indigo-200", ring: "focus:ring-indigo-300" },
  },
  {
    num: "06",
    title: "Data Analysis with pandas & EDA",
    outcome:
      "Series/DataFrame, import/export (CSV/Excel/JSON), cleaning (missing/dupes), filter/sort, groupby/merge/pivot, EDA.",
    accent: { bg: "bg-violet-50", text: "text-violet-900", border: "border-violet-200", ring: "focus:ring-violet-300" },
  },
  {
    num: "07",
    title: "Data Visualization with Matplotlib",
    outcome:
      "Figure/Axes, line/bar/pie, hist/box/heatmap/3D, labels/legends/annotations, simple animations & interactive widgets.",
    accent: { bg: "bg-teal-50", text: "text-teal-900", border: "border-teal-200", ring: "focus:ring-teal-300" },
  },
  {
    num: "08",
    title: "Advanced Visualization with Seaborn",
    outcome:
      "Themes/palettes, dist/KDE/rug, pair/joint plots, categorical (strip/box/violin/swarm), heatmaps/clustermaps, FacetGrid.",
    accent: { bg: "bg-fuchsia-50", text: "text-fuchsia-900", border: "border-fuchsia-200", ring: "focus:ring-fuchsia-300" },
  },
  {
    num: "09",
    title: "Statistics & Probability Essentials",
    outcome:
      "Descriptive stats, hist/box plots, probability rules & Bayes, discrete/continuous distributions (binomial, normal, etc.).",
    accent: { bg: "bg-lime-50", text: "text-lime-900", border: "border-lime-200", ring: "focus:ring-lime-300" },
  },
  {
    num: "10",
    title: "Sampling, Hypothesis Tests & Regression",
    outcome:
      "Sampling & CLT, confidence intervals, z/t/chi-square/ANOVA, correlation (Pearson/Spearman), simple linear regression.",
    accent: { bg: "bg-orange-50", text: "text-brand", border: "border-orange-200", ring: "focus:ring-orange-300" },
  },
  {
    num: "11",
    title: "ML Foundations & Data Preprocessing",
    outcome:
      "Supervised vs unsupervised, ML workflow; missing handling, scaling, encoding, train/val/test split; quick model demo.",
    accent: { bg: "bg-cyan-50", text: "text-cyan-900", border: "border-cyan-200", ring: "focus:ring-cyan-300" },
  },
  {
    num: "12",
    title: "Core ML Algorithms & Model Validation",
    outcome:
      "Regression (linear/poly, ridge/lasso); classification (logistic, KNN, trees, RF, SVM); CV, metrics (MSE, R², AUC, F1).",
    accent: { bg: "bg-stone-50", text: "text-stone-900", border: "border-stone-200", ring: "focus:ring-stone-300" },
  },
];

export default function CurriculumSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  const subtitle =
    "Industry-aligned syllabus spanning Python, NumPy/pandas, Matplotlib/Seaborn, Statistics, and Machine Learning with rigorous EDA and validation.";
  const keywords =
    "data science curriculum, Python programming syllabus, pandas course, NumPy training, Matplotlib Seaborn visualization, statistics and probability, sampling and hypothesis testing, linear regression, logistic regression, SVM, KNN, decision trees, random forest, cross-validation, ROC AUC, end-to-end ML project";

  const accents = [
    { cardBg: 'bg-sky-50', cardBorder: 'border-sky-200', badgeBg: 'bg-sky-700', badgeText: 'text-white', ink: 'text-sky-800', icon: 'text-sky-700' },
    { cardBg: 'bg-emerald-50', cardBorder: 'border-emerald-200', badgeBg: 'bg-emerald-700', badgeText: 'text-white', ink: 'text-emerald-800', icon: 'text-emerald-700' },
    { cardBg: 'bg-amber-50', cardBorder: 'border-amber-200', badgeBg: 'bg-amber-700', badgeText: 'text-white', ink: 'text-amber-800', icon: 'text-amber-700' },
    { cardBg: 'bg-rose-50', cardBorder: 'border-rose-200', badgeBg: 'bg-rose-700', badgeText: 'text-white', ink: 'text-rose-800', icon: 'text-rose-700' },
    { cardBg: 'bg-indigo-50', cardBorder: 'border-indigo-200', badgeBg: 'bg-indigo-700', badgeText: 'text-white', ink: 'text-indigo-800', icon: 'text-indigo-700' },
    { cardBg: 'bg-violet-50', cardBorder: 'border-violet-200', badgeBg: 'bg-violet-700', badgeText: 'text-white', ink: 'text-violet-800', icon: 'text-violet-700' },
    { cardBg: 'bg-teal-50', cardBorder: 'border-teal-200', badgeBg: 'bg-teal-700', badgeText: 'text-white', ink: 'text-teal-800', icon: 'text-teal-700' },
    { cardBg: 'bg-fuchsia-50', cardBorder: 'border-fuchsia-200', badgeBg: 'bg-fuchsia-700', badgeText: 'text-white', ink: 'text-fuchsia-800', icon: 'text-fuchsia-700' },
    { cardBg: 'bg-lime-50', cardBorder: 'border-lime-200', badgeBg: 'bg-lime-700', badgeText: 'text-white', ink: 'text-lime-800', icon: 'text-lime-700' },
    { cardBg: 'bg-orange-50', cardBorder: 'border-orange-200', badgeBg: 'bg-brand', badgeText: 'text-white', ink: 'text-brand', icon: 'text-brand' },
    { cardBg: 'bg-cyan-50', cardBorder: 'border-cyan-200', badgeBg: 'bg-cyan-700', badgeText: 'text-white', ink: 'text-cyan-800', icon: 'text-cyan-700' },
    { cardBg: 'bg-stone-50', cardBorder: 'border-stone-200', badgeBg: 'bg-stone-700', badgeText: 'text-white', ink: 'text-stone-800', icon: 'text-stone-700' },
  ];

  return (
    <section id="curriculum" className="relative py-10 bg-white">
      {/* subtle separators */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center text-slate-900 font-bold mb-4">
          {MODULES.length}-Core <span className="text-DS">Curriculum Modules</span>
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          {subtitle}
        </p>
        {/* Hidden SEO keywords */}
        <p className="sr-only">{keywords}</p>

        {/* Cards */}
        <ol className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {MODULES.map((mod, i) => {
            const a = accents[i];
            return (
              <li
                key={mod.title}
                className={[
                  'group relative overflow-hidden rounded-2xl border p-6 md:p-7',
                  'md:pt-12',
                  a.cardBg,
                  a.cardBorder,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                ].join(' ')}
              >
                {/* index badge */}
                <div
                  className={[
                    'absolute right-4 top-4 grid place-items-center rounded-xl font-bold shadow-sm',
                    'h-8 w-8 text-[13px] sm:h-9 sm:w-9 sm:text-sm',
                    a.badgeBg,
                    a.badgeText,
                  ].join(' ')}
                  aria-hidden="true"
                >
                  {mod.num}
                </div>

                <p className={['mb-4 text-xl font-semibold leading-snug break-words', a.ink, 'pr-14 sm:pr-0'].join(' ')}>
                  {mod.title}
                </p>

                <ul className="grid gap-2.5 sm:grid-cols-2">
                  <li key={mod.outcome} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className={['mt-0.5 h-5 w-5 flex-shrink-0', a.icon].join(' ')} />
                    <span className="text-sm">{mod.outcome}</span>
                  </li>
                </ul>

                <p className="mt-4 text-xs text-slate-700">
                  Outcomes: hands-on labs, assessment checklists, and take-home exercises for mastery.
                </p>
              </li>
            );
          })}
        </ol>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setIsSyllabusModalOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border-2 border-green-700 bg-white px-4 py-2 text-sm font-semibold text-green-800 shadow-sm transition hover:bg-green-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Download Detailed Syllabus (PDF)
          </button>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl bg-[#7E22CE] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#6b21a8] focus:outline-none focus:ring-4 focus:ring-purple-200"
          >
            Apply Now
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        courseName="Machine Learning and Data Science with Python"
        source="Machine Learning Course Page - Curriculum Section - Apply Now"
      />

      <SyllabusDownloadModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseName="Machine Learning and Data Science with Python"
        source="Machine Learning Course Page - Curriculum Section - Download Syllabus"
      />

    </section>
  );
}
