"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const EventsPastEventsFloatingLanternsContent = dynamic(
    () => import("./EventsPastEventsFloatingLanternsContent"),
    { ssr: false }
);

export default function EventsPastEventsFloatingLanterns() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Only load on sm (640px) and up
        const check = () => setIsDesktop(window.innerWidth >= 640);
        check();

        // Optional: listen for resize if user rotates device
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    if (!isDesktop) return null;

    return <EventsPastEventsFloatingLanternsContent />;
}
