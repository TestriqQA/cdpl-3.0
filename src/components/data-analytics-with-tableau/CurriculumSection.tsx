"use client";
import React, { useState } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/data-analytics-with-tableau/ui/accordion";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";
import CareerSessionModal from "../CareerSessionModal";


const curriculumModules = [
    {
        id: 1,
        title: "Introduction to BI Concepts and Tableau",
        duration: "2 hours",
        icon: "📚",
        topics: [
            "Understanding Business Intelligence",
            "Introduction to BI",
            "Overview of BI Tools",
            "Role of BI in Decision Making",
            "Understanding The Analytical Workflow in Every Business",
            "Introduction to Tableau",
            "What is Tableau?",
            "Why Tableau?",
            "Tableau Product Suite Overview",
            "Benefits and Applications",
        ],
    },
    {
        id: 2,
        title: "Setting Up Tableau",
        duration: "1.5 hours",
        icon: "⚙️",
        topics: [
            "Installation and Configuration",
            "System Requirements",
            "Installing Tableau Desktop/Public",
            "Getting Started with Tableau",
            "Tableau Interface Overview",
            "Connecting to Different Data Sources",
            "Saving and Exporting Workbooks",
        ],
    },
    {
        id: 3,
        title: "Data Integration Techniques",
        duration: "2 hours",
        icon: "🔗",
        topics: [
            "Combining Data",
            "Relationships in Tableau",
            "Joins: Types and Use Cases",
            "Unions for Merging Data",
            "Understanding Logical and Physical Layers",
            "Key Differences",
            "Use Cases for Each",
        ],
    },
    {
        id: 4,
        title: "Data Categorization and Management",
        duration: "1.5 hours",
        icon: "📂",
        topics: [
            "Data Types and Formats",
            "String, Numeric, Date, and Boolean",
            "Changing Data Types",
            "Dimensions and Measures",
            "Discrete vs Continuous Fields",
            "Configuring Data Pane",
        ],
    },
    {
        id: 5,
        title: "Creating Fundamental Charts",
        duration: "2 hours",
        icon: "📊",
        topics: [
            "Basic Visualization Techniques",
            "Bar Charts",
            "Line Charts",
            "Scatter Plots",
            "Chart Best Practices",
        ],
    },
    {
        id: 6,
        title: "Enhancing Visualizations",
        duration: "2 hours",
        icon: "🎨",
        topics: [
            "Customization with Marks Card",
            "Colors, Shapes, and Sizes",
            "Adding Labels and Tooltips",
            "Interactive Highlighting",
            "Formatting and Styling",
        ],
    },
    {
        id: 7,
        title: "Advanced Visualization Techniques",
        duration: "2.5 hours",
        icon: "✨",
        topics: [
            "Specialized Charts",
            "Treemaps and Heatmaps",
            "Gantt and Bullet Charts",
            "Geospatial Visualizations",
            "Geographic Maps and Custom Geocoding",
            "Heat Maps and Density Maps",
            "Advanced Multi-Axis Charts",
            "Dual-Axis and Combined Visualizations",
        ],
    },
    {
        id: 8,
        title: "Organizing and Filtering Data",
        duration: "2 hours",
        icon: "🔍",
        topics: [
            "Grouping and Sorting",
            "Creating Groups",
            "Manual and Field-Based Sorting",
            "Data Filtering Techniques",
            "Applying Filters to Visualizations",
            "Context and Dimension Filters",
        ],
    },
    {
        id: 9,
        title: "Advanced Data Analysis",
        duration: "3 hours",
        icon: "🔬",
        topics: [
            "Calculated Fields and Functions",
            "Creating Custom Calculations",
            "Using Logical, String, and Date Functions",
            "Table Calculations",
            "Quick Calculations (Running Totals, Percentages)",
            "Customizing Table Calculations",
            "Analytics Tools",
            "Reference Lines and Forecasting",
            "Clustering and Trend Analysis",
            "Dynamic Analysis",
            "Working with Sets",
            "Creating Custom Parameters",
        ],
    },
    {
        id: 10,
        title: "Building Dashboards and Stories",
        duration: "2.5 hours",
        icon: "📈",
        topics: [
            "Dashboard Design Fundamentals",
            "Best Practices for Layouts",
            "Using Filters and Actions for Interactivity",
            "Storytelling with Tableau",
            "Combining Dashboards into Stories",
            "Adding Captions and Narrative Elements",
        ],
    },
    {
        id: 11,
        title: "Hands-On Projects",
        duration: "2 hours",
        icon: "🎯",
        topics: [
            "Project 1: Sales Performance Analysis",
            "Project 2: Financial Data Visualization",
            "Project 3: Customer Insights Dashboard",
            "Real-world dataset analysis",
            "Portfolio building",
        ],
    },
    {
        id: 12,
        title: "Assessment and Certification",
        duration: "1 hour",
        icon: "🏆",
        topics: [
            "Final Assessment Test",
            "Practical Coverage",
            "Theoretical Coverage",
            "Certification",
            "QR Code Validation",
        ],
    },
];


