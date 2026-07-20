'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Video, FileText, Code, Users, Award, Headphones } from 'lucide-react';

/**
 * HomeLearningExperienceSection - How We Train
 * 
 * Shows the learning methodology and experience
 * CDPL brand with interactive cards
 */
export default function HomeLearningExperienceSection() {
  const features = [
    {
      icon: Video,
      title: 'Live Interactive Classes',
      description: 'Attend live sessions with industry experts, ask questions in real-time, and collaborate with peers.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Code,
      title: 'Hands-On Projects',
      description: '90+ real-world projects across different domains to build your portfolio and gain practical experience.',
      color: 'from-orange-500 to-brand',
    },
    {
      icon: FileText,
      title: 'Comprehensive Materials',
      description: 'Access to detailed study materials, recorded sessions, and lifetime learning resources.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: '1:1 Mentorship',
      description: 'Personal guidance from mentors with extensive industry experience at top companies.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Prepare for globally recognized certifications like ISTQB, AWS, and more with expert guidance.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Headphones,
      title: 'Lifetime Support',
      description: '24/7 doubt resolution, career guidance, and placement assistance even after course completion.',
      color: 'from-indigo-500 to-indigo-600',
    },
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
          <span className="inline-block px-4 py-2 bg-orange-100 text-brand rounded-full text-sm font-semibold mb-4">
            Learning Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Make You <span className="text-brand">Job-Ready</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven methodology combines live training, hands-on projects, and expert mentorship to ensure you&apos;re ready for the industry from day one.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="relative text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
