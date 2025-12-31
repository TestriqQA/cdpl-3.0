'use client';

import dynamic from "next/dynamic";

const withLoader = (label: string) => ({
    loading: () => (
        <div className="flex items-center justify-center py-16 text-gray-500">
            {label}
        </div>
    ),
});

// HeroSection moved to page.tsx for Static Import (LCP Optimization)

export const StatsSection = dynamic(
    () => import("@/components/ai-course/StatsSection"),
    {
        ssr: false,
        loading: () => <div className="h-20" />,
    },
);

export const WhyAIProgram = dynamic(
    () => import("@/components/ai-course/WhyAIProgram"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/ai-course/CurriculumSection"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/ai-course/ProjectsSection"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const CareerSection = dynamic(
    () => import("@/components/ai-course/CareerSection"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/ai-course/WhoShouldEnroll"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/ai-course/ToolsSection"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const FaqSection = dynamic(
    () => import("@/components/ai-course/FaqSection"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const CareerRoadmapSection = dynamic(
    () => import("@/components/ai-course/CareerRoadmapSection"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);
