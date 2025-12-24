// components/sections/ToolsSection.tsx
"use client";

import React, { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import {
  Bot,          // ChatGPT
  Image as ImageIcon, // DALL·E
  Palette,      // Midjourney
  Camera,       // Stable Diffusion
  Wrench,       // Prompt Tools
  Sparkles,     // Google Bard / Gemini
  MessageSquare,// Claude
  Gauge,        // Groq (speed/inference)
  Rocket,
} from "lucide-react";

type Tool = {
  name: string;
  badge: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  bg: string;       // card bg
  text: string;     // body text color
  border: string;   // card border
  iconBg: string;   // icon chip bg
  iconColor: string;// icon color
  desc: string;
};

const TOOLS: Tool[] = [
  {
    name: "ChatGPT",
    badge: "Conversational LLM",
    icon: Bot,
    bg: "bg-indigo-50",
    text: "text-indigo-900",
    border: "border-indigo-200",
    iconBg: "bg-white",
    iconColor: "text-indigo-700",
    desc: "Design system prompts, few-shot examples, and structured outputs for robust assistants.",
  },
  {
    name: "DALL·E",
    badge: "Text-to-Image",
    icon: ImageIcon,
    bg: "bg-rose-50",
    text: "text-rose-900",
    border: "border-rose-200",
    iconBg: "bg-white",
    iconColor: "text-rose-700",
    desc: "Craft visual prompts, control styles, and iterate compositions for brand-ready imagery.",
  },
  {
    name: "Midjourney",
    badge: "Art Direction",
    icon: Palette,
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    border: "border-emerald-200",
    iconBg: "bg-white",
    iconColor: "text-emerald-700",
    desc: "Stylize prompts with descriptors, aspect ratios, and seeds for consistent art direction.",
  },
  {
    name: "Stable Diffusion",
    badge: "Open Diffusion",
    icon: Camera,
    bg: "bg-violet-50",
    text: "text-violet-900",
    border: "border-violet-200",
    iconBg: "bg-white",
    iconColor: "text-violet-700",
    desc: "Master negative prompts, CFG, and ControlNet for controllable generative outputs.",
  },
  {
    name: "Prompt Tools",
    badge: "Libraries & QA",
    icon: Wrench,
    bg: "bg-amber-50",
    text: "text-amber-900",
    border: "border-amber-200",
    iconBg: "bg-white",
    iconColor: "text-amber-700",
    desc: "Use templates, evaluators, and versioning to A/B test prompts and track win-rates.",
  },
  {
    name: "Google Bard",
    badge: "Generative Search",
    icon: Sparkles,
    bg: "bg-sky-50",
    text: "text-sky-900",
    border: "border-sky-200",
    iconBg: "bg-white",
    iconColor: "text-sky-700",
    desc: "Explore search-grounded prompting and factuality checks for knowledge tasks.",
  },
  {
    name: "Claude AI",
    badge: "Long Context",
    icon: MessageSquare,
    bg: "bg-lime-50",
    text: "text-lime-900",
    border: "border-lime-200",
    iconBg: "bg-white",
    iconColor: "text-lime-700",
    desc: "Structure long-form prompts, safety rails, and analysis workflows with extended context.",
  },
  {
    name: "Grok",
    badge: "Fast Inference",
    icon: Gauge,
    bg: "bg-cyan-50",
    text: "text-cyan-900",
    border: "border-cyan-200",
    iconBg: "bg-white",
    iconColor: "text-cyan-700",
    desc: "Optimize prompts for latency/cost tradeoffs and high-throughput generation.",
  },
];

export default function ToolsSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Prompt Engineering Course";
  const source = "Prompt Engineering Course Page - Tools Section";

  return (
    <section
      className="relative py-10 bg-white"
      aria-labelledby="tools-heading"
    >
      {/* Sleek futuristic accent (thin gradient line only) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-500 opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-10 md:mb-12">
          <h2
            id="tools-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            <span className="text-DS">Tools</span> & <span className="text-DS">Technologies</span> You’ll Master
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Build <strong>production-ready prompts</strong> and{" "}
            <strong>generative workflows</strong> across leading LLMs and image models.
            Learn evaluation, guardrails, and versioning for <strong>reliable outcomes</strong>.
          </p>

          {/* Quick highlights / KPIs (distinct colors, no repetition) */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-4xl mx-auto">
            <KPI label="Hands-On Stack" value="8 Core Tools" note="LLMs • Diffusion • QA" />
            <KPI label="Built for Jobs" value="Portfolio Artifacts" note="Prompt packs • Demos" />
            <KPI label="Quality First" value="Eval & Guardrails" note="Win-rate • Cost control" />
          </div>
        </header>

        {/* Tools grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {TOOLS.map((t) => (
            <li key={t.name}>
              <ToolCard tool={t} onEnroll={() => setIsEnrollOpen(true)} />
            </li>
          ))}
        </ul>

        {/* sr-only helper for SEO */}
        <p className="sr-only">
          Master ChatGPT, DALL·E, Midjourney, Stable Diffusion, prompt testing tools, Google Bard,
          Claude AI, and Groq for professional prompt engineering and generative AI workflows.
        </p>

        <EnrollModal
          isOpen={isEnrollOpen}
          onClose={() => setIsEnrollOpen(false)}
          source={`${source} - Learn with Projects`}
          courseName={courseName}
        />
      </div>

    </section>
  );
}

/* ---------- Subcomponents ---------- */

function KPI({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur">
      <div className="text-[11px] font-semibold text-slate-600">{label}</div>
      <div className="mt-1 text-2xl font-bold tracking-tight text-slate-900">{value}</div>
      <div className="mt-0.5 text-xs text-slate-500">{note}</div>
    </div>
  );
}

function ToolCard({ tool, onEnroll }: { tool: Tool; onEnroll: () => void }) {
  const Icon = tool.icon;
  return (
    <article
      className={[
        "group rounded-2xl border p-2 md:p-5 lg:p-3 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition hover:shadow-md focus-within:shadow-md",
        tool.bg,
        tool.text,
        tool.border,
      ].join(" ")}
      tabIndex={0}
      aria-label={`${tool.name} tool`}
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <span className={`p-2 rounded-xl ${tool.iconBg} ring-1 ring-black/5`}>
            <Icon className={`h-5 w-5 ${tool.iconColor}`} strokeWidth={2.2} />
          </span>
          {tool.name}
        </span>
        <span
          className={[
            "text-[11px] hidden lg:block rounded-full border px-2.5 py-0.5 font-semibold",
            tool.border,
            "bg-white/70 text-slate-700",
          ].join(" ")}
        >
          {tool.badge}
        </span>
      </div>

      <p className="mt-2 text-sm text-slate-700">{tool.desc}</p>

      <div className="mt-3">
        <button
          onClick={onEnroll}
          className="cursor-pointer inline-flex items-center gap-1 rounded-lg border border-slate-900 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-[0_1px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-300"
          aria-label={`Learn ${tool.name} in the Prompt Engineering program`}
        >
          Learn with Projects
          <Rocket className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
}
