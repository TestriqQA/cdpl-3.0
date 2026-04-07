import type { Category as BaseCategory } from "@/components/courses/course";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

/** Optional UI fields the card reads in addition to your base Category type */
type CategoryExtras = {
    href?: string;
    comingSoon?: boolean;
    bgColor?: string;         // e.g., "bg-rose-50"
    borderColor?: string;     // e.g., "border-rose-200"
    color?: string;           // e.g., "text-rose-700"
    iconBgColor?: string;     // e.g., "bg-rose-100"
    icon?: ReactNode;
    courses?: unknown[];      // if not in BaseCategory
    name?: string;            // if BaseCategory uses a different key for title
    description?: string;
};

type UICategory = BaseCategory & Partial<CategoryExtras>;

export default function CategoryCard({ category }: { category: UICategory }) {
    // We no longer wrap the whole card in a link if href is present.
    // Instead we show a button at the bottom.
    const href = category.href;
    const hasLink = typeof href === "string" && href.length > 0;

    const courseCount = Array.isArray(category.courses) ? category.courses.length : 0;
    const displayName = category.name ?? (category as unknown as { title?: string })?.title ?? "Category";

    const seoSubline = `${displayName} courses, certification & training – beginner to advanced`;

    return (
        <article
            className={[
                "relative isolate h-full w-full rounded-2xl",
                "border-2", category.borderColor ?? "border-slate-200",
                "shadow-[0_1px_0_#0000000a,_0_8px_30px_#0000000a]",
                "transition-all duration-300 ease-out",
                "hover:shadow-[0_8px_30px_#0000001a] hover:-translate-y-0.5",
                "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300",
                category.bgColor ?? "bg-white",
                "p-6 flex flex-col group",
            ].join(" ")}
            aria-label={`${displayName} category`}
        >
            {/* sheen */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    maskImage: "radial-gradient(70% 70% at 30% 20%, rgba(255,255,255,0.25), transparent 60%)",
                    WebkitMaskImage: "radial-gradient(70% 70% at 30% 20%, rgba(255,255,255,0.25), transparent 60%)",
                }}
            />


            <meta itemProp="termCode" content={displayName} />

            <div className="mb-5 flex items-start justify-between">
                <div
                    className={[
                        "rounded-xl p-3",
                        category.iconBgColor ?? "bg-slate-100",
                        category.color ?? "text-slate-700",
                        "shadow-inner",
                    ].join(" ")}
                    title={displayName}
                    aria-label={displayName}
                >
                    {category.icon}
                </div>

                {category.comingSoon ? (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 text-slate-700">
                        Coming Soon
                    </span>
                ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                        Updated
                    </span>
                )}
            </div>

            <h3 className="mb-1 text-lg sm:text-xl font-bold text-slate-900 tracking-tight" itemProp="name">
                {displayName}
            </h3>

            <p className="mb-2 text-sm font-medium text-slate-800" itemProp="alternateName">
                {seoSubline}
            </p>

            <p className="mb-5 text-sm leading-relaxed text-slate-600" itemProp="description">
                {category.description}
            </p>

            <div className="mt-auto pt-4 flex flex-wrap gap-2 items-center justify-between border-t border-slate-200/60">
                {!category.comingSoon && (
                    <span className="text-[13px] font-semibold text-slate-700">
                        {courseCount} {courseCount === 1 ? "Course" : "Courses"}
                    </span>
                )}

                {/* The new button */}
                {hasLink && !category.comingSoon && (
                    <Link
                        href={href!}
                        title={`View All ${displayName} Courses`}
                        className={[
                            "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                            "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                            "shadow-sm hover:shadow",
                        ].join(" ")}
                    >
                        View Courses
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                )}
            </div>

            <span className="sr-only">
                {displayName} category. {courseCount} {courseCount === 1 ? "course" : "courses"} available.
                Training, certification, syllabus, placement assistance, hands-on projects.
            </span>
        </article>
    );
}

