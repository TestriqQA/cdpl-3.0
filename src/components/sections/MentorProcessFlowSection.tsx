"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

// Helper type for CSS custom properties
type CSSVars<T extends string> = CSSProperties & Record<T, string | number>;

export default function MentorProcessFlowSection() {
  const steps = [
    { title: "Book a free session", desc: "Tell us your goals and current level." },
    { title: "Get matched", desc: "We pair you with a mentor in your domain." },
    { title: "Learn by doing", desc: "Projects, feedback, and interview prep." },
    { title: "Get placed", desc: "Internship + referrals through partner network." },
  ];

  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(Array(steps.length).fill(false));
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => setProgress(1 / steps.length), [steps.length]);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(Array(steps.length).fill(true));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          const idx = Number((e.target as HTMLElement).dataset.index);
          if (e.isIntersecting) {
            setVisible((v) => (v[idx] ? v : Object.assign([...v], { [idx]: true })));
          }
        }),
      { threshold: 0.28 }
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [steps.length]);

  const onEnter = (i: number) => setProgress((i + 1) / steps.length);
  const onLeave = () => setProgress(1 / steps.length);

  const sectionVars: CSSVars<"--brand" | "--brandSoft" | "--navy" | "--glass" | "--grid"> = {
    colorScheme: "light",
    "--brand": "#ff8c00",
    "--brandSoft": "#ffb157",
    "--navy": "#0a1221",
    "--glass": "rgba(255,255,255,.62)",
    "--grid": "rgba(10,18,33,.08)",
  };

  const listVars: CSSVars<"--progress"> = {
    "--progress": Math.max(0, Math.min(1, progress)),
  };

  return (
    <section className="relative overflow-hidden bg-white" style={sectionVars}>
      {/* Light-only canvas */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-32%] h-[38rem] w-[80rem] -translate-x-1/2 rounded-[48%] opacity-[.18] blur-3xl bg-[radial-gradient(60%_60%_at_50%_50%,var(--brand)_0%,rgba(255,140,0,0)_72%)]" />
        <div className="absolute -right-48 -bottom-40 h-[44rem] w-[44rem] rounded-full opacity-[.10] blur-3xl bg-[radial-gradient(58%_58%_at_60%_60%,rgba(10,18,33,.35)_0%,rgba(10,18,33,0)_78%)]" />
        <div
          className="absolute inset-0 opacity-[.06]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* CONTENT CONTAINER ONLY */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">How mentorship works</h2>
          <p className="mt-1 text-[15px] sm:text-base text-slate-600">A simple, outcomes-focused, 4-step path.</p>
        </header>

        {/* Desktop: curved neon SVG beam behind cards */}
        <div className="relative hidden lg:block">
          <Beam progress={progress} />
        </div>

        {/* FLOW */}
        <ol className="relative mx-auto grid max-w-6xl grid-cols-1 gap-7 lg:grid-cols-4 lg:gap-6" style={listVars}>
          {/* Mobile straight connector w/ progress */}
          <MobileConnector />

          {steps.map((s, i) => {
            const show = visible[i];
            return (
              <li
                key={s.title}
                data-index={i}
                ref={(el) => { itemRefs.current[i] = el; }}  // ← block body, no return value
                onMouseEnter={() => onEnter(i)}
                onFocus={() => onEnter(i)}
                onMouseLeave={onLeave}
                onBlur={onLeave}
                className="relative group"
                style={{ transitionDelay: show ? `${i * 80}ms` : "0ms" }}
              >
                {/* Neon node */}
                <div className="relative z-10 flex items-center lg:justify-center">
                  <span
                    aria-hidden
                    className={`
                      relative grid h-12 w-12 place-items-center
                      before:absolute before:inset-[-3px] before:rounded-full
                      before:bg-[conic-gradient(from_0deg,rgba(255,140,0,1),var(--brandSoft),rgba(255,140,0,1))]
                      before:animate-[spin_6s_linear_infinite]
                      after:absolute after:inset-[3px] after:rounded-full after:bg-[var(--glass)]
                      rounded-full ring-1 ring-white/60 shadow-sm
                      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                      motion-safe:transition-all motion-safe:duration-500
                    `}
                    style={{ filter: "drop-shadow(0 6px 18px rgba(255,140,0,.22))" }}
                  >
                    <span className="relative z-[1] text-sm font-semibold text-[var(--navy)]">{i + 1}</span>
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`
                    mt-4 rounded-2xl border border-white/40 bg-white/60 px-5 py-5 backdrop-blur-xl
                    shadow-[0_14px_48px_-26px_rgba(10,18,33,.22)]
                    will-change-transform
                    ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                    motion-safe:transition-transform motion-safe:duration-500
                    group-hover:-translate-y-1 group-hover:rotate-[0.25deg]
                  `}
                >
                  {/* edge glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl [mask:linear-gradient(black,transparent_65%)]"
                    style={{ background: "linear-gradient(180deg, rgba(255,140,0,.12), rgba(255,140,0,0))" }}
                  />
                  <h3 className="relative text-[15px] font-semibold text-slate-900">{s.title}</h3>
                  <p className="relative mt-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>

                  {/* underline shimmer */}
                  <div className="relative mt-4 h-[3px] w-16 overflow-hidden rounded-full bg-slate-200/70">
                    <span className="absolute inset-0 bg-[linear-gradient(90deg,var(--brand),var(--brandSoft),var(--brand))] animate-[fill_1.9s_ease_infinite]" />
                  </div>
                </div>

                {/* Mobile dot between cards */}
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="lg:hidden absolute left-[22px] top-[60px] h-5 w-5 rounded-full bg-white ring-2 ring-slate-200 group-hover:ring-[var(--brand)] motion-safe:transition-colors motion-safe:duration-300"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fill {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[spin_6s_linear_infinite\\], .animate-\\[fill_1\\.9s_ease_infinite\\] { animation: none !important; }
          .motion-safe\\:transition-all, .motion-safe\\:transition-transform { transition: none !important; }
        }
      `}</style>
    </section>
  );
}

/** Desktop curved beam with gradient stroke that "lights" to progress */
function Beam({ progress }: { progress: number }) {
  return (
    <svg
      className="pointer-events-none absolute -top-20 left-0 hidden h-[260px] w-full lg:block"
      viewBox="0 0 1200 260"
      fill="none"
    >
      <defs>
        <linearGradient id="beam" x1="0" x2="1200" y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,140,0,.0)" />
          <stop offset="10%" stopColor="rgba(255,140,0,.25)" />
          <stop offset="55%" stopColor="rgba(255,177,87,.55)" />
          <stop offset="100%" stopColor="rgba(255,140,0,.25)" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <mask id="reveal">
          <rect x="0" y="0" width={1200 * Math.max(0.08, Math.min(1, progress))} height="260" fill="white" />
        </mask>
      </defs>

      <path d="M60,130 C300,30 900,230 1140,130" stroke="rgba(15,23,42,.12)" strokeWidth="2" strokeLinecap="round" />
      <g mask="url(#reveal)">
        <path
          d="M60,130 C300,30 900,230 1140,130"
          stroke="url(#beam)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#glow)"
        />
      </g>
    </svg>
  );
}

/** Mobile straight connector with the same progress feel */
function MobileConnector() {
  return (
    <div
      aria-hidden
      className="lg:hidden absolute left-[28px] top-[48px] bottom-[26px] w-[8px] [mask-image:linear-gradient(transparent,black_10%,black_90%,transparent)]"
    >
      <div className="relative h-full w-[2px] mx-[3px] rounded bg-[rgba(15,23,42,.14)]">
        <div
          className="absolute bottom-0 left-0 right-0 rounded-t"
          style={{
            height: "max(12%, calc(var(--progress) * 100%))",
            background:
              "linear-gradient(180deg, rgba(255,140,0,.85), rgba(255,177,87,.85), rgba(255,140,0,.85))",
            boxShadow: "0 0 18px rgba(255,140,0,.30)",
            transition: "height 420ms cubic-bezier(.22,1,.36,1)",
          }}
        />
      </div>
    </div>
  );
}
