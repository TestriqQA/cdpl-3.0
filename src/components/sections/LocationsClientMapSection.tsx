// src/components/sections/ClientMapSection.tsx
"use client";

import dynamic from "next/dynamic";
import { getFlatLocations, statesData } from "@/data/cities/citiesData";

const LocationsInteractiveMapSection = dynamic(
    () => import("./LocationsInteractiveMapSection"),
    {
        ssr: false,
        loading: () => (
            <div className="flex h-[420px] w-full items-center justify-center rounded-2xl bg-slate-50/70">
                <p className="text-sm text-gray-600">Loading map...</p>
            </div>
        ),
    }
);

export default function LocationsClientMapSection() {
    return (
        <section className="w-full mt-10">
            <LocationsInteractiveMapSection locations={getFlatLocations(statesData)} />
        </section>
    );
}
