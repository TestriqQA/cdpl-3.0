'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Star, Quote } from 'lucide-react';

interface Review {
  name: string;
  reviewerInfo: { photoUrl: string; displayName: string };
  comment: string;
  starRating: string;
  createTime: string;
  source: 'Google';
}

const GOOGLE_LOGO = '/slider_logos/google-logo.svg'; // Ensure this path is correct based on previous file

export default function ReviewsMarquee() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: '289', rating: '4.8' });
  const [paused, setPaused] = useState(false);

  void stats;

  // Marquee refs


  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await axios.get('/api/reviews');
        const data = res.data;
        setReviews(data.reviews || []);
        if (data.totalReviewCount) {
          setStats({
            total: data.totalReviewCount.toString(),
            rating: typeof data.averageRating === 'number' ? data.averageRating.toFixed(1) : data.averageRating
          });
        }
      } catch (err) {
        console.error('Failed to load reviews', err);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, []);

  // Animation logic for infinite scroll
  // We can use CSS animation instead of complex JS for smoother performance

  if (loading) {
    return <div className="py-20 text-center text-slate-500 animate-pulse">Loading verified reviews...</div>;
  }

  // Duplicate items for seamless loop
  const marqueeItems = [...reviews, ...reviews, ...reviews].slice(0, 30); // Limit to reasonable number for perf

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24">

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Floating Marquee Container */}
        <div
          className="relative w-full overflow-hidden mask-linear-gradient"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* The mask is applied via inline style for cross-browser compat if needed, or tailwind utility below */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50/90 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50/90 to-transparent z-10" />

          {/* Marquee Track */}
          <div
            className={`flex gap-6 w-max py-4 ${paused ? 'pause-animation' : ''}`}
            style={{
              animation: 'marquee 60s linear infinite',
            }}
          >
            {marqueeItems.map((review, idx) => (
              <ReviewCard key={`${review.name}-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .pause-animation {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  // Format date
  const dateStr = new Date(review.createTime).toLocaleDateString('en-US', {
    month: 'short', year: 'numeric'
  });

  return (
    <div className="w-[350px] md:w-[400px] flex-shrink-0 group">
      <div className="h-full bg-white/60 backdrop-blur-xl border border-white/50 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">

        {/* Card Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {/* Avatar or Placeholder */}
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
              {review.reviewerInfo.photoUrl ? (
                <img src={review.reviewerInfo.photoUrl} alt={review.name} className="h-full w-full rounded-full object-cover" />
              ) : (
                review.name.charAt(0).toUpperCase()
              )}
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
              <div className="flex items-center gap-1 text-xs text-slate-500">
                <span>{dateStr}</span>
                <span>•</span>
                <span className="text-blue-600 font-medium">Verified Student</span>
              </div>
            </div>
          </div>
          <Image src={GOOGLE_LOGO} alt="Google" width={50} height={50} className="opacity-60 grayscale group-hover:grayscale-0 transition-all" />
        </div>

        {/* Rating */}
        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Content */}
        <div className="relative">
          <Quote className="absolute -top-1 -left-1 w-6 h-6 text-slate-100 -z-10 rotate-180" />
          <p className="text-slate-700 text-sm leading-relaxed line-clamp-4">
            {review.comment}
          </p>
        </div>
      </div>
    </div>
  );
}
