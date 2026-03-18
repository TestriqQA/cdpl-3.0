import dynamic from "next/dynamic";

const withLoader = (label: string) => ({
    loading: () => (
        <div className="flex items-center justify-center py-16 text-gray-500">
            {label}
        </div>
    ),
});

export const HeroSection = dynamic(
    () => import("@/components/digital-marketing-course/HeroSection"),
    {
        ssr: true,
        ...withLoader("Loading hero...")
    },
);

export const StatsSection = dynamic(
    () => import("@/components/digital-marketing-course/StatsSection"),
    {
        ssr: true,
        ...withLoader("Loading stats...")
    },
);

export const WhyMasterProgram = dynamic(
    () => import("@/components/digital-marketing-course/WhyMasterProgram"),
    {
        ssr: true,
        ...withLoader("Loading why master program...")
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/digital-marketing-course/CurriculumSection"),
    {
        ssr: true,
        ...withLoader("Loading curriculum...")
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/digital-marketing-course/ProjectsSection"),
    {
        ssr: true,
        ...withLoader("Loading projects...")
    },
);

export const CareerSection = dynamic(
    () => import("@/components/digital-marketing-course/CareerSection"),
    {
        ssr: true,
        ...withLoader("Loading career...")
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/digital-marketing-course/WhoShouldEnroll"),
    {
        ssr: true,
        ...withLoader("Loading enrollment info...")
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/digital-marketing-course/ToolsSection"),
    {
        ssr: true,
        ...withLoader("Loading tools...")
    },
);

export const FaqSection = dynamic(
    () => import("@/components/digital-marketing-course/FaqSection"),
    {
        ssr: true,
        ...withLoader("Loading FAQs...")
    },
);

export const JsonLd = dynamic(
    () => import("@/components/JsonLd"),
    {
        ssr: true,
        ...withLoader("Loading json ld...")
    },
);
