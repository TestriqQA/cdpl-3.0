'use client';
import dynamic from 'next/dynamic';
const ReviewsMarquee = dynamic(() => import('../sections/ReviewMarque'), { ssr: false, loading: () => <SectionLoader label="Loading reviews marquee..." /> });

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}


export default function TestimonialsSection() {


    return (
        <section className="relative py-10 bg-white" aria-labelledby="testimonials-heading">
            {/* Subtle rails for a clean, slightly futuristic frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl text-center text-slate-900 font-bold mb-4">
                    <span className='text-ST'>SDET</span> Success Storiess
                </h2>

                <ReviewsMarquee />

                {/* Supporting SEO copy */}
                <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
                    Our alumni showcase <strong>Playwright/Cypress</strong>, <strong>Appium</strong>,{' '}
                    <strong>REST Assured</strong>, and <strong>Docker + Jenkins</strong> projects with clean, reviewed code and
                    <em> measurable impact</em>-a winning combo for SDET interviews.
                </p>
            </div>

        </section>
    );
}
