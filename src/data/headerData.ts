
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
        slug: "software-testing-course",
        description:
            "Master Agile methodologies and Scrum frameworks to enhance team collaboration and project delivery.",
        rightColumnImages: [
            { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
            { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
        courses: [
            {
                name: "Manual Software Testing",
                slug: "manual-testing-course",
                description: "Learn to facilitate Scrum teams and drive Agile projects effectively.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "API Testing using POSTMAN and RestAPIs",
                slug: "api-testing",
                description: "Master product backlog management and stakeholder collaboration.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Database Management System using MySQL",
                slug: "dbms-course",
                description: "Gain advanced Scrum knowledge to lead high-performing teams.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "ETL Testing Course",
                slug: "etl-testing",
                description: "Learn to lead Agile transformations using the SAFe framework.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Advanced Software Testing",
                slug: "advance-software-testing",
                description: "Facilitate SAFe practices for scaled Agile environments.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Advanced Automation Testing",
                slug: "automation-testing-course",
                description: "Drive product vision and delivery in SAFe settings.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Advanced Manual and Automation Testing - Master Program",
                slug: "advance-manual-automation-testing",
                description: "Blend Agile principles with PMI project management standards.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Python Programming",
                slug: "python-course",
                description: "Master containerization and orchestration technologies.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Java Programming",
                slug: "java-course",
                description: "Automate CI/CD pipelines with Jenkins.",
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
        slug: "ds-ml-courses",
        description: "Prepare for job interviews with practical skills and confidence.",
        rightColumnImages: [
            { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
            { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ],
        courses: [
            {
                name: "Machine Learning and Data Science with Python - Hero Program",
                slug: "machine-learning-course",
                description: "Build strategies to ace behavioral and technical interviews.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Deep Learning, NLP and GenerativeAI",
                slug: "generative-ai-course",
                description: "Practice real-world interview scenarios with feedback.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Advanced Data Science and Machine Learning Masterclass",
                slug: "data-science-course",
                description: "Master coding challenges and technical questions.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Comprehensive Data Science and AI - Master Program",
                slug: "ai-course",
                description: "Master coding challenges and technical questions.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Python Programming",
                slug: "python-course",
                description: "Master containerization and orchestration technologies.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Machine Learning Algorithms using python Programming",
                slug: "machine-learning-using-python",
                description: "Master containerization and orchestration technologies.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Machine Learning and Data Visualization using R Programming",
                slug: "data-visualization-in-r-programming",
                description: "Master containerization and orchestration technologies.",
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
        slug: "bi-courses",
        description: "Develop skills to manage projects efficiently and effectively.",
        rightColumnImages: [
            { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
            { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ], courses: [
            {
                name: "Advanced Data Analytics - Hero Program",
                slug: "data-analytics",
                description: "Craft a standout resume to impress recruiters.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: " Advanced Data Analytics with Python Libraries",
                slug: "data-analytics-python",
                description: "Craft a standout resume to impress recruiters.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Excel for Data Analytics & Visualization",
                slug: "data-analytics-and-visualization",
                description: "Craft a standout resume to impress recruiters.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Data Analytics & Visualization with Tableau",
                slug: "data-analytics-with-tableau",
                description: "Craft a standout resume to impress recruiters.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Data Analytics & Visualization with Power BI",
                slug: "power-bi-course",
                description: "Craft a standout resume to impress recruiters.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Data Analytics With BI And Big Data Engineering Master Program",
                slug: "masters-in-data-engineering",
                description: "Craft a standout resume to impress recruiters.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            // {
            //   name: "Big Data Engineering",
            //   slug: "data-engineering-course",
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
        slug: "artificial-intelligence-courses",
        description: "Develop skills to manage projects efficiently and effectively.",
        rightColumnImages: [
            { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
            { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ], courses: [
            {
                name: "Prompt Engineering with Generative AI",
                slug: "prompt-engineering-course",
                description: "Master coding challenges and technical questions.",
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
        slug: "digital-marketing-courses",
        description: "Develop skills to manage projects efficiently and effectively.",
        rightColumnImages: [
            { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
            { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ], courses: [
            {
                name: "AI-Driven Digital Marketing & Analytics",
                slug: "digital-marketing-course",
                description: "Earn the globally recognized PMP certification.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: " Digital Marketing and AI (For Business Owners)",
                slug: "ai-in-digital-marketing",
                description: "Earn the globally recognized PMP certification.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Digital Marketing With AI Bootcamp",
                slug: "ai-bootcamp",
                description: "Earn the globally recognized PMP certification.",
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
        description: "Unlock insights from data with advanced analytics and machine learning.",
        rightColumnImages: [
            { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
            { name: "Advanced Automation Testing", logo: "/aaa.png" },
        ], courses: [
            {
                name: "Advanced Software Testing",
                slug: "advance-software-testing",
                description: "Analyze data to drive business decisions.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Advanced Automation Testing",
                slug: "automation-testing-course",
                description: "Build predictive models with machine learning techniques.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Advanced Data Science and Machine Learning - Masterclass",
                slug: "data-science-course",
                description: "Use Python for data analysis and visualization.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
            {
                name: "Data Analysis with BI & Big Data Engineering - Master Program",
                slug: "masters-in-data-engineering",
                description: "Create interactive data visualizations with Power BI.",
                rightColumnImages: [
                    { name: "Advanced Software Testing", logo: "/cdpl-logo.png" },
                    { name: "Advanced Automation Testing", logo: "/aaa.png" },
                ],
            },
        ],
    },
];