export default function CurriculumSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const [isCareerSessionOpen, setIsCareerSessionOpen] = useState(false);

    const courseName = "Data Analytics & Visualization with Tableau";

    return (
        <section id="curriculum" className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Comprehensive Curriculum
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Master 12 modules covering everything from Tableau basics to advanced analytics and dashboard design
                    </p>
                    <div className="mt-6 inline-block bg-orange-100 px-6 py-3 rounded-full">
                        <span className="text-orange-700 font-semibold">
                            Total Duration: 20 Hours
                        </span>
                    </div>
                </div>

                {/* Curriculum Accordion */}
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {curriculumModules.map((module) => (
                        <AccordionItem
                            key={module.id}
                            value={`module-${module.id}`}
                            className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-all"
                        >
                            <AccordionTrigger className="px-6 py-4 hover:no-underline cursor-pointer hover:bg-orange-50 transition-colors">
                                <div className="flex items-center gap-4 w-full text-left">
                                    {/* Icon */}
                                    <div className="text-3xl flex-shrink-0">{module.icon}</div>

                                    {/* Module Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-1">
                                            <span className="inline-block bg-orange-100 text-gray-950 px-3 py-1 rounded-full text-xs font-bold">
                                                Module {module.id}
                                            </span>
                                            <span className="text-sm font-semibold text-gray-900">
                                                {module.duration}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900">
                                            {module.title}
                                        </h3>
                                    </div>

                                    {/* Topics Count */}
                                    <div className="text-right flex-shrink-0">
                                        <div className="text-sm text-gray-900">
                                            {module.topics.length} topics
                                        </div>
                                    </div>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="px-6 py-4 bg-gray-50 border-t-2 border-gray-200">
                                <div className="space-y-4">
                                    {/* Module Description */}
                                    <p className="text-gray-700 leading-relaxed">
                                        This module covers essential concepts and practical skills for{" "}
                                        {module.title.toLowerCase()}.
                                    </p>

                                    {/* Topics List */}
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-3">
                                            Topics Covered:
                                        </h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {module.topics.map((topic, topicIndex) => (
                                                <li
                                                    key={topicIndex}
                                                    className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200"
                                                >
                                                    <span className="text-gray-950 font-bold flex-shrink-0">
                                                        ✓
                                                    </span>
                                                    <span className="text-gray-700 text-sm">{topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Learning Outcomes */}
                                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                        <h4 className="font-bold text-blue-900 mb-2">
                                            What You&apos;ll Learn:
                                        </h4>
                                        <p className="text-sm text-blue-800">
                                            Gain practical expertise in {module.title.toLowerCase()} with
                                            hands-on exercises and real-world applications.
                                        </p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Learning Path Summary */}
                <div className="mt-16 bg-gradient-to-r from-orange-100 to-purple-100 rounded-2xl p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Your Learning Journey
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-4xl mb-3">📚</div>
                            <h4 className="font-bold text-gray-900 mb-2">Foundation</h4>
                            <p className="text-sm text-gray-700">
                                Modules 1-2: Learn BI concepts and Tableau setup
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-3">🔧</div>
                            <h4 className="font-bold text-gray-900 mb-2">Core Skills</h4>
                            <p className="text-sm text-gray-700">
                                Modules 3-6: Master data integration and visualization
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-3">⚡</div>
                            <h4 className="font-bold text-gray-900 mb-2">Advanced</h4>
                            <p className="text-sm text-gray-700">
                                Modules 7-10: Build dashboards and advanced analytics
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl mb-3">🎯</div>
                            <h4 className="font-bold text-gray-900 mb-2">Mastery</h4>
                            <p className="text-sm text-gray-700">
                                Modules 11-12: Real projects and certification
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                    <button
                        onClick={() => setIsSyllabusOpen(true)}
                        className="inline-flex items-center justify-center rounded-xl border-2 border-[#7c2d12] bg-white px-6 py-3 text-base font-semibold text-[#7c2d12] shadow-sm transition hover:bg-orange-50 focus:outline-none focus:ring-4 focus:ring-orange-200 cursor-pointer"
                    >
                        Download Detailed Syllabus (PDF)
                    </button>
                    <button
                        onClick={() => setIsCareerSessionOpen(true)}
                        className="inline-flex items-center justify-center rounded-xl border-2 border-purple-600 bg-white px-6 py-3 text-base font-semibold text-purple-700 shadow-sm transition hover:bg-purple-50 focus:outline-none focus:ring-4 focus:ring-purple-200 cursor-pointer"
                    >
                        Book a Career Session
                    </button>
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="inline-flex items-center justify-center rounded-xl bg-[#7c2d12] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#c2410c] focus:outline-none focus:ring-4 focus:ring-orange-200 cursor-pointer"
                    >
                        Enroll Now & Start Learning →
                    </button>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Tableau Course Page - Curriculum Section - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Tableau Course Page - Curriculum Section - Download Syllabus"
                courseName={courseName}
            />
            <CareerSessionModal
                isOpen={isCareerSessionOpen}
                onClose={() => setIsCareerSessionOpen(false)}
                source="Tableau Course Page - Curriculum Section - Career Session"
                courseName={courseName}
            />
        </section>
    );
}
