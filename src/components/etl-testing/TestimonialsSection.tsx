'use client';
import { BadgeCheck } from 'lucide-react';
import dynamic from 'next/dynamic';
const ReviewsMarquee = dynamic(() => import('../sections/ReviewMarque'), { ssr: false, loading: () => <SectionLoader label="Loading reviews marquee..." /> });

const SectionLoader = ({ label }: { label: string }) => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-900"></div>
            <span className="ml-2 text-gray-900">{label}</span>
        </div>
    );
};

export default function TestimonialsSection() {


    return (
        <section id="testimonials" aria-labelledby="testimonials-heading" className="relative py-10 bg-white">
            {/* subtle separators for a clean, slightly futuristic frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* mini trust badge */}
                <p className="mx-auto mt-2 mb-4 max-w-2xl text-center text-xs sm:text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1 shadow-md rounded-full border border-slate-200 bg-white px-2.5 py-1">
                        <BadgeCheck className="h-4 w-4 text-emerald-600" />
                        Verified student feedback • Outcomes-based learning
                    </span>
                </p>

                <h2 className="text-3xl md:text-4xl text-ST text-center font-bold mb-4">
                    Success Stories
                </h2>

                <ReviewsMarquee />


                {/* SEO-supportive line */}
                <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
                    Real outcomes include <strong>faster placements</strong>, <strong>salary jumps</strong>, and <strong>portfolio-ready projects</strong> in
                    banking, e-commerce, and healthcare data platforms.
                </p>
            </div>

        </section>
    );
}
