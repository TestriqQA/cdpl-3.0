"use client";

import React, { useState } from "react";
import { ArrowRight, Download, Phone, CheckCircle } from "lucide-react";
import Link from "next/link";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

const CtaSection: React.FC = () => {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Data Analytics with BI & Big Data Engineering Master Program";

  return (
    <section
      id="cta"
      className="py-10 bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading (content preserved) */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Ready to Launch Your{" "}
            <span className="text-teal-200">High-Paying Data Career?</span>
          </h2>

          {/* Subheading (content preserved) */}
          <p className="text-lg md:text-xl text-slate-200 mb-4 leading-relaxed">
            Don&apos;t just analyze data-engineer the future. Enroll now to secure
            your spot in the next cohort.
          </p>
          {/* Extra SEO copy */}
          <p className="text-sm text-slate-300 mb-8 leading-relaxed">
            Join a{" "}
            <strong>Data Analytics with BI and Big Data Engineering Master Program</strong>{" "}
            designed to make you job-ready for{" "}
            <em>Business Intelligence Analyst, Data Analyst, and Big Data Engineer</em>{" "}
            roles with skills in <strong>SQL, Python, Tableau, Power BI, Hadoop, Spark,
              Databricks, and cloud platforms</strong>.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: "📊",
                title: "BI & Big Data Focus",
                description:
                  "End-to-end training across Business Intelligence, Data Analytics, and Big Data Engineering.",
              },
              {
                icon: "💼",
                title: "Career & Placement Support",
                description:
                  "Resume building, mock interviews, portfolio review, and job assistance.",
              },
              {
                icon: "🎓",
                title: "Industry-Ready Curriculum",
                description:
                  "Hands-on projects, real-time datasets, and globally relevant tools.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20"
              >
                <div className="text-3xl mb-2">{benefit.icon}</div>
                <p className="font-bold text-white mb-1">{benefit.title}</p>
                <p className="text-sm text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons (labels/content preserved, layout upgraded) */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="flex items-center justify-center cursor-pointer bg-[#0f766e] hover:bg-teal-700 text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => setIsSyllabusOpen(true)}
              className="flex items-center justify-center cursor-pointer border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-lg transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </button>
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="flex items-center justify-center border-2 border-teal-300 text-teal-100 hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-lg transition-all cursor-pointer"
            >
              <Phone className="w-5 h-5 mr-2" />
              Talk to an Advisor
            </button>
          </div>

          {/* Limited Time Offer (SEO-friendly urgency) */}
          <div className="bg-teal-500/20 border-2 border-teal-400 rounded-lg p-6 mb-10">
            <p className="text-teal-200 font-semibold mb-2">
              🎉 Limited Time Offer
            </p>
            <p className="text-white text-lg font-bold">
              Secure your seat in the{" "}
              <span className="text-teal-300">
                upcoming Data Analytics with BI & Big Data batch
              </span>{" "}
              and unlock exclusive career support benefits.
            </p>
            <p className="text-slate-200 text-sm mt-2">
              Ideal for <strong>IT professionals, fresh graduates, BI analysts,
                and career changers</strong> looking to move into{" "}
              <em>high-growth data roles</em>.
            </p>
          </div>

          {/* What's Included */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">
              What&apos;s Included in This Master Program
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                "Comprehensive training in Data Analytics, BI, and Big Data Engineering tools.",
                "Practical exposure to SQL, Python, Tableau, Power BI, Hadoop, Spark, and Databricks.",
                "Real-world projects across BI dashboards, ETL pipelines, and predictive analytics.",
                "Career-focused support: resume building, mock interviews, and portfolio review.",
                "Guidance for roles like Business Intelligence Analyst, Data Analyst, and Big Data Engineer.",
                "Access to mentors and an active alumni network in data and analytics.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center border-t border-white/10 pt-8">
          <p className="text-slate-300 mb-4">
            Have questions about the{" "}
            <strong>Data Analytics with BI and Big Data Engineering Master Program</strong>?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
            <Link
              href="tel:+917888383788"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors"
            >
              <span>📞</span> +91 788-83-83-788
            </Link>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <Link
              href="mailto:contact@cinutedigital.com"
              className="flex items-center gap-2 hover:text-teal-300 transition-colors"
            >
              <span>✉️</span> contact@cinutedigital.com
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-400 sm:text-sm">
            Keywords: Data Analytics with BI and Big Data Engineering course •
            enroll in Big Data Engineer program • high-paying data analytics
            career • BI & Big Data master program with placement support.
          </p>
        </div>
      </div>

      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="Data Engineering Course Page - CTA Section - Enroll/Advisor"
        courseName={courseName}
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Engineering Course Page - CTA Section - Data Engineering - Download Brochure"
        courseName={courseName}
      />
    </section>
  );
};

export default CtaSection;
