// Long-form SEO copy for the affiliate page. The wording is unchanged; it is
// laid out as an article column plus highlight and audience cards.
import { BadgeIndianRupee, BriefcaseBusiness, Cookie, GraduationCap, Headset, Megaphone, PenTool, Youtube, type LucideIcon } from "lucide-react";
import AffiliateSectionHeader from "./AffiliateSectionHeader";

const HIGHLIGHTS: { Icon: LucideIcon; title: string; text: string }[] = [
    { Icon: BadgeIndianRupee, title: "High Commission Rates", text: "Earn up to 25% commission on every successful referral." },
    { Icon: Cookie, title: "Cookie Duration", text: "Benefit from a 60-day cookie window, ensuring you get credit for sales even if they happen weeks later." },
    { Icon: Megaphone, title: "Marketing Assets", text: "Access a library of high-converting banners, email templates, and social media creatives." },
    { Icon: Headset, title: "Dedicated Support", text: "Get personalized guidance from our affiliate managers to optimize your campaigns." },
];

const AUDIENCE: { Icon: LucideIcon; tile: string; title: string; text: string }[] = [
    { Icon: Youtube, tile: "bg-rose-500", title: "Tech Bloggers & YouTubers", text: "Review our courses and share tutorials." },
    { Icon: BriefcaseBusiness, tile: "bg-sky-600", title: "Career Coaches", text: "Recommend upskilling paths to your clients." },
    { Icon: GraduationCap, tile: "bg-emerald-600", title: "Students & Alumni", text: "Refer friends and classmates to earn while you learn." },
    { Icon: PenTool, tile: "bg-indigo-600", title: "Digital Marketers", text: "Run campaigns targeting career switchers and tech enthusiasts." },
];

export default function AffiliateContentSection() {
    return (
        <section aria-labelledby="why-join-heading" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                {/* Article */}
                <div className="lg:col-span-7">
                    <AffiliateSectionHeader id="why-join-heading" eyebrow="The program" title="Why Join the CDPL Affiliate" accent="Partner Program?" />
                    <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-600">
                        <p>
                            The <strong className="text-slate-900">CDPL Affiliate Program</strong> is designed for content creators, educators, tech influencers, and digital marketers who want to monetize their audience by promoting high-quality <strong className="text-slate-900">IT training and certification courses</strong>. As a partner, you can earn substantial recurring commissions by referring students to our industry-leading programs in <strong className="text-slate-900">Software Testing (Manual & Automation)</strong>, <strong className="text-slate-900">Data Science</strong>, <strong className="text-slate-900">Full-Stack Development</strong>, and <strong className="text-slate-900">Cloud Computing</strong>.
                        </p>
                        <h3 className="pt-2 text-2xl font-bold tracking-tight text-slate-900">Maximize Your Earnings with High-Demand Tech Skills</h3>
                        <p>
                            The demand for skilled tech professionals is at an all-time high. By partnering with CDPL, you are promoting courses that lead to real career outcomes. Our <strong className="text-slate-900">placement support</strong> and <strong className="text-slate-900">project-based learning</strong> approach make our courses highly attractive to students and professionals looking to upskill. This ensures high conversion rates and consistent revenue for our affiliates.
                        </p>
                        <p>
                            Start your journey towards financial freedom today. Join the <strong className="text-slate-900">comprehensive education affiliate program in India</strong> and help shape the future of tech talent while growing your income.
                        </p>
                    </div>
                </div>

                {/* Highlights */}
                <aside className="lg:col-span-5">
                    <div className="rounded-3xl border border-orange-100 bg-orange-50/60 p-6 sm:p-7">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Program highlights</h3>
                        <ul className="mt-4 space-y-4">
                            {HIGHLIGHTS.map(({ Icon, title, text }) => (
                                <li key={title} className="flex items-start gap-3">
                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand ring-1 ring-orange-100" aria-hidden="true">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="font-semibold text-slate-900">{title}</p>
                                        <p className="mt-0.5 text-sm leading-6 text-slate-600">{text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>

            {/* Who should join */}
            <div className="mt-14">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                    Who Should <span className="text-brand">Join?</span>
                </h3>
                <p className="mt-2 text-slate-600">Our program is perfect for:</p>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {AUDIENCE.map(({ Icon, tile, title, text }) => (
                        <li key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-3">
                                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white shadow-md ${tile}`} aria-hidden="true">
                                    <Icon className="h-5 w-5" />
                                </span>
                                <p className="font-semibold leading-snug text-slate-900">{title}</p>
                            </div>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
