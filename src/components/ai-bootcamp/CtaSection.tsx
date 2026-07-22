import { ArrowRight, Download, CheckCircle } from "lucide-react";
import Link from "next/link";
import EnrollButton from "./ui/EnrollButton";
import SyllabusButton from "./ui/SyllabusButton";

export default function CtaSection() {
    const courseName = "AI Bootcamp Course";

    return (
        <section className="py-10 bg-gradient-to-r from-slate-900 via-brand to-slate-900 relative overflow-hidden">
            {/* Background decoration (same style as reference) */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Main Heading – content preserved */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        Ready to Become an{" "}
                        <span className="text-orange-400">AI-Powered Digital Marketing Leader?</span>
                    </h2>

                    {/* Subheadline – original text + SEO keywords */}
                    <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                        The future of marketing is here. Don&apos;t just adapt-lead. Secure your spot in the next cohort
                        and unlock your high-income potential today with a{" "}
                        <strong>job-oriented AI digital marketing course</strong> that covers{" "}
                        <strong>performance marketing, SEO, social media marketing, marketing automation, and analytics</strong>.
                    </p>

                    {/* Key Benefits – content preserved for stats section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {[
                            {
                                title: "30 Hours",
                                description: "Intensive Training",
                            },
                            {
                                title: "100%",
                                description: "Job Assistance",
                            },
                            {
                                title: "9.6/10",
                                description: "Program Rating",
                            },
                        ].map((benefit, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20"
                            >
                                <div className="text-2xl font-bold text-white mb-2">
                                    {benefit.title}
                                </div>
                                <p className="text-sm text-slate-300">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons – keeps Enroll + Download, styled like reference */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
                        <EnrollButton
                            source="AI Bootcamp - CTA Section"
                            courseName={courseName}
                            className="cursor-pointer flex items-center justify-center bg-brand hover:bg-brand text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            Enroll Now
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </EnrollButton>
                        <SyllabusButton
                            source="AI Bootcamp - CTA Section"
                            courseName={courseName}
                            className="cursor-pointer flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-lg transition-all"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download Free Curriculum
                        </SyllabusButton>
                    </div>


                    {/* Limited Time Offer – original offer + small SEO boost */}
                    <div className="bg-orange-500/20 border-2 border-orange-400 rounded-lg p-6 mb-10">
                        <p className="text-orange-200 font-semibold mb-2">🎉 Limited Time Offer</p>
                        <p className="text-white text-lg font-bold">
                            Get <span className="text-orange-300">20% OFF</span> when you enroll this week!
                        </p>
                        <p className="text-slate-300 text-sm mt-2">
                            Plus, unlock bonus resources on{" "}
                            <strong>AI marketing tools, high-converting ad copy, and digital marketing career planning</strong>.
                        </p>
                    </div>

                    {/* What’s Included – SEO-rich checklist for the program */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 text-left">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center md:text-left">
                            What&apos;s Included in This AI Digital Marketing Bootcamp
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "30 hours of intensive, mentor-led AI-powered digital marketing training",
                                "Hybrid classroom + online live sessions for working professionals and students",
                                "Hands-on projects in SEO, Google Ads, Meta Ads, and marketing automation",
                                "Practical training on ChatGPT, Canva, GA4, and other AI marketing tools",
                                "Real-world campaign strategy for performance marketing and lead generation",
                                "Lifetime access to recorded sessions and updated course materials",
                                "Internationally recognized certification with verification QR code",
                                "job assistance with resume building and interview preparation",
                                "1:1 doubt-solving and personalized career counseling",
                                "Portfolio-ready digital marketing projects and campaign case studies",
                                "Access to an active alumni and hiring partner network",
                                "Support to transition into high-paying digital marketing and growth roles",
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-200 text-sm md:text-base">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Info – extra trust + SEO for local queries */}
                <div className="mt-16 text-center border-t border-white/10 pt-8">
                    <p className="text-slate-300 mb-4">
                        Have questions about fees, batches, or placements? Get in touch with our admissions team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
                        <Link
                            href="tel:+917888383788"
                            className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                        >
                            <span>📞</span> +91 788-83-83-788
                        </Link>
                        <div className="hidden sm:block w-px h-6 bg-white/20"></div>
                        <Link
                            href="mailto:contact@cinutedigital.com"
                            className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                        >
                            <span>✉️</span> contact@cinutedigital.com
                        </Link>
                        <div className="hidden sm:block w-px h-6 bg-white/20"></div>
                        <Link
                            href="https://www.cinutedigital.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                        >
                            <span>🌐</span> www.cinutedigital.com
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
