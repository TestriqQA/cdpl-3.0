// src/components/data-analytics-bi-bigdata/TestimonialsSection.tsx
import React from 'react';
import ReviewsMarquee from '../sections/ReviewMarque';


const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base font-semibold tracking-wide text-teal-600 uppercase">
            Success Stories
          </h2>
          <h3 className="mt-2 mb-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hear From Our Successful Graduates
          </h3>
        </div>

        <ReviewsMarquee />
      </div>
    </section>
  );
};

export default TestimonialsSection;
