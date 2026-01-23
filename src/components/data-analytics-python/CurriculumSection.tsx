"use client";
import { ChevronDown, BookOpen, Download, Phone } from "lucide-react";
import { useState } from "react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import CareerSessionModal from "../CareerSessionModal";

interface Module {
    id: number;
    title: string;
    duration: string;
    topics: string[];
    projects?: string[];
    color: string;
    icon: string;
}

export default function CurriculumSection() {
    const [expandedModule, setExpandedModule] = useState<number | null>(null);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const [isCareerSessionOpen, setIsCareerSessionOpen] = useState(false);

    const courseName = "Advanced Data Analytics with Python";

    const modules: Module[] = [
        {
            id: 1,
            title: "Python Fundamentals",
            duration: "2 hours",
            icon: "🐍",
            color: "from-blue-50 to-blue-100",
            topics: [
                "Overview of Python Programming",
                "Basic Syntax, Variables, and Data Types",
                "Control Structures: Conditionals and Loops",
                "Functions, Modules, and Script Execution",
            ],
        },
        {
            id: 2,
            title: "Introduction to Python Visualization & Environment Setup",
            duration: "1.5 hours",
            icon: "⚙️",
            color: "from-purple-50 to-purple-100",
            topics: [
                "Python for Visualization: An Overview",
                "Key Python Libraries for Data Visualization",
                "Installing Python and Setting Up Jupyter Notebook",
                "Environment Setup on Windows, macOS, and Linux",
            ],
        },
        {
            id: 3,
            title: "Machine Learning Basics",
            duration: "2 hours",
            icon: "🤖",
            color: "from-green-50 to-green-100",
            topics: [
                "What is Machine Learning and Why It Matters",
                "Supervised vs. Unsupervised Learning",
                "Demonstration of a Simple Classification Model (e.g., Logistic Regression)",
                "Overview of Basic Evaluation Metrics (Accuracy, ROC Curve)",
            ],
        },
        {
            id: 4,
            title: "Data Analysis with pandas",
            duration: "3.5 hours",
            icon: "📊",
            color: "from-orange-50 to-orange-100",
            topics: [
                "Overview of pandas; DataFrames & Series",
                "Importing/Exporting Data (CSV, Excel, JSON) & Saving Cleaned Data",
                "Loading & Summarizing Datasets",
                "Handling Missing & Duplicate Data",
                "Filtering, Sorting, Ranking & Renaming Columns",
                "Data Type Conversion & Pivot Tables",
                "Merging, Joining & Concatenating DataFrames",
                "Grouping, Aggregating & Multi-Indexing",
                "Descriptive Statistics & Data Distribution Analysis",
                "Correlation & Covariance",
                "End-to-End Case Study: From Data Cleaning to Visualization",
                "Creating Dashboards from the Cancer Dataset",
            ],
            projects: [
                "Analyzing Patient Survival Rates in the Cancer Dataset",
                "Visualizing Cancer Incidence and Mortality Statistics",
            ],
        },
        {
            id: 5,
            title: "Data Visualization with Matplotlib",
            duration: "3 hours",
            icon: "📈",
            color: "from-red-50 to-red-100",
            topics: [
                "Overview, Installation & Setup; Basic Plotting",
                "Titles, Axis Labels, Legends & Annotations",
                "Axis Limits & Date/Time Formatting",
                "Managing Multiple Plots & Subplots",
                "Advanced Visuals: Histograms, Box Plots, Heatmaps, 3D Plotting",
                "Text Annotation Techniques",
                "Direct DataFrame Visualizations (line, bar, pie)",
                "Interactive Plotting with Widgets (Sliders, Buttons)",
                "Creating Simple Animations",
                "Choosing the Right Plot & Simplifying Visuals",
                "Clear Labelling, Legends & Color Schemes",
                "Case Studies & Real-World Applications; End-to-End Visualization Projects",
            ],
            projects: [
                "HR Data Plotting",
                "Real-Time Data Monitoring with Animations",
            ],
        },
        {
            id: 6,
            title: "Advanced Visualization with Seaborn",
            duration: "2.5 hours",
            icon: "🎨",
            color: "from-cyan-50 to-cyan-100",
            topics: [
                "Overview, Built-in Themes & Color Palettes; Statistical Visuals Support",
                "Basic Plotting: Line, Bar, Histogram, Scatter",
                "Distribution Visuals: Hist, KDE, Rug",
                "Variable Relationships: Pair & Joint Plots",
                "Categorical Displays: Strip, Box, Violin, Swarm, Bar",
                "Themes, Plot Styles & Aesthetic Adjustments",
                "Titles, Axis Labels, Legends & Figure Size",
                "Heatmaps, Cluster Maps & Hierarchical Clustering",
                "Multi-Plot Grids: Pair & Facet",
                "Integration with pandas: Direct DataFrame Viz, Aggregations & EDA",
                "Domain-specific case applications",
            ],
            projects: [
                "Titanic Survival Analysis",
                "Financial Dataset Visualization",
            ],
        },
        {
            id: 7,
            title: "Scientific Computing & Visualization with NumPy",
            duration: "2 hours",
            icon: "🔬",
            color: "from-indigo-50 to-indigo-100",
            topics: [
                "Overview & Key Features; Installation and Setup",
                "NumPy Basics: Arithmetic & Mathematical Ops (sum, mean, etc.)",
                "Indexing, Slicing, and Subarrays",
                "Arrays vs. Python Lists; Creating 1D/2D/Multi-Dimensional Arrays",
                "Random Data Generation (np.random); Reshaping, Resizing, Broadcasting",
                "Mathematical Functions: exponents, logarithms; Linear Algebra (dot, matmul)",
                "Boolean & Fancy Indexing; Conditional Selection (np.where)",
                "Case Studies & Real-World Applications; End-to-End Visualization Projects",
            ],
            projects: [
                "Analyzing Patient Survival Rates in the Cancer Dataset",
                "Visualizing Cancer Incidence and Mortality Statistics",
            ],
        },
    ];

    return (
        <section id="curriculum" className="py-10 bg-gradient-to-b from-slate-50 to-white">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Comprehensive <span className="text-brand">Curriculum</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                        Master 7 modules covering Python fundamentals to advanced data visualization. Each module is designed with hands-on projects and real-world applications.
                    </p>
                </div>

                {/* Modules List */}
                <div className="space-y-4 mb-12">
                    {modules.map((module) => (
                        <div
                            key={module.id}
                            className={`bg-gradient-to-r ${module.color} rounded-xl border-2 border-slate-200 hover:border-orange-300 transition-all duration-300 overflow-hidden`}
                        >
                            {/* Module Header */}
                            <button
                                onClick={() =>
                                    setExpandedModule(expandedModule === module.id ? null : module.id)
                                }
                                className="w-full px-6 py-5 flex items-center justify-between hover:bg-white/30 transition-colors"
                            >
                                <div className="flex items-center gap-4 text-left">
                                    <span className="text-3xl">{module.icon}</span>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900">
                                            Module {module.id}: {module.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 mt-1">{module.duration}</p>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`w-6 h-6 text-brand transition-transform duration-300 ${expandedModule === module.id ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Module Content */}
                            {expandedModule === module.id && (
                                <div className="px-6 pb-6 border-t border-slate-200/50 bg-white/50">
                                    {/* Topics */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                            <BookOpen className="w-5 h-5 text-brand" />
                                            Topics Covered
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {module.topics.map((topic, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-slate-700">
                                                    <span className="text-brand font-bold mt-0.5">•</span>
                                                    <span>{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Projects */}
                                    {module.projects && module.projects.length > 0 && (
                                        <div>
                                            <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                                <span className="text-2xl">🚀</span>
                                                Hands-On Projects
                                            </h4>
                                            <ul className="space-y-2">
                                                {module.projects.map((project, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-3 bg-orange-50 p-3 rounded-lg border border-orange-200"
                                                    >
                                                        <span className="text-brand font-bold">→</span>
                                                        <span className="text-slate-700">{project}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Learning Outcomes */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">What You&apos;ll Master</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Data Processing", description: "Clean, transform, and prepare data for analysis" },
                            { title: "Statistical Analysis", description: "Perform exploratory data analysis and statistical modeling" },
                            { title: "Data Visualization", description: "Create compelling visualizations and interactive dashboards" },
                        ].map((outcome, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-5 border border-orange-200">
                                <h4 className="font-bold text-slate-900 mb-2">{outcome.title}</h4>
                                <p className="text-sm text-slate-600">{outcome.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => setIsSyllabusOpen(true)}
                        className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        <Download className="h-5 w-5" />
                        Download Full Syllabus
                    </button>
                    <button
                        onClick={() => setIsCareerSessionOpen(true)}
                        className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border-2 border-orange-200 bg-white px-6 py-3 text-base font-semibold text-brand shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    >
                        <Phone className="h-5 w-5" />
                        Book a Career Session
                    </button>
                </div>
            </div>

            {/* Modals */}
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Data Analytics Python Course Page - Curriculum Section - Download Syllabus"
                courseName={courseName}
            />
            <CareerSessionModal
                isOpen={isCareerSessionOpen}
                onClose={() => setIsCareerSessionOpen(false)}
                source="Data Analytics Python Course Page - Curriculum Section - Career Session"
                courseName={courseName}
            />
        </section>
    );
}
