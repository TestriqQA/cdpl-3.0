"use client";

import React, { useMemo, useState } from "react";
import {
  LuPlus, LuMinus, LuBadgeCheck, LuClock, LuVideo, LuUserCheck,
  LuCreditCard, LuBookOpen, LuGlobe, LuHeadphones, LuGraduationCap
} from "react-icons/lu";
import Link from "next/link";
import dynamic from "next/dynamic";
const EnrollModal = dynamic(() => import("@/components/EnrollModal"), { ssr: false });
import { MANUAL_TESTING_FAQS as FAQS } from "@/data/manualTestingData";
import { HelpCircle } from "lucide-react";


/* =========================
   Types
========================= */
type Category = "Admissions" | "Curriculum" | "Certification" | "Career" | "Payments" | "General";

/* =========================
   Unique Dark Colors for FAQ Icons (No Repeat)
========================= */
const DARK_COLORS = [
  "bg-indigo-600",
  "bg-emerald-700",
  "bg-cyan-600",
  "bg-amber-600",
  "bg-violet-600",
  "bg-rose-600",
  "bg-sky-600",
  "bg-teal-600",
  "bg-lime-600",
] as const;

/* =========================
   Light Tab Colors (Restored – Original Design)
========================= */
const categoryMeta: Record<Category, {
  lightBg: string;
  text: string;
  ring: string;
  dot: string;
  icon: React.ReactNode;
}> = {
  General: {
    lightBg: "bg-indigo-50",
    text: "text-indigo-700",
    ring: "ring-indigo-200",
    dot: "bg-indigo-600",
    icon: <HelpCircle className="h-4 w-4" />
  },
  Admissions: {
    lightBg: "bg-emerald-50",
    text: "text-emerald-800",
    ring: "ring-emerald-200",
    dot: "bg-emerald-700",
    icon: <LuGlobe className="h-4 w-4" />
  },
  Curriculum: {
    lightBg: "bg-cyan-50",
    text: "text-cyan-700",
    ring: "ring-cyan-200",
    dot: "bg-cyan-600",
    icon: <LuBookOpen className="h-4 w-4" />
  },
  Certification: {
    lightBg: "bg-amber-50",
    text: "text-amber-700",
    ring: "ring-amber-200",
    dot: "bg-amber-600",
    icon: <LuGraduationCap className="h-4 w-4" />
  },
  Career: {
    lightBg: "bg-violet-50",
    text: "text-violet-700",
    ring: "ring-violet-200",
    dot: "bg-violet-600",
    icon: <LuUserCheck className="h-4 w-4" />
  },
  Payments: {
    lightBg: "bg-rose-50",
    text: "text-rose-700",
    ring: "ring-rose-200",
    dot: "bg-rose-600",
    icon: <LuCreditCard className="h-4 w-4" />
  },
};

const categoryOrder: Category[] = ["General", "Admissions", "Curriculum", "Certification", "Career", "Payments"];

function Chip({
  label,
  active,
  onClick,
  meta,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  meta: typeof categoryMeta[Category];
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`
        inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition
        ${active
          ? `bg-white shadow-lg border-gray-400 ${meta.text}`
          : `${meta.lightBg} ${meta.text} border-transparent`
        }
        ring-1 ring-inset ${meta.ring} hover:ring-gray-300
      `}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
      {meta.icon}
      {label}
    </button>
  );
}

