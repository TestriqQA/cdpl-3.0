import { HelpCircle, BookOpen, Clock, Award, DollarSign, Briefcase, Users, CheckCircle } from 'lucide-react';

export type FAQ = {
    id: number;
    icon: any;
    q: string;
    a: string;
};

// SEO-optimized FAQ data for BI courses
export const biFaqs: FAQ[] = [
    {
        id: 1,
        icon: HelpCircle,
        q: "What is Business Intelligence and why should I learn it?",
        a: "Business Intelligence (BI) is the process of transforming raw data into actionable insights for better decision-making. Learning BI opens doors to high-paying careers as organizations increasingly rely on data-driven strategies. With average salaries of ₹6-15 LPA and 95% placement rates, BI professionals are among the most sought-after in today's job market."
    },
    {
        id: 2,
        icon: BookOpen,
        q: "Do I need coding experience to learn Business Intelligence?",
        a: "No prior coding experience is required! Our BI course starts from the basics and gradually builds your skills. You'll learn SQL for data querying, basic Python for analytics, and powerful visualization tools like Power BI and Tableau through hands-on projects. We focus on practical skills that directly apply to real-world business scenarios."
    },
    {
        id: 3,
        icon: Clock,
        q: "How long does it take to complete the BI course?",
        a: "Our comprehensive BI program takes 16 weeks (4 months) with flexible weekend and weekday batches. Fast-track options are available for 10 weeks. Each week includes 8-10 hours of live sessions, assignments, and project work. You'll gain job-ready skills and complete 6+ industry projects by the end of the program."
    },
    {
        id: 4,
        icon: Award,
        q: "What certifications will I receive after completing the course?",
        a: "Upon completion, you'll receive an industry-recognized Business Intelligence Professional Certificate. We also prepare you for Microsoft Power BI Data Analyst (PL-300) and Tableau Desktop Specialist certifications. Our course includes exam prep materials, practice tests, and guidance to help you ace these certifications and stand out to employers."
    },
    {
        id: 5,
        icon: DollarSign,
        q: "What is the average salary for BI professionals in India?",
        a: "Entry-level BI Analysts earn ₹6-12 LPA, BI Developers earn ₹8-15 LPA, and Analytics Managers can earn ₹15-25 LPA. Our graduates report an average 40% salary increase after completing the program. Top performers at companies like TCS, Infosys, Accenture, and Deloitte earn even higher, with experienced professionals reaching ₹30+ LPA."
    },
    {
        id: 6,
        icon: Briefcase,
        q: "What kind of job support do you provide after course completion?",
        a: "We offer comprehensive career support including resume building, portfolio creation, mock interviews with industry experts, and direct referrals to 500+ hiring partners. Our dedicated placement team works with you until you land your dream BI role. We've achieved 95% placement success with companies actively hiring our graduates."
    },
    {
        id: 7,
        icon: Users,
        q: "What is the batch size and learning format?",
        a: "We maintain small batch sizes of maximum 15 students to ensure personalized attention. All sessions are live and interactive with experienced instructors who have 10+ years in the BI industry. You'll get lifetime access to recorded sessions, course materials, and our alumni community for continuous learning and networking."
    },
    {
        id: 8,
        icon: CheckCircle,
        q: "What tools and technologies will I master in this course?",
        a: "You'll gain hands-on expertise in Power BI, Tableau, SQL (MySQL, PostgreSQL, SQL Server), Excel for analytics, Python (Pandas, NumPy), ETL tools (SSIS, Azure Data Factory), data warehousing concepts, and cloud platforms (Azure, AWS). All tools are industry-standard and highly demanded by employers in 2025."
    }
];
