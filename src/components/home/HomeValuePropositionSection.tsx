'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Briefcase, BookOpen, Zap, Trophy, CheckCircle2, XCircle } from 'lucide-react';

/**
 * HomeValuePropositionSection - What Makes CDPL Different
 * 
 * Highlights unique value propositions with comparison table
 * CDPL brand colors and card-based design
 */
export default function HomeValuePropositionSection() {
  const valueProps = [
    {
      icon: Target,
      title: 'Job-Ready Training',
      description: 'Industry-aligned curriculum designed by experts with real-world experience in QA, Data Science, and AI/ML.',
    },
    {
      icon: Users,
      title: 'Live Expert Mentorship',
      description: 'Learn from industry professionals with 10+ years of experience at top companies, not just trainers.',
    },
    {
      icon: Briefcase,
      title: '100% Placement Support',
      description: 'Dedicated placement cell, resume building, mock interviews, and guaranteed interview opportunities.',
    },
    {
      icon: BookOpen,
      title: 'Hands-On Projects',
      description: 'Work on 90+ real-world projects and case studies that you can showcase in your portfolio.',
    },
    {
      icon: Zap,
      title: 'Flexible Learning',
      description: 'Choose between classroom, online live, or hybrid modes. Weekend and weekday batches available.',
    },
    {
      icon: Trophy,
      title: 'Industry Certifications',
      description: 'Get globally recognized certifications like ISTQB, AWS, and more to boost your resume.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-brand rounded-full text-sm font-semibold mb-4">
            Why Choose CDPL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Makes Us <span className="text-brand">Different</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We don&apos;t just train, we transform careers. Here&apos;s how Cinute Digital stands apart from other training institutes.
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-orange-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-brand rounded-xl flex items-center justify-center mb-6">
                <prop.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {prop.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-orange-100"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
            CDPL vs Others
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-4 font-bold text-gray-700">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-brand">CDPL</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-500">Others</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Live Interactive Classes', true, false],
                  ['Industry Expert Trainers (10+ yrs)', true, false],
                  ['90+ Hands-On Projects', true, false],
                  ['100% Placement Support', true, false],
                  ['Lifetime Access & Support', true, false],
                  ['Mock Interviews & Resume Building', true, false],
                  ['ISTQB Certification Prep', true, false],
                  ['Flexible Batch Timings', true, false],
                ].map(([feature, cdpl, others], index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-white/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-gray-800">{feature}</td>
                    <td className="text-center py-4 px-4">
                      {cdpl ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                          <XCircle className="w-5 h-5 text-red-600" />
                        </span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {others ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                          <XCircle className="w-5 h-5 text-red-600" />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <button className="px-8 py-4 bg-brand hover:bg-brand text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Talk to an Advisor
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
