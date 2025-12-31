import dynamic from "next/dynamic";

const withLoader = (label: string) => ({
    loading: () => (
        <div className="flex items-center justify-center py-16 text-gray-500">
            {label}
        </div>
    ),
});

export const HeroSection = dynamic(
    () => import("@/components/prompt-engineering-course/HeroSection"),
    {
        ssr: true,
        ...withLoader("Loading hero...")
    },
);

export const StatsSection = dynamic(
    () => import("@/components/prompt-engineering-course/StatsSection"),
    {
        ssr: true,
        ...withLoader("Loading stats...")
    },
);

export const WhyPromptGenProgram = dynamic(
    () => import("@/components/prompt-engineering-course/WhyPromptGenProgram"),
    {
        ssr: true,
        ...withLoader("Loading why prompt gen program...")
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/prompt-engineering-course/CurriculumSection"),
    {
        ssr: true,
        ...withLoader("Loading curriculum...")
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/prompt-engineering-course/ProjectsSection"),
    {
        ssr: true,
        ...withLoader("Loading projects...")
    },
);

export const CareerSection = dynamic(
    () => import("@/components/prompt-engineering-course/CareerSection"),
    {
        ssr: true,
        ...withLoader("Loading career...")
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/prompt-engineering-course/WhoShouldEnroll"),
    {
        ssr: true,
        ...withLoader("Loading enrollment info...")
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/prompt-engineering-course/ToolsSection"),
    {
        ssr: true,
        ...withLoader("Loading tools...")
    },
);

export const FaqSection = dynamic(
    () => import("@/components/prompt-engineering-course/FaqSection"),
    {
        ssr: true,
        ...withLoader("Loading FAQs...")
    },
);

export const CareerRoadmapSection = dynamic(
    () => import("@/components/prompt-engineering-course/CareerRoadmapSection"),
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
