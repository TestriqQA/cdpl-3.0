import { TrendingUp, Target, Award, Briefcase } from "lucide-react";

interface CareerPhase {
    phase: string;
    title: string;
    duration: string;
    salary: string;
    skills: string[];
    roles: string[];
    icon: React.ReactNode;
    color: string;
}

export default function CareerRoadmapSection() {
    const careerPhases: CareerPhase[] = [
        {
            phase: "Phase 1",
            title: "Foundation Builder",
            duration: "0-6 Months",
            salary: "4-5 LPA",
            skills: [
                "Python Programming",
                "Data Cleaning",
                "Basic EDA",
                "SQL Basics",
            ],
            roles: [
                "Junior Data Analyst",
                "Data Associate",
                "Analytics Intern",
            ],
            icon: <Target className="w-8 h-8" />,
            color: "from-blue-50 to-blue-100",
        },
        {
            phase: "Phase 2",
            title: "Skill Accelerator",
            duration: "6-12 Months",
            salary: "5-6.5 LPA",
            skills: [
                "Advanced Pandas",
                "Data Visualization",
                "Statistical Analysis",
                "Dashboard Creation",
            ],
            roles: [
                "Data Analyst",
                "BI Analyst",
                "Analytics Specialist",
            ],
            icon: <TrendingUp className="w-8 h-8" />,
            color: "from-green-50 to-green-100",
        },
        {
            phase: "Phase 3",
            title: "Expert Practitioner",
            duration: "1-2 Years",
            salary: "6.5-9 LPA",
            skills: [
                "Machine Learning",
                "Advanced Analytics",
                "Data Engineering Basics",
                "Leadership Skills",
            ],
            roles: [
                "Senior Data Analyst",
                "Data Scientist",
                "Analytics Manager",
            ],
            icon: <Award className="w-8 h-8" />,
            color: "from-orange-50 to-orange-100",
        },
        {
            phase: "Phase 4",
            title: "Industry Leader",
            duration: "2+ Years",
            salary: "10-15+ LPA",
            skills: [
                "Advanced ML/AI",
                "Big Data Technologies",
                "Strategic Analytics",
                "Team Leadership",
            ],
            roles: [
                "Lead Data Scientist",
                "Analytics Director",
                "Chief Data Officer",
            ],
            icon: <Briefcase className="w-8 h-8" />,
            color: "from-purple-50 to-purple-100",
        },
    ];

    return (
        <section className="py-10 bg-gradient-to-b from-white to-slate-50">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Your <span className="text-orange-600">Career Roadmap</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Follow a structured path to career advancement in data analytics. From junior analyst to industry leader, we&apos;ll guide you every step of the way.
                    </p>
                </div>

                {/* Career Progression Timeline */}
                <div className="mb-16">
                    {/* Desktop Timeline */}
                    <div className="hidden lg:block">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-orange-400 to-purple-400 transform -translate-y-1/2"></div>

                            {/* Timeline Cards */}
                            <div className="grid grid-cols-4 gap-4 relative z-10">
                                {careerPhases.map((phase, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        {/* Card */}
                                        <div
                                            className={`bg-gradient-to-br ${phase.color} rounded-xl p-6 border-2 border-slate-200 w-full mb-8 hover:shadow-lg transition-shadow`}
                                        >
                                            {/* Icon */}
                                            <div className="text-orange-600 mb-3">{phase.icon}</div>

                                            {/* Phase */}
                                            <p className="text-xs font-bold text-orange-600 mb-2">
                                                {phase.phase}
                                            </p>

                                            {/* Title */}
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                                {phase.title}
                                            </h3>

                                            {/* Duration */}
                                            <p className="text-sm text-slate-600 mb-3">{phase.duration}</p>

                                            {/* Salary */}
                                            <div className="bg-white/60 rounded-lg p-2 mb-3 text-center">
                                                <p className="text-xs text-slate-600">Expected Salary</p>
                                                <p className="font-bold text-orange-600">{phase.salary}</p>
                                            </div>
                                        </div>

                                        {/* Connector Circle */}
                                        <div className="w-6 h-6 rounded-full bg-white border-4 border-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Timeline */}
                    <div className="lg:hidden space-y-6">
                        {careerPhases.map((phase, idx) => (
                            <div key={idx} className="relative pl-8">
                                {/* Timeline Line */}
                                {idx < careerPhases.length - 1 && (
                                    <div className="absolute left-2 top-12 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-slate-300"></div>
                                )}

                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-orange-500 border-4 border-white"></div>

                                {/* Card */}
                                <div
                                    className={`bg-gradient-to-br ${phase.color} rounded-xl p-6 border-2 border-slate-200 hover:shadow-lg transition-shadow`}
                                >
                                    {/* Phase */}
                                    <p className="text-xs font-bold text-orange-600 mb-2">
                                        {phase.phase}
                                    </p>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                                        {phase.title}
                                    </h3>

                                    {/* Duration & Salary */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div>
                                            <p className="text-xs text-slate-600">Duration</p>
                                            <p className="font-semibold text-slate-900">
                                                {phase.duration}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-600">Salary</p>
                                            <p className="font-semibold text-orange-600">
                                                {phase.salary}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="mb-4">
                                        <p className="text-xs font-semibold text-slate-900 mb-2">
                                            Key Skills
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {phase.skills.slice(0, 2).map((skill, sidx) => (
                                                <span
                                                    key={sidx}
                                                    className="text-xs bg-white/70 text-slate-700 px-2 py-1 rounded"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Roles */}
                                    <div>
                                        <p className="text-xs font-semibold text-slate-900 mb-2">
                                            Job Roles
                                        </p>
                                        <ul className="space-y-1">
                                            {phase.roles.map((role, ridx) => (
                                                <li key={ridx} className="text-xs text-slate-600">
                                                    • {role}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {careerPhases.map((phase, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-orange-300 transition-all"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="text-orange-600">{phase.icon}</div>
                                <div>
                                    <p className="text-xs font-bold text-orange-600">
                                        {phase.phase}
                                    </p>
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {phase.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="mb-4">
                                <p className="text-sm font-semibold text-slate-900 mb-2">
                                    Skills to Develop:
                                </p>
                                <ul className="space-y-1">
                                    {phase.skills.map((skill, sidx) => (
                                        <li key={sidx} className="text-sm text-slate-600 flex items-center gap-2">
                                            <span className="text-orange-500">→</span> {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Roles */}
                            <div>
                                <p className="text-sm font-semibold text-slate-900 mb-2">
                                    Target Roles:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {phase.roles.map((role, ridx) => (
                                        <span
                                            key={ridx}
                                            className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full"
                                        >
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Success Factors */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                        Keys to Rapid Career Growth
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                number: "1",
                                title: "Continuous Learning",
                                description: "Stay updated with latest tools, techniques, and industry trends",
                            },
                            {
                                number: "2",
                                title: "Real-World Projects",
                                description: "Build impressive portfolio with hands-on projects and case studies",
                            },
                            {
                                number: "3",
                                title: "Networking",
                                description: "Connect with industry professionals and expand your professional network",
                            },
                            {
                                number: "4",
                                title: "Specialization",
                                description: "Develop expertise in specific domains or advanced analytics areas",
                            },
                            {
                                number: "5",
                                title: "Leadership Skills",
                                description: "Develop soft skills and leadership capabilities for management roles",
                            },
                            {
                                number: "6",
                                title: "Certifications",
                                description: "Pursue advanced certifications to validate expertise and increase value",
                            },
                        ].map((factor, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold flex-shrink-0">
                                    {factor.number}
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">{factor.title}</h4>
                                    <p className="text-slate-300 text-sm">{factor.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
