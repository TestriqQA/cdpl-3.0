"use client";
// components/powerbi/CareerSection.tsx
import React, { useState } from "react";
import CareerSessionModal from "../CareerSessionModal";

type ColorVariant =
  | "blue"
  | "orange"
  | "green"
  | "purple"
  | "pink"
  | "indigo"
  | "amber"
  | "teal";

interface RoleCardProps {
  title: string;
  emoji: string;
  color: ColorVariant;
}

const palette: Record<
  ColorVariant,
  { bg: string; text: string; ring: string; grad: string }
> = {
  blue: { bg: "bg-blue-100", text: "text-blue-700", ring: "ring-blue-200", grad: "from-blue-500/20 to-cyan-500/20" },
  orange: { bg: "bg-orange-100", text: "text-orange-700", ring: "ring-orange-200", grad: "from-orange-500/20 to-amber-500/20" },
  green: { bg: "bg-green-100", text: "text-green-700", ring: "ring-green-200", grad: "from-emerald-500/20 to-lime-500/20" },
  purple: { bg: "bg-purple-100", text: "text-purple-700", ring: "ring-purple-200", grad: "from-purple-500/20 to-fuchsia-500/20" },
  pink: { bg: "bg-pink-100", text: "text-pink-700", ring: "ring-pink-200", grad: "from-pink-500/20 to-rose-500/20" },
  indigo: { bg: "bg-indigo-100", text: "text-indigo-700", ring: "ring-indigo-200", grad: "from-indigo-500/20 to-violet-500/20" },
  amber: { bg: "bg-amber-100", text: "text-amber-700", ring: "ring-amber-200", grad: "from-amber-500/20 to-yellow-500/20" },
  teal: { bg: "bg-teal-100", text: "text-teal-700", ring: "ring-teal-200", grad: "from-teal-500/20 to-cyan-500/20" },
};

const RoleCard: React.FC<RoleCardProps> = ({ title, emoji, color }) => {
  const c = palette[color];

  return (
    <article
      className={[
        "group relative rounded-2xl transition-all duration-300",
        "p-[1px] bg-gradient-to-br", c.grad,
        "hover:-translate-y-1",
      ].join(" ")}
      aria-labelledby={`role-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div
        className={[
          "flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100",
          "hover:shadow-lg focus-within:ring-2", c.ring, "transition-all duration-300",
        ].join(" ")}
      >
        <div className={`p-4 rounded-full mb-4 ${c.bg} ${c.text} text-3xl`} aria-hidden="true">
          {emoji}
        </div>
        <h3
          id={`role-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-lg sm:text-xl font-bold text-gray-900 text-center"
        >
          {title}
        </h3>
      </div>
    </article>
  );
};

const CareerSection: React.FC = () => {
  const [isCareerSessionOpen, setIsCareerSessionOpen] = useState(false);
  const courseName = "Data Analytics & Visualization with Power BI";

  const jobRoles: RoleCardProps[] = [
    { title: "Power BI Analyst", emoji: "📊", color: "blue" },
    { title: "Business Intelligence Analyst", emoji: "📈", color: "orange" },
    { title: "Data Analyst", emoji: "🧮", color: "green" },
    { title: "Financial Analyst", emoji: "💹", color: "purple" },
    { title: "Operations Analyst", emoji: "🏭", color: "pink" },
    { title: "Supply Chain Analyst", emoji: "🚚", color: "indigo" },
    { title: "Sales Analyst", emoji: "💰", color: "amber" },
    { title: "Marketing Analyst", emoji: "📣", color: "teal" },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-semibold tracking-wider text-[#c2410c] uppercase">
            Career Opportunities
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Know Your Future: Job Roles After Certification
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Become a market-ready Power BI expert qualified for high-demand roles across various industries.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
          {jobRoles.map((role) => (
            <RoleCard key={role.title} {...role} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsCareerSessionOpen(true)}
            className="w-full sm:w-auto bg-[#c2410c] hover:bg-[#9a3412] text-white font-bold py-5 px-8 my-4 rounded-lg transition-all flex sm:inline-flex min-h-[60px] justify-center items-center cursor-pointer shadow-none"
          >
            Book a Free Career Session
          </button>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerSessionOpen}
        onClose={() => setIsCareerSessionOpen(false)}
        source="Power BI Course Page - Career Section - Career Session"
        courseName={courseName}
      />
    </section>
  );
};

export default CareerSection;
