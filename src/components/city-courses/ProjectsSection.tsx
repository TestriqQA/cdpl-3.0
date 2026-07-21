import React from "react";
import { Code2, Briefcase, Award, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

// --- Type Definitions (Unchanged) ---
interface Project {
  name: string;
  description: string;
  difficulty: string;
  skills: string[];
}

interface ProjectsContent {
  title: string;
  description: string;
  subtitle?: string;
  projects: Project[];
}

interface CourseData {
  projectsContent: ProjectsContent;
}

interface ProjectsSectionProps {
  data: CourseData;
}
// ------------------------------------

const difficultyConfig = {
  Beginner: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  Intermediate: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  Advanced: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
  const { projectsContent } = data;

  return (
    <section className="relative py-8 md:py-16 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-50 rounded-full mix-blend-multiply filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16 md:mb-20"
        >
          <div
            className="inline-flex items-center gap-2 px-2 py-1 bg-cyan-50 text-cyan-700 rounded-full text-[13px] font-semibold mb-4 border border-cyan-200 shadow-sm"
          >
            <Code2 className="w-4 h-4" />
            Hands-On Projects
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight"
          >
            {projectsContent.title}
          </h2>
          <p
            className="text-xl text-slate-600 max-w-4xl mx-auto font-light"
          >
            {projectsContent.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20"
        >
          {projectsContent.projects.map((project, index) => {
            const diffConfig = difficultyConfig[project.difficulty as keyof typeof difficultyConfig] || difficultyConfig.Intermediate;

            return (
              <div
                key={index}
                className="group"
              >
                <div className="relative h-full bg-white rounded-3xl border border-slate-100 p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-100/50 hover:border-cyan-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-500/40">
                      <Code2 className="w-7 h-7" />
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${diffConfig.bg} ${diffConfig.text} border ${diffConfig.border}`}>
                      {project.difficulty}
                    </span>
                  </div>

                  <div className="space-y-5">
                    <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                      {project.name}
                    </h3>

                    <p className="text-slate-500 leading-relaxed text-base">
                      {project.description}
                    </p>

                    <div className="pt-4 border-t border-slate-50">
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Key Skills
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-flex items-center bg-slate-50 text-slate-700 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 border border-transparent group-hover:border-cyan-200 group-hover:bg-cyan-50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact-us"
                      className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl shadow-lg shadow-slate-900/20 transition-all duration-300 hover:bg-cyan-600 hover:shadow-cyan-500/40 transform hover:scale-[1.02]"
                    >
                      View Project Details
                      <ArrowRight className="w-5 h-5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Build With Us Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-2">Why Build With Us?</h3>
          <p className="text-lg text-slate-500">The benefits of completing these hands-on projects.</p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Briefcase className="w-7 h-7" />,
              title: "Portfolio Ready",
              description: "Build high-quality, deployable projects that will impress employers and make your portfolio stand out.",
            },
            {
              icon: <Award className="w-7 h-7" />,
              title: "Real-World Skills",
              description: "Gain practical, in-demand experience using industry-standard tools, frameworks, and modern workflows.",
            },
            {
              icon: <Zap className="w-7 h-7" />,
              title: "Accelerated Learning",
              description: "Master complex concepts faster through hands-on coding, immediate feedback, and guided problem-solving.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-lg transition-all duration-500 group hover:shadow-xl hover:shadow-indigo-100/50 hover:border-indigo-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white mb-6 shadow-xl shadow-indigo-500/40 group-hover:scale-105 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-500 text-base leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
