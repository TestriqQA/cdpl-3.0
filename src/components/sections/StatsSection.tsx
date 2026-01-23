"use client";

import { useEffect, useState, useRef } from "react";
import { Users, Building2, TrendingUp, Award, Clock, Globe } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  description: string;
  color: string;
}

const StatCard = ({ icon, value, suffix = "", label, description, color }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const element = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep));
      } else {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
    >
      {/* Decorative gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

      <div className="relative z-10">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${color} mb-4 group-hover:scale-110 transition-transform duration-500`}>
          <div className="text-white">
            {icon}
          </div>
        </div>

        {/* Number */}
        <div className="space-y-2">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl lg:text-5xl font-bold text-gray-900">
              {count.toLocaleString()}
            </span>
            <span className="text-2xl lg:text-3xl font-bold text-gray-900">
              {suffix}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>

      {/* Hover effect border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}></div>
    </div>
  );
};

const StatsSection = () => {
  const stats: StatCardProps[] = [
    {
      icon: <Users className="w-7 h-7" />,
      value: 5000,
      suffix: "+",
      label: "Students Trained",
      description: "Across all our programs",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      value: 50,
      suffix: "+",
      label: "Hiring Partners",
      description: "Top companies worldwide",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      value: 12,
      suffix: " LPA",
      label: "Highest Package",
      description: "Achieved by our students",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Award className="w-7 h-7" />,
      value: 92,
      suffix: "%",
      label: "Placement Rate",
      description: "Within 6 months of completion",
      color: "from-orange-500 to-brand",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      value: 50000,
      suffix: "+",
      label: "Training Hours",
      description: "Delivered successfully",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: <Globe className="w-7 h-7" />,
      value: 15,
      suffix: "+",
      label: "Years Experience",
      description: "In IT training industry",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Our Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            When Efforts Are Genuine,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Numbers Speak Louder
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Our commitment to excellence is reflected in the success of our students
            and the trust placed in us by leading companies worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl">
            <div className="text-white text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to Join Our Success Story?</h3>
              <p className="text-blue-100">Start your learning journey today and become part of our growing community.</p>
            </div>
            <button className="flex-shrink-0 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
