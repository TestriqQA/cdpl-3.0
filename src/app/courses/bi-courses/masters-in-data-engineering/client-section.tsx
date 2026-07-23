'use client';

// Direct re-exports — dynamic(ssr:true) only added client Suspense boundaries
// that caused a hydration layout shift (see d34d08e / BLG-010).
export { default as TestimonialsClient } from "@/components/masters-in-data-engineering/TestimonialsSection";
export { default as CtaClient } from "@/components/masters-in-data-engineering/CtaSection";
