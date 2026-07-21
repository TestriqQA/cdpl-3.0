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
    () => import("@/components/machine-learning-course/TestimonialsSection"),
    {
        ssr: true,
        loading: () => <SectionLoader label="Loading testimonials..." />
    }
);

export const CtaClient = dynamic(
    () => import("@/components/machine-learning-course/CtaSection"),
    {
        ssr: true,
        loading: () => <SectionLoader label="Loading CTA..." />
    }
);
