"use client";

import Image from "next/image";

export default function EventsPastEventsFloatingLanternsContent() {
    return (
        <div
            className="pointer-events-none absolute inset-0 z-0 hidden sm:block"
            aria-hidden="true"
        >
            {/* left edge */}
            <div className="absolute top-28 left-0 md:left-2 lg:left-4 animate-float">
                <Image
                    src="/events/fire_lantern.png"
                    alt=""
                    width={64}
                    height={64}
                    className="w-8 md:w-10 lg:w-12 h-auto opacity-90"
                />
            </div>

            {/* right edge */}
            <div
                className="absolute top-6 right-0 md:right-3 lg:right-6 animate-float-slow"
                style={{ animationDelay: "0.8s" }}
            >
                <Image
                    src="/events/fire_lantern.png"
                    alt=""
                    width={64}
                    height={64}
                    className="w-7 md:w-9 lg:w-11 h-auto opacity-90"
                />
            </div>

            {/* upper center */}
            <div
                className="absolute top-20 left-1/2 -translate-x-1/2 animate-float-slower"
                style={{ animationDelay: "1.6s" }}
            >
                <Image
                    src="/events/fire_lantern.png"
                    alt=""
                    width={56}
                    height={56}
                    className="w-7 md:w-8 lg:w-10 h-auto opacity-80"
                />
            </div>

            {/* low right, below CTA */}
            <div
                className="absolute bottom-4 right-2 md:bottom-8 md:right-8 animate-float"
                style={{ animationDelay: "0.3s" }}
            >
                <Image
                    src="/events/fire_lantern.png"
                    alt=""
                    width={52}
                    height={52}
                    className="w-6 md:w-7 lg:w-9 h-auto opacity-75"
                />
            </div>

            {/* float animations */}
            <style jsx>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float { animation: floatY 6s ease-in-out infinite; }
        .animate-float-slow { animation: floatY 7.5s ease-in-out infinite; }
        .animate-float-slower { animation: floatY 9s ease-in-out infinite; }
      `}</style>
        </div>
    );
}