function FAQItem({
  question,
  answer,
  category,
}: {
  question: string;
  answer: string;
  category: Category;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const colorIndex = categoryOrder.indexOf(category);
  const bgColor = DARK_COLORS[colorIndex % DARK_COLORS.length];

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div className="flex items-start gap-3">
          <div className={`rounded-md p-2 ${bgColor}`}>
            {categoryMeta[category].icon}
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900">{question}</h3>
        </div>
        {open ? <LuMinus className="h-5 w-5 text-gray-500" /> : <LuPlus className="h-5 w-5 text-gray-500" />}
      </button>
      <div className={`grid transition-[grid-template-rows] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm sm:text-base leading-7 text-gray-700">{answer}</p>
        </div>
      </div>
    </div>
  );
}

/* =========================
   Main Section
========================= */
export default function FaqSection() {
  const [query, setQuery] = useState("");
  void setQuery;
  const [activeCat, setActiveCat] = useState<Category | "All">("All");
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const categories: (Category | "All")[] = ["All", ...categoryOrder];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((f) => {
      const hitCategory = activeCat === "All" || f.category === activeCat;
      const hitText = !q || f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      return hitCategory && hitText;
    });
  }, [query, activeCat]);

  return (
    <section className="py-10 bg-white" id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center flex flex-col justify-center items-center mb-12 sm:mb-16">
          <span className="inline-flex w-fit items-center gap-2 rounded-full shadow-md border border-indigo-200 bg-indigo-50 px-2 py-1 text-[13px] font-medium text-indigo-700">
            <LuBadgeCheck className="h-4 w-4" />
            Trusted by learners & hiring teams
          </span>
          <h2 className="mt-5 text-4xl font-bold text-blue-700">FAQs</h2>
          <p className="mt-3 max-w-3xl text-center text-base sm:text-lg md:text-xl text-gray-600">
            Everything about our <strong>Manual Testing course</strong>, <strong>QA training</strong>,{" "}
            <strong>ISTQB-aligned syllabus</strong>, projects, and <strong>placement assistance</strong>.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              if (cat === "All") {
                return (
                  <Chip
                    key="All"
                    label="All"
                    active={activeCat === "All"}
                    onClick={() => setActiveCat("All")}
                    meta={{
                      lightBg: "bg-gray-50",
                      text: "text-gray-700",
                      ring: "ring-gray-200",
                      dot: "bg-gray-600",
                      icon: <HelpCircle className="h-4 w-4" />
                    }}
                  />
                );
              }
              const meta = categoryMeta[cat];
              return (
                <Chip
                  key={cat}
                  label={cat}
                  active={activeCat === cat}
                  onClick={() => setActiveCat(cat)}
                  meta={meta}
                />
              );
            })}
          </div>
        </div>

        {/* Stats Row */}
        <div className="mb-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          <StatCard icon={<LuClock className="h-5 w-5" />} label="Evening Cohorts" value="24X7 PM IST" bgColor={DARK_COLORS[6]} />
          <StatCard icon={<LuVideo className="h-5 w-5" />} label="Learning Access" value="Lifetime" bgColor={DARK_COLORS[7]} />
          <StatCard icon={<LuHeadphones className="h-5 w-5" />} label="Doubt Support" value="1:1 & Forums" bgColor={DARK_COLORS[8]} />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filtered.map((item, idx) => {
            const cat = item.category as Category; // Cast safely as we control the data
            return (
              <div key={idx} className="group">
                <div className="mb-3 ml-1 inline-flex items-center gap-2 rounded-full px-2 py-1 shadow-sm text-[12px] font-medium bg-white text-gray-700 ring-2 ring-blue-200">
                  {categoryMeta[cat].icon}
                  <span>{cat}</span>
                </div>
                <FAQItem question={item.question} answer={item.answer} category={cat} />
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
              <p className="text-gray-700 font-medium">No results found.</p>
              <p className="text-gray-500 text-sm mt-1">Try different keywords like “ISTQB”, “fees”, or “projects”.</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-14 rounded-2xl border border-indigo-200 bg-indigo-50 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white p-2 ring-1 ring-indigo-200">
                <LuBadgeCheck className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Still have questions?</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Talk to our admissions team for syllabus, fees, and cohort start dates.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href="contact-us" title="Contact Us" className="inline-flex items-center justify-center rounded-xl border border-indigo-300 bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-100">
                Contact Us
              </Link>
              <button
                onClick={() => setIsEnrollModalOpen(true)}
                title="Apply Now"
                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseName="Manual Testing"
        source="Manual Testing Course Page - FAQ Section - Apply Now"
      />
    </section>
  );
}

/* =========================
   Stat Card
========================= */
function StatCard({ icon, label, value, bgColor }: { icon: React.ReactNode; label: string; value: string; bgColor: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className={`rounded-lg p-2 ${bgColor}`}>
          <div className="text-white">{icon}</div>
        </div>
        <div>
          <p className="text-xs text-gray-500">{label}</p>
          <p className="text-base sm:text-lg font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
