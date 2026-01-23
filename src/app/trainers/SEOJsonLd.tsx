import type { Trainer } from "./types";


/** Structured data for better SEO rich results */
export default function SEOJsonLd({ trainers }: { trainers: Trainer[] }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: trainers.map((t, i) => ({
            "@type": "Person",
            name: t.name,
            jobTitle: t.title,
            description: t.bio,
            worksFor: { "@type": "EducationalOrganization", name: "Cinute Digital" },
            url: `https://cinutedigital.com/mentors#${t.id}`,
            position: i + 1,
        })),
    } as const;


    return (
        <script
            type="application/ld+json"
            // eslint-disable next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
