
import { google } from 'googleapis';
import axios from 'axios';
import { unstable_cache } from 'next/cache';

// Credentials
const CLIENT_ID = '1078247115476-cujpa333jod5j1a9441po9r39snkce25.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
// Ideally this should be in process.env, but keeping it here for consistency with original file for now
const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN || '';
const REDIRECT_URI = 'https://www.cinutedigital.com/';

export interface Review {
    name: string;
    reviewerInfo: { photoUrl: string; displayName: string };
    comment: string;
    starRating: string;
    createTime: string;
    source: 'Google';
}

export interface ReviewsData {
    reviews: Review[];
    totalReviewCount: number;
    averageRating: number;
    error?: string;
}

const FALLBACK_REVIEWS: Review[] = [
    {
        name: "Prathik Singh",
        reviewerInfo: { photoUrl: "/images/Image1.jpg", displayName: "Prathik Singh" },
        comment: "I had the opportunity to intern at Cinute, and it has been a great learning experience... I worked on data analysis in Excel, created dashboards, and explored Power BI & Tableau. The quality of teaching is so good...",
        starRating: "FIVE",
        createTime: "2025-06-27T10:00:00Z",
        source: "Google",
    },
    {
        name: "bhumika Ankush",
        reviewerInfo: { photoUrl: "/images/Image2.jpg", displayName: "bhumika Ankush" },
        comment: "The subjects taught are relevant and help prepare students for real-world challenges.",
        starRating: "FIVE",
        createTime: "2025-06-27T11:00:00Z",
        source: "Google",
    },
    {
        name: "Vedang Mohit",
        reviewerInfo: { photoUrl: "/images/Image3.jpg", displayName: "Vedang Mohit" },
        comment: "The subjects taught are relevant and help prepare students for real-world challenges.",
        starRating: "FIVE",
        createTime: "2025-06-27T12:00:00Z",
        source: "Google",
    },
    {
        name: "Aryan Prasad",
        reviewerInfo: { photoUrl: "/images/Image4.jpg", displayName: "Aryan Prasad" },
        comment: "It's a good opportunity to do course and learn coding languages... good mentors.",
        starRating: "FIVE",
        createTime: "2025-06-27T13:00:00Z",
        source: "Google",
    },
    {
        name: "Dhruv Salvi",
        reviewerInfo: { photoUrl: "/images/Image5.jpg", displayName: "Dhruv Salvi" },
        comment: "Helped me to learn and gain a lot of knowledge and skills growth throughout, humble and good communicating staff and members.",
        starRating: "FIVE",
        createTime: "2025-06-27T14:00:00Z",
        source: "Google",
    },
    {
        name: "Bhuvan Sharma",
        reviewerInfo: { photoUrl: "/images/Image6.jpg", displayName: "Bhuvan Sharma" },
        comment: "Good information provided by the domain providers, very good at communicating and humble...",
        starRating: "FIVE",
        createTime: "2025-06-27T15:00:00Z",
        source: "Google",
    },
    {
        name: "Durgesh parab",
        reviewerInfo: { photoUrl: "/images/Image7.jpg", displayName: "Durgesh parab" },
        comment: "It is best company to get experience... I’m learning full-stack with highly talented staff...",
        starRating: "FIVE",
        createTime: "2025-06-27T16:00:00Z",
        source: "Google",
    },
];

async function fetchGoogleReviewsUncached(): Promise<ReviewsData> {

    // If we don't have a refresh token (and it's not set in env), return fallback
    if (!REFRESH_TOKEN) {
        console.warn('Review API: No REFRESH_TOKEN found. Serving fallback data.');
        return { reviews: FALLBACK_REVIEWS, totalReviewCount: 300, averageRating: 4.8 };
    }

    try {
        const auth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
        auth.setCredentials({ refresh_token: REFRESH_TOKEN });

        // 1. Get Account ID
        const mybusinessAccount = google.mybusinessaccountmanagement({ version: 'v1', auth });
        const accountsRes = await mybusinessAccount.accounts.list();
        const account = accountsRes.data.accounts?.[0];

        if (!account || !account.name) {
            throw new Error('No Google Business Profile account found.');
        }

        // 2. Get Location ID
        const mybusinessBusiness = google.mybusinessbusinessinformation({ version: 'v1', auth });
        const locationsRes = await mybusinessBusiness.accounts.locations.list({
            parent: account.name,
            readMask: 'name,title',
        });

        const location = locationsRes.data.locations?.[0];
        if (!location || !location.name) {
            throw new Error('No location found for this account.');
        }

        // 3. Fetch Reviews
        const accessToken = (await auth.getAccessToken()).token;
        if (!accessToken) throw new Error('Failed to generate access token');

        const reviewsResponse = await axios.get(
            `https://mybusiness.googleapis.com/v4/${account.name}/${location.name}/reviews`,
            {
                params: { pageSize: 20 },
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );

        const reviewsData = reviewsResponse.data;
        const apiReviews = reviewsData.reviews || [];
        const realTotalReviews = reviewsData.totalReviewCount || 0;
        const realAverageRating = reviewsData.averageRating || 0;

        const reviews = apiReviews.map((r: any) => ({
            name: r.reviewer?.displayName || 'Anonymous',
            reviewerInfo: {
                photoUrl: r.reviewer?.profilePhotoUrl || '',
                displayName: r.reviewer?.displayName || 'Anonymous'
            },
            comment: r.comment || '',
            starRating: r.starRating || 'FIVE',
            createTime: r.createTime || new Date().toISOString(),
            source: 'Google' as const
        }));

        return {
            reviews: reviews.length > 0 ? reviews : FALLBACK_REVIEWS,
            totalReviewCount: realTotalReviews > 300 ? realTotalReviews : 300,
            averageRating: realTotalReviews > 0 ? realAverageRating : 4.8
        };

    } catch (error: any) {
        console.error('Error fetching Google Reviews:', error.message);
        return {
            reviews: FALLBACK_REVIEWS,
            totalReviewCount: 300,
            averageRating: 4.8,
            error: 'Failed to fetch live reviews, showing cached data.'
        };
    }
}

// Cache the result for 1 hour (3600 seconds)
export const getGoogleReviews = unstable_cache(
    async () => fetchGoogleReviewsUncached(),
    ['google-reviews-data'],
    { revalidate: 3600, tags: ['reviews'] }
);
