// Single source for site-wide stats. Rating and review count are fetched live
// from Google (see getSiteStats in lib/liveStats); these values are the
// fallback, and are what structured data, metadata and static prose use.
export const SITE_STATS = {
  rating: 4.8,
  maxRating: 5,
  reviewCount: 432,
  studentsPlaced: 600,
} as const;

export type SiteStats = {
  rating: number;
  reviewCount: number;
  studentsPlaced: number;
  text: { rating: string; ratingValue: string; reviews: string; studentsPlaced: string };
};

// Floor to one decimal so a live 4.87 shows as 4.8, never overstating.
export function formatStats(s: { rating: number; reviewCount: number; studentsPlaced: number }): SiteStats {
  const rating = Math.floor(s.rating * 10 + 1e-9) / 10;
  const ratingValue = rating.toFixed(1);
  return {
    rating,
    reviewCount: s.reviewCount,
    studentsPlaced: s.studentsPlaced,
    text: {
      rating: `${ratingValue}/${SITE_STATS.maxRating}`,
      ratingValue,
      reviews: `${s.reviewCount}+`,
      studentsPlaced: `${s.studentsPlaced}+`,
    },
  };
}

export const FALLBACK_STATS = formatStats(SITE_STATS);
export const STAT_TEXT = FALLBACK_STATS.text;
