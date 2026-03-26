// =============================
// components/our-team/JsonLdOrganization.tsx
// =============================
import type { TeamMember } from "./types";


export default function JsonLdOrganization({ data }: { data: TeamMember[] }) {
    const org = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Cinute Digital",
        url: "https://cinutedigital.com/",
        logo: "https://cinutedigital.com/logo.png",
        sameAs: [
            "https://www.linkedin.com/company/cinute-digital/",
            "https://www.facebook.com/",
        ],
        employee: data.map((m) => ({
            "@type": "Person",
            name: m.name,
            jobTitle: m.title,
            worksFor: "Cinute Digital",
            url: m.linkedin ?? "https://cinutedigital.com/mentors/",
        })),
    } as const;


    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
    );
}
