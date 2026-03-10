import dynamic from "next/dynamic";

const SectionLoader = ({ label }: { label: string }) => {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
};

// HeroSection moved to page.tsx for Static Import (LCP Optimization)

export const StatsSection = dynamic(
    () => import("@/components/automation-testing-course/StatsSection"),
    {
        ssr: true,
        loading: () => <SectionLoader label="Stats Section" />,
    },
);

export const WhyAutomation = dynamic(
    () => import("@/components/automation-testing-course/WhyAutomation"),
    {
        ssr: true,
        loading: () => <SectionLoader label="Why Automation" />,
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/automation-testing-course/CurriculumSection"),
    {
        ssr: true,
        loading: () => <SectionLoader label="Curriculum Section" />,
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/automation-testing-course/ProjectsSection"),
    {
        ssr: true,
        loading: () => <SectionLoader label="Projects Section" />,
    },
);

export const CareerSection = dynamic(
    () => import("@/components/automation-testing-course/CareerSection"),
    {
        ssr: true,
        loading: () => <SectionLoader label="Career Section" />,
    },
);

export const WhoShouldEnroll = dynamic(
    () => import("@/components/automation-testing-course/WhoShouldEnroll"),
    {
        ssr: true,
        loading: () => <SectionLoader label="Who Should Enroll" />,
    },
);

export const ToolsSection = dynamic(
    () => import("@/components/automation-testing-course/ToolsSection"),
    {
        ssr: true,
        loading: () => <SectionLoader label="Tools Section" />,
    },
);

export const FaqSection = dynamic(
    () => import("@/components/automation-testing-course/FaqSection"),
    {
        ssr: true,
        loading: () => <SectionLoader label="FAQ Section" />,
    },
);
