import {
  Presentation,
  Wrench,
  Briefcase,
  GraduationCap,
  Users,
  BookOpen,
  Factory,
  Settings,
  Rocket,
  TrendingUp,
  Building2
} from "lucide-react";

export interface TrainingService {
  id: string;
  slug: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  color: string;
  features: string[];
  benefits: string[];
  whoShouldAttend: string[];
  deliveryFormats: {
    format: string;
    duration: string;
    description: string;
  }[];
  curriculum?: {
    module: string;
    topics: string[];
  }[];
  outcomes: string[];
  methodology: string[];
  imageUrl?: string;
}

export const trainingServices: TrainingService[] = [
  {
    id: "1",
    slug: "expert-talks",
    icon: Presentation,
    title: "Expert Talks / Sessions",
    tagline: "Live insights from industry titans to spark your team's next breakthrough",
    shortDescription: "Bring domain experts to your organization. These interactive talks deliver fresh ideas, real-world lessons, and Q&A that transform thinking.",
    fullDescription: "Our Expert Talk sessions bring industry leaders and domain experts directly to your organization. These aren't just presentations—they're interactive knowledge-sharing experiences designed to inspire, educate, and transform the way your team thinks about technology, business, and innovation. Each session is customized to address your organization's specific challenges and goals, ensuring maximum relevance and impact.",
    color: "from-purple-500 to-blue-600",
    features: [
      "Industry leaders and domain experts",
      "Interactive Q&A sessions",
      "Real-world case studies",
      "Customized topics for your team",
      "Flexible duration (1-3 hours)",
      "Virtual or in-person delivery"
    ],
    benefits: [
      "Gain cutting-edge industry insights",
      "Learn from real-world success stories",
      "Network with industry leaders",
      "Inspire innovation in your team",
      "Stay ahead of industry trends",
      "Boost team motivation and engagement"
    ],
    whoShouldAttend: [
      "Senior management and leadership teams",
      "Technical teams and developers",
      "Product managers and strategists",
      "Innovation and R&D teams",
      "All employees seeking industry insights"
    ],
    deliveryFormats: [
      {
        format: "Keynote Session",
        duration: "1-2 hours",
        description: "High-impact presentation with Q&A"
      },
      {
        format: "Panel Discussion",
        duration: "1.5-2 hours",
        description: "Multiple experts discussing industry trends"
      },
      {
        format: "Fireside Chat",
        duration: "1 hour",
        description: "Intimate conversation with industry leader"
      },
      {
        format: "Masterclass",
        duration: "2-3 hours",
        description: "Deep-dive session with hands-on elements"
      }
    ],
    outcomes: [
      "Enhanced understanding of industry trends",
      "Actionable insights for business growth",
      "Inspired and motivated team members",
      "New perspectives on solving challenges",
      "Networking connections with experts"
    ],
    methodology: [
      "Pre-session consultation to understand needs",
      "Customized content development",
      "Interactive presentation delivery",
      "Live Q&A and discussion",
      "Post-session resource sharing"
    ],
  },
  {
    id: "2",
    slug: "workshops",
    icon: Wrench,
    title: "Workshops",
    tagline: "Hands-on learning to master skills, not just talk about them",
    shortDescription: "Tailored sessions (half-day, full-day, 2-5 day, multi-day) to teach new tools, techniques, frameworks—participants leave doing, not just listening.",
    fullDescription: "Our workshops are intensive, hands-on learning experiences designed to build practical skills that participants can immediately apply. Unlike traditional training, our workshops emphasize learning by doing. Participants work on real projects, solve actual problems, and build tangible deliverables. We offer flexible formats from half-day sessions to week-long intensive bootcamps, all customized to your organization's technology stack and business needs.",
    color: "from-blue-500 to-cyan-600",
    features: [
      "Flexible duration (half-day to multi-day)",
      "Hands-on practical exercises",
      "Latest tools and frameworks",
      "Take-home projects and resources",
      "Small batch sizes for personalized attention",
      "Industry-relevant case studies"
    ],
    benefits: [
      "Immediate skill application",
      "Reduced learning curve for new technologies",
      "Team upskilling at scale",
      "Improved productivity and efficiency",
      "Standardized best practices across teams",
      "Certificate of completion"
    ],
    whoShouldAttend: [
      "Developers and engineers",
      "QA and testing professionals",
      "Data scientists and analysts",
      "DevOps and infrastructure teams",
      "Technical leads and architects",
      "Anyone seeking hands-on technical skills"
    ],
    deliveryFormats: [
      {
        format: "Half-Day Workshop",
        duration: "4 hours",
        description: "Focused skill-building on specific topic"
      },
      {
        format: "Full-Day Workshop",
        duration: "8 hours",
        description: "Comprehensive coverage with hands-on labs"
      },
      {
        format: "2-Day Intensive",
        duration: "16 hours",
        description: "Deep-dive with project completion"
      },
      {
        format: "5-Day Bootcamp",
        duration: "40 hours",
        description: "Complete mastery with certification"
      }
    ],
    outcomes: [
      "Practical skills in new technologies",
      "Completed projects and code samples",
      "Best practices documentation",
      "Certification of completion",
      "Ongoing learning resources"
    ],
    methodology: [
      "Needs assessment and customization",
      "Theory with immediate practice",
      "Pair programming and collaboration",
      "Real-world project work",
      "Code reviews and feedback",
      "Post-workshop support"
    ],
  },
  {
    id: "3",
    slug: "on-job-training",
    icon: Briefcase,
    title: "On-the-Job Training Program",
    tagline: "Learn while doing: real projects, real responsibility, real growth",
    shortDescription: "Embed trainees in live work environments under mentorship. They learn daily in context, gain confidence, and contribute meaningfully.",
    fullDescription: "Our On-the-Job Training (OJT) program is the most effective way to develop talent. Trainees are embedded in your actual work environment, working on real projects under the guidance of experienced mentors. This immersive approach ensures that learning happens in context, skills are immediately applicable, and trainees become productive team members faster. The program combines structured learning with practical experience, creating well-rounded professionals.",
    color: "from-green-500 to-emerald-600",
    features: [
      "Real project experience",
      "Dedicated mentorship",
      "Hands-on skill development",
      "Immediate practical application",
      "Structured learning path",
      "Regular progress assessments"
    ],
    benefits: [
      "Faster onboarding and productivity",
      "Context-aware learning",
      "Build internal talent pipeline",
      "Reduced hiring costs",
      "Team culture integration",
      "Practical problem-solving skills"
    ],
    whoShouldAttend: [
      "Fresh graduates entering the workforce",
      "Career changers transitioning to tech",
      "Junior developers seeking growth",
      "Interns and apprentices",
      "Employees moving to new roles"
    ],
    deliveryFormats: [
      {
        format: "3-Month Program",
        duration: "12 weeks",
        description: "Foundation building with project work"
      },
      {
        format: "6-Month Program",
        duration: "24 weeks",
        description: "Comprehensive skill development"
      },
      {
        format: "1-Year Program",
        duration: "52 weeks",
        description: "Complete professional transformation"
      }
    ],
    outcomes: [
      "Job-ready professionals",
      "Completed real-world projects",
      "Industry-standard coding practices",
      "Professional work habits",
      "Team collaboration skills",
      "Portfolio of work"
    ],
    methodology: [
      "Initial skills assessment",
      "Personalized learning plan",
      "Mentor assignment and pairing",
      "Weekly learning objectives",
      "Regular code reviews",
      "Monthly progress evaluations",
      "Final project presentation"
    ],
  },
  {
    id: "4",
    slug: "faculty-development",
    icon: GraduationCap,
    title: "Faculty Development Program",
    tagline: "Equip your faculty with latest pedagogy, tools, and industry perspective",
    shortDescription: "Workshops and modules tailored for teachers: new teaching methods, curriculum design, digital tools, student engagement strategies.",
    fullDescription: "Our Faculty Development Programs are designed to transform educators into modern, effective teachers who can prepare students for industry demands. We cover the latest pedagogical approaches, technology integration, curriculum design aligned with industry needs, and student engagement strategies. Faculty members learn not just what to teach, but how to teach effectively in today's digital, fast-paced learning environment.",
    color: "from-orange-500 to-red-600",
    features: [
      "Modern teaching methodologies",
      "Curriculum design workshops",
      "Digital tools training",
      "Student engagement techniques",
      "Industry-academia bridge building",
      "Assessment and evaluation methods"
    ],
    benefits: [
      "Enhanced teaching effectiveness",
      "Improved student outcomes",
      "Industry-relevant curriculum",
      "Technology-enabled teaching",
      "Better student engagement",
      "Professional growth for faculty"
    ],
    whoShouldAttend: [
      "College and university faculty",
      "Training institute instructors",
      "Corporate trainers",
      "Educational administrators",
      "Curriculum designers",
      "Academic coordinators"
    ],
    deliveryFormats: [
      {
        format: "3-Day Workshop",
        duration: "24 hours",
        description: "Intensive pedagogy and tools training"
      },
      {
        format: "5-Day Program",
        duration: "40 hours",
        description: "Comprehensive FDP with certification"
      },
      {
        format: "Semester-Long Program",
        duration: "4-6 months",
        description: "Continuous development with mentorship"
      }
    ],
    outcomes: [
      "Modern teaching skills",
      "Technology integration capability",
      "Industry-aligned curriculum",
      "Improved student engagement",
      "Assessment design skills",
      "FDP completion certificate"
    ],
    methodology: [
      "Interactive workshops",
      "Peer learning sessions",
      "Technology demonstrations",
      "Curriculum design exercises",
      "Teaching practice sessions",
      "Feedback and improvement cycles"
    ],
  },
  {
    id: "5",
    slug: "train-the-trainer",
    icon: Users,
    title: "Train-the-Trainer Program",
    tagline: "Build a cadre of trainers who teach others to teach",
    shortDescription: "Train your in-house or external trainers in delivery, instructional design, feedback, assessment—so they replicate excellence.",
    fullDescription: "Our Train-the-Trainer (TTT) program creates skilled internal trainers who can effectively deliver technical and soft skills training within your organization. Participants learn instructional design, delivery techniques, engagement strategies, assessment methods, and how to handle diverse learning styles. This program enables organizations to build sustainable internal training capabilities, reducing dependency on external trainers and ensuring consistent quality.",
    color: "from-pink-500 to-rose-600",
    features: [
      "Instructional design mastery",
      "Delivery techniques",
      "Feedback and assessment methods",
      "Training material development",
      "Virtual training skills",
      "Handling difficult participants"
    ],
    benefits: [
      "Build internal training capability",
      "Consistent training quality",
      "Reduced external training costs",
      "Faster knowledge dissemination",
      "Customized organizational training",
      "Scalable training operations"
    ],
    whoShouldAttend: [
      "Subject matter experts becoming trainers",
      "HR and L&D professionals",
      "Technical leads training teams",
      "Corporate trainers",
      "Consultants delivering training",
      "Anyone responsible for knowledge transfer"
    ],
    deliveryFormats: [
      {
        format: "3-Day Program",
        duration: "24 hours",
        description: "Core TTT skills and practice"
      },
      {
        format: "5-Day Intensive",
        duration: "40 hours",
        description: "Comprehensive TTT with certification"
      },
      {
        format: "Modular Program",
        duration: "8-12 weeks",
        description: "Spaced learning with practice assignments"
      }
    ],
    outcomes: [
      "Certified internal trainers",
      "Training material templates",
      "Delivery confidence and skills",
      "Assessment design capability",
      "Feedback techniques mastery",
      "Training effectiveness measurement"
    ],
    methodology: [
      "Adult learning principles",
      "Instructional design workshops",
      "Practice teaching sessions",
      "Peer feedback and coaching",
      "Video recording and analysis",
      "Continuous improvement planning"
    ],
  },
  {
    id: "6",
    slug: "sttp",
    icon: BookOpen,
    title: "STTP (Short Term Training Program)",
    tagline: "Intensive short courses to deep dive into trending topics",
    shortDescription: "1-5 day focused modules on niche skills (AI, data analytics, IoT etc.). Great for faculty, students, or professionals wanting rapid upskilling.",
    fullDescription: "Short Term Training Programs (STTP) are intensive, focused learning experiences designed for rapid skill acquisition in trending technologies. Approved by AICTE and recognized by universities, these programs are perfect for faculty members, students, and working professionals who want to quickly upskill in specific domains. Our STTPs combine theory with extensive hands-on practice, ensuring participants gain practical, immediately applicable skills.",
    color: "from-indigo-500 to-purple-600",
    features: [
      "1-5 day intensive modules",
      "Trending technology topics",
      "Certification upon completion",
      "Rapid skill acquisition",
      "AICTE/University recognized",
      "Hands-on lab sessions"
    ],
    benefits: [
      "Quick upskilling in hot technologies",
      "Industry-recognized certification",
      "Networking with peers",
      "Latest industry practices",
      "Career advancement opportunities",
      "Academic credit (for students)"
    ],
    whoShouldAttend: [
      "College and university faculty",
      "Engineering students",
      "Working professionals",
      "Researchers and PhD scholars",
      "Technical enthusiasts",
      "Career changers"
    ],
    deliveryFormats: [
      {
        format: "1-Day STTP",
        duration: "8 hours",
        description: "Introduction to emerging technology"
      },
      {
        format: "3-Day STTP",
        duration: "24 hours",
        description: "Comprehensive skill building"
      },
      {
        format: "5-Day STTP",
        duration: "40 hours",
        description: "Deep dive with project work"
      }
    ],
    outcomes: [
      "Practical skills in trending tech",
      "STTP completion certificate",
      "Project portfolio",
      "Industry connections",
      "Latest tools and techniques",
      "Academic/professional credentials"
    ],
    methodology: [
      "Intensive lectures and demos",
      "Hands-on lab exercises",
      "Industry case studies",
      "Project-based learning",
      "Expert guest sessions",
      "Assessment and certification"
    ],
  },
  {
    id: "7",
    slug: "industrial-visits",
    icon: Factory,
    title: "Industrial Visits",
    tagline: "On-site exposure to real operations—theory meets factory floor",
    shortDescription: "Take learners to companies, factories, labs. Observe processes, interact with professionals, and get inspiration and context beyond textbooks.",
    fullDescription: "Our Industrial Visit programs provide invaluable real-world exposure by taking students and professionals to leading companies, manufacturing facilities, research labs, and tech centers. These visits bridge the gap between theoretical knowledge and practical application, allowing participants to see how concepts learned in classrooms are implemented in real industries. Participants observe live processes, interact with industry professionals, and gain insights that textbooks simply cannot provide.",
    color: "from-teal-500 to-cyan-600",
    features: [
      "Live industry exposure",
      "Interaction with professionals",
      "Process observation",
      "Real-world context building",
      "Networking opportunities",
      "Career guidance sessions"
    ],
    benefits: [
      "Practical understanding of industry",
      "Career clarity and motivation",
      "Professional networking",
      "Real-world problem awareness",
      "Industry best practices exposure",
      "Inspiration for innovation"
    ],
    whoShouldAttend: [
      "Engineering students",
      "Management students",
      "Faculty members",
      "Research scholars",
      "Career exploration groups",
      "Technical enthusiasts"
    ],
    deliveryFormats: [
      {
        format: "Half-Day Visit",
        duration: "4 hours",
        description: "Facility tour and interaction"
      },
      {
        format: "Full-Day Visit",
        duration: "8 hours",
        description: "Comprehensive tour with workshops"
      },
      {
        format: "Multi-Day Program",
        duration: "2-3 days",
        description: "Immersive industry experience"
      }
    ],
    outcomes: [
      "Industry process understanding",
      "Professional connections",
      "Career insights",
      "Practical knowledge application",
      "Motivation for learning",
      "Visit completion certificate"
    ],
    methodology: [
      "Pre-visit orientation",
      "Guided facility tours",
      "Live process demonstrations",
      "Q&A with professionals",
      "Hands-on demonstrations",
      "Post-visit reflection sessions"
    ],
  },
  {
    id: "8",
    slug: "custom-training",
    icon: Settings,
    title: "Custom Training Solution",
    tagline: "Tailored training programs designed specifically for your organization's unique needs",
    shortDescription: "We design bespoke training programs aligned with your organization's specific goals, technology stack, and business objectives.",
    fullDescription: "Every organization has unique training needs. Our Custom Training Solutions are designed from scratch to address your specific challenges, technology stack, business goals, and team composition. We work closely with your leadership to understand your requirements, assess skill gaps, and design comprehensive training programs that deliver measurable results. Whether you need technical upskilling, process training, or leadership development, we create solutions that fit perfectly.",
    color: "from-violet-500 to-purple-600",
    features: [
      "Fully customized curriculum",
      "Your technology stack and tools",
      "Flexible delivery formats",
      "Aligned with business goals",
      "Scalable to team size",
      "Measurable outcomes"
    ],
    benefits: [
      "Perfect fit for your needs",
      "Maximum relevance and impact",
      "Flexible scheduling",
      "Cost-effective at scale",
      "Proprietary knowledge transfer",
      "Long-term partnership"
    ],
    whoShouldAttend: [
      "Organizations with specific needs",
      "Companies with proprietary tech",
      "Teams requiring specialized skills",
      "Enterprises scaling operations",
      "Startups building capabilities"
    ],
    deliveryFormats: [
      {
        format: "Consultation & Design",
        duration: "2-4 weeks",
        description: "Needs assessment and program design"
      },
      {
        format: "Pilot Program",
        duration: "Variable",
        description: "Test run with small group"
      },
      {
        format: "Full Rollout",
        duration: "Variable",
        description: "Organization-wide deployment"
      }
    ],
    outcomes: [
      "Customized training program",
      "Skilled workforce",
      "Improved productivity",
      "Competitive advantage",
      "Measurable ROI",
      "Ongoing support"
    ],
    methodology: [
      "Stakeholder interviews",
      "Skills gap analysis",
      "Curriculum design",
      "Material development",
      "Pilot delivery and refinement",
      "Full-scale implementation",
      "Impact measurement"
    ],
  },
  {
    id: "9",
    slug: "internship-program",
    icon: Rocket,
    title: "Internship Program",
    tagline: "Transform students into job-ready professionals through structured internships",
    shortDescription: "Comprehensive internship programs that provide students with real-world experience, mentorship, and industry exposure.",
    fullDescription: "Our Internship Programs are designed to bridge the gap between academic learning and industry requirements. We place students in real work environments where they contribute to actual projects while receiving structured mentorship and training. Interns gain hands-on experience with industry-standard tools, work in professional teams, and build portfolios that make them attractive to employers. The program includes technical training, soft skills development, and career guidance.",
    color: "from-blue-500 to-indigo-600",
    features: [
      "Real project experience",
      "Industry mentorship",
      "Technical and soft skills training",
      "Portfolio building",
      "Internship certificate",
      "Job placement assistance"
    ],
    benefits: [
      "Industry-ready skills",
      "Professional work experience",
      "Networking opportunities",
      "Resume building",
      "Career clarity",
      "Potential job offers"
    ],
    whoShouldAttend: [
      "Final year engineering students",
      "Pre-final year students",
      "Recent graduates",
      "Career switchers",
      "Students seeking industry exposure"
    ],
    deliveryFormats: [
      {
        format: "Summer Internship",
        duration: "6-8 weeks",
        description: "Intensive summer program"
      },
      {
        format: "Semester Internship",
        duration: "3-4 months",
        description: "Part-time during semester"
      },
      {
        format: "Full-Time Internship",
        duration: "6 months",
        description: "Comprehensive professional experience"
      }
    ],
    outcomes: [
      "Industry work experience",
      "Completed real projects",
      "Professional portfolio",
      "Internship certificate",
      "Job references",
      "Career readiness"
    ],
    methodology: [
      "Skills assessment",
      "Project assignment",
      "Mentor pairing",
      "Weekly training sessions",
      "Regular progress reviews",
      "Final project presentation",
      "Performance evaluation"
    ],
  },
  {
    id: "10",
    slug: "campus-to-corporate",
    icon: TrendingUp,
    title: "Campus to Corporate Program",
    tagline: "Comprehensive skill-integrated training to transform students into corporate-ready professionals",
    shortDescription: "End-to-end program that prepares students for corporate careers through technical training, soft skills, and placement support.",
    fullDescription: "The Campus to Corporate Program is a holistic transformation journey that takes students from academic environments to successful corporate careers. This comprehensive program integrates technical skill development, soft skills training, industry exposure, and placement assistance. Students learn in-demand technologies, develop professional communication skills, understand corporate culture, and receive dedicated placement support. The program has a proven track record of high placement rates in top companies.",
    color: "from-green-500 to-teal-600",
    features: [
      "Comprehensive technical training",
      "Soft skills development",
      "Industry projects",
      "Mock interviews and resume building",
      "Placement assistance",
      "Corporate etiquette training"
    ],
    benefits: [
      "Complete career transformation",
      "High placement rates",
      "Industry-relevant skills",
      "Professional confidence",
      "Competitive salaries",
      "Long-term career support"
    ],
    whoShouldAttend: [
      "Pre-final and final year students",
      "Recent graduates",
      "Career gap candidates",
      "Students seeking placement",
      "Career changers to IT"
    ],
    deliveryFormats: [
      {
        format: "3-Month Program",
        duration: "12 weeks",
        description: "Intensive training with placement"
      },
      {
        format: "6-Month Program",
        duration: "24 weeks",
        description: "Comprehensive with multiple technologies"
      },
      {
        format: "College Partnership",
        duration: "1-2 semesters",
        description: "Integrated with academic curriculum"
      }
    ],
    outcomes: [
      "Job-ready technical skills",
      "Professional soft skills",
      "Industry certifications",
      "Job placement",
      "Competitive salary packages",
      "Career growth foundation"
    ],
    methodology: [
      "Technical skills training",
      "Soft skills workshops",
      "Live project work",
      "Mock interviews",
      "Resume building",
      "Company tie-ups for placement",
      "Post-placement support"
    ],
  },
  /** --------------------------
   *  UPDATED / NEW ENTRIES
   * -------------------------- */
  {
    id: "11",
    slug: "corporate-training",
    icon: Building2,
    title: "Corporate Training",
    tagline: "Customized corporate training solutions to upskill teams and drive business outcomes",
    shortDescription: "Role-based, project-driven upskilling programs for engineering, data, QA, product, and leadership teams—aligned to your tech stack and KPIs.",
    fullDescription: "Our Corporate Training programs help organizations accelerate capability building across product engineering, QA automation, data & analytics, DevOps, cloud, and leadership. We design role-based learning paths mapped to business objectives and your technology stack. Cohorts learn through expert-led sessions, hands-on labs, code reviews, and capstone projects that translate directly to on-the-job performance. Programs are delivered on-site or virtually, with flexible schedules for distributed teams.",
    color: "from-blue-600 to-cyan-600",
    features: [
      "Needs analysis & role-based learning paths",
      "Live expert sessions + hands-on labs",
      "Real-world capstone projects",
      "Blended delivery (onsite/virtual)",
      "Manager dashboards & progress tracking",
      "Certification preparation (where applicable)"
    ],
    benefits: [
      "Faster technology adoption",
      "Improved team productivity & quality",
      "Standardized best practices",
      "Higher retention through growth paths",
      "Measurable skill uplift",
      "Clear ROI via project outcomes"
    ],
    whoShouldAttend: [
      "Software engineers, SDETs, QA",
      "Data engineers, analysts, scientists",
      "DevOps, cloud & platform teams",
      "Product managers & tech leads",
      "People managers & new leaders",
      "New hires and lateral joiners"
    ],
    deliveryFormats: [
      {
        format: "Workshops",
        duration: "1-2 days",
        description: "Focused, hands-on skill acceleration"
      },
      {
        format: "Bootcamps",
        duration: "3-5 days",
        description: "Intensive training with labs & reviews"
      },
      {
        format: "Learning Paths",
        duration: "6-12 weeks",
        description: "Role-based cohorts with capstone"
      },
      {
        format: "Onsite / Virtual",
        duration: "Flexible",
        description: "Blended, timezone-friendly schedules"
      }
    ],
    outcomes: [
      "Measurable skill uplift by role",
      "Production-ready assets & playbooks",
      "Adoption of engineering best practices",
      "Certified team members (optional)",
      "Internal mentor bench creation",
      "Reusable learning content library"
    ],
    methodology: [
      "Discovery & stakeholder interviews",
      "Curriculum design mapped to KPIs",
      "Cohort-based delivery with labs",
      "Code reviews & feedback loops",
      "Capstone aligned to business use-cases",
      "Reporting & impact measurement"
    ],
  },
  {
    id: "12",
    slug: "government-public-sector-training",
    icon: Building2,
    title: "Government & Public Sector Training (BMC)",
    tagline: "Digital transformation, e-governance, data security, and citizen-first service delivery for public institutions",
    shortDescription: "Specialized upskilling for municipalities (including BMC), departments, and public sector units—covering e-governance systems, digital literacy, data management, and cybersecurity.",
    fullDescription: "Our Government & Public Sector Training programs are tailored for municipal corporations, state departments, and public agencies. This includes dedicated offerings for the Brihanmumbai Municipal Corporation (BMC). We design practical, job-relevant curricula that improve adoption of e-governance systems, strengthen digital literacy, enhance data management and cybersecurity, and streamline citizen service delivery. Content respects government processes, multilingual needs, accessibility, and audit/compliance requirements, ensuring sustainable transformation.",
    color: "from-amber-500 to-orange-600",
    features: [
      "Government-focused curriculum & use-cases",
      "Process & policy mapping to training",
      "e-Governance systems proficiency",
      "Data management, privacy & cybersecurity",
      "Citizen service workflows & SLAs",
      "Multilingual & accessibility-aware delivery"
    ],
    benefits: [
      "Improved operational efficiency",
      "Better citizen service outcomes",
      "Higher digital adoption rates",
      "Stronger compliance & audit readiness",
      "Secure data handling practices",
      "Skilled, confident public staff"
    ],
    whoShouldAttend: [
      "BMC employees and departments",
      "Municipal corporation staff",
      "Department & district officials",
      "Clerical & administrative personnel",
      "Government IT cells & operators",
      "Program officers & field teams",
      "Public service delivery units"
    ],
    deliveryFormats: [
      {
        format: "Weekend Batches",
        duration: "8-12 weeks",
        description: "Ideal for working government staff"
      },
      {
        format: "Intensive Workshops",
        duration: "3-5 days",
        description: "Focused upskilling on priority topics"
      },
      {
        format: "On-Site Training",
        duration: "Variable",
        description: "Delivered at government offices"
      },
      {
        format: "Train-the-Department",
        duration: "4-8 weeks",
        description: "Create internal champions for scale"
      }
    ],
    outcomes: [
      "Digital literacy & system proficiency",
      "Enhanced citizen service SLAs",
      "Improved data hygiene & security",
      "Compliance with policies & audits",
      "Departmental champions for change",
      "Sustained modernization momentum"
    ],
    methodology: [
      "Needs assessment with departments",
      "Customized curriculum & scenarios",
      "Hands-on practice in sandbox systems",
      "On-the-job labs & helpdesk support",
      "Periodic assessment & certifications",
      "Impact measurement & reporting"
    ],
  },
];

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): TrainingService | undefined => {
  return trainingServices.find(service => service.slug === slug);
};

// Helper function to get all service slugs (for static generation)
export const getAllServiceSlugs = (): string[] => {
  return trainingServices.map(service => service.slug);
};
