import dynamic from "next/dynamic";

const withLoader = (label: string) => ({
    loading: () => (
        <div className="flex items-center justify-center py-16 text-gray-500">
            {label}
        </div>
    ),
});

export const HeroSection = dynamic(
    () => import("@/components/machine-learning-course/HeroSection"),
    {
        ssr: true,
        ...withLoader("Loading hero...")
    },
);

export const StatsSection = dynamic(
    () => import("@/components/machine-learning-course/StatsSection"),
    {
        ssr: true,
        ...withLoader("Loading stats...")
    },
);

export const WhyMLProgram = dynamic(
    () => import("@/components/machine-learning-course/WhyMLProgram"),
    {
        ssr: true,
        ...withLoader("Loading why ML program...")
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/machine-learning-course/CurriculumSection"),
    {
        ssr: true,
        ...withLoader("Loading curriculum...")
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/machine-learning-course/ProjectsSection"),
    {
        ssr: true,
        ...withLoader("Loading projects...")
    },
);

export const CareerSection = dynamic(
    () => import("@/components/machine-learning-course/CareerSection"),
    {
        ssr: true,
        ...withLoader("Loading career...")
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/machine-learning-course/WhoShouldEnroll"),
    {
        ssr: true,
        ...withLoader("Loading enrollment info...")
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/machine-learning-course/ToolsSection"),
    {
        ssr: true,
        ...withLoader("Loading tools...")
    },
);

export const FaqSection = dynamic(
    () => import("@/components/machine-learning-course/FaqSection"),
    {
        ssr: true,
        ...withLoader("Loading FAQs...")
    },
);

export const CareerRoadmapSection = dynamic(
    () => import("@/components/machine-learning-course/CareerRoadmapSection"),
    {
        ssr: true,
        ...withLoader("Loading career roadmap...")
    },
);
