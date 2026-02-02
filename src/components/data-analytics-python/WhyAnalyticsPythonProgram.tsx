import { Zap, Users, Award, Briefcase, Globe, Clock } from "lucide-react";

interface AdvantageCard {
    icon: React.ReactNode;
    title: string;
    description: string;
    highlight: string;
    bgColor: string;
    borderColor: string;
}

export default function WhyAnalyticsPythonProgram() {
    const advantages: AdvantageCard[] = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: "80:20 Approach",
            description: "80% practical hands-on training and 20% theory model for industry-rich experience",
            highlight: "Practical Learning",
            bgColor: "from-amber-50 to-amber-100",
            borderColor: "border-amber-300",
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "1:1 Doubt Solving",
            description: "Personalized mentoring ensures every question is answered and every doubt is resolved",
            highlight: "Personal Attention",
            bgColor: "from-blue-50 to-blue-100",
            borderColor: "border-blue-300",
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Real-Time Projects",
            description: "Gain hands-on experience with real-world projects and case studies from industry",
            highlight: "Portfolio Building",
            bgColor: "from-green-50 to-green-100",
            borderColor: "border-green-300",
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Expert Instructors",
            description: "Learn from seasoned data analysts and industry veterans with 14+ years of experience",
            highlight: "Industry Experience",
            bgColor: "from-purple-50 to-purple-100",
            borderColor: "border-purple-300",
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Certification",
            description: "Get internationally recognized certificates from AAA with unique QR code validation",
            highlight: "Career Credential",
            bgColor: "from-red-50 to-red-100",
            borderColor: "border-red-300",
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Career Support",
            description: "Receive comprehensive resume-building and interview preparation assistance",
            highlight: "Job Ready",
            bgColor: "from-cyan-50 to-cyan-100",
            borderColor: "border-cyan-300",
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "100% Job Assistance",
            description: "Stay ahead with industry-relevant training and dedicated placement support",
            highlight: "Placement Guarantee",
            bgColor: "from-orange-50 to-orange-100",
            borderColor: "border-orange-300",
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "14+ Years Expertise",
            description: "Benefit from over a decade of proven training excellence and student success",
            highlight: "Trusted Institute",
            bgColor: "from-indigo-50 to-indigo-100",
            borderColor: "border-indigo-300",
        },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Why Choose Our <span className="text-brand">Data Analytics Course</span> with Python?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                        At Cinute Digital, we answer the question <strong>"what to study to become a data analyst"</strong> with industry-aligned training. Our curriculum bridges theory with practical expertise, ensuring you learn <strong>how to use python data analysis</strong> for real business impact. Ideal for those asking <strong>who can do data analyst course</strong>.
                    </p>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${advantage.bgColor} rounded-xl p-6 border-2 ${advantage.borderColor} hover:shadow-xl transition-all duration-300 group`}
                        >
                            {/* Icon Container */}
                            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/60 backdrop-blur-sm group-hover:scale-110 transition-transform">
                                <div className="text-brand">{advantage.icon}</div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                {advantage.title}
                            </h3>

                            {/* Highlight Badge */}
                            <div className="inline-block mb-3">
                                <span className="text-xs font-semibold text-brand bg-orange-100/60 px-3 py-1 rounded-full">
                                    {advantage.highlight}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {advantage.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Why This Matters Section */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
                    <div className="max-w-3xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Transform Your Career with Confidence
                        </h3>
                        <p className="text-slate-200 leading-relaxed mb-6">
                            Our unique blend of practical training, expert mentorship, and industry-aligned curriculum ensures you&apos;re not just learning Python libraries—you&apos;re becoming a market-ready data analyst. With our 80:20 approach, real-time projects, and personalized doubt-solving, you&apos;ll master <strong>how to use python in data analysis</strong> and gain the confidence needed for a successful <strong>career in data analytics</strong>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-400 text-2xl mt-1">✓</span>
                                <div>
                                    <p className="font-semibold text-white">Industry-Aligned Curriculum</p>
                                    <p className="text-sm text-slate-300">Updated regularly with latest tools and trends</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-400 text-2xl mt-1">✓</span>
                                <div>
                                    <p className="font-semibold text-white">Proven Success Rate</p>
                                    <p className="text-sm text-slate-300">500+ successful graduates placed in top companies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
