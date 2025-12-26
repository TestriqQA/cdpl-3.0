"use client";
// components/powerbi/WhyBIProgram.tsx
import React, { useState } from 'react';
import {
  Target,
  UserCheck,
  Globe,
  Briefcase,
  Clock,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import EnrollModal from "../EnrollModal";

type ColorVariant = 'blue' | 'orange' | 'green' | 'purple' | 'pink' | 'indigo';

interface AdvantageCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  color: ColorVariant;
}

const colorClasses: Record<
  ColorVariant,
  { bg: string; text: string; ring: string; grad: string; glow: string }
> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', ring: 'ring-blue-200', grad: 'from-blue-500/20 to-cyan-500/20', glow: 'group-hover:shadow-blue-200' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', ring: 'ring-orange-200', grad: 'from-orange-500/20 to-amber-500/20', glow: 'group-hover:shadow-orange-200' },
  green: { bg: 'bg-green-100', text: 'text-green-600', ring: 'ring-green-200', grad: 'from-emerald-500/20 to-lime-500/20', glow: 'group-hover:shadow-green-200' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', ring: 'ring-purple-200', grad: 'from-purple-500/20 to-fuchsia-500/20', glow: 'group-hover:shadow-purple-200' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-600', ring: 'ring-pink-200', grad: 'from-pink-500/20 to-rose-500/20', glow: 'group-hover:shadow-pink-200' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', ring: 'ring-indigo-200', grad: 'from-indigo-500/20 to-violet-500/20', glow: 'group-hover:shadow-indigo-200' },
};

const AdvantageCard: React.FC<AdvantageCardProps> = ({ Icon, title, description, color }) => {
  const palette = colorClasses[color];

  return (
    <article
      className={[
        'group relative rounded-2xl transition-all duration-300',
        // gradient frame wrapper
        'p-[1px] bg-gradient-to-br', palette.grad,
        'hover:translate-y-[-4px]',
      ].join(' ')}
      aria-labelledby={`adv-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {/* inner card */}
      <div
        className={[
          'h-full w-full rounded-2xl bg-white',
          'border border-gray-100 shadow-sm',
          'hover:shadow-lg', palette.glow,
          'focus-within:ring-2', palette.ring,
          'transition-all duration-300',
        ].join(' ')}
      >
        {/* decorative soft glow */}
        <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rounded-full blur-3xl opacity-40 bg-gradient-to-br from-transparent via-white to-transparent" />

        <div className="p-6">
          <div className={`flex-shrink-0 p-3 w-fit rounded-xl ${palette.bg} ${palette.text} ring-1 ring-white/40`}>
            <Icon size={28} aria-hidden="true" />
          </div>

          <div className="mt-3 flex-1">
            <div className="flex items-start justify-between">
              <h3
                id={`adv-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
                className="text-lg md:text-xl font-semibold text-gray-900"
              >
                {title}
              </h3>

              {/* subtle badge for engagement */}
              <span className="ml-3 inline-flex items-center rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-200">
                Included
              </span>
            </div>

            <p className="mt-2 text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* interactive footer */}
            <div className="mt-4 flex items-center gap-3 text-sm">
              <span className="h-1 w-16 rounded-full bg-gradient-to-r from-gray-200 to-transparent group-hover:from-gray-300 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const WhyBIProgram: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Data Analytics & Visualization with Power BI";

  // Assign DISTINCT colors per card (no repeats)
  const advantages: AdvantageCardProps[] = [
    {
      Icon: Target,
      title: '80:20 Practical Approach',
      description:
        'Our curriculum is 80% practical, hands-on projects and 20% theory, ensuring you gain industry-rich, job-ready experience.',
      color: 'blue',
    },
    {
      Icon: UserCheck,
      title: '1:1 Doubt Solving Sessions',
      description:
        'Personalized, one-on-one doubt resolution ensures every concept is clear, no matter how complex or simple.',
      color: 'orange',
    },
    {
      Icon: Globe,
      title: 'Globally Recognized Certification',
      description:
        'Receive an internationally recognized certificate from our training partner, validated with a unique QR code.',
      color: 'green',
    },
    {
      Icon: Briefcase,
      title: '100% Dedicated Job Assistance',
      description:
        'Comprehensive career support including resume building, profile optimization (LinkedIn, Naukri), and tailored interview preparation.',
      color: 'purple',
    },
    {
      Icon: Clock,
      title: '14+ Years of Industry Expertise',
      description:
        'Learn from seasoned data analysts and industry veterans with over a decade of real-world experience.',
      color: 'pink',
    },
    {
      Icon: Zap,
      title: 'Hybrid Learning Model',
      description:
        'Benefit from a flexible CLASSROOM + ONLINE model with live-streamed sessions and access to all recorded lectures.',
      color: 'indigo',
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm md:text-base font-semibold tracking-wider text-orange-600 uppercase">
            Program Advantages
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose Our Power BI Certification Program?
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
            We bridge the gap between academic learning and industry demands with a focus on practical, high-quality training.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv) => (
            <AdvantageCard key={adv.title} {...adv} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsEnrollOpen(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Power BI Course Page - Why BI Program - Start Journey"
        courseName={courseName}
      />
    </section>
  );
};

export default WhyBIProgram;
