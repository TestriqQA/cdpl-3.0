"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { Rocket, Users, Sparkles, Quote } from "lucide-react";

type Milestone = {
  year: string;
  title: string;
  text: string;
  bgColor: string;
  textColor: string;
};


// Opaque, visible colors (no alpha fades)
const ACCENT = "#6366f1";        // indigo-500
const ACCENT_LIGHT = "#e0e7ff";  // indigo-100
const ACCENT_RING = "#c7d2fe";   // indigo-200
// const ACCENT_ALT = "#93c5fd";    // sky-300 (opaque)
const SHADOW = "0 16px 38px -16px rgba(99,102,241,0.6)"; // shadow for depth (not a fade overlay)

const AboutStorySection = memo(function AboutStorySection() {
  const milestones: Milestone[] = useMemo(
    () => [
      { year: "2020", title: "The Spark", text: "Launched with a vision to revolutionize tech education.", bgColor: "blue-50", textColor: "blue-500" },
      { year: "2022", title: "Scaling Impact", text: "Expanded to include AI/ML and Automation pathways.", bgColor: "red-50", textColor: "red-500" },
      { year: "2025", title: "Global Reach", text: "Empowering 5k+ learners with innovative learning tools.", bgColor: "green-50", textColor: "green-500" },
    ],
    []
  );

  return (
    <section
      aria-labelledby="about-story-heading"
      className="relative mx-auto max-w-7xl px-4 py-6 md:py-12 sm:px-6 lg:px-8 overflow-hidden bg-white"
    >
      {/* No background textures, no meshes, no conic/blur/masks */}

      {/* Header */}
      <div className="mb-14 text-center relative">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs text-slate-800 shadow-sm ring-1 ring-slate-200">
          <Rocket className="h-4 w-4" aria-hidden="true" />
          Our Journey Began
        </span>

        <h2
          id="about-story-heading"
          className="mt-4 text-4xl font-bold tracking-tight text-gray-900"
        >
          <span className="text-brand">Our Story</span>{" "}

          of Impact

        </h2>

        <p className="mx-auto mt-4 max-w-5xl text-lg leading-8 text-gray-700">
          At <strong>Cinute Digital</strong>, our story is one of passion, innovation, and
          transformation. We’re dedicated to empowering learners with <strong>real-world skills</strong> through{" "}
          <strong>mentorship</strong> and <strong>hands-on projects</strong>, paving the way for thriving careers in tech.
        </p>
      </div>

      {/* Wrapper (solid border, no blur, no masks) */}
      <div className="relative rounded-[28px] border border-gray-200 bg-white shadow-[0_20px_60px_-25px_rgba(0,0,0,0.12)]">
        {/* Solid divider lines (no transparent gradients) */}
        <div className="pointer-events-none absolute -top-px left-6 h-[2px] w-24 bg-gray-300" />
        <div className="pointer-events-none absolute -bottom-px right-6 h-[2px] w-24 bg-gray-300" />

        {/* grid */}
        <div className="grid gap-8 p-6 sm:p-8 lg:p-10 lg:grid-cols-2">
          {/* STORY CARD (solid accent frame) */}
          <article
            className="relative rounded-3xl border-2"
            style={{ borderColor: ACCENT_RING, boxShadow: SHADOW }}
          >
            <div className="rounded-3xl bg-white p-7 sm:p-8">
              <header className="flex items-center gap-3 mb-4">
                <div
                  className="grid h-10 w-10 place-items-center rounded-xl"
                  style={{ backgroundColor: ACCENT_LIGHT, color: ACCENT }}
                  aria-hidden="true"
                >
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">A Vision Born from Purpose</h3>
              </header>

              <p className="text-base leading-7 text-gray-700">
                Founded in 2020, <strong>Cinute Digital</strong> was sparked by a group of tech enthusiasts who
                believed education should evolve with the industry. Our mission was clear: create a{" "}
                <strong>dynamic learning ecosystem</strong> where aspiring professionals gain practical skills in{" "}
                <strong>Software Testing</strong>, <strong>Automation</strong>, <strong>Data Science</strong>, and{" "}
                <strong>AI/ML</strong>. Through <strong>mentor-led guidance</strong> and{" "}
                <strong>real-world projects</strong>, we’ve empowered thousands to turn their ambitions into reality.
              </p>

              <figure
                className="mt-8 rounded-2xl p-6 ring-1 ring-inset"
                style={{
                  backgroundColor: "#eef2ff", // indigo-100 (opaque)
                  borderColor: ACCENT_RING,
                }}
              >
                <blockquote className="text-sm italic text-gray-800">
                  <Quote
                    className="inline-block h-4 w-4 align-text-top mr-2"
                    aria-hidden="true"
                    style={{ color: ACCENT }}
                  />
                  Cinute’s mentorship and projects gave me the tools to confidently step into a Data Science career.
                </blockquote>
                <figcaption className="mt-2 text-xs text-gray-500">— Priya, Data Scientist</figcaption>
              </figure>
            </div>
          </article>

          {/* MILESTONES (solid accent frame) */}
          <aside
            className="relative rounded-3xl border-2"
            style={{ borderColor: ACCENT_RING, boxShadow: SHADOW }}
          >
            <div className="rounded-3xl bg-white p-7 sm:p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span
                  className="grid h-10 w-10 place-items-center bg-indigo-500 text-white rounded-lg">
                  <Users className="h-6 w-6" aria-hidden="true" />
                </span>
                Our Journey Milestones
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                From our inception to global impact, here’s how we’ve grown.
              </p>

              <ul className="space-y-6">
                {milestones.map((m) => (
                  <li key={m.title} className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-15 md:h-13 md:w-13 items-center justify-center bg-${m.bgColor} text-${m.textColor} rounded-full font-bold shadow-sm ring-1 ring-inset`}
                      aria-hidden="true"
                    >
                      {m.year}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">{m.title}</h4>
                      <p className="text-sm text-gray-600">{m.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Solid divider */}
              <div className="mt-8 h-px w-full bg-gray-300" />

              {/* small stat row */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                {[
                  { label: "Learners", value: "5k+", color: "yellow-500", id: 1 },
                  { label: "Tracks", value: "4", color: "pink-600", id: 2 },
                  { label: "Capstone Projects", value: "90+", color: "purple-500", id: 3 },
                ].map((s) => (
                  <div
                    key={s.label}
                    className={[
                      "rounded-xl py-3 ring-1 ring-gray-200 bg-white",
                      s.id === 3 ? "hidden sm:block" : "",
                    ].join(" ")}
                  >
                    <div className={`text-lg font-semibold text-${s.color}`}>{s.value}</div>
                    <div className="text-md text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </aside>
        </div>

        {/* HIGHLIGHTS */}
        <div className="px-6 pb-8 sm:px-8 lg:px-10">
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            {[
              { icon: <Users className="h-5 w-5" aria-hidden="true" />, h: "5k+ Learners", p: "Building a global community", bgColor: "purple-500", iconColor: "lime-600" },
              { icon: <Rocket className="h-5 w-5" aria-hidden="true" />, h: "Job-Ready Skills", p: "Hands-on projects & mentorship", bgColor: "orange-500", iconColor: "brand" },
              { icon: <Sparkles className="h-5 w-5" aria-hidden="true" />, h: "Innovative Pathways", p: "Tailored for tech’s future", bgColor: "yellow-500", iconColor: "teal-600" },
            ].map(({ icon, h, p, bgColor }) => (
              <div
                key={h}
                className={`relative rounded-2xl border-2 border-${bgColor} text-center`}>
                <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200">
                  <div
                    className={`mx-auto flex h-12 w-12 items-center bg-${bgColor} text-white justify-center rounded-full`}
                    aria-hidden="true"
                  >
                    {icon}
                  </div>
                  <p className="mt-3 text-sm font-semibold text-gray-900">{h}</p>
                  <p className="mt-1 text-xs text-gray-600">{p}</p>
                  {/* Accessible CTA (visible on focus) */}
                  <Link
                    href="/contact"
                    className="sr-only focus:not-sr-only inline-flex items-center justify-center mt-3 rounded-full px-3 py-1 text-xs font-medium text-white outline-none"
                    style={{ backgroundColor: ACCENT, boxShadow: "0 10px 26px -12px rgba(99,102,241,0.7)" }}
                  >
                    Explore Programs
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-full px-6 py-3 text-base font-semibold text-white shadow-md transition-all focus:outline-none focus-visible:ring-2"
              style={{
                // Opaque gradient (no fades)
                backgroundImage: `linear-gradient(90deg, ${ACCENT}, ${ACCENT})`,
                boxShadow: SHADOW,
              }}
            >
              Join Our Journey
              <Rocket className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* No animations needed for fades; gradient text is static */}
      <style jsx>{``}</style>

      {/* SR-ONLY SEO (unchanged content) */}
      <p className="sr-only">
        Cinute Digital’s story: A journey of empowering learners with mentor-led, project-based training for careers in Software Testing, Automation, Data Science, and AI/ML, driven by innovation and impact.
      </p>

      {/* Organization schema is in layout.tsx - no need to duplicate here */}
    </section>
  );
});

export default AboutStorySection;
