'use client';

import dynamic from "next/dynamic";

function SectionLoader({ label }: { label: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

export const TestimonialsClient = dynamic(
    () => import("@/components/python-course/TestimonialsSection"),
    {
        ssr: false,
        loading: () => <SectionLoader label="Loading testimonials..." />
    }
);

export const FaqClient = dynamic(
    () => import("@/components/python-course/FaqSection"),
    {
        ssr: false,
        loading: () => <SectionLoader label="Loading FAQ..." />,
    },
);

export const CtaClient = dynamic(
    () => import("@/components/python-course/CtaSection"),
    {
        ssr: false,
        loading: () => <SectionLoader label="Loading CTA..." />
    }
);
