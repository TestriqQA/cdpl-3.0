"use client";

import { useState } from "react";
import CareerSessionModal from "@/components/CareerSessionModal";

type Tool = { name: string };

const TOOLS: Tool[] = [
  { name: "Python" },
  { name: "TensorFlow" },
  { name: "PyTorch" },
  { name: "Keras" },
  { name: "NLTK" },
  { name: "spaCy" },
  { name: "Hugging Face" },
  { name: "Docker" },
  { name: "NumPy" },
  { name: "Pandas" },
  { name: "scikit-learn" },
  { name: "FastAPI" },
];

// 12 distinct, eye-catching (but soft) accents — reused only if you add more tools.
const ACCENTS = [
  { border: "border-violet-200", text: "text-violet-800", bg: "bg-violet-50", ring: "focus:ring-violet-300" },
  { border: "border-emerald-200", text: "text-emerald-800", bg: "bg-emerald-50", ring: "focus:ring-emerald-300" },
  { border: "border-amber-200", text: "text-amber-800", bg: "bg-amber-50", ring: "focus:ring-amber-300" },
  { border: "border-sky-200", text: "text-sky-800", bg: "bg-sky-50", ring: "focus:ring-sky-300" },
  { border: "border-rose-200", text: "text-rose-800", bg: "bg-rose-50", ring: "focus:ring-rose-300" },
  { border: "border-indigo-200", text: "text-indigo-800", bg: "bg-indigo-50", ring: "focus:ring-indigo-300" },
  { border: "border-teal-200", text: "text-teal-800", bg: "bg-teal-50", ring: "focus:ring-teal-300" },
  { border: "border-fuchsia-200", text: "text-fuchsia-800", bg: "bg-fuchsia-50", ring: "focus:ring-fuchsia-300" },
  { border: "border-orange-200", text: "text-brand", bg: "bg-orange-50", ring: "focus:ring-orange-300" },
  { border: "border-cyan-200", text: "text-cyan-800", bg: "bg-cyan-50", ring: "focus:ring-cyan-300" },
  { border: "border-lime-200", text: "text-lime-800", bg: "bg-lime-50", ring: "focus:ring-lime-300" },
  { border: "border-pink-200", text: "text-pink-800", bg: "bg-pink-50", ring: "focus:ring-pink-300" },
];

export default function ToolsSection() {
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

  const seoKeywords =
    "python, tensorflow, pytorch, keras, nltk, spacy, hugging face, docker, numpy, pandas, scikit-learn, fastapi, ai tools, machine learning libraries, data science stack, generative ai framework";


  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic backdrop: fine grid + soft top glow (no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(99,102,241,0.08),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mx-auto max-w-3xl">
          <h2
            id="tools-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            <span className="text-DS">Tools</span> & <span className="text-DS">Technologies</span> You’ll Master
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            A job-ready <strong>AI/ML stack</strong> for real projects: modeling, MLOps, APIs, and
            visualization. Learn the tools that <strong>recruiters recognise</strong> and <strong>teams use</strong>.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Tool chips */}
        <ul
          role="list"
          aria-label="AI and Data Science tools"
          className="mx-auto mt-10 grid max-w-6xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4"
        >
          {TOOLS.map((t, i) => {
            const acc = ACCENTS[i % ACCENTS.length];
            const id = `tool-${t.name.toLowerCase().replace(/\s+/g, "-")}`;
            return (
              <li key={t.name} role="listitem" className="flex">
                <span
                  id={id}
                  className={[
                    "inline-flex w-full items-center justify-center rounded-xl border px-3 py-2 text-sm font-semibold",
                    "shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-all duration-150",
                    "hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2",
                    acc.border,
                    acc.bg,
                    acc.text,
                    acc.ring,
                  ].join(" ")}
                  tabIndex={0}
                >
                  {t.name}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Context strip */}
        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            Master the <strong>Python data science toolkit</strong> end-to-end - from{" "}
            <strong>data wrangling</strong> and <strong>feature engineering</strong> to{" "}
            <strong>deep learning</strong>, <strong>LLMs</strong>, and <strong>deployment</strong>.
          </p>
          <p className="mt-2 text-[11px] text-slate-500">*Tooling may vary by project and track.</p>
        </div>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#6b21a8] hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-200"
          >
            Book a Free Demo
          </button>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        source="Generative AI Course Page - Tools Section - Book Free Demo"
      />

    </section>
  );
}
