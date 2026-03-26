"use client";
import { useState } from "react";
import { ChevronDown, BookOpen, Download, Phone } from "lucide-react";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import CareerSessionModal from "../CareerSessionModal";


export const curriculum = [
    {
        module: "Module 1: Introduction to Excel",
        topics: [
            "Getting Started with Excel - Introduction to Excel and its Interface",
            "Workbook, Worksheets, and Navigation",
            "Exploring Excel Ribbons and Basic Shortcuts",
            "Creating, Saving, and Opening Excel Files",
        ],
    },
    {
        module: "Module 2: Data Handling in Excel",
        topics: [
            "Understanding Data Types - Text, Numbers, Dates, etc.",
            "Identifying and Formatting Data Types",
            "Data Entry and Modification in Cells",
            "Using Autofit for Column and Row Adjustments",
            "Handling Duplicates and Null Values",
            "Smart Data Entry Techniques - Predictive Entry, Auto Fill, Flash Fill",
            "Enhancing Data Visibility - Freezing Panes, Text-to-Columns",
        ],
    },
    {
        module: "Module 3: Essential Excel Functions",
        topics: [
            "Understanding Formulas and Functions",
            "Arithmetic and Logical Operators",
            "Mathematical Functions - SUM, AVERAGE, MIN, MAX",
            "Statistical Functions - COUNT, COUNTA, COUNTIF, COUNTIFS",
            "Logical Functions - IF, AND, OR, NOT, Nested IF Statements",
            "Text Functions - CONCAT, TEXTJOIN, LEFT, RIGHT, MID, LEN, TRIM, SUBSTITUTE, FIND, SEARCH",
        ],
    },
    {
        module: "Module 4: Data Manipulation Techniques",
        topics: [
            "Sorting and Filtering - Basic and Custom Sorting",
            "Using Filters for Data Segmentation",
            "Conditional Formatting - Highlighting Cells, Custom Rules",
            "Data Validation - Input Restrictions, Drop-down Lists",
            "Working with Dates and Times - DATE, TODAY, NOW, DAY, MONTH, YEAR, DATEDIF",
        ],
    },
    {
        module: "Module 5: Data Visualization in Excel",
        topics: [
            "Creating Charts - Column, Bar, Line, Pie Charts",
            "Scatter Plots and Bubble Charts",
            "Combo Charts",
            "Customizing Charts - Data Labels, Legends, Titles",
            "Formatting Chart Elements",
            "Using Sparklines for Quick Visualization",
        ],
    },
    {
        module: "Module 6: Working with PivotTables and PivotCharts",
        topics: [
            "Introduction to PivotTables - Creating and Modifying",
            "Using Rows, Columns, Filters, and Values",
            "Grouping Data in PivotTables",
            "Calculated Fields and Items",
            "Filtering and Slicers",
            "Using Timelines for Date Analysis",
            "Creating and Customizing PivotCharts",
        ],
    },
    {
        module: "Module 7: Data Analysis Tools in Excel",
        topics: [
            "Descriptive Statistics - Using Data Analysis ToolPak",
            "Generating Summary Statistics - Mean, Median, Mode, Standard Deviation",
            "Linear Regression and Trendlines in Charts",
            "Creating Forecast Sheets for Predictions",
        ],
    },
    {
        module: "Module 8: Advanced Formulas and Functions",
        topics: [
            "Lookup and Reference Functions - VLOOKUP, HLOOKUP, XLOOKUP",
            "INDEX and MATCH Functions",
            "Nested Functions for Advanced Calculations",
            "Error Handling - IFERROR and IFNA",
        ],
    },
    {
        module: "Module 9: Advanced Data Handling using Power Query",
        topics: [
            "Introduction to Power Query",
            "Importing, Transforming, and Cleaning Data",
            "Power Pivot Basics",
        ],
    },
    {
        module: "Module 10: Dashboarding and Reporting",
        topics: [
            "Creating Interactive Dashboards",
            "Data Storytelling - Designing Dashboards for Effective Communication",
            "Using Data to Tell a Compelling Story and Drive Insights",
        ],
    },
    {
        module: "Module 11: Real-World Applications and Projects",
        topics: [
            "End-to-End Excel Project - Data Cleaning, Transformation, Functions, Visualizations",
            "Creating Dashboards and Reports",
            "Domain-Specific Applications - Financial, Sales, Inventory, Operations",
        ],
    },
    {
        module: "Module 12: Excel Tips, Tricks, and Best Practices",
        topics: [
            "Productivity Tips - Advanced Keyboard Shortcuts",
            "Customizing the Quick Access Toolbar",
            "Organizing Workbooks for Readability",
            "Avoiding Common Excel Errors",
        ],
    },
    {
        module: "Module 13: Hands-On Projects",
        topics: [
            "Sales Performance Analysis",
            "Financial Data Visualization",
            "Customer Insights Dashboard",
        ],
    },
];


