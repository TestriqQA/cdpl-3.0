import type { CourseContent } from "@/types/coursePage";

/**
 * SDET course page — answer-first.
 *
 * Content for /courses/software-testing-course/sdet-course, moved from the old
 * bespoke page.tsx onto the shared course template. The SDET vs manual tester
 * table became one card per row; the syllabus layers became curriculum
 * modules. Headings, intros, the answer copy and the FAQ are kept as they were.
 *
 * The comparison stays a real <table> (why.extras): comparisons get pulled into
 * featured snippets far more readily than prose, and "SDET vs manual tester"
 * is a target keyword. Each syllabus layer links to the course that teaches it.
 *
 * WHY THIS PAGE EXISTS
 * --------------------
 * Six months of GSC data show ~1,000 impressions across sdet-qualified queries
 * — "sdet course syllabus" (224), "sdet online training in india" (179),
 * "sdet course fees" (176), "sdet automation course" (157), "java sdet course"
 * (103), "sdet course with placement" (68) — for essentially no clicks.
 *
 * RELATIONSHIP TO /automation-testing-course — READ BEFORE EDITING
 * ---------------------------------------------------------------
 * That page already carries "SDET" 63 times, in its <title> and its H1, and
 * ranks as CDPL's automation course. Two pages chasing one query is exactly the
 * cannibalisation that left 96 URLs fighting over "data science course in
 * mumbai" for zero clicks, so these two are deliberately split by INTENT:
 *
 *   this page  → definitional and career intent. What SDET means, how it
 *                differs from manual QA, what the syllabus covers, who it suits.
 *   automation → commercial course intent. Tooling depth, hands-on modules,
 *                enrolment.
 *
 * Every route into the tooling detail from here points at that page (the hero
 * button). Keep it that way: if this page starts selling the course rather than
 * explaining the role, the two will compete and both will lose.
 *
 * FEES: intentionally absent. "sdet course fees" draws 176 impressions and
 * publishing a real number would likely convert them, but no fee has been
 * confirmed yet. `price` is omitted from the Course schema rather than guessed
 * — a fabricated price is a structured-data policy breach, and the FAQ below
 * says plainly that fees come from a counsellor. Add both together once the
 * real figure is confirmed.
 *
 * LEADS: there is no SDET entry in SYLLABUS_LINKS (app/api/contact/route.ts),
 * so leads use the master programme, whose syllabus covers the same layers
 * (manual testing, API, SQL, Java/Python, Selenium). The counsellor modal
 * names that programme in its subtitle, so there is deliberately no syllabus
 * button (the old page had none either). Once an "SDET Course" key exists,
 * switch courseName to it.
 */
