'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Briefcase, GraduationCap } from 'lucide-react';

// Define proper types instead of 'any'
interface StatItem {
  icon: React.ComponentType<{ className?: string }>;
  end: number;
  suffix: string;
  label: string;
  color: string;
  index: number;
}

/**
 * HomeStatsSection - Animated Counters
 * 
 * Shows key metrics with animated counters
 * CDPL brand with gradient backgrounds
 */
export default function HomeStatsSection() {
  const stats = [
    {
      icon: Users,
      end: 5000,
      suffix: '+',
      label: 'Happy Learners',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Briefcase,
      end: 500,
      suffix: '+',
      label: 'Students Placed',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Award,
      end: 50,
      suffix: '+',
      label: 'Hiring Partners',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: GraduationCap,
      end: 90,
      suffix: '+',
      label: 'Real Projects',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Numbers That <span className="text-orange-400">Speak</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Since 2015, we&apos;ve been transforming careers and building futures. Here&apos;s our journey in numbers.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-gray-300 mb-6">
            Join thousands of successful professionals who transformed their careers with CDPL
          </p>
          <button className="px-8 py-4 bg-orange-700 hover:bg-orange-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Animated Counter Component
function StatCard({ icon: Icon, end, suffix, label, color, index }: StatItem) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty deps — runs once

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end]); // Dependencies are correct

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="relative group"
    >
      <div className={`bg-gradient-to-br ${color} rounded-2xl p-8 shadow-2xl border border-white/10 hover:border-white/30 transition-all duration-300`}>
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Counter */}
        <div className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-white mb-2">
            {count}{suffix}
          </div>
          <div className="text-sm md:text-base text-white/90 font-medium">
            {label}
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
}