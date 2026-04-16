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
    _updatedAt?: string; // ISO date — when the document was last edited in Sanity CMS
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

export interface SanityJob {
    _id: string;
    id: string;              // slug.current mapped as "id" for backward compat
    title: string;
    team: string;
    location: string;
    type: string;
    experience: string;
    summary: string;
    responsibilities: string[];
    requirements: string[];
    applyEmail?: string;
    applyLink?: string;
    _createdAt?: string;
}
