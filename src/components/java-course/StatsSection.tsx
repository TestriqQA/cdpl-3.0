// components/sections/StatsSection.tsx
import {
  ShieldCheck,
  Cpu,
  Rocket,
  Server,
  Globe,
  Banknote,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { MentorButton } from "./common/ActionButtons";
import AnimatedCounter from "./common/AnimatedCounter";

/** ---------------- Types ---------------- */
type Stat = {
  value: string;
  label: string;
  caption?: string;
  icon: React.ComponentType<{ className?: string }>;
  cardClass: string; // unique color per card (no repeats)
  textClass: string;
  ringClass: string;
};

/**
 * Stats extracted from the PDF:
 * - 25%  Market growth from 2020 to 2030
 * - 101,000+ Job Vacancies in India
 * - 4 LPA Java Programmer freshers’ average salary
 * - 75% Job Satisfaction
 * - 32% India’s share in the global market
 * - 30 Hours Duration (from the cover page badge)
 * Source: “Copy of Course 4J Java Programming.pdf” (page 7 & page 1).  [Cited in chat]
 */
const STATS: Stat[] = [
  {
    value: "25%",
    label: "Market Growth (2020–2030)",
    caption: "Steady expansion of Java opportunities",
    icon: Rocket,
    cardClass: "bg-sky-50",
    textClass: "text-sky-800",
    ringClass: "ring-sky-200",
  },
  {
    value: "101,000+",
    label: "Job Vacancies in India",
    caption: "Open roles aligned to Java skills",
    icon: Server,
    cardClass: "bg-amber-50",
    textClass: "text-amber-800",
    ringClass: "ring-amber-200",
  },
  {
    value: "4 LPA",
    label: "Fresher Avg Salary",
    caption: "Java Programmer (entry level)",
    icon: Banknote,
    cardClass: "bg-emerald-50",
    textClass: "text-emerald-800",
    ringClass: "ring-emerald-200",
  },
  {
    value: "75%",
    label: "Job Satisfaction",
    caption: "Healthy satisfaction among pros",
    icon: ShieldCheck,
    cardClass: "bg-rose-50",
    textClass: "text-rose-800",
    ringClass: "ring-rose-200",
  },
  {
    value: "32%",
    label: "India’s Global Share",
    caption: "Share in the worldwide market",
    icon: Globe,
    cardClass: "bg-violet-50",
    textClass: "text-violet-800",
    ringClass: "ring-violet-200",
  },
  {
    value: "30 Hours",
    label: "Course Duration",
    caption: "Focused, fast-paced training",
    icon: Cpu,
    cardClass: "bg-cyan-50",
    textClass: "text-cyan-800",
    ringClass: "ring-cyan-200",
  },
];

export default function StatsSection() {
  const title =
    "Why Java Leads Enterprise Development in 2025: Performance, Security & Scalability";
  const description =
    "Java remains the #1 enterprise language for building secure, cloud-native, high-performance applications at scale. With Spring Boot, Microservices, Kubernetes, and the JVM, teams ship resilient software faster-backed by a vast talent pool and Fortune 500 adoption.";

  return (
    <section
      id="java-enterprise-stats"
      aria-labelledby="java-stats-heading"
      className="relative py-10"
    >
      {/* subtle futuristic accent (sleek, no heavy gradients) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(50%_50%_at_50%_50%,#000_40%,transparent_70%)]"
      >
        <div className="mx-auto h-full w-full max-w-6xl opacity-60">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,#e5e7eb_0_8px,transparent_8px_16px)]" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mx-auto mb-10 max-w-5xl text-center md:mb-14">
          <h2
            id="java-stats-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"
          >
            Why <span className="text-FS">Java</span>{" "}
            is the <span className="text-FS">#1</span> Enterprise Language
          </h2>
          <p className="mx-auto mt-6 max-w-5xl text-base leading-relaxed text-gray-700 md:text-lg">
            {description}
          </p>

          {/* SEO-friendly keywords line (human-readable, non-spammy) */}
          <p className="mx-auto mt-5 max-w-3xl text-sm text-gray-600">
            Keywords: Java Enterprise Development, Spring Boot, Microservices, Cloud-Native, Kubernetes, High Performance, Security, Scalability, JVM, Fortune 500.
          </p>
        </header>

        {/* Stats Grid */}
        <div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
          role="list"
          aria-label="Key Java enterprise statistics"
        >
          {STATS.map(
            ({ value, label, caption, icon: Icon, cardClass, textClass, ringClass }, i) => (
              <article
                key={i}
                role="listitem"
                className={[
                  "group rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-200",
                  "hover:shadow-md hover:-translate-y-0.5",
                  "border border-white/60 backdrop-blur-sm",
                  ringClass,
                  "ring-1",
                  cardClass,
                ].join(" ")}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={[
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/70",
                      "shadow-sm ring-1 ring-inset ring-black/5",
                    ].join(" ")}
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6 text-gray-900" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-baseline justify-between">
                      <AnimatedCounter
                        value={value}
                        className={["text-3xl font-extrabold tracking-tight", textClass].join(" ")}
                      />
                    </div>
                    <h3 className="mt-1 text-base font-semibold text-gray-900">{label}</h3>
                    {caption && <p className="mt-1 text-sm text-gray-600">{caption}</p>}
                  </div>
                </div>

                {/* subtle progress accent bar (pure color, non-gradient) */}
                <div className="mt-4 h-1 w-full rounded-full bg-white/70">
                  <div
                    className={["h-1 rounded-full", textClass.replace("text-", "bg-")].join(" ")}
                    style={{ width: ["88%", "72%", "64%", "80%", "76%", "68%"][i] }}
                    aria-hidden="true"
                  />
                </div>
              </article>
            )
          )}
        </div>

        {/* Benefit bullets (SEO-rich, scannable) */}
        <div className="mx-auto mt-10 max-w-5xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:mt-12">
          <h3 className="text-lg font-bold text-gray-900">
            Built for Cloud-Native Enterprise at Scale
          </h3>
          <ul className="mt-3 grid list-disc grid-cols-1 gap-2 pl-5 text-sm text-gray-700 sm:grid-cols-2 md:text-base">
            <li>Robust security model, mature JVM, and enterprise-grade tooling</li>
            <li>Spring Boot, Quarkus, and Micronaut accelerate microservices</li>
            <li>Seamless DevOps with Docker, Kubernetes, and CI/CD pipelines</li>
            <li>Excellent performance tuning (GC, JIT, Virtual Threads)</li>
            <li>Huge ecosystem, libraries, and community support</li>
            <li>Backed by Fortune 500 adoption and long-term stability</li>
          </ul>
        </div>

        {/* CTA (optional, lightweight) */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <Link
            href="#java-curriculum"
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          >
            Explore Java Curriculum
          </Link>
          <MentorButton
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            source="Java Programming Course Page - Stats Section - Talk to a Mentor"
          >
            Talk to a Mentor
          </MentorButton>
        </div>
      </div>


      {/* Meta-like enhancement for crawlers that read visible content */}
      <p className="sr-only">{title}</p>
    </section>
  );
}
