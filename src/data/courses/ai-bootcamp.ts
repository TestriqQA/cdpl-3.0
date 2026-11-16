import type { CourseContent } from "@/types/coursePage";
import { AI_BOOTCAMP_FAQS } from "@/data/aiBootcampData";

// Content for /courses/digital-marketing-courses/ai-bootcamp, moved from the
// old src/components/ai-bootcamp/* sections. Kept word for word except
// repeated filler (keyword-dump lines, the same sentence appended to every
// role card, a duplicate "What You Need to Succeed" block, repeated stat
// pills), which a cleanup pass removed.
export const aiBootcampCourse: CourseContent = {
  slug: "ai-bootcamp",
  courseName: "AI Bootcamp Course",
  sourceName: "AI Bootcamp",

  seo: {
    title: "AI-Powered Digital Marketing Bootcamp | CDPL",
    description:
      "30-hour AI digital marketing bootcamp — ChatGPT for content, AI ad optimization, SEO, SEM & performance marketing with placement assistance. Online & classroom.",
    keywords: [
      "AI digital marketing bootcamp",
      "digital marketing course mumbai",
      "performance marketing training",
      "job assistance digital marketing",
      "AI marketing tools",
      "digital marketing hybrid course",
    ],
    image: "/og-images/courses-digital-marketing-courses-ai-bootcamp-og.webp",
  },

  schema: {
    name: "AI-Powered Digital Marketing Bootcamp",
    description:
      "Master Digital Marketing with AI in this 30-hour bootcamp. Learn SEO, SEM, Social Media, and Performance Marketing with Job Assistance.",
    duration: "P1M",
    howTo: {
      name: "How to Enroll in CDPL AI-Powered Digital Marketing Bootcamp",
      description: "A step-by-step guide to enrolling in our 30-hour AI Digital Marketing Bootcamp.",
      steps: [
        {
          name: "Review Curriculum",
          text: "Explore AI marketing tools, SEO, SEM, Social Media, Performance Marketing, and automation modules.",
        },
        {
          name: "Contact Admissions",
          text: "Reach out to our admissions team to select your preferred classroom or online batch.",
        },
        {
          name: "Start Learning",
          text: "Complete the 30-hour intensive bootcamp and get certified with job assistance.",
        },
      ],
    },
    program: {
      programType: "Bootcamp",
      timeToComplete: "P1M",
      occupationalCategory: "Digital Marketing Specialist",
    },
  },

  hero: {
    breadcrumb: "AI Bootcamp",
    badges: [
      { icon: "clock", text: "Duration: 30 Hours" },
      { icon: "building", text: "Mumbai's Premium Training Institute" },
      { icon: "star", text: "{rating} Student Rating" },
      { icon: "award", text: "**AAA Certified** International Recognition" },
      { icon: "users", text: "**14+ Years** Industry Expertise" },
    ],
    h1: "Future-Proof Your Career with [[AI-Powered Digital Marketing]]",
    subtitle:
      "Master the fusion of **Digital Marketing** and **Artificial Intelligence** to drive unprecedented growth. Launch your high-income career in a global market projected to reach **$671 Billion by 2028**.",
    description:
      "Topics: SEO, SEM, Social Media Marketing, Performance Marketing, Email & Automation, AI tools for ads & content, funnel strategy, analytics, brand building, and growth hacking.",
    ctas: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
  },

  stats: {
    heading: "The Numbers Don't Lie: [[Your Future in Digital Marketing]]",
    intro:
      "Discover why digital marketing is one of the most lucrative and in-demand careers in 2024 and beyond. Build a future-ready career in **SEO, SEM, social media marketing, performance marketing**, and **AI-powered digital campaigns** with a practical, job-oriented digital marketing course designed for students, freshers, and working professionals.",
    items: [
      { value: "$671.86B", label: "Global Market Value", note: "Digital marketing market by 2028" },
      { value: "#4", label: "High-Income Skill", note: "Globally (Forbes 2024)" },
      { value: "#3", label: "Most In-Demand Skill", note: "According to Michael Page 2023" },
      { value: "141,000+", label: "Job Opportunities", note: "Digital marketing jobs worldwide" },
    ],
    extras: [
      {
        kind: "text",
        title: "Digital Marketing & AI Are Exploding — Secure Your High-Income Career",
        text: "Brands across **e-commerce**, **fintech**, **education**, **real estate**, **hospitality**, and **startups** are investing heavily in **performance marketing**, **social media ads**, **SEO**, and **AI-driven marketing automation**. Skilled **digital marketers** who understand funnels, analytics, and AI tools are landing **high-paying roles** as Digital Marketing Specialists, Performance Marketers, Growth Marketers, and Marketing Strategists.",
      },
      {
        kind: "list",
        items: [
          "**Career-focused curriculum:** SEO, SEM, SMM, email marketing, AI tools, analytics, and conversion optimization.",
          "**Hands-on projects:** real ad campaigns, landing pages, funnels, and reporting dashboards for your portfolio.",
          "**Job assistance:** resume optimisation, LinkedIn branding, interview preparation, and salary negotiation guidance.",
          "**Flexible learning:** weekend & weekday batches, online + classroom options suitable for students & working professionals.",
        ],
      },
    ],
    outro: "Ready to be part of this booming industry? Our bootcamp prepares you for high-paying roles in just 30 hours.",
    ctas: [{ label: "Start Your Journey Today", kind: "enroll" }],
  },

  why: {
    heading: "Why This is the ONLY [[Digital Marketing Program You Need]]",
    intro:
      "We don't just teach theory; we build **highly skilled Digital Marketers** through an industry-vetted, results-driven methodology that blends **AI-powered digital marketing**, **performance marketing**, **SEO, social media marketing, and PPC advertising** into one career-focused program.",
    cards: [
      {
        icon: "zap",
        title: "AI-Powered Curriculum",
        description: "The only program that deeply integrates AI tools like ChatGPT, Grok, and DeepSeek into every module.",
      },
      {
        icon: "award",
        title: "Job Assistance",
        description: "Resume building, interview preparation, and direct access to job openings from partner companies.",
      },
      {
        icon: "target",
        title: "80:20 Practical Approach",
        description: "80% hands-on projects and case studies ensure you are job-ready from day one.",
      },
      {
        icon: "users",
        title: "Expert-Led Mentorship",
        description: "Learn from industry veterans with extensive expertise and 1:1 doubt-solving sessions.",
      },
      {
        icon: "lightbulb",
        title: "Global Certification",
        description: "Internationally recognized certificate from AAA, validated with a unique QR code.",
      },
      {
        icon: "rocket",
        title: "Lifetime Career Support",
        description: "Access to our network, mentorship, and career guidance long after graduation.",
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Build a Future-Proof Digital Marketing Career with AI",
        text: "This **Digital Marketing with AI program** is crafted for students, freshers, and working professionals who want to dominate in **SEO**, **Google Ads**, **Meta Ads**, **social media marketing**, **email automation**, and **AI-based content & campaign optimization**. With an **80:20 practical learning model**, real client-style projects, and **job assistance**, you'll be ready to work as a **Digital Marketing Executive, Performance Marketer, Growth Marketer, or Marketing Strategist** in top agencies, startups, and brands.",
      },
      {
        kind: "stats",
        items: [
          { value: "{rating}", label: "Verified Learner Rating" },
          { value: "{reviews}", label: "Verified Reviews" },
          { value: "1:1", label: "Mentorship & Support" },
        ],
      },
      {
        kind: "cards",
        items: [
          {
            icon: "book",
            title: "Industry-Aligned Digital Marketing Curriculum",
            description: "Covers SEO, SEM, SMM, content marketing, marketing funnels, analytics, and AI marketing tools.",
          },
          {
            icon: "trophy",
            title: "Proven Success & Career Outcomes",
            description: "Students trained with **placement assistance** across agencies, brands, and startups.",
          },
        ],
      },
    ],
  },

  curriculum: {
    heading: "The 20-Module [[Digital Marketing Curriculum]]",
    intro:
      "The **20-module blueprint to becoming an AI-powered marketer**. From digital marketing fundamentals, **SEO**, **Google Ads**, **Meta (Facebook & Instagram) Ads**, **WhatsApp & email automation**, to **analytics, GA4, and full-funnel strategy**—this curriculum is designed to transform you into a job-ready **Digital Marketing Specialist** and **Performance Marketer**.",
    modules: [
      {
        title: "Intro to Digital Marketing & Strategy Building",
        duration: "1.5 hours",
        topics: [
          "Evolution of Digital Marketing",
          "Traditional vs Digital Marketing",
          "Buyer Persona Creation",
          "Marketing Funnel Stages (TOFU, MOFU, BOFU)",
          "SWOT Analysis of Competitors",
        ],
      },
      {
        title: "Google Business Profile (GMB) Optimization",
        duration: "1.5 hours",
        topics: [
          "GMB Account Setup & Verification",
          "Business Description & Category Optimization",
          "Adding Products & Services",
          "Customer Reviews & Response Strategy",
          "Insights & Performance Analytics",
        ],
      },
      {
        title: "WhatsApp Business Marketing",
        duration: "1.5 hours",
        topics: [
          "WhatsApp Business App Setup",
          "Business Profile & Catalog Configuration",
          "Automated Greetings & Quick Replies",
          "WhatsApp API Integration",
          "Promotional Campaigns using WhatsApp Links",
        ],
      },
      {
        title: "SEO - On-page Optimization",
        duration: "2 hours",
        topics: [
          "Keyword Research & Placement",
          "Meta Title & Description Optimization",
          "URL Structure & Internal Linking",
          "Content Optimization (Headers, Alt Text)",
          "Schema Markup & Rich Snippets",
        ],
      },
      {
        title: "SEO - Off-page & Technical SEO",
        duration: "2 hours",
        topics: [
          "Link Building Strategies",
          "Domain Authority & Page Authority",
          "Broken Link Analysis & Fixes",
          "Sitemap & Robots.txt Optimization",
          "Mobile Responsiveness & Page Speed",
        ],
      },
      {
        title: "Google Search Console & GA4",
        duration: "1.5 hours",
        topics: [
          "Property Setup & Domain Verification",
          "Performance Reports (Clicks, CTR, Positions)",
          "Index Coverage & URL Inspection",
          "Setting up Goals & Events in GA4",
          "Custom Dashboards & Reports",
        ],
      },
      {
        title: "Google Ads - Search Campaigns",
        duration: "2 hours",
        topics: [
          "Account Structure & Campaign Setup",
          "Keyword Match Types & Planner Tool",
          "Writing Effective Ad Copies",
          "Bidding Strategies & Budget Management",
          "Quality Score & Ad Extensions",
        ],
      },
      {
        title: "Google Ads - Display & YouTube Ads",
        duration: "2 hours",
        topics: [
          "Google Display Network Overview",
          "Creating Visual Ad Creatives",
          "YouTube Ad Formats",
          "Targeting Options for Display/Video Ads",
          "Performance Metrics & Optimization",
        ],
      },
      {
        title: "Facebook & Instagram Ads - Part 1",
        duration: "1.5 hours",
        topics: [
          "Meta Business Suite Setup",
          "Page & Ad Account Linking",
          "Installing Meta Pixel",
          "Audience Research & Targeting",
          "Facebook Ad Policies Overview",
        ],
      },
      {
        title: "Facebook & Instagram Ads - Part 2",
        duration: "1.5 hours",
        topics: [
          "Lead Generation Ads Setup",
          "Traffic Campaign Optimization",
          "Creative Best Practices",
          "Analyzing Ad Metrics",
          "A/B Testing for Creatives",
        ],
      },
      {
        title: "Social Media Content Strategy",
        duration: "1.5 hours",
        topics: [
          "Content Pillars Creation",
          "7-day Content Calendar",
          "Brand Voice & Consistency",
          "Engagement Tactics",
          "Case Study of Social Media Brands",
        ],
      },
      {
        title: "Canva Design for Social & Ads",
        duration: "1.5 hours",
        topics: [
          "Using Canva Templates",
          "Designing Engaging Posts",
          "Creating Ad Creatives",
          "Designing Reels & Stories",
          "Branding & Typography in Canva",
        ],
      },
      {
        title: "Influencer & Community Marketing",
        duration: "1.5 hours",
        topics: [
          "Identifying Relevant Influencers",
          "Campaign Collaboration Strategy",
          "Outreach Email Drafting",
          "Community Engagement Techniques",
          "Tracking Influencer ROI",
        ],
      },
      {
        title: "Email Marketing & Automation",
        duration: "1.5 hours",
        topics: [
          "Building an Email List",
          "Designing Email Campaigns",
          "Setting up Auto Responders",
          "Email Tools (Mailchimp, ConvertKit)",
          "Open Rate & CTR Optimization",
        ],
      },
      {
        title: "YouTube & Shorts Marketing",
        duration: "1.5 hours",
        topics: [
          "Channel Branding & Optimization",
          "Keyword Research for YouTube",
          "Creating Shorts",
          "SEO for Titles & Descriptions",
          "Analytics & Watch Time Insights",
        ],
      },
      {
        title: "Affiliate Marketing Basics",
        duration: "1.5 hours",
        topics: [
          "Understanding Affiliate Networks",
          "Signing Up & Selecting Products",
          "Promoting through Blogs/YouTube",
          "Affiliate Link Tracking",
          "Earnings Optimization Strategies",
        ],
      },
      {
        title: "ORM – Online Reputation Management",
        duration: "1.5 hours",
        topics: [
          "Monitoring Brand Mentions",
          "Responding to Negative Reviews",
          "Crisis Management Tactics",
          "Using Tools for ORM",
          "Building Positive Brand Perception",
        ],
      },
      {
        title: "Competitor & Trend Analysis",
        duration: "1.5 hours",
        topics: [
          "Using Google Trends",
          "Competitor Keyword Research",
          "Analyzing Content Strategy",
          "Tools like SEMrush & Ubersuggest",
          "Benchmarking Competitor Performance",
        ],
      },
      {
        title: "A/B Testing & Analytics Deep Dive",
        duration: "1.5 hours",
        topics: [
          "Understanding A/B Testing Goals",
          "Running Split Tests on Ads/Emails",
          "Analyzing GA4 Reports",
          "Improving Campaign Conversions",
          "Using Heatmaps & User Behavior Tools",
        ],
      },
      {
        title: "Capstone: Build a Full Strategy & Present",
        duration: "2 hours",
        topics: [
          "Selecting a Brand or Startup",
          "Creating a Multi-Channel Strategy",
          "Tool Integration & Reporting",
          "Designing the Presentation",
          "Final Pitch & Peer Review",
        ],
      },
    ],
    extras: [
      {
        kind: "cards",
        title: "What You'll Master in This Digital Marketing Course",
        items: [
          {
            icon: "workflow",
            title: "Full-Funnel Strategy",
            description:
              "Plan TOFU-MOFU-BOFU campaigns that combine SEO, Google Ads, Meta Ads, WhatsApp, email marketing, and content to drive leads and sales.",
          },
          {
            icon: "bot",
            title: "AI-Powered Execution",
            description:
              "Use AI tools like ChatGPT, Grok, and DeepSeek to research keywords, write ad copy, generate content ideas, and optimize campaigns faster.",
          },
          {
            icon: "barChart",
            title: "Performance Analytics",
            description:
              "Track ROI with GA4, Google Search Console, ad dashboards, A/B testing, heatmaps, and conversion tracking for data-driven decisions.",
          },
        ],
      },
      {
        kind: "list",
        title: "What's Included in This AI Digital Marketing Bootcamp",
        items: [
          "30 hours of intensive, mentor-led AI-powered digital marketing training",
          "Hybrid classroom + online live sessions for working professionals and students",
          "Hands-on projects in SEO, Google Ads, Meta Ads, and marketing automation",
          "Practical training on ChatGPT, Canva, GA4, and other AI marketing tools",
          "Real-world campaign strategy for performance marketing and lead generation",
          "Lifetime access to recorded sessions and updated course materials",
          "Internationally recognized certification with verification QR code",
          "job assistance with resume building and interview preparation",
          "1:1 doubt-solving and personalized career counseling",
          "Portfolio-ready digital marketing projects and campaign case studies",
          "Access to an active alumni and hiring partner network",
          "Support to transition into high-paying digital marketing and growth roles",
        ],
      },
    ],
    outro: "Master all 20 modules and become job-ready in just 30 hours of intensive training.",
    ctas: [
      { label: "Enroll in the Program", kind: "enroll" },
      { label: "Get Full Syllabus PDF", kind: "syllabus" },
    ],
  },

  tools: {
    heading: "Your AI & Digital Marketing [[Arsenal of Tools]]",
    intro:
      "Go beyond theory and get hands-on with **real-world AI tools, SEO platforms, performance marketing dashboards,** and **email automation suites** used by top digital marketing agencies and growth teams. Learn how to integrate **ChatGPT, GA4, Google Ads, Meta Ads, SEMrush, Ahrefs, Mailchimp** and more into full-funnel digital campaigns.",
    items: [
      {
        name: "ChatGPT",
        logo: "/techstack_logos/OpenAI-logo.png",
        category: "AI & Content Tools",
        description:
          "Use ChatGPT to create high-converting ad copy, SEO blogs, landing page content, and marketing automation workflows faster.",
      },
      {
        name: "Grok",
        logo: "/techstack_logos/grok-logo.svg",
        category: "AI & Content Tools",
        description:
          "Leverage Grok for real-time insights, market trend analysis, and performance marketing ideas powered by AI.",
      },
      {
        name: "DeepSeek",
        logo: "/techstack_logos/deepseek-logo.svg",
        category: "AI & Content Tools",
        description:
          "Tap into DeepSeek for in-depth research, data-backed content strategy, and long-form digital marketing assets.",
      },
      {
        name: "Canva",
        logo: "/techstack_logos/canva-logo.svg",
        category: "AI & Content Tools",
        description:
          "Design high-performing social media creatives, ad banners, and brand assets using Canva’s drag-and-drop editor.",
      },
      {
        name: "SEMrush",
        logo: "/techstack_logos/semrush-logo.svg",
        category: "SEO & Analytics",
        description:
          "Perform advanced keyword research, backlink analysis, and competitor audits to boost organic traffic and Google rankings.",
      },
      {
        name: "Ahrefs",
        logo: "/techstack_logos/ahrefs-logo.png",
        category: "SEO & Analytics",
        description: "Track domain authority, analyze backlinks, and uncover content gaps to strengthen your SEO strategy.",
      },
      {
        name: "Ubersuggest",
        logo: "/techstack_logos/ubersuggest-logo.png",
        category: "SEO & Analytics",
        description: "Discover long-tail keywords, content ideas, and SEO opportunities to drive targeted organic traffic.",
      },
      {
        name: "Google Search Console",
        logo: "/techstack_logos/google-search-console-logo.svg",
        category: "SEO & Analytics",
        description: "Monitor website performance on Google Search, fix indexing issues, and optimize for core web vitals.",
      },
      {
        name: "GA4",
        logo: "/techstack_logos/google-analytics-logo.svg",
        category: "SEO & Analytics",
        description:
          "Use Google Analytics 4 (GA4) to track user journeys, measure conversions, and optimize marketing funnels.",
      },
      {
        name: "Google Trends",
        logo: "/techstack_logos/Google-Trends-logo.jpg",
        category: "SEO & Analytics",
        description:
          "Identify trending topics, seasonal search demand, and content opportunities across regions and niches.",
      },
      {
        name: "Mailchimp",
        logo: "/techstack_logos/mailchimp-logo.svg",
        category: "Email & CRM",
        description:
          "Create email campaigns, nurture sequences, and newsletter automation to grow your subscriber base and revenue.",
      },
      {
        name: "ConvertKit",
        logo: "/techstack_logos/convertkit-logo.svg",
        category: "Email & CRM",
        description:
          "Build lead magnets, sales funnels, and audience segments tailored for creators, coaches, and online businesses.",
      },
      {
        name: "Google Calendar",
        logo: "/techstack_logos/google-calendar-logo.svg",
        category: "Email & CRM",
        description: "Plan content calendars, campaign launches, client meetings, and automation timelines in one place.",
      },
      {
        name: "Google Ads",
        logo: "/techstack_logos/google-ads-logo.svg",
        category: "Paid Media",
        description:
          "Run search, display, and Performance Max campaigns focused on lead generation, e-commerce, and brand visibility.",
      },
      {
        name: "Meta Business Suite",
        logo: "/techstack_logos/Meta-Ads-Manager-logo.png",
        category: "Paid Media",
        description: "Manage Facebook and Instagram ad campaigns, audiences, and creatives from a central dashboard.",
      },
      {
        name: "Facebook Ads",
        logo: "/techstack_logos/Meta-Ads-Manager-logo.png",
        category: "Paid Media",
        description:
          "Create high-ROAS Facebook ad campaigns using custom audiences, lookalikes, and retargeting strategies.",
      },
      {
        name: "Instagram Ads",
        logo: "/techstack_logos/Meta-Ads-Manager-logo.png",
        category: "Paid Media",
        description: "Launch scroll-stopping Instagram Ads with strong hooks, creatives, and CTA-driven campaigns.",
      },
    ],
    extras: [
      {
        kind: "steps",
        title: "AI & Digital Marketing Tools Learning Journey",
        items: [
          {
            title: "Tool Familiarization",
            description:
              "Get introduced to ChatGPT, Canva, SEMrush, GA4, Google Ads, Meta Business Suite and understand where each tool fits in the digital marketing ecosystem.",
          },
          {
            title: "Hands-on Campaign Setup",
            description:
              "Set up real campaigns, tracking, and automation: connect GA4, configure pixels, create keyword plans, and launch search, social, and email campaigns.",
          },
          {
            title: "Optimization & A/B Testing",
            description:
              "Use analytics dashboards, heatmaps, and reporting to optimize CTR, CPC, CPA, ROAS, and conversion rate with data-driven experimentation.",
          },
          {
            title: "Scaling & Automation",
            description:
              "Automate workflows with AI, build evergreen funnels, remarketing journeys, and reporting systems just like a professional performance marketer.",
          },
        ],
      },
    ],
    outro:
      "By the end of this bootcamp, you’ll be confidently using all major **AI, SEO, analytics, email marketing, and paid media tools** that top digital marketing professionals rely on daily.",
  },

  roadmap: {
    heading: "8 Steps to Your [[Career Transformation]]",
    intro:
      "From joining the program to landing your dream job – here is the step-by-step roadmap designed to take you from beginner to job-ready digital marketing professional.",
    steps: [
      {
        title: "Enrolment & Orientation",
        description: "Secure your spot in the bootcamp and attend the orientation session to meet your mentors and peers.",
      },
      {
        title: "Foundation & Strategy",
        description: "Master the core concepts of digital marketing, consumer psychology, and strategic planning.",
      },
      {
        title: "Advanced Skill Building",
        description: "Dive deep into SEO, Social Media, Paid Ads, and Email Marketing with hands-on exercises.",
      },
      {
        title: "AI Tools Mastery",
        description: "Integrate AI tools like ChatGPT and Canva into your workflow for faster, smarter marketing.",
      },
      {
        title: "Live Projects & Portfolio",
        description: "Apply your skills on real client projects and build a portfolio that proves your expertise.",
      },
      {
        title: "Career Prep & Branding",
        description:
          "Optimize your LinkedIn profile, build a resume, and prepare for behavioral and technical interviews.",
      },
      {
        title: "Unlock Job Opportunities",
        description: "Get connected with our hiring partners and start attending interviews for relevant roles.",
      },
      {
        title: "Get Hired & Grow",
        description: "Land your job, start your career, and continue to grow with our alumni network and support.",
      },
    ],
    outro: "Join the next cohort and start your transformation.",
    ctas: [{ label: "Start Your 8-Step Journey Today", kind: "enroll" }],
  },

  projects: {
    heading: "Build a Portfolio That Gets You Hired — [[Real-World Projects]]",
    intro:
      "Apply your knowledge to a comprehensive **Capstone Project** and a series of **real-time digital marketing case studies**, ensuring you have a demonstrable portfolio for interviews. These projects are designed to impress hiring managers for roles like **Digital Marketing Executive**, **Performance Marketer**, **SEO Specialist**, and **Social Media Strategist**.",
    items: [
      {
        icon: "fileText",
        title: "AI-Driven Content Strategy",
        meta: "Domain: Content & SEO",
        description:
          "Develop a 90-day content calendar for a startup using ChatGPT and DeepSeek, focusing on high-ranking SEO keywords.",
        features: ["ChatGPT", "SEO", "Content Planning", "AI Tools"],
      },
      {
        icon: "trendingUp",
        title: "Full-Funnel Paid Campaign",
        meta: "Domain: Performance Marketing",
        description:
          "Launch and optimize a Google Search and Meta Ads campaign, including pixel installation, audience segmentation, and A/B testing.",
        features: ["Google Ads", "Meta Ads", "A/B Testing", "Analytics"],
      },
      {
        icon: "settings",
        title: "Technical SEO Audit",
        meta: "Domain: SEO",
        description:
          "Conduct a full technical SEO audit for an e-commerce site, optimizing sitemaps, robots.txt, and improving page speed.",
        features: ["SEO", "Technical SEO", "Site Speed", "Tools"],
      },
      {
        icon: "shield",
        title: "ORM Crisis Management",
        meta: "Domain: Brand & Reputation",
        description:
          "Simulate an online reputation crisis and execute a full ORM strategy, including review response and positive content generation.",
        features: ["ORM", "Crisis Management", "Brand Protection", "Strategy"],
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Domain Coverage for Real-World Digital Marketing",
        text: "Our digital marketing projects span multiple industries, so you learn how to apply **SEO**, **Google Ads**, **Meta (Facebook & Instagram) Ads**, **content marketing**, and **online reputation management** in real business scenarios. This helps you stand out in **digital marketing job interviews** and makes your portfolio relevant to agencies, brands, and startups.",
      },
      {
        kind: "list",
        items: [
          "E-commerce & D2C Brands",
          "Real Estate & Property",
          "Education & EdTech",
          "Healthcare & Clinics",
          "Local & Service Businesses",
          "SaaS & Tech Startups",
          "Agencies & Freelancers",
          "Personal Brands & Coaches",
          "B2B & Enterprise",
        ],
      },
      {
        kind: "cards",
        items: [
          {
            icon: "barChart",
            title: "Portfolio That Stands Out",
            description:
              "Create a strong digital marketing portfolio with real campaigns, audits, and AI-driven strategies you can showcase to hiring managers and clients.",
          },
          {
            icon: "users",
            title: "Interview-Ready Experience",
            description:
              "Speak confidently about SEO, Google Ads, Meta Ads, ORM, and AI tools using real project outcomes, not just theory or templates.",
          },
          {
            icon: "zap",
            title: "Skill & Tool Mastery",
            description:
              "Master in-demand tools like ChatGPT, DeepSeek, Google Ads, Meta Ads, GA4, and technical SEO by implementing them in real-world-like scenarios.",
          },
        ],
      },
      {
        kind: "text",
        title: "Capstone Project: Build a Full Multi-Channel Strategy",
        text: "In Module 20, you'll bring everything together. Select a real brand or startup, create a comprehensive multi-channel digital marketing strategy, and present your findings to industry experts.",
      },
      {
        kind: "list",
        items: ["Tool Integration & Reporting", "Professional Presentation Design", "Final Pitch & Peer Review"],
      },
      {
        kind: "text",
        text: "This capstone becomes the centerpiece of your **digital marketing portfolio**, showcasing your ability to plan, execute, and report on **SEO, performance marketing, social media, and automation** in one unified strategy—exactly what recruiters look for when hiring for *digital marketing jobs in India and abroad*. Use this capstone project as a talking point in **interviews, client pitches, and freelance proposals** to win trust and opportunities faster.",
      },
    ],
  },

  testimonials: {
    heading: "Student [[Testimonials]]",
    intro:
      "Hear from our successful graduates who have transformed their careers through our **AI-powered Digital Marketing Program**. These genuine reviews reflect real outcomes in **SEO, performance marketing, social media marketing**, and **AI-driven campaign execution**.",
    extras: [
      {
        kind: "cards",
        title: "Why Students Trust Our Digital Marketing Course",
        items: [
          {
            icon: "graduationCap",
            title: "Industry-Recognized Digital Marketing Certification",
            description:
              "Get certified by AAA with international recognition, ideal for digital marketing jobs in India and abroad.",
          },
          {
            icon: "monitor",
            title: "Expert Mentors with Deep Industry Experience",
            description:
              "Learn from professionals who actively work in SEO, Google Ads, Meta Ads, and performance marketing.",
          },
          {
            icon: "briefcase",
            title: "Job & Placement Assistance",
            description:
              "Dedicated career support team for resume building, LinkedIn optimization, interview prep, and job referrals.",
          },
          {
            icon: "bot",
            title: "AI-Powered Learning Experience",
            description:
              "Master AI tools like ChatGPT, DeepSeek, and Grok to create campaigns, content, and strategies faster and smarter.",
          },
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "400+", label: "Students Enrolled Monthly" },
          { value: "{rating}", label: "Average Program Rating" },
          { value: "100%", label: "Satisfaction Rate" },
        ],
      },
    ],
  },

  career: {
    heading: "Your [[Digital Marketing Career Path]]",
    intro:
      "Unlock high-demand careers in **digital marketing, SEO, performance marketing, social media marketing,** and **digital analytics**. The skills you gain are directly mapped to in-demand **digital marketing jobs in India and abroad**, including agency, in-house, and freelance roles.",
    rolesTitle: "Job Roles",
    roles: [
      {
        title: "Digital Marketing Strategist",
        description: "The architect of online success, designing comprehensive marketing strategies.",
      },
      { title: "SEO Specialist", description: "The master of organic traffic and search rankings." },
      { title: "PPC & Google Ads Specialist", description: "The expert in maximizing ROI from paid media campaigns." },
      { title: "Social Media Manager", description: "The voice and engagement driver for brand communities." },
      { title: "Digital Analytics Manager", description: "The data scientist of marketing, turning insights into action." },
      { title: "Content Marketing Manager", description: "The storyteller who creates compelling brand narratives." },
    ],
    companiesTitle: "Top Companies Hiring Digital Marketing Professionals",
    companies: [
      "Google",
      "Meta",
      "Amazon",
      "Deloitte",
      "KPMG",
      "Oracle",
      "Infosys",
      "Wipro",
      "TCS",
      "HCL",
      "Accenture",
      "Cognizant",
    ],
    companiesNote: "Actively investing in digital marketing & growth teams",
    extras: [
      {
        kind: "cards",
        title: "Career Growth & Opportunities in Digital Marketing",
        items: [
          {
            icon: "trendingUp",
            title: "High-Growth Industry",
            description:
              "Digital marketing roles in SEO, SEM, social media, and performance marketing are among the fastest-growing careers, with strong demand across startups, agencies, and MNCs.",
          },
          {
            icon: "briefcase",
            title: "Multiple Career Paths",
            description:
              "Start as a Digital Marketing Executive and grow into roles like Digital Marketing Manager, Growth Marketer, Performance Marketer, or Marketing Automation Specialist.",
          },
          {
            icon: "users",
            title: "Global & Remote Opportunities",
            description:
              "Work with global brands, international clients, and remote marketing teams. Build a career in freelancing, consulting, or agency leadership with strong digital skills.",
          },
        ],
      },
      {
        kind: "text",
        text: "With the right **digital marketing certification**, you can accelerate your growth into **leadership roles** and stand out in competitive job markets like Mumbai, Bengaluru, Delhi NCR, Pune, and international hubs.",
      },
    ],
    outro:
      "Our **job assistance** helps you build a winning resume, optimize your LinkedIn profile, and prepare for **digital marketing interviews, SEO interviews, and performance marketing roles**.",
    ctas: [{ label: "Start Your Digital Marketing Career Journey", kind: "enroll" }],
  },

  audience: {
    heading: "Who is Ready to Accelerate [[Their Digital Marketing Career?]]",
    intro:
      "This digital marketing and AI-powered growth program is meticulously crafted for students, working professionals, entrepreneurs, and freelancers who want to dominate the online space and become high-demand **digital marketing professionals, performance marketers, and growth strategists.**",
    items: [
      {
        icon: "users",
        title: "Students & Fresh Graduates",
        description:
          "Build job-ready digital marketing skills and kickstart your career without needing a coding background, even if you are completely new to performance marketing or AI tools.",
        points: [
          "Final-year students who want a practical digital marketing certification",
          "Fresh graduates targeting entry-level digital marketing jobs and internships",
          "Job seekers aiming for in-demand roles like Digital Marketing Executive or SEO Analyst",
        ],
      },
      {
        icon: "briefcase",
        title: "Working Professionals",
        description:
          "Future-proof your role by mastering AI-driven marketing, data-led decision-making, and advanced analytics to switch to high-paying digital roles in India and globally.",
        points: [
          "Professionals from sales, marketing, IT, HR, or operations looking to transition into digital marketing",
          "Mid-career professionals who want promotions, salary hikes, or leadership roles in growth marketing",
          "Working executives who want to add a strong digital marketing & AI skill set to their resume",
        ],
      },
      {
        icon: "lightbulb",
        title: "Entrepreneurs & Business Owners",
        description:
          "Take control of your business growth by mastering online customer acquisition, performance marketing funnels, and retention strategies across Google, Meta, and other digital platforms.",
        points: [
          "Startup founders who want to reduce dependency on agencies and freelancers",
          "Local business owners who want more leads and sales through Facebook, Instagram, and Google Ads",
          "E-commerce, D2C, and small business owners looking to scale with ROI-focused digital strategies",
        ],
      },
      {
        icon: "zap",
        title: "Freelancers & Creators",
        description:
          "Master digital tools to monetize your content, attract premium clients, and scale your global income using SEO, social media marketing, funnels, and AI-powered automation.",
        points: [
          "Freelancers offering social media management, ads, content, or SEO services",
          "Content creators, influencers, and YouTubers who want to grow reach and revenue",
          "Remote professionals who want to build a global digital marketing client base",
        ],
      },
    ],
    extras: [
      {
        kind: "text",
        title: "What You Need to Succeed in This Digital Marketing Bootcamp",
        text: "You don't need to be a coder or tech expert. This **industry-focused digital marketing course with AI tools** is designed for beginners as well as experienced professionals who are ready to put in consistent effort and implement what they learn in real-world campaigns.",
      },
      {
        kind: "cards",
        items: [
          {
            icon: "check",
            title: "Essential",
            points: [
              "No coding or prior digital marketing experience required – we start from scratch",
              "Basic computer literacy and familiarity with using the internet and social media",
              "Laptop/PC with stable internet connection for live sessions and hands-on practice",
            ],
          },
          {
            icon: "timer",
            title: "Recommended",
            points: [
              "6–8 hours per week to learn, practice, and implement digital marketing strategies",
              "Interest in online business, branding, social media, or performance marketing",
              "Basic understanding of how businesses attract and serve customers (any domain)",
            ],
          },
          {
            icon: "target",
            title: "Mindset & Commitment",
            points: [
              "Strong commitment to apply real-world marketing strategies and complete assignments",
              "Willingness to experiment, analyze campaign performance, and learn from data",
              "Growth mindset to continuously upgrade skills with new AI and digital tools",
            ],
          },
        ],
      },
    ],
    outro:
      "Regardless of your background, this **digital marketing & AI bootcamp** is designed to transform you into a sought-after **digital marketing specialist, performance marketer, or growth strategist** with in-demand, job-ready skills.",
  },

  faq: {
    heading: "Frequently Asked [[Questions]] (FAQs)",
    intro:
      "Everything you need to know about the program, logistics, flexible hybrid learning, certification, and job assistance support for our AI-powered digital marketing bootcamp.",
    items: AI_BOOTCAMP_FAQS,
  },

  cta: {
    eyebrow: "Limited Time Offer • Get 20% OFF when you enroll this week!",
    heading: "Ready to Become an [[AI-Powered Digital Marketing Leader?]]",
    intro:
      "The future of marketing is here. Don't just adapt-lead. Secure your spot in the next cohort and unlock your high-income potential today with a **job-oriented AI digital marketing course** that covers **performance marketing, SEO, social media marketing, marketing automation, and analytics**.",
    actions: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Free Curriculum", kind: "syllabus" },
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call us to enroll" },
    ],
    highlights: [
      { icon: "clock", title: "30 Hours", description: "Intensive Training" },
      { icon: "briefcase", title: "100%", description: "Job Assistance" },
      { icon: "star", title: "Program Rating", description: "{rating}" },
    ],
    footnotes: [{ icon: "mail", text: "contact@cinutedigital.com" }],
  },
};
