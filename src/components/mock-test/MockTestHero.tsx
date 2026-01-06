
import { Sparkles } from "lucide-react";

export default function MockTestHero() {
    return (
        <header className="mb-24 text-center max-w-4xl mx-auto">
            {/* LCP Optimization: Removed motion.div entrance animation to ensure text is visible immediately */}
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-8">
                    <Sparkles className="w-4 h-4" />
                    <span>Premium Mock Assessments</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Validate your expertise with <span className="text-blue-600 relative whitespace-nowrap">
                        Precision.
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>
                </h1>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                    Industry-standard simulation environments designed to test your depth of knowledge.
                    Select a domain below to begin your evaluation.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500">
                    {[
                        "Real-time Scoring",
                        "Adaptive Difficulty",
                        "Instant Certification"
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            {feature}
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
}
