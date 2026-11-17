import type { CourseContent } from "@/types/coursePage";
import { AI_IN_DIGITAL_MARKETING_FAQS } from "@/data/aiInDigitalMarketingData";

// Content for /courses/digital-marketing-courses/ai-in-digital-marketing, moved
// from the old src/components/ai-in-digital-marketing/* sections and their
// courseData.ts. Kept word for word except repeated filler ("Keywords:" lines,
// the same sentence under every tool and module, stack lists repeating the tool
// groups, a keyword-only hero line, a duplicated intro sentence).
export const aiInDigitalMarketingCourse: CourseContent = {
  slug: "ai-in-digital-marketing",
  courseName: "Master Digital Marketing & AI for Business Owners",
  sourceName: "AI Digital Marketing",

  seo: {
    title: "AI Digital Marketing Course for Business Owners | CDPL",
    description:
      "Digital marketing & AI for entrepreneurs — local business SEO, lead generation, marketing automation & AI growth playbooks. Built for business owners.",
    keywords: [
      "Digital Marketing for Business Owners",
      "Business Marketing Strategies",
      "Local Business SEO",
      "Marketing Automation for Business Owners",
      "AI for Business Growth",
      "Digital Marketing Sales",
      "SEO for Business Owners",
      "Social Media Marketing Business",
      "Small Business SEO",
      "Grow Your Business with Digital Marketing",
      "AI Digital Marketing",
      "Online Marketing Business",
    ],
    image: "/og-images/courses-digital-marketing-courses-ai-in-digital-marketing-og.webp",
  },

  schema: {
    name: "Master Digital Marketing & AI for Business Owners",
    description: "A 3-month cohort program to master digital marketing and AI strategies tailored for business owners.",
    duration: "P3M",
    howTo: {
      name: "How to Enroll in CDPL AI in Digital Marketing Course",
      description: "A step-by-step guide to enrolling in our 3-month AI-driven Digital Marketing cohort for business owners.",
      steps: [
        {
          name: "Review Curriculum",
          text: "Explore AI tools (ChatGPT, Midjourney), local SEO, social media, content, automation, and B2B lead generation modules.",
        },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and upcoming cohort details." },
        { name: "Start Learning", text: "Apply AI-driven marketing strategies directly to your business and 10X your growth." },
      ],
    },
  },

  hero: {
    breadcrumb: "AI in Digital Marketing",
    badges: [
      { icon: "clock", text: "Duration: 3 Months" },
      { icon: "star", text: "{rating} Rating ({reviews} Reviews)" },
      { icon: "users", text: "5000+ Trained" },
      { icon: "trophy", text: "14+ Years Experience" },
    ],
    h1: "Master [[AI in Digital Marketing]]: 10X Your Business with [[Automation & SEO Strategies]]",
    subtitle: "The comprehensive AI Digital Marketing Course for Business Owners in Mumbai & Thane to 10X Growth.",
    description:
      "Stop relying on agencies. Learn **business marketing strategies**, **local business SEO**, and **marketing automation for business owners** in this 3-month comprehensive program. Master **AI digital marketing** tools to generate leads, automate sales, and build a profitable **online marketing business** system yourself.",
    ctas: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: ["Real Projects", "AI Tools Training", "Industry Certification", "Job & Business Ready"],
  },

  stats: {
    heading: "Why Choose This [[AI Digital Marketing Course]]?",
    intro:
      "Unlock the power of **Digital Marketing with AI** to scale smarter, not harder. Our AI-powered digital marketing course helps **business owners, entrepreneurs, freelancers, and students** master **business marketing strategies**, **local business SEO**, and **marketing automation**. Learn to use **AI tools for business** to increase ROI, generate high-quality leads, and scale your **online marketing business**.",
    items: [
      { value: "10X", label: "Revenue Growth Potential", note: "Learn strategies to scale your business revenue." },
      { value: "100%", label: "Practical Business Application", note: "Apply concepts directly to your business model." },
      { value: "3 Months", label: "Intensive Cohort", note: "Comprehensive fast-track learning program." },
    ],
    extras: [
      {
        kind: "text",
        title: "Lifetime Access to AI Tools Library",
        text: "This program is structured to help you earn **globally recognized digital marketing credentials** while transforming your business. Combine **AI tools**, strategy, and implementation to design campaigns that deliver measurable results for brands and businesses in any niche.",
      },
      {
        kind: "list",
        items: [
          "**Industry Recognized** — Receive internationally recognized certifications in Digital Marketing, Digital Analytics, and Social Media Specialist.",
          "**Business Ready** — Become business-ready with hands-on experience, real-world projects, and the latest tools used by successful entrepreneurs.",
        ],
      },
    ],
  },

  why: {
    heading: "Why [[Digital Marketing & AI]] is Critical for Business Growth?",
    intro:
      "Focus on the 20% of **digital marketing sales** strategies that bring 80% of the results. No fluff, just actionable **business and marketing strategy**. Whether you want to learn **how to start digital marketing business** services or scale your existing company, this course bridges the gap between traditional methods and future-tech efficiency.",
    cards: [
      {
        icon: "settings",
        title: "80:20 Practical Approach",
        description:
          "80% Practical and 20% Theory model for industry-rich experience. Multiple meta accounts are given to handle and learn niche-specific approaches.",
      },
      {
        icon: "message",
        title: "1:1 Doubt Solving & Consultation",
        description:
          "Personalized knowledge tailored for your business niche. Whenever you need our help, we are just a call away.",
      },
      {
        icon: "users",
        title: "Expert Instructors",
        description: "Learn from seasoned Digital Marketers and Industry veterans with extensive expertise.",
      },
      {
        icon: "rocket",
        title: "Secret Strategies",
        description: "Get to learn some of the best strategies that BOOSTS YOUR BUSINESS to 10X.",
      },
      {
        icon: "book",
        title: "Industry Approved Curriculum",
        description:
          "Courses designed and developed by top industry professionals. Learn from scratch or choose Core/Advanced module based on expertise.",
      },
      {
        icon: "wrench",
        title: "Hands-On Training",
        description: "Work on real industry case studies and live projects. You cannot master without doing.",
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Transform Your Business & Career with AI-Driven Digital Marketing",
        text: "This program blends cutting-edge **AI marketing tools**, strategic digital marketing frameworks, and real-world implementation. You don't just learn theory—you actively apply AI to plan campaigns, create content, optimize ads, analyze data, and build high-performing funnels that generate consistent leads and sales for any business or personal brand.",
      },
      {
        kind: "list",
        items: [
          "**Secret Strategies** — Access proprietary **digital marketing applications** and **business automation software** workflows that top agencies charge retained fees for.",
          "**Expert Instructors** — Learn from successful entrepreneurs and **AI for business owners** experts who have scaled multiple 7-figure businesses using these exact methods.",
        ],
      },
    ],
    outro: "Ready to transform your business with digital marketing and AI?",
    ctas: [{ label: "Start Your Journey Today", kind: "enroll" }],
  },

  curriculum: {
    heading: "Comprehensive [[AI Digital Marketing Course for Business Owners]]",
    intro:
      "From **Local SEO for Businesses** to Advanced AI Automation—A Complete Roadmap. Master **AI in Digital Marketing** with modules designed for real-world impact. Learn **search engine optimization for local business**, **social media marketing business** tactics, and advanced AI integration to build **high-converting campaigns**.",
    modules: [
      {
        title: "Fundamentals of Digital Marketing",
        topics: [
          "Setting marketing objectives",
          "Market & Competitor Research",
          "Understanding the marketing funnel & customer journey",
          "Identifying target audience segments",
          "Creating a Buyer Persona",
          "Developing a value proposition",
          "Understanding Media: Paid, Shared, Owned, and Earned",
          "Overview of digital marketing channels",
        ],
        outcome:
          "Gain a comprehensive understanding of digital marketing fundamentals and develop essential skills to create an effective digital marketing plan and go-to-market framework.",
        projects: [
          "Create a content calendar for a real business and produce social media content using AI Tools",
          "Create social media progress report to senior marketing management",
        ],
      },
      {
        title: "SEO Fundamentals",
        topics: [
          "SEO Basics: Google updates & ranking analysis",
          "Content & Technical SEO: Optimization & off-page tactics",
          "Link Building: Fundamentals, internal linking & backlink",
          "SEO Mistakes & Google Penalties",
          "AI & SEO: Keyword research, content structure & meta optimization",
          "Stay updated with SEO",
          "Manual Actions & Google Penalties",
          "Ranking Analysis",
          "Introduction to Technical SEO",
        ],
        outcome:
          "Build a strong foundation in SEO with proactive strategies, conduct ranking analysis, optimize content for search engines, and gain in-depth knowledge of technical SEO.",
        projects: ["Keyword mapping audit of a website"],
      },
      {
        title: "Social Media Marketing",
        topics: [
          "Fundamentals of Social Media Marketing",
          "Company-wise content strategy",
          "B2C vs B2B strategies",
          "Channel-wise content strategy",
          "Content Marketing using AI: Idea generation, content creation & automation",
          "Understanding the algorithms of different channels",
          "Metrics for Social Media Marketing",
          "Case studies from B2C brands",
          "Content formats on social media",
          "Marketing on YouTube, LinkedIn, Instagram, Twitter",
        ],
        outcome:
          "Explore key social media platforms, develop effective content strategies, create engaging content, and leverage user-generated content for growth.",
        projects: [
          "Create a content calendar for a real business and produce social media content using AI Tools",
          "Create social media progress report to senior marketing management",
        ],
      },
      {
        title: "Persuasive Copywriting",
        topics: [
          "Crafting attention-grabbing headlines and subheadings",
          "Writing clear and persuasive copy that communicates value propositions",
          "Utilizing persuasive language and storytelling techniques",
          "Optimizing copy based on different elements: time/audience",
          "Setting goals and objectives of Landing Page",
          "Aligning landing page goals with overall campaign objectives",
          "Optimizing page navigation and structure",
          "Framework for Ideal LP/Elements of Ideal LP",
          "Analyzing and optimizing ad visuals, headlines, and copywriting",
          "Testing and iterating ad variations",
          "How to set up briefs for designers and freelancers",
          "How to build Brand guidelines",
        ],
        outcome:
          "Master the art of crafting compelling ad headlines and descriptions that drive engagement. Learn tools to make persuasive copies quicker and master A/B testing.",
        projects: ["Build a value proposition"],
      },
      {
        title: "Marketing on Google",
        topics: [
          "Setting up Google Webmaster Tool",
          "Understanding Campaign types and structure",
          "Exploring different keyword match types and their impact",
          "Types of Search Ads",
          "Crafting compelling ad headlines and descriptions",
          "Understanding bidding options and strategies for maximum ROI",
          "Creating search campaign structure from scratch",
          "Campaign tracking and performance management",
          "Exploring various types of Audiences in Google Ads",
          "The Art of Display & Discovery Advertising",
          "Mastering Video Advertising on YouTube",
          "UAC Campaigns: Unleash the Power of Automation",
        ],
        outcome:
          "Gain advanced understanding of Google Ads including Search, Display, Video, and UAC campaigns. Learn campaign structures, keyword match types, bidding strategies, and audience targeting.",
        projects: [
          "Create a Google Ads account structure for a global e-commerce brand, which should encompass Search, YouTube, and Discovery campaigns",
        ],
      },
      {
        title: "Marketing on Facebook",
        topics: [
          "Overview of Facebook Ads",
          "Understanding the Objectives, Metrics to track, Buying Type & Facebook Algorithm",
          "Exploring various types of Audiences in Facebook Ads Manager",
          "Bid Strategies: CBO VS ABO and FB Funnel",
          "Understanding all the ad platforms and placements",
          "Types of Facebook Ads: Static, Carousel, Video, etc",
          "Setting up your Facebook Ad Account for Scale & Success",
          "Learn to determine ROAS accurately",
          "Dashboard ROAS VS Realized ROAS",
          "Campaign Performance analysis and optimization",
          "Ad automation: RevealBot/Madgicx",
          "Automation Possibilities and Martech Stacks",
          "Rule Automation, Creative Automation Platforms",
          "Email Automation, Omni-Channel Messaging + Tools",
        ],
        outcome:
          "Understand Facebook Ads audience types, bid strategies, and the Facebook Funnel for campaign optimization. Learn to calculate ROAS and analyze campaign performance.",
        projects: [
          "Set up a Facebook Ads account for a company and create campaigns, Audiences, creatives, and ad copies",
        ],
      },
      {
        title: "Marketing on LinkedIn & Other Platforms",
        topics: [
          "Types of LinkedIn Ads & targeting options",
          "Setting up Ads: Accounts, billing & payments",
          "Audience Insights: Research & targeting strategies",
          "Lead Gen Forms: Build custom audiences",
          "Tracking & Analytics: Metrics, performance & conversion optimization",
          "Retargeting & Lookalike Audiences",
          "Programmatic Ads & Alternative Networks: Quora, Buysell, Carbon, Hyper, Omni",
          "Apple Search Ads & Amazon Ads Optimization",
          "Native Advertising: Taboola, Outbrain & Yahoo",
          "Quora Ads: Drive traffic & build brand authority",
        ],
        outcome:
          "Master LinkedIn Ads for professional advertising and captivate audiences through native advertising platforms such as Taboola, Outbrain, and Yahoo.",
        projects: ["Prepare a LinkedIn marketing plan for an Edtech company"],
      },
      {
        title: "Conversion Tracking",
        topics: [
          "Tracking Conversions: Importance & event implementation",
          "Cookies & FLOC: Campaign builder insights",
          "GA4 & Analytics: Dashboard, funnel paths & attribution",
          "User Behavior Analysis: Life cycle, cohorts & KPIs",
          "Web & App Tracking: Google Analytics, Mixpanel & Matomo",
          "Heatmaps & Session Recording: Microsoft Clarity & Hotjar",
          "GTM & E-Commerce Tracking",
        ],
        outcome:
          "Possess advanced knowledge of conversion tracking and analytics. Understand the importance of conversion tracking, cookies, FLoC, and various attribution models.",
        projects: ["Set up GA 4 and create various useful reports for your business"],
      },
      {
        title: "Basic to Advanced CRO",
        topics: [
          "Understanding conversions and the fundamentals of CRO",
          "The CRO Process: Observe, Ideate, Test, Deploy",
          "Deep dive into each of the components of the CRO Process",
          "Observe: Heuristic analysis, Quantitative data, Qualitative data",
          "Ideate: Idea, Hypothesis, Prioritization",
          "Test: Delivery, Measurement",
          "Deploy: Decision making, Statistics, Shipment Best practices",
          "CRO Checklist",
        ],
        outcome:
          "Master the essentials of Conversion Rate Optimization. Understand the CRO process and gain insights into best practices with a practical CRO checklist.",
        projects: [
          "List down 10 hypotheses based on observations",
          "Prioritize based on ICE framework",
          "Decide type of test",
          "Create a timeline",
          "Complete the CRO loop by executing 3 tests",
        ],
      },
      {
        title: "Media Planning",
        topics: [
          "Fundamentals of Media Planning",
          "Understanding media objectives and strategy",
          "Media mix decision: Traditional vs Digital",
          "Budget allocation across different channels",
          "Media buying: Direct, Programmatic, Real-Time Bidding",
          "Media scheduling",
          "Media Evaluation Metrics & KPIs",
          "Understanding Ad frauds and brand safety",
          "Case studies and real-life media planning scenarios",
        ],
        outcome:
          "Gain a fresh perspective on media planning with understanding of audience types, bid strategies, and Facebook Funnel for campaign optimization.",
        projects: ["Set up GA 4 and create various useful reports for your business"],
      },
      {
        title: "Dashboard",
        topics: [
          "Introduction to Data Visualization and its Techniques",
          "Types of Charts/Representations",
          "Data Studio: Introductions, Building Blocks, Data Sources",
          "Types of Data Connectors",
          "Pull data via multiple filters",
          "Live Case Work: Preparing a live dashboard with a real-time problem statement",
        ],
        outcome:
          "Learn how to extract data from campaigns and visualize the data derived from those. Take data-driven decisions and optimize your campaigns.",
        projects: ["Build a dashboard on Data Studio"],
      },
      {
        title: "Attribution",
        topics: [
          "Why Attribution Is Needed?",
          "View Through & Click Through",
          "What Questions Can MTA Answer?",
          "Last Touch, First Touch, Linear, Time Decay, Position-Based, U-Shaped, V-Shaped Attribution",
          "How To Make Google Analytics Attribution Project?",
          "How To Interpret The Data In GA?",
          "Designing A Custom Attribution Model For Your Business In GA (B2B & B2C)",
          "Attribution Algorithms: What Goes Into Building An Attribution Tool?",
        ],
        outcome:
          "Grasp the importance of attribution and comprehend viewthrough, click-through, and Multi-Touch Attribution (MTA) concepts. Explore various Google Analytics attribution models.",
        projects: ["Create a custom attribution model"],
      },
      {
        title: "Email & WhatsApp Marketing + Marketing Automation",
        topics: [
          "Why is Email Marketing important?",
          "Who are the big players winning it?",
          "Email Marketing Best Practices",
          "Top 10 Tips to Keep in Mind to Leverage More from Email Marketing",
          "Key Metrics to Focus on for Email Marketing",
          "WhatsApp Marketing and its Journey so far",
          "Why is WhatsApp Marketing a double-edged sword?",
          "10 Things you should know before trying out WA Marketing",
          "Metrics and Consumer Journey Crafting via Email and WA marketing in blend",
          "Live Case Study solve: Dashboard walkthrough via one platform",
        ],
        outcome:
          "Grasp Email Marketing's significance, industry insights, and best practices. Navigate WhatsApp Marketing's complexities and learn to blend Email and WhatsApp Marketing.",
        projects: ["Build an email and WhatsApp marketing campaign and automate using Zapier"],
      },
    ],
    moduleNote:
      "By the end of each module, you'll be able to implement **AI-driven campaigns**, optimize **ad performance**, and make **data-backed marketing decisions** for real businesses and client projects.",
    extras: [
      {
        kind: "text",
        title: "What You'll Master in This AI-Powered Digital Marketing Course",
        text: "This **AI in Digital Marketing certification program** is built to help you plan, launch, and scale **profitable digital marketing campaigns** using **AI tools, automation, and performance analytics**. Whether you're a beginner or a working professional, you'll learn how to generate leads, increase conversions, and grow businesses systematically.",
      },
      {
        kind: "cards",
        items: [
          {
            icon: "bot",
            title: "AI Marketing & Automation",
            description:
              "Leverage AI tools like ChatGPT, automation workflows, and predictive analytics to optimize campaigns, funnels, and customer journeys.",
          },
          {
            icon: "trendingUp",
            title: "Performance Marketing & Analytics",
            description:
              "Master paid ads, tracking, and reporting to improve ROI across Google Ads, Meta Ads, email marketing, and omnichannel strategies.",
          },
          {
            icon: "target",
            title: "Business Growth & Lead Generation",
            description:
              "Design full-funnel digital marketing systems that attract, nurture, and convert high-quality leads for B2B, B2C, and D2C brands.",
          },
        ],
      },
      {
        kind: "text",
        text: "Ideal for **students, job seekers, freelancers, business owners, and marketing professionals** who want to stay ahead in the **AI-first digital marketing era** and secure high-paying roles or grow their own brand.",
      },
      {
        kind: "list",
        title: "What's Included in the Digital Marketing & AI Program",
        items: [
          "3-month structured Digital Marketing & AI program with weekly live sessions",
          "Complete training on SEO, Google Ads, Meta Ads, email marketing & funnel strategy",
          "Hands-on practice with AI tools like ChatGPT for copywriting, ad creation & content strategy",
          "Real-world projects to build a client-ready or job-ready digital marketing portfolio",
          "Guidance on building your own agency or freelance digital marketing business",
          "Templates for landing pages, ad creatives, lead magnets & marketing automation flows",
          "Lifetime access to updates, future masterclasses & strategy sessions",
          "Dedicated support for campaign troubleshooting, scaling and optimization",
          "Proven frameworks for lead generation, offer positioning & high-conversion campaigns",
          "Best practices for marketing analytics, tracking, and ROI-focused decision-making",
          "Step-by-step roadmap to get your first paying client or scale existing business revenue",
          "Community access for networking with entrepreneurs, freelancers & marketers",
        ],
      },
    ],
    outro:
      "Ready to master all 13 AI-powered digital marketing modules and transform your career or business growth? Enroll now in this **AI in Digital Marketing course** and get **industry-level training, practical projects, and implementation-focused mentoring** to become an in-demand digital marketing professional.",
    ctas: [{ label: "Get Full Syllabus PDF", kind: "syllabus" }],
  },

  tools: {
    heading: "Master [[AI Tools & Technologies]] for Business Automation",
    intro:
      "Master the **business automation software** and **AI digital marketing** tools that sustain high-growth companies. From **CRM integrations** to **chatbots** and **ad platforms**, learn the exact tech stack needed to run a lean, profitable marketing operation.",
    items: [
      { name: "SEMrush", logo: "/techstack_logos/semrush-logo.svg", category: "SEO & Analytics" },
      { name: "Ahrefs", logo: "/techstack_logos/ahrefs-logo.png", category: "SEO & Analytics" },
      { name: "Google Insights", logo: "/techstack_logos/Google-Trends-logo.jpg", category: "SEO & Analytics" },
      { name: "GA4 (Google Analytics)", logo: "/techstack_logos/google-analytics-logo.svg", category: "SEO & Analytics" },
      { name: "Microsoft Clarity", logo: "/techstack_logos/Microsoft-Clarity-logo.png", category: "SEO & Analytics" },
      { name: "Hotjar", logo: "/techstack_logos/Hotjar-logo.png", category: "SEO & Analytics" },
      { name: "ChatGPT", logo: "/techstack_logos/OpenAI-logo.png", category: "AI & Content Creation" },
      { name: "DeepSeek", logo: "/techstack_logos/deepseek-logo.svg", category: "AI & Content Creation" },
      { name: "Grok", logo: "/techstack_logos/grok-logo.svg", category: "AI & Content Creation" },
      { name: "Meta (Facebook/Instagram)", logo: "/techstack_logos/Meta-Ads-Manager-logo.png", category: "Advertising Platforms" },
      { name: "Google Ads", logo: "/techstack_logos/google-ads-logo.svg", category: "Advertising Platforms" },
      { name: "LinkedIn Ads", logo: "/techstack_logos/linkedin-logo.svg", category: "Advertising Platforms" },
      { name: "RevealBot", logo: "/techstack_logos/Revealbot-logo.avif", category: "Marketing Automation" },
      { name: "Madgicx", logo: "/techstack_logos/Madgicx-logo.png", category: "Marketing Automation" },
      { name: "Zapier", logo: "/techstack_logos/zapier-logo.svg", category: "Marketing Automation" },
      { name: "Data Studio (Looker)", logo: "/techstack_logos/Google-Looker-Studio-logo.svg", category: "Data & Visualization" },
      { name: "Google Calendar", logo: "/techstack_logos/google-calendar-logo.svg", category: "Data & Visualization" },
    ],
    itemNote:
      "Learn how to use each tool as part of a complete AI-powered digital marketing stack for **campaign optimization, reporting, and growth**.",
    extras: [
      {
        kind: "text",
        title: "Technology Stack Overview",
        text: "You'll work with a practical **AI + Digital Marketing tool stack** that covers **SEO, performance marketing, email automation, analytics, social media, and AI content generation**. This ensures you can build **marketing automation for business owners** systems that work 24/7.",
      },
      {
        kind: "steps",
        title: "Your Learning Journey with These Tools",
        items: [
          {
            title: "Tool Orientation",
            description:
              "Get familiar with the full AI + Digital Marketing toolstack and understand where each platform fits in your strategy.",
          },
          {
            title: "Hands-On Practice",
            description: "Apply tools in live campaigns, tracking, reporting, and optimization—no theory-only sessions.",
          },
          {
            title: "Integrated Workflows",
            description: "Combine multiple tools (AI, ads, analytics, CRM, email) to build real multi-channel funnels.",
          },
          {
            title: "Portfolio & Implementation",
            description:
              "Use these tools to complete real projects, build case studies, and create a portfolio that employers trust.",
          },
        ],
      },
      {
        kind: "cards",
        title: "Why These Tools?",
        items: [
          {
            icon: "target",
            title: "Industry Standard",
            description: "All tools are used by top companies and marketing agencies worldwide",
          },
          {
            icon: "trendingUp",
            title: "Proven Results",
            description: "These tools have helped thousands of businesses achieve measurable growth",
          },
          {
            icon: "rocket",
            title: "Future Ready",
            description: "We continuously update our curriculum with the latest tools and technologies",
          },
        ],
      },
    ],
    outro:
      "Perfect for anyone looking for a *digital marketing course for business owners*, *marketing automation training*, or *hands-on AI marketing program* that solves real business problems.",
  },

  roadmap: {
    heading: "Your Learning [[Journey]]",
    intro:
      "An 8-step structured learning path designed to transform you into a digital marketing expert and business leader.",
    steps: [
      {
        title: "Learn Through Case Studies",
        icon: "book",
        description:
          "Start with real-world case studies to understand how successful businesses apply digital marketing strategies.",
      },
      {
        title: "Undergo Hands-On Training",
        icon: "wrench",
        description:
          "Get practical, hands-on training with industry experts who share real-world knowledge from live projects.",
      },
      {
        title: "Live Projects",
        icon: "target",
        description:
          "Work on live projects that mirror real business challenges and scenarios you'll encounter in your career.",
      },
      {
        title: "In-Class Assessment & Feedback",
        icon: "check",
        description:
          "Receive detailed feedback on your assignments and assessments to ensure continuous improvement.",
      },
      {
        title: "Perform Assignments",
        icon: "penTool",
        description: "Complete assignments that reinforce your learning and build a portfolio of work.",
      },
      {
        title: "Business Niche Based Consultation",
        icon: "message",
        description: "Get personalized consultation tailored to your specific business niche and challenges.",
      },
      {
        title: "Updates on Latest Trends & Tools",
        icon: "megaphone",
        description: "Stay updated with the latest trends, tools, and technologies in digital marketing and AI.",
      },
      {
        title: "Business Specific Problem Solving",
        icon: "rocket",
        description: "Apply your learning to solve specific business problems and implement real strategies.",
      },
    ],
    extras: [
      {
        kind: "cards",
        items: [
          {
            icon: "book",
            title: "Comprehensive Learning",
            description: "From fundamentals to advanced strategies, covering all aspects of digital marketing",
          },
          {
            icon: "target",
            title: "Practical Application",
            description: "Apply your learning to real-world projects and solve actual business problems",
          },
          {
            icon: "rocket",
            title: "Career Ready",
            description: "Complete the journey with certifications, portfolio, and the confidence to succeed",
          },
        ],
      },
    ],
    outro: "Ready to start your 8-step transformation journey?",
    ctas: [{ label: "Begin Your Journey Now", kind: "enroll" }],
  },

  projects: {
    heading: "Real-Time [[Projects for Business Growth]]",
    intro:
      "Work on **live business case studies**. Implement **local SEO, lead generation funnels, automated email sequences,** and **AI-driven ad campaigns** for real niches. Stop learning theory and start building assets that generate **real revenue**.",
    items: [
      {
        icon: "zap",
        title: "AI-Powered Social Media Content Strategy",
        meta: "Difficulty: Beginner · 2 weeks",
        description:
          "Create a content calendar and produce social media content using AI tools, followed by a progress report for senior management.",
        tags: ["Module 1", "Module 3"],
      },
      {
        icon: "trendingUp",
        title: "Comprehensive SEO Audit & Keyword Mapping",
        meta: "Difficulty: Intermediate · 3 weeks",
        description:
          "Perform a detailed keyword mapping audit for a real website, focusing on content and technical SEO best practices.",
        tags: ["Module 2"],
      },
      {
        icon: "barChart",
        title: "Google Ads Campaign Structure for E-commerce",
        meta: "Difficulty: Intermediate · 2 weeks",
        description:
          "Design a complete Google Ads account structure for a global e-commerce brand, including Search, YouTube, and Discovery campaigns.",
        tags: ["Module 5"],
      },
      {
        icon: "users",
        title: "Meta Ads Account Setup & Optimization",
        meta: "Difficulty: Intermediate · 3 weeks",
        description:
          "Set up a Facebook Ads account from scratch, including campaigns, audiences, creatives, and ad copies, with a focus on ROAS calculation.",
        tags: ["Module 6"],
      },
      {
        icon: "zap",
        title: "LinkedIn Marketing Plan for B2B",
        meta: "Difficulty: Advanced · 2 weeks",
        description:
          "Prepare a detailed LinkedIn marketing plan for a B2B company (e.g., Edtech), utilizing various ad types and targeting options.",
        tags: ["Module 7"],
      },
      {
        icon: "trendingUp",
        title: "GA4 Implementation & Custom Reporting",
        meta: "Difficulty: Intermediate · 2 weeks",
        description:
          "Set up Google Analytics 4 (GA4) for a business and create various useful, custom reports for data-driven decision-making.",
        tags: ["Module 8", "Module 10"],
      },
      {
        icon: "barChart",
        title: "Conversion Rate Optimization (CRO) Loop",
        meta: "Difficulty: Advanced · 4 weeks",
        description:
          "Complete a full CRO loop: list 10 hypotheses, prioritize using the ICE framework, decide on test types, and execute 3 tests.",
        tags: ["Module 9"],
      },
      {
        icon: "users",
        title: "Marketing Automation with Zapier",
        meta: "Difficulty: Beginner · 1 week",
        description:
          "Build an email and WhatsApp marketing campaign and automate the workflow using Zapier or similar tools.",
        tags: ["Module 13"],
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Domain Knowledge Coverage for Digital Marketing",
        text: "Our **AI in Digital Marketing projects** cover high-growth sectors. Learn how to plan and execute **campaigns that actually convert**. From **e-commerce funnels** and **local lead generation for services** to **B2B lead generation systems**, you'll face the real challenges entrepreneurs solve daily.",
      },
      {
        kind: "list",
        items: [
          "E-commerce & D2C Brands",
          "Local & Service Businesses",
          "Education & EdTech",
          "Healthcare & Clinics",
          "Real Estate & Property",
          "SaaS & Tech Startups",
          "Agencies & Freelancers",
          "Personal Brands & Creators",
          "B2B & Enterprise",
        ],
      },
      {
        kind: "cards",
        items: [
          {
            icon: "barChart",
            title: "Portfolio Building",
            description:
              "Turn every project into a strong portfolio asset you can share with recruiters, clients, and agencies.",
          },
          {
            icon: "users",
            title: "Real-World Experience",
            description:
              "Simulate agency-style work: briefs, strategy, execution, reporting and optimization for real niches.",
          },
          {
            icon: "zap",
            title: "Skill Mastery",
            description:
              "Apply AI tools, analytics, and performance marketing concepts to real campaigns—not just theory.",
          },
        ],
      },
      {
        kind: "stats",
        items: [
          { value: "8+", label: "Real Projects" },
          { value: "100%", label: "Hands-On Learning" },
          { value: "Portfolio", label: "Ready for Jobs" },
        ],
      },
    ],
    outro:
      "Your **AI in Digital Marketing portfolio** will showcase end-to-end projects that prove you can drive business growth—strategy, execution, tracking, and ROI. Perfect for *business owners, working professionals, and freelancers* who want solid proof of competence.",
  },

  testimonials: {
    heading: "Success [[Stories]]",
    intro:
      "Real results from real students and business owners who have transformed their growth trajectory.",
    outro: "Ready to become our next business success story?",
    ctas: [{ label: "Start Your Success Journey", kind: "enroll" }],
  },

  career: {
    heading: "Career Highs & [[Business Growth Opportunities]]",
    intro:
      "Multiple career paths and growth opportunities after completing the program. Step into **high-demand digital marketing, performance marketing, and AI-driven marketing roles** or launch your own **online marketing business**.",
    rolesTitle: "Career Paths",
    roles: [
      {
        title: "Digital Marketing Manager",
        salary: "₹5-10 LPA",
        description:
          "Lead marketing strategies and manage campaigns across multiple channels. Key skills: Campaign Management, Analytics, Team Leadership, Budget Planning.",
      },
      {
        title: "SEO Specialist",
        salary: "₹4-8 LPA",
        description:
          "Optimize websites for search engines and drive organic traffic. Key skills: Technical SEO, Keyword Research, Link Building, Analytics.",
      },
      {
        title: "Performance Marketing Expert",
        salary: "₹6-12 LPA",
        description:
          "Manage paid advertising campaigns for maximum ROI and conversions. Key skills: Google Ads, Facebook Ads, Analytics, A/B Testing.",
      },
      {
        title: "Content Marketing Strategist",
        salary: "₹4-9 LPA",
        description:
          "Create and manage content strategies across all digital channels. Key skills: Content Creation, SEO, Analytics, Copywriting.",
      },
      {
        title: "Marketing Automation Specialist",
        salary: "₹5-10 LPA",
        description:
          "Implement and manage marketing automation tools and workflows. Key skills: Marketing Automation, CRM, Analytics, Integration.",
      },
      {
        title: "Freelance Digital Marketer",
        salary: "₹50K-2L+ per project",
        description:
          "Build your own agency and work with multiple clients globally. Key skills: All Skills, Client Management, Project Management, Business Acumen.",
      },
    ],
    companiesTitle: "Top Companies Hiring Digital Marketing & AI Professionals",
    companies: ["Google", "Meta (Facebook)", "Amazon", "Adobe", "TCS", "Infosys", "Accenture", "Dentsu / GroupM"],
    extras: [
      {
        kind: "cards",
        title: "Career Growth & Opportunities",
        items: [
          {
            icon: "trendingUp",
            title: "High-Growth Digital Careers",
            description:
              "Digital marketing, SEO, and performance marketing professionals see strong salary hikes as brands shift budgets online.",
          },
          {
            icon: "briefcase",
            title: "Multiple Career Paths",
            description:
              "Grow into roles like Digital Marketing Manager, Growth Lead, Head of Performance, Agency Owner, or Marketing Consultant.",
          },
          {
            icon: "users",
            title: "Global & Remote Opportunities",
            description:
              "Work with top companies, agencies, and global clients in remote, hybrid, or on-site roles across industries. Or start your freelance consulting.",
          },
        ],
      },
      {
        kind: "steps",
        title: "Your Career Growth Path",
        items: [
          { title: "Learn Skills", description: "Master digital marketing and AI tools" },
          { title: "Build Portfolio", description: "Complete real-world projects" },
          { title: "Get Certified", description: "Earn industry-recognized certifications" },
          { title: "Land Jobs", description: "Get hired or start your own agency" },
        ],
      },
    ],
    outro: "Ready to launch your digital marketing career or business?",
    ctas: [{ label: "Start Your Career Transformation", kind: "careerSession" }],
  },

  audience: {
    heading: "Who Should Enroll in This [[AI Marketing Course]]?",
    intro:
      "This AI-powered digital marketing program is designed for **Business Owners, Entrepreneurs, Freelancers, and Working Professionals** who want to master **business marketing strategies, local SEO, marketing automation, and AI for business** to scale their revenue.",
    items: [
      {
        icon: "rocket",
        title: "Entrepreneurs & Business Owners",
        description: "Learn to grow your business online and attract more customers.",
        points: ["E-commerce", "Retail", "Local Services", "Real Estate", "Restaurants"],
      },
      {
        icon: "laptop",
        title: "Freelancers & Creators",
        description: "Master digital tools to monetize your content and land global clients.",
        points: ["Consultants", "Content Creators", "Agencies", "Coaches"],
      },
      {
        icon: "barChart",
        title: "Marketing Professionals",
        description: "Upskill with the latest digital marketing strategies and AI tools.",
        points: ["Marketing Teams", "Digital Agencies", "In-house Teams"],
      },
      {
        icon: "target",
        title: "Startup Founders",
        description: "Build a strong digital presence and acquire customers efficiently.",
        points: ["Tech Startups", "SaaS", "EdTech", "FinTech"],
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Industry-Specific Applications",
        text: "The curriculum is mapped to real **industry-specific digital marketing use cases**. You'll see how **AI in digital marketing** drives impact in **e-commerce, education, healthcare, real estate, SaaS, B2B, local businesses** and more—so your skills translate directly into **job-ready, practical outcomes**. Whether you run a **clinic, real estate firm, coaching business, or e-commerce store**, you'll learn strategies that work for your niche.",
      },
      {
        kind: "cards",
        items: [
          {
            icon: "shoppingCart",
            title: "Retail & E-commerce",
            description:
              "**Application:** Run targeted ads, improve product SEO, leverage influencer marketing, and create seasonal campaigns.",
            points: [
              "**Benefit:** Drives traffic, increases sales, and improves product visibility on platforms like Google, Facebook, and Instagram.",
            ],
          },
          {
            icon: "mapPin",
            title: "Local Service-Based Businesses",
            description:
              "**Application:** Google My Business optimization, local SEO, WhatsApp promotions, customer reviews.",
            points: ["**Benefit:** Increases bookings and walk-ins from local searchers."],
          },
          {
            icon: "building",
            title: "Real Estate Agencies",
            description:
              "**Application:** Facebook lead ads, YouTube property walkthroughs, Google Ads for keywords like 'flats in Mira Road'.",
            points: ["**Benefit:** Generates verified buyer/seller leads and builds trust through social proof."],
          },
          {
            icon: "graduationCap",
            title: "Educational Institutions & EdTech Startups",
            description: "**Application:** SEO blogs, Instagram reels, webinars, YouTube videos, lead magnets.",
            points: ["**Benefit:** Attracts student enrollment and increases course signups through brand awareness."],
          },
          {
            icon: "heart",
            title: "Healthcare & Wellness Providers",
            description: "**Application:** Informational blogs, patient testimonials, Google Ads, Instagram Q&As.",
            points: ["**Benefit:** Builds credibility and draws patients through trust-driven digital presence."],
          },
          {
            icon: "coffee",
            title: "Restaurants, Cafes & Cloud Kitchens",
            description: "**Application:** Zomato/Swiggy marketing, Instagram posts, influencer tastings, Google reviews.",
            points: ["**Benefit:** Encourages online orders and in-person visits through social engagement."],
          },
          {
            icon: "briefcase",
            title: "Freelancers & Consultants",
            description:
              "**Application:** LinkedIn presence, portfolio websites, client testimonials, Instagram promotions.",
            points: ["**Benefit:** Builds personal brand and attracts quality clients."],
          },
          {
            icon: "package",
            title: "Startups & Small-Scale Manufacturers",
            description: "**Application:** Instagram shops, Shopify SEO, influencer tie-ups, email marketing.",
            points: ["**Benefit:** Boosts D2C (Direct-to-Consumer) sales and helps reach niche markets."],
          },
          {
            icon: "map",
            title: "Tourism & Travel Operators",
            description: "**Application:** Travel blogs, YouTube vlogs, paid ads during peak seasons, remarketing.",
            points: ["**Benefit:** Helps secure tour bookings and stand out in a competitive space."],
          },
          {
            icon: "calendar",
            title: "Event Planners & Wedding Vendors",
            description:
              "**Application:** Pinterest marketing, reels showcasing past events, Instagram paid promotions.",
            points: ["**Benefit:** Builds visual credibility and generates bridal/family event leads."],
          },
          {
            icon: "handshake",
            title: "NGOs and Social Enterprises",
            description:
              "**Application:** Storytelling through content marketing, email drives, crowdfunding campaigns.",
            points: ["**Benefit:** Raises awareness, drives donations, and finds volunteers."],
          },
          {
            icon: "book",
            title: "Coaching Centers & Tuition Classes",
            description: "**Application:** Local SEO, YouTube demo lectures, testimonials, Google reviews.",
            points: ["**Benefit:** Attracts local students and builds authority through online presence."],
          },
        ],
      },
      {
        kind: "cards",
        title: "Keys to Success in This Program",
        items: [
          {
            icon: "clock",
            title: "Regular Practice",
            description:
              "Dedicate consistent time each week to campaigns, assignments, and AI tool experimentation to build real confidence.",
          },
          {
            icon: "handshake",
            title: "Active Participation",
            description:
              "Engage in live sessions, ask questions, and leverage doubt-solving support to clarify concepts faster.",
          },
          {
            icon: "target",
            title: "Project Focus",
            description:
              "Complete all real-world projects so your portfolio reflects SEO, ads, funnels, automation, and analytics skills.",
          },
          {
            icon: "book",
            title: "Continuous Learning",
            description:
              "Stay updated with the latest AI tools, ad platform changes, and algorithm updates to remain competitive.",
          },
        ],
      },
    ],
    outro: "No matter your industry, this program can help you grow!",
    ctas: [{ label: "Check Your Fit", kind: "enroll" }],
  },

  faq: {
    intro:
      "Find answers to common questions about our **AI Digital Marketing for Business Owners program**, from *course fees, schedule, business applicability* to *ROI and support*. This FAQ helps you decide if this is the **comprehensive digital marketing course for your business growth**.",
    items: AI_IN_DIGITAL_MARKETING_FAQS,
    categories: ["Business", "Operations", "Tools", "Comparison", "Logistics", "Support"],
  },

  cta: {
    eyebrow: "Limited Time Offer • Early Bird Discount: 20% OFF + Free 1:1 Consultation",
    heading: "Ready to 10X Your Business with [[AI & Marketing Automation]]?",
    intro:
      "Join hundreds of successful entrepreneurs, freelancers, and business owners who have scaled their revenue with our program. This **AI-powered digital marketing course for business** is designed to help you generate consistent leads, automate sales, and build a brand that dominates your local market using *marketing automation, SEO, and AI tools*.",
    actions: [
      { label: "Enroll Now & Get 20% OFF", kind: "enroll" },
      { label: "Schedule Free Consultation", kind: "link", href: "https://calendar.app.google/tvh9dsXZsX9BujRR8" },
    ],
    highlights: [
      { icon: "timer", title: "3-Month Program", description: "6 hours/week commitment" },
      { icon: "graduationCap", title: "Industry Certified", description: "Recognized certifications" },
      { icon: "briefcase", title: "Lifetime Support", description: "1:1 consultation & guidance" },
    ],
  },
};
