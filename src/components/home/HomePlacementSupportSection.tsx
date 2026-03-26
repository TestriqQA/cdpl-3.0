"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Users2, Briefcase, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * HomePlacementSupportSection - Job Assistance
 * 
 * Highlights placement support services with enhanced multi-color UI/UX.
 */
export default function HomePlacementSupportSection() {
  const placementServices = [
    {
      icon: FileCheck,
      title: 'Resume Building',
      description: 'Get your resume reviewed and optimized by industry experts to stand out to recruiters.',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200',
    },
    {
      icon: Users2,
      title: 'Mock Interviews',
      description: 'Practice with real interview scenarios and get feedback to improve your performance.',
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
    },
    {
      icon: Briefcase,
      title: 'Job Referrals',
      description: 'Direct referrals to our 50+ hiring partners across India for guaranteed interviews.',
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      border: 'border-rose-200',
    },
    {
      icon: TrendingUp,
      title: 'Career Guidance',
      description: 'One-on-one career counseling to help you choose the right path and companies.',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
    },
  ];

  const placementStats = [
    { number: '500+', label: 'Learners Placed', gradient: 'from-indigo-500 to-blue-600', icon: '👨‍💼' },
    { number: '1.5×', label: 'Avg Package Growth', gradient: 'from-green-500 to-emerald-600', icon: '📈' },
    { number: '50+', label: 'Cities Covered', gradient: 'from-rose-500 to-pink-600', icon: '🌍' },
    { number: '50+', label: 'Hiring Partners', gradient: 'from-amber-500 to-brand', icon: '🤝' },
  ];

  const placementProcess = [
    { title: 'Profile Building', desc: 'Resume, LinkedIn, Portfolio' },
    { title: 'Skill Assessment', desc: 'Mock tests & evaluations' },
    { title: 'Interview Prep', desc: 'Mock interviews & feedback' },
    { title: 'Job Matching', desc: 'Match with hiring partners' },
    { title: 'Offer Support', desc: 'Salary negotiation help' },
  ];

  return (
    <section className="py-6 lg:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
            100% Placement Support
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            We Don&apos;t Stop at <span className="text-indigo-600">Training</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our dedicated placement cell works tirelessly to ensure you land your dream job with comprehensive support at every step.
          </p>
        </motion.div>

        {/* Placement Services - Multi-Color Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {placementServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border ${service.border} ${service.bg} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 ${service.color} ${service.bg} rounded-xl flex items-center justify-center mb-4 border ${service.border}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Placement Stats - Gradient Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {placementStats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.gradient} rounded-2xl p-6 text-center text-white shadow-xl transform hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm md:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Placement Process - Enhanced Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-inner border border-gray-100"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
            Our 5-Step Placement Process
          </h3>

          <div className="grid md:grid-cols-5 gap-6">
            {placementProcess.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector - Enhanced with color */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-indigo-300 -z-10"></div>
                )}

                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3 shadow-md">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/jobs/placements" // Assuming a placements page exists
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>View All Success Stories</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
