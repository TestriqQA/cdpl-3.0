"use client";
// src/components/data-analytics-bi-bigdata/CurriculumSection.tsx
import React, { useState } from 'react';
import { CurriculumModule } from './types';
import { BarChart, Database, Code, Server, Zap, Layers, Download } from 'lucide-react';
import SyllabusDownloadModal from "../SyllabusDownloadModal";

const curriculumData: CurriculumModule[] = [
  {
    id: 1,
    title: 'Module 1: Data Visualization & BI Mastery',
    description: 'Master leading tools to create compelling reports.',
    icon: 'BarChart',
    details: ['Data Analytics with Tableau', 'Data Visualization in Excel', 'Data Analytics with Power BI'],
  },
  {
    id: 2,
    title: 'Module 2: Data Foundation & SQL',
    description: 'Build a strong foundation in SQL for data analytics and databases.',
    icon: 'Database',
    details: ['Database Management System using MySQL', 'Advanced SQL Analytics Queries', 'Data Modeling Basics'],
  },
  {
    id: 3,
    title: 'Module 3: Advanced Analytics with Python',
    description: 'Leverage Python for Data Analytics.',
    icon: 'Code',
    details: ['Data Visualization in Python (Matplotlib, Seaborn)', 'Pandas for Data Manipulation', 'NumPy for Numerical Computing'],
  },
  {
    id: 4,
    title: 'Module 4: Big Data Engineering Core',
    description: 'Dive into distributed systems and BI and Big Data Engineering.',
    icon: 'Server',
    details: ['Big Data Engineering with Hadoop (HDFS, MapReduce)', 'Hadoop Ecosystem Overview', 'Data Ingestion Techniques'],
  },
  {
    id: 5,
    title: 'Module 5: Real-Time Processing with Spark',
    description: 'Master Apache Spark for high-speed Data Engineering.',
    icon: 'Zap',
    details: ['Big Data Engineering with Apache Spark & Databricks', 'PySpark Programming', 'Building ETL/ELT Pipelines'],
  },
  {
    id: 6,
    title: 'Module 6: Capstone Project & Certification',
    description: 'Apply skills to an industry-grade project for Data Engineer Certification.',
    icon: 'Layers',
    details: ['End-to-End Data Pipeline Implementation', 'Certification Exam Preparation', 'Portfolio Review'],
  },
];

const iconMap: { [key: string]: React.ElementType } = {
  BarChart: BarChart,
  Database: Database,
  Code: Code,
  Server: Server,
  Zap: Zap,
  Layers: Layers,
};

const CurriculumSection: React.FC = () => {
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
  const courseName = "Data Analytics with BI & Big Data Engineering Master Program";

  return (
    <section id="curriculum" className="bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base font-semibold tracking-wide text-[#0f766e] uppercase">
            Master Program Structure
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Curriculum: From Data Visualization to Big Data Pipelines
          </h3>
          <p className="mt-4 text-xl text-gray-500">
            Our 6-module structure ensures a progressive learning path.
          </p>
        </div>

        <div className="mt-16 flow-root">
          <ul role="list" className="-mb-8">
            {curriculumData.map((module, moduleIdx) => {
              const Icon = iconMap[module.icon];
              return (
                <li key={module.id}>
                  <div className="relative pb-8">
                    {moduleIdx !== curriculumData.length - 1 ? (
                      <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center ring-8 ring-gray-50">
                          <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h4>
                          <p className="text-gray-600 mb-4">{module.description}</p>
                          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                            {module.details.map((detail, index) => (
                              <li key={index} className="text-sm">{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsSyllabusOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300 cursor-pointer"
          >
            <Download className="h-5 w-5" />
            Download Full Syllabus
          </button>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        source="Data Engineering Course Page - Curriculum Section - Data Engineering - Download Full Syllabus"
        courseName={courseName}
      />
    </section>
  );
};

export default CurriculumSection;
