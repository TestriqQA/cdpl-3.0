'use client';

import { motion } from 'framer-motion';
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
 * Digital Marketing Features section
 * - Reuses the polished card layout & gradients
 * - Content rewritten and SEO-optimized for Digital Marketing Courses
 */

/* ----------------------------
   Digital Marketing Features (content)
   ---------------------------- */
const dsmlFeatures = [
    {
        icon: Brain,
        title: 'SEO Strategy & Technical SEO',
        desc: 'Master search engine optimization (SEO) with keyword research, on-page SEO, technical SEO audits, schema markup, site speed optimization and backlink strategies to rank higher in Google Search.',
    },
    {
        icon: Database,
        title: 'Paid Media & Google Ads (PPC)',
        desc: 'Learn Google Ads search, display & shopping campaigns, bid strategies, audience targeting, remarketing, and optimization techniques for measurable ROI in performance marketing.',
    },
    {
        icon: BarChart3,
        title: 'Social Media Marketing & Community Growth',
        desc: 'Create high-converting campaigns on Facebook, Instagram, LinkedIn and YouTube — content planning, paid social ads, organic growth tactics and community management for brand engagement.',
    },
    {
        icon: TrendingUp,
        title: 'Content Marketing & SEO Copywriting',
        desc: 'Develop content strategies, blog and video SEO, pillar-cluster models and persuasive copywriting that drives organic traffic, backlinks and lead generation.',
    },
    {
        icon: LineChart,
        title: 'Analytics, GA4 & Conversion Rate Optimization (CRO)',
        desc: 'Use Google Analytics 4, Search Console, tag management and A/B testing to track funnels, improve conversion rates and make data-driven marketing decisions.',
    },
    {
        icon: Zap,
        title: 'Email Marketing & Marketing Automation',
        desc: 'Build high-performing email funnels, segmentation and automation using tools like Mailchimp and Klaviyo to nurture leads, reduce churn and boost LTV (customer lifetime value).',
    },
    {
        icon: Target,
        title: 'Ecommerce & Marketplace Advertising',
        desc: 'Optimize product listings, run Amazon ads and performance campaigns for Shopify/BigCommerce stores — learn catalog management, dynamic retargeting and ROAS optimization.',
    },
    {
        icon: Users,
        title: 'Influencer, Affiliate & Growth Hacking',
        desc: 'Scale customer acquisition with influencer collaborations, affiliate programs, viral growth loops and pragmatic growth-hacking experiments tailored for rapid user acquisition.',
    },
    {
        icon: Award,
        title: 'Capstone Projects & Career Support',
        desc: 'Complete real-world capstones: multi-channel campaigns, analytics dashboards and portfolio case studies. Get interview prep, resume reviews and placement assistance for digital marketing roles.',
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
        iconBg: 'bg-gradient-to-br from-brand to-amber-700',
        glow: 'group-hover:shadow-brand/20',
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
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative h-full"
            aria-label={title}
        >
            {/* subtle animated gradient backdrop on hover */}
            <div className={`absolute inset-0 ${theme.bg} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 ${theme.glow}`} />

            <div className={`relative h-full ${theme.bg} ${theme.border} border-2 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 shadow-lg ${theme.glow} group-hover:shadow-2xl`}>
                <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 ${theme.iconBg} rounded-xl shadow-lg mb-5 group-hover:shadow-xl transition-shadow duration-300`}
                >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
                    {desc}
                </p>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.08 + 0.25 }}
                    className={`absolute bottom-0 left-0 h-1 ${theme.iconBg} rounded-b-xl`}
                />
            </div>
        </motion.div>
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
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto mb-16">
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-700">Digital Marketing Excellence</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        Become a Digital Marketer - <span className="text-brand">Grow Traffic & Revenue</span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Learn the full digital marketing stack: SEO, PPC, social media, content marketing, analytics and automation. Hands-on campaigns, real business projects and career support to drive measurable growth.
                    </p>
                </motion.div>

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
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-16">
                    <p className="text-gray-600 mb-6">Ready to level up? Start running performance-driven marketing campaigns today.</p>
                    <motion.button onClick={scrollToCourses} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <Target className="w-5 h-5" />
                        Explore Digital Marketing Courses
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
