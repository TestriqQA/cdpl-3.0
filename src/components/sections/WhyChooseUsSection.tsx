"use client";

import {
  Award,
  Users,
  Briefcase,
  BookOpen,
  Target,
  TrendingUp,
  Globe,
  HeartHandshake,
  GraduationCap,
  Lightbulb,
  Shield,
  Zap,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const FeatureCard = ({ icon, title, description, color, bgColor }: Feature) => {
  return (
    <div className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      {/* Decorative gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

      <div className="relative z-10">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${bgColor} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
          <div className={`${color.split(" ")[0].replace("from-", "text-")}`}>
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Animated border on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  const features: Feature[] = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry-Expert Trainers",
      description: "Learn from professionals with 10+ years of real-world experience in top MNCs and product companies.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "100% Placement Support",
      description: "Dedicated placement cell with unlimited interview opportunities until you land your dream job.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Hands-On Learning",
      description: "Work on 10+ real-world projects and case studies to build a strong portfolio that impresses recruiters.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Live Interactive Classes",
      description: "Engage in live sessions with doubt-clearing, peer learning, and personalized attention in small batches.",
      color: "from-orange-500 to-brand",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Certifications",
      description: "Earn industry-recognized certifications that add credibility to your resume and LinkedIn profile.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Flexible Learning Options",
      description: "Choose from weekday, weekend, or fast-track batches. Access lifetime recorded sessions and materials.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Career Mentorship",
      description: "Get personalized career guidance, resume building, LinkedIn optimization, and interview preparation.",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Strong Alumni Network",
      description: "Join a community of 5,000+ successful alumni working in top companies across the globe.",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Integrated Internship",
      description: "Gain practical work experience through our integrated internship program with real client projects.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Latest Curriculum",
      description: "Learn the most in-demand technologies and tools used by leading companies in 2025 and beyond.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Money-Back Guarantee",
      description: "We're so confident in our training quality that we offer a satisfaction guarantee on select programs.",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast-Track Your Career",
      description: "Our proven methodology helps you transition to your desired role 3x faster than self-learning.",
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-50",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Makes Us{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Different & Better
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            We don&apos;t just teach courses—we transform careers. Here&apos;s why thousands of
            students trust us with their professional growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of successful students who have already accelerated their careers
              with our industry-leading training programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Explore Courses
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Talk to Career Advisor
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection;
