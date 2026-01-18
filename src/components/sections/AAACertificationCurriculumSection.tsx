"use client";

import { useState } from "react";

type Group = { title: string; bullets: string[] };

export default function AAACertificationCurriculumSection() {
  const groups: Group[] = [
    {
      title: "Module 1 - Foundations & Blueprint",
      bullets: ["AAA exam format & policies", "Core concepts & terminology", "Study plan & milestones"],
    },
    {
      title: "Module 2 - Practical Labs",
      bullets: ["Hands-on exercises", "Mentor-reviewed checkpoints", "Mini-capstone with rubric"],
    },
    {
      title: "Module 3 - Capstone & Review",
      bullets: ["End-to-end project", "Critique sessions", "Final readiness checklist"],
    },
  ];

  return (
    <section id="aaa-curriculum" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-6 sm:mb-8">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">What you’ll learn</h2>
          <p className="mt-2 max-w-3xl text-[15px] text-slate-800 sm:text-base">
            A focused syllabus driving demonstrable competence and AAA exam readiness.
          </p>
        </header>

        <div className="rounded-2xl border border-slate-200 bg-white p-2">
          <div className="divide-y divide-slate-200">
            {groups.map((g) => (
              <Row key={g.title} title={g.title} bullets={g.bullets} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ title, bullets }: { title: string; bullets: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-left text-sm font-semibold ring-1 ring-slate-200 transition hover:bg-slate-50"
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className={`transition ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && (
        <ul className="px-4 py-3 list-disc pl-5 text-sm text-slate-800">
          {bullets.map((b) => (
            <li key={b} className="mb-1">
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
