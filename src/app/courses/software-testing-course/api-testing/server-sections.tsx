import dynamic from "next/dynamic";

const withLoader = (label: string) => ({
    loading: () => (
        <div className="flex items-center justify-center py-16 text-gray-500">
            {label}
        </div>
    ),
});

export const StatsSection = dynamic(
    () => import("@/components/api-testing/StatsSection"),
    {
        ssr: true,
        ...withLoader("Loading stats...")
    },

);

export const WhyApiTesting = dynamic(
    () => import("@/components/api-testing/WhyApiTesting"),
    {
        ssr: true,
        ...withLoader("Loading why...")
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/api-testing/CurriculumSection"),
    {
        ssr: true,
        ...withLoader("Loading curriculum...")
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/api-testing/ToolsSection"),
    {
        ssr: true,
        ...withLoader("Loading tools...")
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/api-testing/ProjectsSection"),
    {
        ssr: true,
        ...withLoader("Loading projects...")
    },
);

export const CareerSection = dynamic(
    () => import("@/components/api-testing/CareerSection"),
    {
        ssr: true,
        ...withLoader("Loading career...")
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/api-testing/WhoShouldEnroll"),
    {
        ssr: true,
        ...withLoader("Loading enrollment info...")
    },
);

export const FaqSection = dynamic(
    () => import("@/components/api-testing/FaqSection"),
    {
        ssr: true,
        ...withLoader("Loading FAQs...")
    },
);
