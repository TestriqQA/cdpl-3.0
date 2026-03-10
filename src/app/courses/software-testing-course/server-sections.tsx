import dynamic from "next/dynamic";

const withLoader = (label: string) => ({
    loading: () => (
        <div className="flex items-center justify-center py-16 text-gray-500">
            {label}
        </div>
    ),
});

export const HeroSection = dynamic(
    () => import("@/components/software-testing-course/HeroSection"),
    {
        ssr: true,
        ...withLoader("Loading hero...")
    },
);

export const FeaturesSection = dynamic(
    () => import("@/components/software-testing-course/FeaturesSection"),
    {
        ssr: true,
        ...withLoader("Loading features...")
    },
);

export const CurriculumSection = dynamic(
    () => import("@/components/software-testing-course/CurriculumSection"),
    {
        ssr: true,
        ...withLoader("Loading curriculum...")
    },
);

export const CoursesSection = dynamic(
    () => import("@/components/software-testing-course/CoursesSection"),
    {
        ssr: true,
        ...withLoader("Loading courses...")
    },
);

export const ProjectsSection = dynamic(
    () => import("@/components/software-testing-course/ProjectsSection"),
    {
        ssr: true,
        ...withLoader("Loading projects...")
    },
);

export const CareerPathSection = dynamic(
    () => import("@/components/software-testing-course/CareerPathSection"),
    {
        ssr: true,
        ...withLoader("Loading career path...")
    },
);

export const FAQSection = dynamic(
    () => import("@/components/software-testing-course/FAQSection"),
    {
        ssr: true,
        ...withLoader("Loading FAQs...")
    },
);
