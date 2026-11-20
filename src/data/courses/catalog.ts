
export type LogoItem = { name: string; logo: string };
export type Course = {
    name: string;
    description: string;
    slug?: string;
    rightColumnImages?: LogoItem[];
};
export type Category = {
    id: string;
    name: string;
    description: string;
    slug?: string;
    rightColumnImages?: LogoItem[];
    courses: Course[];
};

export const courseCategories: Category[] = [
    {
        id: "software-testing-courses",
        name: "Software Testing Courses",
        slug: "courses/software-testing-course",
        description:
            "Master Manual QA, Automation Testing, Selenium, API testing, ETL & ISTQB Foundation prep for industry-ready QA careers.",
        rightColumnImages: [
            { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
            { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
        courses: [
            {
                name: "Manual Software Testing",
                slug: "courses/software-testing-course/manual-testing-course",
                description: "Master functional QA, test case design, defect lifecycle, Jira workflows & ISTQB Foundation prep in 12 weeks.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "API Testing using POSTMAN and RestAPIs",
                slug: "courses/software-testing-course/api-testing",
                description: "Master REST API testing with Postman — request chaining, validation, automation & CI/CD integration.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Database Management System using MySQL",
                slug: "courses/software-testing-course/dbms-course",
                description: "Master SQL queries, joins, indexes, stored procedures & MySQL database design for QA and analytics.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "ETL Testing Course",
                slug: "courses/software-testing-course/etl-testing",
                description: "Master ETL Testing — data warehouse validation, SQL transformations & data quality checks for BI pipelines.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Advanced Software Testing",
                slug: "courses/software-testing-course/advance-software-testing",
                description: "Master full-stack QA — manual, automation, API, performance & security testing with CI/CD integration.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Advanced Automation Testing",
                slug: "courses/software-testing-course/automation-testing-course",
                description: "Master Selenium WebDriver, TestNG, Java/Python automation, Jenkins CI/CD & advanced test frameworks.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Advanced Manual and Automation Testing - Master Program",
                slug: "courses/software-testing-course/advance-manual-automation-testing",
                description: "Comprehensive QA master program — manual fundamentals, Selenium automation, ISTQB prep & real-world projects.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Python Programming",
                slug: "courses/software-testing-course/python-course",
                description: "Job-ready Python — data structures, OOP, pandas, NumPy, automation scripting & test automation foundations.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Java Programming",
                slug: "courses/software-testing-course/java-course",
                description: "Job-ready Java — OOP, collections, exception handling, JUnit & Selenium automation foundations.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
        ],
    },
    {
        id: "data-science",
        name: "Data Science",
        slug: "courses/ds-ml-courses",
        description: "Master Python, machine learning, deep learning, NLP & generative AI with hands-on projects and real datasets.",
        rightColumnImages: [
            { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
            { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
        courses: [
            {
                name: "Machine Learning and Data Science with Python - Hero Program",
                slug: "courses/ds-ml-courses/machine-learning-course",
                description: "Master Python, statistics, supervised & unsupervised ML, regression, classification & real-world data projects.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Deep Learning, NLP and GenerativeAI",
                slug: "courses/ds-ml-courses/generative-ai-course",
                description: "Master neural networks, NLP, transformers, LLMs, RAG & generative-AI workflows with hands-on projects.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Advanced Data Science and Machine Learning Masterclass",
                slug: "courses/ds-ml-courses/data-science-course",
                description: "Advanced data science masterclass — Python, EDA, ML algorithms, model deployment & end-to-end ML pipelines.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Comprehensive Data Science and AI - Master Program",
                slug: "courses/ds-ml-courses/ai-course",
                description: "Master program — Python, statistics, ML, deep learning, NLP, generative AI & cloud-deployed projects.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Python Programming",
                slug: "courses/software-testing-course/python-course",
                description: "Job-ready Python — data structures, OOP, pandas, NumPy, automation scripting & test automation foundations.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Machine Learning Algorithms using python Programming",
                slug: "courses/ds-ml-courses/machine-learning-using-python",
                description: "Master supervised, unsupervised & ensemble ML algorithms using scikit-learn, pandas & real datasets.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Machine Learning and Data Visualization using R Programming",
                slug: "courses/ds-ml-courses/data-visualization-in-r-programming",
                description: "Master R programming, ggplot2 visualization, statistical modeling & ML algorithms in R.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
        ],
    },
    {
        id: "business-intelligence",
        name: "Business Intelligence (BI)",
        slug: "courses/bi-courses",
        description: "Master Power BI, Tableau, advanced Excel, SQL & data engineering for business analytics careers.",
        rightColumnImages: [
            { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
            { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ], courses: [
            {
                name: "Advanced Data Analytics - Hero Program",
                slug: "courses/bi-courses/data-analytics",
                description: "Job-ready data analytics — multi-tool bootcamp covering Excel, SQL, Python, Power BI & business storytelling.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: " Advanced Data Analytics with Python Libraries",
                slug: "courses/bi-courses/data-analytics-python",
                description: "Master Python for data analytics — pandas, NumPy, matplotlib, seaborn & end-to-end analytics pipelines.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Excel for Data Analytics & Visualization",
                slug: "courses/bi-courses/data-analytics-and-visualization",
                description: "Master advanced Excel — Power Query, pivots, DAX, dashboards & data visualization for business analytics.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Data Analytics & Visualization with Tableau",
                slug: "courses/bi-courses/data-analytics-with-tableau",
                description: "Master Tableau — data connections, calculated fields, dashboards, stories & visual analytics best practices.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Data Analytics & Visualization with Power BI",
                slug: "courses/bi-courses/power-bi-course",
                description: "Master Power BI — Power Query, DAX, data modeling, interactive dashboards & reports for business intelligence.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Data Analytics With BI And Big Data Engineering Master Program",
                slug: "courses/bi-courses/masters-in-data-engineering",
                description: "Master program — BI tools, Power BI, Tableau, SQL, Python, big data & data engineering for senior analytics roles.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            // {
            //   name: "Big Data Engineering",
            //   slug: "courses/bi-courses/data-engineering-course",
            //   description: "Master coding challenges and technical questions.",
            //   rightColumnImages: [
            //     { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
            //     { name: "Advanced Automation Testing", logo: "/aaa.png" },
            //   ],
            // },

        ],
    },
    {
        id: "artificial-intelligence",
        name: "Artificial Intelligence (AI)",
        slug: "courses/artificial-intelligence-courses",
        description: "Master prompt engineering, generative AI & LLM workflows for AI-driven product and content roles.",
        rightColumnImages: [
            { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
            { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ], courses: [
            {
                name: "Prompt Engineering with Generative AI",
                slug: "courses/artificial-intelligence-courses/prompt-engineering-course",
                description: "Master prompt engineering, LLM workflows, RAG, AI agents & generative-AI applications for product builders.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
        ],
    },
    {
        id: "digital-marketing",
        name: "Digital Marketing",
        slug: "courses/digital-marketing-courses",
        description: "Master SEO, SEM, social media, content strategy, analytics & AI marketing tools for performance-driven careers.",
        rightColumnImages: [
            { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
            { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ], courses: [
            {
                name: "AI-Driven Digital Marketing & Analytics",
                slug: "courses/digital-marketing-courses/digital-marketing-course",
                description: "Master SEO, SEM, social media, content strategy, analytics & AI tools for performance-driven careers.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: " Digital Marketing and AI (For Business Owners)",
                slug: "courses/digital-marketing-courses/ai-in-digital-marketing",
                description: "Digital marketing & AI for entrepreneurs — leads, content, ad optimization & growth playbooks using AI tools.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Digital Marketing With AI Bootcamp",
                slug: "courses/digital-marketing-courses/ai-bootcamp",
                description: "30-hour AI marketing bootcamp — ChatGPT for content, AI ad optimization, automation & analytics workflows.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
        ],
    },
    {
        id: "aaa-accredited",
        name: "AAA Accredited Courses",
        description: "AAA-accredited certification tracks — internationally recognized credentials across Testing, Data Science & BI.",
        rightColumnImages: [
            { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
            { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ], courses: [
            {
                name: "Advanced Software Testing",
                slug: "courses/software-testing-course/advance-software-testing",
                description: "Master full-stack QA — manual, automation, API, performance & security testing with CI/CD integration.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Advanced Automation Testing",
                slug: "courses/software-testing-course/automation-testing-course",
                description: "Master Selenium WebDriver, TestNG, Java/Python automation, Jenkins CI/CD & advanced test frameworks.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Advanced Data Science and Machine Learning - Masterclass",
                slug: "courses/ds-ml-courses/data-science-course",
                description: "Advanced data science masterclass — Python, EDA, ML algorithms, model deployment & end-to-end ML pipelines.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Data Analysis with BI & Big Data Engineering - Master Program",
                slug: "courses/bi-courses/masters-in-data-engineering",
                description: "Master program — BI tools, Power BI, Tableau, SQL, Python, big data & data engineering for senior analytics roles.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
        ],
    },
];
