"use client";

import { ChevronDown, BookOpen, Rocket } from "lucide-react";
import { useState, type ReactNode } from "react";

export interface Module {
    id: number;
    title: string;
    duration: string;
    topics: string[];
    projects?: string[];
    color: string;
    icon: ReactNode;
}

/**
 * Client island for the curriculum accordion.
 *
 * Only the expand/collapse behaviour needs to be client-side, so this holds the
 * `expandedModule` state and nothing else. CurriculumSection — the header,
 * badges, CTA block and the module data itself — stays a Server Component and
 * ships no client JS, instead of the whole 350-line section hydrating just to
 * track which panel is open.
 *
 * Behaviour is unchanged: one panel open at a time, panel content mounted only
 * while expanded (so it stays out of the initial HTML exactly as before).
 */
export default function CurriculumAccordion({ modules }: { modules: Module[] }) {
    const [expandedModule, setExpandedModule] = useState<number | null>(null);

    return (
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
                            <span className="flex-shrink-0">{module.icon}</span>
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
                                        <Rocket className="w-6 h-6 text-brand" aria-hidden="true" />
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
    );
}
