// components/sections/CurriculumSection.tsx
// Sleek, responsive, SEO-friendly curriculum section with subtle futuristic accents.
// Updated from the PDF: Modules 1–15 + Capstone (pages 16–19). No repeated colors.

import {
  BookOpenCheck,
  Database,
  Atom,
  LayoutTemplate,
  Boxes,
  Layers3,
  Network,
  Dock,
  Cloud,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import React from "react";
import { EnrollButton, SyllabusButton } from "./common/ActionButtons";

type Module = {
  num: string;
  title: string;
  outcome: string;
  icon: React.ComponentType<{ className?: string }>;
  bg: string;   // unique background color per card (no repeats)
  text: string; // strong text color
  ring: string; // ring color
  badge: string;
};

// NOTE: Unique, non-repeating soft backgrounds & matching text/ring for each card.
const MODULES: Module[] = [
  {
    num: "01",
    title: "Introduction to Java Programming",
    outcome:
      "What is Java, JDK–JRE–JVM, compilation → execution flow, key features & use cases.",
    icon: BookOpenCheck,
    bg: "bg-sky-50",
    text: "text-sky-900",
    ring: "ring-sky-200",
    badge: "Overview",
  },
  {
    num: "02",
    title: "Installation & Development Setup",
    outcome:
      "Install JDK, set JAVA_HOME/PATH, pick an IDE (Eclipse/IntelliJ/VS Code), run first program.",
    icon: Database,
    bg: "bg-amber-50",
    text: "text-amber-900",
    ring: "ring-amber-200",
    badge: "Setup",
  },
  {
    num: "03",
    title: "Java Basics",
    outcome:
      "Variables, data types, operators, console I/O, casting/conversion, comments & best practices.",
    icon: Atom,
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    ring: "ring-emerald-200",
    badge: "Syntax",
  },
  {
    num: "04",
    title: "Arrays and ArrayLists",
    outcome:
      "1D/2D arrays, for-each, common operations, ArrayList API & when to use lists vs arrays.",
    icon: LayoutTemplate,
    bg: "bg-rose-50",
    text: "text-rose-900",
    ring: "ring-rose-200",
    badge: "Data",
  },
  {
    num: "05",
    title: "Conditional Statements and Loops",
    outcome:
      "if/else/switch, while/do-while/for, nested loops, break/continue with practical scenarios.",
    icon: Boxes,
    bg: "bg-violet-50",
    text: "text-violet-900",
    ring: "ring-violet-200",
    badge: "Control Flow",
  },
  {
    num: "06",
    title: "Unpacking & Destructuring (Java Way)",
    outcome:
      "Tuple-like handling via arrays/maps/objects, manual ‘unpacking’ patterns & limitations.",
    icon: Layers3,
    bg: "bg-cyan-50",
    text: "text-cyan-900",
    ring: "ring-cyan-200",
    badge: "Patterns",
  },
  {
    num: "07",
    title: "Data Conversions & Comprehension Techniques",
    outcome:
      "Primitive ↔ wrapper, String ↔ number/date; Java 8 Stream-based ‘comprehension’-style ops.",
    icon: Network,
    bg: "bg-lime-50",
    text: "text-lime-900",
    ring: "ring-lime-200",
    badge: "Transforms",
  },
  {
    num: "08",
    title: "Functions in Java",
    outcome:
      "Defining/calling methods, overloading, static vs instance methods, parameters & returns.",
    icon: Dock,
    bg: "bg-fuchsia-50",
    text: "text-fuchsia-900",
    ring: "ring-fuchsia-200",
    badge: "Methods",
  },
  {
    num: "09",
    title: "Sorting Techniques",
    outcome:
      "Arrays.sort/Collections.sort, Comparable vs Comparator, bubble/insertion/selection logic.",
    icon: Cloud,
    bg: "bg-teal-50",
    text: "text-teal-900",
    ring: "ring-teal-200",
    badge: "Algorithms",
  },
  {
    num: "10",
    title: "Object-Oriented Programming (OOP)",
    outcome:
      "Classes/objects, constructors, encapsulation, inheritance, polymorphism & interfaces.",
    icon: BookOpenCheck,
    bg: "bg-indigo-50",
    text: "text-indigo-900",
    ring: "ring-indigo-200",
    badge: "OOP",
  },
  {
    num: "11",
    title: "Access Modifiers & Decorator Pattern",
    outcome:
      "public/private/protected/default, static/final; overview + use of the Decorator pattern.",
    icon: Database,
    bg: "bg-orange-50",
    text: "text-orange-900",
    ring: "ring-orange-200",
    badge: "Access",
  },
  {
    num: "12",
    title: "Java Collections Framework",
    outcome:
      "List/Set/Map families with HashMap/HashSet/LinkedList/TreeMap; iterators & for-each.",
    icon: Atom,
    bg: "bg-pink-50",
    text: "text-pink-900",
    ring: "ring-pink-200",
    badge: "Collections",
  },
  {
    num: "13",
    title: "Regular Expressions in Java",
    outcome:
      "java.util.regex, Pattern/Matcher, common validation patterns (email/password/etc.).",
    icon: LayoutTemplate,
    bg: "bg-stone-50",
    text: "text-stone-900",
    ring: "ring-stone-200",
    badge: "Regex",
  },
  {
    num: "14",
    title: "Exception Handling",
    outcome:
      "Checked vs unchecked, try/catch/finally, throw/throws, custom exceptions & best practices.",
    icon: Boxes,
    bg: "bg-yellow-50",
    text: "text-yellow-900",
    ring: "ring-yellow-200",
    badge: "Errors",
  },
  {
    num: "15",
    title: "Container Objects in Java",
    outcome:
      "Working with collections inside classes; nested structures (Map<List<…>>, List<Map<…>>).",
    icon: Layers3,
    bg: "bg-red-50",
    text: "text-red-900",
    ring: "ring-red-200",
    badge: "Structuring",
  },
  {
    num: "16",
    title: "Capstone Project",
    outcome:
      "Build a console app using OOP, collections, sorting & regex with robust error handling.",
    icon: Briefcase,
    bg: "bg-green-50",
    text: "text-green-900",
    ring: "ring-green-200",
    badge: "Capstone",
  },
];

export default function CurriculumSection() {
  const title = "Java Programming Curriculum";
  const subtitle =
    "A 30-hour, job-ready path: essentials → control flow → data structures → OOP → collections → regex → exceptions, finishing with a hands-on capstone.";
  const keywords =
    "Java course curriculum, JDK JRE JVM, Java basics arrays arraylist, control flow, functions methods, OOP, access modifiers, collections framework, regex, exception handling, capstone project";

  return (
    <section
      id="java-curriculum"
      aria-labelledby="curriculum-heading"
      className="relative py-10 bg-gray-50"
    >
      {/* subtle futuristic grid accent (sleek, non-intrusive) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="mx-auto h-full w-full max-w-7xl opacity-50">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,#e9e9e9_0_12px,transparent_12px_24px)]" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="curriculum-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900"
          >
            <span className="text-FS">Java Programming Curriculum</span>
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-700">
            {subtitle}
          </p>
          {/* SEO keywords for crawlers that read visible content */}
          <p className="sr-only">{keywords}</p>
        </header>

        {/* Timeline legend */}
        <div className="mx-auto mt-6 flex flex-wrap max-w-4xl items-center justify-center gap-3 text-xs text-gray-600">
          <span className="inline-flex items-center gap-1">
            <span className="h-1 w-1 rounded-full bg-gray-900" /> Basics
          </span>
          <span>•</span>
          <span>Control Flow</span>
          <span>•</span>
          <span>Data Structures</span>
          <span>•</span>
          <span>OOP & Collections</span>
          <span>•</span>
          <span>Regex & Exceptions</span>
          <span>•</span>
          <span>Capstone</span>
        </div>

        {/* Curriculum Grid */}
        <ol
          className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2"
          aria-label="Java curriculum modules"
        >
          {MODULES.map((m, i) => (
            <li key={m.num} className="relative">
              <article
                role="article"
                aria-label={`${m.num} ${m.title}`}
                className={[
                  "group relative overflow-hidden rounded-2xl p-5 md:p-6 shadow-sm transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md",
                  "border border-white/70 backdrop-blur-sm ring-1",
                  m.bg,
                  m.ring,
                ].join(" ")}
              >
                {/* module header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-black/5 shadow-sm">
                      <m.icon className="h-6 w-6 text-gray-900" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold tracking-wider text-gray-700">
                          Module {m.num}
                        </span>
                        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gray-800 ring-1 ring-black/5">
                          {m.badge}
                        </span>
                      </div>
                      <h3 className="mt-1 text-lg font-bold text-gray-900 md:text-xl">
                        {m.title}
                      </h3>
                    </div>
                  </div>

                  {/* slim progress accent (sleek, non-gradient) */}
                  <div className="hidden md:block h-8 w-1 rounded-full bg-white/70" aria-hidden="true">
                    <div
                      className={["h-4 w-1 rounded-full", m.text.replace("text-", "bg-")].join(" ")}
                    />
                  </div>
                </div>

                {/* outcome */}
                <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
                  {m.outcome}
                </p>

                {/* footer cta */}
                <div className="mt-4 flex items-center justify-between">
                  <span className={["text-xs font-semibold", m.text].join(" ")}>
                    Outcome-Focused
                  </span>
                  <SyllabusButton
                    className="inline-flex items-center text-sm font-semibold text-gray-900 hover:opacity-80"
                    aria-label={`See topics in Module ${m.num}`}
                    source={`Java Programming Course Page - Curriculum Section - Module ${m.num} - See Topics`}
                  >
                    See topics
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </SyllabusButton>
                </div>
              </article>

              {/* lightweight timeline connector on large screens */}
              {i < MODULES.length - 1 && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-2 top-[calc(100%+0.25rem)] hidden h-4 w-px bg-gray-300/60 sm:block"
                />
              )}
            </li>
          ))}
        </ol>

        {/* Compact feature strip (SEO-rich bullets) */}
        <div className="mx-auto mt-10 max-w-6xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-2">
            <Atom className="h-5 w-5 text-gray-900" />
            <h4 className="text-lg md:text-xl font-bold text-gray-900">What You’ll Build & Learn</h4>
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2 md:text-base">
            <li>Run Java from JDK install to first app, with clean code practices</li>
            <li>Arrays vs ArrayLists, and iterative patterns for real tasks</li>
            <li>Control flow mastery with nested loops & switch</li>
            <li>OOP with classes, inheritance, interfaces & constructors</li>
            <li>Collections (List/Set/Map), sorting & comparisons</li>
            <li>Regex validation and robust exception handling</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <EnrollButton
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            aria-label="Apply to the Java curriculum"
            source="Java Programming Course Page - Curriculum Section - Apply Now"
          >
            Apply Now
          </EnrollButton>
          <SyllabusButton
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            aria-label="Download full Java syllabus PDF"
            source="Java Programming Course Page - Curriculum Section - Download Syllabus"
          >
            Download Syllabus (PDF)
          </SyllabusButton>
        </div>
      </div>

      {/* Assist crawlers & screen readers */}
      <h1 className="sr-only">{title}</h1>
      <p className="sr-only">
        {subtitle}. Keywords: {keywords}.
      </p>
    </section>
  );
}
