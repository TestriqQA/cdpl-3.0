import type { CourseContent } from "@/types/course-page";
import { JAVA_FAQS } from "@/data/courses/software-testing/faqs/java-course";

// Content for /courses/software-testing-course/java-course, moved from the old
// src/components/java-course/* sections. Kept word for word except repeated
// filler (the same chips / "See topics" links on every module, tool, role and
// project card, sr-only keyword lists, a visible "Keywords:" line, a rating
// pill row, a decorative star strip, CTA rows repeating the next section's).
export const javaCourse: CourseContent = {
  slug: "java-course",
  courseName: "Java Programming",
  sourceName: "Java Programming Course Page",

  seo: {
    title: "Java Programming Course in Mumbai | CDPL",
    description:
      "Job-ready Java course in Mumbai — Core Java, OOP, collections, JUnit & Selenium automation foundations with live projects and placement assistance.",
    keywords: [
      "java course mumbai",
      "core java training",
      "spring boot course",
      "java full stack",
      "java developer course",
      "java certification mumbai",
      "java microservices training",
    ],
    image: "/og-images/courses-software-testing-course-java-course-og.png",
  },

  schema: {
    name: "Java Programming Master Course",
    description:
      "Comprehensive Java course in Mumbai with Core Java, Spring Boot, Microservices, AWS. placement. Live projects, global certificate.",
    duration: "P2M2W",
  },

  hero: {
    breadcrumb: "Java Master Program",
    badges: [
      { icon: "star", text: "{rating} Rated" },
      { icon: "globe", text: "Live Online & Classroom" },
      { icon: "cpu", text: "Project-Based" },
    ],
    h1: "Master Program in [[Java Programming]]",
    subtitle:
      "Master **Core Java**, **Spring Boot**, **Microservices**, **Hibernate**, and **AWS Cloud**. Build **enterprise-grade applications**, earn a **QR-verified certificate**, and get **placement assistance**.",
    description:
      "Topics include OOP, Collections, Multithreading, REST APIs, SQL, Docker, Kubernetes, and system design fundamentals.",
    ctas: [
      { label: "Enroll Now", kind: "enroll", ariaLabel: "Enroll now in Java program" },
      { label: "Download Syllabus", kind: "syllabus" },
      { label: "View Curriculum", kind: "scroll", href: "curriculum" },
    ],
    highlights: [
      "80% practical labs with code reviews",
      "Spring Boot & Microservices focus",
      "Interview prep & system design",
      "QR-verified certificate + placement",
    ],
    featuresTitle: "Course Highlights",
    features: [
      { icon: "code", title: "80% Hands-On", description: "Real Java labs & reviews" },
      { icon: "users", title: "Expert Faculty", description: "10+ yrs industry mentors" },
      { icon: "award", title: "Global Certificate", description: "QR-verified completion" },
      { icon: "briefcase", title: "Placement", description: "Resume + mock interviews" },
    ],
  },

  stats: {
    heading: "Why [[Java]] Is One of the Most-Used Enterprise Languages",
    intro:
      "Java remains one of the most widely used enterprise languages for building secure, cloud-native, high-performance applications at scale. With Spring Boot, Microservices, Kubernetes, and the JVM, teams ship resilient software faster-backed by a vast talent pool and Fortune 500 adoption.",
    items: [
      { value: "25%", label: "Market Growth (2020–2030)", note: "Steady expansion of Java opportunities" },
      { value: "101,000+", label: "Job Vacancies in India", note: "Open roles aligned to Java skills" },
      { value: "4 LPA", label: "Fresher Avg Salary", note: "Java Programmer (entry level)" },
      { value: "75%", label: "Job Satisfaction", note: "Healthy satisfaction among pros" },
      { value: "32%", label: "India’s Global Share", note: "Share in the worldwide market" },
      { value: "30 Hours", label: "Course Duration", note: "Focused, fast-paced training" },
    ],
    extras: [
      {
        kind: "list",
        title: "Built for Cloud-Native Enterprise at Scale",
        items: [
          "Robust security model, mature JVM, and enterprise-grade tooling",
          "Spring Boot, Quarkus, and Micronaut accelerate microservices",
          "Seamless DevOps with Docker, Kubernetes, and CI/CD pipelines",
          "Excellent performance tuning (GC, JIT, Virtual Threads)",
          "Huge ecosystem, libraries, and community support",
          "Backed by Fortune 500 adoption and long-term stability",
        ],
      },
    ],
    ctas: [
      { label: "Explore Java Curriculum", kind: "scroll", href: "curriculum" },
      { label: "Talk to a Mentor", kind: "careerSession" },
    ],
  },

  why: {
    heading: "Your Gateway to [[Job-Ready Java Developer]]",
    intro:
      "Job-ready Java training covering Core Java, Spring Boot, REST APIs, Microservices, SQL, and Cloud fundamentals-designed for high-growth engineering careers.",
    cards: [
      { icon: "timer", title: "Total Duration", description: "80 Hours" },
      { icon: "github", title: "Hands-on Projects", description: "50+ Projects" },
      { icon: "calendar", title: "Weekly Schedule", description: "6 hrs / week" },
      { icon: "userCheck", title: "Eligibility", description: "No Exp. Needed" },
      { icon: "star", title: "Learner Rating", description: "{rating}" },
    ],
    extras: [
      {
        kind: "list",
        title: "Built for Real-World Enterprise Java",
        items: [
          "Master Core Java, OOP, Collections, Streams, and Exception Handling",
          "Build REST APIs with Spring Boot, JPA/Hibernate, and validation",
          "Design Microservices with Docker, CI/CD, and container-first practices",
          "Integrate SQL (MySQL/PostgreSQL), testing (JUnit/Mockito) & logging",
          "Cloud-ready patterns for Kubernetes & scalable, secure deployments",
          "Interview prep, Git/GitHub workflows, and portfolio-ready projects",
        ],
      },
    ],
  },

  curriculum: {
    heading: "[[Java Programming Curriculum]]",
    intro:
      "A 30-hour, job-ready path: essentials → control flow → data structures → OOP → collections → regex → exceptions, finishing with a hands-on capstone.",
    modules: [
      {
        title: "Introduction to Java Programming",
        topics: [],
        outcome: "What is Java, JDK–JRE–JVM, compilation → execution flow, key features & use cases.",
      },
      {
        title: "Installation & Development Setup",
        topics: [],
        outcome: "Install JDK, set JAVA_HOME/PATH, pick an IDE (Eclipse/IntelliJ/VS Code), run first program.",
      },
      {
        title: "Java Basics",
        topics: [],
        outcome: "Variables, data types, operators, console I/O, casting/conversion, comments & best practices.",
      },
      {
        title: "Arrays and ArrayLists",
        topics: [],
        outcome: "1D/2D arrays, for-each, common operations, ArrayList API & when to use lists vs arrays.",
      },
      {
        title: "Conditional Statements and Loops",
        topics: [],
        outcome: "if/else/switch, while/do-while/for, nested loops, break/continue with practical scenarios.",
      },
      {
        title: "Unpacking & Destructuring (Java Way)",
        topics: [],
        outcome: "Tuple-like handling via arrays/maps/objects, manual ‘unpacking’ patterns & limitations.",
      },
      {
        title: "Data Conversions & Comprehension Techniques",
        topics: [],
        outcome: "Primitive ↔ wrapper, String ↔ number/date; Java 8 Stream-based ‘comprehension’-style ops.",
      },
      {
        title: "Functions in Java",
        topics: [],
        outcome: "Defining/calling methods, overloading, static vs instance methods, parameters & returns.",
      },
      {
        title: "Sorting Techniques",
        topics: [],
        outcome: "Arrays.sort/Collections.sort, Comparable vs Comparator, bubble/insertion/selection logic.",
      },
      {
        title: "Object-Oriented Programming (OOP)",
        topics: [],
        outcome: "Classes/objects, constructors, encapsulation, inheritance, polymorphism & interfaces.",
      },
      {
        title: "Access Modifiers & Decorator Pattern",
        topics: [],
        outcome: "public/private/protected/default, static/final; overview + use of the Decorator pattern.",
      },
      {
        title: "Java Collections Framework",
        topics: [],
        outcome: "List/Set/Map families with HashMap/HashSet/LinkedList/TreeMap; iterators & for-each.",
      },
      {
        title: "Regular Expressions in Java",
        topics: [],
        outcome: "java.util.regex, Pattern/Matcher, common validation patterns (email/password/etc.).",
      },
      {
        title: "Exception Handling",
        topics: [],
        outcome: "Checked vs unchecked, try/catch/finally, throw/throws, custom exceptions & best practices.",
      },
      {
        title: "Container Objects in Java",
        topics: [],
        outcome: "Working with collections inside classes; nested structures (Map<List<…>>, List<Map<…>>).",
      },
      {
        title: "Capstone Project",
        topics: [],
        outcome: "Build a console app using OOP, collections, sorting & regex with robust error handling.",
      },
    ],
    extras: [
      {
        kind: "list",
        title: "What You’ll Build & Learn",
        items: [
          "Run Java from JDK install to first app, with clean code practices",
          "Arrays vs ArrayLists, and iterative patterns for real tasks",
          "Control flow mastery with nested loops & switch",
          "OOP with classes, inheritance, interfaces & constructors",
          "Collections (List/Set/Map), sorting & comparisons",
          "Regex validation and robust exception handling",
        ],
      },
    ],
    ctas: [
      { label: "Apply Now", kind: "enroll", ariaLabel: "Apply to the Java curriculum" },
      { label: "Download Syllabus (PDF)", kind: "syllabus", ariaLabel: "Download full Java syllabus PDF" },
    ],
  },

  tools: {
    heading: "[[Tools]] You’ll Master",
    intro:
      "Engineer with an industry-standard Java toolchain: build, test, containerize and deploy cloud-ready applications using Spring Boot, Hibernate, Docker, AWS, Git and more.",
    items: [
      { name: "Java", logo: "/techstack_logos/java-logo.svg", description: "JDK • JVM • Collections • Streams" },
      { name: "IntelliJ IDEA", logo: "/techstack_logos/intellij-logo.svg", description: "Productivity • Inspections • Refactors" },
      { name: "Spring Boot", logo: "/techstack_logos/spring-logo.svg", description: "REST APIs • Auto-config • Actuator" },
      { name: "Hibernate (JPA)", logo: "/techstack_logos/hibernate-logo.png", description: "ORM • Mappings • JPQL • Caching" },
      { name: "Maven", logo: "/techstack_logos/Maven-logo.png", description: "Build • Dependencies • Profiles" },
      { name: "Docker", logo: "/techstack_logos/docker-logo.svg", description: "Images • Containers • Compose" },
      { name: "AWS", logo: "/techstack_logos/amazonwebservices-logo.svg", description: "EC2 • RDS • ECS • S3" },
      { name: "Git", logo: "/techstack_logos/git-logo.svg", description: "Branching • PRs • Workflows" },
      { name: "Postman", logo: "/techstack_logos/postman-logo.svg", description: "Collections • Tests • Environments" },
    ],
    extras: [
      {
        kind: "list",
        title: "What you’ll master with these tools",
        items: [
          "End-to-end Java development with Spring Boot & Hibernate (JPA)",
          "API design, documentation & testing workflows using Postman",
          "Build automation with Maven and Git-based CI strategies",
          "Containerization with Docker and cloud deployments on AWS",
          "Version control best practices: branching, PRs & code reviews",
          "Monitoring, logging & production-ready configurations",
        ],
      },
    ],
  },

  roadmap: {
    heading: "Your [[Java Career Roadmap]]",
    intro:
      "Follow these **4 proven steps** to move from learner to **job-ready Java professional** with a portfolio recruiters trust.",
    steps: [
      {
        title: "Complete the 80-Hour Java Master Program",
        badge: "Job-Ready Foundations",
        description:
          "Master Core Java, OOP, Collections, Multithreading, Spring Boot, Microservices, Hibernate, and AWS Cloud deployment.",
      },
      {
        title: "Build 3 Portfolio Projects",
        badge: "Portfolio & GitHub",
        description:
          "Ship a full-stack e-commerce app, a banking microservice system, and a cloud-deployed API. Host on GitHub.",
      },
      {
        title: "Career Prep & Mock Interviews",
        badge: "Interview Readiness",
        description:
          "Resume revamp, System Design basics, DSA warm-ups, and domain-specific interview drills (Spring/Hibernate).",
      },
      {
        title: "Apply & Land a Java Role",
        badge: "Offer & Onboarding",
        description:
          "Target roles like Java Developer, Backend Engineer, Spring Boot Developer, or Full Stack Engineer (₹6–18 LPA).",
      },
    ],
    extras: [
      {
        kind: "stats",
        items: [
          { value: "~ 10 Weeks", label: "Program Duration", note: "80 hours guided learning" },
          { value: "3+", label: "Portfolio Projects", note: "Deployed & documented" },
          { value: "₹6–18 LPA", label: "Target CTC", note: "Role & location vary" },
        ],
      },
    ],
    outro: "Learn from anywhere. **Your journey to a Java career starts here.**",
    ctas: [{ label: "Get Personalized Roadmap", kind: "careerSession", ariaLabel: "Get personalized roadmap guidance" }],
  },

  projects: {
    heading: "40+ [[Real-World Projects]]",
    intro:
      "Build a **job-winning portfolio**: production-style architecture, clean code, measurable outcomes and clear documentation.",
    items: [
      {
        icon: "shoppingCart",
        title: "E-commerce Microservices",
        description: "Order, Inventory, and Payment services with event-driven architecture.",
        tags: ["Spring Boot", "Kafka", "Docker"],
      },
      {
        icon: "shield",
        title: "Banking API System",
        description: "Secure transaction processing, JWT auth, and audit logging.",
        tags: ["Java 17", "Spring Security", "PostgreSQL"],
      },
      {
        icon: "users",
        title: "Employee Management Portal",
        description: "Full-stack CRUD app with role-based access control.",
        tags: ["Spring MVC", "Thymeleaf", "Hibernate"],
      },
      {
        icon: "message",
        title: "Real-time Chat Application",
        description: "Scalable chat server with message persistence and broadcasting.",
        tags: ["WebSockets", "Spring Boot", "Redis"],
      },
      {
        icon: "cloud",
        title: "Cloud File Storage Service",
        description: "Secure file upload/download with presigned URLs.",
        tags: ["AWS S3", "Spring Cloud", "React"],
      },
      {
        icon: "search",
        title: "Job Portal Backend",
        description: "Advanced search, filtering, and application tracking.",
        tags: ["Spring Data JPA", "Elasticsearch", "MySQL"],
      },
      {
        icon: "building",
        title: "Hotel Booking System",
        description: "Service discovery, gateway routing, and load balancing.",
        tags: ["Microservices", "Eureka", "Zuul"],
      },
      {
        icon: "book",
        title: "Library Management CLI",
        description: "Console-based app demonstrating solid OOP principles.",
        tags: ["Core Java", "File I/O", "OOP"],
      },
    ],
    outro: "Every project ships with README, tests, and deployment notes.",
  },

  testimonials: {
    heading: "Java Programming [[Course Reviews]]",
    intro:
      "Read verified **student testimonials** from our industry-aligned **Java Programming** program. We cover **OOP**, **Collections**, **JVM & GC**, **Spring Boot**, **Hibernate/JPA**, **microservices**, **testing**, and **deployment**.",
    ctas: [
      { label: "Enroll now", kind: "enroll" },
      { label: "Download Syllabus", kind: "syllabus" },
    ],
  },

  career: {
    heading: "500K+ [[Java Jobs]] in India",
    intro:
      "High-demand Java careers across startups and enterprises. Become job-ready for roles in Spring Boot, Microservices, Cloud, DevOps, and scalable backend engineering.",
    rolesTitle: "Popular Java Career Roles",
    roles: [
      "Java Developer",
      "Spring Boot Developer",
      "Backend Engineer",
      "Full Stack Java Developer",
      "Microservices Architect",
      "Software Engineer",
      "DevOps Engineer",
      "Cloud Java Developer",
    ],
    // The old section listed no companies; its "Growth: Backend • Cloud • DevOps" tile fills this card.
    companiesTitle: "Growth",
    companies: ["Backend", "Cloud", "DevOps"],
    extras: [
      {
        kind: "stats",
        items: [
          { value: "500K+", label: "Open Java Roles" },
          { value: "Top", label: "Fortune 500 Adoption" },
          { value: "Pan-India", label: "Remote & Onsite" },
        ],
      },
      {
        kind: "list",
        title: "Skills that get interviews",
        items: [
          "Core Java, OOP, Collections, Streams, Error Handling",
          "Spring Boot, REST API design, validation & OpenAPI",
          "Microservices patterns: config, discovery, gateways, resilience",
          "JPA/Hibernate, SQL schema design, performance tuning",
          "DevOps basics: Git, CI/CD, Docker & Kubernetes fundamentals",
          "Cloud readiness: logging, monitoring, security best practices",
        ],
      },
    ],
    ctas: [{ label: "Browse Open Roles", kind: "careerSession" }],
  },

  audience: {
    eyebrow: "Beginner Friendly • Mentor-Led • Portfolio Projects • Placement Support",
    heading: "Who is this [[Java course]] for?",
    intro:
      "Beginner-friendly yet industry-focused: whether you’re starting out or upskilling, our Java program gets you job-ready with Spring Boot, REST APIs, Microservices, and Cloud fundamentals.",
    items: [
      {
        icon: "graduationCap",
        title: "Students & Freshers",
        description: "Start from zero—no prior coding required",
        points: ["Core Java fundamentals", "Hands-on projects", "Interview prep"],
      },
      {
        icon: "repeat",
        title: "Career Switchers",
        description: "Move into high-paying backend roles",
        points: ["Spring Boot APIs", "Microservices basics", "Portfolio building"],
      },
      {
        icon: "rocket",
        title: "Entrepreneurs",
        description: "Build and scale SaaS products fast",
        points: ["MVP to production", "Cloud deployment", "Secure payments & auth"],
      },
      {
        icon: "building",
        title: "IT Professionals",
        description: "Upgrade to Spring Boot & Microservices",
        points: ["JPA/Hibernate", "Docker & K8s basics", "CI/CD pipelines"],
      },
    ],
    ctas: [
      { label: "Check Your Eligibility", kind: "enroll" },
      { label: "Download Syllabus (PDF)", kind: "syllabus" },
    ],
  },

  faq: {
    intro: "Everything you need to know about our Java program—admissions, outcomes, tools, certificates, and weekly schedule.",
    items: JAVA_FAQS,
  },

  cta: {
    eyebrow: "Limited seats • Mentor-led batches • Interview preparation included",
    heading: "Become a [[Job-Ready Java Developer]]",
    intro:
      "Enroll now for mentor-led, job-ready training in Core Java, Spring Boot, Microservices, Docker, and AWS—with interview prep and portfolio projects.",
    actions: [
      { label: "Call: +91 788-83-83-788", kind: "tel", ariaLabel: "Call admissions at +91 788-83-83-788" },
      { label: "Email", kind: "mailto", ariaLabel: "Email us for course details and syllabus" },
    ],
    highlights: [
      { icon: "clock", title: "80 Hrs", description: "Hands-on" },
      { icon: "layers", title: "3+", description: "Live Projects" },
      { icon: "users", title: "Mentor", description: "Guided" },
      { icon: "briefcase", title: "Placement", description: "Assistance" },
    ],
  },
};
