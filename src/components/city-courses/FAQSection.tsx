"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";

// Mock data for demonstration
const mockData = {
  faqsContent: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our courses",
    faqs: [
      {
        question: "What are the prerequisites for this course?",
        answer: "No prior experience is required! Our course is designed for beginners and includes all the foundational concepts you need to get started. We'll guide you step-by-step through each topic."
      },
      {
        question: "How long do I have access to the course materials?",
        answer: "You get lifetime access to all course materials, including future updates. Learn at your own pace and revisit the content whenever you need a refresher."
      },
      {
        question: "Is there a certificate upon completion?",
        answer: "Yes! Upon successful completion of the course and all assignments, you'll receive a verified certificate that you can share on LinkedIn and add to your resume."
      },
      {
        question: "What if I'm not satisfied with the course?",
        answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the course within the first 30 days, we'll give you a full refund—no questions asked."
      },
      {
        question: "Do you offer student discounts?",
        answer: "Absolutely! We offer a 20% discount for students with a valid student ID. Contact our support team to get your discount code."
      }
    ]
  }
};

interface FAQSectionProps {
  data?: typeof mockData;
}

const FAQSection: React.FC<FAQSectionProps> = ({ data = mockData }) => {
  const { faqsContent } = data;
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-200/30 to-teal-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/30 to-cyan-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mb-6"
            variants={itemVariants}
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700 tracking-wide">
              Questions & Answers
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight"
            variants={itemVariants}
          >
            {faqsContent.title}
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            {faqsContent.subtitle}
          </motion.p>
        </motion.div>

        {/* FAQs Grid */}
        <motion.div
          className="space-y-3 md:space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {faqsContent.faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <button
                onClick={() =>
                  setExpandedFAQ(expandedFAQ === index ? null : index)
                }
                className="w-full text-left cursor-pointer"
              >
                <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-100/50 overflow-hidden group">
                  {/* Gradient Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/0 via-teal-50/0 to-cyan-50/0 group-hover:from-emerald-50 group-hover:via-teal-50 group-hover:to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 md:gap-4 flex-1 min-w-0">
                      {/* Icon Circle */}
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-300 group-hover:scale-110">
                          <HelpCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                        </div>
                      </div>

                      {/* Question */}
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors pt-1.5 md:pt-2 leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Expand Icon */}
                    <motion.div
                      animate={{
                        rotate: expandedFAQ === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 mt-2"
                    >
                      <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-emerald-100 group-hover:to-teal-100 flex items-center justify-center transition-all duration-300">
                        <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-emerald-600 transition-colors" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="ml-0 md:ml-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-2 border-emerald-200 rounded-2xl p-5 md:p-6 shadow-lg shadow-emerald-100/50">
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA Card */}
        <motion.div
          className="mt-12 md:mt-16 relative overflow-hidden"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-8 md:p-10 text-center shadow-2xl shadow-emerald-200/50">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20 blur-2xl"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Still have questions?
              </h3>

              <p className="text-emerald-50 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Can&apos;t find the answer you&apos;re looking for? Our dedicated support team is ready to assist you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" className="group px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Contact Support</span>
                </Link>

                <Link
                  href="https://calendar.app.google/tvh9dsXZsX9BujRR8"
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Schedule a Call</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
