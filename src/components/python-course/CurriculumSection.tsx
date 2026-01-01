// components/sections/CurriculumSection.tsx
// Sleek, slightly futuristic curriculum with distinct non-repeating accents, SEO JSON-LD, fully responsive.
// Source: “Copy of Course 4P Python Programming .pdf” (Modules on pp.16–19; Capstone on p.19)

'use client';
import dynamic from "next/dynamic";
import { useState } from "react";
const SyllabusDownloadModal = dynamic(() => import("@/components/SyllabusDownloadModal"), { ssr: false, loading: () => <SectionLoader label="Loading syllabus download modal..." /> });

const SectionLoader = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-900"></div>
      <span className="ml-2 text-gray-900">{label}</span>
    </div>
  );
};

type Module = {
  num: string;
  title: string;
  outcome: string;
};

const MODULES: Module[] = [
  // p.16 — Module 1
  {
    num: "01",
    title: "Introduction to Python Programming",
    outcome:
      "Why Python, key applications (Web, Data Science, Testing, Scripting), interpreted vs. compiled, Python 2 vs 3.",
  },
  // p.16 — Module 2
  {
    num: "02",
    title: "Installation & Environment Setup",
    outcome:
      "Install Python (Win/Mac/Linux), set up VS Code/PyCharm/Jupyter, configure pip & virtual envs, run your first script.",
  },
  // p.16 — Module 3
  {
    num: "03",
    title: "Python Basics",
    outcome:
      "Variables, data types, operators, input/output, type casting, comments, and clean coding practices.",
  },
  // p.16 — Module 4
  {
    num: "04",
    title: "Ranges, Lists, and Tuples",
    outcome:
      "range(), lists & tuples, indexing, slicing, iteration, mutability, and common list/tuple methods.",
  },
  // p.17 — Module 5
  {
    num: "05",
    title: "Conditionals and Looping",
    outcome:
      "if/elif/else, while & for loops, break/continue/pass, and real-life control-flow scenarios.",
  },
  // p.17 — Module 6
  {
    num: "06",
    title: "Unpacking and Swapping Variables",
    outcome:
      "Tuple/list unpacking, swap without temp, unpacking with * and nested structures.",
  },
  // p.17 — Module 7
  {
    num: "07",
    title: "Comprehensions and Data Conversion",
    outcome:
      "List/set/dict comprehensions, type conversions, filters/maps/conditional logic, lambda with comps.",
  },
  // p.17 — Module 8
  {
    num: "08",
    title: "Functions in Python",
    outcome:
      "Define/call functions, parameters & return values, *args/**kwargs, lambdas, scope basics.",
  },
  // p.17 — Module 9
  {
    num: "09",
    title: "Sorting Techniques",
    outcome:
      "sorted(), .sort(), key functions; sort lists of tuples/dicts; manual bubble/selection sort.",
  },
  // p.18 — Module 10
  {
    num: "10",
    title: "Object-Oriented Programming (OOP)",
    outcome:
      "Classes/objects, __init__ and self, inheritance/encapsulation/polymorphism, automation/data app use cases.",
  },
  // p.18 — Module 11
  {
    num: "11",
    title: "Decorators and Access Control",
    outcome:
      "Function decorators (@staticmethod, @property, custom), private/protected members, usage in Flask/Django.",
  },
  // p.18 — Module 12
  {
    num: "12",
    title: "Regular Expressions in Python",
    outcome:
      "re module, pattern matching, groups/quantifiers, validations (email, phone), practical exercises.",
  },
  // p.18 — Module 13
  {
    num: "13",
    title: "Exception Handling",
    outcome:
      "try/except/else/finally, common exceptions, raising & custom exceptions, best-practice error handling.",
  },
  // p.18 — Module 14
  {
    num: "14",
    title: "Working with Python Collections",
    outcome:
      "dict, set, frozenset; operations/methods; nested collections; performance considerations.",
  },
  // p.19 — Module 15
  {
    num: "15",
    title: "Container Objects and Nested Data",
    outcome:
      "Lists of dicts/dicts of lists, iterate & parse complex data, JSON/API/file data manipulation.",
  },
  // p.19 — Capstone
  {
    num: "16",
    title: "Capstone Project",
    outcome:
      "Build a mini app (e.g., inventory/expense tracker) using OOP, comprehensions, regex, exceptions, and file I/O.",
  },
];

