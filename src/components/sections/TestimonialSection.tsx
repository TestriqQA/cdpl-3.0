'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

/* ----------------------------- Types ----------------------------- */
type Testimonial = {
  name: string;
  role: string;
  rating: number;
  content: string;
  image: string;
};

type MobileCarouselProps = {
  items: Testimonial[];
};

type ColumnMarqueeProps = {
  direction: 'up' | 'down';
  children: ReactNode;
};

/* --------------------------- Mock Data --------------------------- */
const testimonials: Testimonial[] = [
  {
    name: 'Mia Thompson', role: 'Design Lead', rating: 5,
    content: 'Pagedone, managing my portfolio has never been easier. This powerful tool provides real-time updates.',
    image: '/images/ami-khambata.png'
  },
  {
    name: 'Daniel Harrison', role: 'Product and Sales Manager', rating: 4.1,
    content: 'This innovative solution offers unparalleled ease of use, allowing businesses to swiftly onboard.',
    image: '/images/ami-khambata.png'
  },
  {
    name: 'Emily Johnson', role: 'CEO', rating: 5,
    content: 'Its intuitive features streamline the process, enhancing efficiency and productivity.',
    image: '/images/ami-khambata.png'
  },
  {
    name: 'James Miller', role: 'Sales Manager', rating: 4.8,
    content: 'Pagedone simplifies this task by providing me with the tools to stay on top of my portfolio effortlessly.',
    image: '/images/ami-khambata.png'
  },
  {
    name: 'Samuel Turner', role: 'CTO', rating: 4.2,
    content: 'Its intuitive interface allows me to make informed decisions swiftly, ensuring that I can navigate.',
    image: '/images/ami-khambata.png'
  },
  {
    name: 'Benjamin Evans', role: 'Product Designer', rating: 4.5,
    content: 'Pagedone has made it possible for me to stay on top of my portfolio and communicate effectively.',
    image: '/images/ami-khambata.png'
  },
];

/* ------------------------ Presentational UI ---------------------- */
function TestimonialCard({ name, role, rating, content, image }: Testimonial) {
  return (
    <div
      className="
        bg-white text-[#171717] border border-zinc-200 rounded-xl
        shadow-[0_1px_4px_rgba(0,0,0,0.06)]
        transition-all duration-300
        md:hover:-translate-y-1 md:hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] md:hover:border-zinc-300
        will-change-transform
      "
    >
      <div className="p-6">
        <div className="flex items-center mb-2">
          <Star className="h-4 w-4 text-[#ff8c00] fill-[#ff8c00] mr-1" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
        <p className="text-sm mb-4">{content}</p>
        <div className="flex items-center space-x-3">
          <Image src={image} alt={name} width={32} height={32} className="rounded-full" />
          <div className="leading-tight">
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs text-zinc-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Mobile swipe carousel with dots (no auto-scroll) ---------- */
function MobileCarousel({ items }: MobileCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const w = el.clientWidth;
        const i = Math.round(el.scrollLeft / w);
        setIndex(i);
        ticking = false;
      });
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
    setIndex(i);
  };

  return (
    <div className="md:hidden w-full">
      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimonials"
        className="
          overflow-x-auto overflow-y-hidden no-scrollbar
          snap-x snap-mandatory flex
          [touch-action:pan-x] [overscroll-behavior-x:contain]
        "
        style={{ WebkitOverflowScrolling: 'touch' } as CSSProperties}
      >
        {items.map((t, i) => (
          <div
            key={`mob-${i}`}
            className="snap-start shrink-0 w-full flex justify-center px-4"
            style={{ flexBasis: '100%' }}
          >
            <div className="max-w-sm w-full">
              <TestimonialCard {...t} />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${index === i ? 'bg-[#2563eb]' : 'bg-zinc-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ---------- Desktop/Tablet column with reliable hover-pause ---------- */
function ColumnMarquee({ direction, children }: ColumnMarqueeProps) {
  const [paused, setPaused] = useState(false);
  return (
    <div
      className="overflow-hidden h-[500px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style jsx>{`
        @keyframes homeTestimonialScrollUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes homeTestimonialScrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .animate-scroll-up {
          animation: homeTestimonialScrollUp 20s linear infinite;
        }
        .animate-scroll-down {
          animation: homeTestimonialScrollDown 20s linear infinite;
        }
      `}</style>
      <div
        className={`flex flex-col ${direction === 'up' ? 'animate-scroll-up' : 'animate-scroll-down'}`}
        style={{ animationPlayState: paused ? 'paused' : 'running' }}
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------------ Section ------------------------------ */
export default function TestimonialSection() {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3);

  return (
    <section className="bg-white py-20 text-[#171717] overflow-visible md:overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-start">
        {/* LEFT: Title */}
        <div className="w-full lg:w-1/3">
          <p className="uppercase text-sm text-zinc-500 mb-2">Testimonial</p>
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            We go above and beyond to understand and meet.
          </h2>
          <p className="text-zinc-600 mb-6">
            Our dedication to excellence drives us to truly understand and meet the unique needs of each customer.
          </p>
          <Link
            href="/testimonials"
            className="inline-flex items-center rounded-full bg-[var(--color-brand)] px-6 py-3 font-medium text-white transition hover:translate-y-[-1px] hover:shadow"
          >
            View all testimonials →
          </Link>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-2/3">
          {/* Mobile: swipe carousel with dots */}
          <MobileCarousel items={testimonials} />

          {/* Desktop/Tablet: 2 columns with vertical marquee (pause on hover) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            <ColumnMarquee direction="up">
              {[...firstColumn, ...firstColumn].map((t, idx) => (
                <div key={`left-${idx}`} className="mb-6 last:mb-0">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </ColumnMarquee>

            <ColumnMarquee direction="down">
              {[...secondColumn, ...secondColumn].map((t, idx) => (
                <div key={`right-${idx}`} className="mb-6 last:mb-0">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </ColumnMarquee>
          </div>
        </div>
      </div>
    </section>
  );
}
