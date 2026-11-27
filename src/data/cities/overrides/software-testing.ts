// What is different on one city's Software Testing page, keyed by city slug.
// A field set here replaces the template's value for that page only; `undefined`
// removes it. `use` picks a shared version from ../variants/software-testing.ts.
// Cities with nothing different are not listed.

import type { CityOverrides } from "../types";
import { STAT_TEXT } from "@/lib/site-stats";

export const softwareTestingOverrides: CityOverrides = {
  mumbai: {
    specializations: [
      "Manual Software Testing",
      "API Testing using POSTMAN and RestAPIs",
      "Database Management System using MySQL",
      "ETL Testing Course",
      "Advanced Software Testing",
      "Advanced Automation Testing",
      "Advanced Manual & Automation Testing - Master Program",
    ],
    metadata: {
      title: "Software Testing Course in Mumbai - Fees & Placement | CDPL",
      description: "Software testing course in Mumbai with classroom batches at our Mira Road centre and live online options. Get fees, batch dates, syllabus and placement support.",
    },
    heroContent: { title: "Software Testing Course in Mumbai with Fees, Placement Support & ISTQB Prep" },
    use: { "curriculumContent.tracks": "v3" },
  },
  bengaluru: {
    metadata: {
      keywords: "software testing course bengaluru, qa testing training bengaluru, automation testing course, manual testing course, testing certification bengaluru, qa course karnataka",
    },
    courseDetails: { language: "English & Kannada" },
    heroContent: { landmarks: ["Vidhana Soudha", "Cubbon Park", "Lalbagh Botanical Garden", "Bangalore Palace"] },
    whyChooseContent: {
      testimonial: {
        text: "This course was a game-changer for me. The hands-on projects and mentor support helped me secure a QA role in a top tech firm in Bengaluru!",
        author: "Priya Nair",
        role: "QA Engineer at TechInnovate",
        rating: 5,
      },
    },
    use: { "curriculumContent.tracks": "v2" },
  },
  delhi: {
    heroContent: { landmarks: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple"] },
    whyChooseContent: {
      testimonial: {
        text: "This course transformed my career. The practical training and mentorship helped me secure a QA role in Delhi within weeks!",
        author: "Anjali Verma",
        role: "QA Engineer at Innovatech",
        rating: 5,
      },
    },
    ctaContent: {
      contactInfo: { phone: "+91 84-889-889-84", email: "contact@cinutedigital.com", address: "Delhi, India" },
    },
    use: { "metadata.keywords": "v5", "curriculumContent.tracks": "v2" },
  },
  kolkata: {
    metadata: {
      keywords: "software testing course kolkata, qa testing training kolkata, automation testing course, manual testing course, testing certification kolkata, qa course west bengal",
    },
    heroContent: { landmarks: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Kali Temple", "Indian Museum"] },
    whyChooseContent: {
      testimonial: {
        text: "This course gave me the skills and confidence to land a QA job in Kolkata. The hands-on projects were incredibly valuable!",
        author: "Suman Das",
        role: "QA Engineer at TechBit",
        rating: 5,
      },
    },
    use: { "courseDetails.language": "v6", "curriculumContent.tracks": "v2" },
  },
  chennai: {
    metadata: {
      keywords: "software testing course chennai, qa testing training chennai, automation testing course, manual testing course, testing certification chennai, qa course tamil nadu",
    },
    courseDetails: { language: "English & Tamil" },
    heroContent: { landmarks: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George", "Santhome Basilica"] },
    whyChooseContent: {
      testimonial: {
        text: "This course helped me transition into a QA role in Chennai. The real-world projects and mentor guidance were top-notch!",
        author: "Vikram Raj",
        role: "QA Engineer at TechWave",
        rating: 5,
      },
    },
    use: { "curriculumContent.tracks": "v2" },
  },
  ahmedabad: {
    heroContent: { landmarks: ["Sabarmati Ashram", "Adalaj Stepwell", "Kankaria Lake", "Sidi Saiyyed Mosque"] },
    whyChooseContent: {
      testimonial: {
        text: "This course was a turning point for me. The practical projects and mentor support helped me land a QA role in Ahmedabad!",
        author: "Ravi Patel",
        role: "QA Engineer at TechTrend",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v3", "courseDetails.language": "v4", "curriculumContent.tracks": "v2" },
  },
  pune: {
    heroContent: { landmarks: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort", "Dagdusheth Halwai Ganpati Temple"] },
    whyChooseContent: {
      testimonial: {
        text: "The hands-on projects and mentor support in this course helped me secure a QA role in Pune’s thriving IT industry!",
        author: "Sneha Deshmukh",
        role: "QA Engineer at InfoTech",
        rating: 5,
      },
    },
    use: { "courseDetails.language": "v3", "curriculumContent.tracks": "v2" },
  },
  hyderabad: {
    metadata: {
      keywords: "software testing course hyderabad, qa testing training hyderabad, automation testing course, manual testing course, testing certification hyderabad, qa course telangana",
    },
    heroContent: {
      stats: [
        {
          number: STAT_TEXT.rating,
          label: "Learner Rating",
          description: `From ${STAT_TEXT.reviews} verified reviews`,
        },
        { number: "Yes", label: "Placement Support", description: "Dedicated career assistance" },
        { number: "12", label: "Weeks Duration", description: "Intensive learning program" },
        { number: "24/7", label: "Mentor Support", description: "Dedicated mentorship available" },
      ],
      landmarks: ["Charminar", "Golconda Fort", "Hussain Sagar", "Ramoji Film City"],
    },
    whyChooseContent: {
      testimonial: {
        text: "The hands-on projects and mentor support helped me switch to a QA role in Hyderabad’s product ecosystem!",
        author: "Aarav Reddy",
        role: "QA Engineer at TechHub",
        rating: 5,
      },
    },
    use: {
      "metadata.title": "v2",
      "courseDetails.language": "v5",
      "courseOverviewContent.modules": "v2",
      "curriculumContent.tracks": "v2",
      "ctaContent.subtitle": "v3",
    },
  },
  jaipur: {
    heroContent: { landmarks: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar"] },
    whyChooseContent: {
      testimonial: {
        text: "This course gave me the skills to break into the QA industry in Jaipur. The hands-on projects were a game-changer!",
        author: "Rohit Sharma",
        role: "QA Engineer at RajTech",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v4", "curriculumContent.tracks": "v2" },
  },
  chandigarh: {
    heroContent: { landmarks: ["Rock Garden", "Sukhna Lake", "Rose Garden", "Capitol Complex"] },
    whyChooseContent: {
      testimonial: {
        text: "This course opened doors to a QA career in Chandigarh. The practical training and mentorship were exceptional!",
        author: "Simran Kaur",
        role: "QA Engineer at TechBit",
        rating: 5,
      },
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "Chandigarh, Chandigarh, India",
      },
    },
    use: { "metadata.keywords": "v5", "courseDetails.language": "v7", "curriculumContent.tracks": "v2" },
  },
  agartala: {
    metadata: {
      keywords: "software testing course agartala, qa testing training agartala, automation testing course, manual testing course, testing certification agartala, qa course tripura",
    },
    heroContent: {
      landmarks: ["Ujjayanta Palace", "Neermahal", "Tripura Sundari Temple", "Sepahijala Wildlife Sanctuary"],
    },
    whyChooseContent: {
      testimonial: {
        text: "This course transformed my career in Agartala. The hands-on projects and mentorship were key to my success!",
        author: "Aniruddha Das",
        role: "QA Engineer at TripuraTech",
        rating: 5,
      },
    },
    use: { "courseDetails.language": "v6", "curriculumContent.tracks": "v3" },
  },
  agra: {
    heroContent: { landmarks: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"] },
    whyChooseContent: {
      testimonial: {
        text: "The course in Agra gave me the skills to land a QA job. The practical projects were incredibly valuable!",
        author: "Vikram Singh",
        role: "QA Engineer at AgraTech",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v6", "curriculumContent.tracks": "v3" },
  },
  ajmer: {
    heroContent: { landmarks: ["Dargah Sharif", "Ana Sagar Lake", "Adhai Din Ka Jhonpra", "Taragarh Fort"] },
    whyChooseContent: {
      testimonial: {
        text: "The Ajmer course was a game-changer. The practical training helped me secure a QA role quickly!",
        author: "Priya Sharma",
        role: "QA Engineer at RajTech",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v4", "curriculumContent.tracks": "v3" },
  },
  allahabad: {
    heroContent: { landmarks: ["Triveni Sangam", "Allahabad Fort", "Khusro Bagh", "Anand Bhavan"] },
    whyChooseContent: {
      testimonial: {
        text: "The Allahabad course was exceptional! The hands-on projects and mentor support helped me land a QA role.",
        author: "Ankit Mishra",
        role: "QA Engineer at PrayagTech",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v6", "curriculumContent.tracks": "v3" },
  },
  amravati: {
    heroContent: {
      landmarks: ["Melghat Tiger Reserve", "Chikhaldara Wildlife Sanctuary", "Ambadevi Temple", "Wadali Talao"],
    },
    whyChooseContent: {
      testimonial: {
        text: "The Amravati course helped me transition to a QA career. The practical projects were a game-changer!",
        author: "Rahul Patil",
        role: "QA Engineer at AmraTech",
        rating: 5,
      },
    },
    use: { "courseDetails.language": "v3", "curriculumContent.tracks": "v3" },
  },
  amritsar: {
    metadata: {
      keywords: "software testing course amritsar, qa testing training amritsar, automation testing course, manual testing course, testing certification amritsar, qa course punjab",
    },
    heroContent: { landmarks: ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Durgiana Temple"] },
    whyChooseContent: {
      testimonial: {
        text: "The Amritsar course was phenomenal! The hands-on training and mentorship helped me secure a QA role.",
        author: "Gurpreet Singh",
        role: "QA Engineer at PunjabTech",
        rating: 5,
      },
    },
    use: { "courseDetails.language": "v7", "curriculumContent.tracks": "v3" },
  },
  aurangabad: {
    heroContent: { landmarks: ["Ajanta Caves", "Ellora Caves", "Bibi Ka Maqbara", "Daulatabad Fort"] },
    whyChooseContent: {
      testimonial: {
        text: "The Aurangabad course transformed my career. The practical projects and mentor guidance were key to my success.",
        author: "Sneha Deshmukh",
        role: "QA Engineer at AurangabadTech",
        rating: 5,
      },
    },
    use: { "courseDetails.language": "v3", "curriculumContent.tracks": "v3" },
  },
  bhopal: {
    heroContent: { landmarks: ["Upper Lake", "Van Vihar National Park", "Bhimbetka Caves", "Taj-ul-Masajid"] },
    whyChooseContent: {
      testimonial: {
        text: "The Bhopal course was a game-changer! The hands-on projects and mentor support helped me land a QA role quickly.",
        author: "Neha Sharma",
        role: "QA Engineer at BhopalTech",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v7", "curriculumContent.tracks": "v3" },
  },
  bhubaneswar: {
    metadata: {
      keywords: "software testing course bhubaneswar, qa testing training bhubaneswar, automation testing course, manual testing course, testing certification bhubaneswar, qa course odisha",
    },
    courseDetails: { language: "English & Odia" },
    heroContent: {
      landmarks: ["Lingaraj Temple", "Udayagiri and Khandagiri Caves", "Nandankanan Zoo", "Dhauli Shanti Stupa"],
    },
    whyChooseContent: {
      testimonial: {
        text: "The Bhubaneswar course was fantastic! The real-world projects and mentor support helped me secure a QA role.",
        author: "Priya Das",
        role: "QA Engineer at OdishaTech",
        rating: 5,
      },
    },
    use: { "curriculumContent.tracks": "v3" },
  },
  dehradun: {
    metadata: {
      keywords: "software testing course dehradun, qa testing training dehradun, automation testing course, manual testing course, testing certification dehradun, qa course uttarakhand",
    },
    heroContent: { landmarks: ["Robber's Cave", "Sahastradhara", "Tapkeshwar Temple", "Mindrolling Monastery"] },
    whyChooseContent: {
      testimonial: {
        text: "The Dehradun course gave me the skills and confidence to start my QA career. The hands-on projects were invaluable!",
        author: "Rahul Negi",
        role: "QA Engineer at DehradunTech",
        rating: 5,
      },
    },
    use: { "curriculumContent.tracks": "v3" },
  },
  indore: {
    heroContent: { landmarks: ["Rajwada Palace", "Lal Bagh Palace", "Kanch Mandir", "Sarafa Bazaar"] },
    whyChooseContent: {
      testimonial: {
        text: "The Indore course transformed my career. The practical training and mentor support were top-notch!",
        author: "Vikram Patel",
        role: "QA Engineer at IndoreTech",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v7", "curriculumContent.tracks": "v3" },
  },
  jodhpur: {
    heroContent: { landmarks: ["Mehrangarh Fort", "Umaid Bhawan Palace", "Jaswant Thada", "Mandore Gardens"] },
    whyChooseContent: {
      testimonial: {
        text: "The Jodhpur course was a turning point for me. The real-world projects and expert guidance helped me land my dream QA job!",
        author: "Arjun Singh",
        role: "QA Engineer at JodhpurTech",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v4", "curriculumContent.tracks": "v3" },
  },
  kochi: {
    heroContent: { landmarks: ["Fort Kochi", "Mattancherry Palace", "Marine Drive", "Chinese Fishing Nets"] },
    whyChooseContent: {
      testimonial: {
        text: "The Kochi course was a turning point in my career. The hands-on projects and mentor guidance helped me secure a QA role quickly!",
        author: "Anil Nair",
        role: "QA Engineer at KochiTech",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v8", "courseDetails.language": "v8", "curriculumContent.tracks": "v3" },
  },
  nagpur: {
    heroContent: { landmarks: ["Deekshabhoomi", "Ramdaspeth", "Sitabuldi Fort", "Ambazari Lake"] },
    whyChooseContent: {
      testimonial: {
        text: "The Nagpur course transformed my career. The real-world projects and mentor support were key to my success as a QA engineer!",
        author: "Rahul Deshmukh",
        role: "QA Engineer at NagpurTech",
        rating: 5,
      },
    },
    use: { "courseDetails.language": "v3", "curriculumContent.tracks": "v3" },
  },
  patna: {
    metadata: {
      keywords: "software testing course patna, qa testing training patna, automation testing course, manual testing course, testing certification patna, qa course bihar",
    },
    heroContent: { landmarks: ["Mahavir Mandir", "Gandhi Maidan", "Patna Museum", "Golghar"] },
    whyChooseContent: {
      testimonial: {
        text: "The Patna course was a game-changer. The practical projects and placement support helped me secure a QA role quickly!",
        author: "Vikash Kumar",
        role: "QA Engineer at PatnaTech",
        rating: 5,
      },
    },
    use: { "curriculumContent.tracks": "v3" },
  },
  surat: {
    heroContent: { landmarks: ["Dumas Beach", "Sarvajanik Ganesh Utsav", "Dutch Garden", "Gaurav Path"] },
    whyChooseContent: {
      testimonial: {
        text: "The Surat course was a game-changer. The hands-on projects and expert guidance helped me land a QA role in no time!",
        author: "Priya Patel",
        role: "QA Engineer at SuratTech",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v3", "courseDetails.language": "v4", "curriculumContent.tracks": "v3" },
  },
  vadodara: {
    heroContent: { landmarks: ["Laxmi Vilas Palace", "Sayaji Garden", "Baroda Museum", "Kirti Mandir"] },
    whyChooseContent: {
      testimonial: {
        text: "The Vadodara course gave me the skills and confidence to start my QA career. The practical projects were invaluable!",
        author: "Nisha Shah",
        role: "QA Engineer at VadodaraTech",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v3", "courseDetails.language": "v4", "curriculumContent.tracks": "v3" },
  },
  thiruvananthapuram: {
    heroContent: { landmarks: ["Padmanabhaswamy Temple", "Kovalam Beach", "Napier Museum", "Veli Lake"] },
    whyChooseContent: {
      testimonial: {
        text: "The Thiruvananthapuram course transformed my career. The hands-on projects and mentor support were key to my success!",
        author: "Suresh Menon",
        role: "QA Engineer at TrivandrumTech",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v8", "courseDetails.language": "v8", "curriculumContent.tracks": "v3" },
  },
  vijayawada: {
    heroContent: { landmarks: ["Kanaka Durga Temple", "Prakasam Barrage", "Bhavani Island", "Undavalli Caves"] },
    whyChooseContent: {
      testimonial: {
        text: "The Vijayawada course was a turning point for me. The practical projects and mentor support helped me secure a QA role quickly!",
        author: "Ravi Kumar",
        role: "QA Engineer at VijayawadaTech",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v9", "courseDetails.language": "v5", "curriculumContent.tracks": "v3" },
  },
  visakhapatnam: {
    heroContent: { landmarks: ["RK Beach", "Kailasagiri", "Simhachalam Temple", "Submarine Museum"] },
    whyChooseContent: {
      testimonial: {
        text: "The Visakhapatnam course gave me the skills to excel in QA. The hands-on projects and placement support were fantastic!",
        author: "Srinivas Rao",
        role: "QA Engineer at VizagTech",
        rating: 5,
      },
    },
    use: { "metadata.keywords": "v9", "courseDetails.language": "v5", "curriculumContent.tracks": "v3" },
  },
  virar: { use: { "heroContent.stats": "v2" } },
  nallasopara: { use: { "heroContent.stats": "v2" } },
  "vasai-road": { use: { "heroContent.stats": "v2" } },
  naigaon: { use: { "heroContent.stats": "v2" } },
  bhayandar: { use: { "heroContent.stats": "v2" } },
  "mira-road": {
    curriculumContent: {
      tracks: [
        {
          id: "manual-testing",
          title: "Manual Software Testing",
          weeks: [
            {
              number: "01",
              title: "Testing Fundamentals & SDLC",
              description: "Principles of testing, SDLC/STLC, test levels & types, QA vs QC.",
              deliverables: ["Glossary & notes", "mini quiz"],
            },
            {
              number: "02",
              title: "Requirements & Test Design",
              description: "SRS/BRD review, equivalence partitioning, boundary analysis, decision tables.",
              deliverables: ["15+ test cases", "review checklist"],
            },
            {
              number: "03",
              title: "Test Execution & Defect Lifecycle",
              description: "Test execution, defect reporting (JIRA), severity vs priority, RCA basics.",
              deliverables: ["Defect log", "RCA report"],
            },
            {
              number: "04",
              title: "Regression, UAT & Test Reporting",
              description: "Regression planning, UAT coordination, metrics & exit criteria.",
              deliverables: ["Test summary report", "UAT sign-off template"],
            },
          ],
        },
        {
          id: "api-postman-rest",
          title: "API Testing using POSTMAN and RestAPIs",
          weeks: [
            {
              number: "01",
              title: "HTTP & REST Basics",
              description: "HTTP verbs, status codes, headers, REST constraints, Postman setup.",
              deliverables: ["Workspace setup", "collection skeleton"],
            },
            {
              number: "02",
              title: "Postman Collections & Scripts",
              description: "Params, envs, pre-request scripts, assertions, Newman CLI runs.",
              deliverables: ["Parameterized collection", "CLI run report"],
            },
            {
              number: "03",
              title: "Auth, Chaining & Mock Servers",
              description: "Bearer/OAuth2, chaining requests, mock servers, data-driven testing.",
              deliverables: ["Auth-enabled suite", "Mock-based tests"],
            },
            {
              number: "04",
              title: "Contract & Negative Testing",
              description: "JSON schema validation, error handling, rate limits, retries.",
              deliverables: ["Schema files", "negative test pack"],
            },
          ],
        },
        {
          id: "dbms-mysql",
          title: "Database Management System using MySQL",
          weeks: [
            {
              number: "01",
              title: "SQL Foundations",
              description: "DDL, DML, DQL; SELECT, WHERE, ORDER BY, LIMIT; NULL handling.",
              deliverables: ["Practice queries set-1"],
            },
            {
              number: "02",
              title: "Joins & Aggregations",
              description: "INNER/LEFT/RIGHT joins, GROUP BY, HAVING, window functions basics.",
              deliverables: ["Join exercises", "analytics queries"],
            },
            {
              number: "03",
              title: "Constraints & Transactions",
              description: "PK/FK, indexes, ACID, transactions, isolation & locking.",
              deliverables: ["Schema with constraints", "TX scripts"],
            },
            {
              number: "04",
              title: "DB Testing",
              description: "Test data design, DB assertions from API/UI, backups & restores.",
              deliverables: ["DB test cases", "backup checklist"],
            },
          ],
        },
        {
          id: "etl-testing",
          title: "ETL Testing Course",
          weeks: [
            {
              number: "01",
              title: "ETL Concepts & Architecture",
              description: "Source-to-target mapping, staging, dimensional modeling (star/snowflake).",
              deliverables: ["STM document", "mapping sheet"],
            },
            {
              number: "02",
              title: "Data Validation Techniques",
              description: "Record counts, duplicates, constraints, referential integrity.",
              deliverables: ["Validation queries pack"],
            },
            {
              number: "03",
              title: "Transformations & SCD",
              description: "Common transforms, SCD types, incremental loads & CDC testing.",
              deliverables: ["SCD test suite"],
            },
            {
              number: "04",
              title: "Performance & Job Orchestration",
              description: "Batch windows, job dependency checks, error handling & re-runs.",
              deliverables: ["Runbook", "perf report"],
            },
          ],
        },
        {
          id: "advanced-software-testing",
          title: "Advanced Software Testing",
          weeks: [
            {
              number: "01",
              title: "Test Strategy & Risk-Based Testing",
              description: "Product risks, priority matrices, coverage heuristics.",
              deliverables: ["Risk register", "strategy doc"],
            },
            {
              number: "02",
              title: "Exploratory & Session-Based Testing",
              description: "Charters, time-boxing, debriefs, mind-maps.",
              deliverables: ["Session notes", "mind-map"],
            },
            {
              number: "03",
              title: "Non-Functional Testing Deep Dive",
              description: "Security, performance, reliability, accessibility overview for testers.",
              deliverables: ["NFR checklist"],
            },
            {
              number: "04",
              title: "Metrics, Dashboards & Storytelling",
              description: "Meaningful metrics, dashboards, stakeholder comms.",
              deliverables: ["QA dashboard", "weekly report"],
            },
          ],
        },
        {
          id: "advanced-automation",
          title: "Advanced Automation Testing",
          weeks: [
            {
              number: "01-02",
              title: "Framework Design",
              description: "POM, data-driven, modular, logging, reporting (Allure/JUnit).",
              deliverables: ["Starter framework repo"],
            },
            {
              number: "03",
              title: "Parallelism & CI/CD",
              description: "Grid/cloud runs, retries, flakiness control, CIintegration.",
              deliverables: ["CI pipeline", "parallel suite"],
            },
            {
              number: "04",
              title: "API & Component Automation",
              description: "Hybrid UI+API strategies, contract tests, test pyramids.",
              deliverables: ["Hybrid suite", "pyramid doc"],
            },
          ],
        },
        {
          id: "master-program",
          title: "Advanced Manual and Automation Testing - Master Program",
          weeks: [
            {
              number: "01-02",
              title: "Testing Fundamentals & SDLC",
              description: "Introduction to software testing, SDLC models, testing types, and QA principles.",
              deliverables: ["Understanding of SDLC", "Testing concepts mastery", "First test case creation"],
            },
            {
              number: "03-04",
              title: "Manual Testing Mastery",
              description: "Deep dive into test design, execution, and defect lifecycle with JIRA.",
              deliverables: ["50+ test cases", "Defect reports", "Testing documentation"],
            },
            {
              number: "05-06",
              title: "Automation with Selenium",
              description: "WebDriver, waits, page objects, framework design, reporting.",
              deliverables: ["Automation framework", "20+ automated scripts", "Test execution reports"],
            },
            {
              number: "07-08",
              title: "API & Database Testing",
              description: "REST testing with Postman/Newman and DB assertions with MySQL.",
              deliverables: ["API test suite", "Database test cases", "Integration testing"],
            },
            {
              number: "09-10",
              title: "Performance & Security Basics",
              description: "Load/stress testing with JMeter and OWASP top 10 awareness.",
              deliverables: ["Performance report", "Security assessment"],
            },
            {
              number: "11-12",
              title: "Capstone & Interview Prep",
              description: "End-to-end project, portfolio, mock interviews & resume workshop.",
              deliverables: ["Capstone project", "Portfolio", "Interview preparation"],
            },
          ],
        },
      ],
    },
    use: { "heroContent.stats": "v2" },
  },
  dahisar: { use: { "heroContent.stats": "v2" } },
  borivali: { use: { "heroContent.stats": "v2" } },
  kandivali: { use: { "heroContent.stats": "v2" } },
  malad: { use: { "heroContent.stats": "v2" } },
  goregaon: { use: { "heroContent.stats": "v2" } },
  "ram-mandir": { use: { "heroContent.stats": "v2" } },
  jogeshwari: { use: { "heroContent.stats": "v2" } },
  andheri: { use: { "heroContent.stats": "v2" } },
  "vile-parle": { use: { "heroContent.stats": "v2" } },
  santacruz: { use: { "heroContent.stats": "v2" } },
  "khar-road": { use: { "heroContent.stats": "v2" } },
  bandra: {
    heroContent: { landmarks: ["Bandra-Worli Sea Link", "Gateway of India", "Marine Drive", "Bombay Stock Exchange"] },
    use: { "heroContent.stats": "v2" },
  },
  mahim: { use: { "heroContent.stats": "v2" } },
  "matunga-road": { use: { "heroContent.stats": "v2" } },
  dadar: { use: { "heroContent.stats": "v2" } },
  prabhadevi: { use: { "heroContent.stats": "v2" } },
  "lower-parel": { use: { "heroContent.stats": "v2" } },
  mahalaxmi: { use: { "heroContent.stats": "v2" } },
  "mumbai-central": { use: { "heroContent.stats": "v2" } },
  "grant-road": { use: { "heroContent.stats": "v2" } },
  "charni-road": { use: { "heroContent.stats": "v2" } },
  "marine-lines": { use: { "heroContent.stats": "v2" } },
  churchgate: { use: { "heroContent.stats": "v2" } },
  csmt: {
    heroContent: { landmarks: ["Gateway of India", "Marine Drive", "Bandra-Worli Sea Link", "Bombay Stock Exchange"] },
  },
  masjid: {
    heroContent: { landmarks: ["Gateway of India", "Marine Drive", "Crawford Market", "Bombay Stock Exchange"] },
  },
  "sandhurst-road": {
    heroContent: { landmarks: ["Gateway of India", "Marine Drive", "Crawford Market", "Chhatrapati Shivaji Terminus"] },
  },
  byculla: {
    heroContent: { landmarks: ["Byculla Zoo", "Marine Drive", "Gateway of India", "Bandra-Worli Sea Link"] },
  },
  chinchpokli: { heroContent: { landmarks: ["Byculla Zoo", "Mahalaxmi Temple", "Marine Drive", "Gateway of India"] } },
  parel: {
    heroContent: { landmarks: ["Tata Memorial Hospital", "Lower Parel Skyline", "Marine Drive", "Bandra-Worli Sea Link"] },
  },
  matunga: {
    heroContent: { landmarks: ["Matunga Market", "Dadar Flower Market", "Shivaji Park", "Sion Fort"] },
    use: { "heroContent.stats": "v2" },
  },
  sion: {
    heroContent: { landmarks: ["Sion Fort", "Dharavi Market", "Bandra-Worli Sea Link", "Shivaji Park"] },
    use: { "heroContent.stats": "v2" },
  },
  kurla: {
    heroContent: { landmarks: ["Phoenix Marketcity", "Bandra Kurla Complex", "Sion Fort", "Dharavi Market"] },
    use: { "heroContent.stats": "v2" },
  },
  ghatkopar: {
    heroContent: { landmarks: ["R City Mall", "Phoenix Marketcity", "Powai Lake", "Hiranandani Gardens"] },
    use: {
      "metadata.title": "v2",
      "heroContent.stats": "v2",
      "courseOverviewContent.modules": "v2",
      "curriculumContent.tracks": "v2",
      "ctaContent.subtitle": "v3",
    },
  },
  vikhroli: {
    heroContent: { landmarks: ["Godrej & Boyce Manufacturing", "Powai Lake", "Kanheri Caves", "Vikhroli Mangroves"] },
    use: {
      "metadata.title": "v2",
      "heroContent.stats": "v2",
      "courseOverviewContent.modules": "v2",
      "curriculumContent.tracks": "v2",
      "ctaContent.subtitle": "v3",
    },
  },
  kanjurmarg: {
    heroContent: { landmarks: ["Powai Lake", "Hiranandani Business Park", "Kanheri Caves", "Vikhroli Corporate Park"] },
    use: {
      "metadata.title": "v2",
      "heroContent.stats": "v2",
      "courseOverviewContent.modules": "v2",
      "curriculumContent.tracks": "v2",
      "ctaContent.subtitle": "v3",
    },
  },
  bhandup: {
    heroContent: {
      landmarks: ["Bhandup Pumping Station", "Neptune Magnet Mall", "Sanjay Gandhi National Park", "Dreams Mall"],
    },
    use: {
      "metadata.title": "v2",
      "heroContent.stats": "v2",
      "courseOverviewContent.modules": "v2",
      "curriculumContent.tracks": "v2",
      "ctaContent.subtitle": "v3",
    },
  },
  nahur: {
    heroContent: {
      landmarks: ["Sanjay Gandhi National Park", "Tulsi Lake", "Neptune Magnet Mall", "Bhandup Industrial Area"],
    },
    use: {
      "metadata.title": "v2",
      "heroContent.stats": "v2",
      "courseOverviewContent.modules": "v2",
      "curriculumContent.tracks": "v2",
      "ctaContent.subtitle": "v3",
    },
  },
  mulund: {
    heroContent: { landmarks: ["R Mall", "Sanjay Gandhi National Park", "Yogi Hills", "Kelkar Museum"] },
    use: {
      "metadata.title": "v2",
      "heroContent.stats": "v2",
      "courseOverviewContent.modules": "v2",
      "curriculumContent.tracks": "v2",
      "ctaContent.subtitle": "v3",
    },
  },
  thane: {
    heroContent: { landmarks: ["Viviana Mall", "Upvan Lake", "Talao Pali", "Sanjay Gandhi National Park"] },
    use: {
      "metadata.title": "v2",
      "heroContent.stats": "v2",
      "courseOverviewContent.modules": "v2",
      "curriculumContent.tracks": "v2",
      "ctaContent.subtitle": "v3",
    },
  },
  kalva: {
    heroContent: { landmarks: ["Kalva Lake", "Thane Creek", "Kopar Khairane Bridge", "Vitawa Village"] },
    use: {
      "metadata.title": "v2",
      "heroContent.stats": "v2",
      "courseOverviewContent.modules": "v2",
      "curriculumContent.tracks": "v2",
      "ctaContent.subtitle": "v3",
    },
  },
  mumbra: {
    heroContent: { landmarks: ["Mumbra Hills", "Thane Creek", "Kausa Lake", "Mumbra Devi Temple"] },
    use: {
      "metadata.title": "v2",
      "heroContent.stats": "v2",
      "courseOverviewContent.modules": "v2",
      "curriculumContent.tracks": "v2",
      "ctaContent.subtitle": "v3",
    },
  },
  diva: {
    heroContent: { landmarks: ["Diva Junction", "Thane Creek", "Diva Gaon", "Mumbra Bypass"] },
    use: {
      "metadata.title": "v2",
      "heroContent.stats": "v2",
      "courseOverviewContent.modules": "v2",
      "curriculumContent.tracks": "v2",
      "ctaContent.subtitle": "v3",
    },
  },
  kalyan: {
    heroContent: { landmarks: ["Durgadi Fort", "Kalyan Junction", "Kala Talao Lake", "Metro Junction Mall"] },
    use: {
      "metadata.title": "v2",
      "heroContent.stats": "v2",
      "courseOverviewContent.modules": "v2",
      "curriculumContent.tracks": "v2",
      "ctaContent.subtitle": "v3",
    },
  },
  "wadala-road": {
    heroContent: { landmarks: ["Dadar TT Circle", "Siddhivinayak Temple", "High Street Phoenix", "Shivaji Park"] },
    use: { "heroContent.stats": "v2" },
  },
  chembur: {
    heroContent: { landmarks: ["R.K. Studio", "Chembur Market", "Diamond Garden", "K Star Mall"] },
    use: { "heroContent.stats": "v2" },
  },
  vashi: {
    heroContent: { landmarks: ["Inorbit Mall Vashi", "Vashi Creek", "Palm Beach Road", "APMC Market"] },
    use: { "heroContent.stats": "v2" },
  },
  nerul: {
    heroContent: { landmarks: ["DY Patil Stadium", "Nerul Lake", "Seawoods Grand Central Mall", "Jewel of Navi Mumbai"] },
    use: { "heroContent.stats": "v2" },
  },
  "seawoods-darave": {
    heroContent: { landmarks: ["Seawoods Grand Central Mall", "Nerul Lake", "Parsik Hill", "Palm Beach Road"] },
    use: { "heroContent.stats": "v2" },
  },
  "cbd-belapur": {
    heroContent: { landmarks: ["Belapur Fort", "Parsik Hill", "Kharghar Hills", "Mango Garden"] },
    use: { "heroContent.stats": "v2" },
  },
  panvel: {
    heroContent: { landmarks: ["Karnala Fort", "Panvel Creek", "Adai Waterfalls", "Ballaleshwar Temple"] },
    use: { "heroContent.stats": "v2" },
  },
  ajman: {
    heroContent: { landmarks: ["Ajman Museum", "Al Zorah Natural Reserve", "Ajman Beach", "City Centre Ajman"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Fatima Ahmed",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v3",
    },
  },
  "al-ain": {
    heroContent: { landmarks: ["Al Jahili Fort", "Al Ain Oasis", "Jebel Hafeet", "Al Ain Zoo"] },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "whyChooseContent.testimonial": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  "al-dhannah": {
    heroContent: { landmarks: ["Sir Bani Yas Island", "Al Dhannah Beach", "Ruwais Refinery", "Western Region"] },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "whyChooseContent.testimonial": "v3",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  "ar-rams": {
    heroContent: { landmarks: ["Al Rams Beach", "RAK Mountains", "Al Hamra Village", "Ice Land Water Park"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Omar Rashid",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  "dibba-al-fujairah": {
    heroContent: { landmarks: ["Dibba Beach", "Al Bidyah Mosque", "Fujairah Fort", "Snoopy Island"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Noor Al-Mansoori",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  "dibba-al-hisn": {
    heroContent: { landmarks: ["Dibba Al Hisn Fort", "Al Hisn Beach", "Corniche Area", "Local Markets"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Mariam Al-Zaabi",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  dhaid: {
    heroContent: { landmarks: ["Dhaid Fort", "Al Dhaid Oasis", "Agricultural Markets", "Sharjah Desert Park"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Saeed Al-Ghafri",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  fujairah: {
    heroContent: { landmarks: ["Fujairah Fort", "Al Bidyah Mosque", "Fujairah Beach", "Hajar Mountains"] },
    ctaContent: {
      contactInfo: { phone: "+971 50 123 4567", email: "contact@cinutedigital.ae", address: "Fujairah, Fujairah, UAE" },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "whyChooseContent.testimonial": "v3",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
    },
  },
  hatta: {
    heroContent: { landmarks: ["Hatta Dam", "Hatta Heritage Village", "Hatta Hill Park", "Wadi Hub"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Omar Al-Hashmi",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  kalba: {
    heroContent: { landmarks: ["Kalba Corniche Park", "Kalba Beach", "Al Hefaiyah Lake", "Mangrove Reserves"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Fatima Al-Qasimi",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  "khor-fakkan": {
    heroContent: { landmarks: ["Khor Fakkan Beach", "Shees Park", "Al Rabi Tower", "Khor Fakkan Amphitheatre"] },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "whyChooseContent.testimonial": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  madam: {
    heroContent: { landmarks: ["Madam Park", "Wadi Madam", "Local Heritage Sites", "Agricultural Areas"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Salem Al-Mansoori",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  masafi: {
    heroContent: { landmarks: ["Masafi Market", "Masafi Fort", "Wadi Ham", "Mineral Water Factory"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Hassan Al-Mazrouei",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    ctaContent: {
      benefits: [
        "Industry-recognized certificate",
        "Lifetime access to course materialsாக",
        "24/7 mentor support",
        "Job placement assistance",
        "Real-world projects",
        "Interview preparation",
      ],
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  "al-dhaid": {
    heroContent: {
      landmarks: ["Al Dhaid Fort", "Al Dhaid Wildlife Centre", "Agricultural University", "Date Palm Oasis"],
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "whyChooseContent.testimonial": "v4",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  khorfakkan: {
    heroContent: { landmarks: ["Khorfakkan Beach", "Shees Park", "Al Rabi Tower", "Waterfall"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Aisha Al-Mansoori",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  mileiha: {
    heroContent: { landmarks: ["Mleiha Archaeological Centre", "Fossil Rock", "Bronze Age Tombs", "Desert Dunes"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Omar Al-Hosani",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  "ras-al-khaimah": {
    heroContent: { landmarks: ["Al Hamra Village", "Jebel Jais", "RAK Mall", "National Museum of Ras Al Khaimah"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Khalid Al-Nuaimi",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v3",
    },
  },
  "umm-al-quwain": {
    heroContent: { landmarks: ["UAQ National Museum", "Dreamland Aqua Park", "UAQ Marine Club", "Al Sinniyah Island"] },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "curriculumContent.tracks": "v2",
      "whyChooseContent.testimonial": "v4",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v3",
    },
  },
  ghayathi: {
    heroContent: {
      landmarks: ["Ghayathi Hospital", "Ghayathi Beach", "Al Dhafra Camel Festival", "Western Region Farms"],
    },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Ahmed Al-Mansoori",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  "jebel-ali": {
    heroContent: { landmarks: ["Jebel Ali Port", "Jebel Ali Village", "Palm Jebel Ali", "Jebel Ali Free Zone"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Mariam Al-Hashmi",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  "liwa-oasis": {
    heroContent: { landmarks: ["Moreeb Dune", "Liwa Fort", "Tal Moreeb", "Qasr Al Sarab Desert Resort"] },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Saeed Al-Rumaithi",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
  "madinat-zayed": {
    heroContent: {
      landmarks: ["Madinat Zayed Public Park", "Al Dhafra Mall", "Madinat Zayed Hospital", "Western Region Markets"],
    },
    whyChooseContent: {
      testimonial: {
        text: "This course completely transformed my career. The practical approach and mentorship helped me land a job within 2 months of completion. Highly recommended!",
        author: "Noora Al-Dhaheri",
        role: "QA Engineer at TechCorp UAE",
        rating: 5,
      },
    },
    ctaContent: { title: "Ready to Start Your Your Testing Career?" },
    use: {
      "metadata.keywords": "v2",
      "courseDetails.language": "v2",
      "courseDetails.price": "v2",
      "courseDetails.discountedPrice": "v2",
      "careerPathContent.paths": "v2",
      "faqsContent.faqs": "v2",
      "ctaContent.subtitle": "v2",
      "ctaContent.contactInfo": "v2",
    },
  },
};
