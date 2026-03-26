/**
 * Seed script to populate Sanity with the 8 jobs that were previously hardcoded.
 *
 * Usage:
 *   node scripts/seed-jobs.mjs
 *
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET
 * to be set in .env.local (or the environment).
 */

import { createClient } from "@sanity/client";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env.local
dotenv.config({ path: resolve(__dirname, "..", ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
    console.error(
        "❌ Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET in .env.local"
    );
    process.exit(1);
}

const client = createClient({
    projectId,
    dataset,
    apiVersion: "2024-01-23",
    useCdn: false,
    token: process.env.SANITY_API_TOKEN, // needs write access
});

if (!process.env.SANITY_API_TOKEN) {
    console.error(
        "❌ Missing SANITY_API_TOKEN in .env.local. You need a token with write access."
    );
    console.error(
        "   Create one at: https://www.sanity.io/manage/project/" +
        projectId +
        "/api#tokens"
    );
    process.exit(1);
}

const JOBS = [
    {
        title: "Sales Executive Intern",
        slug: { _type: "slug", current: "sales-executive-intern-1" },
        team: "Sales",
        location: "Mumbai",
        type: "Internship",
        experience: "0–1 yrs",
        summary:
            "Kickstart your career in EdTech sales. Learn to drive growth, build relationships, and close deals in a fast-paced environment.",
        responsibilities: [
            "Qualify leads and schedule meetings for the sales team",
            "Assist in managing the sales pipeline and CRM",
            "Conduct market research to identify new opportunities",
            "Support the sales team in daily operations and reporting",
        ],
        requirements: [
            "Strong communication and interpersonal skills",
            "Eagerness to learn and adapt in a sales environment",
            "Basic understanding of sales processes (preferred)",
            "Good organizational and time-management skills",
        ],
        applyEmail: "careers@cinutedigital.com",
        isActive: true,
    },
    {
        title: "Data Science Trainer",
        slug: { _type: "slug", current: "data-science-trainer-1" },
        team: "Training",
        location: "Mumbai",
        type: "Full-time",
        experience: "1–3 yrs",
        summary:
            "Teach Python, ML, AI, and SQL. Develop engaging curriculum and mentor students to launch their data science careers.",
        responsibilities: [
            "Teach Python Programming, Machine Learning, AI, and SQL",
            "Develop and deliver engaging course curriculum for various levels",
            "Conduct training sessions (in-person and online)",
            "Evaluate student performance through assessments and projects",
            "Provide support and mentorship to students",
            "Stay updated with latest data science trends and technologies",
        ],
        requirements: [
            "1+ year experience as a Data Science Trainer",
            "Hands-on knowledge in Python, ML, PowerBI, and Tableau",
            "Well-versed with MySQL query writing",
            "Expertise in Data Visualization using Python and Excel",
            "BSc/MSc/B.E/M.E in CS, IT, or related fields",
        ],
        applyEmail: "careers@cinutedigital.com",
        isActive: true,
    },
    {
        title: "Java Automation Trainer",
        slug: { _type: "slug", current: "java-automation-trainer-1" },
        team: "Training",
        location: "Mumbai",
        type: "Full-time",
        experience: "1–3 yrs",
        summary:
            "Train students in Java, Selenium, TestNG, and Maven. Design curriculum and ensure effective training delivery.",
        responsibilities: [
            "Teach design and development of automation frameworks",
            "Cover Java, Selenium WebDriver, TestNG, and Maven",
            "Design and develop course curriculum",
            "Conduct training sessions and evaluate performance",
        ],
        requirements: [
            "2+ years experience in software testing with Java expertise",
            "Experience with Selenium WebDriver, TestNG, and Maven",
            "Prior experience as a Java Automation Trainer (preferred)",
            "Excellent communication and presentation skills",
            "Bachelor's or Master's degree in CS, IT, or related field",
        ],
        applyEmail: "careers@cinutedigital.com",
        isActive: true,
    },
    {
        title: "Telesales Representative",
        slug: { _type: "slug", current: "telesales-representative-1" },
        team: "Sales",
        location: "Mumbai",
        type: "Full-time",
        experience: "0–1 yrs",
        summary:
            "Handle end-to-end sales for IT certification courses. Communicate, support, and close deals with learners.",
        responsibilities: [
            "Explain IT certification courses to clients/learners",
            "Handle end-to-end sales process from lead to closure",
            "Provide customer service and support",
            "Meet and exceed sales targets",
        ],
        requirements: [
            "0.5 - 2 years experience in Telesales/Sales",
            "Excellent Communication and Customer Service skills",
            "Experience in Selling Technical Courses",
            "Strong problem-solving and negotiation skills",
            "Experience in software training industry is a plus",
        ],
        applyEmail: "careers@cinutedigital.com",
        isActive: true,
    },
    {
        title: "Digital Marketing Trainer",
        slug: { _type: "slug", current: "digital-marketing-trainer-1" },
        team: "Training",
        location: "Mumbai",
        type: "Full-time",
        experience: "1–3 yrs",
        summary:
            "Educate and mentor students in Digital Marketing. Cover SEO, SEM, Social Media, and more with practical assignments.",
        responsibilities: [
            "Conduct training on SEO, SEM, SMM, Google Ads, etc.",
            "Develop course materials and hands-on projects",
            "Assist students with live projects and certifications",
            "Evaluate performance and provide one-on-one mentoring",
        ],
        requirements: [
            "2+ years industry experience in digital marketing",
            "Proficiency in Google Ads, Analytics, FB Ads, SEMrush, Canva",
            "Strong understanding of SEO, PPC, Email Marketing, Content Strategy",
            "Excellent communication and presentation skills",
        ],
        applyEmail: "careers@cinutedigital.com",
        isActive: true,
    },
    {
        title: "Career Counsellor Intern",
        slug: { _type: "slug", current: "career-counsellor-intern-1" },
        team: "Sales",
        location: "Mumbai",
        type: "Internship",
        experience: "0–1 yrs",
        summary:
            "Training + Internship Program. Gain hands-on experience in outreach, lead engagement, and career guidance.",
        responsibilities: [
            "Undergo structured training in Sales & Marketing",
            "Engage with leads and provide career guidance",
            "Develop real-world sales and CRM skills",
            "Assist in outreach and lead generation",
        ],
        requirements: [
            "Strong desire to grow in Sales & Marketing domain",
            "Passion for IT and tech education industry",
            "Fluent verbal and written communication skills",
            "Good interpersonal and convincing skills",
            "Fluency in English (regional languages is a plus)",
        ],
        applyEmail: "careers@cinutedigital.com",
        isActive: true,
    },
    {
        title: "Sales Executive",
        slug: { _type: "slug", current: "sales-executive-1" },
        team: "Sales",
        location: "Mumbai",
        type: "Full-time",
        experience: "1–3 yrs",
        summary:
            "Drive end-to-end sales for IT certification courses. Generate leads, nurture relationships, and close deals.",
        responsibilities: [
            "Generate leads and close deals (telecalls & in-person)",
            "Maintain and update CRM (e.g., LeadSquared)",
            "Conduct webinars and online meetings to engage leads",
            "Meet monthly targets (10x business value of salary)",
        ],
        requirements: [
            "1-3 years proven experience in EdTech sales",
            "Strong negotiation and objection-handling abilities",
            "Ability to build relationships with clients/learners",
            "Bachelor's degree in Sales, Marketing, or related field",
        ],
        applyEmail: "careers@cinutedigital.com",
        isActive: true,
    },
    {
        title: "One Year Internship cum Software Testing Master Program",
        slug: {
            _type: "slug",
            current: "software-testing-internship-master-program-1",
        },
        team: "Training",
        location: "Mumbai",
        type: "Internship",
        experience: "0–1 yrs",
        summary:
            "Learn while working on industry projects with a Job Guarantee agreement. Register and start your successful IT career — our counsellor will guide you through the process. Easy EMI options available.",
        responsibilities: [
            "Learn and work on real industry projects throughout the program",
            "Master software testing concepts, tools, and best practices",
            "Complete structured training with hands-on project experience",
            "Register via the link to begin — our counsellor will guide you through the process",
        ],
        requirements: [
            "Graduation year should be 2026, 2025, or 2024",
            "Any stream (strong preference for Engineering and B.Sc students)",
            "Good communication skills",
            "Should be from Mumbai",
        ],
        applyEmail: "careers@cinutedigital.com",
        isActive: true,
    },
];

async function seed() {
    console.log(`\n🚀 Seeding ${JOBS.length} jobs into Sanity...`);
    console.log(`   Project: ${projectId} | Dataset: ${dataset}\n`);

    let created = 0;
    let skipped = 0;

    for (const job of JOBS) {
        const slug = job.slug.current;

        // Check if already exists
        const existing = await client.fetch(
            `*[_type == "job" && slug.current == $slug][0]._id`,
            { slug }
        );

        if (existing) {
            console.log(`  ⏭️  "${job.title}" already exists (${existing}), skipping`);
            skipped++;
            continue;
        }

        const doc = {
            _type: "job",
            ...job,
        };

        const result = await client.create(doc);
        console.log(`  ✅ Created "${job.title}" → ${result._id}`);
        created++;
    }

    console.log(`\n✨ Done! Created: ${created}, Skipped: ${skipped}\n`);
}

seed().catch((err) => {
    console.error("❌ Seed failed:", err.message);
    process.exit(1);
});
