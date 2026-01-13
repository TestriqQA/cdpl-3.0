"use client";

import { Suspense } from "react";
import NewYearOfferForm from "@/components/forms/NewYearOfferForm";
import { Sparkles, Clock, CalendarDays, Loader2 } from "lucide-react";

export default function NewYearHeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-slate-950 py-8 lg:py-16">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 opacity-90" />

                {/* Animated fireworks/particles placeholder or simple glow - Optimized to Radial Gradient */}
                <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.2)_0%,transparent_70%)]" />
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.2)_0%,transparent_70%)]" />

                {/* Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-sm max-w-full">
                            <Sparkles className="h-4 w-4 text-yellow-400 flex-shrink-0" />
                            <span>New Year Special Offer</span>
                        </div>

                        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl break-words">
                            Unlock Your Tech Career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">2026</span>
                        </h1>

                        <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
                            Start the year with a bang! Get flat <span className="font-bold text-white">50% OFF</span> on all our industry-leading courses. Master Software Testing, Data Science, AI, and more.
                        </p>

                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                            <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-3 border border-white/10 backdrop-blur-sm w-full sm:w-auto justify-center sm:justify-start">
                                <Clock className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Offer Ends</p>
                                    <p className="text-sm font-bold text-white">Jan 10th, 11:59 PM</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg bg-white/5 px-4 py-3 border border-white/10 backdrop-blur-sm w-full sm:w-auto justify-center sm:justify-start">
                                <CalendarDays className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                                <div className="text-left">
                                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Next Batch</p>
                                    <p className="text-sm font-bold text-white">Starts Jan 15th</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative fireworks/celebration emoji text */}
                        <div className="mt-10 animate-bounce text-2xl lg:mx-0 mx-auto w-fit">
                            🎉 🚀 🎓
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
                        {/* Glow effect behind form */}
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 opacity-30 blur-lg transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
                        <Suspense fallback={<div className="h-[600px] w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center"><Loader2 className="h-8 w-8 text-indigo-500 animate-spin" /></div>}>
                            <NewYearOfferForm />
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
}
