'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

// --- Types ---
interface Review {
  name: string;
  reviewerInfo: { photoUrl: string; displayName: string };
  comment: string;
  starRating: string;
  createTime: string;
  source: 'Google';
}

const GOOGLE_LOGO = '/slider_logos/google-logo.svg';

// --- Components ---

function MarqueeRow({
  items,
  direction = 'left',
  speed = 150
}: {
  items: Review[];
  direction?: 'left' | 'right';
  speed?: number
}) {
  return (
    <div className="relative flex overflow-hidden group pointer-events-auto">
      <div
        className="flex gap-6 py-4 w-max group-hover:[animation-play-state:paused_!important]"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          willChange: 'transform'
        }}
      >
        {[...items, ...items].map((review, idx) => (
          <ReviewCard key={`${review.name}-${idx}`} review={review} />
        ))}
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const dateStr = new Date(review.createTime).toLocaleDateString('en-US', {
    month: 'short', year: 'numeric'
  });

  const stars = Number(review.starRating) || 5;

  return (
    <div className="w-[320px] sm:w-[380px] flex-shrink-0">
      <div className="h-full relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-lg group">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-slate-100">
              {review.reviewerInfo?.photoUrl ? (
                <img src={review.reviewerInfo.photoUrl} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              ) : (
                <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-400 font-bold">
                  {review.name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{review.name}</div>
              <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">{dateStr}</div>
            </div>
          </div>
          <Image src={GOOGLE_LOGO} alt="Google" width={40} height={40} className="w-10 h-10 opacity-30" />
        </div>

        {/* Stars - single container with SVG background or simplified icons */}
        <div className="flex gap-0.5 mb-3 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < stars ? "fill-current" : "text-slate-100 fill-slate-100"}`} />
          ))}
        </div>

        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
          "{review.comment}"
        </p>
      </div>
    </div>
  );
}

interface ReviewsMarqueeProps {
  initialReviews?: Review[];
  initialTotal?: string;
  initialRating?: string;
}

export default function ReviewsMarquee({ initialReviews, initialTotal, initialRating }: ReviewsMarqueeProps) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews || []);
  const [loading, setLoading] = useState(!initialReviews);
  const [stats, setStats] = useState({
    total: initialTotal || '0',
    rating: initialRating || '0.0'
  });

  useEffect(() => {
    // If we have initial data, don't fetch
    if (initialReviews && initialReviews.length > 0) {
      return;
    }

    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
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
  }, [initialReviews]);

  if (loading) {
    return (
      <div className="h-96 flex flex-col items-center justify-center space-y-4 bg-slate-50/50">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-slate-400 font-medium animate-pulse">Loading verified reviews...</p>
      </div>
    );
  }

  // Split reviews into two rows
  const mid = Math.ceil(reviews.length / 2);
  const row1 = reviews.slice(0, mid);
  const row2 = reviews.slice(mid);

  // DENSE OPTIMIZATION: On mobile, we only need a few items for a seamless marquee
  // We'll detect viewport or just serve a smaller subset by default for the initial SSR/Load
  const safeRow1 = row1.slice(0, 3);
  const safeRow2 = row2.slice(0, 3);

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-5">

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-blue-100/40 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-purple-100/40 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 space-y-12">

        {/* Animated Header Visual */}
        <div className="flex flex-col items-center justify-center space-y-6 pt-2">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-slate-200/50 rounded-full shadow-sm animate-fade-in-up"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">
              {stats.total}+ Verified Reviews
            </span>
          </div>
        </div>

        {/* Marquees */}
        <div className="space-y-8 mask-linear-gradient">
          <MarqueeRow items={safeRow1} direction="left" speed={150} />
          <MarqueeRow items={safeRow2} direction="right" speed={150} />
        </div>

        {/* CSS for Marquee */}
        <style jsx>{`
            @keyframes marquee-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-100% / 10)); }
            }
            @keyframes marquee-right {
                0% { transform: translateX(calc(-100% / 10)); }
                100% { transform: translateX(0); }
            }
            @keyframes fade-in-up {
                0% { opacity: 0; transform: translateY(10px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
                animation: fade-in-up 0.6s ease-out forwards;
            }
            .mask-linear-gradient {
                mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
           `}</style>
      </div>
    </section>
  );
}

