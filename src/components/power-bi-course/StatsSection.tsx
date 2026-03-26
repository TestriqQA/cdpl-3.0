"use client";
// components/powerbi/StatsSection.tsx
import React, { useState } from "react";
import {
  DollarSign,
  Briefcase,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";
import CareerSessionModal from "../CareerSessionModal";

interface StatCardProps {
  value: string;
  label: string;
  icon: LucideIcon; // 👈 accept the component, not a ReactNode
  color: string;    // hex like "#3b82f6"
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon: Icon, color }) => {
  // soft background behind the icon, based on known palette
  const bgClass =
    color === "#3b82f6"
      ? "bg-blue-100"
      : color === "#10b981"
        ? "bg-green-100"
        : color === "#f97316"
          ? "bg-orange-100"
          : "bg-purple-100";

  return (
    <div
      className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl border-t-4"
      style={{ borderColor: color }}
    >
      <div className={`p-3 rounded-full mb-4 ${bgClass}`}>
        {/* Lucide icons accept size/className/style; TS-safe now */}
        <Icon size={32} style={{ color }} />
      </div>
      <p className="text-4xl font-extrabold text-gray-900 mb-2">{value}</p>
      <p className="text-lg font-medium text-gray-700 text-center">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const [isCareerSessionOpen, setIsCareerSessionOpen] = useState(false);
  const courseName = "Data Analytics & Visualization with Power BI";

  const statsData: StatCardProps[] = [
    {
      value: "101,000+",
      label: "Job Vacancies for BI/Data Analysts in India",
      icon: Briefcase,
      color: "#3b82f6", // Blue
    },
    {
      value: "25%",
      label: "Projected Market Growth (2020-2030)",
      icon: TrendingUp,
      color: "#10b981", // Green
    },
    {
      value: "4 LPA",
      label: "Power BI Analyst Freshers’ Average Salary",
      icon: DollarSign,
      color: "#f97316", // Orange
    },
    {
      value: "75%",
      label: "High Job Satisfaction Rate in Data Roles",
      icon: Zap,
      color: "#8b5cf6", // Violet
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-semibold tracking-wider text-blue-600 uppercase">
            Career Potential
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Is Power BI in Demand? Explore the Career Growth Stats
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            The demand for skilled <strong>Power BI Developers</strong> is soaring across Mumbai's corporate landscape. Invest in the best <strong>Power BI training</strong> that guarantees career growth and high returns.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsCareerSessionOpen(true)}
            className="w-full sm:w-auto bg-brand hover:bg-brand text-white font-bold py-5 px-8 my-4 rounded-lg transition-all flex sm:inline-flex min-h-[60px] justify-center items-center cursor-pointer shadow-none"
          >
            Book a Free Career Session
          </button>
        </div>
      </div>

      <CareerSessionModal
        isOpen={isCareerSessionOpen}
        onClose={() => setIsCareerSessionOpen(false)}
        source="Power BI Course Page - Stats Section - Career Session"
        courseName={courseName}
      />
    </section>
  );
};

export default StatsSection;
