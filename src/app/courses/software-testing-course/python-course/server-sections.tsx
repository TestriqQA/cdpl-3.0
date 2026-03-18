'use client';

import dynamic from "next/dynamic";

// HeroSection moved to page.tsx for Static Import (LCP Optimization)

export const StatsSection = dynamic(
    () => import("@/components/python-course/StatsSection"),
    {
        ssr: true,
        loading: () => <div className="h-20" />,
    },
);

export const WhyPythonProgram = dynamic(
    () => import("@/components/python-course/WhyPythonProgram"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/python-course/CurriculumSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/python-course/ProjectsSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const CareerSection = dynamic(
    () => import("@/components/python-course/CareerSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/python-course/WhoShouldEnroll"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/python-course/ToolsSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const CareerRoadmapSection = dynamic(
    () => import("@/components/python-course/CareerRoadmapSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);
