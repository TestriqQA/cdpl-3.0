
import ReviewsMarquee from "../sections/ReviewMarque";

export default function TestimonialsSection() {

    return (
        <section className="py-10 bg-gradient-to-b from-white to-slate-50">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Success <span className="text-brand">Stories</span> from Our Data Analytics Course
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Hear from students who completed our <strong>best data analytics courses</strong> and landed top roles at leading companies.
                    </p>
                </div>

                <ReviewsMarquee />

                {/* Trust Indicators */}
                <div className="mt-10 bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Students Trust Us</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: "🎓",
                                title: "Industry-Recognized Certification",
                                description: "Get certified by AAA with international recognition",
                            },
                            {
                                icon: "👨‍🏫",
                                title: "Expert Mentors",
                                description: "Learn from professionals with 14+ years of industry experience",
                            },
                            {
                                icon: "💼",
                                title: "Job Placement Support",
                                description: "100% job assistance and placement support from our dedicated team",
                            },
                            {
                                icon: "📈",
                                title: "Career Growth",
                                description: "Average salary increase of 40-50% post-course completion",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                    <p className="text-sm text-slate-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
