// components/sections/ProjectsSection.tsx
// Server component — clean, modern, responsive projects with subtle futuristic accents (Prompt Engineering edition).

type Project = {
  title: string;
  desc: string;
  outcomes: string[];
  stack: string[];
  accent: {
    bar: string;     // top bar color
    border: string;  // border color
    text: string;    // accent text color
    chip: string;    // chip bg
    ring: string;    // focus ring
  };
};

const PROJECTS: Project[] = [
  {
    title: "AI Content Generator",
    desc: "Generate long-form articles with sectioning, tone control, and fact-checking cues.",
    outcomes: ["Chain-of-Thought templating", "Style & tone controls", "Hallucination mitigation"],
    stack: ["Prompt Patterns", "LLM Eval", "RAG (optional)"],
    accent: { bar: "bg-emerald-500", border: "border-emerald-200", text: "text-emerald-700", chip: "bg-emerald-50", ring: "focus:ring-emerald-300" },
  },
  {
    title: "Code Assistant Bot",
    desc: "Multi-turn coding helper that plans, explains, and writes tests from specs.",
    outcomes: ["Planning prompts", "Tool usage scaffolds", "Test-first prompting"],
    stack: ["Spec → Code", "Unit Tests", "Error Repair"],
    accent: { bar: "bg-amber-500", border: "border-amber-200", text: "text-amber-700", chip: "bg-amber-50", ring: "focus:ring-amber-300" },
  },
  {
    title: "Image Generation Tool",
    desc: "Prompt a text-to-image model with style presets, seeds, and safety filters.",
    outcomes: ["Style dictionaries", "Negative prompts", "Seed reproducibility"],
    stack: ["Text-to-Image", "Safety Guardrails", "Preset Library"],
    accent: { bar: "bg-indigo-500", border: "border-indigo-200", text: "text-indigo-700", chip: "bg-indigo-50", ring: "focus:ring-indigo-300" },
  },
  {
    title: "Customer Support Copilot",
    desc: "Retrieval-augmented assistant that cites sources and follows policy reliably.",
    outcomes: ["RAG citations", "Policy guardrails", "Fallback prompts"],
    stack: ["Retrieval", "Eval Harness", "Moderator Layer"],
    accent: { bar: "bg-rose-500", border: "border-rose-200", text: "text-rose-700", chip: "bg-rose-50", ring: "focus:ring-rose-300" },
  },
  {
    title: "Marketing Variant Studio",
    desc: "Batch create on-brand ad variants with A/B hooks and readability checks.",
    outcomes: ["Brand voice locks", "A/B hook generator", "Readability scoring"],
    stack: ["Prompt Templates", "Constraints", "Scorers"],
    accent: { bar: "bg-violet-500", border: "border-violet-200", text: "text-violet-700", chip: "bg-violet-50", ring: "focus:ring-violet-300" },
  },
  {
    title: "Data-Aware Doc Summarizer",
    desc: "Summarize PDFs/spreadsheets with structured outputs and QA follow-ups.",
    outcomes: ["JSON schema outputs", "Follow-up Q&A", "Citation spans"],
    stack: ["Doc Parsing", "Schema-First", "Eval Sets"],
    accent: { bar: "bg-sky-500", border: "border-sky-200", text: "text-sky-700", chip: "bg-sky-50", ring: "focus:ring-sky-300" },
  },
];

export default function ProjectsSection() {
  const seoKeywords =
    "prompt engineering projects, gen ai portfolio, code assistant bot, content generator prompt patterns, rag citations guardrails, structured output json prompts, llm evaluation, image generation prompts";


  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative py-10 bg-white">
      {/* Subtle futuristic backdrop (fine grid + soft emerald glow; no loud gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Real-World <span className="text-DS">Prompt Projects</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Create <strong>AI-powered applications</strong> the right way: robust <strong>prompt patterns</strong>,{" "}
            <strong>guardrails</strong>, <strong>structured outputs</strong>, and <strong>LLM evaluation</strong>.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>
        </header>

        {/* Cards */}
        <div role="list" aria-label="Project list" className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((p) => {
            const id = p.title.replace(/\s+/g, "-").toLowerCase();
            return (
              <article
                key={p.title}
                role="listitem"
                tabIndex={0}
                aria-labelledby={id}
                className={[
                  "group relative rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5",
                  p.accent.border,
                  p.accent.ring,
                  "focus:outline-none focus:ring-2",
                ].join(" ")}
              >
                {/* top accent bar */}
                <div className={["absolute left-0 right-0 top-0 h-1 rounded-t-2xl", p.accent.bar].join(" ")} aria-hidden />

                <h3 id={id} className="text-lg md:text-xl font-bold text-slate-900">
                  <span className={p.accent.text}># </span>
                  {p.title}
                </h3>

                <p className="mt-3 text-sm md:text-base text-slate-700">{p.desc}</p>

                {/* outcomes */}
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {p.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={["mt-1 inline-block h-1.5 w-1.5 rounded-full", p.accent.bar].join(" ")} aria-hidden />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>

                {/* stack chips */}
                <div className="mt-5 flex flex-wrap gap-2" aria-label="Tools and techniques">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className={["inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-slate-800 border", p.accent.chip, p.accent.border].join(" ")}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Trust strip */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm text-slate-700">
            These <strong>industry-aligned projects</strong> emphasize <strong>prompt reliability</strong>,{" "}
            <strong>safety</strong>, and <strong>evaluation</strong>-exactly what hiring managers want for{" "}
            <strong>Prompt Engineer</strong>, <strong>AI Automations</strong>, and <strong>Applied AI</strong> roles.
          </p>
          <p className="mt-2 text-[11px] text-slate-500">*Scope may vary by dataset, model, and pace.</p>
        </div>
      </div>

    </section>
  );
}
