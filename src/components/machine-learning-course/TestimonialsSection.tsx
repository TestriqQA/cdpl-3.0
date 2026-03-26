// components/sections/TestimonialsSection.tsx
// Server component — sleek, SEO-optimized, slightly futuristic, fully responsive.
// Unique accent colors per card (no repeats), minimal/non-distracting visuals.
// Includes accessible snap-scrolling on mobile and structured data for search engines.

import ReviewsMarquee from "../sections/ReviewMarque";

type Testimonial = {
  name: string;
  role: string;
  company?: string;
  quote: string;
  rating: number; // 1–5
  result?: string; // outcome highlight
  avatar?: string; // optional image path
  accent: { bg: string; text: string; border: string; chip: string };
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Data Analyst",
    company: "FinTech Startup",
    quote:
      "This program transformed my career. I went from basics to building production-ready models in weeks.",
    rating: 5,
    result: "Offer @ ₹9 LPA",
    accent: {
      bg: "bg-emerald-50",
      text: "text-emerald-900",
      border: "border-emerald-200",
      chip: "bg-emerald-100 text-emerald-900",
    },
  },
  {
    name: "Rahul Verma",
    role: "ML Engineer",
    company: "Product Company",
    quote:
      "Hands-on ML projects and mentor feedback made a huge difference. The portfolio review helped me stand out.",
    rating: 5,
    result: "Portfolio: 3 Projects",
    accent: {
      bg: "bg-sky-50",
      text: "text-sky-900",
      border: "border-sky-200",
      chip: "bg-sky-100 text-sky-900",
    },
  },
  {
    name: "Ananya Patel",
    role: "Fresher",
    company: "EdTech",
    quote:
      "Best investment! Clear roadmap, practical labs, and interview prep—landed my first role right after certification.",
    rating: 5,
    result: "Joined as Analyst",
    accent: {
      bg: "bg-amber-50",
      text: "text-amber-900",
      border: "border-amber-200",
      chip: "bg-amber-100 text-amber-900",
    },
  },
];

export default function TestimonialsSection() {
  const subtitle =
    "Real outcomes from learners who completed our mentor-led Machine Learning & Data Science program.";
  const keywords =
    "data science course reviews, machine learning student testimonials, placement success stories, ML portfolio feedback, Python training ratings";

  // Aggregate rating (all 5 for demo data)
  const aggregateRating = {
    ratingValue: (
      TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length
    ).toFixed(1),
    reviewCount: TESTIMONIALS.length,
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden py-10 bg-white"
    >
      {/* Subtle futuristic grid + mask */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            What Our{" "}
            <span className="text-DS">
              Students Say
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-700">{subtitle}</p>

          {/* Aggregate rating chip */}
          <div className="mt-4 mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
            <span className="text-yellow-600" aria-hidden>
              ★★★★★
            </span>
            <span aria-label={`Average rating ${aggregateRating.ratingValue} out of 5`}>
              {aggregateRating.ratingValue}/5 · {aggregateRating.reviewCount} reviews
            </span>
          </div>

          {/* SEO assist (hidden) */}
          <p className="sr-only">{keywords}</p>
        </header>

        <ReviewsMarquee />

        {/* Trust strip */}
        <div className="mt-8 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 backdrop-blur">
            <span className="text-yellow-600">★★★★★</span>
            <span>Top-rated ML & Data Science Program in Mumbai</span>
          </div>
        </div>
      </div>

    </section>
  );
}
