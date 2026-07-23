import EnrollButton from "@/components/course-islands/EnrollButton";
import SyllabusButton from "@/components/course-islands/SyllabusButton";

type Audience = {
  title: string;
  desc: string;
  accent: { bg: string; text: string; border: string; ring: string; bar: string; dot: string };
};

const AUDIENCES: Audience[] = [
  {
    title: "Learners with prior programming & ML experience",
    desc: "Advance your expertise in Deep Learning, NLP, and Generative AI with production-style labs.",
    accent: {
      bg: "bg-sky-50",
      text: "text-sky-900",
      border: "border-sky-200",
      ring: "focus:ring-sky-300",
      bar: "bg-sky-600",
      dot: "bg-sky-500",
    },
  },
  {
    title: "Students targeting AI & Data Science careers",
    desc: "Build a job-ready portfolio with mentor-reviewed projects, interview prep, and placement assistance.",
    accent: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      border: "border-emerald-200",
      ring: "focus:ring-emerald-300",
      bar: "bg-emerald-600",
      dot: "bg-emerald-500",
    },
  },
  {
    title: "Tech professionals seeking AI specialization",
    desc: "Integrate and deploy AI models in real systems with evaluation, monitoring, and lightweight MLOps.",
    accent: {
      bg: "bg-amber-50",
      text: "text-amber-900",
      border: "border-amber-200",
      ring: "focus:ring-amber-300",
      bar: "bg-amber-600",
      dot: "bg-amber-500",
    },
  },
  {
    title: "Builders exploring innovative AI applications",
    desc: "Design and ship cutting-edge apps using Transformers, prompt engineering, and RAG with vector DBs.",
    accent: {
      bg: "bg-rose-50",
      text: "text-rose-900",
      border: "border-rose-200",
      ring: "focus:ring-rose-300",
      bar: "bg-rose-600",
      dot: "bg-rose-500",
    },
  },
];

export default function WhoShouldEnroll() {
  const keywords =
    "who should enroll deep learning course, nlp generative ai audience, ml program for students professionals career switchers, ai deployment specialization";


  return (
    <section
      id="who-should-enroll"
      aria-labelledby="who-enroll-heading"
      className="relative overflow-hidden py-10 bg-white"
    >
      {/* Subtle futuristic backdrop (thin grid; no heavy gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="who-enroll-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Who is this <span className="text-DS">course for</span>?
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-700">
            Designed for motivated learners to become <strong>job-ready</strong> in Deep Learning, NLP, and Generative AI.
          </p>
          {/* SEO assist for crawlers */}
          <p className="sr-only">{keywords}</p>
        </header>

        {/* Cards grid — responsive, unique accents, hover/focus lift */}
        <ul
          role="list"
          aria-label="Target audience for the program"
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2"
        >
          {AUDIENCES.map((a) => (
            <li key={a.title} className="min-w-0">
              <article
                tabIndex={0}
                className={[
                  "group relative overflow-hidden rounded-2xl border p-5 md:p-6 shadow-sm backdrop-blur transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:-translate-y-0.5",
                  a.accent.bg,
                  a.accent.border,
                  a.accent.ring,
                ].join(" ")}
                aria-label={a.title}
                title={a.title}
              >
                {/* Top accent bar (explicit color — always visible) */}
                <div className={["absolute left-0 top-0 h-1.5 w-full", a.accent.bar].join(" ")} aria-hidden />

                <div className="flex items-start gap-3">
                  {/* Dot icon */}
                  <span className={["mt-1 inline-block h-2.5 w-2.5 rounded-full", a.accent.dot].join(" ")} aria-hidden />
                  <div className="min-w-0">
                    <h3 className={["text-lg md:text-xl font-bold", a.accent.text].join(" ")}>
                      {a.title}
                    </h3>
                    <p className="mt-1 text-sm md:text-base leading-relaxed text-slate-700">{a.desc}</p>
                  </div>
                </div>

                {/* Bottom progress hint on hover (non-gradient) */}
                <div className="mt-4 h-1 w-full rounded-full bg-white/80" aria-hidden>
                  <div
                    className={["h-1 w-0 rounded-full transition-[width] duration-500 ease-out", a.accent.bar].join(" ")}
                  />
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* CTA row */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <EnrollButton
            source="Generative AI Course Page - Who Should Enroll Section - Check Eligibility"
            courseName="Master Program in Deep Learning, NLP & Generative AI"
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            ariaLabel="Check your eligibility and apply"
          >
            Check Eligibility & Apply
          </EnrollButton>
          <SyllabusButton
            source="Generative AI Course Page - Who Should Enroll Section - Download Syllabus"
            courseName="Master Program in Deep Learning, NLP & Generative AI"
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            ariaLabel="Download the detailed syllabus"
          >
            Download Detailed Syllabus (PDF)
          </SyllabusButton>
        </div>
      </div>

    </section>
  );
}
