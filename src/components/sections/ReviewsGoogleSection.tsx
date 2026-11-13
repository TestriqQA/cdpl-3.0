import ReviewsMarquee from "@/components/sections/ReviewMarque";

/**
 * Google reviews on the Reviews page: the site's section header (orange pill,
 * orange key phrase) above the shared ReviewsMarquee, the same scrolling
 * Google reviews (with their review-count badge) shown on Home, Contact and
 * the course pages.
 */
export default function ReviewsGoogleSection() {
  return (
    <section aria-labelledby="reviews-google-heading" className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
            Google Reviews
          </span>
          <h2 id="reviews-google-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Loved by students, <span className="text-brand">trusted by professionals</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of successful graduates who transformed their careers with us.
          </p>
        </div>
      </div>

      {/* Full width so the rows scroll edge to edge */}
      <div className="mt-6">
        <ReviewsMarquee />
      </div>
    </section>
  );
}
