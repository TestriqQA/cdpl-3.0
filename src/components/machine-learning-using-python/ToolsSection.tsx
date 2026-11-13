import { Code2, Database, BarChart3, Cpu, Rocket, Plug, type LucideIcon } from "lucide-react";
import Image from "next/image";
import CareerSessionButton from "@/components/course-islands/CareerSessionButton";

type Tool = { name: string; icon?: LucideIcon; logo?: string };

const toolCategories: { category: string; icon: LucideIcon; color: string; tools: Tool[] }[] = [
  {
    category: "Programming & Core Libraries",
    icon: Code2,
    color: "from-blue-500 to-blue-600",
    tools: [
      { name: "Python", logo: "/techstack_logos/python-logo.svg" },
      { name: "NumPy", logo: "/techstack_logos/numpy-logo.svg" },
      { name: "Pandas", logo: "/techstack_logos/pandas-logo.svg" },
      { name: "Matplotlib", logo: "/techstack_logos/matplotlib-logo.svg" },
      { name: "Seaborn", logo: "/techstack_logos/seaborn-logo.png" },
    ],
  },
  {
    category: "Machine Learning Frameworks",
    icon: Cpu,
    color: "from-purple-500 to-purple-600",
    tools: [
      { name: "Scikit-learn", logo: "/techstack_logos/scikit-learn-logo.svg" },
      { name: "TensorFlow", logo: "/techstack_logos/tensorflow-logo.svg" },
      { name: "Keras", logo: "/techstack_logos/keras-logo.svg" },
      { name: "PyTorch", logo: "/techstack_logos/pytorch-logo.svg" },
      { name: "XGBoost", icon: Rocket },
    ],
  },
  {
    category: "Data & Visualization",
    icon: BarChart3,
    color: "from-indigo-500 to-indigo-600",
    tools: [
      { name: "SQL", icon: Database },
      { name: "Power BI", logo: "/techstack_logos/power-bi-logo.svg" },
      { name: "Tableau", logo: "/techstack_logos/tableau-logo.svg" },
      { name: "Plotly", logo: "/techstack_logos/plotly-logo.svg" },
      { name: "Excel", logo: "/techstack_logos/excel-logo.svg" },
    ],
  },
  {
    category: "Development & Deployment",
    icon: Database,
    color: "from-green-500 to-green-600",
    tools: [
      { name: "Jupyter Notebook", logo: "/techstack_logos/jupyter-logo.svg" },
      { name: "Git & GitHub", logo: "/techstack_logos/git-logo.svg" },
      { name: "Docker", logo: "/techstack_logos/docker-logo.svg" },
      { name: "AWS/Cloud", logo: "/techstack_logos/amazonwebservices-logo.svg" },
      { name: "APIs", icon: Plug },
    ],
  },
];

export default function ToolsSection() {
  const courseName = "Machine Learning Algorithms using python Programming";

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tools & Technologies You Will Master
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Learn industry-standard tools and frameworks used by leading companies worldwide.
          </p>
        </div>

        {/* Tools Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {toolCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.category}
                  </h3>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-white rounded-lg p-4 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        {tool.logo ? (
                          <Image src={tool.logo} alt="" width={40} height={40} className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10 group-hover:scale-110 transition-transform" aria-hidden />
                        ) : (
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center sm:h-10 sm:w-10 group-hover:scale-110 transition-transform" aria-hidden>
                            {tool.icon ? <tool.icon className="h-6 w-6 text-brand" /> : null}
                          </span>
                        )}
                        <p className="min-w-0 font-semibold text-slate-900 text-sm">
                          {tool.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Why These Tools */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Why These Tools?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">Industry Standard</p>
              <p className="text-slate-700">Used by Fortune 500 companies and leading tech organizations worldwide.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">High Demand</p>
              <p className="text-slate-700">Employers actively seek professionals proficient in these tools and frameworks.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-600 mb-2">Future-Ready</p>
              <p className="text-slate-700">Stay ahead with constantly updated tools and emerging technologies in ML.</p>
            </div>
          </div>
        </div>

        {/* Tool Proficiency Levels */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Your Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">B</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 text-center mb-2">Beginner</h4>
              <p className="text-slate-600 text-center text-sm">Foundation and basics of tools and frameworks</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">I</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 text-center mb-2">Intermediate</h4>
              <p className="text-slate-600 text-center text-sm">Practical implementation and real-world applications</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">A</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 text-center mb-2">Advanced</h4>
              <p className="text-slate-600 text-center text-sm">Expert-level proficiency and optimization techniques</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <CareerSessionButton
            source="Machine Learning Algorithms with Python Course Page - Tools Section - Book a Free Demo"
            courseName={courseName}
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-brand bg-brand px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-brand hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Book a Free Demo
          </CareerSessionButton>
        </div>
      </div>
    </section>
  );
}
