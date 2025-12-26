"use client";
// components/powerbi/CtaSection.tsx
import React, { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import EnrollModal from "../EnrollModal";

const CtaSection: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Data Analytics & Visualization with Power BI";

  return (
    <section className="py-10 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Zap size={48} className="text-white mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Become a Certified Power BI Expert?
          </h2>
          <p className="text-lg text-blue-200 mb-8">
            Don&apos;t miss out on the booming demand for data visualization professionals. Enroll today and secure your future in data analytics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="flex items-center justify-center cursor-pointer px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02]"
            >
              Enroll Now & Start Learning <ArrowRight size={20} className="ml-3" />
            </button>
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 cursor-pointer"
            >
              Request a Free Demo
            </button>
          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Power BI Course Page - CTA Section - Enroll/Demo"
        courseName={courseName}
      />
    </section>
  );
};

export default CtaSection;
