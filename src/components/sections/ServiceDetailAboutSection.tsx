import type { ServiceClient } from '@/types/service';

export default function ServiceDetailAboutSection({ service }: { service: ServiceClient }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      aria-labelledby="about-service-heading"
    >
      {/* ==== Animated Background Patterns ==== */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Wavy Lines Pattern 1 */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-lines" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
              <path 
                d="M0 50 Q 50 30, 100 50 T 200 50" 
                stroke="rgb(14 165 233 / 0.15)" 
                fill="none" 
                strokeWidth="1.5">
                <animate 
                  attributeName="d" 
                  values="M0 50 Q 50 30, 100 50 T 200 50;M0 50 Q 50 70, 100 50 T 200 50;M0 50 Q 50 30, 100 50 T 200 50" 
                  dur="8s" 
                  repeatCount="indefinite" />
              </path>
              <path 
                d="M0 70 Q 50 50, 100 70 T 200 70" 
                stroke="rgb(20 184 166 / 0.12)" 
                fill="none" 
                strokeWidth="1.5">
                <animate 
                  attributeName="d" 
                  values="M0 70 Q 50 50, 100 70 T 200 70;M0 70 Q 50 90, 100 70 T 200 70;M0 70 Q 50 50, 100 70 T 200 70" 
                  dur="10s" 
                  repeatCount="indefinite" />
              </path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-lines)" opacity="0.6" />
        </svg>

        {/* Curved Lines Pattern 2 - S-curves */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="s-curves" x="0" y="0" width="300" height="200" patternUnits="userSpaceOnUse">
              <path 
                d="M0 100 Q 75 50, 150 100 T 300 100" 
                stroke="rgb(99 102 241 / 0.1)" 
                fill="none" 
                strokeWidth="2">
                <animate 
                  attributeName="d" 
                  values="M0 100 Q 75 50, 150 100 T 300 100;M0 100 Q 75 150, 150 100 T 300 100;M0 100 Q 75 50, 150 100 T 300 100" 
                  dur="12s" 
                  repeatCount="indefinite" />
              </path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#s-curves)" opacity="0.5" />
        </svg>

        {/* Organic Curved Lines Pattern 3 */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="organic-curves" x="0" y="0" width="250" height="150" patternUnits="userSpaceOnUse">
              <path 
                d="M0 75 C 60 20, 90 130, 150 75 S 210 20, 250 75" 
                stroke="rgb(14 165 233 / 0.08)" 
                fill="none" 
                strokeWidth="1.8">
                <animate 
                  attributeName="d" 
                  values="M0 75 C 60 20, 90 130, 150 75 S 210 20, 250 75;M0 75 C 60 130, 90 20, 150 75 S 210 130, 250 75;M0 75 C 60 20, 90 130, 150 75 S 210 20, 250 75" 
                  dur="15s" 
                  repeatCount="indefinite" />
              </path>
              <path 
                d="M25 120 C 80 80, 110 160, 175 120" 
                stroke="rgb(20 184 166 / 0.06)" 
                fill="none" 
                strokeWidth="1.5">
                <animate 
                  attributeName="d" 
                  values="M25 120 C 80 80, 110 160, 175 120;M25 120 C 80 160, 110 80, 175 120;M25 120 C 80 80, 110 160, 175 120" 
                  dur="11s" 
                  repeatCount="indefinite" />
              </path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#organic-curves)" opacity="0.7" />
        </svg>

        {/* Flowing Bezier Curves */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M-100 300 Q 200 100, 500 300 T 1100 300" 
            stroke="rgb(14 165 233 / 0.12)" 
            fill="none" 
            strokeWidth="2">
            <animate 
              attributeName="d" 
              values="M-100 300 Q 200 100, 500 300 T 1100 300;M-100 300 Q 200 500, 500 300 T 1100 300;M-100 300 Q 200 100, 500 300 T 1100 300" 
              dur="14s" 
              repeatCount="indefinite" />
          </path>
          <path 
            d="M-100 450 C 150 250, 350 650, 600 450 S 850 250, 1100 450" 
            stroke="rgb(20 184 166 / 0.1)" 
            fill="none" 
            strokeWidth="1.8">
            <animate 
              attributeName="d" 
              values="M-100 450 C 150 250, 350 650, 600 450 S 850 250, 1100 450;M-100 450 C 150 650, 350 250, 600 450 S 850 650, 1100 450;M-100 450 C 150 250, 350 650, 600 450 S 850 250, 1100 450" 
              dur="16s" 
              repeatCount="indefinite" />
          </path>
        </svg>

        {/* micro paper grain */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#a3a3a31a_1px,transparent_1px)] [background-size:18px_18px]" />
        
        {/* soft vertical fade */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />
      </div>

      {/* ==== "Street-light" bar + gentle V-cone ==== */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0">
        <div className="mx-auto mt-2 h-[6px] w-40 rounded-full bg-sky-500/70 shadow-[0_0_24px_4px_rgba(14,165,233,0.25)]" />
        <svg
          className="mx-auto block"
          width="1200"
          height="160"
          viewBox="0 0 1200 160"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="beam" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <mask id="vmask">
              <path d="M600,0 L720,160 L480,160 Z" fill="white" />
            </mask>
          </defs>
          <rect width="1200" height="160" fill="url(#beam)" mask="url(#vmask)" />
        </svg>
      </div>

      {/* ==== Content ==== */}
      <div className="relative mx-auto max-w-7xl px-4 pb-5 pt-10 sm:px-6 lg:px-8">
        {/* Title row with slim accent rail */}
        <div className="mb-6 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-block h-8 w-[3px] rounded-full bg-gradient-to-b from-sky-500 to-cyan-500"
          />
          <h2
            id="about-service-heading"
            className="text-[28px] md:text-4xl font-semibold tracking-tight text-slate-900"
          >
            About This Service
          </h2>
        </div>

        {/* Description */}
        <p className="text-[17px] md:text-lg leading-relaxed text-slate-700 md:text-slate-800 max-w-3xl">
          {service.fullDescription}
        </p>

        {/* Baseline hairline */}
        <div
          aria-hidden="true"
          className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"
        />

        {/* Tiny bottom glow */}
        <div
          aria-hidden="true"
          className="mt-8 h-10 w-full bg-[radial-gradient(30rem_1.2rem_at_50%_0%,rgba(15,23,42,0.06),transparent_70%)]"
        />
      </div>
    </section>
  );
}
