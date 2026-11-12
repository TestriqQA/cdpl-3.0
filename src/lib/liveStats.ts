import 'server-only';
import { getGoogleReviews } from '@/lib/reviews';
import { FALLBACK_STATS, SITE_STATS, formatStats, type SiteStats } from '@/lib/siteStats';

// Live rating and review count from Google; students placed is not on Google.
export async function getSiteStats(): Promise<SiteStats> {
  try {
    const { averageRating, totalReviewCount, error } = await getGoogleReviews();
    if (error || !averageRating || !totalReviewCount) return FALLBACK_STATS;
    return formatStats({
      rating: averageRating,
      reviewCount: totalReviewCount,
      studentsPlaced: SITE_STATS.studentsPlaced,
    });
  } catch {
    return FALLBACK_STATS;
  }
}
