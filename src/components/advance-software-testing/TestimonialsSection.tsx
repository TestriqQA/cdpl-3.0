'use client';

import ReviewsMarquee from '../sections/ReviewMarque';

export default function TestimonialsSection() {


    return (
        <section id="testimonials" aria-labelledby="testimonials-heading" className="relative py-10 bg-white">
            {/* Subtle separators for a clean, light, slightly futuristic frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-center text-ST font-bold mb-4">
                    Success Stories
                </h2>

                <ReviewsMarquee />

                {/* SEO-supportive copy */}
                <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
                    Alumni highlight <strong>CI/CD automation</strong>, <strong>Appium & Selenium mastery</strong>, and{' '}
                    <strong>framework design</strong> as key differentiators in interviews-backed by portfolio projects and
                    evidence-rich reports.
                </p>
            </div>

        </section>
    );
}
