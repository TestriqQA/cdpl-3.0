
import ReviewsMarquee from '../sections/ReviewMarque';


export default function TestimonialsSection() {


    return (
        <section id="testimonials" aria-labelledby="testimonials-heading" className="relative py-10 bg-slate-50">
            {/* subtle top/bottom separators for a clean, futuristic frame */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 id="testimonials-heading" className="text-4xl text-slate-900 text-center font-bold mb-4">
                    Success <span className='text-ST'>Stories</span>
                </h2>

                {/* SEO-supportive intro line */}
                <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
                    Real reviews from professionals who mastered <strong>Postman</strong>, <strong>REST/GraphQL</strong>,{' '}
                    <strong>JSON Schema validation</strong>, <strong>CI/CD</strong>, and <strong>OWASP API security</strong>.
                </p>

                <ReviewsMarquee />

                {/* supportive SEO line */}
                <div className="mx-auto mt-10 max-w-4xl text-center">
                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                        Showcase verified outcomes on your portfolio: <strong>coverage reports</strong>,{' '}
                        <strong>response-time benchmarks</strong>, and <strong>secure API workflows</strong> integrated with{' '}
                        <strong>GitHub Actions</strong> or <strong>Jenkins</strong>.
                    </p>
                </div>
            </div>

        </section>
    );
}
