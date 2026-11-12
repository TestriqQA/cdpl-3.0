import ReviewsMarquee from '@/components/sections/ReviewMarque';

/**
 * HomeReviewsSection - scrolling learner reviews.
 *
 * Homepage header (orange pill, dark heading with an orange key word) above
 * the site's shared ReviewsMarquee, which loads verified Google reviews from
 * /api/reviews and scrolls them in two opposite rows (paused on hover, still
 * under reduced motion). Same component as the Contact and course pages, so
 * reviews look the same everywhere.
 */
export default function HomeReviewsSection() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="home-reviews-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
            Student Reviews
          </span>
          <h2 id="home-reviews-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What Our <span className="text-brand">Learners</span> Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real reviews from learners who trained with us, straight from Google.
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
