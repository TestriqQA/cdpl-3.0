import ReviewsMarquee from '@/components/sections/ReviewMarque';

/**
 * Wrapper with heading + description only.
 * No props; colors kept as requested.
 */
export default function ContactReviewSection() {
  return (
    <section className="w-full relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-10">
        {/* Heading + Description (keep these text colors) */}
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            What learners say about <span className="text-brand">Cinute Digital</span>
          </h2>

          <p className="mt-3 text-base md:text-lg text-slate-600">
            Real words from learners across platforms. We keep it transparent and authentic so you can decide with
            confidence.
          </p>
        </div>

        {/* Re-usable marquee below (self-contained; no props) */}
        <div className="mt-6">
          <ReviewsMarquee />
        </div>
      </div>
    </section>
  );
}
