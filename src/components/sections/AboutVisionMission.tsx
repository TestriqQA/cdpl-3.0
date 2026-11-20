// Mission & Vision. Server Component.
//
// Laid out as statements rather than icon cards: Mission and Vision as two
// side-by-side panels (white and light orange), the four pillars as
// one divided strip, and the core values in their own light-orange panel.
// Headings (h2, the four h3s and the pillar h4s) and the mission/vision copy
// are kept; the keyword chips under the pillars are gone.
import { CheckCircle2, Sparkles } from "lucide-react";
import clsx from "clsx";
import SectionHeader from "@/components/ui/SectionHeader";

const STATEMENTS = [
  {
    id: "mission-heading",
    label: "Our Mission",
    statement:
      "Empower learners with real-world skills via live projects, mentor feedback, and interview preparation so they can perform from day one in QA/Testing, Automation, Data, and AI/ML.",
    points: [
      "Portfolio-first learning with capstones & case studies",
      "Manual, Automation & API testing aligned to employer tooling",
      "Soft-skills coaching and mock interviews",
    ],
    box: "border-slate-200 bg-white",
  },
  {
    id: "vision-heading",
    label: "Our Vision",
    statement:
      "Build an inclusive EdTech ecosystem where lifelong learning, innovation, and career outcomes converge—creating talent that drives high-impact products and services.",
    points: [
      "Continuously current with in-demand skills & certifications",
      "Scalable mentor network and hiring partnerships",
      "Ethics, accessibility, and community at the core",
    ],
    box: "border-orange-200 bg-orange-50",
  },
];

const PILLARS = [
  { title: "Empowerment", body: "Mentor-led, collaborative learning that pairs real-world practice with constructive feedback to build confidence and capability." },
  { title: "Readiness", body: "Job-ready training with live projects, interview preparation, and portfolio building aligned to hiring needs." },
  { title: "Innovation", body: "Continuously updated content and tools—Manual & Automation Testing, API Testing, Data, AI/ML—reflecting industry workflows." },
  { title: "Outcomes", body: "Placement-focused guidance, hiring partner referrals, and a clear path from practice to offers for high-growth roles." },
];

const VALUES = [
  "Industry-aligned curriculum",
  "Live projects & capstones",
  "Mentor feedback loops",
  "Ethics & quality",
  "Lifelong learning",
  "Inclusive community",
];

export default function AboutMissionVision({ className }: { className?: string }) {
  return (
    <section aria-labelledby="mission-vision-title" className={clsx("bg-gray-50 py-12 lg:py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="mission-vision-title"
          pill={<><Sparkles className="h-4 w-4" aria-hidden="true" />Future-Ready, Industry-Aligned Training</>}
          title={<>Mission &amp; <span className="text-brand">Vision</span></>}
          intro="Industry-aligned, mentor-led, project-based training that makes learners job-ready, inside an inclusive, outcomes-driven ecosystem that accelerates careers."
        />

        {/* Mission and Vision as statements */}
        <div className="grid gap-6 lg:grid-cols-2">
          {STATEMENTS.map(({ id, label, statement, points, box }) => (
            <article key={id} aria-labelledby={id} className={`flex flex-col rounded-3xl border p-7 shadow-sm sm:p-10 ${box}`}>
              <h3 id={id} className="text-2xl font-bold text-gray-900">
                {label}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-slate-700">
                {statement}
              </p>
              <ul className="mt-auto space-y-2.5 border-t border-slate-900/10 pt-6 text-slate-700 sm:mt-8">
                {points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Pillars: one divided strip */}
        <div className="mt-12">
          <h3 className="text-center text-2xl font-bold text-gray-900">
            Our <span className="text-brand">Pillars</span>
          </h3>
          <div className="mt-6 grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="group border-slate-200 p-6 transition-colors duration-300 hover:bg-orange-50/60 sm:p-7 [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(n+3)]:border-b-0 lg:border-b-0 lg:[&:not(:last-child)]:border-r"
              >
                <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-brand transition-all duration-300 group-hover:w-12" />
                <h4 className="mt-4 text-lg font-bold text-gray-900">{p.title}</h4>
                <p className="mt-2 leading-relaxed text-slate-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core values: their own light-orange panel, heading and line on the
            left, the six values as white tiles on the right. */}
        <div className="mt-12 grid gap-8 rounded-3xl border border-orange-200 bg-orange-50 p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-center lg:gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Core <span className="text-brand">Values</span>
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              The principles behind every program, mentor and project at Cinute Digital.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {VALUES.map((v) => (
              <li
                key={v}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 font-semibold text-gray-900 shadow-sm ring-1 ring-orange-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
