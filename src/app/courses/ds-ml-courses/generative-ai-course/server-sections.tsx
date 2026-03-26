import dynamic from "next/dynamic";

const withLoader = (label: string) => ({
    loading: () => (
        <div className="flex items-center justify-center py-16 text-gray-500">
            {label}
        </div>
    ),
});



export const WhyGenAIProgram = dynamic(
    () => import("@/components/generative-ai-course/WhyGenAIProgram"),
    {
        ssr: true,
        ...withLoader("Loading why gen AI program...")
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/generative-ai-course/CurriculumSection"),
    {
        ssr: true,
        ...withLoader("Loading curriculum...")
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/generative-ai-course/ProjectsSection"),
    {
        ssr: true,
        ...withLoader("Loading projects...")
    },
);

export const CareerSection = dynamic(
    () => import("@/components/generative-ai-course/CareerSection"),
    {
        ssr: true,
        ...withLoader("Loading career...")
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/generative-ai-course/WhoShouldEnroll"),
    {
        ssr: true,
        ...withLoader("Loading enrollment info...")
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/generative-ai-course/ToolsSection"),
    {
        ssr: true,
        ...withLoader("Loading tools...")
    },
);

export const FaqSection = dynamic(
    () => import("@/components/generative-ai-course/FaqSection"),
    {
        ssr: true,
        ...withLoader("Loading FAQs...")
    },
);

export const CareerRoadmapSection = dynamic(
    () => import("@/components/generative-ai-course/CareerRoadmapSection"),
    {
        ssr: true,
        ...withLoader("Loading career roadmap...")
    },
);
