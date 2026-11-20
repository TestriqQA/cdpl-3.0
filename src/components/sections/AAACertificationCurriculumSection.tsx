const MODULES = [
  { title: "Foundations & Blueprint", bullets: ["AAA exam format & policies", "Core concepts & terminology", "Study plan & milestones"], num: "bg-orange-100 text-brand" },
  { title: "Practical Labs", bullets: ["Hands-on exercises", "Mentor-reviewed checkpoints", "Mini-capstone with rubric"], num: "bg-sky-100 text-sky-700" },
  { title: "Capstone & Review", bullets: ["End-to-end project", "Critique sessions", "Final readiness checklist"], num: "bg-violet-100 text-violet-700" },
];

/**
 * The three modules as numbered cards (as the ACTD tracks), all content
 * visible. It used to be an accordion that hid every bullet until clicked.
 * Server component.
 */
export default function AAACertificationCurriculumSection() {
  return (
    <section id="aaa-curriculum" aria-labelledby="aaa-curriculum-heading" className="scroll-mt-20 bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
            Curriculum
          </span>
          <h2 id="aaa-curriculum-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What you&apos;ll <span className="text-brand">learn</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            A focused syllabus driving demonstrable competence and AAA exam readiness.
          </p>
        </div>

        <ol className="grid gap-5 md:grid-cols-3">
          {MODULES.map((m, i) => (
            <li
              key={m.title}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-extrabold ${m.num}`} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Module {i + 1}</p>
                  <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
                </div>
              </div>
              <ul className="mt-4 space-y-2.5 text-slate-700">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
