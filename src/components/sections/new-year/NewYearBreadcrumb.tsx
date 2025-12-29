import Link from "next/link";
import { Home } from "lucide-react";

export default function NewYearBreadcrumb() {
    return (
        <section className="relative isolate bg-slate-950 text-white pt-8 pb-2">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <nav aria-label="Breadcrumb">
                    <ol className="flex items-center gap-2 text-sm text-slate-400">
                        <li className="flex items-center gap-2">
                            <Home className="h-4 w-4" />
                            <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
                        </li>
                        <li aria-hidden className="text-slate-600">/</li>
                        <li className="font-medium text-yellow-400">New Year Offer</li>
                    </ol>
                </nav>
            </div>
        </section>
    );
}
