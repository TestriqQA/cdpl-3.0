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
    _updatedAt?: string; // BLG-149 — actual CMS edit time for accurate JobPosting dateModified
}

// BLG-133 follow-up — hiringPartner doc type, projected for the partners rail.
export interface SanityHiringPartner {
    _id: string;
    name: string;
    logoUrl?: string;  // GROQ projects logo.asset->url
    logoAlt?: string;  // GROQ projects logo.alt
    website?: string;
}

// BLG-133 follow-up — mentor doc type, projected for the /mentors page +
// JSON-LD. Mapped to the legacy `Mentor` shape in src/lib/mentors.ts.
export interface SanityMentor {
    _id: string;
    name: string;
    slug?: string;
    role: string;
    currentCompany?: string;
    domain?: string;
    location?: string;
    yearsOfExperience?: number;
    photoUrl?: string;
    shortBio?: string;
    expertise?: string[];
    social?: {
        linkedin?: string;
        twitter?: string;
        github?: string;
        website?: string;
    };
}

// BLG-133 follow-up — service doc type, projected for /services + /services/[slug].
// Field names mirror the `ServiceClient` shape (src/types/service.ts) so the
// mapper in src/lib/services.ts is a flat projection. `iconName` is a
// lucide-react component name (string).
export interface SanityService {
    _id: string;
    slug?: string;
    title: string;
    tagline?: string;
    shortDescription?: string;
    fullDescription?: string;
    iconName?: string;
    color?: string;
    features?: string[];
    benefits?: string[];
    whoShouldAttend?: string[];
    deliveryFormats?: { format: string; duration: string; description?: string }[];
    curriculum?: { module: string; topics?: string[] }[];
    outcomes?: string[];
    methodology?: string[];
    stats?: { label: string; value: number; suffix?: string }[];
    keywords?: string[];
    ogImage?: string;
}

// BLG-133 follow-up — event doc type, projected for /events + /events/[slug].
// Mapped to the legacy `PastEvent` shape in src/lib/events.ts; the mapper
// fills in CDPL defaults when organizerInfo/venueInfo are left blank.
export interface SanityEvent {
    _id: string;
    slug?: string;
    title: string;
    subtitle?: string;
    format?: string;
    startDate?: string;
    endDate?: string;
    location?: string;
    summary?: string;
    category?: string;
    serviceType?: string;
    attendees?: number;
    purpose?: string;
    trainingDuration?: string;
    success?: string;
    featured?: boolean;
    videoUrl?: string;
    sessionHighlights?: { title: string; points?: string[] }[];
    keyTakeaways?: { title: string; description: string }[];
    highlights?: string[];
    specialSession?: { speaker?: string; topic?: string; highlights?: string[] };
    registrationUrl?: string;
    coverImageUrl?: string;
    coverImageAlt?: string;
    galleryUrls?: string[];
    organizerInfo?: {
        name?: string;
        website?: string;
        facebook?: string;
        instagram?: string;
        twitter?: string;
        youtube?: string;
        about?: string;
        details?: string;
        imageUrl?: string;
    };
    venueInfo?: {
        title?: string;
        address?: string;
        description?: string;
        imageUrl?: string;
        fallbackImageUrl?: string;
    };
    speakers?: {
        name?: string;
        role?: string;
        company?: string;
        linkedinUrl?: string;
        photoUrl?: string;
    }[];
}
