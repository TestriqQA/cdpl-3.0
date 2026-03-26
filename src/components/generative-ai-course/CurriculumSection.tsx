"use client";
import { ChevronDown, BookOpen } from "lucide-react";
import { useState } from "react";

import EnrollModal from "@/components/EnrollModal";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";

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
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  const subtitle =
    "A 110+ hour, industry-aligned path across SQL/MySQL, Excel, Power BI, Tableau, and Python libraries—culminating in real projects and job-ready skills.";
  const keywords =
    "advanced data analytics curriculum, MySQL SQL joins window functions, Excel Power Query dashboards, Power BI DAX modeling, Tableau stories analytics, pandas matplotlib seaborn NumPy, data analyst projects";

  const modules: Module[] = [
    {
      id: 1,
      title: "DBMS using MySQL",
      duration: "",
      icon: "🗄️",
      color: "from-orange-50 to-orange-100",
      topics: [
        "Intro to DBMS & MySQL",
        "schema design (ER → relational, normalization)",
        "SQL essentials (SELECT/WHERE, GROUP BY/HAVING, ORDER/LIMIT)",
        "joins (INNER/LEFT/SELF/CROSS, USING/NATURAL)",
        "subqueries & UNION",
        "window functions (ROW_NUMBER/RANK/DENSE_RANK with OVER)",
        "DML/DDL/TCL/DCL",
        "admin (users/privileges)",
        "backup & recovery",
        "EXPLAIN & indexing",
        "views",
        "stored procedures",
        "UDFs/triggers",
        "CTEs/temp tables",
      ],
      projects: [
        "Real-world capstone DB design",
      ],
    },
    {
      id: 2,
      title: "Advance Excel for Analytics & Visualization",
      duration: "",
      icon: "📑",
      color: "from-emerald-50 to-emerald-100",
      topics: [
        "Data handling (types, smart entry, duplicates/nulls)",
        "core formulas (SUM/AVERAGE/COUNTIF(S), TEXT, DATE/TIME)",
        "logicals (IF/AND/OR, nested IF)",
        "sorting/filtering & conditional formatting",
        "charts (bar/line/pie/scatter/bubble/combo)",
        "PivotTables & PivotCharts (groups, slicers, timelines)",
        "Data Analysis ToolPak (descriptive stats)",
        "advanced lookups (VLOOKUP/HLOOKUP/XLOOKUP, INDEX/MATCH)",
        "forecasting & trendlines",
        "Power Query (import/transform/clean)",
        "interactive dashboards & reporting",
      ],
      projects: [
        "Domain projects",
      ],
    },
    {
      id: 3,
      title: "Data Analytics & Visualization with Power BI",
      duration: "",
      icon: "📊",
      color: "from-sky-50 to-sky-100",
      topics: [
        "BI concepts & Power BI ecosystem (Desktop/Service/Mobile)",
        "data ingestion (CSV/Excel/folder/XML/DB)",
        "Power Query Editor (clean/shape, split/merge, extract/replace, pivot/unpivot, append/merge)",
        "data modeling (facts/dimensions, star vs snowflake, relationships/cardinality)",
        "visuals (bar/line/pie, maps, matrix/cards)",
        "DAX basics (columns, measures, operators/functions)",
        "advanced visuals (KPIs, ribbon/scatter, waterfall/funnel, forecasting)",
        "interactivity (drill-down/through, tooltips, filters/slicers)",
        "dashboards & publishing to Service",
      ],
      projects: [
        "Hands-on projects",
      ],
    },
    {
      id: 4,
      title: "Data Analytics & Visualization with Tableau",
      duration: "",
      icon: "📉",
      color: "from-rose-50 to-rose-100",
      topics: [
        "BI + Tableau setup",
        "data integration (relationships, joins, unions)",
        "data types & the data pane (dimensions/measures; discrete vs continuous)",
        "core charts (bar/line/scatter) and Marks card (color/shape/size, labels/tooltips)",
        "advanced visuals (treemap/heatmap, Gantt/bullet, dual-axis & combined charts)",
        "geospatial (maps, density)",
        "organize/filter (groups, sorts, context filters)",
        "analysis (calculated fields, table calcs: running totals/%, clustering, forecasting)",
        "dynamic analysis (sets, parameters)",
        "dashboards & stories",
      ],
      projects: [
        "3 applied projects",
      ],
    },
    {
      id: 5,
      title: "Advanced Data Analytics with Python Libraries",
      duration: "",
      icon: "🐍",
      color: "from-indigo-50 to-indigo-100",
      topics: [
        "Python fundamentals (syntax, control flow, functions/modules, Jupyter setup)",
        "ML basics (supervised vs unsupervised; quick classification demo & metrics)",
        "pandas (IO, clean, filter/sort, groupby/merge/concat, pivots, EDA, stats, correlations)",
        "Matplotlib (figures/axes, hist/box/heatmap/3D, annotations, simple animation & widgets)",
        "Seaborn (distributions, pair/joint, categorical: box/violin/swarm; clustermap/FacetGrid, EDA integration)",
        "NumPy (arrays, reshape/broadcast, random, advanced indexing, linear algebra)",
      ],
      projects: [
        "Guided hands-on mini-projects",
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-10 bg-gradient-to-b from-slate-50 to-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            5-Core <span className="text-brand">Curriculum Modules</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto">
            {subtitle}
          </p>
          <p className="sr-only">{keywords}</p>

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
                className="w-full px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-white/30 transition-colors"
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
                          <span className="text-orange-500 font-bold mt-0.5">•</span>
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

        {/* CTA Section (adapted to match the learning outcomes layout structure) */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <button
                onClick={() => setIsSyllabusModalOpen(true)}
                className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-orange-200"
                aria-label="Download the detailed Advanced Data Analytics syllabus"
              >
                Download Detailed Syllabus (PDF)
              </button>
              <button
                onClick={() => setIsEnrollModalOpen(true)}
                className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-6 py-3 text-sm font-semibold text-white shadow-[0_2px_0_0_rgba(15,23,42,0.3)] transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
                aria-label="Apply for the Advanced Data Analytics program"
              >
                Apply Now
              </button>
            </div>
            <p className="mx-auto mt-3 max-w-3xl text-center text-[11px] text-slate-500">
              *Module order may vary slightly based on cohort needs and instructor discretion.
            </p>
          </div>
        </div>
      </div>
      <EnrollModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        courseName="Master Program in Deep Learning, NLP & Generative AI"
        source="Generative AI Course Page - Curriculum Section - Apply Now"
      />
      <SyllabusDownloadModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseName="Master Program in Deep Learning, NLP & Generative AI"
        source="Generative AI Course Page - Curriculum Section - Generative AI - Download Syllabus"
      />
    </section>
  );
}
