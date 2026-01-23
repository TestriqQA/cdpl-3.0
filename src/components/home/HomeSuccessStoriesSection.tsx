'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Briefcase } from 'lucide-react';

/**
 * HomeSuccessStoriesSection - Alumni Testimonials
 * 
 * Carousel of student success stories
 * Real testimonials from CDPL placements page
 */
export default function HomeSuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Dakshali Merya',
      role: 'QA Engineer',
      company: 'Tech Mahindra',
      image: '/testimonials/dakshali.jpg', // Placeholder
      quote: 'Hands-on QA practice + mock interviews made offer-day feel easy. CDPL transformed my career from a fresher to a confident QA professional.',
      rating: 5,
      package: '6 LPA',
    },
    {
      name: 'Jaynam Shah',
      role: 'QA (Business Delivery)',
      company: 'IDfy',
      image: '/testimonials/jaynam.jpg',
      quote: 'API testing drills and clear bug reports made a huge difference. The mentors at CDPL are industry experts who genuinely care about your success.',
      rating: 5,
      package: '7.2 LPA',
    },
    {
      name: 'Sheetal Singh',
      role: 'QA Engineer',
      company: 'Accenture',
      image: '/testimonials/sheetal.jpg',
      quote: 'Structured QA sprints and feedback loops boosted my interview confidence. I got placed in Accenture within 2 months of course completion.',
      rating: 5,
      package: '5.5 LPA',
    },
    {
      name: 'Kartik Bomble',
      role: 'QA Analyst',
      company: 'JM Financial',
      image: '/testimonials/kartik.jpg',
      quote: 'Test design + scenario writing clicked for me—sealed the JM offer. The practical approach at CDPL is unmatched.',
      rating: 5,
      package: '6.8 LPA',
    },
    {
      name: 'Bhagyesh Mahadik',
      role: 'QA Engineer',
      company: 'Tech Mahindra',
      image: '/testimonials/bhagyesh.jpg',
      quote: 'From basics to job-ready quickly with focused QA mentoring. The placement support team helped me prepare for every interview round.',
      rating: 5,
      package: '6 LPA',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-brand rounded-full text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Students <span className="text-brand">Love Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our alumni who transformed their careers with CDPL&apos;s industry-ready training and placement support.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-brand rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>

                {/* Student Info */}
                <div className="flex flex-col items-center gap-4">
                  {/* Avatar */}
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 flex items-center justify-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{testimonials[currentIndex].role} at {testimonials[currentIndex].company}</span>
                    </p>
                    <p className="text-brand font-bold mt-1">
                      Package: {testimonials[currentIndex].package}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white hover:bg-brand text-gray-800 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border border-gray-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'w-8 bg-brand'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white hover:bg-brand text-gray-800 hover:text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border border-gray-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '500+', label: 'Students Placed' },
            { number: '1.5×', label: 'Avg Package Growth' },
            { number: '50+', label: 'Hiring Partners' },
            { number: '4.8/5', label: 'Average Rating' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-brand mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
