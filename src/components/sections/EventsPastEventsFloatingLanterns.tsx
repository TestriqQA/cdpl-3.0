"use client";

import dynamic from "next/dynamic";

const EventsPastEventsFloatingLanternsContent = dynamic(
    () => import("./EventsPastEventsFloatingLanternsContent"),
    { ssr: false }
);

export default function EventsPastEventsFloatingLanterns() {
    return <EventsPastEventsFloatingLanternsContent />;
}
