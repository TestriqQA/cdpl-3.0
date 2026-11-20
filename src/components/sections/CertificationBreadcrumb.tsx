import Link from "next/link";
import { ChevronRight, Home, ShieldCheck } from "lucide-react";

const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Certificate Validation", href: "/cdpl-certificate-validation" },
];

/**
 * Page header for /cdpl-certificate-validation in the site's hero style:
 * About-style breadcrumbs, orange pill, the page's h1 with an orange key
 * word, and the intro. The validator card sits directly under it, inside the
 * same glow wrapper (see the page). Server component.
 */
export default function CertificationBreadcrumb() {
    return (
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-14">
            <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                    {breadcrumbs.map((c, i) => {
                        const isLast = i === breadcrumbs.length - 1;
                        return (
                            <li key={c.href} className="flex items-center gap-2">
                                {i === 0 ? <Home className="h-4 w-4" aria-hidden="true" /> : <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                                <Link
                                    href={c.href}
                                    aria-current={isLast ? "page" : undefined}
                                    className={`transition-colors hover:text-brand ${isLast ? "font-semibold text-slate-900" : ""}`}
                                >
                                    {c.label}
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            </nav>

            <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    CDPL · AAA · ACTD
                </span>
                <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                    Certificate <span className="text-brand">Validation</span>
                </h1>
                <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                    Verify the authenticity of CDPL, AAA, and ACTD certifications instantly.
                </p>
            </div>
        </div>
    );
}
