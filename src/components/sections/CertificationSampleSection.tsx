import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

/** "Authenticity you can trust": the pitch beside a framed sample certificate. Server component. */
export default function CertificationSampleSection() {
    return (
        <section aria-labelledby="cert-sample-heading" className="bg-white py-12 lg:py-16">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
                <div className="lg:col-span-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        Gold Standard Verification
                    </span>
                    <h2 id="cert-sample-heading" className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        Authenticity you can <span className="text-brand">trust</span>
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        Our certificates are more than just images. They are digital assets backed by a secure, real-time
                        registry. Recruiters can verify credentials instantly, ensuring that every CDPL scholar gets the
                        recognition they deserve.
                    </p>
                    <a
                        href="#validator-section"
                        className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
                    >
                        Validate now <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                </div>

                <div className="relative lg:col-span-7">
                    <div aria-hidden="true" className="absolute inset-6 rounded-3xl bg-brand/20 blur-3xl" />
                    <figure className="relative mx-auto max-w-[40rem] rounded-3xl border border-slate-200 bg-white p-3 shadow-xl sm:p-4">
                        <Image
                            src="/certifications_images/cdpl_certifications_validation/cdpl_certificate_validation.webp"
                            alt="Sample CDPL course completion certificate"
                            width={2000}
                            height={1414}
                            className="h-auto w-full rounded-2xl"
                            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 80vw, 640px"
                            quality={50}
                        />
                        <figcaption className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-slate-600">
                            <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                            Every certificate carries a unique, verifiable ID
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}
