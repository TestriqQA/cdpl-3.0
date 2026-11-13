import Image from "next/image";
import type React from "react";
import { UserPlus, Link2 as LinkIcon, MousePointerClick, Receipt, WalletMinimal, CheckCircle2 } from "lucide-react";
import AffiliateSectionHeader from "./AffiliateSectionHeader";

type Step = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    sub: string;
};

const steps: Step[] = [
    { icon: UserPlus, title: "Apply & Get Approved", sub: "Tell us about your audience niche. Most decisions within 2–3 business days." },
    { icon: LinkIcon, title: "Grab Your Link", sub: "Get unique referral links for training, events, and CDPL services." },
    { icon: MousePointerClick, title: "Share Across Channels", sub: "Blog posts, emails, socials, or communities — your call." },
    { icon: Receipt, title: "Leads & Conversions", sub: "We nurture leads with high-performing, SEO-backed content." },
    { icon: WalletMinimal, title: "Earn Recurring Commission", sub: "Get paid monthly. Hit milestones to unlock higher tiers." },
    { icon: CheckCircle2, title: "Grow Together", sub: "Co-branded webinars, case studies, and premium content drops." },
];

export default function AffiliateHowItWorksSection({
    imageSrc = "/affiliate_images/affiliate_steps.png",
    imageAlt = "Affiliate program illustration",
}: {
    imageSrc?: string;
    imageAlt?: string;
}) {
    return (
        <section
            id="how-it-works"
            aria-labelledby="how-heading"
            className="mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8"
            data-scroll-target="how-it-works"
        >
            <AffiliateSectionHeader
                id="how-heading"
                eyebrow="How it works"
                title="From application to"
                accent="payout"
                subtitle="A simple, transparent flow designed to respect your audience and reward consistency."
            />

            <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[420px_1fr] lg:gap-14">
                {/* Illustration */}
                <div className="relative mx-auto w-full max-w-md">
                    <div aria-hidden="true" className="absolute inset-8 rounded-full bg-brand/15 blur-3xl" />
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={820}
                        height={820}
                        sizes="(max-width: 1024px) 90vw, 420px"
                        className="relative h-auto w-full select-none"
                        style={{
                            WebkitMaskImage: "radial-gradient(130% 120% at 60% 40%, black 70%, transparent 100%)",
                            maskImage: "radial-gradient(130% 120% at 60% 40%, black 70%, transparent 100%)",
                        }}
                    />
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-5 left-5 top-5 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-orange-200 via-orange-500 to-orange-200"
                    />
                    <ol className="space-y-4">
                        {steps.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <li key={s.title} className="relative flex items-start gap-4">
                                    <span
                                        className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white shadow-md ring-4 ring-orange-100"
                                        aria-hidden="true"
                                    >
                                        {i + 1}
                                    </span>
                                    <div className="flex-1 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                                        <div className="flex items-center gap-3">
                                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-orange-50 text-brand ring-1 ring-orange-100" aria-hidden="true">
                                                <Icon className="h-4 w-4" />
                                            </span>
                                            <h3 className="font-semibold text-slate-900">
                                                <span className="sr-only">Step {i + 1}: </span>
                                                {s.title}
                                            </h3>
                                        </div>
                                        <p className="mt-2 text-sm leading-6 text-slate-600">{s.sub}</p>
                                        {i === 0 && (
                                            <a
                                                href="#apply"
                                                className="mt-3 inline-flex items-center rounded-lg border border-orange-200 bg-orange-50 px-3 py-1.5 text-sm font-semibold text-brand transition hover:bg-orange-100"
                                            >
                                                Start application
                                            </a>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    );
}
