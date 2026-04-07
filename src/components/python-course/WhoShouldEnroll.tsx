// components/sections/WhoShouldEnroll.tsx
// Server component – sleek, slightly futuristic, fully responsive, SEO-friendly.
// No client-side libs required.

'use client';
import { useState } from "react";
import dynamic from "next/dynamic";
const EnrollModal = dynamic(() => import("@/components/EnrollModal"), { ssr: false, loading: () => <SectionLoader label="Loading enroll modal..." /> });
import { ArrowRight } from "lucide-react";

const SectionLoader = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-900"></div>
      <span className="ml-2 text-gray-900">{label}</span>
    </div>
  );
};

type Audience = {
  title: string;
  description: string;
  accent: {
    bg: string;
    text: string;
    border: string;
    ring: string;
    iconBg: string;
  };
  icon: string; // emoji for zero-dependency icons
};

const AUDIENCES: Audience[] = [
  {
    title: "Students & Freshers",
    description:
      "Start from zero and build job-ready Python skills: syntax, OOP, APIs, SQL, and projects.",
    icon: "🎓",
    accent: {
      bg: "bg-sky-50",
      text: "text-sky-900",
      border: "border-sky-200",
      ring: "focus:ring-sky-300",
      iconBg: "bg-sky-100",
    },
  },
  {
    title: "Career Switchers",
    description:
      "Move from non-tech roles to high-growth Python careers in Backend, Data, or Automation.",
    icon: "🚀",
    accent: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      border: "border-emerald-200",
      ring: "focus:ring-emerald-300",
      iconBg: "bg-emerald-100",
    },
  },
  {
    title: "Entrepreneurs",
    description:
      "Prototype MVPs faster, automate operations, and turn ideas into deployable products.",
    icon: "💼",
    accent: {
      bg: "bg-amber-50",
      text: "text-amber-900",
      border: "border-amber-200",
      ring: "focus:ring-amber-300",
      iconBg: "bg-amber-100",
    },
  },
  {
    title: "Data Enthusiasts",
    description:
      "Enter Data Science & ML with Pandas, NumPy, scikit-learn, and clean experimentation.",
    icon: "📊",
    accent: {
      bg: "bg-violet-50",
      text: "text-violet-900",
      border: "border-violet-200",
      ring: "focus:ring-violet-300",
      iconBg: "bg-violet-100",
    },
  },
];

export default function WhoShouldEnroll() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  return (
    <section
      id="who-should-enroll"
      aria-labelledby="enroll-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(20,184,166,0.12),transparent_60%)]" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 xl:px-10">
        {/* Heading */}
        <header className="text-center max-w-4xl mx-auto">
          <h2
            id="enroll-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Who is this <span className="text-FS">Python course</span> for?
          </h2>

          {/* micro badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              Beginner-Friendly
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              Mentor-Guided
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              Portfolio Projects
            </span>
          </div>

          <p className="mt-4 text-sm sm:text-base text-slate-600">
            A perfect fit whether you’re starting from scratch or upskilling for{" "}
            <strong>Backend</strong>, <strong>Data</strong>, <strong>Automation</strong>, and{" "}
            <strong>DevOps</strong> roles. Learn clean code, testing, Git, and deployment best
            practices.
          </p>
        </header>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
          {AUDIENCES.map((a) => (
            <article
              key={a.title}
              className={[
                "group relative rounded-2xl border p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition",
                "hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2",
                a.accent.bg,
                a.accent.text,
                a.accent.border,
                a.accent.ring,
              ].join(" ")}
              tabIndex={0}
              aria-label={a.title}
            >
              {/* top line accent that extends on hover */}
              <span className="absolute left-4 right-4 top-3 h-[3px] rounded-full bg-current/20 transition-all duration-300 group-hover:right-3" />

              <div className="flex items-start gap-3">
                <span
                  className={[
                    "inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-lg",
                    a.accent.iconBg,
                  ].join(" ")}
                  aria-hidden
                >
                  {a.icon}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold">{a.title}</h3>
                  <p className="mt-1 text-[13px] sm:text-sm leading-relaxed opacity-90">
                    {a.description}
                  </p>
                </div>
              </div>
              {/* subtle footer line */}
              <div className="mt-4 h-px w-full bg-current/10" />
              <p className="mt-3 text-xs opacity-75">
                Includes guided pathways, quizzes, and review on your mini-projects.
              </p>
            </article>
          ))}
        </div>

        {/* Supporting SEO copy */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          From writing your <strong>first Python script</strong> to deploying{" "}
          <strong>production-ready apps</strong>, this program helps you develop real skills that
          companies hire for-clean code, testing, <strong>Git/GitHub</strong>, and cloud deployment.
        </p>

        {/* CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setIsEnrollModalOpen(true)}
            className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-700 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-200"
            title="Enroll Now"
          >
            Enroll Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseName="Python Programming"
        source="Python Course Page - Who Should Enroll Section - Enroll Now"
      />

    </section>
  );
}
