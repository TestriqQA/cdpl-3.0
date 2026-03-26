"use client";

import React from "react";
import { easeOut, motion } from "framer-motion";
import { Award, Users, Clock, MapPin, Sparkles } from "lucide-react";
import ReviewsMarquee from "../sections/ReviewMarque";

interface Reason {
  icon: "Award" | "Users" | "Clock" | "MapPin" | string;
  title: string;
  stats: string;
  description: string;
}

interface Testimonial {
  rating?: number | string; // may come as "4.5", "5", etc.
  text?: string;
  author?: string;
  role?: string;
}

interface WhyChooseContent {
  title: string;
  subtitle: string;
  reasons: Reason[];
  testimonial?: Testimonial; // make it optional to avoid crashes
}

interface WhyChooseSectionProps {
  data?: { whyChooseContent: WhyChooseContent };
}

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-7 h-7" />,
  Users: <Users className="w-7 h-7" />,
  Clock: <Clock className="w-7 h-7" />,
  MapPin: <MapPin className="w-7 h-7" />,
};

// Fallback for preview
const mockData: WhyChooseSectionProps["data"] = {
  whyChooseContent: {
    title: "Excellence in Every Detail",
    subtitle:
      "Join thousands of successful students who transformed their careers with our proven methodology",
    reasons: [
      {
        icon: "Award",
        title: "Industry Certified",
        stats: "100% Certified",
        description:
          "Get globally recognized certifications that open doors to top companies worldwide",
      },
      {
        icon: "Users",
        title: "Expert Mentors",
        stats: "50+ Instructors",
        description:
          "Learn from industry veterans with real-world experience in leading tech companies",
      },
      {
        icon: "Clock",
        title: "Flexible Learning",
        stats: "Learn Anytime",
        description:
          "Study at your own pace with lifetime access to all course materials and updates",
      },
      {
        icon: "MapPin",
        title: "Global Community",
        stats: "80+ Countries",
        description:
          "Connect with a worldwide network of learners and professionals in your field",
      },
    ],
    testimonial: {
      rating: 5,
      text: "This course completely transformed my career. The hands-on approach and expert guidance helped me land my dream job in just 3 months!",
      author: "Sarah Johnson",
      role: "Senior Developer at Google",
    },
  },
};

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ data = mockData }) => {
  const { whyChooseContent } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: easeOut } },
  };

  return (
    <section className="relative py-8 md:py-16 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-2 py-1 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-full mb-4 sm:mb-6"
            variants={itemVariants}
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-emerald-700 font-semibold text-[13px] uppercase tracking-wide">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            variants={itemVariants}
          >
            {whyChooseContent?.title ?? "Why Choose Us"}
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {whyChooseContent?.subtitle ?? ""}
          </motion.p>
        </motion.div>

        {/* Marquee Review */}
        <ReviewsMarquee />

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 mt-10 mb-12 sm:mb-16 lg:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {(whyChooseContent?.reasons ?? []).map((reason, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="relative h-full bg-white rounded-2xl p-6 sm:p-7 lg:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-teal-50/0 to-blue-50/0 group-hover:from-emerald-50 group-hover:via-teal-50 group-hover:to-blue-50 transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-100 via-teal-100 to-blue-100 blur-xl opacity-30" />
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl sm:rounded-2xl text-emerald-600 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm group-hover:shadow-lg">
                    {iconMap[reason.icon] ?? <Award className="w-7 h-7" />}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                    {reason.title}
                  </h3>

                  <div className="inline-block">
                    <span className="text-xs sm:text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                      {reason.stats}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {[
            { number: "5000+", label: "Students Trained" },
            { number: "92%", label: "Job Placement" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Mentor Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 lg:p-8 text-center hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-emerald-200 overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-teal-50/0 group-hover:from-emerald-50 group-hover:to-teal-50 transition-all duration-500" />
              <div className="relative z-10">
                <p className="text-2xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-semibold text-xs sm:text-sm lg:text-base">
                  {stat.label}
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-emerald-100/30 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
