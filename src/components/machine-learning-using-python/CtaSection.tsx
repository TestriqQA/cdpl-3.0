"use client";

import { CheckCircle2, Clock, Users, Award } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import CareerSessionModal from "../CareerSessionModal";

export default function CtaSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const courseName = "Machine Learning Algorithms using python Programming";

  return (
    <section className="py-10 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>

          {/* Subheading */}
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Join hundreds of successful graduates who have landed high-paying ML engineering roles. Start your journey today with our comprehensive 45-hour master program.
          </p>

          {/* What's Included */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-12 mb-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-8">
              What&apos;s Included in Your Program
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Clock, text: "45 Hours of Expert Training" },
                { icon: Users, text: "1:1 Doubt Solving Sessions" },
                { icon: Award, text: "Global Certification" },
                { icon: CheckCircle2, text: "100% Job Assistance" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <Icon className="w-6 h-6 text-blue-300 flex-shrink-0" />
                    <span className="text-white font-semibold">{item.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Additional Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {[
                "7 Comprehensive Modules",
                "Real-World Capstone Projects",
                "Lifetime Community Access",
                "Resume & Portfolio Building",
                "Interview Preparation",
                "Placement Support",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Limited Time Offer */}
          <div className="bg-yellow-400 text-slate-900 rounded-lg p-6 mb-8 font-bold">
            <p className="text-lg">⏰ Limited Time Offer: Get 20% Off on Early Enrollment!</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="bg-white text-blue-600 cursor-pointer hover:bg-blue-50 font-bold rounded-lg text-lg px-8 py-3"
            >
              Enroll Now & Get Started
            </button>
            <button
              onClick={() => setIsCareerOpen(true)}
              className="border-white text-white bg-brand hover:bg-brand transition-all font-bold rounded-lg text-lg px-8 py-3"
            >
              Schedule Free Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
            <div>
              <p className="text-3xl font-bold mb-2">500+</p>
              <p className="text-blue-100">Successful Graduates</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">4.8/5</p>
              <p className="text-blue-100">Average Student Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold mb-2">100%</p>
              <p className="text-blue-100">Job Placement Support</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-blue-100 mb-4">
            Questions? Our team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-white">
            <Link
              href="tel:+917888383788"
              className="flex items-center justify-center gap-2 hover:text-blue-200 transition-colors"
            >
              <span>📞</span> +91 788-83-83-788
            </Link>
            <span className="hidden sm:block text-blue-300">•</span>
            <Link
              href="mailto:contact@cinutedigital.com"
              className="flex items-center justify-center gap-2 hover:text-blue-200 transition-colors"
            >
              <span>✉️</span> contact@cinutedigital.com
            </Link>
          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Machine Learning Algorithms with Python Course Page - CTA Section - Enroll Now"
        courseName={courseName}
      />
      <CareerSessionModal
        isOpen={isCareerOpen}
        onClose={() => setIsCareerOpen(false)}
        source="Machine Learning Algorithms with Python Course Page - CTA Section - Free Demo"
        courseName={courseName}
      />
    </section>
  );
}
