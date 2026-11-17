import type { CourseContent } from "@/types/coursePage";
import { DIGITAL_MARKETING_FAQS } from "@/data/digitalMarketingData";

// Content for /courses/digital-marketing-courses/digital-marketing-course, moved
// from the old src/components/digital-marketing-course/* sections. Kept word
// for word except repeated filler (identical chips on every module, tool,
// project, persona and FAQ card, per-card "I fit this profile" buttons, pill
// rows repeating nearby copy), which a cleanup pass removed.
export const digitalMarketingCourse: CourseContent = {
  slug: "digital-marketing-course",
  courseName: "Digital Marketing & Analytics Master Program",
  sourceName: "Digital Marketing Course Page",

  seo: {
    title: "Digital Marketing Course in Mumbai with AI | CDPL",
    description:
      "80+ hour digital marketing course in Mumbai — AI-driven SEO, PPC, Google Ads, social media & analytics with hands-on training and placement assistance.",
    keywords: [
      "digital marketing course Mumbai",
      "digital marketing course in Mumbai with placement",
      "comprehensive digital marketing institute in Mumbai",
      "SEO training Mumbai",
      "Google Ads course Mumbai",
      "social media marketing course Mumbai",
      "digital analytics training",
      "AI in digital marketing",
    ],
    image: "/og-images/courses-digital-marketing-courses-digital-marketing-course-og.webp",
  },

  schema: {
    name: "Advanced AI-Driven Digital Marketing & Analytics Master Program",
    description:
      "A comprehensive 80-hour digital marketing mastery program in Mumbai covering SEO, SEM, SMM, Content Marketing, and AI Tools with placement assistance.",
    duration: "P3M",
    howTo: {
      name: "How to Enroll in CDPL Digital Marketing Course",
      description: "A step-by-step guide to enrolling in our 80-hour AI-Driven Digital Marketing Master Program.",
      steps: [
        {
          name: "Review Curriculum",
          text: "Explore SEO, SEM, Google Ads, Social Media Marketing, Content Marketing, and AI automation modules.",
        },
        { name: "Contact Admissions", text: "Reach out to our admissions team for counseling and upcoming batch details." },
        {
          name: "Start Learning",
          text: "Master AI-driven digital marketing to secure roles as an SEO Specialist, PPC Analyst, or Digital Marketing Manager.",
        },
      ],
    },
  },

  hero: {
    breadcrumb: "Digital Marketing Course in Mumbai",
    badges: [
      { icon: "star", text: "{rating} Rating (Professional)" },
      { icon: "users", text: "5,000+ Careers Launched" },
      { icon: "globe2", text: "Comprehensive Training in Mumbai & Thane" },
    ],
    h1: "[[Digital Marketing Course]] in Mumbai with [[Placement]]",
    subtitle:
      "Master **AI-Driven SEO**, **Performance Marketing (Google Ads)**, **SMM**, and **GA4 Analytics**. Launch your career with the most practical Digital Marketing training in Mumbai designed for 2025-2026 job market growth.",
    description:
      "Get hands-on experience with real budgets, live audits, and 15+ industry tools. Job Assistance for freshers, professionals, and entrepreneurs seeking digital growth.",
    ctas: [
      { label: "Enroll & Get Placement", kind: "enroll" },
      { label: "Download Course Modules", kind: "syllabus" },
      { label: "Course Syllabus", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "Placement Assistance & Interview Prep",
      "Hands-on Training with GA4 & Meta Ads Sandbox",
      "Live Case Studies & AI-Driven Marketing Workflows",
      "Industry-Recognized Certification & Global Credibility",
    ],
    featuresTitle: "Course Highlights",
    features: [
      { icon: "megaphone", title: "Real Campaigns", description: "Run ads & SEO on live sandboxes" },
      { icon: "bot", title: "AI-Driven Workflows", description: "ChatGPT, GA4 Insights, Bard/Gemini" },
      { icon: "barChart", title: "Analytics First", description: "GA4, Tag Manager, Looker Studio" },
      { icon: "award", title: "Global Certificate", description: "QR-verified course completion" },
    ],
  },

  stats: {
    heading: "Why Pursue a [[Digital Marketing Career]] in Mumbai?",
    intro:
      "Digital Marketing is the fast-track to a high-growth career. Master **AI-Driven SEO, Performance Ads, and Data Analytics** with the comprehensive Digital Marketing course in Mumbai.",
    items: [
      { value: "$671.86 B", label: "Market Size", note: "Global digital marketing market by 2028" },
      { value: "4th", label: "Most High-Income Skill", note: "Recommended to learn in 2024 (Forbes)" },
      { value: "#3", label: "Most In-Demand Skill", note: "Cited in Michael Page Salary Guide 2023" },
      { value: "141,000+", label: "Digital marketing jobs available worldwide" },
    ],
    footnote: "Source highlighted in the program brochure",
    outro:
      "Build a career in **AI-driven digital marketing, SEO, performance ads, GA4 analytics**, and **automation**. Our master program is designed to be *job-ready, portfolio-first, and placement-focused*.",
  },

  why: {
    heading: "Why Choose CDPL for [[Digital Marketing Training]]?",
    intro:
      "Our mentor-led program is recognized as the comprehensive Digital Marketing course in Mumbai. Master **SEO, Performance Marketing, GA4, and AI Tools** with placement support to launch your career.",
    points: [
      { icon: "calendar", text: "2-Months Duration" },
      { icon: "clock", text: "40–50 Learning Hours" },
      { icon: "timer", text: "6 hrs / week" },
      { icon: "check", text: "No Prerequisite" },
      { icon: "star", text: "{rating} Rated" },
    ],
    cards: [
      {
        icon: "sparkles",
        title: "AI-Driven Curriculum",
        description:
          "Prompt engineering for marketers, content ops automation, and creative generation workflows to scale campaigns responsibly.",
      },
      {
        icon: "briefcase",
        title: "Job-Ready Portfolio",
        description:
          "Ship 3 capstones: SEO + content hub, GA4 dashboard with attribution, and profitable ads funnel with landing pages.",
      },
      {
        icon: "lineChart",
        title: "Performance Mindset",
        description: "Hands-on with GA4, Looker Studio, conversion APIs, and A/B testing to lift ROAS, CTR, and CAC-to-LTV ratios.",
      },
      {
        icon: "users",
        title: "Mentor-Led Cohort",
        description: "Live reviews, feedback loops, and career guidance. Mock interviews and LinkedIn + resume optimization.",
      },
      {
        icon: "trophy",
        title: "Career Outcomes",
        description:
          "Interview prep, portfolio walkthroughs, and referral network. Roles: Performance Marketer, SEO Specialist, Marketing Analyst.",
      },
      {
        icon: "repeat",
        title: "Always-Updated",
        description:
          "Syllabus refreshes to match platform changes (Meta, Google Ads, YouTube, LinkedIn) and privacy-first measurement.",
      },
    ],
    outro: "Build case studies, land interviews, and demonstrate ROI with real dashboards and campaigns.",
  },

  curriculum: {
    heading: "Advanced [[Digital Marketing Course]] Modules",
    intro:
      "Our comprehensive **14-module curriculum** is designed for the 2025-2026 job market. Learn from the comprehensive Digital Marketing institute in Mumbai with placement focus on SEO, SEM, SMM, and Analytics.",
    // The old modules had an outcome paragraph instead of topic bullets.
    modules: [
      {
        title: "Fundamentals of Digital Marketing",
        topics: [],
        outcome:
          "Define objectives, research market & competitors, map funnel & journeys, segment audiences, build buyer personas and value propositions, understand Paid/Owned/Earned media, compare organic vs inorganic channels, and choose the right channel mix.",
      },
      {
        title: "SEO Fundamentals",
        topics: [],
        outcome:
          "Grasp Google updates and ranking analysis; apply content/on-page & off-page tactics; plan link-building and internal linking; avoid common SEO mistakes & penalties; practice AI-assisted keyword research, meta, and content structure; get introduced to technical SEO.",
      },
      {
        title: "Social Media Marketing",
        topics: [],
        outcome:
          "Select platforms by audience & goals; design B2B/B2C content strategies; create AI-assisted content systems; work with formats (feeds, Stories, Reels); understand algorithms & core metrics; execute on YouTube, LinkedIn, Instagram, and Twitter/X with personal branding.",
      },
      {
        title: "Persuasive Copywriting",
        topics: [],
        outcome:
          "Write high-converting headlines, hooks, and body copy using storytelling & value propositions; A/B test creative & copy; define landing-page goals and structure; brief designers/freelancers; establish brand guidelines for consistent creative.",
      },
      {
        title: "Marketing on Google",
        topics: [],
        outcome:
          "Build Search, Display, YouTube, Discovery & UAC campaigns from scratch; master account/campaign structure, match types, ad crafting, audiences, and bidding strategies; track performance and optimize to ROI with data-driven decisions.",
      },
      {
        title: "Marketing on Facebook",
        topics: [],
        outcome:
          "Plan objectives and buying types; design audiences (core, custom, lookalike); use CBO vs ABO and funnel strategies; select placements (static, carousel, video); structure accounts for scale; measure dashboard vs realized ROAS; apply rules/creative/email automation.",
      },
      {
        title: "Marketing on LinkedIn & Other Platforms",
        topics: [],
        outcome:
          "Run LinkedIn campaigns (formats, targeting, Lead Gen Forms); build insights & tracking; retarget & create lookalikes; explore programmatic/alt networks (Quora, Buysell, Carbon, Hyper, Omni); optimize Apple Search Ads, Amazon Ads; use native ads (Taboola/Outbrain/Yahoo).",
      },
      {
        title: "Conversion Tracking",
        topics: [],
        outcome:
          "Implement event-based conversion tracking; understand cookies & FLoC; migrate to and report with GA4 (funnels, paths, cohorts, attribution); track web/app with GA/Mixpanel/Matomo; deploy heatmaps & session recordings (Clarity/Hotjar); configure GTM & e-commerce tracking.",
      },
      {
        title: "CRO (Basic → Advanced)",
        topics: [],
        outcome:
          "Run the CRO loop—Observe, Ideate, Test, Deploy; perform heuristic, quantitative & qualitative analysis; craft hypotheses and prioritize (e.g., ICE); execute tests and measure; make ship/no-ship decisions; follow best practices with a practical CRO checklist.",
      },
      {
        title: "Media Planning",
        topics: [],
        outcome:
          "Set media objectives and strategy; decide media mix (traditional vs digital) and budget split; buy media (direct, programmatic, RTB); schedule effectively; monitor KPIs; address ad fraud & brand safety; review case studies to sharpen planning.",
      },
      {
        title: "Dashboards & Reporting",
        topics: [],
        outcome:
          "Apply data-viz principles and chart selection; connect multiple sources; build real-time reports in Looker Studio (Data Studio) with filters and custom views; translate campaign data into actionable optimization insights.",
      },
      {
        title: "Attribution",
        topics: [],
        outcome:
          "Understand why attribution matters; compare view-through vs click-through; evaluate models (last, first, linear, time-decay, position-based, U-/V-shaped); build a GA attribution project; interpret data; design custom B2B/B2C models; learn algorithmic essentials.",
      },
      {
        title: "Email/WhatsApp + Automation",
        topics: [],
        outcome:
          "Adopt email best practices and key metrics; navigate WhatsApp’s pros/cons & compliance; blend email+WA journeys; automate with tools (e.g., Zapier); practice on a live case study with dashboard walkthrough.",
      },
      {
        title: "Capstone & Job Preparation",
        topics: [],
        outcome:
          "Ship an end-to-end brand strategy; craft targeted resumes & portfolios; practice mock interviews; use job-search tooling and LinkedIn outreach; understand recruiter perspective, salary expectations/negotiation, and long-term career growth paths.",
      },
    ],
    ctas: [
      { label: "Get Full Syllabus PDF", kind: "syllabus" },
      { label: "Book a Free Demo", kind: "enroll" },
    ],
  },

  tools: {
    heading: "Master the Best [[Digital Marketing Tools]] & AI Tech",
    intro:
      "Our course provides hands-on training with 15+ industry tools. Learn **AI-Driven SEO (Ahrefs, SEMrush)**, **Performance Marketing (Meta Ads, Google Ads)**, and **GA4 Analytics**. This is the most practical Digital Marketing tool training in Mumbai designed for career success.",
    items: [
      { name: "ChatGPT", logo: "/techstack_logos/OpenAI-logo.png", description: "AI copy, ad creatives, keyword ideation, workflows" },
      { name: "Google Insights", logo: "/techstack_logos/Google-Trends-logo.jpg", description: "Core Web Vitals & performance optimization" },
      { name: "Grok", logo: "/techstack_logos/grok-logo.svg", description: "Trend mining, research prompts, competitive analysis" },
      {
        name: "DeepSeek",
        logo: "/techstack_logos/deepseek-logo.svg",
        description: "Long-form planning, content outlines, data summarization",
      },
      { name: "Meta Ads", logo: "/techstack_logos/Meta-Ads-Manager-logo.png", description: "Paid social campaigns, creatives testing, pixel checks" },
      {
        name: "Google Calendar",
        logo: "/techstack_logos/google-calendar-logo.svg",
        description: "Campaign cadences, sprint schedules, launch timelines",
      },
      { name: "Ahrefs", logo: "/techstack_logos/ahrefs-logo.png", description: "Backlinks, keyword gaps, content clusters" },
      { name: "SEMrush", logo: "/techstack_logos/semrush-logo.svg", description: "Technical SEO audits, SERP tracking, PPC insights" },
    ],
    outro:
      "Learn end-to-end execution: **keyword research**, **content clustering**, **technical SEO fixes**, **ad budgeting**, **landing page CRO**, **GA4 + Looker Studio reporting**, and **automation** with AI-assisted workflows.",
  },

  projects: {
    heading: "Top [[Digital Marketing Projects]] for Your Portfolio",
    intro:
      "Work on real-world briefs from Mumbai's top brands. Our **project-first training** ensures you are job-ready with a professional portfolio in SEO, Ads, and Analytics.",
    items: [
      {
        icon: "calendar",
        title: "Create a content calendar for a real business and produce social media content using AI Tools",
        description: "Research → plan → generate posts with clear brand voice.",
      },
      {
        icon: "barChart",
        title: "Create social media progress report to senior marketing management",
        description: "Monthly KPI deck with insights and next actions.",
      },
      { icon: "search", title: "Keyword mapping audit of a website", description: "Fix cannibalization and build topic clusters." },
      {
        icon: "megaphone",
        title: "Set up a Facebook Ads account for a company and create campaigns",
        description: "From pixels & CAPI to full-funnel structure.",
      },
      {
        icon: "briefcase",
        title: "Prepare a LinkedIn marketing plan for an Edtech company",
        description: "Persona-led messaging and content lanes.",
      },
      {
        icon: "lineChart",
        title: "Set up GA4 and create various useful reports for your business",
        description: "Meaningful events, funnels, and explorations.",
      },
      {
        icon: "testTube",
        title: "List down 10 hypotheses based on observations and run 3 CRO tests",
        description: "Prioritize with ICE and ship A/B tests.",
      },
      { icon: "layoutDashboard", title: "Build a dashboard on Data Studio", description: "Stakeholder-friendly KPIs with drill-downs." },
      { icon: "network", title: "Create a custom attribution model", description: "Understand incrementality across channels." },
      {
        icon: "mail",
        title: "Build an email and WhatsApp marketing campaign and automate using Zapier",
        description: "Lifecycle flows with triggers & webhooks.",
      },
      {
        icon: "rocket",
        title: "Apply learnings and build an end-to-end digital marketing strategy for a brand",
        description: "Full GTM: channels, budgets, and roadmap.",
      },
    ],
    ctas: [
      { label: "See Sample Portfolios", kind: "syllabus" },
      { label: "Book a Free Demo", kind: "enroll" },
    ],
  },

  testimonials: {
    heading: "What Our [[Students Say]]",
    intro:
      "Real experiences from learners who leveled up their careers with **job-ready marketing skills**, analytics, and **AI-driven execution**.",
    ctas: [{ label: "Join the next cohort", kind: "enroll" }],
  },

  career: {
    heading: "Secure a High-Paying [[Digital Marketing Job]] in Mumbai",
    intro:
      "Demand for Digital Marketing professionals in Mumbai is at an all-time high. Master **SEO, Performance Ads (PPC), and Analytics** with the comprehensive institute to secure placement in top MNCs and Agencies.",
    rolesTitle: "Job Roles",
    roles: [
      "Digital Marketing Manager",
      "Social Media Manager",
      "SEO Specialist",
      "Content Marketing Manager",
      "Email Marketing Specialist",
      "Web Analyst",
      "PPC Specialist",
      "Inbound Marketing Manager",
      "Digital Analytics Manager",
      "Influencer Marketer",
      "Brand Manager",
      "Digital Marketing Strategist",
      "Conversion Rate Optimizer",
      "E-commerce Marketing Specialist",
      "Online Reputation Manager",
      "CRO Specialist",
      "CRM Manager",
    ],
    // The old section had no company list; its "Domains Hiring Fast" card fills that slot.
    companiesTitle: "Domains Hiring Fast",
    companies: ["E-commerce", "EdTech & SaaS", "Finance & D2C"],
    extras: [
      {
        kind: "stats",
        items: [
          { value: "141,000+", label: "Global Openings", note: "LinkedIn & job boards worldwide" },
          { value: "₹6–18 LPA", label: "Avg Salary (IN)", note: "Role & location dependent" },
          { value: "70%+", label: "Remote Friendly", note: "Hybrid/remote opportunities" },
        ],
      },
      {
        kind: "cards",
        items: [
          { icon: "briefcase", title: "Placement Support", points: ["Resume & portfolio review", "Mock interviews", "Job alerts & referrals"] },
          { icon: "target", title: "Skills Recruiters Seek", points: ["GA4 + GTM", "Meta & Google Ads", "Data Studio/Looker, CRM"] },
        ],
      },
    ],
    outro: "Learn from anywhere. **If you want to be the best, CDPL is your place.**",
    ctas: [{ label: "Talk to a Program Advisor", kind: "careerSession", ariaLabel: "Talk to a program advisor" }],
  },

  audience: {
    eyebrow: "Portfolio Projects • Verified Certificate • Placement Support",
    heading: "Who Should Join Our [[Digital Marketing Course]]?",
    intro:
      "Our program is comprehensive **Digital Marketing training in Mumbai** for anyone looking to scale their career. Ideal for **freshers, working professionals, and entrepreneurs** who want to master SEO, SEM, and Analytics.",
    items: [
      {
        icon: "users",
        title: "Career Switchers",
        description: "Move from non-tech or sales roles into high-growth digital marketing & analytics.",
      },
      {
        icon: "graduationCap",
        title: "Fresh Graduates",
        description: "BCom • BBA • BSc • BE/ BTech — get job-ready with projects and certification.",
      },
      {
        icon: "briefcase",
        title: "Working Professionals",
        description: "Upskill from content/social/PR to performance marketing, GA4 & attribution.",
      },
      { icon: "target", title: "Entrepreneurs & Founders", description: "Grow your brand with ROI-driven ads, CRO and data-backed decisions." },
      { icon: "lineChart", title: "Product & Growth Teams", description: "Layer analytics, funnels, LTV and experimentation into your roadmap." },
      { icon: "wrench", title: "Developers & Designers", description: "Add marketing analytics, GTM, SEO-tech and CRO to your toolkit." },
      { icon: "sparkles", title: "Automation Curious", description: "Use AI tools to ideate content, scale creatives and automate workflows." },
      { icon: "cpu", title: "Data-Driven Learners", description: "Master GA4, Looker Studio dashboards, cohorts and attribution models." },
    ],
    outro:
      "Whether you’re launching a new career or scaling an existing one, you’ll build hands-on experience with **GA4 & GTM**, **Meta/Google Ads**, **SEO & Content**, **Looker Studio** dashboards and **conversion rate optimization** - the exact stack employers hire for.",
  },

  faq: {
    heading: "[[Digital Marketing Course Mumbai - FAQs]]",
    intro: "Everything you need to know about the program - certifications, placements, projects, and schedules.",
    items: DIGITAL_MARKETING_FAQS,
  },

  cta: {
    heading: "Enroll in the [[Digital Marketing Course]] in Mumbai",
    intro:
      "Join successful learners at our Digital Marketing institute in Mumbai. Get **placement assistance** and master AI-driven marketing today.",
    actions: [
      { label: "Call Now: +91 788-83-83-788", kind: "tel", ariaLabel: "Call Cinute Digital to enroll" },
      { label: "Email Us", kind: "mailto", ariaLabel: "Email Cinute Digital" },
    ],
    highlights: [
      { icon: "calendar", title: "Next Cohort", description: "Starts Soon" },
      { icon: "clock", title: "Learning Hours", description: "~80 hrs" },
      { icon: "briefcase", title: "Placement", description: "100% Assistance" },
    ],
    footnotes: [
      { icon: "mapPin", text: "Locations: **Mira Road** & **Vasai, Maharashtra** · Live online available." },
      { icon: "message", text: "Prefer WhatsApp? **Message after calling and we’ll follow up.**" },
      { icon: "indianRupee", text: "Career Counselling • Scholarship Options • EMI Available" },
    ],
  },
};
