// Server Component. framer-motion (decorative whileInView fades only) was the
// sole reason for "use client"; the hover lift is already CSS on the card.
import React from 'react';
import { CheckCircle2, Award, Users, Briefcase, Clock, Globe, HeadphonesIcon, TrendingUp } from 'lucide-react';

/**
 * HomeWhyChooseSection - Unique Benefits
 * 
 * Highlights why students should choose CDPL with enhanced UI/UX,
 * multiple engaging colors, and proper responsiveness.
 */

// Define a color palette for the cards
const colorPalette = [
  {
    bg: 'bg-brand',
    text: 'text-brand',
    ring: 'ring-orange-500',
    hoverBorder: 'hover:border-orange-300',
  },
  {
    bg: 'bg-blue-600',
    text: 'text-blue-600',
    ring: 'ring-blue-500',
    hoverBorder: 'hover:border-blue-300',
  },
  {
    bg: 'bg-green-600',
    text: 'text-green-600',
    ring: 'ring-green-500',
    hoverBorder: 'hover:border-green-300',
  },
  {
    bg: 'bg-purple-600',
    text: 'text-purple-600',
    ring: 'ring-purple-500',
    hoverBorder: 'hover:border-purple-300',
  },
  {
    bg: 'bg-red-600',
    text: 'text-red-600',
    ring: 'ring-red-500',
    hoverBorder: 'hover:border-red-300',
  },
  {
    bg: 'bg-yellow-500',
    text: 'text-yellow-600',
    ring: 'ring-yellow-500',
    hoverBorder: 'hover:border-yellow-300',
  },
  {
    bg: 'bg-pink-600',
    text: 'text-pink-600',
    ring: 'ring-pink-500',
    hoverBorder: 'hover:border-pink-300',
  },
  {
    bg: 'bg-cyan-600',
    text: 'text-cyan-600',
    ring: 'ring-cyan-500',
    hoverBorder: 'hover:border-cyan-300',
  },
];

export default function HomeWhyChooseSection() {
  const benefits = [
    {
      icon: Award,
      title: 'Industry Expert Trainers',
      description: 'Learn from professionals with extensive experience at top companies like Google, Microsoft, and Amazon.',
    },
    {
      icon: Users,
      title: 'Small Batch Sizes',
      description: 'Maximum 15-20 students per batch ensuring personalized attention and better learning outcomes.',
    },
    {
      icon: Briefcase,
      title: 'Job Assistance',
      description: 'Interview opportunities with our hiring partner network and dedicated placement support.',
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Choose from weekday, weekend, or fast-track batches that fit your schedule perfectly.',
    },
    {
      icon: Globe,
      title: 'Online & Offline',
      description: 'Attend classes from anywhere with our live online sessions or join our classroom training.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Lifetime Support',
      description: '24/7 doubt resolution, career guidance, and access to learning materials even after course completion.',
    },
    {
      icon: TrendingUp,
      title: 'Real-World Projects',
      description: 'Work on 90+ industry-standard projects to build a portfolio that impresses recruiters.',
    },
    {
      icon: CheckCircle2,
      title: 'Globally Recognized Certification',
      description: 'Get certifications like ISTQB, AWS, and course completion certificates to boost your global career prospects.',
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50" aria-labelledby="why-choose-cdpl-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
            Your Career Advantage
          </span>
          <h2 id="why-choose-cdpl-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Why <span className="text-brand">Choose CDPL</span> for Your Future?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are committed to transforming your career with a unique blend of expert-led training, personalized support, and placement assistance.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => {
            const color = colorPalette[index % colorPalette.length];
            return (
              <div
                key={index}
                className="group"
              >
                {/* Card */}
                <div className={`
                  bg-white rounded-2xl p-6 shadow-sm
                  border border-slate-200 ${color.hoverBorder}
                  transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1 h-full
                  flex flex-col
                `}>
                  {/* Icon and heading side by side */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`
                      w-11 h-11 ${color.bg} rounded-xl shrink-0
                      flex items-center justify-center
                      shadow-md
                    `}>
                      <benefit.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-lg font-bold leading-snug text-gray-900">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed flex-grow">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
