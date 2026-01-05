import dynamic from "next/dynamic";

const withLoader = (label: string) => ({
    loading: () => (
        <div className="flex items-center justify-center py-16 text-gray-500">
            {label}
        </div>
    ),
});

export const HeroSection = dynamic(
    () => import("@/components/data-science-course/HeroSection"),
    {
        ssr: true,
        ...withLoader("Loading hero...")
    },
);

export const StatsSection = dynamic(
    () => import("@/components/data-science-course/StatsSection"),
    {
        ssr: true,
        ...withLoader("Loading stats...")
    },
);

export const WhyDSProgram = dynamic(
    () => import("@/components/data-science-course/WhyDSProgram"),
    {
        ssr: true,
        ...withLoader("Loading why DS program...")
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/data-science-course/CurriculumSection"),
    {
        ssr: true,
        ...withLoader("Loading curriculum...")
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/data-science-course/ProjectsSection"),
    {
        ssr: true,
        ...withLoader("Loading projects...")
    },
);

export const CareerSection = dynamic(
    () => import("@/components/data-science-course/CareerSection"),
    {
        ssr: true,
        ...withLoader("Loading career...")
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/data-science-course/WhoShouldEnroll"),
    {
        ssr: true,
        ...withLoader("Loading enrollment info...")
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/data-science-course/ToolsSection"),
    {
        ssr: true,
        ...withLoader("Loading tools...")
    },
);

export const FaqSection = dynamic(
    () => import("@/components/data-science-course/FaqSection"),
    {
        ssr: true,
        ...withLoader("Loading FAQs...")
    },
);

export const CareerRoadmapSection = dynamic(
    () => import("@/components/data-science-course/CareerRoadmapSection"),
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
