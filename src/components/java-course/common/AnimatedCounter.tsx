'use client';

import { useEffect, useMemo, useRef, useState } from "react";

function useInView(options?: IntersectionObserverInit) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const el = ref.current;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    io.unobserve(el); // fire once
                }
            },
            { root: null, threshold: 0.2, ...options }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [options]);

    return { ref, inView };
}

interface AnimatedCounterProps {
    value: string;
    className?: string;
    duration?: number;
}

export default function AnimatedCounter({ value, className, duration = 1200 }: AnimatedCounterProps) {
    const { ref, inView } = useInView();

    // Parse prefix/number/suffix to animate just the numeric part
    const { prefix, num, suffix } = useMemo(() => {
        const trimmed = value.trim();
        const match = trimmed.match(/^(\D*)\s*([0-9][0-9,\.]*)\s*(.*)$/) || ["", "", "0", ""];
        const prefix = match[1] ?? "";
        const numStr = (match[2] ?? "0").replace(/,/g, "");
        const suffix = match[3] ?? "";
        const num = parseFloat(numStr) || 0;
        return { prefix, num, suffix };
    }, [value]);

    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let raf = 0;
        const start = performance.now();
        const animate = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setDisplay(num * eased);
            if (p < 1) raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, [inView, duration, num]);

    const isInt = Number.isInteger(num);
    const formatted = (isInt ? Math.round(display) : display).toLocaleString(undefined, {
        maximumFractionDigits: isInt ? 0 : 1,
    });

    return (
        <span ref={ref} className={className}>
            {prefix}
            {formatted}
            {suffix ? ` ${suffix}` : ""}
        </span>
    );
}
