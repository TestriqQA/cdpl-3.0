'use client';

import dynamic from "next/dynamic";

// HeroSection moved to page.tsx for Static Import (LCP Optimization)

export const StatsSection = dynamic(
    () => import("@/components/python-course/StatsSection"),
    {
        ssr: false,
        loading: () => <div className="h-20" />,
    },
);

export const WhyPythonProgram = dynamic(
    () => import("@/components/python-course/WhyPythonProgram"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/python-course/CurriculumSection"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/python-course/ProjectsSection"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const CareerSection = dynamic(
    () => import("@/components/python-course/CareerSection"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/python-course/WhoShouldEnroll"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/python-course/ToolsSection"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const CareerRoadmapSection = dynamic(
    () => import("@/components/python-course/CareerRoadmapSection"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);

export const FaqSection = dynamic(
    () => import("@/components/python-course/FaqSection"),
    {
        ssr: false,
        loading: () => <div className="h-96" />,
    },
);