export default function CurriculumSection() {
    const [expandedModule, setExpandedModule] = useState<number | null>(0);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const [isCareerSessionOpen, setIsCareerSessionOpen] = useState(false);

    const courseName = "Advanced Excel for Data Analytics & Visualization";

    return (
        <section id="curriculum" className="relative py-10 bg-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Comprehensive <span className="bg-gradient-to-r from-[#ff8c00] via-[#ff8c00] to-[#ff8c00] bg-clip-text text-transparent">Curriculum</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Master 13 comprehensive modules covering everything from Excel basics to advanced dashboards and real-world projects.
                    </p>
                </div>

                {/* Curriculum modules */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    {curriculum.map((module, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            {/* Module header - clickable */}
                            <button
                                onClick={() =>
                                    setExpandedModule(expandedModule === index ? null : index)
                                }
                                className="w-full px-6 py-5 flex items-center justify-between cursor-pointer bg-gradient-to-r from-slate-50 to-white hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 text-left">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            {module.module}
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            {module.topics.length} topics
                                        </p>
                                    </div>
                                </div>
                                <ChevronDown
                                    className={`w-6 h-6 text-slate-600 transition-transform duration-300 ${expandedModule === index ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {/* Module content - expandable */}
                            {expandedModule === index && (
                                <div className="px-6 py-6 bg-slate-50 border-t border-slate-200">
                                    <ul className="space-y-3">
                                        {module.topics.map((topic, topicIndex) => (
                                            <li
                                                key={topicIndex}
                                                className="flex items-start gap-3 group"
                                            >
                                                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mt-0.5 group-hover:bg-indigo-600 transition-colors">
                                                    ✓
                                                </span>
                                                <span className="text-slate-700 group-hover:text-slate-900 transition-colors">
                                                    {topic}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Learning outcomes */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left side */}
                    <div className="space-y-6 bg-gradient-to-br from-orange-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
                        <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                            <BookOpen className="w-8 h-8 text-blue-600" />
                            What You&apos;ll Learn
                        </h3>
                        <div className="space-y-4">
                            {[
                                'Master advanced Excel formulas and functions',
                                'Create professional dashboards and reports',
                                'Analyze and visualize complex datasets',
                                'Work with PivotTables and PivotCharts',
                                'Implement data validation and automation',
                                'Apply statistical analysis techniques',
                            ].map((outcome, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold mt-1">
                                        ✓
                                    </div>
                                    <p className="text-slate-700">{outcome}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">
                            Course Highlights
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                                <span className="text-slate-700">
                                    <strong>13 modules</strong> covering all Excel skills
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                                <span className="text-slate-700">
                                    <strong>20 hours</strong> of intensive training
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-cyan-600"></div>
                                <span className="text-slate-700">
                                    <strong>Real-world projects</strong> with domain knowledge
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                                <span className="text-slate-700">
                                    <strong>Expert instructors</strong> with industry experience
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-pink-600"></div>
                                <span className="text-slate-700">
                                    <strong>Hands-on practice</strong> with every concept
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                                <span className="text-slate-700">
                                    <strong>Global certification</strong> upon completion
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                    <button
                        onClick={() => setIsSyllabusOpen(true)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
                    >
                        <Download className="h-5 w-5" />
                        Download Full Syllabus
                    </button>
                    <button
                        onClick={() => setIsCareerSessionOpen(true)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-orange-200 bg-white px-6 py-3 text-base font-semibold text-brand shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-200 cursor-pointer"
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
                source="Data Analytics & Visualization Course Page - Curriculum Section - Download Syllabus"
                courseName={courseName}
            />
            <CareerSessionModal
                isOpen={isCareerSessionOpen}
                onClose={() => setIsCareerSessionOpen(false)}
                source="Data Analytics & Visualization Course Page - Curriculum Section - Career Session"
                courseName={courseName}
            />
        </section>
    );
}
