// components/sections/ToolsSection.tsx
// Server component — sleek, slightly futuristic, responsive, and SEO-friendly.

type Tool = {
  name: string;
  icon: string; // emoji to avoid extra icon libs
  accent: {
    bg: string;
    text: string;
    border: string;
    ring: string;
    dot: string;
  };
};

const TOOLS: Tool[] = [
  {
    name: "Python",
    icon: "🐍",
    accent: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      border: "border-emerald-200",
      ring: "focus:ring-emerald-300",
      dot: "bg-emerald-400",
    },
  },
  {
    name: "VS Code",
    icon: "🧩",
    accent: {
      bg: "bg-sky-50",
      text: "text-sky-900",
      border: "border-sky-200",
      ring: "focus:ring-sky-300",
      dot: "bg-sky-400",
    },
  },
  {
    name: "Jupyter",
    icon: "📓",
    accent: {
      bg: "bg-amber-50",
      text: "text-amber-900",
      border: "border-amber-200",
      ring: "focus:ring-amber-300",
      dot: "bg-amber-400",
    },
  },
  {
    name: "Django",
    icon: "🌿",
    accent: {
      bg: "bg-teal-50",
      text: "text-teal-900",
      border: "border-teal-200",
      ring: "focus:ring-teal-300",
      dot: "bg-teal-400",
    },
  },
  {
    name: "Pandas",
    icon: "🧠",
    accent: {
      bg: "bg-fuchsia-50",
      text: "text-fuchsia-900",
      border: "border-fuchsia-200",
      ring: "focus:ring-fuchsia-300",
      dot: "bg-fuchsia-400",
    },
  },
  {
    name: "NumPy",
    icon: "📐",
    accent: {
      bg: "bg-indigo-50",
      text: "text-indigo-900",
      border: "border-indigo-200",
      ring: "focus:ring-indigo-300",
      dot: "bg-indigo-400",
    },
  },
  {
    name: "Scikit-Learn",
    icon: "🤖",
    accent: {
      bg: "bg-rose-50",
      text: "text-rose-900",
      border: "border-rose-200",
      ring: "focus:ring-rose-300",
      dot: "bg-rose-400",
    },
  },
  {
    name: "Git",
    icon: "🧭",
    accent: {
      bg: "bg-violet-50",
      text: "text-violet-900",
      border: "border-violet-200",
      ring: "focus:ring-violet-300",
      dot: "bg-violet-400",
    },
  },
  {
    name: "AWS",
    icon: "☁️",
    accent: {
      bg: "bg-stone-50",
      text: "text-stone-900",
      border: "border-stone-200",
      ring: "focus:ring-stone-300",
      dot: "bg-stone-400",
    },
  },
];

export default function ToolsSection() {


  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic grid backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(13,148,136,0.12),transparent_60%)]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 xl:px-10">
        <header className="text-center max-w-3xl mx-auto">
          <h2
            id="tools-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            <span className="text-FS">Tools</span> You’ll Master
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Learn a{" "}
            <strong>modern developer & data stack</strong> used in real teams — from notebooks and
            frameworks to version control and cloud.
          </p>
          {/* tiny badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              Production Ready
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              Portfolio Projects
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              Recruiter Friendly
            </span>
          </div>
        </header>

        {/* Tools Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {TOOLS.map((t) => (
            <article
              key={t.name}
              className={[
                "group relative rounded-2xl border p-4 sm:p-5",
                "shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition hover:shadow-md",
                "focus-within:ring-2 focus-within:ring-offset-2",
                t.accent.bg,
                t.accent.text,
                t.accent.border,
                t.accent.ring,
              ].join(" ")}
              tabIndex={0}
              aria-label={t.name}
              title={t.name}
            >
              {/* top micro progress line (only this card animates) */}
              <span className="absolute left-4 right-4 top-3 h-[3px] rounded-full bg-current/20 transition-all duration-300 group-hover:right-3" />

              <div className="flex items-center gap-3">
                <span
                  className={[
                    "inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg",
                    "shadow-[inset_0_-1px_0_rgba(0,0,0,0.04)]",
                  ].join(" ")}
                  aria-hidden
                >
                  {t.icon}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold">{t.name}</h3>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className={["h-1.5 w-1.5 rounded-full", t.accent.dot].join(" ")} />
                    <span className="text-[11px] opacity-75">
                      Hands-on labs • Best practices
                    </span>
                  </div>
                </div>
              </div>

              {/* footer hint */}
              <div className="mt-3 h-px w-full bg-current/10" />
              <p className="mt-2 text-[12px] leading-relaxed opacity-80">
                Covers install, real-world use cases, and integration with the rest of the stack.
              </p>
            </article>
          ))}
        </div>

        {/* Supporting SEO copy */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          From <strong>Jupyter notebooks</strong> to <strong>Django APIs</strong>,{" "}
          <strong>Pandas/NumPy</strong> pipelines and <strong>AWS deployments</strong>, you’ll learn
          how these tools connect to ship reliable, scalable software.
        </p>
      </div>

    </section>
  );
}
