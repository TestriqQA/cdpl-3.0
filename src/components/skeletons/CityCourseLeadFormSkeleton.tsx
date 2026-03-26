import React from 'react';

const CityCourseLeadFormSkeleton = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`bg-white/92 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 animate-pulse ${className}`}>
            {/* Header Skeleton */}
            <div className="mb-6 space-y-3">
                <div className="flex justify-between items-center">
                    <div className="h-7 bg-slate-200 rounded w-1/2"></div>
                    <div className="h-6 bg-slate-200 rounded-full w-16"></div>
                </div>
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                <div className="h-3 bg-slate-200 rounded w-1/2"></div>
            </div>

            {/* Inputs Skeleton */}
            <div className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                    <div className="h-4 bg-slate-200 rounded w-24"></div>
                    <div className="h-12 bg-slate-200 rounded-lg w-full"></div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                    <div className="h-4 bg-slate-200 rounded w-24"></div>
                    <div className="h-12 bg-slate-200 rounded-lg w-full"></div>
                </div>

                {/* Phone */}
                <div className="space-y-1">
                    <div className="h-4 bg-slate-200 rounded w-24"></div>
                    <div className="h-12 bg-slate-200 rounded-lg w-full"></div>
                </div>

                {/* Button */}
                <div className="h-12 bg-slate-300 rounded-lg w-full mt-2"></div>
            </div>

            {/* Trust Badges Skeleton */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex justify-center gap-4">
                <div className="h-3 bg-slate-200 rounded w-20"></div>
                <div className="h-3 bg-slate-200 rounded w-20"></div>
                <div className="h-3 bg-slate-200 rounded w-20"></div>
            </div>
        </div>
    );
};

export default CityCourseLeadFormSkeleton;
