import dynamic from "next/dynamic";
import JobsCareersHeroSection from "@/components/sections/JobsCareersHeroSection";
import type { Metadata } from "next";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateCollectionPageSchema, generateJobPostingSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";


// SEO METADATA - Enhanced for Careers Page
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
    title: {
        absolute: "Careers at CDPL - Join Our Team | CDPL",
    },
    description: "Explore career opportunities at Cinute Digital (CDPL) across Engineering, Data Science, Product Management, Growth, and Student Success. Work on high-impact EdTech products, ship fast, learn faster. Join our product-led team building the future of tech education.",
    keywords: [
        "CDPL careers",
        "Cinute Digital jobs",
        "EdTech jobs",
        "software engineer jobs",
        "data scientist jobs",
        "product manager jobs",
        "growth marketing jobs",
        "student success jobs",
        "tech jobs India",
        "startup jobs",
        "work at CDPL",
    ],
    url: "/jobs/careers",
    image: "/og-images/cdpl-careers-images.webp",
});



// ====== Shared Types / Data ======
export type Job = {
    id: string;
    title: string;
    team:
    | "Engineering"
    | "Data"
    | "Product"
    | "Growth"
    | "Student Success"
    | "Operations"
    | "Sales"
    | "Training";
    location: "Bengaluru" | "Pune" | "Remote (India)" | "Hybrid (Bengaluru)" | "Mumbai";
    type: "Full-time" | "Contract" | "Internship";
    experience: "0–1 yrs" | "1–3 yrs" | "3–5 yrs" | "5–8 yrs" | "8+ yrs";
    summary: string;
    responsibilities: string[];
    requirements: string[];
    applyEmail?: string;
    applyLink?: string;
};

const JOBS: Job[] = [
    {
        id: "sales-executive-intern-1",
        title: "Sales Executive Intern",
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
    },
    {
        id: "data-science-trainer-1",
        title: "Data Science Trainer",
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
    },
    {
        id: "java-automation-trainer-1",
        title: "Java Automation Trainer",
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
    },
    {
        id: "telesales-representative-1",
        title: "Telesales Representative",
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
    },
    {
        id: "digital-marketing-trainer-1",
        title: "Digital Marketing Trainer",
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
    },
    {
        id: "career-counsellor-intern-1",
        title: "Career Counsellor Intern",
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
    },
    {
        id: "sales-executive-1",
        title: "Sales Executive",
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
    },
    {
        id: "software-testing-internship-master-program-1",
        title: "One Year Internship cum Software Testing Master Program",
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
    },
];



// ====== Section Loader ======
function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500 dark:text-gray-500">{label}</p>
        </div>
    );
}

// ====== Dynamic Section Imports (typed) ======
// JobsCareersHeroSection is now static


const JobsCareersOpenRolesSection = dynamic<{ jobs: Job[] }>(
    () => import("@/components/sections/JobsCareersOpenRolesSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading roles..." /> }
);

const JobsCareersProcessSection = dynamic(
    () => import("@/components/sections/JobsCareersProcessSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading process..." /> }
);

const JobsCareersBenefitsSection = dynamic(
    () => import("@/components/sections/JobsCareersBenefitsSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading benefits..." /> }
);

const JobsCareersCultureSection = dynamic(
    () => import("@/components/sections/JobsCareersCultureSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading culture..." /> }
);

const JobsCareersFAQSection = dynamic(
    () => import("@/components/sections/JobsCareersFAQSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading FAQs..." /> }
);

const JobsCareersCTASection = dynamic(
    () => import("@/components/sections/JobsCareersCTASection"),
    { ssr: true, loading: () => <SectionLoader label="Loading CTA..." /> }
);

// ====== Page =====
export default function Page() {

    // 1. Breadcrumb Schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Jobs", url: "/jobs" },
        { name: "Careers", url: "/jobs/careers" },
    ]);

    // 2. CollectionPage Schema
    const collectionPageSchema = generateCollectionPageSchema({
        name: "Careers at CDPL - Join Our Team | CDPL",
        description: "Explore career opportunities at Cinute Digital (CDPL).",
        url: "/jobs/careers",
    });

    // 3. JobPosting Schemas
    const jobSchemas = JOBS.map((job) => generateJobPostingSchema({
        title: job.title,
        description: `${job.summary} \n\nResponsibilities:\n${job.responsibilities.join('\n')}\n\nRequirements:\n${job.requirements.join('\n')}`,
        datePosted: new Date().toISOString().split('T')[0], // Using current date as placeholder since data is static
        employmentType: job.type === "Full-time" ? "FULL_TIME" : job.type === "Internship" ? "INTERN" : job.type === "Contract" ? "CONTRACTOR" : "OTHER",
        hiringOrganization: {
            name: "Cinute Digital",
            sameAs: "https://cinutedigital.com",
            logo: "https://cinutedigital.com/logo.png"
        },
        jobLocation: {
            addressLocality: job.location,
            addressCountry: "IN",
        },
        url: `/jobs/careers#${job.id}`,
    }));

    return (
        <>
            {/* Structured Data */}
            <JsonLd id="careers-breadcrumb" schema={breadcrumbSchema} />
            <JsonLd id="careers-collection" schema={collectionPageSchema} />
            {jobSchemas.map((schema, index) => (
                <JsonLd key={index} id={`job-posting-${index}`} schema={schema} />
            ))}

            <main className="w-full bg-white text-neutral-900 dark:bg-white dark:text-neutral-900">
                {/* Sections now manage their own inner container (max-w-7xl px-4 py-12 sm:px-6 lg:px-8) */}
                <JobsCareersHeroSection />
                <JobsCareersOpenRolesSection jobs={JOBS} />
                <JobsCareersProcessSection />
                <JobsCareersBenefitsSection />
                <JobsCareersCultureSection />
                <JobsCareersFAQSection />
                <JobsCareersCTASection />
            </main>
        </>
    );
}
