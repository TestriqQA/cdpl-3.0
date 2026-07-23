import CareerSessionButton from "@/components/course-islands/CareerSessionButton";

type Step = {
  n: number;
  title: string;
  desc: string;
  badge: string;
  accent: { bg: string; text: string; border: string; ring: string };
};

const STEPS: Step[] = [
  {
    n: 1,
    title: "Complete the 55-Hour GenAI Hero Program",
    desc:
      "Deep Learning fundamentals → NLP pipelines → Transformers & LLMs. Master embeddings, tokenization, and hands-on model training with Python.",
    badge: "Job-Ready Foundations",
    accent: {
      bg: "bg-indigo-50",
      text: "text-indigo-900",
      border: "border-indigo-200",
      ring: "focus:ring-indigo-300",
    },
  },
  {
    n: 2,
    title: "Build 3+ Production-Style AI Projects",
    desc:
      "Ship an end-to-end RAG app, a fine-tuned LLM (LoRA/QLoRA), and a vision/NLP capstone. Document with READMEs, metrics, and demos.",
    badge: "Portfolio & GitHub",
    accent: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      border: "border-emerald-200",
      ring: "focus:ring-emerald-300",
    },
  },
  {
    n: 3,
    title: "Deploy, Observe & Secure",
    desc:
      "Expose FastAPI endpoints, containerize with Docker, and deploy to cloud. Add vector search, logging, evals, and guardrails for safe AI.",
    badge: "Cloud & MLOps",
    accent: {
      bg: "bg-amber-50",
      text: "text-amber-900",
      border: "border-amber-200",
      ring: "focus:ring-amber-300",
    },
  },
  {
    n: 4,
    title: "Career Prep & Land a GenAI Role",
    desc:
      "Resume ATS optimization, mock interviews, DS/ML warm-ups, and project storytelling. Target ₹10–20 LPA roles in AI Engineer / NLP / GenAI Dev.",
    badge: "Offer & Onboarding",
    accent: {
      bg: "bg-rose-50",
      text: "text-rose-900",
      border: "border-rose-200",
      ring: "focus:ring-rose-300",
    },
  },
];

export default function CareerRoadmapSection() {
  return (
    <section
      id="career-roadmap"
      aria-labelledby="career-roadmap-heading"
      className="relative py-10 bg-white"
    >
      {/* Futuristic, subtle backdrop (sleek lines; not a color fill gradient) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(99,102,241,0.10),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto">
          <h2
            id="career-roadmap-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Your <span className="text-DS">AI Career Roadmap</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Follow these <strong>4 proven steps</strong> to go from learner to a
            <strong> job-ready Deep Learning / NLP / Generative AI professional</strong> with a portfolio recruiters trust.
          </p>

          {/* KPI strip */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <KPI label="Program Duration" value="≈ 55 Hours" note="Guided, project-based" />
            <KPI label="Portfolio Projects" value="3+" note="Deployed & documented" />
            <KPI label="Target CTC" value="₹10–20 LPA" note="Role & location vary" />
          </div>
        </header>

        {/* Timeline */}
        {/* Timeline */}
        <div className="relative mx-auto mt-10 max-w-4xl">
          {/* Center spine */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-4 top-0 h-full w-px bg-slate-200 sm:left-1/2"
          />
          <ol className="space-y-6">
            {STEPS.map((s, i) => (
              <li
                key={s.n}
                className="relative grid grid-cols-[28px_1fr] items-start gap-4 sm:grid-cols-[1fr_28px_1fr]"
              >
                {/* Dot on the spine */}
                <span
                  aria-hidden
                  className={[
                    "absolute left-[14px] top-3 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full animate-pulse border-2 border-white shadow",
                    "sm:left-1/2 sm:-translate-x-1/2",
                    s.accent.border.replace("border-", "bg-").replace("200", "400"),
                  ].join(" ")}
                />

                {/* Number badge */}
                <div
                  className={[
                    "row-span-2 mt-1 flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold shadow-sm",
                    s.accent.bg,
                    s.accent.text,
                    s.accent.border,
                  ].join(" ")}
                  aria-label={`Step ${s.n}`}
                  title={`Step ${s.n}`}
                >
                  {s.n}
                </div>

                {/* Card (zig-zag on desktop) */}
                <article
                  tabIndex={0}
                  className={[
                    "col-start-2 rounded-2xl border p-4 sm:p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] backdrop-blur transition hover:shadow-md focus:outline-none",
                    s.accent.bg,
                    s.accent.text,
                    s.accent.border,
                    s.accent.ring,
                    i % 2 === 0 ? "sm:col-start-3" : "sm:col-start-1 sm:row-start-1",
                  ].join(" ")}
                >
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
                    <span
                      className={[
                        "inline-flex items-center rounded-full border px-2.5 py-1",
                        s.accent.border,
                        "bg-white/70 text-slate-700",
                      ].join(" ")}
                    >
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base sm:text-lg font-bold tracking-tight text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-700">{s.desc}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <CareerSessionButton
            source="Generative AI Course Page - Career Roadmap Section - Get Personalized Roadmap"
            className="inline-flex items-center cursor-pointer gap-2 rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-4 md:px-6 py-2 md:py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
            ariaLabel="Get personalized AI roadmap guidance"
          >
            Get Personalized Roadmap
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M12.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01.083 1.32l-.083.094-4 4a1 1 0 01-1.497-1.32l.083-.094L14.585 10H3a1 1 0 01-.117-1.993L3 8h11.585l-2.292-2.293a1 1 0 010-1.414z" />
            </svg>
          </CareerSessionButton>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">
            Learn from anywhere.{" "}
            <span className="font-semibold text-slate-800">
              Your journey to a Generative AI career starts here.
            </span>
          </p>
        </div>
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
      <div className="mt-0.5 text-xs text-slate-600">{note}</div>
    </div>
  );
}
