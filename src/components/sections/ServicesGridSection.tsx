// src/components/sections/ServicesGridSection.tsx
"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { trainingServices } from "@/data/servicesData";
import type React from "react";

type Service = (typeof trainingServices)[number];

export default function ServicesGridSection() {
  return (
    <section id="services-grid" className="pt-6 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <header className="mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-[rgb(0,105,168)]">Our</span>{" "}
            <span className="text-[rgb(255,140,0)]">programs</span>
          </h2>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainingServices.map((service: Service) => {
            const IconComponent = service.icon as React.ElementType;

            return (
              <article
                key={service.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col"
              >
                {/* Gradient Header */}
                <div
                  className={`relative overflow-hidden ${service.color} bg-gradient-to-r p-8 text-white`}
                >
                  <div className="absolute right-0 top-0 -translate-y-4 translate-x-8 rotate-12 opacity-20">
                    <IconComponent className="h-32 w-32" />
                  </div>
                  <div className="relative z-10">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold">{service.title}</h3>
                    <p className="text-white/90 text-sm">{service.tagline}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="mb-6 line-clamp-3 text-gray-700">
                    {service.shortDescription}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold text-gray-900">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="block mt-auto"
                  >
                    <span
                      className={[
                        "relative w-full overflow-hidden rounded-2xl",
                        "flex items-center justify-center gap-2",
                        `bg-gradient-to-r ${service.color} text-white`,
                        "px-4 py-3 sm:px-6 sm:py-3 min-h-[44px] sm:min-h-[44px]",
                        "text-sm sm:text-base font-semibold leading-tight sm:leading-6",
                        "shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none",
                        "focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2",
                        "whitespace-normal sm:whitespace-nowrap text-center",
                      ].join(" ")}
                      aria-label={`View details and past events for ${service.title}`}
                    >
                      <span className="block">View Details &amp; Past Events</span>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,.35), transparent)",
                        }}
                      />
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
