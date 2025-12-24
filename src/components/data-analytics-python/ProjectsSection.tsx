import { Zap, Users, BarChart3, TrendingUp } from "lucide-react";

interface Project {
    title: string;
    domain: string;
    description: string;
    skills: string[];
    icon: React.ReactNode;
    bgColor: string;
    borderColor: string;
}

export default function ProjectsSection() {
    const projects: Project[] = [
        {
            title: "User Engagement Analysis for a Tech Startup App",
            domain: "Technology",
            description: "Analyze user engagement data (session duration, feature usage, retention rates) for a tech startup's mobile app. Create visualizations and dashboards to identify user behavior trends and improve app features.",
            skills: ["Data Analytics", "Pandas", "Matplotlib", "Plotly", "Domain Knowledge"],
            icon: <Zap className="w-8 h-8" />,
            bgColor: "from-blue-50 to-blue-100",
            borderColor: "border-blue-300",
        },
        {
            title: "Audience Engagement Analysis for a Digital Media Platform",
            domain: "Energy",
            description: "Analyze historical energy consumption data to forecast future demand for a utility company. Use statistical models and visualizations to support energy planning and sustainability initiatives.",
            skills: ["Data Analytics", "Pandas", "SciPy", "Seaborn", "Domain Knowledge"],
            icon: <TrendingUp className="w-8 h-8" />,
            bgColor: "from-green-50 to-green-100",
            borderColor: "border-green-300",
        },
    ];

    const domains = [
        { name: "Aviation", icon: "✈️" },
        { name: "Healthcare", icon: "🏥" },
        { name: <>Telecomm<br className="lg:hidden" />unication</>, icon: "📱" },
        { name: "BFSI", icon: "🏦" },
        { name: "Social Media", icon: "📱" },
        { name: "Automobile", icon: "🚗" },
        { name: "Sales & Marketing", icon: "📊" },
        { name: "Human Resources", icon: "👥" },
        { name: "Supply Chain", icon: "📦" },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Real-Time <span className="text-orange-600">Projects</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                        Work on industry-relevant projects across multiple domains. Gain hands-on experience with real-world datasets and practical applications.
                    </p>
                </div>

                {/* Featured Projects */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className={`bg-gradient-to-br ${project.bgColor} rounded-xl p-8 border-2 ${project.borderColor} hover:shadow-xl transition-all duration-300`}
                        >
                            {/* Icon */}
                            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-white/60 text-orange-600">
                                {project.icon}
                            </div>

                            {/* Domain Badge */}
                            <div className="mb-3">
                                <span className="text-xs font-bold text-orange-600 bg-orange-100/60 px-3 py-1 rounded-full">
                                    Domain: {project.domain}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 leading-relaxed mb-5">
                                {project.description}
                            </p>

                            {/* Skills */}
                            <div>
                                <p className="text-sm font-semibold text-slate-900 mb-2">Skills Required:</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill, sidx) => (
                                        <span
                                            key={sidx}
                                            className="text-xs bg-white/70 text-slate-700 px-3 py-1 rounded-full border border-orange-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Domain Knowledge Section */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Domain Knowledge Coverage</h3>
                    <p className="text-slate-200 mb-8 leading-relaxed">
                        Our projects span across multiple industries, ensuring you gain exposure to diverse business domains and real-world analytics challenges.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {domains.map((domain, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-orange-400 transition-colors text-center"
                            >
                                <div className="text-3xl mb-2">{domain.icon}</div>
                                <p className="text-sm font-semibold text-white">{domain.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <BarChart3 className="w-8 h-8" />,
                            title: "Portfolio Building",
                            description: "Create impressive projects for your portfolio to showcase to potential employers",
                        },
                        {
                            icon: <Users className="w-8 h-8" />,
                            title: "Real-World Experience",
                            description: "Work with actual datasets and solve problems faced by industry professionals",
                        },
                        {
                            icon: <Zap className="w-8 h-8" />,
                            title: "Skill Mastery",
                            description: "Apply theoretical knowledge to practical scenarios and master data analytics tools",
                        },
                    ].map((benefit, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200"
                        >
                            <div className="text-orange-600 mb-3">{benefit.icon}</div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h4>
                            <p className="text-slate-600 text-sm">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
