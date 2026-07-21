// components/sections/WhyJavaProgram.tsx
// Sleek, responsive, SEO-friendly "Why Java Program" section.
// No repeated colors, minimal/futuristic accents, fully self-contained.

import {
  Timer,
  FolderGit2,
  CalendarClock,
  UserRoundCheck,
  Star,
  ShieldCheck,
  Rocket,
} from "lucide-react";

import { EnrollButton, SyllabusButton } from "./common/ActionButtons";

type Pill = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  bg: string; // unique bg per pill (no repeats)
  text: string;
  ring: string;
  aria: string;
};

const PILLS: Pill[] = [
  {
    icon: Timer,
    label: "Total Duration",
    value: "80 Hours",
    bg: "bg-indigo-50",
    text: "text-indigo-800",
    ring: "ring-indigo-200",
    aria: "Eighty hours total duration",
  },
  {
    icon: FolderGit2,
    label: "Hands-on Projects",
    value: "50+ Projects",
    bg: "bg-emerald-50",
    text: "text-emerald-800",
    ring: "ring-emerald-200",
    aria: "More than fifty hands-on projects",
  },
  {
    icon: CalendarClock,
    label: "Weekly Schedule",
    value: "6 hrs / week",
    bg: "bg-amber-50",
    text: "text-amber-800",
    ring: "ring-amber-200",
    aria: "Six hours per week schedule",
  },
  {
    icon: UserRoundCheck,
    label: "Eligibility",
    value: "No Exp. Needed",
    bg: "bg-sky-50",
    text: "text-sky-800",
    ring: "ring-sky-200",
    aria: "No experience needed",
  },
  {
    icon: Star,
    label: "Learner Rating",
    value: "9.9 / 10",
    bg: "bg-rose-50",
    text: "text-rose-800",
    ring: "ring-rose-200",
    aria: "Nine point nine out of ten learner rating",
  },
];

export default function WhyJavaProgram() {
  const title = "Your Gateway to Job-Ready Java Developer";
  const subtitle =
    "Job-ready Java training covering Core Java, Spring Boot, REST APIs, Microservices, SQL, and Cloud fundamentals-designed for high-growth engineering careers.";
  const keywords =
    "Java training, Spring Boot course, Microservices, REST API, Java developer certification, cloud-native Java, job-ready Java program, placement assistance, beginner friendly Java";

  return (
    <section
      id="why-java-program"
      aria-labelledby="why-java-heading"
      className="relative py-10 bg-white"
    >
      {/* subtle futuristic grid accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="mx-auto h-full w-full max-w-7xl opacity-50">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,#ececec_0_10px,transparent_10px_20px)]" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="why-java-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            Your Gateway to{" "}
            <span className="text-FS">
              Job-Ready Java Developer
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-700">
            {subtitle}
          </p>
          {/* human-readable SEO keywords (non-spammy) */}
          <p className="sr-only">{keywords}</p>
        </header>

        {/* Program highlights (unique colors, no repeats) */}
        <div
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          role="list"
          aria-label="Program highlights"
        >
          {PILLS.map(({ icon: Icon, label, value, bg, text, ring, aria }, i) => (
            <div
              key={i}
              role="listitem"
              aria-label={aria}
              className={[
                "rounded-2xl p-4 md:p-5 shadow-sm transition-all duration-200",
                "hover:-translate-y-0.5 hover:shadow-md",
                "border border-white/70 backdrop-blur-sm ring-1",
                bg,
                ring,
              ].join(" ")}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-black/5 shadow-sm">
                  <Icon className="h-5 w-5 text-gray-900" />
                </div>
                <div className="min-w-0">
                  <p className={["text-xl font-extrabold leading-none", text].join(" ")}>
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-700">{label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value props (SEO-rich, scannable, no gradient fills) */}
        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-gray-900" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900">
              Built for Real-World Enterprise Java
            </h3>
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2 md:text-base">
            <li>Master Core Java, OOP, Collections, Streams, and Exception Handling</li>
            <li>Build REST APIs with Spring Boot, JPA/Hibernate, and validation</li>
            <li>Design Microservices with Docker, CI/CD, and container-first practices</li>
            <li>Integrate SQL (MySQL/PostgreSQL), testing (JUnit/Mockito) & logging</li>
            <li>Cloud-ready patterns for Kubernetes & scalable, secure deployments</li>
            <li>Interview prep, Git/GitHub workflows, and portfolio-ready projects</li>
          </ul>
        </div>

        {/* Micro-CTA row */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <EnrollButton
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            source="Java Programming Course Page - Why Java Program Section - Apply for Program"
          >
            Apply for the Program
            <Rocket className="ml-2 h-4 w-4" />
          </EnrollButton>
          <SyllabusButton
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            source="Java Programming Course Page - Why Java Program Section - Download Syllabus"
          >
            Download Syllabus (PDF)
          </SyllabusButton>
        </div>
      </div>

      {/* Assist crawlers that read visible content */}
      <p className="sr-only">{title}</p>
    </section>
  );
}
