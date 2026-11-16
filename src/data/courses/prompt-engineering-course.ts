import type { CourseContent } from "@/types/coursePage";
import { PROMPT_ENGINEERING_FAQS } from "@/data/promptEngineeringData";

// Content for /courses/artificial-intelligence-courses/prompt-engineering-course,
// moved from the old src/components/prompt-engineering-course/* sections. Kept
// word for word except repeated filler (hidden keyword lines, "from brochure"
// hints, chips repeated on every card, count-up "0" artefacts), which a
// cleanup pass removed.
export const promptEngineeringCourse: CourseContent = {
  slug: "prompt-engineering-course",
  courseName: "Prompt Engineering Course",
  sourceName: "Prompt Engineering Course Page",

  seo: {
    title: "Prompt Engineering with Generative AI Course | CDPL",
    description:
      "20-hour Hero Program in prompt engineering with generative AI — LLM workflows, RAG, AI agents & hands-on projects with placement assistance in Mumbai.",
    keywords: [
      "prompt engineering course mumbai",
      "generative ai training",
      "python gen ai",
      "prompt hero program",
      "ai prompt jobs mumbai",
    ],
    image: "/og-images/courses-artificial-intelligence-courses-prompt-engineering-course-og.webp",
  },

  schema: {
    name: "Prompt Engineering with Generative AI Course",
    description:
      "20-Hour Hero Program in Prompt Engineering with Gen AI. Hands-on projects, job assistance, AAA global certificates.",
    duration: "P1M",
    howTo: {
      name: "How to Enroll in CDPL Prompt Engineering Course",
      description: "A step-by-step guide to enrolling in our 20-hour Prompt Engineering with Generative AI program.",
      steps: [
        {
          name: "Review Curriculum",
          text: "Explore the prompt patterns, guardrails, structured outputs, and evaluation modules.",
        },
        {
          name: "Contact Admissions",
          text: "Reach out to our admissions team for counseling and upcoming batch details.",
        },
        {
          name: "Start Learning",
          text: "Master prompt engineering, RAG, and AI workflows to land roles as a Prompt Engineer or Applied AI Specialist.",
        },
      ],
    },
  },

  hero: {
    breadcrumb: "Prompt Engineering with Generative AI",
    badges: [
      { icon: "star", text: "{rating} ({reviews} reviews)" },
      { icon: "clock", text: "20 Hours" },
      { icon: "globe2", text: "Live Online + Classroom" },
      { icon: "users", text: "Mentor-Led Cohorts" },
      { icon: "sparkles", text: "User-friendly No-Code AI tools" },
      { icon: "briefcase", text: "Placement Support" },
    ],
    h1: "Master Program in [[Prompt Engineering]] with [[Generative AI]]",
    subtitle:
      "Learn **prompt patterns** (rewrite, critique, tree-of-thought), build **RAG pipelines**, leverage **function/tool calling & agents**, add **guardrails & evaluation**, and deploy real apps. Earn a **QR-verified certificate** and a recruiter-proof portfolio.",
    description:
      "Includes prompt optimization, embeddings, vector DBs, safety best practices, latency/cost tuning, and CI/CD for LLM apps.",
    ctas: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "Prompt patterns, structure & guardrails (safety-first design)",
      "RAG with embeddings & vector DBs (Faiss/PGVector)",
      "Tool/function calling, agents & workflows",
      "Eval & monitoring • latency/cost optimization • CI/CD",
    ],
  },

  stats: {
    heading: "Why [[Prompt Engineering with Gen AI]]?",
    intro:
      "Learn **prompt design** for **chat, tools, RAG**, and **workflow automation** with **LLM evaluation** and **safety-by-design**. Target roles: **Prompt Engineer**, **AI Automations Specialist**, **Applied AI**.",
    items: [
      { value: "20 Hours", label: "Program Duration" },
      { value: "80 : 20", label: "Practical : Theory" },
      { value: "1 : 1", label: "Doubt Solving" },
      { value: "100%", label: "Job Assistance" },
      { value: "14+ Years", label: "Mentor Expertise" },
      { value: "AAA", label: "Global Certification" },
      { value: "25%", label: "Market Growth (2020–2030)" },
      { value: "101,000+", label: "Job Vacancies in India" },
      { value: "4 LPA", label: "Freshers’ Avg Salary" },
    ],
    footnote: "*Outcomes vary by prior experience, pace, and project depth.",
  },

  why: {
    heading: "Prompt Engineering with Gen AI — [[A Complete Overview]]",
    intro:
      "Learn to **design prompts that perform** across models and use-cases. Build automation and content systems with **measurable quality**, **safety**, and **cost control**.",
    cards: [
      {
        icon: "sparkles",
        title: "Design Effective Prompts",
        description:
          "Master system prompts, role prompting, few-shot patterns, and chain-of-thought to boost quality and reliability.",
      },
      {
        icon: "message",
        title: "Frameworks & Patterns",
        description: "CRISPE, ReAct, CoT, and Planner-Executor frameworks to structure multi-step reasoning and tool use.",
      },
      {
        icon: "bot",
        title: "Multi-Model Fluency",
        description:
          "Work across ChatGPT, Grok, and open-source LLMs; adapt prompts to different model behaviors and contexts.",
      },
      {
        icon: "workflow",
        title: "Automation Pipelines",
        description:
          "Wire prompts into APIs and no-code tools, create reusable templates, and automate content & support workflows.",
      },
      {
        icon: "shieldCheck",
        title: "Safety & Guardrails",
        description: "Mitigate bias, define allowed topics, and implement output validation, red-teaming, and fallbacks.",
      },
      {
        icon: "gauge",
        title: "Evaluate & Iterate",
        description: "Build prompt test sets, track win-rates, measure latency/cost, and version prompts like code.",
      },
    ],
    extras: [
      {
        kind: "text",
        title: "What you’ll learn (and build)",
        text: "From **LLM fundamentals** and **prompt patterns** to **evaluation** and **guardrails**, this program emphasizes practical, deployable skills. You’ll ship reusable prompt libraries, integrate with APIs, and publish **portfolio-ready demos**.",
      },
      {
        kind: "list",
        items: [
          "Reusable prompt libraries for content, research, support, and analysis.",
          "Clear rubrics and A/B tests to validate prompt improvements objectively.",
          "Portfolio artifacts: prompt packs, evaluation reports, and live demos.",
        ],
      },
      {
        kind: "stats",
        title: "Quick Facts",
        items: [
          { value: "≈ 20 Hours", label: "Duration" },
          { value: "Project-Based", label: "Learning Mode" },
          { value: "None", label: "Prerequisites" },
          { value: "Job-Ready Portfolio", label: "Outcome" },
        ],
      },
    ],
    ctas: [{ label: "Apply Now", kind: "enroll", ariaLabel: "Apply now for Prompt Engineering with Gen AI" }],
  },

  curriculum: {
    heading: "10-Module [[Curriculum]]",
    intro:
      "A 10-module, industry-aligned pathway from AI/ML foundations to Generative AI, LLMs, Vision & Speech, Prompt Engineering, Responsible AI, and a hands-on capstone.",
    modules: [
      {
        title: "Introduction to AI",
        topics: [
          "What is AI, its evolution, and importance",
          "Real-world applications",
          "AI vs. Machine Learning vs. Deep Learning",
          "Limitations and ethical considerations",
        ],
      },
      {
        title: "AI Ecosystem & ML Foundations",
        topics: [
          "Subfields of AI (NLP, Computer Vision, Robotics, ML)",
          "Intro to Machine Learning",
          "Learning types (Supervised, Unsupervised)",
          "Basics of Neural Networks",
          "Everyday AI-powered tech",
        ],
      },
      {
        title: "Introduction to Generative AI",
        topics: [
          "What Generative AI is and how it creates new content",
          "How it differs from traditional AI",
          "Cross-domain use cases (marketing, healthcare, finance, gaming, etc.)",
        ],
      },
      {
        title: "Generative Learning & Technical Concepts",
        topics: [
          "Foundational model families (LLMs, LIMs, LAMs)",
          "Fine-tuning and transfer learning",
          "Transformer architecture fundamentals",
        ],
      },
      {
        title: "Evolution & Power of Large Language Models",
        topics: [
          "LLM basics (NLP, prompting, zero-shot & few-shot)",
          "Evolution of LLMs (GPT, Claude, Llama, Gemini/Bard, Pi)",
          "Tokenization, embeddings, context windows",
          "Real-world use cases (chat & voice assistants)",
        ],
      },
      {
        title: "Computer Vision & LIMs — Teaching AI to See",
        topics: [
          "Intro to Computer Vision",
          "Image processing and feature extraction",
          "Large Image Models (Stable Diffusion, Leonardo.ai, DALL-E)",
          "LIM applications",
        ],
      },
      {
        title: "Video, Speech & Generative AI Tools",
        topics: [
          "Video & speech AI tooling (e.g., VEED, PlayHT, Suno.ai)",
          "Text-to-Speech & Speech-to-Text applications",
          "AI-powered video & audio generation",
        ],
      },
      {
        title: "Prompt Engineering & Practical Applications",
        topics: [
          "Prompting foundations",
          "Zero-shot, one-shot, few-shot techniques",
          "Case studies (e.g., brand campaigns)",
          "Hands-on: designing prompts across different AI models",
        ],
      },
      {
        title: "Responsible AI & Governance",
        topics: [
          "Ethics and bias in AI models",
          "Governance for responsible deployment",
          "Regulations & compliance",
          "Best practices: Human-in-the-loop, monitoring, AI collaboration",
        ],
      },
      {
        title: "Capstone Project & Certification",
        topics: ["Real-world AI implementation project", "Assessment and certification pathway"],
      },
    ],
    moduleNote: "*Module order may vary based on cohort needs and instructor discretion.",
    ctas: [
      {
        label: "Download Detailed Syllabus (PDF)",
        kind: "syllabus",
        ariaLabel: "Download the detailed Generative AI syllabus",
      },
    ],
  },

  tools: {
    heading: "[[Tools]] & [[Technologies]] You’ll Master",
    intro:
      "Build **production-ready prompts** and **generative workflows** across leading LLMs and image models. Learn evaluation, guardrails, and versioning for **reliable outcomes**.",
    items: [
      {
        name: "ChatGPT",
        logo: "/techstack_logos/OpenAI-logo.png",
        description: "Design system prompts, few-shot examples, and structured outputs for robust assistants.",
      },
      {
        name: "DALL·E",
        logo: "/techstack_logos/OpenAI-logo.png",
        description: "Craft visual prompts, control styles, and iterate compositions for brand-ready imagery.",
      },
      {
        name: "Midjourney",
        logo: "/techstack_logos/Midjourney-logo.png",
        description: "Stylize prompts with descriptors, aspect ratios, and seeds for consistent art direction.",
      },
      {
        name: "Stable Diffusion",
        logo: "/techstack_logos/stable-diffusion-logo.webp",
        description: "Master negative prompts, CFG, and ControlNet for controllable generative outputs.",
      },
      {
        name: "Prompt Tools",
        icon: "wrench",
        description: "Use templates, evaluators, and versioning to A/B test prompts and track win-rates.",
      },
      {
        name: "Google Bard",
        logo: "/techstack_logos/gemini-logo.svg",
        description: "Explore search-grounded prompting and factuality checks for knowledge tasks.",
      },
      {
        name: "Claude AI",
        logo: "/techstack_logos/anthropic-logo.svg",
        description: "Structure long-form prompts, safety rails, and analysis workflows with extended context.",
      },
      {
        name: "Grok",
        logo: "/techstack_logos/grok-logo.svg",
        description: "Optimize prompts for latency/cost tradeoffs and high-throughput generation.",
      },
    ],
    extras: [
      {
        kind: "stats",
        items: [
          { value: "8 Core Tools", label: "Hands-On Stack", note: "LLMs • Diffusion • QA" },
          { value: "Portfolio Artifacts", label: "Built for Jobs", note: "Prompt packs • Demos" },
          { value: "Eval & Guardrails", label: "Quality First", note: "Win-rate • Cost control" },
        ],
      },
    ],
  },

  roadmap: {
    heading: "Your [[GenAI Career Roadmap]]",
    intro:
      "Follow these four proven steps to go from beginner to job-ready Prompt/GenAI professional with portfolio projects recruiters trust.",
    steps: [
      {
        title: "Complete the 20-Hour GenAI Hero Program",
        badge: "Job-Ready Foundations",
        description:
          "Foundations of LLMs, prompt patterns, context windows, safety/guardrails, and rapid prototyping to build confidence fast.",
      },
      {
        title: "Build 3 Portfolio-Grade Projects",
        badge: "Portfolio & GitHub",
        description:
          "Ship an AI content assistant, a RAG knowledge bot, and an automation/agent workflow with docs, demos, and clean READMEs.",
      },
      {
        title: "Career Prep & Mock Interviews",
        badge: "Interview Readiness",
        description:
          "Resume & LinkedIn optimization, ATS keywords, product thinking, system design for LLM apps, and scenario-based interviews.",
      },
      {
        title: "Apply & Land a GenAI Role",
        badge: "Offer & Onboarding",
        description:
          "Target roles like Prompt Engineer, LLM App Engineer, RAG/Knowledge Engineer, or AI Product Specialist (₹8–15 LPA).",
      },
    ],
    extras: [
      {
        kind: "stats",
        items: [
          { value: "~ 3–4 Weeks", label: "Program Duration", note: "20 hours guided learning" },
          { value: "3+", label: "Portfolio Projects", note: "Deployed & documented" },
          { value: "₹8–15 LPA", label: "Target CTC", note: "Role & location vary" },
        ],
      },
    ],
    ctas: [
      { label: "Get Personalized Roadmap", kind: "careerSession", ariaLabel: "Get personalized GenAI roadmap guidance" },
    ],
  },

  projects: {
    heading: "Real-World [[Prompt Projects]]",
    intro:
      "Create **AI-powered applications** the right way: robust **prompt patterns**, **guardrails**, **structured outputs**, and **LLM evaluation**.",
    items: [
      {
        icon: "fileText",
        title: "AI Content Generator",
        description: "Generate long-form articles with sectioning, tone control, and fact-checking cues.",
        features: ["Chain-of-Thought templating", "Style & tone controls", "Hallucination mitigation"],
        tags: ["Prompt Patterns", "LLM Eval", "RAG (optional)"],
      },
      {
        icon: "code",
        title: "Code Assistant Bot",
        description: "Multi-turn coding helper that plans, explains, and writes tests from specs.",
        features: ["Planning prompts", "Tool usage scaffolds", "Test-first prompting"],
        tags: ["Spec → Code", "Unit Tests", "Error Repair"],
      },
      {
        icon: "image",
        title: "Image Generation Tool",
        description: "Prompt a text-to-image model with style presets, seeds, and safety filters.",
        features: ["Style dictionaries", "Negative prompts", "Seed reproducibility"],
        tags: ["Text-to-Image", "Safety Guardrails", "Preset Library"],
      },
      {
        icon: "headphones",
        title: "Customer Support Copilot",
        description: "Retrieval-augmented assistant that cites sources and follows policy reliably.",
        features: ["RAG citations", "Policy guardrails", "Fallback prompts"],
        tags: ["Retrieval", "Eval Harness", "Moderator Layer"],
      },
      {
        icon: "megaphone",
        title: "Marketing Variant Studio",
        description: "Batch create on-brand ad variants with A/B hooks and readability checks.",
        features: ["Brand voice locks", "A/B hook generator", "Readability scoring"],
        tags: ["Prompt Templates", "Constraints", "Scorers"],
      },
      {
        icon: "table",
        title: "Data-Aware Doc Summarizer",
        description: "Summarize PDFs/spreadsheets with structured outputs and QA follow-ups.",
        features: ["JSON schema outputs", "Follow-up Q&A", "Citation spans"],
        tags: ["Doc Parsing", "Schema-First", "Eval Sets"],
      },
    ],
    outro:
      "These **industry-aligned projects** emphasize **prompt reliability**, **safety**, and **evaluation**-exactly what hiring managers want for **Prompt Engineer**, **AI Automations**, and **Applied AI** roles.",
  },

  testimonials: {
    heading: "What Our [[Students Say]]",
    intro:
      "Real feedback from graduates of our **Prompt Engineering with Gen AI** program-covering **prompt frameworks**, **evaluation**, **guardrails**, and **automation**. Portfolio-first and job-focused outcomes.",
  },

  career: {
    eyebrow: "50K+ Job Vacancies in India",
    heading: "Top Companies Hiring [[Prompt Engineers]]",
    intro: "High-growth careers across AI content, automation, copilots, RAG platforms, and LLM product engineering.",
    rolesTitle: "Job Roles",
    roles: [
      "Prompt Engineer",
      "LLM Application Engineer",
      "AI Automation Engineer",
      "RAG/Knowledge Engineer",
      "AI Product Specialist",
    ],
    companiesTitle: "Top Hiring Companies",
    companies: ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "Capgemini", "HCLTech", "IBM"],
    companiesNote: "Product • Services • Startups • Enterprises",
    outro: "*Logos are illustrative of hiring potential. Openings vary by location, skills, and experience.",
    ctas: [
      {
        label: "Apply for Placement Assistance",
        kind: "enroll",
        ariaLabel: "Apply for placement assistance in Prompt Engineering roles",
      },
    ],
  },

  audience: {
    heading: "Who Is This [[Course For]]",
    intro:
      "Master **Prompt Engineering** to produce reliable, on-spec outputs for **content**, **code**, and **automation** use-cases with **guardrails** and **LLM evaluation**.",
    items: [
      {
        icon: "lightbulb",
        title: "Beginners Interested in AI",
        description: "Start from the fundamentals of LLMs, prompt patterns, and safe usage—no prior experience required.",
        points: ["Zero-to-one learning path", "Mentor-led practice & feedback"],
      },
      {
        icon: "megaphone",
        title: "Professionals in Content & Marketing",
        description:
          "Automate briefs, drafts, and repurposing with on-brand voice, tone control, and approval-ready outputs.",
        points: ["Brand voice locks", "SEO & readability tooling"],
      },
      {
        icon: "code",
        title: "Developers & Engineers",
        description: "Enhance coding workflows with tool-use prompts, structured outputs, and evaluation for reliability.",
        points: ["Spec → Code prompting", "JSON schema outputs & tests"],
      },
      {
        icon: "repeat",
        title: "Career Switchers to AI",
        description:
          "Build a recruiter-ready portfolio with real projects in chat, RAG, and automation—plus job assistance.",
        points: ["Interview prep & ATS resume", "Portfolio reviews"],
      },
      {
        icon: "rocket",
        title: "Entrepreneurs & Freelancers",
        description:
          "Launch AI-powered agencies or products. Learn to build MVPs, automate operations, and scale with GenAI.",
        points: ["Rapid prototyping", "AI agency roadblocks"],
      },
    ],
  },

  faq: {
    intro:
      "Everything about our **Prompt Engineering with Gen AI** program-curriculum, tools, projects, timelines, certification, and **career support**.",
    items: PROMPT_ENGINEERING_FAQS,
  },

  cta: {
    eyebrow: "Seats are limited – secure yours today",
    heading: "Ready to Master [[Prompt Engineering & GenAI]]?",
    intro:
      "Join a project-first program with **global certification**, **20+ guided hours**, and **job assistance**-covering frameworks, evaluation, guardrails, and automation with leading LLMs.",
    actions: [
      { label: "Enroll Now", kind: "enroll" },
      { label: "Download Syllabus", kind: "syllabus", ariaLabel: "Download the Prompt Engineering syllabus" },
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call admissions at +91 7888383788" },
    ],
    highlights: [
      { icon: "award", title: "Certification", description: "International • QR-verifiable" },
      { icon: "package", title: "Portfolio Output", description: "Prompt Packs & Demos • Eval reports included" },
      { icon: "briefcase", title: "Placement Support", description: "End-to-End • Resume • Mock interviews" },
    ],
    footnotes: [
      { icon: "calendar", text: "Flexible schedules" },
      { icon: "users", text: "Mentor support" },
    ],
  },
};
