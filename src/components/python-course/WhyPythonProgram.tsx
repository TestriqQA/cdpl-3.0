// components/sections/WhyPythonProgram.tsx
// Server component — sleek, slightly futuristic, fully responsive, SEO-optimized.

type Pill = {
  label: string;
  sub?: string;
  bg: string;
  text: string;
  border: string;
  ring: string;
};

const PILLS: Pill[] = [
  { label: "80 Hours", sub: "Live + Labs", bg: "bg-sky-50", text: "text-sky-900", border: "border-sky-200", ring: "focus:ring-sky-300" },
  { label: "40+ Projects", sub: "Portfolio Ready", bg: "bg-emerald-50", text: "text-emerald-900", border: "border-emerald-200", ring: "focus:ring-emerald-300" },
  { label: "6 hrs / week", sub: "Flexible Cohort", bg: "bg-amber-50", text: "text-amber-900", border: "border-amber-200", ring: "focus:ring-amber-300" },
  { label: "No Coding Exp.", sub: "Beginner Friendly", bg: "bg-violet-50", text: "text-violet-900", border: "border-violet-200", ring: "focus:ring-violet-300" },
  { label: "9.8/10 Rating", sub: "Learner Reviews", bg: "bg-rose-50", text: "text-rose-900", border: "border-rose-200", ring: "focus:ring-rose-300" },
];

const HIGHLIGHTS = [
  { title: "AI + Data Science", desc: "NumPy, Pandas, Matplotlib, scikit-learn, prompt engineering" },
  { title: "Web Development", desc: "FastAPI / Django APIs, authentication, deployment, Docker" },
  { title: "Automation & Scripting", desc: "ETL, file ops, schedulers, CLI tools, Selenium basics" },
  { title: "Clean Code & DevOps", desc: "OOP, testing (pytest), Git/GitHub, CI/CD fundamentals" },
];

export default function WhyPythonProgram() {


  return (
    <section id="why-python" aria-labelledby="why-python-heading" className="relative py-10 bg-white">
      {/* Subtle futuristic backdrop (no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:26px_26px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(20,184,166,0.10),transparent_60%)]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 xl:px-10">
        {/* Heading */}
        <header className="text-center max-w-4xl mx-auto">
          <h2 id="why-python-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Your Gateway to the <span className="text-FS">Top&nbsp;1% Python Developer</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            An <strong>80-hour</strong>, mentor-led, <strong>project-driven</strong> Python program that blends{" "}
            <strong>AI & Data Science</strong>, <strong>Web APIs</strong>, and <strong>Automation</strong> to make you job-ready.
          </p>
        </header>

        {/* KPI / Pill row */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto">
          {PILLS.map((p) => (
            <div
              key={p.label}
              tabIndex={0}
              className={[
                "rounded-xl border p-4 text-center shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition",
                "hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2",
                p.bg, p.text, p.border, p.ring,
              ].join(" ")}
              aria-label={`${p.label} — ${p.sub ?? ""}`}
            >
              <div className="text-lg font-extrabold">{p.label}</div>
              {p.sub && <div className="mt-0.5 text-xs font-medium opacity-80">{p.sub}</div>}
            </div>
          ))}
        </div>

        {/* Program highlights */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, idx) => {
            // distinct soft accents, rotating without repetition
            const accents = [
              "border-sky-200 bg-sky-50",
              "border-emerald-200 bg-emerald-50",
              "border-amber-200 bg-amber-50",
              "border-violet-200 bg-violet-50",
            ];
            const ring = ["focus:ring-sky-500", "focus:ring-emerald-500", "focus:ring-amber-500", "focus:ring-violet-500"][idx % 4];
            const badge = ["text-sky-700", "text-emerald-700", "text-amber-700", "text-violet-700"][idx % 4];

            return (
              <article
                key={h.title}
                className={[
                  "rounded-2xl border p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2",
                  accents[idx % accents.length],
                  ring,
                ].join(" ")}
                tabIndex={0}
                aria-label={h.title}
              >
                {/* tiny accent line */}
                <div className="h-1.5 w-16 rounded-full bg-slate-300/70" aria-hidden />
                <h3 className="mt-3 text-base font-bold text-slate-900">{h.title}</h3>
                <p className="mt-1 text-sm text-slate-700">{h.desc}</p>
                <span className={["mt-3 inline-block text-[11px] font-semibold", badge].join(" ")}>
                  Job-Ready Skills
                </span>
              </article>
            );
          })}
        </div>

        {/* Supporting SEO copy */}
        <p className="mt-8 max-w-4xl mx-auto text-center text-sm sm:text-base text-slate-600">
          Graduate with a <strong>QR-verified certificate</strong>, a <strong>portfolio of production-like projects</strong>, and
          interview prep that highlights <strong>problem-solving, testing,</strong> and <strong>clean code</strong>.
        </p>
      </div>

    </section>
  );
}
