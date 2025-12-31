import dynamic from "next/dynamic";

const withLoader = (label: string) => ({
    loading: () => (
        <div className="flex items-center justify-center py-16 text-gray-500">
            {label}
        </div>
    ),
});

export const HeroSection = dynamic(
    () => import("@/components/machine-learning-using-python/HeroSection"),
    {
        ssr: true,
        ...withLoader("Loading hero...")
    },
);

export const StatsSection = dynamic(
    () => import("@/components/machine-learning-using-python/StatsSection"),
    {
        ssr: true,
        ...withLoader("Loading stats...")
    },
);

export const WhyMLPythonProgram = dynamic(
    () => import("@/components/machine-learning-using-python/WhyMLPythonProgram"),
    {
        ssr: true,
        ...withLoader("Loading why ML Python program...")
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/machine-learning-using-python/CurriculumSection"),
    {
        ssr: true,
        ...withLoader("Loading curriculum...")
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/machine-learning-using-python/ProjectsSection"),
    {
        ssr: true,
        ...withLoader("Loading projects...")
    },
);

export const CareerSection = dynamic(
    () => import("@/components/machine-learning-using-python/CareerSection"),
    {
        ssr: true,
        ...withLoader("Loading career...")
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/machine-learning-using-python/WhoShouldEnroll"),
    {
        ssr: true,
        ...withLoader("Loading enrollment info...")
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/machine-learning-using-python/ToolsSection"),
    {
        ssr: true,
        ...withLoader("Loading tools...")
    },
);

export const CareerRoadmapSection = dynamic(
    () => import("@/components/machine-learning-using-python/CareerRoadmapSection"),
    {
        ssr: true,
        ...withLoader("Loading career roadmap...")
    },
);

export const FaqSection = dynamic(
    () => import("@/components/machine-learning-using-python/FaqSection"),
    {
        ssr: true,
        ...withLoader("Loading FAQs...")
    },
);
