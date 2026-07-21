"use client";

import React, { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, Check, Zap } from "lucide-react";
import Link from "next/link";
import EnrollModal from "@/components/EnrollModal";
import Image from "next/image";

interface CTASectionProps {
  data: {
    courseName?: string;
    location?: string;
    ctaContent: {
      title: string;
      subtitle: string;
      description: string;
      benefits?: string[];
      contactInfo: {
        phone: string;
        email: string;
        address: string;
      };
    };
  };
}

const CTASection: React.FC<CTASectionProps> = ({ data }) => {
  const { ctaContent } = data;
  const courseName = data.courseName || "Course";

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupSource, setPopupSource] = useState("");

  const openPopup = (source: string) => {
    setPopupSource(source);
    setIsPopupOpen(true);
  };

  return (
    <section id="cta-section" className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50 to-violet-50">
      {/* Soft background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-24 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12" // Changed items-start to items-center for better image alignment visually
        >
          {/* LEFT: Content + Benefits */}
          <div className="lg:col-span-7">
            {/* Special offer badge */}
            <div
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-1.5 shadow-sm"
            >
              <Zap className="h-4 w-4 fill-amber-500 text-amber-500" />
              <span className="text-xs font-semibold text-amber-900">
                Limited Time: 20% Discount Available!
              </span>
            </div>

            <h2
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
            >
              {ctaContent.title}
            </h2>

            <p
              className="mt-3 text-lg font-semibold text-indigo-700"
            >
              {ctaContent.subtitle}
            </p>

            <p
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700"
            >
              {ctaContent.description}
            </p>

            {/* Benefits List */}
            {ctaContent.benefits && ctaContent.benefits.length > 0 && (
              <div
                className="mt-8 space-y-3"
              >
                {ctaContent.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-base font-medium text-slate-800">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <button
                onClick={() => openPopup(`(${data.location || 'City'} ${data.courseName || 'Course'}) - CTA Section - Enroll Now`)}
                className="group inline-flex items-center justify-center cursor-pointer rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={() => openPopup(`(${data.location || 'City'} ${data.courseName || 'Course'}) - CTA Section - Get Free Demo`)}
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-8 py-3.5 font-semibold text-slate-800 shadow-sm transition hover:border-slate-400 hover:shadow-md cursor-pointer"
              >
                Get Free Demo
              </button>
            </div>

            {/* Contact Info Cards */}
            <div
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {/* Phone */}
              <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Phone
                </p>
                <Link
                  href={`tel:${ctaContent.contactInfo.phone}`}
                  className="mt-1 block text-sm font-semibold text-slate-900 transition group-hover:text-indigo-600"
                >
                  {ctaContent.contactInfo.phone}
                </Link>
              </div>

              {/* Email */}
              <div className="group rounded-xl border border-slate-200 bg-white p-4 lg:p-2 xl:p-4 shadow-sm transition hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </p>
                <Link
                  href={`mailto:${ctaContent.contactInfo.email}`}
                  className="mt-1 block text-sm lg:text-xs xl:text-sm font-semibold text-slate-900 transition group-hover:text-indigo-600"
                >
                  {ctaContent.contactInfo.email}
                </Link>
              </div>

              {/* Location */}
              <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Location
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {ctaContent.contactInfo.address}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Illustration */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background accent - reduced opacity/blur for cleaner look behind illustration */}
              <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-400 to-violet-400 opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 opacity-20 blur-3xl"></div>

              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20">
                {/* Embed the generated illustration here. I will use the path of the generated image.
                    Wait, I can't hardcode the dynamic generated path unless I know it.
                    I should use the artifact mechanism or move the file to public/images
                    for direct Next.js usage.
                    Since I cannot move files to 'public' easily without exact path knowledge of where 'public' is relative to here
                    (it is usually src/../public or similar).
                    I will check file structure for public folder.
                 */}
                {/* For now I'll use a placeholder or assume I'm copying the image.
                      Let's check if I can just reference a local public image.
                      I generated the image in artifacts. I should probably move it to the project.
                   */}
                {/* I'll use a standard path and assume I'll copy the file in next step. */}
                <Image
                  src="/images/tech-career-illustration.png"
                  alt="Tech Career Success"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnrollModal
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        source={popupSource}
        courseName={courseName}
        location={data.location}
      />
    </section>
  );
};

export default CTASection;
