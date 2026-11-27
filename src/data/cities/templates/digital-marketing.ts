// Shared content for every "Digital Marketing Course in <city>" page.
// Edit here to change all of them at once. Placeholders are filled per city:
// {{city}} location name, {{cityLower}} lower-case name, {{citySlug}} URL form,
// {{state}} state, {{slug}} this page's URL slug.
// A city that needs something different gets it in ../overrides/digital-marketing.ts.

import type { CityCourseTemplate } from "../types";

export const digitalMarketingTemplate: CityCourseTemplate = {
  courseName: "Digital Marketing",
  specializations: [
    "Digital Marketing and Analytics",
    "Digital Marketing and AI (For Business Owners",
    "Digital Marketing With AI Bootcamp",
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Digital Marketing", href: "/courses/digital-marketing-courses" },
    { label: "{{city}}", href: "/{{slug}}" },
  ],
  metadata: {
    title: "Digital Marketing Course in {{city}} | CDPL",
    description: "Comprehensive digital marketing course in {{city}}. Learn SEO, social media, PPC, content marketing with industry experts. job placement support.",
    keywords: "digital marketing course {{cityLower}}, seo training {{cityLower}}, ppc course {{cityLower}}, social media marketing course, digital marketing certification {{cityLower}}, analytics course maharashtra",
  },
  courseDetails: {
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    language: "English & Hindi",
    price: "₹29,999",
    discountedPrice: "₹19,999",
  },
  heroContent: {
    title: "Master Digital Marketing in {{city}}",
    subtitle: "Industry-Recognized Digital Marketing Course",
    description: "Learn comprehensive digital marketing skills from industry experts in {{city}}. Master SEO, social media, PPC, analytics, and growth strategies to launch your career in digital.",
    certifications: ["Google Analytics Certified", "Industry-Recognized", "Hands-on Projects"],
    stats: [
      { number: "5000+", label: "Students Trained", description: "Successfully completed the course" },
      { number: "92%", label: "Job Placement", description: "Within 3 months of completion" },
      { number: "12", label: "Weeks Duration", description: "Intensive learning program" },
      { number: "24/7", label: "Mentor Support", description: "Dedicated mentorship available" },
    ],
    landmarks: ["Bandra-Worli Sea Link", "Gateway of India", "Marine Drive", "Bombay Stock Exchange"],
  },
  courseOverviewContent: {
    title: "Course Modules",
    description: "Comprehensive modules covering all aspects of digital marketing",
    subtitle: "Learn industry-relevant skills with hands-on projects and real-world scenarios.",
    modules: [
      {
        icon: "Crown",
        trending: true,
        name: "Digital Marketing and Analytics - Master Program",
        description: "End-to-end mastery: full-funnel strategies, analytics-driven decisions, and campaign leadership.",
        topics: [
          "Holistic Strategy & Planning",
          "Advanced Analytics & Attribution",
          "Multi-Channel Campaigns",
          "Portfolio & Freelance Readiness",
        ],
        link: "/courses/digital-marketing-courses/digital-marketing-course",
      },
      {
        icon: "Sparkles",
        trending: true,
        name: "Digital Marketing and AI (For Business Owners)",
        description: "Leverage AI to grow your business faster and cheaper – no agency needed. Perfect for founders, CEOs & solopreneurs.",
        topics: [
          "AI-Powered Market Research & Customer Avatars",
          "Automated Content Creation at Scale",
          "AI Ads Optimization & Predictive Analytics",
          "Build Your Own No-Code AI Marketing Team",
        ],
        link: "/courses/digital-marketing-courses/ai-in-digital-marketing",
      },
      {
        icon: "Rocket",
        trending: true,
        name: "Digital Marketing With AI Bootcamp",
        description: "Become a future-ready digital marketer: master AI tools, prompt engineering for ads & content, and run hyper-personalized campaigns.",
        topics: [
          "Prompt Engineering for Ads & Copywriting",
          "AI Tools Mastery (ChatGPT, Claude, Midjourney, ElevenLabs, etc.)",
          "Automated Funnels & Omnichannel AI Workflows",
          "AI-Driven Performance Marketing & ROAS Optimization",
          "Capstone: Launch a Complete AI-Powered Campaign",
        ],
        link: "/courses/digital-marketing-courses/ai-bootcamp",
      },
    ],
  },
  curriculumContent: {
    title: "Detailed Curriculum",
    subtitle: "Choose a program tab to see its modules.",
    tracks: [
      {
        id: "master-program",
        title: "Digital Marketing and Analytics - Master Program",
        weeks: [
          {
            number: "01-02",
            title: "Digital Marketing Fundamentals",
            description: "Set marketing objectives; research market & competitors; map funnels and buyer journeys; define audience segments and buyer personas; craft value propositions; learn channel taxonomy (Paid/Owned/Earned/Shared), inorganic vs organic mix, and choose the right channels with real brand case studies.",
            deliverables: ["Marketing plan outline", "Channel audit with buyer personas", "Fundamentals quiz"],
          },
          {
            number: "03-04",
            title: "SEO & Content Mastery",
            description: "SEO basics (Google updates, ranking analysis), keyword research & mapping, title/meta optimization, content SEO and internal linking, off-page/link building, technical SEO intro, mistakes & penalties, plus persuasive copywriting for ads/LPs (value proposition, headlines, storytelling, layouts, A/B testing).",
            deliverables: [
              "SEO audit report (incl. keyword map)",
              "10 content pieces with on-page SEO",
              "Content & landing-page strategy doc",
            ],
          },
          {
            number: "05-06",
            title: "Social Media & PPC Campaigns",
            description: "Social media strategy (B2B vs B2C, algorithms, formats, metrics) across YouTube/LinkedIn/Instagram/Twitter; Google Ads (Search/Display/Discovery/YouTube/UAC: structure, match types, bidding, audiences, tracking); Meta Ads (objectives, CBO/ABO, placements, funnels, ROAS), plus LinkedIn & alternative networks (Amazon/Apple Search/Quora/Taboola/Outbrain).",
            deliverables: [
              "Live social campaign with content calendar",
              "Google Ads account setup & first campaigns",
              "Performance reports with optimization notes",
            ],
          },
          {
            number: "07-08",
            title: "Email & Automation Funnels",
            description: "Email marketing best practices (KPIs, tips, journeys), WhatsApp marketing dos & don’ts, and marketing automation stacks (rule/creative automation, omni-channel) with practical orchestration using tools like Zapier; build blended email + WhatsApp journeys with tracking.",
            deliverables: [
              "Email funnel with sequences & KPIs",
              "Automation workflow (Zapier/omni-channel)",
              "A/B test results & learnings",
            ],
          },
          {
            number: "09-10",
            title: "Analytics & Data-Driven Decisions",
            description: "Conversion tracking (events, GA4 migration, funnels, attribution), cookies/FLoC basics, web & app analytics (GA4/Mixpanel/Matomo), heatmaps & session recording (Clarity/Hotjar), dashboards in Looker/Data Studio (connectors, filters), and attribution models (last/first/linear/time-decay/position/U/V-shaped) with custom model design.",
            deliverables: [
              "Analytics dashboard (Looker/Data Studio)",
              "ROI & attribution analysis (GA4)",
              "Data insights report with recommendations",
            ],
          },
          {
            number: "11-12",
            title: "Advanced Strategy & Capstone Project",
            description: "CRO end-to-end (observe → ideate → test → deploy with heuristics, quant/qual data, hypothesis & prioritization, statistics); media planning & buying (mix, budgets, RTB/programmatic, brand safety, evaluation); capstone: build a full-funnel strategy and complete job-prep (resume/LinkedIn, mock interviews, negotiation).",
            deliverables: [
              "Capstone campaign (full-funnel plan)",
              "Portfolio site with case studies",
              "Interview prep kit & mock feedback",
            ],
          },
        ],
      },
      {
        id: "dm-ai-business-owners",
        title: "Digital Marketing and AI (For Business Owners)",
        weeks: [
          {
            number: "01-03",
            title: "Fundamentals of Digital Marketing, SEO, and Social Media Marketing",
            description: "Gain a comprehensive understanding of digital marketing fundamentals, including setting objectives, market research, buyer personas, and channel selection. Master SEO basics with AI integration for keyword research and optimization, and develop social media strategies using AI for content creation and automation across platforms like YouTube, LinkedIn, Instagram, and Twitter.",
            deliverables: [
              "Buyer Persona and Value Proposition Development",
              "Keyword Mapping Audit of a Website",
              "Content Calendar and AI-Generated Social Media Content",
              "Social Media Progress Report",
            ],
          },
          {
            number: "04-06",
            title: "Persuasive Copywriting and Paid Marketing on Google and Facebook",
            description: "Learn to craft compelling copy for ads and landing pages, including A/B testing and brand guidelines. Explore Google Ads for search, display, video, and app campaigns with advanced bidding and optimization. Dive into Facebook Ads with audience targeting, bid strategies, placements, ROAS calculation, and automation tools like RevealBot and Madgicx.",
            deliverables: [
              "Value Proposition Build",
              "Google Ads Account Structure for E-commerce Brand",
              "Facebook Ads Account Setup with Campaigns, Audiences, Creatives, and Copies",
            ],
          },
          {
            number: "07-09",
            title: "Marketing on LinkedIn & Other Platforms, Conversion Tracking, and CRO",
            description: "Understand LinkedIn Ads, targeting, lead gen, and alternative networks like Quora, Apple Search, Amazon, and native ads. Implement conversion tracking with cookies, GA4 migration, user behavior analysis, and tools like Microsoft Clarity. Master CRO processes including hypothesis creation, testing, and deployment with best practices.",
            deliverables: [
              "LinkedIn Marketing Plan for an Edtech Company",
              "GA4 Setup and Various Useful Reports",
              "10 CRO Hypotheses Prioritized with ICE Framework and 3 Executed Tests",
            ],
          },
          {
            number: "10-13",
            title: "Media Planning, Dashboards, Attribution, and Email/WhatsApp Automation",
            description: "Learn media planning fundamentals, budget allocation, buying methods, and evaluation metrics. Build data visualization dashboards using Data Studio. Explore attribution models, custom designs for B2B/B2C, and algorithms. Implement email and WhatsApp marketing best practices, metrics, and automation with tools like Zapier.",
            deliverables: [
              "GA4 Reports for Business",
              "Dashboard Built on Data Studio",
              "Custom Attribution Model",
              "Email and WhatsApp Marketing Campaign Automated with Zapier",
            ],
          },
        ],
      },
      {
        id: "dm-ai-bootcamp",
        title: "Digital Marketing With AI Bootcamp",
        weeks: [
          {
            number: "01",
            title: "Introduction to Digital Marketing, Strategy Building, and Local Optimization",
            description: "Cover the evolution of digital marketing, buyer personas, funnels, SWOT analysis, Google Business Profile optimization, and WhatsApp Business marketing setups.",
            deliverables: ["Buyer Persona Creation", "GMB Account Optimization", "WhatsApp Business Profile and Campaigns"],
          },
          {
            number: "02",
            title: "SEO Fundamentals and Tools",
            description: "Dive into on-page and off-page SEO, technical aspects, Google Search Console, GA4 setup, and performance reporting.",
            deliverables: ["On-Page Optimization Plan", "Off-Page Link Building Strategy", "GA4 Custom Dashboards"],
          },
          {
            number: "03",
            title: "Google Ads Mastery",
            description: "Learn Google Ads account structure, keyword types, ad copies, bidding, Google Display Network, YouTube ads, and performance optimization.",
            deliverables: ["Search Campaign Setup", "Display and YouTube Ad Creatives"],
          },
          {
            number: "04",
            title: "Meta Ads and Social Content",
            description: "Explore Facebook and Instagram Ads in detail, including setup, optimization, A/B testing, social media content strategies, and Canva design for posts and ads.",
            deliverables: [
              "Meta Pixel Installation",
              "Lead Generation Ads",
              "Content Calendar",
              "Canva-Designed Creatives",
            ],
          },
          {
            number: "05-06",
            title: "Advanced Engagement, Automation, and Capstone",
            description: "Cover influencer marketing, community building, email automation, YouTube optimization, affiliate basics, ORM, competitor analysis, A/B testing, analytics, and a capstone project to build and present a full multi-channel strategy.",
            deliverables: [
              "Influencer Outreach Plan",
              "Email Campaign with Auto-Responders",
              "YouTube Channel Optimization",
              "Affiliate Promotion Strategy",
              "ORM Monitoring Plan",
              "Competitor Benchmark Report",
              "A/B Test Results",
              "Capstone Full Marketing Strategy Presentation",
            ],
          },
        ],
      },
    ],
  },
  toolsFrameworkContent: {
    title: "Tools & Technologies",
    description: "Learn industry-standard tools used by leading companies.",
    stats: { totalHours: "120+", projects: "8", mentorSupport: "24/7", jobPlacement: "95%" },
  },
  whyChooseContent: {
    title: "Why Choose Our Course?",
    subtitle: "Get trained by industry experts with real-world experience.",
    reasons: [
      {
        icon: "Award",
        title: "Expert Instructors",
        stats: "Industry-Led Training",
        description: "Learn from professionals with extensive industry experience.",
      },
      {
        icon: "Briefcase",
        title: "Job Placement",
        stats: "Placement Support",
        description: "Dedicated placement assistance and interview preparation.",
      },
      {
        icon: "Users",
        title: "Community Support",
        stats: "Active Alumni Network",
        description: "Join a thriving community of professionals and learners.",
      },
      {
        icon: "Clock",
        title: "Flexible Learning",
        stats: "Self-Paced Options",
        description: "Learn at your own pace with recorded sessions available.",
      },
    ],
    testimonial: {
      text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
      author: "Priya Patel",
      role: "Digital Marketer at BrandX",
      rating: 5,
    },
  },
  projectsContent: {
    title: "Hands-On Projects",
    description: "Build real-world projects to strengthen your portfolio.",
    subtitle: "Apply your learning through practical, industry-relevant projects.",
    projects: [
      {
        name: "E-Commerce SEO Campaign",
        description: "Full SEO audit and optimization for an online store.",
        skills: ["SEO", "Keyword Research", "On-Page Optimization", "Analytics"],
        difficulty: "Intermediate",
      },
      {
        name: "Social Media Brand Launch",
        description: "Create and run a 30-day social media campaign.",
        skills: ["Social Media", "Content Creation", "Paid Ads", "Engagement"],
        difficulty: "Intermediate",
      },
      {
        name: "PPC Lead Generation",
        description: "Set up Google Ads for lead gen with ROI tracking.",
        skills: ["PPC", "Google Ads", "Conversion Tracking", "Remarketing"],
        difficulty: "Advanced",
      },
      {
        name: "Full-Funnel Analytics Dashboard",
        description: "Build GA4 dashboard for multi-channel campaign analysis.",
        skills: ["Google Analytics", "Data Visualization", "Attribution", "Reporting"],
        difficulty: "Advanced",
      },
    ],
  },
  careerPathContent: {
    title: "Career Opportunities",
    description: "Explore diverse career paths after completing the course.",
    subtitle: "Launch your career in digital marketing.",
    paths: [
      {
        role: "Digital Marketing Executive",
        trending: true,
        description: "Execute day-to-day digital campaigns across channels.",
        salaryRange: "₹4-8 LPA",
        skills: ["SEO", "Social Media", "Content", "Basic Analytics"],
        opportunities: ["Startups", "Agencies", "E-Commerce", "Brands"],
      },
      {
        role: "SEO Specialist",
        trending: true,
        description: "Optimize websites for search engine rankings.",
        salaryRange: "₹5-10 LPA",
        skills: ["Technical SEO", "Link Building", "Keyword Strategy", "Tools"],
        opportunities: ["Agencies", "Tech Companies", "E-Commerce", "Consulting"],
      },
      {
        role: "PPC Analyst",
        trending: false,
        description: "Manage paid ad budgets and performance.",
        salaryRange: "₹6-12 LPA",
        skills: ["Google Ads", "Bidding", "ROI Analysis", "A/B Testing"],
        opportunities: ["Agencies", "Brands", "Performance Marketing Firms"],
      },
      {
        role: "Digital Marketing Manager",
        trending: false,
        description: "Lead teams and strategies for digital growth.",
        salaryRange: "₹10-18 LPA",
        skills: ["Strategy", "Analytics", "Team Leadership", "Budgeting"],
        opportunities: ["Corporates", "Agencies", "Startups", "Brands"],
      },
    ],
  },
  faqsContent: {
    title: "Frequently Asked Questions",
    subtitle: "Get answers to common questions about the course.",
    faqs: [
      {
        question: "Do I need prior marketing experience?",
        answer: "No, this course is designed for beginners. We cover all fundamentals from scratch. Basic computer knowledge is sufficient.",
      },
      {
        question: "What is the course duration?",
        answer: "The course is 12 weeks long with 120+ hours of content. You can complete it at your own pace with flexible learning options.",
      },
      {
        question: "Will I get a certificate?",
        answer: "Yes, you'll receive an industry-recognized certificate upon completion. The certificate is valued by employers across India.",
      },
      {
        question: "What placement support do you provide?",
        answer: "Our placement team actively assists with job search and interviews after course completion.",
      },
      {
        question: "Can I access the course content after completion?",
        answer: "Yes, you get lifetime access to all course materials, including future updates and new content additions.",
      },
      {
        question: "Is there any refund policy?",
        answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course. No questions asked.",
      },
      {
        question: "What tools will I learn?",
        answer: "You'll learn Google Analytics, Google Ads, Facebook Ads, SEMrush, Ahrefs, Mailchimp, and other industry-standard tools.",
      },
      {
        question: "Is there mentor support?",
        answer: "Yes, we provide 24/7 mentor support through chat, email, and scheduled calls. Our mentors are experienced digital marketers.",
      },
    ],
  },
  ctaContent: {
    title: "Ready to Start Your Digital Marketing Career?",
    description: "Join students who have successfully launched their digital careers.",
    subtitle: "Enroll now and get 20% discount for limited time.",
    benefits: [
      "Industry-recognized certificate",
      "Lifetime access to course materials",
      "24/7 mentor support",
      "Job placement assistance",
      "Real-world projects",
      "Interview preparation",
    ],
    contactInfo: { phone: "+91 84-889-889-84", email: "contact@cinutedigital.com", address: "{{city}}, {{state}}, India" },
  },
};
