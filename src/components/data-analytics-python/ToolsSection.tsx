import { Code2, Database, BarChart3 } from "lucide-react";

interface Tool {
    name: string;
    category: string;
    description: string;
    icon: string;
    color: string;
}

export default function ToolsSection() {
    const tools: Tool[] = [
        {
            name: "Python",
            category: "Programming Language",
            description: "Core programming language for data analytics and scripting",
            icon: "🐍",
            color: "from-blue-50 to-blue-100",
        },
        {
            name: "Pandas",
            category: "Data Manipulation",
            description: "Powerful library for data cleaning and transformation",
            icon: "📊",
            color: "from-orange-50 to-orange-100",
        },
        {
            name: "NumPy",
            category: "Scientific Computing",
            description: "Numerical computing library for array operations",
            icon: "🔬",
            color: "from-green-50 to-green-100",
        },
        {
            name: "Matplotlib",
            category: "Data Visualization",
            description: "Comprehensive plotting and visualization library",
            icon: "📈",
            color: "from-red-50 to-red-100",
        },
        {
            name: "Seaborn",
            category: "Statistical Visualization",
            description: "Statistical data visualization built on Matplotlib",
            icon: "🎨",
            color: "from-purple-50 to-purple-100",
        },
        {
            name: "Jupyter Notebook",
            category: "Development Environment",
            description: "Interactive computing environment for coding and visualization",
            icon: "📓",
            color: "from-cyan-50 to-cyan-100",
        },
        {
            name: "Scikit-learn",
            category: "Machine Learning",
            description: "Machine learning library for modeling and prediction",
            icon: "🤖",
            color: "from-indigo-50 to-indigo-100",
        },
        {
            name: "SciPy",
            category: "Scientific Computing",
            description: "Advanced scientific and statistical computing library",
            icon: "⚗️",
            color: "from-pink-50 to-pink-100",
        },
    ];

    const categories = [
        {
            name: "Programming & Scripting",
            icon: <Code2 className="w-6 h-6" />,
            tools: ["Python"],
        },
        {
            name: "Data Processing",
            icon: <Database className="w-6 h-6" />,
            tools: ["Pandas", "NumPy", "SciPy"],
        },
        {
            name: "Visualization & Analytics",
            icon: <BarChart3 className="w-6 h-6" />,
            tools: ["Matplotlib", "Seaborn", "Plotly"],
        },
    ];

    return (
        <section className="py-10 bg-white">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Tools & <span className="text-brand">Technologies</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Master industry-standard tools and libraries used by data professionals worldwide.
                    </p>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {tools.map((tool, idx) => (
                        <div
                            key={idx}
                            className={`bg-gradient-to-br ${tool.color} rounded-xl p-6 border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group`}
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                {tool.icon}
                            </div>

                            {/* Name */}
                            <h3 className="text-lg font-bold text-slate-900 mb-1">
                                {tool.name}
                            </h3>

                            {/* Category */}
                            <p className="text-xs font-semibold text-brand mb-3">
                                {tool.category}
                            </p>

                            {/* Description */}
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {tool.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Technology Stack Overview */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8">Technology Stack Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((category, idx) => (
                            <div key={idx}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-brand">{category.icon}</div>
                                    <h4 className="text-lg font-bold">{category.name}</h4>
                                </div>
                                <ul className="space-y-2">
                                    {category.tools.map((tool, tidx) => (
                                        <li key={tidx} className="flex items-center gap-2 text-slate-200">
                                            <span className="text-brand">→</span>
                                            {tool}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Learning Path */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                        Your Learning Journey
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            {
                                step: "1",
                                title: "Python Basics",
                                description: "Master Python fundamentals and syntax",
                            },
                            {
                                step: "2",
                                title: "Data Processing",
                                description: "Learn Pandas and NumPy for data manipulation",
                            },
                            {
                                step: "3",
                                title: "Visualization",
                                description: "Create stunning visuals with Matplotlib & Seaborn",
                            },
                            {
                                step: "4",
                                title: "Advanced Analytics",
                                description: "Apply ML and statistical analysis techniques",
                            },
                        ].map((phase, idx) => (
                            <div key={idx} className="relative">
                                <div className="bg-white rounded-lg p-6 border-2 border-orange-200 text-center">
                                    <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold mx-auto mb-3">
                                        {phase.step}
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2">{phase.title}</h4>
                                    <p className="text-sm text-slate-600">{phase.description}</p>
                                </div>
                                {idx < 3 && (
                                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-brand transform -translate-y-1/2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
