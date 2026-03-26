import dynamic from "next/dynamic";

const withLoader = (label: string) => ({
    loading: () => (
        <div className="flex items-center justify-center py-16 text-gray-500">
            {label}
        </div>
    ),
});

export const HeroSection = dynamic(
    () => import("@/components/masters-in-data-engineering/HeroSection"),
    {
        ssr: true,
        ...withLoader("Loading hero...")
    },
);

export const StatsSection = dynamic(
    () => import("@/components/masters-in-data-engineering/StatsSection"),
    {
        ssr: true,
        ...withLoader("Loading stats...")
    },
);

export const WhyEngineerProgram = dynamic(
    () => import("@/components/masters-in-data-engineering/WhyEngineerProgram"),
    {
        ssr: true,
        ...withLoader("Loading why engineer program...")
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/masters-in-data-engineering/CurriculumSection"),
    {
        ssr: true,
        ...withLoader("Loading curriculum...")
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/masters-in-data-engineering/ProjectsSection"),
    {
        ssr: true,
        ...withLoader("Loading projects...")
    },
);

export const CareerSection = dynamic(
    () => import("@/components/masters-in-data-engineering/CareerSection"),
    {
        ssr: true,
        ...withLoader("Loading career...")
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/masters-in-data-engineering/WhoShouldEnroll"),
    {
        ssr: true,
        ...withLoader("Loading enrollment info...")
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/masters-in-data-engineering/ToolsSection"),
    {
        ssr: true,
        ...withLoader("Loading tools...")
    },
);

export const FaqSection = dynamic(
    () => import("@/components/masters-in-data-engineering/FaqSection"),
    {
        ssr: true,
        ...withLoader("Loading FAQs...")
    },
);

export const CareerRoadmapSection = dynamic(
    () => import("@/components/masters-in-data-engineering/CareerRoadmapSection"),
    {
        ssr: true,
        ...withLoader("Loading career roadmap...")
    },
);

export const JsonLd = dynamic(
    () => import("@/components/JsonLd"),
    {
        ssr: true,
        ...withLoader("Loading json ld...")
    },
);
