import { getGoogleReviews } from "@/lib/reviews";
import ReviewsMarquee from "../sections/ReviewMarque";


export default async function TestimonialsSection() {
    const { reviews, totalReviewCount, averageRating } = await getGoogleReviews();

    return (
        <section className="py-10 bg-gradient-to-b from-white to-slate-50">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header (layout + style like reference) */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Student <span className="text-orange-600">Testimonials</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Hear from our successful graduates who have transformed their careers
                        through our <strong>AI-powered Digital Marketing Program</strong>. These
                        genuine reviews reflect real outcomes in{" "}
                        <strong>SEO, performance marketing, social media marketing</strong>, and{" "}
                        <strong>AI-driven campaign execution</strong>.
                    </p>
                </div>

                <ReviewsMarquee
                    initialReviews={reviews}
                    initialTotal={totalReviewCount.toString()}
                    initialRating={averageRating.toString()}
                />

                {/* Trust Indicators (like reference, with SEO focus) */}
                <div className="mt-4 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">
                        Why Students Trust Our Digital Marketing Course
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: "🎓",
                                title: "Industry-Recognized Digital Marketing Certification",
                                description:
                                    "Get certified by AAA with international recognition, ideal for digital marketing jobs in India and abroad.",
                            },
                            {
                                icon: "👨‍🏫",
                                title: "Expert Mentors with 14+ Years Experience",
                                description:
                                    "Learn from professionals who actively work in SEO, Google Ads, Meta Ads, and performance marketing.",
                            },
                            {
                                icon: "💼",
                                title: "100% Job & Placement Assistance",
                                description:
                                    "Dedicated career support team for resume building, LinkedIn optimization, interview prep, and job referrals.",
                            },
                            {
                                icon: "🤖",
                                title: "AI-Powered Learning Experience",
                                description:
                                    "Master AI tools like ChatGPT, DeepSeek, and Grok to create campaigns, content, and strategies faster and smarter.",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-slate-600">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-xs sm:text-sm text-slate-600 max-w-3xl">
                        Keywords: <em>digital marketing course in Mumbai</em>,{" "}
                        <em>AI digital marketing certification</em>,{" "}
                        <em>performance marketing course</em>,{" "}
                        <em>SEO and social media marketing training</em>,{" "}
                        <em>digital marketing course with placement</em>,{" "}
                        <em>best digital marketing institute with reviews</em>.
                    </p>
                </div>

                {/* Bottom Stats – content kept EXACTLY as provided */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="animate-fadeInUp">
                        <div className="text-4xl font-bold text-blue-600 mb-2">400+</div>
                        <p className="text-gray-600">Students Enrolled Monthly</p>
                    </div>
                    <div
                        className="animate-fadeInUp"
                        style={{ animationDelay: "100ms" }}
                    >
                        <div className="text-4xl font-bold text-pink-600 mb-2">9.6/10</div>
                        <p className="text-gray-600">Average Program Rating</p>
                    </div>
                    <div
                        className="animate-fadeInUp"
                        style={{ animationDelay: "200ms" }}
                    >
                        <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                        <p className="text-gray-600">Satisfaction Rate</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