export const sdetCourse: CourseContent = {
  slug: "sdet-course",
  courseName: "Advanced Manual and Automation Testing Master Program",
  sourceName: "SDET Course Page",

  seo: {
    // Answer-first: the expansion is the first thing in both the tab title and
    // the snippet, because the queries driving this page are definitional.
    title: "SDET Full Form: Software Development Engineer in Test | CDPL",
    description:
      "SDET stands for Software Development Engineer in Test — a tester who writes code. See the full syllabus, how it differs from manual QA, and the career path.",
    keywords: [
      "SDET",
      "SDET full form",
      "what is SDET",
      "SDET course",
      "SDET course syllabus",
      "SDET course fees",
      "SDET training",
      "SDET online training in india",
      "java SDET course",
      "SDET vs manual tester",
      "SDET automation course",
      "software development engineer in test",
    ],
    image: "/og-images/courses-software-testing-course-automation-testing-course-og.webp",
  },

  schema: {
    name: "SDET (Software Development Engineer in Test) Training",
    description:
      "SDET stands for Software Development Engineer in Test — a tester who writes code. CDPL's SDET track covers Java or Python, Selenium, API testing with Postman and REST Assured, SQL, Git and CI.",
    // price is deliberately omitted — see the header.
    learningOutcomes: [
      "Write automated tests in Java or Python",
      "Build and maintain a UI automation framework",
      "Test REST APIs with Postman and REST Assured",
      "Verify data directly with SQL",
      "Run suites automatically in a CI pipeline",
    ],
    prerequisites: ["No prior programming experience required"],
    howTo: {
      name: "How to Enroll in CDPL SDET Training",
      description: "A step-by-step guide to starting the SDET track at CDPL.",
      steps: [
        {
          name: "Browse Courses",
          text: "Explore the software testing courses that make up the SDET track — programming, testing fundamentals, UI automation, API testing, SQL and CI.",
        },
        { name: "Review Syllabus", text: "See what each of the six SDET layers covers and how they build on one another." },
        { name: "Contact Admissions", text: "Talk to a CDPL counsellor about the current fee, the next batch date, and the right track for you." },
        { name: "Start Learning", text: "Begin with programming and testing fundamentals, then move on to automation, API testing and CI." },
      ],
    },
  },

  hero: {
    breadcrumb: "SDET Course",
    h1: "SDET Full Form: [[Software Development Engineer in Test]]",
    subtitle:
      "**SDET stands for Software Development Engineer in Test** — a tester who writes code. Instead of checking software by hand, an SDET builds the automated tests that check it, and the framework those tests run in.",
    description:
      "The role sits between testing and development: you need real programming ability in Java or Python, and the testing judgement to know what is worth automating in the first place.",
    // No counsellor button: the callback form sits right beside the hero.
    ctas: [
      { label: "See the automation course", kind: "link", href: "/courses/software-testing-course/automation-testing-course" },
      { label: "See the syllabus", kind: "scroll", href: "curriculum" },
    ],
  },

  why: {
    heading: "[[SDET]] vs manual tester",
    intro:
      "Both roles are about finding defects. The difference is whether you find them by hand or by writing a program that finds them for you.",
    cards: [],
    extras: [
      {
        kind: "table",
        columns: ["", "Manual tester", "SDET"],
        rows: [
          ["Core work", "Runs the application and reports defects", "Writes code that tests the application automatically"],
          ["Programming", "Not required", "Required — usually Java or Python"],
          ["Main tools", "Test case management, bug trackers", "Selenium, REST Assured, Postman, Git, CI pipelines"],
          ["Works with", "QA team", "Development team, often inside it"],
          ["Typical pay", "Entry level for QA", "Higher — closer to a developer's band"],
        ],
      },
    ],
    outro:
      "Moving from manual QA to SDET is a common and realistic step — the testing judgement already transfers, and what you add is the coding layer.",
  },

  curriculum: {
    heading: "What an [[SDET syllabus]] covers",
    intro:
      "Six layers, each building on the one before. CDPL teaches these as separate courses you can take together or in sequence.",
    modules: [
      {
        title: "Programming foundation",
        topics: [],
        link: { label: "Java course", href: "/courses/software-testing-course/java-course" },
        outcome:
          "Java or Python — the language you write every test in. Variables through to OOP, because frameworks are built with classes and inheritance.",
      },
      {
        title: "Testing fundamentals",
        topics: [],
        link: { label: "Manual testing course", href: "/courses/software-testing-course/manual-testing-course" },
        outcome:
          "Test design, defect reporting, and knowing what is worth automating. Automation without this only produces failures faster.",
      },
      {
        title: "UI automation",
        topics: [],
        link: { label: "Automation testing course", href: "/courses/software-testing-course/automation-testing-course" },
        outcome: "Selenium and modern alternatives — locating elements, handling waits, and structuring suites so they do not turn flaky.",
      },
      {
        title: "API testing",
        topics: [],
        link: { label: "API testing course", href: "/courses/software-testing-course/api-testing" },
        outcome:
          "Postman and REST Assured. Most defects surface at the service layer, and API tests run faster and break less often than UI ones.",
      },
      {
        title: "Databases and SQL",
        topics: [],
        link: { label: "DBMS course", href: "/courses/software-testing-course/dbms-course" },
        outcome: "Querying data to verify what the application actually stored, rather than trusting the screen.",
      },
      {
        title: "CI and version control",
        topics: [],
        link: { label: "Master programme", href: "/courses/software-testing-course/advance-manual-automation-testing" },
        outcome: "Git, and running the suite automatically on every change so failures are caught at the commit that caused them.",
      },
    ],
  },

  // Visible, and matching the FAQPage JSON-LD. Google requires the marked-up
  // answers to be present on the page.
  faq: {
    heading: "Frequently asked [[questions]]",
    items: [
      {
        question: "What is the full form of SDET?",
        answer:
          "SDET stands for Software Development Engineer in Test. It is a tester who writes code — building automated test suites and the frameworks that run them, rather than checking software by hand.",
      },
      {
        question: "What is the difference between an SDET and a manual tester?",
        answer:
          "A manual tester exercises the application directly and reports what breaks. An SDET writes programs that do that checking automatically, and maintains the framework those programs run in. The SDET role therefore requires real programming ability — typically Java or Python — alongside testing judgement, and it usually sits closer to the development team.",
      },
      {
        question: "What does an SDET course syllabus cover?",
        answer:
          "A complete SDET syllabus has four layers: a programming language (Java or Python) to write tests in; a UI automation framework such as Selenium; API testing with tools like Postman and REST Assured; and the supporting skills — database querying with SQL, version control with Git, and running suites automatically in a CI pipeline. Testing fundamentals sit underneath all of it: without knowing what to test, automation only produces failures faster.",
      },
      {
        question: "Do I need to know programming before starting an SDET course?",
        answer:
          "No. CDPL's SDET track begins with programming from the start, so beginners and manual testers moving into automation both start at the same place. What does help is comfort with logic and problem solving, since a large part of the work is writing and debugging code.",
      },
      {
        question: "How long does it take to become an SDET?",
        answer:
          "For someone starting without programming experience, the realistic path is a few months of consistent study covering the language, an automation framework, API testing and CI. Manual testers already familiar with test design usually move faster because the testing judgement is already there — it is the coding layer they are adding.",
      },
      {
        question: "What is the SDET course fee at CDPL?",
        answer:
          "Fees depend on the track and batch format you choose. Speak to a CDPL counsellor for the current fee and the next batch date — the enquiry form on this page reaches them directly.",
      },
      {
        question: "Is SDET a good career choice?",
        answer:
          "Demand for automation-capable testers has grown as teams moved to continuous delivery, where releases are too frequent to check by hand. Because the role requires programming ability, SDET positions typically sit above manual QA on the pay scale, and the skills transfer readily into development and DevOps work later.",
      },
    ],
  },

  cta: {
    heading: "Ready to [[start]]?",
    intro:
      "Talk to a CDPL counsellor about the current fee, the next batch date, and whether the full SDET track or a single course fits where you are now.",
    actions: [
      { label: "Talk to a counsellor", kind: "careerSession" },
      { label: "All software testing courses", kind: "link", href: "/courses/software-testing-course" },
    ],
  },
};