// Distinct soft accents (cycled without repeating back-to-back)
const ACCENTS = [
  { line: "bg-sky-300/70", chip: "bg-sky-50 text-sky-800 border-sky-200", ring: "focus:ring-sky-300" },
  { line: "bg-emerald-300/70", chip: "bg-emerald-50 text-emerald-800 border-emerald-200", ring: "focus:ring-emerald-300" },
  { line: "bg-amber-300/70", chip: "bg-amber-50 text-amber-900 border-amber-200", ring: "focus:ring-amber-300" },
  { line: "bg-violet-300/70", chip: "bg-violet-50 text-violet-800 border-violet-200", ring: "focus:ring-violet-300" },
  { line: "bg-rose-300/70", chip: "bg-rose-50 text-rose-800 border-rose-200", ring: "focus:ring-rose-300" },
  { line: "bg-indigo-300/70", chip: "bg-indigo-50 text-indigo-800 border-indigo-200", ring: "focus:ring-indigo-300" },
];

export default function CurriculumSection() {
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="relative py-10 bg-gray-50">
      {/* subtle futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.03)_1px,transparent_1px)] bg-[size:26px_26px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(20,184,166,0.10),transparent_60%)]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 xl:px-10">
        {/* Heading */}
        <header className="text-center max-w-4xl mx-auto">
          <h2 id="curriculum-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            15-Module <span className="text-FS">Python Curriculum</span> + Capstone
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Carefully sequenced, <strong>project-driven</strong> roadmap from setup to deployment — built for
            <strong> job-ready outcomes</strong>.
          </p>
        </header>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {MODULES.map((m, i) => {
            const a = ACCENTS[i % ACCENTS.length];
            return (
              <article
                key={m.num}
                className={[
                  "group relative overflow-hidden rounded-2xl border bg-white p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.04)]",
                  "transition hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2",
                  `border-slate-200 ${a.ring}`,
                ].join(" ")}
                tabIndex={0}
                aria-label={`${m.num} — ${m.title}`}
              >
                {/* animated micro line (fills on hover only for this card) */}
                <span
                  className={[
                    "absolute left-0 top-0 h-1 w-0",
                    "transition-all duration-500 ease-out",
                    "group-hover:w-full",
                    a.line,
                  ].join(" ")}
                  aria-hidden
                />
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
                    {m.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{m.outcome}</p>

                    {/* meta chips */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span
                        className={[
                          "inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-semibold",
                          a.chip,
                        ].join(" ")}
                      >
                        Outcome-Focused
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                        Project-Driven
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                        Interview-Ready
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setIsSyllabusModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-xl cursor-pointer border border-slate-900 bg-slate-900 px-4 md:px-6 py-3 text-base font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:translate-y-[-1px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-300"
            aria-label="Download detailed Python curriculum"
          >
            Download Detailed Syllabus
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M3 4.5A1.5 1.5 0 014.5 3h11A1.5 1.5 0 0117 4.5v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 15.5v-11zm5 2a1 1 0 00-1 1v2H5.707a1 1 0 00-.707 1.707l4.293 4.293a1 1 0 001.414 0l4.293-4.293A1 1 0 0014.293 10H13V7.5a1 1 0 00-1-1H8z" />
            </svg>
          </button>
          <p className="mt-3 text-xs sm:text-sm text-slate-600">Includes topics, outcomes, tools, and project checklist.</p>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseName="Python Programming"
        source="Python Course Page - Curriculum Section - Syllabus Download"
      />

    </section>
  );
}
