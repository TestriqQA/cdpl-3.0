export type DeliveryFormat = {
    format: string;
    duration: string;
    description: string;
};

export type StatItem = {
    label: string;
    value: number;      // use integer or float; suffix below controls display
    suffix?: string;    // e.g. "%", "/5"
};

export interface ServiceClient {
    id: string;
    slug: string;
    iconName: string;           // string key for lucide-react icon
    title: string;
    tagline: string;
    shortDescription: string;
    fullDescription: string;
    color?: string;             // e.g. "from-sky-500 to-indigo-600"
    features: string[];
    benefits: string[];
    whoShouldAttend: string[];
    deliveryFormats: DeliveryFormat[];
    outcomes: string[];
    methodology: string[];
    stats?: StatItem[];
    keywords?: string[];
    /** Social share image: a site path or an absolute (Sanity CDN) URL. */
    ogImage?: string;
}

export interface ServiceEvent {
    id: string;
    slug: string;
    title: string;
    date: string;
    organization: string;
    attendees: number;
    purpose: string;
    category: string;
    categoryColor: string; // Tailwind class e.g. "bg-purple-600"
}
