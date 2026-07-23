import { Briefcase, Code, Database, Download } from "lucide-react";
import SyllabusButton from "@/components/course-islands/SyllabusButton";

const projects = [
  {
    title: "Disease Prediction Model for Hospital",
    domain: "Healthcare",
    icon: "🏥",
    description: "Build a machine learning model to predict disease outbreaks based on patient data including symptoms and demographics.",
    objective: "Improve early detection and optimize resource allocation using Python-based predictive models.",
    skills: ["Python", "Scikit-learn", "Data Preprocessing", "Healthcare Domain Knowledge"],
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Fraud Detection System for Bank",
    domain: "E-Finance (BFSI)",
    icon: "🏦",
    description: "Develop a fraud detection system using machine learning to analyze transaction data and identify suspicious activities.",
    objective: "Enhance security measures and protect customer assets through intelligent anomaly detection.",
    skills: ["Python", "TensorFlow", "Model Evaluation", "Finance Domain Knowledge"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Customer Churn Prediction",
    domain: "Telecommunication",
    icon: "📱",
    description: "Create a predictive model to identify customers likely to churn and implement retention strategies.",
    objective: "Reduce customer attrition and improve customer lifetime value through proactive interventions.",
    skills: ["Python", "Pandas", "Classification Models", "Business Analytics"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Recommendation Engine",
    domain: "E-Commerce",
    icon: "🛒",
    description: "Build a recommendation system that suggests products based on user behavior and preferences.",
    objective: "Increase sales and customer satisfaction through personalized product recommendations.",
    skills: ["Python", "Collaborative Filtering", "Content-Based Filtering", "Data Analysis"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Predictive Maintenance System",
    domain: "Manufacturing",
    icon: "⚙️",
    description: "Develop a system to predict equipment failures before they occur to minimize downtime.",
    objective: "Reduce maintenance costs and improve operational efficiency through predictive analytics.",
    skills: ["Python", "Time Series Analysis", "IoT Data", "Scikit-learn"],
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Sentiment Analysis Dashboard",
    domain: "Social Media",
    icon: "💬",
    description: "Create a system to analyze and classify sentiment from social media posts and customer reviews.",
    objective: "Monitor brand perception and customer satisfaction in real-time across platforms.",
    skills: ["Python", "NLP", "Text Processing", "Data Visualization"],
    color: "from-indigo-500 to-blue-500",
  },
];

const domains = [
  "Aviation",
  "Healthcare",
  "Telecommunication",
  "BFSI",
  "Social Media",
  "Automobile",
  "Sales & Marketing",
  "Human Resources",
  "Supply Chain Management",
];

export default function ProjectsSection() {
  const courseName = "Machine Learning Algorithms using python Programming";

  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Real-Time Capstone Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Work on industry-relevant projects across multiple domains to build a portfolio that impresses employers.
          </p>
        </div>

        {/* Domain Tags */}
        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50 transition-colors"
            >
              {domain}
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Domain Badge */}
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full mb-3">
                  {project.domain}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Objective */}
                <div className="mb-4 pb-4 border-t border-slate-200">
                  <p className="text-xs font-semibold text-slate-700 mb-2">OBJECTIVE</p>
                  <p className="text-sm text-slate-600">
                    {project.objective}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <p className="text-xs font-semibold text-slate-700 mb-2">SKILLS LEARNED</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded border border-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Industry-Relevant</h3>
            <p className="text-slate-600">Projects based on real-world business problems and industry requirements.</p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <Code className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Hands-On Implementation</h3>
            <p className="text-slate-600">Write production-grade code and deploy models using best practices.</p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <Database className="w-8 h-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Portfolio Building</h3>
            <p className="text-slate-600">Create impressive portfolio pieces to showcase to potential employers.</p>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12 flex justify-center">
          <SyllabusButton
            source="Machine Learning Algorithms with Python Course Page - Projects Section - Download Full Project List"
            courseName={courseName}
            className="inline-flex items-center justify-center cursor-pointer rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-brand focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Full Project List
          </SyllabusButton>
        </div>
      </div>
    </section>
  );
}
