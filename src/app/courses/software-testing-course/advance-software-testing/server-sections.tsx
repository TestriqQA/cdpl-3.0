'use client';

import dynamic from "next/dynamic";


// HeroSection moved to page.tsx for Static Import (LCP Optimization)

export const StatsSection = dynamic(
    () => import("@/components/advance-software-testing/StatsSection"),
    {
        ssr: true,
        loading: () => <div className="h-20" />,
    },
);

export const WhyAdvancedTesting = dynamic(
    () => import("@/components/advance-software-testing/WhyAdvancedTesting"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/advance-software-testing/CurriculumSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/advance-software-testing/ProjectsSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const CareerSection = dynamic(
    () => import("@/components/advance-software-testing/CareerSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/advance-software-testing/WhoShouldEnroll"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/advance-software-testing/ToolsSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);

export const FaqSection = dynamic(
    () => import("@/components/advance-software-testing/FaqSection"),
    {
        ssr: true,
        loading: () => <div className="h-96" />,
    },
);
