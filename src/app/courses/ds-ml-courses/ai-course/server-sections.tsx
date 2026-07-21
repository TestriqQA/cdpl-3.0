'use client';

import dynamic from "next/dynamic";


// HeroSection moved to page.tsx for Static Import (LCP Optimization)

export const StatsSection = dynamic(
    () => import("@/components/ai-course/StatsSection"),
    {
        ssr: true,
        loading: () => <div className="h-20" />,
    },
);

export const WhyAIProgram = dynamic(
    () => import("@/components/ai-course/WhyAIProgram"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/ai-course/CurriculumSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/ai-course/ProjectsSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const CareerSection = dynamic(
    () => import("@/components/ai-course/CareerSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/ai-course/WhoShouldEnroll"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/ai-course/ToolsSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const FaqSection = dynamic(
    () => import("@/components/ai-course/FaqSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const CareerRoadmapSection = dynamic(
    () => import("@/components/ai-course/CareerRoadmapSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);
