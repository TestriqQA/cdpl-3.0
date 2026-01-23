"use client";
// components/powerbi/FaqSection.tsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import EnrollModal from "../EnrollModal";

import { POWER_BI_FAQS } from "@/data/powerBiData";

type ColorVariant = "blue" | "orange" | "green" | "purple" | "pink";

// Define the interface locally to match the data structure and usage in FaqRow
interface FaqItem {
  question: string;
  answer: string;
  details?: string[];
  emoji: string;
  color: ColorVariant;
  category?: string;
}

const palette: Record<ColorVariant, { bg: string; text: string; ring: string; grad: string }> = {
  blue: { bg: "bg-blue-100", text: "text-blue-700", ring: "ring-blue-200", grad: "from-blue-500/20 to-cyan-500/20" },
  orange: { bg: "bg-orange-100", text: "text-brand", ring: "ring-orange-200", grad: "from-orange-500/20 to-amber-500/20" },
  green: { bg: "bg-green-100", text: "text-green-700", ring: "ring-green-200", grad: "from-emerald-500/20 to-lime-500/20" },
  purple: { bg: "bg-purple-100", text: "text-purple-700", ring: "ring-purple-200", grad: "from-purple-500/20 to-fuchsia-500/20" },
  pink: { bg: "bg-pink-100", text: "text-pink-700", ring: "ring-pink-200", grad: "from-pink-500/20 to-rose-500/20" },
};

function FaqRow({
  item,
  isOpen,
  toggle,
  idx,
}: {
  item: FaqItem;
  isOpen: boolean;
  toggle: () => void;
  idx: number;
}) {
  const c = palette[item.color];
  const panelId = `faq-panel-${idx}`;
  const btnId = `faq-button-${idx}`;

  return (
    <article
      className={[
        "group relative transition-all duration-300",
        "p-[1px] rounded-xl bg-gradient-to-br",
        c.grad,
        "hover:translate-y-[-2px]",
      ].join(" ")}
    >
      <div
        className={[
          "border-b border-gray-200 rounded-xl bg-white",
          "focus-within:ring-2",
          c.ring,
          "shadow-sm",
        ].join(" ")}
      >
        <button
          id={btnId}
          className="flex justify-between cursor-pointer items-center w-full py-4 px-3 md:px-4 text-left"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="flex items-center text-lg font-semibold text-gray-800">
            <span
              className={[
                "mr-3 inline-flex items-center justify-center h-9 w-9 rounded-full text-xl select-none",
                c.bg,
                c.text,
              ].join(" ")}
              aria-hidden="true"
            >
              {item.emoji}
            </span>
            {item.question}
          </span>
          <ChevronDown
            size={22}
            className={`text-gray-500 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <div id={panelId} role="region" aria-labelledby={btnId} className="pb-5 px-3 md:px-4 text-gray-600">
            <p>{item.answer}</p>
            {item.details && item.details.length > 0 && (
              <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-600">
                {item.details.map((d: string, i: number) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Data Analytics & Visualization with Power BI";

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <span className="text-base font-semibold tracking-wider text-brand uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Everything You Need to Know Before Enrolling
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-2.5">
          {(POWER_BI_FAQS as unknown as FaqItem[]).map((item, index) => (
            <FaqRow key={item.question} item={item} isOpen={activeIndex === index} toggle={() => toggleFaq(index)} idx={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="w-full sm:w-auto bg-brand hover:bg-brand text-white font-bold py-5 px-8 my-4 rounded-lg transition-all flex sm:inline-flex min-h-[60px] justify-center items-center cursor-pointer shadow-none"
          >
            Still have questions? Contact Us
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Power BI Course Page - FAQ Section - Contact Us"
        courseName={courseName}
      />
    </section>
  );
};

export default FaqSection;
