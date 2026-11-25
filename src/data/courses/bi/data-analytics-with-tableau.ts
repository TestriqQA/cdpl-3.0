import type { CourseContent } from "@/types/course-page";
import { DATA_ANALYTICS_TABLEAU_FAQS } from "@/data/courses/bi/faqs/data-analytics-with-tableau";

// Content for /courses/bi-courses/data-analytics-with-tableau, moved from the
// old src/components/data-analytics-with-tableau/* sections. Kept word for word
// except repeated filler (a hidden keyword cluster, the same rating / students
// placed / years strip in five sections, the same "You will learn" list and
// "Key Benefit" line on every card, generic per-module sentences, a stale
// "20% discount this month" promo, and CTA rows repeated in back-to-back sections).
export const dataAnalyticsWithTableauCourse: CourseContent = {
  slug: "data-analytics-with-tableau",
  courseName: "Data Analytics & Visualization with Tableau",
  sourceName: "Tableau Course Page",

  seo: {
    title: "Data Analytics with Tableau Course in Mumbai | CDPL",
    description:
      "20-hour master program in Tableau — data connections, calculated fields, dashboards & visual analytics with hands-on projects and placement assistance.",
    keywords: [
      "tableau course in mumbai",
      "data analytics with tableau training",
      "business intelligence course",
      "data visualization training",
      "tableau developer jobs",
      "learn tableau benefits",
    ],
    image: "/og-images/data-analytics-with-tableau-og.webp",
  },

  schema: {
    name: "Master Program in Data Analytics using Tableau",
    description:
      "20-Hour Master Program in Data Analytics with Tableau. Hands-on projects, interactive dashboards, job assistance, global certificates.",
    duration: "P1M",
  },

  hero: {
    breadcrumb: "Data Analytics with Tableau",
    badges: [
      { icon: "timer", text: "Duration: 20 Hours" },
      { icon: "star", text: "{rating} Average Rating" },
      { icon: "users", text: "{studentsPlaced} Students Placed" },
      { icon: "trophy", text: "14+ Years Experience" },
    ],
    h1: "Master [[Data Analytics & Visualization with Tableau]]",
    subtitle:
      "Transform raw data into powerful, insight-driven visualizations. Learn from industry experts and master Tableau for data science, analytics, and interactive dashboards in just 20 hours.",
    description:
      "Learn industry-standard **Tableau Desktop** skills for **Business Intelligence (BI)**, **self-service analytics**, and **interactive dashboards**. Build portfolio projects with real datasets; master **data cleaning**, **data blending**, **joins**, **calculations**, **parameters**, **LOD expressions**, **mapping & geospatial analysis**, **table calculations**, and **dashboard performance optimization**.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Tableau program" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "Career-focused Tableau training in Mumbai with *job assistance*",
      "Hands-on BI dashboards for finance, marketing, operations, and sales analytics",
      "Clear path to roles like *Tableau Developer*, *Data Analyst*, and *BI Analyst*",
    ],
    featuresTitle: "Course Highlights",
    features: [
      { icon: "barChart", title: "Real Projects" },
      { icon: "users", title: "Expert Trainers" },
      { icon: "graduationCap", title: "Certification" },
      { icon: "briefcase", title: "Job Ready" },
    ],
  },

  stats: {
    heading: "Why Invest in This Course?",
    intro:
      "Discover the market demand, career opportunities, and earning potential in data analytics with Tableau",
    items: [
      { value: "25%", label: "Market Growth", note: "From 2020 to 2030" },
      { value: "101,000+", label: "Job Vacancies", note: "In India" },
      { value: "4 LPA", label: "Average Salary", note: "Tableau Developer Freshers" },
      { value: "75%", label: "Job Satisfaction", note: "Among professionals" },
      { value: "32%", label: "India's Share", note: "In global market" },
    ],
    outro:
      "These statistics show the incredible demand for Tableau professionals in today's job market. **Join successful graduates** who have built rewarding careers in data analytics.",
    ctas: [{ label: "Book a Free Career Session", kind: "careerSession" }],
  },

  why: {
    heading: "Why Choose Our Tableau Course?",
    intro: "Experience industry-leading training with hands-on projects, expert mentorship, and job support",
    cards: [
      { icon: "target", title: "80:20 Approach", description: "80% practical and 20% theory model for industry-rich experience" },
      {
        icon: "lightbulb",
        title: "Real-Time Projects",
        description: "Gain hands-on experience with real-world projects and case studies",
      },
      { icon: "handshake", title: "1:1 Doubt Solving", description: "Every doubt is resolved with personalized one-on-one support" },
      { icon: "graduationCap", title: "Expert Instructors", description: "Learn from seasoned data analysts and industry veterans" },
      { icon: "award", title: "Global Certification", description: "Get internationally recognized certificates from AAA" },
      { icon: "rocket", title: "Career Support", description: "Receive resume-building and interview preparation assistance" },
    ],
    extras: [
      {
        kind: "cards",
        title: "Comprehensive Course Features",
        items: [
          { icon: "graduationCap", title: "Certification", description: "Globally recognized certificate with QR code validation" },
          { icon: "briefcase", title: "Job Placement", description: "job assistance with top companies" },
          { icon: "trophy", title: "Expert Mentors", description: "extensive expertise in IT training" },
          { icon: "smartphone", title: "Flexible Learning", description: "Hybrid model - attend online or in-class" },
        ],
      },
    ],
  },

  curriculum: {
    eyebrow: "Total Duration: 20 Hours",
    heading: "Comprehensive Curriculum",
    intro: "Master 12 modules covering everything from Tableau basics to advanced analytics and dashboard design",
    modules: [
      {
        title: "Introduction to BI Concepts and Tableau",
        duration: "2 hours",
        topics: [
          "Understanding Business Intelligence",
          "Introduction to BI",
          "Overview of BI Tools",
          "Role of BI in Decision Making",
          "Understanding The Analytical Workflow in Every Business",
          "Introduction to Tableau",
          "What is Tableau?",
          "Why Tableau?",
          "Tableau Product Suite Overview",
          "Benefits and Applications",
        ],
      },
      {
        title: "Setting Up Tableau",
        duration: "1.5 hours",
        topics: [
          "Installation and Configuration",
          "System Requirements",
          "Installing Tableau Desktop/Public",
          "Getting Started with Tableau",
          "Tableau Interface Overview",
          "Connecting to Different Data Sources",
          "Saving and Exporting Workbooks",
        ],
      },
      {
        title: "Data Integration Techniques",
        duration: "2 hours",
        topics: [
          "Combining Data",
          "Relationships in Tableau",
          "Joins: Types and Use Cases",
          "Unions for Merging Data",
          "Understanding Logical and Physical Layers",
          "Key Differences",
          "Use Cases for Each",
        ],
      },
      {
        title: "Data Categorization and Management",
        duration: "1.5 hours",
        topics: [
          "Data Types and Formats",
          "String, Numeric, Date, and Boolean",
          "Changing Data Types",
          "Dimensions and Measures",
          "Discrete vs Continuous Fields",
          "Configuring Data Pane",
        ],
      },
      {
        title: "Creating Fundamental Charts",
        duration: "2 hours",
        topics: ["Basic Visualization Techniques", "Bar Charts", "Line Charts", "Scatter Plots", "Chart Best Practices"],
      },
      {
        title: "Enhancing Visualizations",
        duration: "2 hours",
        topics: [
          "Customization with Marks Card",
          "Colors, Shapes, and Sizes",
          "Adding Labels and Tooltips",
          "Interactive Highlighting",
          "Formatting and Styling",
        ],
      },
      {
        title: "Advanced Visualization Techniques",
        duration: "2.5 hours",
        topics: [
          "Specialized Charts",
          "Treemaps and Heatmaps",
          "Gantt and Bullet Charts",
          "Geospatial Visualizations",
          "Geographic Maps and Custom Geocoding",
          "Heat Maps and Density Maps",
          "Advanced Multi-Axis Charts",
          "Dual-Axis and Combined Visualizations",
        ],
      },
      {
        title: "Organizing and Filtering Data",
        duration: "2 hours",
        topics: [
          "Grouping and Sorting",
          "Creating Groups",
          "Manual and Field-Based Sorting",
          "Data Filtering Techniques",
          "Applying Filters to Visualizations",
          "Context and Dimension Filters",
        ],
      },
      {
        title: "Advanced Data Analysis",
        duration: "3 hours",
        topics: [
          "Calculated Fields and Functions",
          "Creating Custom Calculations",
          "Using Logical, String, and Date Functions",
          "Table Calculations",
          "Quick Calculations (Running Totals, Percentages)",
          "Customizing Table Calculations",
          "Analytics Tools",
          "Reference Lines and Forecasting",
          "Clustering and Trend Analysis",
          "Dynamic Analysis",
          "Working with Sets",
          "Creating Custom Parameters",
        ],
      },
      {
        title: "Building Dashboards and Stories",
        duration: "2.5 hours",
        topics: [
          "Dashboard Design Fundamentals",
          "Best Practices for Layouts",
          "Using Filters and Actions for Interactivity",
          "Storytelling with Tableau",
          "Combining Dashboards into Stories",
          "Adding Captions and Narrative Elements",
        ],
      },
      {
        title: "Hands-On Projects",
        duration: "2 hours",
        topics: [
          "Project 1: Sales Performance Analysis",
          "Project 2: Financial Data Visualization",
          "Project 3: Customer Insights Dashboard",
          "Real-world dataset analysis",
          "Portfolio building",
        ],
      },
      {
        title: "Assessment and Certification",
        duration: "1 hour",
        topics: ["Final Assessment Test", "Practical Coverage", "Theoretical Coverage", "Certification", "QR Code Validation"],
      },
    ],
    extras: [
      {
        kind: "steps",
        title: "Your Learning Journey",
        items: [
          { title: "Foundation", description: "Modules 1-2: Learn BI concepts and Tableau setup" },
          { title: "Core Skills", description: "Modules 3-6: Master data integration and visualization" },
          { title: "Advanced", description: "Modules 7-10: Build dashboards and advanced analytics" },
          { title: "Mastery", description: "Modules 11-12: Real projects and certification" },
        ],
      },
    ],
    ctas: [
      { label: "Download Detailed Syllabus (PDF)", kind: "syllabus" },
      { label: "Book a Career Session", kind: "careerSession" },
      { label: "Enroll Now & Start Learning", kind: "enroll" },
    ],
  },

  tools: {
    heading: "Tools & Technologies",
    intro: "Master industry-standard tools and libraries used by data professionals worldwide",
    items: [
      {
        name: "Tableau",
        logo: "/techstack_logos/tableau-logo.svg",
        description: "**Visualization** — Leading data visualization and business intelligence platform",
      },
      {
        name: "Calculated Fields",
        icon: "calculator",
        description: "**Data Manipulation** — Create custom calculations and derived fields in Tableau",
      },
      {
        name: "Tableau Server",
        logo: "/techstack_logos/tableau-logo.svg",
        description: "**Collaboration** — Publish and share interactive dashboards across organizations",
      },
      {
        name: "Tableau Public",
        logo: "/techstack_logos/tableau-logo.svg",
        description: "**Sharing** — Share interactive visualizations with the public",
      },
      {
        name: "Data Blending",
        icon: "link",
        description: "**Data Integration** — Combine data from multiple sources seamlessly",
      },
      {
        name: "Advanced Analytics",
        icon: "trendingUp",
        description: "**Analysis** — Perform statistical analysis and forecasting",
      },
    ],
    extras: [
      {
        kind: "cards",
        title: "Comprehensive Tool Coverage",
        items: [
          {
            icon: "target",
            title: "Core Tools",
            points: [
              "**Tableau Desktop:** Professional visualization and analytics",
              "**Tableau Public:** Free version for learning and sharing",
              "**Tableau Server:** Enterprise deployment and collaboration",
            ],
          },
          {
            icon: "zap",
            title: "Advanced Features",
            points: [
              "**Calculated Fields:** Custom calculations and expressions",
              "**Data Blending:** Combine multiple data sources",
              "**Advanced Analytics:** Statistical analysis and forecasting",
            ],
          },
        ],
      },
      {
        kind: "steps",
        title: "Your Learning Path with Tools",
        items: [
          { title: "Phase 1: Foundation", meta: "Modules 1-2", description: "**Tools:** Tableau Public, Basic Visualizations" },
          {
            title: "Phase 2: Core Skills",
            meta: "Modules 3-6",
            description: "**Tools:** Tableau Desktop, Calculated Fields, Data Integration",
          },
          {
            title: "Phase 3: Advanced",
            meta: "Modules 7-10",
            description: "**Tools:** Advanced Analytics, Data Blending, Dashboard Design",
          },
          {
            title: "Phase 4: Mastery",
            meta: "Modules 11-12",
            description: "**Tools:** Tableau Server, Real-world Projects, Optimization",
          },
        ],
      },
    ],
  },

  roadmap: {
    heading: "Your Career Roadmap",
    intro:
      "Follow our proven learning path to become a market-ready Tableau developer and launch a successful career in data analytics",
    steps: [
      { title: "You Enquired", description: "Initial inquiry about the course", icon: "phone" },
      { title: "You Enroll", description: "Complete registration and enrollment", icon: "penTool" },
      { title: "Extensive Training", description: "Learn Tableau tools & technologies", icon: "book" },
      { title: "Projects & Assignments", description: "Work on real-world projects", icon: "target" },
      { title: "Job Readiness", description: "Interview prep and portfolio building", icon: "briefcase" },
      { title: "Market-Ready Developer", description: "Launch your career as a Tableau Developer", icon: "rocket" },
    ],
    extras: [
      {
        kind: "cards",
        title: "Detailed Learning and Career Path",
        items: [
          {
            icon: "book",
            title: "Phase 1: Foundation (Modules 1-2)",
            description: "**BI Concepts and Tableau Setup** · 3.5 hours",
            points: [
              "Understand Business Intelligence fundamentals",
              "Install and configure Tableau",
              "Explore Tableau interface and features",
              "Connect to data sources",
              "**Career Relevance:** Build foundational knowledge required for all data analytics roles",
            ],
          },
          {
            icon: "wrench",
            title: "Phase 2: Core Skills (Modules 3-6)",
            description: "**Data Integration and Visualization** · 6.5 hours",
            points: [
              "Master data integration techniques",
              "Create fundamental charts and visualizations",
              "Enhance visualizations with marks and formatting",
              "Understand data types and dimensions",
              "**Career Relevance:** Develop practical skills for junior analyst positions",
            ],
          },
          {
            icon: "zap",
            title: "Phase 3: Advanced (Modules 7-10)",
            description: "**Advanced Analytics and Dashboards** · 6.5 hours",
            points: [
              "Create advanced visualization techniques",
              "Perform complex data analysis",
              "Build interactive dashboards",
              "Create data stories for stakeholders",
              "**Career Relevance:** Qualify for mid-level analyst and business intelligence roles",
            ],
          },
          {
            icon: "trophy",
            title: "Phase 4: Mastery (Modules 11-12)",
            description: "**Real Projects and Certification** · 3 hours",
            points: [
              "Complete real-world projects",
              "Build professional portfolio",
              "Pass final assessment",
              "Receive global certification",
              "**Career Relevance:** Ready for senior roles and specialized positions",
            ],
          },
        ],
      },
      {
        kind: "cards",
        title: "After Course Completion",
        items: [
          {
            icon: "clipboardCheck",
            title: "Resume Building",
            description: "Our team helps optimize your resume with Tableau skills and projects",
          },
          { icon: "mic", title: "Interview Prep", description: "Mock interviews and technical preparation for job interviews" },
          {
            icon: "handshake",
            title: "Job Placement",
            description: "Direct connections with top companies hiring Tableau professionals",
          },
          { icon: "trendingUp", title: "Career Growth", description: "Ongoing support for career advancement and skill development" },
        ],
      },
    ],
    outro: "Ready to start your career transformation? Join our next batch today!",
    ctas: [{ label: "Enroll Now and Begin Your Journey", kind: "enroll" }],
  },

  projects: {
    heading: "Real-Time Projects",
    intro:
      "Work on industry-relevant projects across multiple domains. Gain hands-on experience with real-world datasets and practical applications.",
    items: [
      {
        icon: "graduationCap",
        title: "Student Performance Dashboard",
        meta: "Education",
        description:
          "Analyze student performance data (grades, attendance, test scores) to create a dashboard for a school district. Identify at-risk students and highlight trends to inform teaching strategies.",
        tags: ["Data Analytics", "Tableau", "Calculated Fields", "Data Visualization", "Domain Knowledge (Education)"],
      },
      {
        icon: "smartphone",
        title: "Campaign Performance Analysis",
        meta: "Marketing",
        description:
          "Analyze marketing campaign data (click-through rates, conversions, ROI) to evaluate effectiveness for a digital marketing agency. Create visual stories that guide future campaign strategies.",
        tags: ["Data Analytics", "Tableau", "Data Visualization", "Tableau Server", "Domain Knowledge (Marketing)"],
      },
    ],
    extras: [
      {
        kind: "text",
        title: "Domain Knowledge Coverage",
        text: "Our projects span across multiple industries, ensuring you gain exposure to diverse business domains and real-world analytics challenges.",
      },
      {
        kind: "list",
        items: [
          "Aviation",
          "Healthcare",
          "Telecommunication",
          "BFSI",
          "Social Media",
          "Automobile",
          "Sales & Marketing",
          "Human Resources",
          "Supply Chain",
        ],
      },
      {
        kind: "cards",
        items: [
          {
            icon: "target",
            title: "Portfolio Building",
            description:
              "Create impressive projects for your portfolio to showcase to potential employers and stand out in interviews.",
          },
          {
            icon: "globe",
            title: "Real-World Experience",
            description:
              "Work with actual datasets and solve problems faced by industry professionals in real business scenarios.",
          },
          {
            icon: "rocket",
            title: "Skill Mastery",
            description:
              "Apply theoretical knowledge to practical scenarios and master data analytics tools with hands-on practice.",
          },
        ],
      },
    ],
    ctas: [{ label: "Download Project Details", kind: "syllabus" }],
  },

  testimonials: {
    heading: "Student Testimonials",
    intro: "Hear from our successful graduates who have transformed their careers through our Tableau training",
  },

  career: {
    heading: "Career Opportunities",
    intro: "Explore diverse career paths and job roles available for Tableau professionals in today's job market",
    rolesTitle: "Job Roles You Can Apply For",
    roles: [
      "HR Analyst",
      "Supply Chain Analyst",
      "Sales Analyst",
      "Reporting Specialist",
      "Operations Analyst",
      "Business Intelligence Analyst",
      "Financial Analyst",
      "Tableau Developer",
    ],
    companiesTitle: "Top Companies Hiring Tableau Developers",
    companies: [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple",
      "Meta",
      "Adobe",
      "Salesforce",
      "IBM",
      "Accenture",
      "Deloitte",
      "TCS",
      "Infosys",
      "Wipro",
      "HCL",
      "Cognizant",
    ],
    companiesNote: "And many more leading companies across various industries",
    extras: [
      {
        kind: "stats",
        title: "Salary & Career Growth",
        items: [
          {
            value: "4 LPA",
            label: "Average Freshers Salary",
            note: "Starting salary for Tableau developers with our certification",
          },
          { value: "8-12 LPA", label: "Mid-Level Salary", note: "After 2-3 years of experience in the field" },
          { value: "15+ LPA", label: "Senior Level Salary", note: "With advanced skills and leadership experience" },
        ],
      },
      {
        kind: "steps",
        title: "Your Career Path",
        items: [
          {
            title: "Junior Tableau Developer",
            meta: "Year 1",
            description:
              "Create basic visualizations, assist in dashboard development, learn from senior team members",
          },
          {
            title: "Tableau Developer",
            meta: "Year 2-3",
            description: "Design and develop complex dashboards, optimize Tableau workbooks, mentor junior developers",
          },
          {
            title: "Senior Tableau Developer",
            meta: "Year 4-5",
            description: "Lead BI projects, architect solutions, manage team, consult on analytics strategy",
          },
          {
            title: "BI Manager / Architect",
            meta: "Year 5+",
            description: "Strategic planning, team management, enterprise-level implementations, consulting",
          },
        ],
      },
      {
        kind: "cards",
        items: [
          {
            icon: "trendingUp",
            title: "Market Growth",
            description:
              "The data analytics market is growing at **25% annually** from 2020 to 2030, creating abundant job opportunities. This growth is driven by increasing demand for data-driven decision making across all industries.",
          },
          {
            icon: "briefcase",
            title: "Job Vacancies",
            description:
              "There are over **101,000+ job vacancies** for Tableau professionals in India alone. This creates excellent opportunities for skilled professionals to secure high-paying positions.",
          },
        ],
      },
    ],
    outro: "Ready to launch your career as a Tableau professional? Start your journey today!",
    ctas: [
      { label: "Enroll Now & Secure Your Future", kind: "enroll" },
      { label: "Download Syllabus", kind: "syllabus" },
    ],
  },

  audience: {
    heading: "Who Should Enroll?",
    intro:
      "This course is designed for diverse professionals looking to master Tableau and advance their careers in data analytics",
    items: [
      {
        icon: "lightbulb",
        title: "Beginners",
        description: "Those with basic data skills looking to master Tableau and data visualization",
      },
      {
        icon: "trendingUp",
        title: "Intermediate Users",
        description: "Professionals enhancing their analytics and visualization expertise",
      },
      {
        icon: "briefcase",
        title: "Business Professionals",
        description: "Business analysts, data scientists, and managers creating impactful dashboards",
      },
      {
        icon: "rocket",
        title: "Career Changers",
        description: "Technical and non-technical professionals transitioning to data visualization roles",
      },
    ],
    extras: [
      {
        kind: "cards",
        title: "Prerequisites",
        items: [
          {
            icon: "check",
            title: "Required",
            points: [
              "**Basic Computer Literacy:** Comfortable using computers and software",
              "**Internet Connection:** Reliable internet for online sessions",
              "**Commitment:** Willingness to learn and practice",
            ],
          },
          {
            icon: "target",
            title: "Recommended",
            points: [
              "**Data Familiarity:** Basic understanding of data concepts",
              "**Business Knowledge:** Understanding of business analytics",
              "**SQL Knowledge:** Helpful but not required",
            ],
          },
        ],
      },
      {
        kind: "cards",
        title: "What You Get After Enrollment",
        items: [
          { icon: "book", title: "Comprehensive Content", description: "12 modules with detailed curriculum and learning materials" },
          { icon: "users", title: "Expert Guidance", description: "1:1 support from industry experts and experienced instructors" },
          { icon: "target", title: "Real Projects", description: "Work on industry-relevant projects for portfolio building" },
          { icon: "trophy", title: "Certification", description: "Globally recognized certificate with QR code validation" },
        ],
      },
    ],
    outro: "If you match any of the above profiles, this course is perfect for you!",
  },

  faq: {
    intro: "Find answers to common questions about our Tableau course",
    items: DATA_ANALYTICS_TABLEAU_FAQS,
  },

  cta: {
    heading: "Ready to Transform Your Career?",
    intro:
      "Join hundreds of successful professionals who have mastered Tableau and launched rewarding careers in data analytics. Start your journey today with our comprehensive 20-hour course.",
    actions: [
      { label: "Enroll Now & Get Started", kind: "enroll" },
      { label: "Download Free Syllabus", kind: "syllabus" },
    ],
    highlights: [
      { icon: "target", title: "Industry-Ready Skills", description: "Master in-demand Tableau skills valued by top companies" },
      { icon: "briefcase", title: "Career Support", description: "job assistance with placement in top companies" },
      { icon: "trophy", title: "Global Certificate", description: "Internationally recognized certification with QR validation" },
    ],
  },
};
