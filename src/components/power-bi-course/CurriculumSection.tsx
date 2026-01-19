"use client";
// components/powerbi/CurriculumSection.tsx
import React, { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import SyllabusDownloadModal from "../SyllabusDownloadModal";

type ColorVariant =
  | 'blue' | 'orange' | 'green' | 'purple' | 'pink'
  | 'indigo' | 'teal' | 'amber' | 'rose' | 'cyan';

interface Module {
  title: string;
  emoji: string;
  color: ColorVariant;
  topics: string[];
}

const colorClasses: Record<ColorVariant, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
  orange: { bg: 'bg-orange-100', text: 'text-[#c2410c]' },
  green: { bg: 'bg-green-100', text: 'text-green-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
  pink: { bg: 'bg-pink-100', text: 'text-pink-600' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
  teal: { bg: 'bg-teal-100', text: 'text-teal-600' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-600' },
  rose: { bg: 'bg-rose-100', text: 'text-rose-600' },
  cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600' },
};

const modules: Module[] = [
  {
    title: 'Module 1: Introduction to BI Concepts and Power BI',
    emoji: '📊',
    color: 'blue',
    topics: [
      'Understanding Business Intelligence (BI) and its Lifecycle',
      'Overview of BI Tools and Concepts in Decision Making',
      'What is Power BI? Benefits and Applications',
      'Power BI Desktop vs. Service vs. Mobile',
    ],
  },
  {
    title: 'Module 2: Setting Up Power BI & Data Connection',
    emoji: '🔌',
    color: 'orange',
    topics: [
      'Installation and System Requirements for Power BI Desktop',
      'Power BI Interface Overview and Workbook Management',
      'Connecting to diverse data sources (CSV, Excel, Folder, XML, Database)',
      'Difference between Loading Data and Transforming Data',
    ],
  },
  {
    title: 'Module 3: Data Transformation using Power Query Editor',
    emoji: '🧹',
    color: 'green',
    topics: [
      'Introduction to Power Query Editor and Ribbon Exploration',
      'Cleaning and Shaping Data: Handling Missing and Duplicate Data',
      'Split, Merge, Extract, and Replace Values Tools',
      'Pivoting and Unpivoting Data in Power Query',
      'Merging and Appending Queries',
      'Text, Number, Date, and Time Transformation tools, Conditional Columns',
    ],
  },
  {
    title: 'Module 4: Data Modeling in Power BI',
    emoji: '🧩',
    color: 'purple',
    topics: [
      'Building Data Models: Understanding Tables and Relationships',
      'Facts and Dimension Tables',
      'Star Schema Vs. Snowflake Schema',
      'Cardinality and Cross-Filter Directions',
    ],
  },
  {
    title: 'Module 5: Data Visualization Basics',
    emoji: '📈',
    color: 'pink',
    topics: [
      'Creating Basic Visualizations: Bar, Line, Pie Charts',
      'Tables, Matrix, and Cards',
      'Slicers and Filters for Interactivity',
      'Map Visualizations (Basic and Filled Maps)',
      'Customization: Formatting Visuals and Conditional Formatting',
      'Sorting and Filtering Data in Visuals',
    ],
  },
  {
    title: 'Module 6: DAX (Data Analysis Expressions)',
    emoji: '🧮',
    color: 'indigo',
    topics: [
      'Introduction to DAX and Syntax',
      'Types of Operators and Functions',
      'Creating New Columns and New Measures',
      'Using Explicit Measures to Create New Measures',
    ],
  },
  {
    title: 'Module 7: Advanced Visualization Techniques',
    emoji: '🎛️',
    color: 'teal',
    topics: [
      'Advanced Visuals: Tree Maps, Waterfall, Funnel Charts',
      'Gauge Charts and KPI Indicators',
      'Ribbon Charts and Scatter Plots',
      'Forecasting and Advanced Analytics Features',
      'Advanced Interactivity: Drill-Down and Drill-Through Features',
      'Using Tooltips for Additional Insights, Filters, and Slicers',
    ],
  },
  {
    title: 'Module 8: Dashboards and Reports',
    emoji: '🗂️',
    color: 'amber',
    topics: [
      'Designing Interactive Dashboards: Best Practices for Layout and Design',
      'Using Visual Interactivity to Enhance Storytelling',
      'Adding Page Navigator and Bookmarks',
      'Publishing Reports to Power BI Service',
      'Sharing Dashboards with Teams and Organizations',
    ],
  },
  {
    title: 'Module 9: Case Studies and Real-World Applications',
    emoji: '📂',
    color: 'rose',
    topics: [
      'End-to-End Project: Data Extraction, Transformation, and Modeling',
      'Visualization and Dashboard Creation',
      'Publishing and Sharing Insights',
    ],
  },
  {
    title: 'Module 10: Hands-On Projects',
    emoji: '🏆',
    color: 'cyan',
    topics: [
      'Project 1: Sales Performance Analysis Dashboard',
      'Project 2: Financial Data Visualization Report',
      'Project 3: Customer Insights Dashboard',
    ],
  },
];

const CurriculumSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Data Analytics & Visualization with Power BI";

  const toggleModule = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-semibold tracking-wider text-blue-600 uppercase">
            Comprehensive Learning Path
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            10 Modules to Master Power BI from Zero to Expert
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Our meticulously designed curriculum covers every aspect of Power BI, focusing on practical application and industry best practices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module, index) => {
            const color = colorClasses[module.color];
            return (
              <div key={index} className="rounded-xl border border-gray-200 shadow-md overflow-hidden">
                <button
                  className="flex justify-between items-center w-full p-5 cursor-pointer text-left bg-gray-50 hover:bg-gray-100 transition duration-150"
                  onClick={() => toggleModule(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`module-panel-${index}`}
                >
                  <div className="flex items-center">
                    <div className={`mr-4 inline-flex items-center justify-center h-10 w-10 rounded-full ${color.bg} ${color.text} text-xl`}>
                      <span aria-hidden="true">{module.emoji}</span>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">
                      {module.title}
                    </span>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`text-gray-700 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>

                {activeIndex === index && (
                  <div id={`module-panel-${index}`} className="p-5 bg-white border-t border-gray-200">
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-base">
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="w-full sm:w-auto flex sm:inline-flex min-h-[60px] items-center justify-center gap-2 rounded-xl bg-[#c2410c] px-6 py-5 my-4 text-base font-semibold text-white shadow-none transition-all hover:bg-[#9a3412] focus:outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
          >
            <Download className="h-5 w-5" />
            Download Full Syllabus
          </button>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Power BI Course Page - Curriculum Section - Power BI - Download Syllabus"
        courseName={courseName}
      />
    </section>
  );
};

export default CurriculumSection;
