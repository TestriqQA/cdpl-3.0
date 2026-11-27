// Older or alternative versions of a Digital Marketing section that several cities
// still use instead of the template's. A city picks one with `use` in
// ../overrides/digital-marketing.ts, e.g. use: { "curriculumContent.tracks": "v2" }.
// Placeholders work the same as in the template.

import type { CourseVariants } from "../types";

export const digitalMarketingVariants: CourseVariants = {
  metadata: {
    keywords: {
      v2: "digital marketing course {{cityLower}}, seo training {{cityLower}}, ppc course {{cityLower}}, social media marketing course, digital marketing certification {{cityLower}}, analytics course tamil nadu",
      v3: "digital marketing course {{cityLower}}, seo training {{cityLower}}, ppc course {{cityLower}}, social media marketing course, digital marketing certification {{cityLower}}, analytics course gujarat",
      v4: "digital marketing course {{cityLower}}, seo training {{cityLower}}, ppc course {{cityLower}}, social media marketing course, digital marketing certification {{cityLower}}, analytics course punjab",
      v5: "digital marketing course {{cityLower}}, seo training {{cityLower}}, ppc course {{cityLower}}, social media marketing course, digital marketing certification {{cityLower}}, analytics course rajasthan",
      v6: "digital marketing course {{cityLower}}, seo training {{cityLower}}, ppc course {{cityLower}}, social media marketing course, digital marketing certification {{cityLower}}, analytics course uttar pradesh",
      v7: "digital marketing course {{cityLower}}, seo training {{cityLower}}, ppc course {{cityLower}}, social media marketing course, digital marketing certification {{cityLower}}, analytics course madhya pradesh",
      v8: "digital marketing course {{cityLower}}, seo training {{cityLower}}, ppc course {{cityLower}}, social media marketing course, digital marketing certification {{cityLower}}, analytics course andhra pradesh",
    },
  },
  courseDetails: {
    duration: { v2: "10 weeks" },
    language: {
      v2: "English & Tamil",
      v3: "English & Telugu",
      v4: "English & Gujarati",
      v5: "English & Punjabi",
      v6: "English & Marathi",
    },
    price: { v2: "₹24,999" },
    discountedPrice: { v2: "₹16,999" },
  },
  heroContent: {
    stats: {
      v2: [
        { number: "400+", label: "Students Trained", description: "Successfully completed the course" },
        { number: "90%", label: "Job Placement", description: "Within 3 months of completion" },
        { number: "10", label: "Weeks Duration", description: "Intensive learning program" },
        { number: "24/7", label: "Mentor Support", description: "Dedicated mentorship available" },
      ],
    },
  },
  courseOverviewContent: {
    modules: {
      v2: [
        {
          icon: "Search",
          trending: true,
          name: "SEO Fundamentals",
          description: "Master on-page, off-page, and technical SEO techniques for higher rankings.",
          topics: [
            "Keyword Research & Analysis",
            "On-Page Optimization",
            "Link Building Strategies",
            "Technical SEO Audit",
          ],
          link: "/seo-fundamentals",
        },
        {
          icon: "Share",
          trending: true,
          name: "Social Media Marketing",
          description: "Build engaging campaigns on Facebook, Instagram, LinkedIn, and Twitter.",
          topics: ["Platform Algorithms", "Content Calendars", "Paid Social Ads", "Engagement Analytics"],
          link: "/social-media-marketing",
        },
        {
          icon: "DollarSign",
          trending: false,
          name: "PPC Advertising (Google Ads)",
          description: "Create and optimize paid search campaigns for maximum ROI.",
          topics: ["Campaign Setup & Bidding", "Ad Copywriting", "Remarketing", "Conversion Tracking"],
          link: "/ppc-google-ads",
        },
        {
          icon: "FileText",
          trending: false,
          name: "Content Marketing",
          description: "Develop content strategies that drive traffic and conversions.",
          topics: ["Content Planning", "Blogging & SEO", "Video Marketing", "Storytelling Techniques"],
          link: "/content-marketing",
        },
        {
          icon: "Mail",
          trending: true,
          name: "Email Marketing",
          description: "Design automated email funnels using tools like Mailchimp.",
          topics: ["List Building", "Automation Workflows", "A/B Testing", "Compliance (GDPR)"],
          link: "/email-marketing",
        },
        {
          icon: "BarChart",
          trending: true,
          name: "Google Analytics & Digital Analytics",
          description: "Track, analyze, and report on campaign performance with data insights.",
          topics: ["GA4 Setup & Events", "Audience Segmentation", "Funnel Analysis", "Custom Dashboards"],
          link: "/google-analytics",
        },
      ],
    },
  },
  curriculumContent: {
    tracks: {
      v2: [
        {
          id: "seo",
          title: "SEO Fundamentals",
          weeks: [
            {
              number: "01",
              title: "SEO Basics & Keyword Research",
              description: "Search engines, SERPs, keyword tools (Ahrefs/SEMrush).",
              deliverables: ["Keyword list", "mini audit"],
            },
            {
              number: "02",
              title: "On-Page Optimization",
              description: "Meta tags, content optimization, site structure.",
              deliverables: ["Optimized page", "checklist"],
            },
            {
              number: "03",
              title: "Technical SEO",
              description: "Site speed, mobile-first, schema markup.",
              deliverables: ["Audit report", "fixes implemented"],
            },
          ],
        },
        {
          id: "social-media",
          title: "Social Media Marketing",
          weeks: [
            {
              number: "01",
              title: "Platform Fundamentals",
              description: "Facebook/Instagram/Twitter/LinkedIn setup & best practices.",
              deliverables: ["Profile optimization", "content calendar"],
            },
            {
              number: "02",
              title: "Organic Content Strategy",
              description: "Posting schedules, hashtags, engagement tactics.",
              deliverables: ["10-post series", "engagement report"],
            },
            {
              number: "03",
              title: "Paid Social Ads",
              description: "Ad manager, targeting, budgeting.",
              deliverables: ["Campaign launch", "ad creatives"],
            },
          ],
        },
        {
          id: "ppc",
          title: "PPC Advertising (Google Ads)",
          weeks: [
            {
              number: "01",
              title: "Google Ads Setup",
              description: "Account creation, campaign types.",
              deliverables: ["Account ready", "keyword plan"],
            },
            {
              number: "02",
              title: "Search Campaigns",
              description: "Ad groups, bidding strategies.",
              deliverables: ["Live campaign", "ad copy set"],
            },
            {
              number: "03",
              title: "Display & Remarketing",
              description: "Visual ads, audience lists.",
              deliverables: ["Remarketing setup", "display ads"],
            },
          ],
        },
        {
          id: "content",
          title: "Content Marketing",
          weeks: [
            {
              number: "01",
              title: "Content Strategy",
              description: "Buyer personas, content pillars.",
              deliverables: ["Persona sheets", "pillar content"],
            },
            {
              number: "02",
              title: "Blogging & SEO Content",
              description: "Writing, optimization tools.",
              deliverables: ["3 blog posts", "SEO checklist"],
            },
            {
              number: "03",
              title: "Visual & Video Content",
              description: "Canva, YouTube basics.",
              deliverables: ["Video script", "infographic"],
            },
          ],
        },
        {
          id: "email",
          title: "Email Marketing",
          weeks: [
            {
              number: "01",
              title: "Email Basics & Tools",
              description: "Mailchimp setup, list building.",
              deliverables: ["Campaign ready", "list import"],
            },
            {
              number: "02",
              title: "Newsletter Design",
              description: "Templates, personalization.",
              deliverables: ["Newsletter series", "design assets"],
            },
            {
              number: "03",
              title: "Automation & Sequences",
              description: "Drip campaigns, triggers.",
              deliverables: ["Automated workflow", "test run"],
            },
          ],
        },
        {
          id: "analytics",
          title: "Google Analytics & Digital Analytics",
          weeks: [
            {
              number: "01",
              title: "GA4 Setup",
              description: "Installation, events tracking.",
              deliverables: ["GA4 property", "tracking code"],
            },
            {
              number: "02",
              title: "Reports & Audiences",
              description: "Real-time, acquisition reports.",
              deliverables: ["Custom report", "segment creation"],
            },
            {
              number: "03",
              title: "Conversions & Ecommerce",
              description: "Goal setup, funnel visualization.",
              deliverables: ["Conversion tracking", "funnel analysis"],
            },
          ],
        },
      ],
    },
  },
  toolsFrameworkContent: { stats: { v2: { totalHours: "100+", projects: "6", mentorSupport: "24/7", jobPlacement: "90%" } } },
  projectsContent: {
    projects: {
      v2: [
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
      ],
    },
  },
  careerPathContent: {
    paths: {
      v2: [
        {
          role: "Digital Marketing Executive",
          trending: true,
          description: "Execute day-to-day digital campaigns across channels.",
          salaryRange: "₹3-6 LPA",
          skills: ["SEO", "Social Media", "Content", "Basic Analytics"],
          opportunities: ["Startups", "Agencies", "E-Commerce", "Local Businesses"],
        },
        {
          role: "SEO Specialist",
          trending: true,
          description: "Optimize websites for search engine rankings.",
          salaryRange: "₹4-8 LPA",
          skills: ["Technical SEO", "Link Building", "Keyword Strategy", "Tools"],
          opportunities: ["Agencies", "E-Commerce", "Consulting"],
        },
        {
          role: "PPC Analyst",
          trending: false,
          description: "Manage paid ad budgets and performance.",
          salaryRange: "₹5-10 LPA",
          skills: ["Google Ads", "Bidding", "ROI Analysis", "A/B Testing"],
          opportunities: ["Agencies", "Brands", "Performance Marketing Firms"],
        },
      ],
    },
  },
  faqsContent: {
    faqs: {
      v2: [
        {
          question: "Do I need prior marketing experience?",
          answer: "No, this course is designed for beginners. We cover all fundamentals from scratch.",
        },
        {
          question: "What is the course duration?",
          answer: "The course is 10 weeks long with 100+ hours of content, with flexible learning options.",
        },
        {
          question: "Will I get a certificate?",
          answer: "Yes, you'll receive an industry-recognized certificate upon completion.",
        },
        {
          question: "What placement support do you provide?",
          answer: "Our placement team actively assists with job search and interviews after course completion.",
        },
        {
          question: "Can I access the course content after completion?",
          answer: "Yes, you get lifetime access to all course materials.",
        },
        {
          question: "Is there any refund policy?",
          answer: "We offer a 7-day money-back guarantee if you're not satisfied.",
        },
        {
          question: "What tools will I learn?",
          answer: "You'll learn Google Analytics, Google Ads, Facebook Ads, SEMrush, Mailchimp, and more.",
        },
      ],
    },
  },
  ctaContent: {
    subtitle: { v2: "Enroll now and get 32% discount for a limited time." },
    benefits: {
      v2: [
        "Industry-recognized certificate",
        "Lifetime access to course materials",
        "24/7 mentor support",
        "Job placement assistance",
        "Real-world projects",
      ],
    },
  },
};
