'use client';

// Direct re-exports — dynamic(ssr:true) only added client Suspense boundaries
// that caused a hydration layout shift (see d34d08e / BLG-010).
import TestimonialsSection from '@/components/dbms-course/TestimonialsSection';
import CtaSection from '@/components/dbms-course/CtaSection';

export { TestimonialsSection, CtaSection };


export default function DbmsCourseClientContent() {
    return (
        <>


            <section id='testimonials'><TestimonialsSection /></section>

            <section id='contact'><CtaSection /></section>
        </>
    );
}
