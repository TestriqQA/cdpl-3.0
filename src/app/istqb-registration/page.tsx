
import { Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import IstqbRegistrationContainer from '@/components/istqb-registration/IstqbRegistrationContainer';

export const metadata = {
    title: 'ISTQB Registration | Testriq',
    description: 'Register for ISTQB Certification with Testriq.',
};

export default function IstqbRegistrationPage() {
    return (
        <main className="min-h-screen bg-slate-50 relative font-sans">
            {/* Background Ambience - Static Server Render */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-orange-200/20 rounded-full blur-[120px]" />
                <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-blue-200/20 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">

                {/* Breadcrumb - Static Server Render */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2">
                            <Home className="h-4 w-4" />
                            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
                        </li>
                        <li><ChevronRight className="h-4 w-4 text-slate-400" /></li>
                        <li>
                            <span className="font-semibold text-slate-900">ISTQB Registration</span>
                        </li>
                    </ol>
                </nav>

                {/* Client Interactive Container */}
                <IstqbRegistrationContainer />

            </div>
        </main >
    );
}
