// Digital Marketing category hub (/courses/digital-marketing-courses), rendered by
// src/components/category-hub/CategoryHubPage.tsx.
//
// Moved from the old src/components/Digital-Marketing/* sections and their
// data.ts / faqData.ts. SEO copy is kept; dropped as filler: the mobile-only
// duplicate h2 and intro, a second stats row, the "20% discount" promo, the
// second consultation form, per-card buttons that only opened the enrol modal,
// and the "Still Have Questions?" box. Copy that had been pasted from other
// hubs is fixed for this one ("ISTQB" certifications, data-science project
// benefits). Counts and rates that BLG-205 removes site-wide ("4,200+ Marketers
// Trained", "89% Placement & Freelance Rate", "750+ Agency & Hiring Partners")
// are replaced with the defensible stats the other hubs use.

import type { CategoryHubContent } from "@/types/categoryHub";
import type { CourseCardIcon } from "@/components/courses/CourseCard";

const DM = "/courses/digital-marketing-courses";

type RawCourse = {
  id: number;
  title: string;
  category: string;
  description: string;
  duration: string;
  students: string;
  level: string;
  popular: boolean;
  link: string;
  titleAttribute: string;
  icon: CourseCardIcon;
  features: string[];
  syllabusLink: string;
};

const RAW_COURSES: RawCourse[] = [
    {
        id: 24,
        title: 'AI-Driven Digital Marketing & Analytics',
        category: 'Digital Marketing',
        description: 'End-to-end mastery: full-funnel strategies, analytics-driven decisions, and campaign leadership.',
        duration: '80 Hours',
        students: '2,200+',
        level: 'Master',
        popular: true,
        link: '/courses/digital-marketing-courses/digital-marketing-course',
        titleAttribute: 'Digital Marketing and Analytics Course',
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
        level: 'Beginner',
        popular: true,
        link: '/courses/digital-marketing-courses/ai-in-digital-marketing',
        titleAttribute: 'Digital Marketing and AI for Business Owners Course',
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
        level: 'Beginner',
        popular: true,
        link: '/courses/digital-marketing-courses/ai-bootcamp',
        titleAttribute: 'Digital Marketing with AI Bootcamp',
        icon: 'Smartphone',
        features: ['Prompt Engineering for Ads & Copywriting', 'AI Tools Mastery (ChatGPT, Claude, Midjourney, ElevenLabs, etc.)', 'Automated Funnels & Omnichannel AI Workflows', 'AI-Driven Performance Marketing & ROAS Optimization'],
        syllabusLink: 'https://www.cinutedigital.com/downloads/digital-marketing-with-ai-bootcamp-digital-marketing-with-ai-bootcamp.pdf',
    },
];

