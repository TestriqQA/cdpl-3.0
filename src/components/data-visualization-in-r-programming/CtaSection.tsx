"use client";

// src/components/CtaSection.tsx
import React, { useState } from "react";
import { ArrowRight, CheckCircle, CloudDownload } from "lucide-react";
import Link from "next/link";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

export const CtaSection: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Machine Learning and Data Visualization using R Programming";

  return (
    <section className="py-10 bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Ready to Master{" "}
            <span className="text-orange-400">R for Machine Learning</span>?
          </h2>

          {/* Subheading (SEO-optimized) */}
          <p className="text-lg text-slate-200 mb-8 leading-relaxed">
            Enroll now in our intensive{" "}
            <strong>20-hour R Programming for Machine Learning Master
              Program</strong> and accelerate your{" "}
            <strong>data science career</strong>. Learn{" "}
            <strong>R for data analysis, predictive modeling, and
              AI-powered machine learning projects</strong> with hands-on
            training designed for <strong>students, working professionals,
              and career switchers</strong> aiming for{" "}
            high-demand roles like <strong>Data Analyst</strong>,{" "}
            <strong>Machine Learning Engineer</strong>, and{" "}
            <strong>Data Scientist</strong>.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: "⏱️",
                title: "20-Hour Master Program",
                description:
                  "Compact, high-impact R and machine learning training with live sessions.",
              },
              {
                icon: "📊",
                title: "Hands-On ML Projects",
                description:
                  "Build real-world predictive models in R using industry datasets.",
              },
              {
                icon: "🎯",
                title: "Career-Focused Syllabus",
                description:
                  "Job-ready skills for data science, analytics, and AI-powered roles.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20"
              >
                <div className="text-3xl mb-2">{benefit.icon}</div>
                <p className="font-bold text-white mb-1">{benefit.title}</p>
                <p className="text-sm text-slate-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="flex items-center justify-center cursor-pointer bg-brand hover:bg-brand text-white font-semibold px-8 py-4 text-base rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => setIsSyllabusOpen(true)}
              className="flex items-center justify-center cursor-pointer border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-base rounded-lg transition-all"
            >
              <CloudDownload className="w-5 h-5 mr-2" />
              Download Free Syllabus
            </button>
          </div>

          {/* Limited Time Offer */}
          <div className="bg-orange-500/20 border-2 border-orange-400 rounded-lg p-6 mb-10">
            <p className="text-orange-200 font-semibold mb-2">
              🎉 Limited Time Offer
            </p>
            <p className="text-white text-lg font-bold">
              Get <span className="text-orange-300">20% OFF</span> on our{" "}
              R for Machine Learning Master Program this month!
            </p>
            <p className="text-slate-300 text-sm mt-2">
              Plus, unlock <strong>free career coaching</strong>,{" "}
              <strong>resume-building support</strong>, and{" "}
              <strong>mock interview preparation</strong> tailored for{" "}
              data science and analytics roles.
            </p>
          </div>

          {/* What's Included – SEO-rich bullet list */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">
              What&apos;s Included in This R Machine Learning Course
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                "20 hours of intensive live R programming & machine learning training",
                "Step-by-step guidance on supervised & unsupervised learning in R",
                "End-to-end real-time projects in classification, regression, and clustering",
                "Hands-on experience with RStudio, Tidyverse, ggplot2, and caret",
                "Practical exposure to data cleaning, feature engineering, and model tuning",
                "Coverage of key algorithms like Logistic Regression, Random Forest, XGBoost, and k-Means in R",
                "Lifetime access to recorded R & ML training sessions",
                "Downloadable notes, templates, and reusable R scripts for analytics",
                "Interview-oriented preparation for Data Analyst & ML Engineer roles",
                "Resume building, LinkedIn optimization & career mentoring",
                "Certificate of completion in R for Machine Learning & Data Science",
                "Access to a growing alumni network and lifetime email support",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center border-t border-white/10 pt-8">
          <p className="text-slate-300 mb-4">
            Have questions about the{" "}
            <strong>R for Machine Learning Master Program</strong>? Get in
            touch with our counsellors for{" "}
            <strong>free career guidance</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
            <Link
              href="tel:+917888383788"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <span>📞</span> +91 788-83-83-788
            </Link>
            <div className="hidden sm:block w-px h-6 bg-white/20"></div>
            <Link
              href="mailto:contact@cinutedigital.com"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <span>✉️</span> contact@cinutedigital.com
            </Link>
          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="R Programming Course Page - CTA Section - Enroll Now"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="R Programming Course Page - CTA Section - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
};
