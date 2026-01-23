"use client";
// components/powerbi/WhoShouldEnroll.tsx
import React, { useState } from "react";
import EnrollModal from "../EnrollModal";

type ColorVariant = "blue" | "orange" | "green" | "purple";

interface AudienceCardProps {
  title: string;
  description: string;
  emoji: string;
  color: ColorVariant;
}

const palette: Record<
  ColorVariant,
  { bg: string; text: string; ring: string; grad: string }
> = {
  blue: { bg: "bg-blue-100", text: "text-blue-700", ring: "ring-blue-200", grad: "from-blue-500/20 to-cyan-500/20" },
  orange: { bg: "bg-orange-100", text: "text-brand", ring: "ring-orange-200", grad: "from-orange-500/20 to-amber-500/20" },
  green: { bg: "bg-green-100", text: "text-green-700", ring: "ring-green-200", grad: "from-emerald-500/20 to-lime-500/20" },
  purple: { bg: "bg-purple-100", text: "text-purple-700", ring: "ring-purple-200", grad: "from-purple-500/20 to-fuchsia-500/20" },
};

const AudienceCard: React.FC<AudienceCardProps> = ({ title, description, emoji, color }) => {
  const c = palette[color];

  return (
    <article
      className={[
        "group relative rounded-2xl transition-all duration-300",
        "p-[1px] bg-gradient-to-br", c.grad,
        "hover:-translate-y-1",
      ].join(" ")}
      aria-labelledby={`aud-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div
        className={[
          "flex flex-col p-6 bg-white rounded-2xl shadow-sm border border-gray-100",
          "hover:shadow-lg focus-within:ring-2", c.ring, "transition-all duration-300",
        ].join(" ")}
      >
        <div className={`p-3 w-fit rounded-full ${c.bg} ${c.text} mb-4 text-2xl`} aria-hidden="true">
          {emoji}
        </div>
        <h3 id={`aud-${title.replace(/\s+/g, "-").toLowerCase()}`} className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </article>
  );
};

const WhoShouldEnroll: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Data Analytics & Visualization with Power BI";

  const audience: AudienceCardProps[] = [
    {
      title: "Beginners & Career Changers",
      description:
        "Individuals with no prior programming or BI experience, looking to start a lucrative career in data analytics.",
      emoji: "🌱",
      color: "blue",
    },
    {
      title: "Business & Financial Analysts",
      description:
        "Professionals who need to move beyond Excel to create dynamic, interactive reports and dashboards for strategic decision-making.",
      emoji: "💼",
      color: "orange",
    },
    {
      title: "Marketing & Sales Professionals",
      description:
        "Those who want to analyze campaign performance, customer behavior, and sales trends to drive revenue growth.",
      emoji: "📣",
      color: "green",
    },
    {
      title: "HR & Operations Managers",
      description:
        "Managers in HR, Healthcare, or Manufacturing who rely on data-driven decisions for resource allocation and process optimization.",
      emoji: "🏭",
      color: "purple",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-semibold tracking-wider text-blue-600 uppercase">
            Target Audience
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Who Will Benefit Most from This Course?
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            This program is designed for both technical and non-technical learners across various professional backgrounds.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((item) => (
            <AudienceCard key={item.title} {...item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="w-full sm:w-auto bg-brand hover:bg-brand text-white font-bold py-5 px-8 my-4 rounded-lg transition-all flex sm:inline-flex min-h-[60px] justify-center items-center cursor-pointer shadow-none"
          >
            Enroll Now
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Power BI Course Page - Who Should Enroll - Enroll Now"
        courseName={courseName}
      />
    </section>
  );
};

export default WhoShouldEnroll;
