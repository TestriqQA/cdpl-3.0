import { ChevronRight, Flag } from "lucide-react";

const steps = [
  { title: "Book a free session", desc: "Tell us your goals and current level.", node: "ring-orange-300 text-orange-600", label: "text-orange-600" },
  { title: "Get matched", desc: "We pair you with a mentor in your domain.", node: "ring-sky-300 text-sky-600", label: "text-sky-600" },
  { title: "Learn by doing", desc: "Projects, feedback, and interview prep.", node: "ring-violet-300 text-violet-600", label: "text-violet-600" },
  { title: "Get placed", desc: "Internship + referrals through partner network.", node: "ring-emerald-300 text-emerald-600", label: "text-emerald-600" },
];

export default function MentorProcessFlowSection() {
  return (
    <section aria-labelledby="mentor-process-title" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="mentor-process-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How <span className="text-brand">Mentorship</span> Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">A simple, outcomes-focused, 4-step path.</p>
        </div>

        {/* Roadmap: vertical on mobile, horizontal from lg */}
        <ol className="mx-auto mt-12 grid max-w-3xl gap-8 lg:max-w-none lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => {
            const last = i === steps.length - 1;
            return (
              <li key={s.title} className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center">
                {!last && (
                  <>
                    <span aria-hidden="true" className="absolute -bottom-8 left-[23px] top-12 border-l-2 border-dashed border-slate-300 lg:hidden" />
                    <span aria-hidden="true" className="absolute left-1/2 top-6 hidden w-[calc(100%+1.5rem)] border-t-2 border-dashed border-slate-300 lg:block" />
                    <span
                      aria-hidden="true"
                      className="absolute left-[calc(100%+0.75rem)] top-3 z-10 hidden h-6 w-6 -translate-x-1/2 place-items-center rounded-full bg-white text-slate-400 ring-1 ring-slate-200 lg:grid"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </>
                )}

                <span
                  aria-hidden="true"
                  className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full text-base font-bold shadow-sm ring-4 ${last ? "bg-emerald-500 text-white ring-emerald-200" : `bg-white ${s.node}`}`}
                >
                  {last ? <Flag className="h-5 w-5" /> : i + 1}
                </span>

                <div className="w-full flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md lg:mt-5">
                  <p className={`text-xs font-semibold uppercase tracking-wide ${s.label}`}>Step {i + 1}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
