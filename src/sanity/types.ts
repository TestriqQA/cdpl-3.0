export interface SanityAuthor {
    name: string;
    slug: string;
    avatar?: string;
    bio?: string;
    role?: string;
    social?: {
        linkedin?: string;
        twitter?: string;
        github?: string;
        website?: string;
    }
}

export interface SanityCategory {
    name: string;
    slug: string;
    description?: string;
    color?: {
        bg: string;
        text: string;
    }
}

export interface SanityPost {
    _id: string;
    title: string;
    slug: string; // Query returns string
    publishDate: string;
    excerpt?: string;
    description?: string;
    featuredImage?: string; // Query returns URL string
    author?: SanityAuthor;
    category?: SanityCategory;
    tags?: string[];
    content?: any; // Portable Text
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        canonical?: string;
        keywords?: string[];
    }
    readTime?: string; // Calculated on client or server
}
