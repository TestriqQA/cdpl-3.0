'use client';

import { Briefcase, TrendingUp, Award, CheckCircle, Sparkles, LucideIcon } from 'lucide-react';
import ReviewsMarquee from '@/components/sections/ReviewMarque';
import { EnrollFormData, EnrollPopup } from "../EnrollForms";
import { useState } from 'react';

const StatCard = ({ icon: Icon, value, label, delay }: { icon: LucideIcon; value: string; label: string; delay: number }) => (
    <div
        className="flex flex-col items-center p-6 bg-white rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-lg flex items-center justify-center mb-3">
            <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="text-sm text-gray-600 text-center">{label}</div>
    </div>
);

export default function TestimonialsSection() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleEnrollSubmit = (enroll: EnrollFormData) => {
        // Replace with real submit logic as needed
        alert(
            `Enroll Now Submitted:\nName: ${enroll.name}\nEmail: ${enroll.email}\nPhone: ${enroll.phone}`
        );
        setIsPopupOpen(false);
    };
    return (
        <section className="relative py-10 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
            </div>

            <div className="relative container mx-auto px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div
                    className="text-center mb-16"
                >
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-200/50 rounded-full mb-6"
                    >
                        <Award className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-semibold text-indigo-700">Student Success Stories</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Real Results From{" "}
                        <span className="text-brand">
                            Data Science & ML Graduates
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Join thousands of learners who advanced their careers through hands-on Data Science & Machine Learning training. See how alumni moved into data roles, shipped models to production, and boosted their earnings.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <StatCard icon={CheckCircle} value="3,200+" label="Graduates Trained" delay={0.1} />
                    <StatCard icon={TrendingUp} value="45%" label="Avg. Salary Increase" delay={0.2} />
                    <StatCard icon={Briefcase} value="Live" label="Mentor-Led Classes" delay={0.3} />
                    <StatCard icon={Award} value="425+" label="Verified Reviews" delay={0.4} />
                </div>

                <ReviewsMarquee />

                {/* Bottom CTA */}
                <div
                    className="text-center mt-10"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-indigo-50 via-cyan-50 to-pink-50 border-2 border-indigo-200 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-xl flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-gray-900 text-lg">Start Your DS & ML Story</div>
                                <div className="text-sm text-gray-600">Join our next Data Science & ML cohort — hands-on projects, mentorship, and career support.</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsPopupOpen(true)}
                            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>
                <EnrollPopup
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    onSubmit={handleEnrollSubmit}
                    source="Data Science & Machine Learning Course Category Page - Testimonials Section - Enroll Now"
                />
            </div>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </section>
    );
}
