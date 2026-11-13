import type { LucideIcon } from "lucide-react";
import { Globe, ShieldCheck, Zap } from "lucide-react";
import { FAQSection } from "@/components/ui/FAQSection";
import { VALIDATION_FAQS, VALIDATION_STEPS } from "@/data/certificateValidationFaqs";

const FEATURES: { name: string; description: string; Icon: LucideIcon; tile: string }[] = [
    { name: "Instant Verification", description: "Real-time validation against our secure registry. Zero wait time.", Icon: Zap, tile: "bg-orange-100 text-orange-600" },
    { name: "Tamper-Proof Security", description: "Immutable digital IDs ensuring qualifications cannot be forged.", Icon: ShieldCheck, tile: "bg-emerald-100 text-emerald-600" },
    { name: "Globally Recognized", description: "Trusted credentials that serve as your digital passport worldwide.", Icon: Globe, tile: "bg-sky-100 text-sky-600" },
];

/**
 * How validation works (the page's HowTo steps), why verify with CDPL, and
 * the FAQ. The steps and FAQ read the same data as the page's schema, so
 * what Google is told is also on the page. Server component; only the FAQ
 * accordion is client-side.
 */
export default function CertificationFeaturesSection() {
    return (
        <>
            <section aria-labelledby="cert-steps-heading" className="bg-slate-50 py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
                        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
                            How it works
                        </span>
                        <h2 id="cert-steps-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Verify in <span className="text-brand">five steps</span>
                        </h2>
                    </div>

                    <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                        <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-6 hidden h-0.5 bg-orange-200 lg:block" />
                        {VALIDATION_STEPS.map((s, i) => (
                            <li key={s.name} className="relative flex flex-col items-center text-center">
                                <span className="relative grid h-12 w-12 place-items-center rounded-full bg-brand text-lg font-extrabold text-white shadow-md ring-4 ring-slate-50">
                                    {i + 1}
                                </span>
                                <h3 className="mt-4 text-lg font-bold text-slate-900">{s.name}</h3>
                                <p className="mt-1 max-w-[24ch] text-sm leading-6 text-slate-600">{s.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section aria-labelledby="cert-features-heading" className="bg-white py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
                        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
                            Why CDPL
                        </span>
                        <h2 id="cert-features-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Why verify with <span className="text-brand">CDPL</span>?
                        </h2>
                    </div>

                    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {FEATURES.map(({ name, description, Icon, tile }) => (
                            <li
                                key={name}
                                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tile}`} aria-hidden="true">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-900">{name}</h3>
                                </div>
                                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <FAQSection
                id="cert-faq"
                title={<>Frequently Asked <span className="text-brand">Questions</span></>}
                subtitle="Everything you need to know about verifying a CDPL, AAA or ACTD certificate."
                items={VALIDATION_FAQS}
                className="bg-slate-50"
            />
        </>
    );
}
