import { iconMap } from '@/components/Digital-Marketing/CoursesSection';

// export const features = [
//     {
//         icon: Zap,
//         title: 'Hands-On Live Classes',
//         desc: 'Interactive Python & ML sessions with live coding — not just slides.',
//     },
//     {
//         icon: Users,
//         title: 'Small Batches & Mentor Support',
//         desc: 'Max 15 learners per batch with 1:1 mentor reviews, weekly doubt clears & career coaching.',
//     },
//     {
//         icon: Briefcase,
//         title: 'Job-Ready Portfolio & Placement Support',
//         desc: '90+ real projects, portfolio reviews, mock interviews & guaranteed interview opportunities.',
//     },
//     {
//         icon: Award,
//         title: 'Industry-Aligned Certifications',
//         desc: 'Certificates covering Python, ML, Deep Learning & MLOps recognized by hiring partners.',
//     },
//     {
//         icon: Clock,
//         title: 'Flexible Batches & Lifetime Access',
//         desc: 'Weekend or weekday batches + lifetime access to recordings, notebooks and updates.',
//     },
//     {
//         icon: ShieldCheck,
//         title: 'Production & MLOps Training',
//         desc: 'Model deployment, Docker, APIs, monitoring & MLOps best practices for real-world ML systems.',
//     },
// ];

export interface Course {
    id: number;
    title: string;
    category: string;
    description: string;
    duration: string;
    students: string;
    rating: number;
    level: string;
    popular: boolean;
    link: string;
    icon: keyof typeof iconMap;
    features: string[];
    /** Optional per-course offer end timestamp (ISO). If omitted, defaults to +48h from mount */
    offerEndsAt?: string;
    syllabusLink?: string;
}

