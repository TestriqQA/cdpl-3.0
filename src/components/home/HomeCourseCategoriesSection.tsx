'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Database, Code, Cloud, Smartphone, BarChart } from 'lucide-react';
import Link from 'next/link';

/**
 * HomeCourseCategoriesSection - Visual Grid
 * 
 * Shows course categories with icons
 * CDPL brand with interactive hover effects
 */
export default function HomeCourseCategoriesSection() {
  const categories = [
    {
      icon: Bug,
      title: 'Software Testing',
      description: 'Manual & Automation Testing, ISTQB Certification',
      courses: '6 Courses',
      color: 'from-blue-500 to-blue-600',
      link: '/courses/software-testing',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Python, ML, AI, Data Analytics & Visualization',
      courses: '4 Courses',
      color: 'from-purple-500 to-purple-600',
      link: '/courses/data-science',
    },
    {
      icon: Code,
      title: 'Automation',
      description: 'Selenium, Playwright, API Testing, CI/CD',
      courses: '5 Courses',
      color: 'from-orange-500 to-orange-600',
      link: '/courses/automation',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS, Azure, Docker, Kubernetes, Jenkins',
      courses: '3 Courses',
      color: 'from-green-500 to-green-600',
      link: '/courses/cloud-devops',
    },
    {
      icon: Smartphone,
      title: 'Mobile Testing',
      description: 'Android, iOS, Appium, Mobile Automation',
      courses: '2 Courses',
      color: 'from-pink-500 to-pink-600',
      link: '/courses/mobile-testing',
    },
    {
      icon: BarChart,
      title: 'Performance Testing',
      description: 'JMeter, LoadRunner, Performance Optimization',
      courses: '2 Courses',
      color: 'from-red-500 to-red-600',
      link: '/courses/performance-testing',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
            Course Categories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-orange-700">Training Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From software testing to data science, we offer comprehensive training programs designed to make you industry-ready.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={category.link}>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 group-hover:text-white/90 mb-4 transition-colors duration-300">
                      {category.description}
                    </p>

                    {/* Courses Count */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-orange-700 group-hover:text-white transition-colors duration-300">
                        {category.courses}
                      </span>
                      <svg
                        className="w-6 h-6 text-orange-700 group-hover:text-white transform group-hover:translate-x-2 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-700 hover:bg-orange-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <span>View All Courses</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
