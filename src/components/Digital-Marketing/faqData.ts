import { HelpCircle, BookOpen, Clock, Award, DollarSign, Briefcase, Users, CheckCircle } from 'lucide-react';

export type FAQ = {
    id: number;
    icon: any;
    q: string;
    a: string;
};

// SEO-optimized FAQ data for Digital Marketing courses
export const dmFaqs: FAQ[] = [
    {
        id: 1,
        icon: HelpCircle,
        q: "What is Digital Marketing and why should I learn it?",
        a: "Digital marketing is the practice of promoting products and brands through online channels — SEO, SEM (Google Ads), social media, email, content and analytics. Learning digital marketing equips you with in-demand skills to drive website traffic, generate leads, and grow revenue. With businesses prioritizing online customer acquisition, skilled marketers see strong career growth and freelance opportunities."
    },
    {
        id: 2,
        icon: BookOpen,
        q: "Do I need technical or coding experience to learn Digital Marketing?",
        a: "No — most digital marketing roles don't require deep coding. Our course teaches practical tools and workflows: keyword research, Google Ads setup, Meta Ads, GA4 tracking, marketing automation and content strategy. Basic comfort with spreadsheets and analytics is helpful; we cover any technical gaps with step-by-step labs."
    },
    {
        id: 3,
        icon: Clock,
        q: "How long does the Digital Marketing course take to complete?",
        a: "Our flagship program runs 12–16 weeks with flexible weekend and weekday batches. Expect 6–10 hours/week of live classes, hands-on projects and campaign work. We also offer accelerated bootcamps (4–6 weeks) and self-paced options for working professionals."
    },
    {
        id: 4,
        icon: Award,
        q: "Which certifications will I get or be prepared for?",
        a: "You will receive an industry-recognized Digital Marketing Certificate and get guided prep for Google Ads Certification, Google Analytics 4 (GA4) Certification, Meta Blueprint, and email/automation certificates. Our curriculum includes exam simulators, practical labs and portfolio-ready projects to showcase skills to employers."
    },
    {
        id: 5,
        icon: DollarSign,
        q: "What salary or career outcomes can I expect after this course?",
        a: "Entry-level digital marketers in India typically start at ₹3-6 LPA; specialists in PPC, SEO or growth marketing can earn ₹5-12 LPA and senior/performance roles command higher packages. Many grads also secure freelance or contract work, increasing total earnings. Results depend on experience, location and demonstrated campaign outcomes."
    },
    {
        id: 6,
        icon: Briefcase,
        q: "What job support and placement assistance do you offer?",
        a: "We provide end-to-end career support: resume & LinkedIn optimization, interview coaching, live portfolio reviews, and direct referrals to hiring partners and marketing agencies. Graduates get access to our job board, freelance gig opportunities, and ongoing mentorship until they land roles in performance marketing, agencies, or in-house growth teams."
    },
    {
        id: 7,
        icon: Users,
        q: "What is the batch size and learning format?",
        a: "We keep small cohort sizes (max 20) for personalised feedback. Classes are live and interactive with industry practitioners; every student works on real campaign projects. You also get lifetime access to recordings, templates, and our alumni community for networking and continuous learning."
    },
    {
        id: 8,
        icon: CheckCircle,
        q: "Which tools and platforms will I learn in this course?",
        a: "Hands-on experience includes Google Ads, Google Analytics 4 (GA4), Search Console, Meta Ads Manager, SEMrush/Ahrefs for keyword research, Mailchimp/Klaviyo for email automation, Google Tag Manager, Shopify/Shopify Ads basics and analytics dashboards. We focus on tools recruiters demand for performance marketing and eCommerce growth."
    }
];