export const COURSES: Course[] = [
    {
        id: 24,
        title: 'AI-Driven Digital Marketing & Analytics',
        category: 'Digital Marketing',
        description: 'End-to-end mastery: full-funnel strategies, analytics-driven decisions, and campaign leadership.',
        duration: '80 Hours',
        students: '2,200+',
        rating: 4.8,
        level: 'Master',
        popular: true,
        link: '/courses/digital-marketing-courses/digital-marketing-course',
        icon: 'Smartphone',
        features: ['Holistic Strategy & Planning', 'Advanced Analytics & Attribution', 'Multi-Channel Campaigns', 'Portfolio & Freelance Readiness'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/ai-driven-digital-marketing-&-analytics.pdf',
    },
    {
        id: 25,
        title: 'Digital Marketing and AI (For Business Owners)',
        category: 'Digital Marketing',
        description: 'Leverage AI to grow your business faster and cheaper – no agency needed. Perfect for founders, CEOs & solopreneurs.',
        duration: '50 Hours',
        students: '2,217+',
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/courses/digital-marketing-courses/ai-in-digital-marketing',
        icon: 'Smartphone',
        features: ['AI-Powered Market Research & Customer Avatars', 'Automated Content Creation at Scale', 'AI Ads Optimization & Predictive Analytics', 'Build Your Own No-Code AI Marketing Team'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/digital-marketing-and-ai-for-business-owners-digital-marketing-and-ai-for-business-owners.pdf',
    },
    {
        id: 26,
        title: 'Digital Marketing With AI Bootcamp',
        category: 'Digital Marketing',
        description: 'Become a future-ready digital marketer: master AI tools, prompt engineering for ads & content, and run hyper-personalized campaigns.',
        duration: '30 Hours',
        students: '2,234+',
        rating: 4.8,
        level: 'Beginner',
        popular: true,
        link: '/courses/digital-marketing-courses/ai-bootcamp',
        icon: 'Smartphone',
        features: ['Prompt Engineering for Ads & Copywriting', 'AI Tools Mastery (ChatGPT, Claude, Midjourney, ElevenLabs, etc.)', 'Automated Funnels & Omnichannel AI Workflows', 'AI-Driven Performance Marketing & ROAS Optimization'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/digital-marketing-with-ai-bootcamp-digital-marketing-with-ai-bootcamp.pdf',
    },
]



export const curriculumContent = {
    title: "Detailed Curriculum",
    subtitle: "Choose a program tab to see its modules.",
    tracks: [
        // {
        //   id: "seo",
        //   title: "SEO Fundamentals",
        //   weeks: [
        //     {
        //       number: "01",
        //       title: "SEO Basics & Keyword Research",
        //       description: "Search engines, SERPs, keyword tools (Ahrefs/SEMrush).",
        //       deliverables: ["Keyword list", "mini audit"]
        //     },
        //     {
        //       number: "02",
        //       title: "On-Page Optimization",
        //       description: "Meta tags, content optimization, site structure.",
        //       deliverables: ["Optimized page", "checklist"]
        //     },
        //     {
        //       number: "03",
        //       title: "Technical SEO",
        //       description: "Site speed, mobile-first, schema markup.",
        //       deliverables: ["Audit report", "fixes implemented"]
        //     },
        //     {
        //       number: "04",
        //       title: "Off-Page & Local SEO",
        //       description: "Backlinks, Google My Business, local rankings.",
        //       deliverables: ["Link strategy", "GBP setup"]
        //     }
        //   ]
        // },
        // {
        //   id: "social-media",
        //   title: "Social Media Marketing",
        //   weeks: [
        //     {
        //       number: "01",
        //       title: "Platform Fundamentals",
        //       description: "Facebook/Instagram/Twitter/LinkedIn setup & best practices.",
        //       deliverables: ["Profile optimization", "content calendar"]
        //     },
        //     {
        //       number: "02",
        //       title: "Organic Content Strategy",
        //       description: "Posting schedules, hashtags, engagement tactics.",
        //       deliverables: ["10-post series", "engagement report"]
        //     },
        //     {
        //       number: "03",
        //       title: "Paid Social Ads",
        //       description: "Ad manager, targeting, budgeting.",
        //       deliverables: ["Campaign launch", "ad creatives"]
        //     },
        //     {
        //       number: "04",
        //       title: "Analytics & Optimization",
        //       description: "Insights analysis, A/B testing.",
        //       deliverables: ["Performance dashboard", "optimization plan"]
        //     }
        //   ]
        // },
        // {
        //   id: "ppc",
        //   title: "PPC Advertising (Google Ads)",
        //   weeks: [
        //     {
        //       number: "01",
        //       title: "Google Ads Setup",
        //       description: "Account creation, campaign types.",
        //       deliverables: ["Account ready", "keyword plan"]
        //     },
        //     {
        //       number: "02",
        //       title: "Search Campaigns",
        //       description: "Ad groups, bidding strategies.",
        //       deliverables: ["Live campaign", "ad copy set"]
        //     },
        //     {
        //       number: "03",
        //       title: "Display & Remarketing",
        //       description: "Visual ads, audience lists.",
        //       deliverables: ["Remarketing setup", "display ads"]
        //     },
        //     {
        //       number: "04",
        //       title: "Optimization & Reporting",
        //       description: "Quality score, conversions, reports.",
        //       deliverables: ["Monthly report", "optimization tweaks"]
        //     }
        //   ]
        // },
        // {
        //   id: "content",
        //   title: "Content Marketing",
        //   weeks: [
        //     {
        //       number: "01",
        //       title: "Content Strategy",
        //       description: "Buyer personas, content pillars.",
        //       deliverables: ["Persona sheets", "pillar content"]
        //     },
        //     {
        //       number: "02",
        //       title: "Blogging & SEO Content",
        //       description: "Writing, optimization tools.",
        //       deliverables: ["3 blog posts", "SEO checklist"]
        //     },
        //     {
        //       number: "03",
        //       title: "Visual & Video Content",
        //       description: "Canva, YouTube basics.",
        //       deliverables: ["Video script", "infographic"]
        //     },
        //     {
        //       number: "04",
        //       title: "Distribution & Promotion",
        //       description: "Guest posting, syndication.",
        //       deliverables: ["Promotion plan", "distribution report"]
        //     }
        //   ]
        // },
        // {
        //   id: "email",
        //   title: "Email Marketing",
        //   weeks: [
        //     {
        //       number: "01",
        //       title: "Email Basics & Tools",
        //       description: "Mailchimp setup, list building.",
        //       deliverables: ["Campaign ready", "list import"]
        //     },
        //     {
        //       number: "02",
        //       title: "Newsletter Design",
        //       description: "Templates, personalization.",
        //       deliverables: ["Newsletter series", "design assets"]
        //     },
        //     {
        //       number: "03",
        //       title: "Automation & Sequences",
        //       description: "Drip campaigns, triggers.",
        //       deliverables: ["Automated workflow", "test run"]
        //     },
        //     {
        //       number: "04",
        //       title: "Metrics & Compliance",
        //       description: "Open rates, GDPR compliance.",
        //       deliverables: ["Analytics report", "compliance checklist"]
        //     }
        //   ]
        // },
        // {
        //   id: "analytics",
        //   title: "Google Analytics & Digital Analytics",
        //   weeks: [
        //     {
        //       number: "01",
        //       title: "GA4 Setup",
        //       description: "Installation, events tracking.",
        //       deliverables: ["GA4 property", "tracking code"]
        //     },
        //     {
        //       number: "02",
        //       title: "Reports & Audiences",
        //       description: "Real-time, acquisition reports.",
        //       deliverables: ["Custom report", "segment creation"]
        //     },
        //     {
        //       number: "03",
        //       title: "Conversions & Ecommerce",
        //       description: "Goal setup, funnel visualization.",
        //       deliverables: ["Conversion tracking", "funnel analysis"]
        //     },
        //     {
        //       number: "04",
        //       title: "Advanced Insights",
        //       description: "BigQuery integration, dashboards.",
        //       deliverables: ["Data Studio dashboard", "insights summary"]
        //     }
        //   ]
        // },
        // {
        //   id: "advanced",
        //   title: "Advanced Digital Marketing",
        //   weeks: [
        //     {
        //       number: "01",
        //       title: "Omnichannel Strategies",
        //       description: "Integration across channels.",
        //       deliverables: ["Omnichannel plan", "mapping"]
        //     },
        //     {
        //       number: "02",
        //       title: "CRO & A/B Testing",
        //       description: "Tools like Optimizely.",
        //       deliverables: ["Test plan", "results analysis"]
        //     },
        //     {
        //       number: "03",
        //       title: "AI & Automation",
        //       description: "Chatbots, predictive analytics.",
        //       deliverables: ["AI tool setup", "automation script"]
        //     },
        //     {
        //       number: "04",
        //       title: "Growth Hacking",
        //       description: "Viral loops, scaling tactics.",
        //       deliverables: ["Growth playbook", "case study"]
        //     }
        //   ]
        // },
        {
            id: "master-program",
            title: "Digital Marketing and Analytics - Master Program",
            weeks: [
                {
                    number: "01-02",
                    title: "Digital Marketing Fundamentals",
                    description: "Set marketing objectives; research market & competitors; map funnels and buyer journeys; define audience segments and buyer personas; craft value propositions; learn channel taxonomy (Paid/Owned/Earned/Shared), inorganic vs organic mix, and choose the right channels with real brand case studies.",
                    deliverables: ["Marketing plan outline", "Channel audit with buyer personas", "Fundamentals quiz"]
                },
                {
                    number: "03-04",
                    title: "SEO & Content Mastery",
                    description: "SEO basics (Google updates, ranking analysis), keyword research & mapping, title/meta optimization, content SEO and internal linking, off-page/link building, technical SEO intro, mistakes & penalties, plus persuasive copywriting for ads/LPs (value proposition, headlines, storytelling, layouts, A/B testing).",
                    deliverables: ["SEO audit report (incl. keyword map)", "10 content pieces with on-page SEO", "Content & landing-page strategy doc"]
                },
                {
                    number: "05-06",
                    title: "Social Media & PPC Campaigns",
                    description: "Social media strategy (B2B vs B2C, algorithms, formats, metrics) across YouTube/LinkedIn/Instagram/Twitter; Google Ads (Search/Display/Discovery/YouTube/UAC: structure, match types, bidding, audiences, tracking); Meta Ads (objectives, CBO/ABO, placements, funnels, ROAS), plus LinkedIn & alternative networks (Amazon/Apple Search/Quora/Taboola/Outbrain).",
                    deliverables: ["Live social campaign with content calendar", "Google Ads account setup & first campaigns", "Performance reports with optimization notes"]
                },
                {
                    number: "07-08",
                    title: "Email & Automation Funnels",
                    description: "Email marketing best practices (KPIs, tips, journeys), WhatsApp marketing dos & don’ts, and marketing automation stacks (rule/creative automation, omni-channel) with practical orchestration using tools like Zapier; build blended email + WhatsApp journeys with tracking.",
                    deliverables: ["Email funnel with sequences & KPIs", "Automation workflow (Zapier/omni-channel)", "A/B test results & learnings"]
                },
                {
                    number: "09-10",
                    title: "Analytics & Data-Driven Decisions",
                    description: "Conversion tracking (events, GA4 migration, funnels, attribution), cookies/FLoC basics, web & app analytics (GA4/Mixpanel/Matomo), heatmaps & session recording (Clarity/Hotjar), dashboards in Looker/Data Studio (connectors, filters), and attribution models (last/first/linear/time-decay/position/U/V-shaped) with custom model design.",
                    deliverables: ["Analytics dashboard (Looker/Data Studio)", "ROI & attribution analysis (GA4)", "Data insights report with recommendations"]
                },
                {
                    number: "11-12",
                    title: "Advanced Strategy & Capstone Project",
                    description: "CRO end-to-end (observe → ideate → test → deploy with heuristics, quant/qual data, hypothesis & prioritization, statistics); media planning & buying (mix, budgets, RTB/programmatic, brand safety, evaluation); capstone: build a full-funnel strategy and complete job-prep (resume/LinkedIn, mock interviews, negotiation).",
                    deliverables: ["Capstone campaign (full-funnel plan)", "Portfolio site with case studies", "Interview prep kit & mock feedback"]
                }
            ]
        },
        {
            id: "dm-ai-business-owners",
            title: "Digital Marketing and AI (For Business Owners)",
            weeks: [
                {
                    number: "01-03",
                    title: "Fundamentals of Digital Marketing, SEO, and Social Media Marketing",
                    description: "Gain a comprehensive understanding of digital marketing fundamentals, including setting objectives, market research, buyer personas, and channel selection. Master SEO basics with AI integration for keyword research and optimization, and develop social media strategies using AI for content creation and automation across platforms like YouTube, LinkedIn, Instagram, and Twitter.",
                    deliverables: ["Buyer Persona and Value Proposition Development", "Keyword Mapping Audit of a Website", "Content Calendar and AI-Generated Social Media Content", "Social Media Progress Report"]
                },
                {
                    number: "04-06",
                    title: "Persuasive Copywriting and Paid Marketing on Google and Facebook",
                    description: "Learn to craft compelling copy for ads and landing pages, including A/B testing and brand guidelines. Explore Google Ads for search, display, video, and app campaigns with advanced bidding and optimization. Dive into Facebook Ads with audience targeting, bid strategies, placements, ROAS calculation, and automation tools like RevealBot and Madgicx.",
                    deliverables: ["Value Proposition Build", "Google Ads Account Structure for E-commerce Brand", "Facebook Ads Account Setup with Campaigns, Audiences, Creatives, and Copies"]
                },
                {
                    number: "07-09",
                    title: "Marketing on LinkedIn & Other Platforms, Conversion Tracking, and CRO",
                    description: "Understand LinkedIn Ads, targeting, lead gen, and alternative networks like Quora, Apple Search, Amazon, and native ads. Implement conversion tracking with cookies, GA4 migration, user behavior analysis, and tools like Microsoft Clarity. Master CRO processes including hypothesis creation, testing, and deployment with best practices.",
                    deliverables: ["LinkedIn Marketing Plan for an Edtech Company", "GA4 Setup and Various Useful Reports", "10 CRO Hypotheses Prioritized with ICE Framework and 3 Executed Tests"]
                },
                {
                    number: "10-13",
                    title: "Media Planning, Dashboards, Attribution, and Email/WhatsApp Automation",
                    description: "Learn media planning fundamentals, budget allocation, buying methods, and evaluation metrics. Build data visualization dashboards using Data Studio. Explore attribution models, custom designs for B2B/B2C, and algorithms. Implement email and WhatsApp marketing best practices, metrics, and automation with tools like Zapier.",
                    deliverables: ["GA4 Reports for Business", "Dashboard Built on Data Studio", "Custom Attribution Model", "Email and WhatsApp Marketing Campaign Automated with Zapier"]
                }
            ]
        },
        {
            id: "dm-ai-bootcamp",
            title: "Digital Marketing With AI Bootcamp",
            weeks: [
                {
                    number: "01",
                    title: "Introduction to Digital Marketing, Strategy Building, and Local Optimization",
                    description: "Cover the evolution of digital marketing, buyer personas, funnels, SWOT analysis, Google Business Profile optimization, and WhatsApp Business marketing setups.",
                    deliverables: ["Buyer Persona Creation", "GMB Account Optimization", "WhatsApp Business Profile and Campaigns"]
                },
                {
                    number: "02",
                    title: "SEO Fundamentals and Tools",
                    description: "Dive into on-page and off-page SEO, technical aspects, Google Search Console, GA4 setup, and performance reporting.",
                    deliverables: ["On-Page Optimization Plan", "Off-Page Link Building Strategy", "GA4 Custom Dashboards"]
                },
                {
                    number: "03",
                    title: "Google Ads Mastery",
                    description: "Learn Google Ads account structure, keyword types, ad copies, bidding, Google Display Network, YouTube ads, and performance optimization.",
                    deliverables: ["Search Campaign Setup", "Display and YouTube Ad Creatives"]
                },
                {
                    number: "04",
                    title: "Meta Ads and Social Content",
                    description: "Explore Facebook and Instagram Ads in detail, including setup, optimization, A/B testing, social media content strategies, and Canva design for posts and ads.",
                    deliverables: ["Meta Pixel Installation", "Lead Generation Ads", "Content Calendar", "Canva-Designed Creatives"]
                },
                {
                    number: "05-06",
                    title: "Advanced Engagement, Automation, and Capstone",
                    description: "Cover influencer marketing, community building, email automation, YouTube optimization, affiliate basics, ORM, competitor analysis, A/B testing, analytics, and a capstone project to build and present a full multi-channel strategy.",
                    deliverables: ["Influencer Outreach Plan", "Email Campaign with Auto-Responders", "YouTube Channel Optimization", "Affiliate Promotion Strategy", "ORM Monitoring Plan", "Competitor Benchmark Report", "A/B Test Results", "Capstone Full Marketing Strategy Presentation"]
                }
            ]
        }

    ]
};


export const careerPathContent = {
    title: "Career Opportunities",
    description: "Explore diverse career paths after completing the course.",
    subtitle: "Launch your career in digital marketing.",
    paths: [
        {
            id: 1,
            role: "Digital Marketing Executive",
            trending: true,
            demandLevel: "High",
            experience: "0-2 Years",
            description: "Execute day-to-day digital campaigns across channels.",
            salaryRange: "₹4-8 LPA",
            skills: ["SEO", "Social Media", "Content", "Basic Analytics"],
            responsibilities: [
                "Manage social media accounts and content calendar",
                "Assist in SEO keyword research and on-page optimization",
                "Monitor campaign performance and prepare reports",
                "Coordinate with design and content teams"
            ],
            opportunities: ["Startups", "Agencies", "E-Commerce", "Brands"],
            hiringCompanies: ["Zomato", "Swiggy", "Nykaa", "Myntra"]
        },
        {
            id: 2,
            role: "SEO Specialist",
            trending: true,
            demandLevel: "Very High",
            experience: "2-4 Years",
            description: "Optimize websites for search engine rankings.",
            salaryRange: "₹5-10 LPA",
            skills: ["Technical SEO", "Link Building", "Keyword Strategy", "Tools"],
            responsibilities: [
                "Conduct technical SEO audits and fix issues",
                "Develop and execute link building strategies",
                "Optimize website content and meta tags",
                "Analyze competitor performance and traffic trends"
            ],
            opportunities: ["Agencies", "Tech Companies", "E-Commerce", "Consulting"],
            hiringCompanies: ["Amazon", "Flipkart", "MakeMyTrip", "BookMyShow"]
        },
        {
            id: 3,
            role: "PPC Analyst",
            trending: false,
            demandLevel: "High",
            experience: "1-3 Years",
            description: "Manage paid ad budgets and performance.",
            salaryRange: "₹6-12 LPA",
            skills: ["Google Ads", "Bidding", "ROI Analysis", "A/B Testing"],
            responsibilities: [
                "Setup and optimize Google Ads and Meta Ads campaigns",
                "Manage ad budgets and bid strategies",
                "Conduct A/B testing for ad creatives and landing pages",
                "Analyze ROAS and CPA metrics"
            ],
            opportunities: ["Agencies", "Brands", "Performance Marketing Firms"],
            hiringCompanies: ["Google", "Facebook", "Adobe", "Salesforce"]
        },
        {
            id: 4,
            role: "Digital Marketing Manager",
            trending: false,
            demandLevel: "Very High",
            experience: "5+ Years",
            description: "Lead teams and strategies for digital growth.",
            salaryRange: "₹10-18 LPA",
            skills: ["Strategy", "Analytics", "Team Leadership", "Budgeting"],
            responsibilities: [
                "Develop comprehensive digital marketing strategies",
                "Lead and mentor digital marketing teams",
                "Manage marketing budgets and allocate resources",
                "Oversee all digital channels and performance metrics"
            ],
            opportunities: ["Corporates", "Agencies", "Startups", "Brands"],
            hiringCompanies: ["HUL", "P&G", "Reliance", "Tata Digital"]
        }
    ]
};


export const projectsContent = {
    title: "Hands-On Projects",
    description: "Build real-world projects to strengthen your portfolio.",
    subtitle: "Apply your learning through practical, industry-relevant projects.",
    projects: [
        {
            name: "E-Commerce SEO Campaign",
            description: "Full SEO audit and optimization for an online store.",
            skills: ["SEO", "Keyword Research", "On-Page Optimization", "Analytics"],
            difficulty: "Intermediate"
        },
        {
            name: "Social Media Brand Launch",
            description: "Create and run a 30-day social media campaign.",
            skills: ["Social Media", "Content Creation", "Paid Ads", "Engagement"],
            difficulty: "Intermediate"
        },
        {
            name: "PPC Lead Generation",
            description: "Set up Google Ads for lead gen with ROI tracking.",
            skills: ["PPC", "Google Ads", "Conversion Tracking", "Remarketing"],
            difficulty: "Advanced"
        },
        {
            name: "Full-Funnel Analytics Dashboard",
            description: "Build GA4 dashboard for multi-channel campaign analysis.",
            skills: ["Google Analytics", "Data Visualization", "Attribution", "Reporting"],
            difficulty: "Advanced"
        }
    ]
};
