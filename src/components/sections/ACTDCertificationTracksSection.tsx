const TRACKS = [
  { name: "Core Concepts", points: ["Policies & scope", "Assessment patterns", "Readiness metrics"], num: "bg-orange-100 text-brand" },
  { name: "Practical Skills", points: ["Scenario tasks", "Labs & reviews", "Rubric alignment"], num: "bg-sky-100 text-sky-700" },
  { name: "Capstone + Interview", points: ["End-to-end case", "Storytelling", "Mock interviews"], num: "bg-violet-100 text-violet-700" },
];

/** The three training tracks as numbered cards. Server component. */
export default function ACTDCertificationTracksSection() {
  return (
    <section id="actd-tracks" aria-labelledby="actd-tracks-heading" className="scroll-mt-20 bg-slate-50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
            Training tracks
          </span>
          <h2 id="actd-tracks-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Three tracks, <span className="text-brand">one capstone</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Progress with short sprints, hands-on labs, and structured reviews. Each track culminates in a capstone.
          </p>
        </div>

        <ol className="grid gap-5 md:grid-cols-3">
          {TRACKS.map((t, i) => (
            <li
              key={t.name}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-extrabold ${t.num}`} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{t.name}</h3>
              </div>
              <ul className="mt-4 space-y-2.5 text-slate-700">
                {t.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {p}
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
