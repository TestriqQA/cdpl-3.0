'use client';

import {
    Brain,
    Database,
    BarChart3,
    TrendingUp,
    LineChart,
    Zap,
    Target,
    Users,
    Award,
    Sparkles,
} from 'lucide-react';

/**
 * Data Science & Machine Learning Features section
 * - Uses the polished card layout & gradients from the BI design you provided
 * - Content is rewritten to be specific to Data Science & ML courses
 */

/* ----------------------------
   DS&ML Features (content)
   ---------------------------- */
const dsmlFeatures = [
    {
        icon: Brain,
        title: 'Machine Learning Foundations',
        desc: 'Understand supervised & unsupervised learning, model selection, evaluation metrics, and build classical ML models (logistic regression, trees, SVMs) with hands-on labs.',
    },
    {
        icon: Database,
        title: 'Data Wrangling & Feature Engineering',
        desc: 'Master data cleaning, transformation, feature creation, and pipelines using pandas, SQL, and best practices to prepare production-grade datasets.',
    },
    {
        icon: BarChart3,
        title: 'Exploratory Data Analysis & Visualization',
        desc: 'Learn to analyze distributions, correlations, and communicate insights using Matplotlib, Seaborn and interactive dashboards to influence business decisions.',
    },
    {
        icon: TrendingUp,
        title: 'Deep Learning & Neural Networks',
        desc: 'Build, train and tune neural networks for image, text and tabular data using PyTorch/TensorFlow — covering CNNs, RNNs, transformers and best optimization practices.',
    },
    {
        icon: LineChart,
        title: 'Time Series & Forecasting',
        desc: 'Model time-dependent data with ARIMA, Prophet and modern deep learning approaches for robust forecasting and anomaly detection in real-world systems.',
    },
    {
        icon: Zap,
        title: 'Model Deployment & MLOps',
        desc: 'Deploy models to production with Docker, REST endpoints, CI/CD pipelines and monitor model performance using proper logging, retraining strategies and versioning.',
    },
    {
        icon: Target,
        title: 'Statistical Modeling & Experimental Design',
        desc: 'Gain statistical intuition: hypothesis testing, A/B testing, causal inference and confidence intervals to make data-driven product decisions.',
    },
    {
        icon: Users,
        title: 'NLP & Computer Vision Applications',
        desc: 'Implement real-world NLP pipelines (tokenization, embeddings, transformers) and CV tasks (object detection, segmentation) with practical projects.',
    },
    {
        icon: Award,
        title: 'Capstone Projects & Career Support',
        desc: 'Complete end-to-end capstones, prepare a portfolio, get interview coaching and hiring connections to land roles as Data Scientist, ML Engineer, or Researcher.',
    },
];

/* ----------------------------
   Gradient themes (reused pattern)
   ---------------------------- */
const gradientThemes = [
    {
        bg: 'bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10',
        border: 'border-blue-200/50',
        iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
        glow: 'group-hover:shadow-blue-500/20',
    },
    {
        bg: 'bg-gradient-to-br from-purple-500/10 via-fuchsia-500/10 to-purple-600/10',
        border: 'border-purple-200/50',
        iconBg: 'bg-gradient-to-br from-purple-500 to-fuchsia-600',
        glow: 'group-hover:shadow-purple-500/20',
    },
    {
        bg: 'bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-emerald-600/10',
        border: 'border-emerald-200/50',
        iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
        glow: 'group-hover:shadow-emerald-500/20',
    },
    {
        bg: 'bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-brand/10',
        border: 'border-orange-200/50',
        iconBg: 'bg-gradient-to-br from-brand to-amber-600',
        glow: 'group-hover:shadow-orange-500/20',
    },
    {
        bg: 'bg-gradient-to-br from-rose-500/10 via-pink-500/10 to-rose-600/10',
        border: 'border-rose-200/50',
        iconBg: 'bg-gradient-to-br from-rose-500 to-pink-600',
        glow: 'group-hover:shadow-rose-500/20',
    },
    {
        bg: 'bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-indigo-600/10',
        border: 'border-indigo-200/50',
        iconBg: 'bg-gradient-to-br from-indigo-500 to-violet-600',
        glow: 'group-hover:shadow-indigo-500/20',
    },
    {
        bg: 'bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-cyan-600/10',
        border: 'border-cyan-200/50',
        iconBg: 'bg-gradient-to-br from-cyan-500 to-sky-600',
        glow: 'group-hover:shadow-cyan-500/20',
    },
    {
        bg: 'bg-gradient-to-br from-amber-500/10 via-yellow-500/10 to-amber-600/10',
        border: 'border-amber-200/50',
        iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-600',
        glow: 'group-hover:shadow-amber-500/20',
    },
    {
        bg: 'bg-gradient-to-br from-slate-500/10 via-gray-500/10 to-slate-600/10',
        border: 'border-slate-200/50',
        iconBg: 'bg-gradient-to-br from-slate-500 to-gray-600',
        glow: 'group-hover:shadow-slate-500/20',
    },
];

/* ----------------------------
   Feature Card component (polished)
   ---------------------------- */
const FeatureCard = ({ icon: Icon, title, desc, theme, index }: { icon: any; title: string; desc: string; theme: any; index: number }) => {

    return (
        <div
            className="group relative h-full hover:-translate-y-1.5 transition-transform duration-300"
            aria-label={title}
        >
            {/* subtle animated gradient backdrop on hover */}
            <div className={`absolute inset-0 ${theme.bg} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 ${theme.glow}`} />

            <div className={`relative h-full ${theme.bg} ${theme.border} border-2 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 shadow-lg ${theme.glow} group-hover:shadow-2xl`}>
                <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${theme.iconBg} rounded-xl shadow-lg mb-5 group-hover:shadow-xl transition-shadow duration-300 hover:scale-105`}
                >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
                    {desc}
                </p>

                <div
                    className={`absolute bottom-0 left-0 h-1 ${theme.iconBg} rounded-b-xl`}
                />
            </div>
        </div>
    );
};

/* ----------------------------
   Main Section
   ---------------------------- */
export default function DSMLFeaturesSection() {

    // Smooth scroll to #courses on same page
    const scrollToCourses = () => {
        if (typeof window === 'undefined') return;
        const el = document.getElementById('courses');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Fallback: try scrolling to an anchor named courses
            const anchor = document.querySelector('a[name="courses"]') as HTMLElement | null;
            if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <section className="relative py-10 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
            {/* subtle patterned background (keeps spacing lightweight) */}
            <div className="absolute inset-0 bg-grid-gray-100/40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Data Science & ML Excellence</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Become a Data Scientist - <span className="text-brand">Build & Deploy Models</span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Learn the full data science lifecycle: data engineering, modeling, evaluation, and production deployment. Projects, mentorship and career support included.
                    </p>
                </div>

                {/* features grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dsmlFeatures.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            desc={feature.desc}
                            theme={gradientThemes[index % gradientThemes.length]}
                            index={index}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 mb-6">Ready to level up? Start building production-ready ML systems today.</p>
                    <button onClick={scrollToCourses} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <Target className="w-5 h-5" />
                        Explore DS & ML Courses
                    </button>
                </div>
            </div>
        </section>
    );
}
