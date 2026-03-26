'use client';
import { Star } from 'lucide-react';
import dynamic from 'next/dynamic';
const ReviewsMarquee = dynamic(() => import('@/components/sections/ReviewMarque'), { ssr: false, loading: () => <SectionLoader label="Loading reviews..." /> });

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

type Testimonial = {
    name: string;
    role: string;
    rating: number;
    text: string;
};

const testimonials: Testimonial[] = [
    { name: 'Amit Kumar', role: 'DB Admin at Infosys', rating: 5, text: 'Got placed in 25 days. The e-commerce project is now in my portfolio!' },
    { name: 'Sneha Patel', role: 'Data Analyst, TCS', rating: 5, text: 'Learned query optimization that improved report speed by 8x.' },
    { name: 'Rohan Mehta', role: 'Fresher → Wipro', rating: 5, text: 'From BCom to MySQL expert. Best decision!' },
];

export default function TestimonialsSection() {
    // SEO: Review + AggregateRating
    const avgRating =
        testimonials.reduce((s, t) => s + (t.rating || 0), 0) / (testimonials.length || 1);

    return (
        <section id="testimonials" aria-labelledby="testimonials-heading" className="relative py-10 bg-white">
            {/* subtle top/bottom separators for a sleek frame */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 id="projects-heading" className="text-3xl md:text-4xl text-center font-bold tracking-tight text-slate-900">
                    Student Success <span className='text-ST'>Stories</span>
                </h2>

                {/* small SEO line */}
                <p className="mx-auto mt-3 mb-8 max-w-3xl text-center text-sm sm:text-base text-slate-600">
                    Read verified reviews highlighting <strong>job placements</strong>, <strong>query optimization</strong>, and
                    <strong> portfolio-ready projects</strong> built during the MySQL course.
                </p>

                <ReviewsMarquee />

                {/* aggregate rating pill */}
                <div className="mt-8 flex items-center justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>
                            {avgRating.toFixed(1)} / 5 based on {testimonials.length}+ reviews
                        </span>
                    </div>
                </div>
            </div>

        </section>
    );
}
