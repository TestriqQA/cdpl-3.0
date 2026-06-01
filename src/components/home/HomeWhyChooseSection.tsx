'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
    bg: 'bg-gradient-to-br from-orange-500 to-brand',
    text: 'text-brand',
    ring: 'ring-orange-500',
    hoverBorder: 'hover:border-orange-300',
  },
  {
    bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
    text: 'text-blue-600',
    ring: 'ring-blue-500',
    hoverBorder: 'hover:border-blue-300',
  },
  {
    bg: 'bg-gradient-to-br from-green-500 to-green-600',
    text: 'text-green-600',
    ring: 'ring-green-500',
    hoverBorder: 'hover:border-green-300',
  },
  {
    bg: 'bg-gradient-to-br from-purple-500 to-purple-600',
    text: 'text-purple-600',
    ring: 'ring-purple-500',
    hoverBorder: 'hover:border-purple-300',
  },
  {
    bg: 'bg-gradient-to-br from-red-500 to-red-600',
    text: 'text-red-600',
    ring: 'ring-red-500',
    hoverBorder: 'hover:border-red-300',
  },
  {
    bg: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
    text: 'text-yellow-600',
    ring: 'ring-yellow-500',
    hoverBorder: 'hover:border-yellow-300',
  },
  {
    bg: 'bg-gradient-to-br from-pink-500 to-pink-600',
    text: 'text-pink-600',
    ring: 'ring-pink-500',
    hoverBorder: 'hover:border-pink-300',
  },
  {
    bg: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
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
      description: 'Interview opportunities with our our hiring partner network and dedicated placement support.',
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
    <section className=" py-6 lg:py-10 bg-gray-50" aria-labelledby="why-choose-cdpl-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Enhanced for SEO and Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-brand rounded-full text-sm font-semibold tracking-wider mb-3">
            Your Career Advantage
          </span>
          <h2 id="why-choose-cdpl-heading" className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Why <span className="text-brand">Choose CDPL</span> for Your Future?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
            We are committed to transforming your career with a unique blend of expert-led training, personalized support, and placement assistance.
          </p>
        </motion.div>

        {/* Benefits Grid - Improved Responsiveness and Visuals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const color = colorPalette[index % colorPalette.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group"
              >
                {/* Card */}
                <div className={`
                  bg-white rounded-3xl p-6 shadow-xl 
                  border-2 border-transparent ${color.hoverBorder} 
                  transition-all duration-500 ease-in-out 
                  hover:shadow-2xl hover:-translate-y-2 h-full
                  flex flex-col
                `}>
                  {/* Icon Container */}
                  <div className={`
                    w-16 h-16 ${color.bg} rounded-xl 
                    flex items-center justify-center mb-4 
                    shadow-lg transition-transform duration-500
                    group-hover:rotate-6
                  `}>
                    <benefit.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 ${color.text}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed flex-grow">
                    {benefit.description}
                  </p>

                  {/* Visual Accent on Hover */}
                  <div className={`
                    mt-4 text-sm font-semibold 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300
                    ${color.text}
                  `}>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
