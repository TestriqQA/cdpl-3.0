import dynamic from "next/dynamic";

const withLoader = (label: string) => ({
    loading: () => (
        <div className="flex items-center justify-center py-16 text-gray-500">
            {label}
        </div>
    ),
});

export const HeroSection = dynamic(
    () => import("@/components/etl-testing/HeroSection"),
    {
        ssr: true,
        ...withLoader("Loading hero...")
    },
);

export const StatsSection = dynamic(
    () => import("@/components/etl-testing/StatsSection"),
    {
        ssr: true,
        ...withLoader("Loading stats...")
    },
);

export const WhyEtlTesting = dynamic(
    () => import("@/components/etl-testing/WhyEtlTesting"),
    {
        ssr: true,
        ...withLoader("Loading why...")
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/etl-testing/CurriculumSection"),
    {
        ssr: true,
        ...withLoader("Loading curriculum...")
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/etl-testing/ToolsSection"),
    {
        ssr: true,
        ...withLoader("Loading tools...")
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/etl-testing/ProjectsSection"),
    {
        ssr: true,
        ...withLoader("Loading projects...")
    },
);

export const CareerSection = dynamic(
    () => import("@/components/etl-testing/CareerSection"),
    {
        ssr: true,
        ...withLoader("Loading career...")
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/etl-testing/WhoShouldEnroll"),
    {
        ssr: true,
        ...withLoader("Loading enrollment info...")
    },
);

export const FaqSection = dynamic(
    () => import("@/components/etl-testing/FaqSection"),
    {
        ssr: true,
        ...withLoader("Loading FAQs...")
    },
);