export const digitalMarketingHub: CategoryHubContent = {
  category: "digital-marketing",
  sourceName: "Digital Marketing Course Category Page",

  seo: {
    title: "Digital Marketing Courses | SEO, SEM, SMM & More",
    description:
      "Become a certified digital marketer with our industry-focused courses. Learn SEO, PPC, social media marketing, and content strategy.",
    keywords: ["digital marketing course", "SEO training", "social media marketing", "PPC course", "digital marketing certification"],
    image: "/og-images/courses-digital-marketing-courses-og.webp",
  },

  hero: {
    breadcrumb: "Digital Marketing",
    badges: [
      { icon: "sparkles", text: "India's comprehensive Digital Marketing Training Institute" },
      { icon: "users", text: "{studentsPlaced} Students Placed" },
      { icon: "star", text: "{rating} Student Rating" },
      { icon: "award", text: "Industry-Led Expert Mentors" },
    ],
    h1: "Master [[Digital Marketing]] & Analytics - Build measurable impact",
    subtitle:
      "Hands-on live projects, real growth stacks and mentor-led coaching to help you transition into high-growth marketing roles. Portfolio-ready work and recruiter introductions included.",
    description:
      "CDPL’s program covers SEO, Google Ads, Meta Ads, content marketing, email campaigns, analytics (GA4), and conversion optimization — tailored for working professionals and freshers looking for measurable growth.",
    ctas: [
      { label: "Download Brochure", kind: "brochure", primary: true },
      { label: "Watch CDPL", kind: "video", href: "https://www.youtube.com/watch?v=8kB2wESj1n8" },
    ],
    highlights: [
      "100% Live Interactive Classes",
      "90+ Real-World Projects",
      "GA4 & Looker Dashboards",
      "Industry Certifications",
      "Job Support",
      "Flexible Batches",
      "Lifetime Access",
    ],
  },

  why: {
    eyebrow: "Digital Marketing Excellence",
    heading: "Become a Digital Marketer - [[Grow Traffic & Revenue]]",
    intro:
      "Learn the full digital marketing stack: SEO, PPC, social media, content marketing, analytics and automation. Hands-on campaigns, real business projects and career support to drive measurable growth.",
    cards: [
      {
        icon: "search",
        title: "SEO Strategy & Technical SEO",
        description:
          "Master search engine optimization (SEO) with keyword research, on-page SEO, technical SEO audits, schema markup, site speed optimization and backlink strategies to rank higher in Google Search.",
      },
      {
        icon: "mousePointerClick",
        title: "Paid Media & Google Ads (PPC)",
        description:
          "Learn Google Ads search, display & shopping campaigns, bid strategies, audience targeting, remarketing, and optimization techniques for measurable ROI in performance marketing.",
      },
      {
        icon: "share2",
        title: "Social Media Marketing & Community Growth",
        description:
          "Create high-converting campaigns on Facebook, Instagram, LinkedIn and YouTube — content planning, paid social ads, organic growth tactics and community management for brand engagement.",
      },
      {
        icon: "penTool",
        title: "Content Marketing & SEO Copywriting",
        description:
          "Develop content strategies, blog and video SEO, pillar-cluster models and persuasive copywriting that drives organic traffic, backlinks and lead generation.",
      },
      {
        icon: "lineChart",
        title: "Analytics, GA4 & Conversion Rate Optimization (CRO)",
        description:
          "Use Google Analytics 4, Search Console, tag management and A/B testing to track funnels, improve conversion rates and make data-driven marketing decisions.",
      },
      {
        icon: "mail",
        title: "Email Marketing & Marketing Automation",
        description:
          "Build high-performing email funnels, segmentation and automation using tools like Mailchimp and Klaviyo to nurture leads, reduce churn and boost LTV (customer lifetime value).",
      },
      {
        icon: "shoppingCart",
        title: "Ecommerce & Marketplace Advertising",
        description:
          "Optimize product listings, run Amazon ads and performance campaigns for Shopify/BigCommerce stores — learn catalog management, dynamic retargeting and ROAS optimization.",
      },
      {
        icon: "users",
        title: "Influencer, Affiliate & Growth Hacking",
        description:
          "Scale customer acquisition with influencer collaborations, affiliate programs, viral growth loops and pragmatic growth-hacking experiments tailored for rapid user acquisition.",
      },
      {
        icon: "award",
        title: "Capstone Projects & Career Support",
        description:
          "Complete real-world capstones: multi-channel campaigns, analytics dashboards and portfolio case studies. Get interview prep, resume reviews and placement assistance for digital marketing roles.",
      },
    ],
    outro: "Ready to level up? Start running performance-driven marketing campaigns today.",
    ctas: [{ label: "Explore Digital Marketing Courses", kind: "scroll", href: "courses" }],
  },

  courses: {
    eyebrow: "Popular Courses",
    heading: "Explore Our [[Industry-Ready]] Courses",
    intro:
      "Choose from our comprehensive range of courses designed to make you job-ready with hands-on projects and expert mentorship.",
    items: RAW_COURSES.map((c) => ({
      title: c.title,
      description: c.description,
      duration: c.duration,
      level: c.level,
      students: c.students,
      popular: c.popular,
      link: c.link,
      linkTitle: c.titleAttribute,
      features: c.features,
      syllabusLink: c.syllabusLink,
      icon: c.icon,
    })),
    viewAll: { label: "View All Courses", href: "/courses", title: "View All Courses" },
  },

  // The old hub showed each course's full module list in tabs. That syllabus
  // lives on each course page; the hub shows which one to take.
  path: {
    eyebrow: "Comprehensive Curriculum",
    heading: "[[Digital Marketing Course Syllabus]] & Learning Path",
    intro:
      "Not sure where to start? Begin with the AI bootcamp, take the business owners’ program to grow your own brand, or go end to end with the master program. Each course page has the full module-by-module syllabus.",
    stages: [
      {
        title: "AI Bootcamp",
        description:
          "Start here if you are new to marketing: strategy, buyer personas and local optimization, SEO tools and GA4, Google Ads and Meta Ads, then a capstone multi-channel strategy.",
        topics: [
          "Strategy Building",
          "Google Business Profile & WhatsApp Business",
          "SEO Fundamentals & Tools",
          "Google Ads Mastery",
          "Meta Ads & Social Content",
          "Engagement & Email Automation",
          "Capstone Project",
        ],
        courses: [{ title: "Digital Marketing With AI Bootcamp", href: `${DM}/ai-bootcamp` }],
      },
      {
        title: "For Business Owners",
        description:
          "For founders, CEOs and solopreneurs growing their own brand with AI: SEO and social media, persuasive copy, paid ads on Google, Facebook and LinkedIn, conversion tracking and CRO, and email and WhatsApp automation.",
        topics: [
          "SEO & Social Media Marketing",
          "Persuasive Copywriting",
          "Google & Facebook Ads",
          "LinkedIn & Other Platforms",
          "Conversion Tracking & CRO",
          "Media Planning & Dashboards",
          "Attribution Models",
          "Email & WhatsApp Automation",
        ],
        courses: [{ title: "Digital Marketing and AI (For Business Owners)", href: `${DM}/ai-in-digital-marketing` }],
      },
      {
        title: "Master Program",
        description:
          "The full career track, from marketing fundamentals to SEO, social media and PPC campaigns, email funnels and GA4 analytics, ending in a full-funnel capstone, a portfolio and interview prep.",
        topics: [
          "Digital Marketing Fundamentals",
          "SEO & Content Mastery",
          "Social Media & PPC Campaigns",
          "Email & Automation Funnels",
          "Analytics & Data-Driven Decisions",
          "CRO & Media Planning",
          "Capstone & Interview Prep",
        ],
        courses: [{ title: "AI-Driven Digital Marketing & Analytics", href: `${DM}/digital-marketing-course` }],
      },
    ],
  },

  testimonials: {
    eyebrow: "Digital Marketing Success Stories",
    heading: "Real Results From [[Digital Marketing Graduates]]",
    intro:
      "Join thousands of marketers who scaled careers with advanced Digital Marketing training — SEO, Google Ads (PPC), Facebook & Instagram Ads, content marketing, email automation and analytics (GA4). Our alumni run performance marketing campaigns, boost organic traffic, increase conversions and grow revenue for eCommerce and SaaS brands.",
    extras: [
      {
        kind: "stats",
        items: [
          { value: "{rating}", label: "Learner Rating" },
          { value: "58%", label: "Avg. Campaign ROI Increase" },
          { value: "Live", label: "Mentor-Led Classes" },
        ],
      },
    ],
    outro:
      "**Start Your Digital Marketing Journey** — join our next Digital Marketing cohort: hands-on campaigns, SEO & PPC projects, and career support to land roles in performance marketing and eCommerce growth.",
    ctas: [{ label: "Enroll in Digital Marketing", kind: "enroll" }],
  },

  projects: {
    eyebrow: "Capstone Projects",
    heading: "Hands-On [[Digital Marketing Projects]]",
    intro: "Apply your learning through practical, industry-relevant projects that strengthen your portfolio.",
    items: [
      {
        icon: "search",
        title: "E-Commerce SEO Campaign",
        description: "Full SEO audit and optimization for an online store.",
        tags: ["SEO", "Keyword Research", "On-Page Optimization", "Analytics"],
        meta: "Intermediate",
      },
      {
        icon: "megaphone",
        title: "Social Media Brand Launch",
        description: "Create and run a 30-day social media campaign.",
        tags: ["Social Media", "Content Creation", "Paid Ads", "Engagement"],
        meta: "Intermediate",
      },
      {
        icon: "mousePointerClick",
        title: "PPC Lead Generation",
        description: "Set up Google Ads for lead gen with ROI tracking.",
        tags: ["PPC", "Google Ads", "Conversion Tracking", "Remarketing"],
        meta: "Advanced",
      },
      {
        icon: "layoutDashboard",
        title: "Full-Funnel Analytics Dashboard",
        description: "Build GA4 dashboard for multi-channel campaign analysis.",
        tags: ["Google Analytics", "Data Visualization", "Attribution", "Reporting"],
        meta: "Advanced",
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Why Build These Projects?",
        text: "Gain hands-on experience from keyword research to live ad campaigns and analytics dashboards — the exact skills hiring managers ask for.",
      },
      {
        kind: "cards",
        items: [
          {
            icon: "briefcase",
            title: "Portfolio-Ready Projects",
            description:
              "Build production-grade Digital Marketing projects that demonstrate your end-to-end capabilities to employers.",
          },
          {
            icon: "award",
            title: "Industry Recognition",
            description: "Projects modeled after real business problems faced by marketing teams across industries.",
          },
          {
            icon: "zap",
            title: "Interview Confidence",
            description: "Discuss actual implementations in interviews — from SEO audits to paid campaign optimization.",
          },
        ],
      },
    ],
  },

  career: {
    eyebrow: "Career Opportunities",
    heading: "Digital Marketing [[Jobs & Career Roles]]",
    intro: "Launch your career in digital marketing. Explore diverse career paths after completing the course.",
    paths: [
      {
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
          "Coordinate with design and content teams",
        ],
        opportunities: ["Startups", "Agencies", "E-Commerce", "Brands"],
        hiringCompanies: ["Zomato", "Swiggy", "Nykaa", "Myntra"],
      },
      {
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
          "Analyze competitor performance and traffic trends",
        ],
        opportunities: ["Agencies", "Tech Companies", "E-Commerce", "Consulting"],
        hiringCompanies: ["Amazon", "Flipkart", "MakeMyTrip", "BookMyShow"],
      },
      {
        role: "PPC Analyst",
        demandLevel: "High",
        experience: "1-3 Years",
        description: "Manage paid ad budgets and performance.",
        salaryRange: "₹6-12 LPA",
        skills: ["Google Ads", "Bidding", "ROI Analysis", "A/B Testing"],
        responsibilities: [
          "Setup and optimize Google Ads and Meta Ads campaigns",
          "Manage ad budgets and bid strategies",
          "Conduct A/B testing for ad creatives and landing pages",
          "Analyze ROAS and CPA metrics",
        ],
        opportunities: ["Agencies", "Brands", "Performance Marketing Firms"],
        hiringCompanies: ["Google", "Facebook", "Adobe", "Salesforce"],
      },
      {
        role: "Digital Marketing Manager",
        demandLevel: "Very High",
        experience: "5+ Years",
        description: "Lead teams and strategies for digital growth.",
        salaryRange: "₹10-18 LPA",
        skills: ["Strategy", "Analytics", "Team Leadership", "Budgeting"],
        responsibilities: [
          "Develop comprehensive digital marketing strategies",
          "Lead and mentor digital marketing teams",
          "Manage marketing budgets and allocate resources",
          "Oversee all digital channels and performance metrics",
        ],
        opportunities: ["Corporates", "Agencies", "Startups", "Brands"],
        hiringCompanies: ["HUL", "P&G", "Reliance", "Tata Digital"],
      },
    ],
    // The old bold line "Ready to Launch Your Digital Marketing Career?" is the
    // closing band's heading, so it isn't repeated here.
    outro: "Get personalized career guidance and placement support.",
    ctas: [
      { label: "Talk to Career Counselor", kind: "careerSession" },
      { label: "Download Career Guide", kind: "brochure" },
      { label: "View Job Openings", kind: "link", href: "/jobs/live-jobs" },
    ],
  },

  // One list for the page and its FAQPage schema (the old page used the same
  // eight for both).
  faq: {
    intro:
      "Everything you need to know about our Digital Marketing course, campaign skills, certifications, and how we help you launch or scale your marketing career.",
    items: [
      {
        question: "What is Digital Marketing and why should I learn it?",
        answer:
          "Digital marketing is the practice of promoting products and brands through online channels — SEO, SEM (Google Ads), social media, email, content and analytics. Learning digital marketing equips you with in-demand skills to drive website traffic, generate leads, and grow revenue. With businesses prioritizing online customer acquisition, skilled marketers see strong career growth and freelance opportunities.",
      },
      {
        question: "Do I need technical or coding experience to learn Digital Marketing?",
        answer:
          "No — most digital marketing roles don't require deep coding. Our course teaches practical tools and workflows: keyword research, Google Ads setup, Meta Ads, GA4 tracking, marketing automation and content strategy. Basic comfort with spreadsheets and analytics is helpful; we cover any technical gaps with step-by-step labs.",
      },
      {
        question: "How long does the Digital Marketing course take to complete?",
        answer:
          "Our flagship program runs 12–16 weeks with flexible weekend and weekday batches. Expect 6–10 hours/week of live classes, hands-on projects and campaign work. We also offer accelerated bootcamps (4–6 weeks) and self-paced options for working professionals.",
      },
      {
        question: "Which certifications will I get or be prepared for?",
        answer:
          "You will receive an industry-recognized Digital Marketing Certificate and get guided prep for Google Ads Certification, Google Analytics 4 (GA4) Certification, Meta Blueprint, and email/automation certificates. Our curriculum includes exam simulators, practical labs and portfolio-ready projects to showcase skills to employers.",
      },
      {
        question: "What salary or career outcomes can I expect after this course?",
        answer:
          "Entry-level digital marketers in India typically start at ₹3-6 LPA; specialists in PPC, SEO or growth marketing can earn ₹5-12 LPA and senior/performance roles command higher packages. Many grads also secure freelance or contract work, increasing total earnings. Results depend on experience, location and demonstrated campaign outcomes.",
      },
      {
        question: "What job support and placement assistance do you offer?",
        answer:
          "We provide end-to-end career support: resume & LinkedIn optimization, interview coaching, live portfolio reviews, and direct referrals to hiring partners and marketing agencies. Graduates get access to our job board, freelance gig opportunities, and ongoing mentorship until they land roles in performance marketing, agencies, or in-house growth teams.",
      },
      {
        question: "What is the batch size and learning format?",
        answer:
          "We keep small cohort sizes (max 20) for personalised feedback. Classes are live and interactive with industry practitioners; every student works on real campaign projects. You also get lifetime access to recordings, templates, and our alumni community for networking and continuous learning.",
      },
      {
        question: "Which tools and platforms will I learn in this course?",
        answer:
          "Hands-on experience includes Google Ads, Google Analytics 4 (GA4), Search Console, Meta Ads Manager, SEMrush/Ahrefs for keyword research, Mailchimp/Klaviyo for email automation, Google Tag Manager, Shopify/Shopify Ads basics and analytics dashboards. We focus on tools recruiters demand for performance marketing and eCommerce growth.",
      },
    ],
  },

  cta: {
    heading: "Ready to Launch Your [[Digital Marketing Career]]?",
    intro: "Join students who launched careers in SEO, PPC, Social Media & Growth Marketing.",
    actions: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Brochure", kind: "brochure" },
    ],
    highlights: [
      { icon: "search", title: "Comprehensive SEO & Technical SEO training" },
      { icon: "mousePointerClick", title: "Google Ads (PPC) & Meta Ads mastery" },
      { icon: "lineChart", title: "GA4, Tag Manager & Marketing Analytics" },
      { icon: "share2", title: "Content Marketing & Social Media Growth" },
      { icon: "workflow", title: "Email Automation & Marketing Funnels" },
      { icon: "shoppingCart", title: "Ecommerce & Performance Marketing Projects" },
    ],
    footnotes: [
      { icon: "phone", text: "+91 84-889-889-84" },
      { icon: "mail", text: "contact@cinutedigital.com" },
      { icon: "mapPin", text: "Mumbai, Maharashtra, India" },
    ],
  },
};
