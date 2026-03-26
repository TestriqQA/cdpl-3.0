"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * HomeFAQSection - Common Questions
 * 
 * Enhanced Accordion-style FAQ section with a modern, two-column layout,
 * improved UI/UX, and better responsiveness.
 */

// Custom Accordion Item Component for cleaner code
const FAQItem = ({ faq, index, openIndex, toggleFAQ }: {
  faq: { question: string; answer: string };
  index: number;
  openIndex: number | null;
  toggleFAQ: (index: number) => void;
}) => {
  const isOpen = openIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      {/* Question Button */}
      <button
        onClick={() => toggleFAQ(index)}
        className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-300 ${isOpen ? 'bg-orange-50' : 'hover:bg-gray-50'
          }`}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${index}`}
      >
        <div className="flex items-center gap-4 flex-1">
          <h3 className={`text-lg font-semibold pr-4 transition-colors duration-300 ${isOpen ? 'text-brand' : 'text-gray-900'
            }`}>
            {faq.question}
          </h3>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform duration-330 ${isOpen ? 'transform rotate-180 text-brand' : ''
            }`}
        />
      </button>

      {/* Answer Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
            id={`faq-content-${index}`}
            role="region"
            aria-labelledby={`faq-heading-${index}`}
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-base text-gray-600 leading-relaxed border-t pt-4 mt-2">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const HOME_FAQS = [
  {
    question: 'What courses does CDPL offer?',
    answer: 'We offer comprehensive training in Software Testing (Manual & Automation), Data Science & AI/ML, API Testing, Performance Testing, Mobile Testing, and Full Stack Development. All courses include hands-on projects, industry certifications, and 100% placement support.',
  },
  {
    question: 'Do you provide placement assistance?',
    answer: 'Yes! We provide 100% placement support including resume building, mock interviews, interview preparation, and guaranteed interview opportunities with our 50+ hiring partners. Our dedicated placement cell works with you until you land your dream job.',
  },
  {
    question: 'What is the duration of the courses?',
    answer: 'Course duration varies from 8 to 24 weeks depending on the program. We offer flexible batch timings including weekday, weekend, and fast-track options to fit your schedule. You also get lifetime access to all course materials.',
  },
  {
    question: 'Are the classes online or offline?',
    answer: 'We offer both online and offline training options. Our live online classes are interactive with real-time doubt resolution, just like classroom training.',
  },
  {
    question: 'Do I need prior experience to join?',
    answer: 'No prior experience is required for most of our beginner-level courses. We start from fundamentals and gradually move to advanced topics. Our trainers ensure everyone understands the concepts before moving forward.',
  },
  {
    question: 'What certifications will I receive?',
    answer: 'You will receive a course completion certificate from CDPL. Additionally, we prepare you for globally recognized certifications like ISTQB (for testing courses), AWS (for cloud courses), and other industry-standard certifications relevant to your course.',
  },
  {
    question: 'How experienced are the trainers?',
    answer: 'All our trainers are industry professionals with 10+ years of hands-on experience at top companies like Google, Microsoft, Amazon, and leading Indian IT firms. They bring real-world expertise and practical insights to every session.',
  },
  {
    question: 'What is the batch size?',
    answer: 'We maintain small batch sizes of 15-20 students to ensure personalized attention and better learning outcomes. This allows our trainers to focus on each student\'s progress and provide individual guidance.',
  },
];

export default function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns for desktop view
  const half = Math.ceil(HOME_FAQS.length / 2);
  const firstHalf = HOME_FAQS.slice(0, half);
  const secondHalf = HOME_FAQS.slice(half);

  return (
    <section className="py-6 lg:py-10 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Enhanced for SEO and Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold tracking-wider mb-3">
            Quick Answers
          </span>
          <h2 id="faq-heading" className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Frequently Asked <span className="text-brand">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
            Find everything you need to know about our courses, placements, and training methodology.
          </p>
        </motion.div>

        {/* FAQ Accordion - Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* First Column */}
          <div className="space-y-4">
            {firstHalf.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                openIndex={openIndex}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            {secondHalf.map((faq, index) => (
              <FAQItem
                key={index + half} // Ensure unique key and index for the second half
                faq={faq}
                index={index + half}
                openIndex={openIndex}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
