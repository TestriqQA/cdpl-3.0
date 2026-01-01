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
    <section id='testimonials' className="relative py-10 bg-white">
      {/* subtle framework lines */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center text-slate-900 font-bold mb-4">
          Student <span className='text-ST'>Success Stories</span>
        </h2>

        <p className='text-slate-600 text-center text-lg mb-5'>Join 6000+ QA engineers placed in top firms</p>

        <ReviewsMarquee />

        {/* SEO supportive line */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          All reviews cite <strong>job outcomes</strong>, <strong>real project work</strong>, and{' '}
          <strong>automation-first skills</strong> (Selenium, Cypress, Playwright, API, CI/CD)-the exact
          keywords hiring managers search for.
        </p>
      </div>

      {/* JSON-LD for search engines */}

    </section>
  );
}
