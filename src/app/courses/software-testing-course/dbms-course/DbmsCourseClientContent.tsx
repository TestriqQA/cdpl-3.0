'use client';

import dynamic from 'next/dynamic';

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}


export const TestimonialsSection = dynamic(() => import('@/components/dbms-course/TestimonialsSection'), { ssr: true, loading: () => <SectionLoader label="Loading testimonials..." /> });

export const CtaSection = dynamic(() => import('@/components/dbms-course/CtaSection'), { ssr: true, loading: () => <SectionLoader label="Loading CTA..." /> });


export default function DbmsCourseClientContent() {
    return (
        <>


            <section id='testimonials'><TestimonialsSection /></section>

            <section id='contact'><CtaSection /></section>
        </>
    );
}
