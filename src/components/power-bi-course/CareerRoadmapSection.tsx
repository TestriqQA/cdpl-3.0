"use client";
// components/powerbi/CareerRoadmapSection.tsx
import React, { useState } from 'react';
import {
  UserPlus,
  BookOpen,
  Code,
  CheckCircle,
  Briefcase,
  TrendingUp,
  type LucideIcon,
  ArrowRight,
} from 'lucide-react';
import EnrollModal from "../EnrollModal";

type ColorVariant = 'blue' | 'orange' | 'green' | 'purple' | 'pink' | 'indigo';

interface Step {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;     // use the component type, not a ReactNode
  color: ColorVariant;
}

const palette: Record<
  ColorVariant,
  { bg: string; text: string; ring: string; grad: string; dot: string }
> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', ring: 'ring-blue-200', grad: 'from-blue-500/20 to-cyan-500/20', dot: 'bg-blue-600' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', ring: 'ring-orange-200', grad: 'from-orange-500/20 to-amber-500/20', dot: 'bg-orange-600' },
  green: { bg: 'bg-green-100', text: 'text-green-600', ring: 'ring-green-200', grad: 'from-emerald-500/20 to-lime-500/20', dot: 'bg-green-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', ring: 'ring-purple-200', grad: 'from-purple-500/20 to-fuchsia-500/20', dot: 'bg-purple-600' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-600', ring: 'ring-pink-200', grad: 'from-pink-500/20 to-rose-500/20', dot: 'bg-pink-600' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', ring: 'ring-indigo-200', grad: 'from-indigo-500/20 to-violet-500/20', dot: 'bg-indigo-600' },
};

// 6 distinct colors for 6 steps (no repeats)
const colorOrder: ColorVariant[] = ['blue', 'orange', 'green', 'purple', 'pink', 'indigo'];

const roadmapSteps: Step[] = [
  {
    id: 1,
    title: 'You Enquire',
    description:
      'Start your journey by requesting the syllabus and a free consultation to understand the program details.',
    Icon: UserPlus,
    color: colorOrder[0],
  },
  {
    id: 2,
    title: 'You Enroll',
    description:
      'Secure your spot in the next batch and gain immediate access to pre-course materials and the learning platform.',
    Icon: BookOpen,
    color: colorOrder[1],
  },
  {
    id: 3,
    title: 'Extensive Training',
    description:
      'Complete the 10 modules, mastering Power BI Desktop, DAX, Power Query, and advanced visualization techniques.',
    Icon: Code,
    color: colorOrder[2],
  },
  {
    id: 4,
    title: 'Projects & Assignments',
    description:
      'Apply your knowledge through real-time projects and assignments, building a robust, industry-ready portfolio.',
    Icon: CheckCircle,
    color: colorOrder[3],
  },
  {
    id: 5,
    title: 'Job Readiness & Placement',
    description:
      'Benefit from resume optimization, interview prep, and 100% job assistance to connect with top hiring companies.',
    Icon: Briefcase,
    color: colorOrder[4],
  },
  {
    id: 6,
    title: 'Become a Power BI Analyst',
    description:
      'Successfully transition into a high-paying, in-demand role as a certified Power BI expert.',
    Icon: TrendingUp,
    color: colorOrder[5],
  },
];

const CareerRoadmapSection: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Data Analytics & Visualization with Power BI";

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-semibold tracking-wider text-blue-600 uppercase">
            Your Success Path
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            The 6-Step Career Roadmap to Power BI Mastery
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            Follow our proven learning path designed to take you from beginner to a market-ready professional in just 20 hours.
          </p>
        </div>

        <div className="relative flex flex-col items-center">
          {/* Central vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-px bg-gray-200 rounded-full" />

          {roadmapSteps.map((step, index) => {
            const alignLeft = index % 2 === 0; // alternate cards left/right on md+
            const colors = palette[step.color];

            return (
              <div
                key={step.id}
                className={`flex w-full ${alignLeft ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 md:mb-16`}
              >
                {/* Card side */}
                <div className={`md:w-1/2 ${alignLeft ? 'flex justify-end md:pr-12' : 'flex justify-start md:pl-12'}`}>
                  <article
                    className={[
                      'group relative rounded-2xl transition-all duration-300 w-full max-w-md',
                      'p-[1px] bg-gradient-to-br', colors.grad,
                      'hover:-translate-y-1',
                    ].join(' ')}
                    aria-labelledby={`step-title-${step.id}`}
                  >
                    <div
                      className={[
                        'rounded-2xl bg-white border border-gray-100 shadow-sm',
                        'hover:shadow-lg focus-within:ring-2', colors.ring,
                        'transition-all duration-300',
                      ].join(' ')}
                    >
                      <div className="flex p-6">
                        <div className={`flex-shrink-0 p-3 h-fit rounded-xl ${colors.bg} ${colors.text} ring-1 ring-white/40`}>
                          <step.Icon size={28} aria-hidden="true" />
                        </div>

                        <div className={`ml-4 ${alignLeft ? 'md:text-right' : 'md:text-left'} flex-1`}>
                          <h3
                            id={`step-title-${step.id}`}
                            className="text-xl font-semibold text-gray-900"
                          >
                            {step.title}
                          </h3>
                          <p className="mt-2 text-gray-600 leading-relaxed">{step.description}</p>

                          <div className={`mt-4 flex ${alignLeft ? 'justify-end' : 'justify-start'}`}>
                            <span className={`inline-block h-1 w-20 rounded-full bg-gradient-to-r from-gray-200 to-transparent`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>

                {/* Connector dot on the center line */}
                <div className="hidden md:flex w-0 items-center justify-center relative">
                  <div
                    className={[
                      'absolute w-10 h-10 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold z-10',
                      colors.dot,
                    ].join(' ')}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Spacer side */}
                <div className="md:w-1/2" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
          >
            Start Your Roadmap
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Power BI Course Page - Career Roadmap - Start Roadmap"
        courseName={courseName}
      />
    </section>
  );
};

export default CareerRoadmapSection;
