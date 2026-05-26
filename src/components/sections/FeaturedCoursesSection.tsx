"use client";

import { useState, useEffect } from "react";
import {
  Clock,
  Users,
  Calendar,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  batchType: string;
  // NOTE: removed `nextBatch: string` — the field was set on every course
  // to a hard-coded date ("Oct 15, 2025" etc.) but never rendered (the
  // displayed countdown reads `nextBatchDate`, a dynamic +48h Date). Real
  // batch scheduling, when CDPL is ready to publish it, should come from
  // the Sanity `course` doc type (BLG-133) — not a stale TS constant.
  seatsLeft: number;
  enrolled: number;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  technologies: string[];
  features: string[];
  level: string;
  color: string;
}

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-2">
      <Clock className="w-4 h-4 text-red-500" />
      <div className="flex gap-1 font-mono text-sm font-semibold">
        <span className="bg-red-500 text-white px-2 py-1 rounded">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-gray-600">:</span>
        <span className="bg-red-500 text-white px-2 py-1 rounded">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-gray-600">:</span>
        <span className="bg-red-500 text-white px-2 py-1 rounded">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

const CourseCard = ({ course }: { course: Course }) => {
  const nextBatchDate = new Date();
  nextBatchDate.setHours(nextBatchDate.getHours() + 48); // 48 hours from now

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Card Header with Urgency Indicators */}
      <div className={`bg-gradient-to-r ${course.color} p-6 relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Badges */}
          <div className="flex items-center justify-between mb-4">
            <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
              {course.category}
            </span>
            <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <Zap className="w-3 h-3" />
              TRENDING
            </span>
          </div>

          {/* Course Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
            {course.title}
          </h3>

          {/* Rating and Enrolled */}
          <div className="flex items-center gap-4 text-white/90 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              <span className="font-semibold">{course.rating}</span>
              <span className="text-white/70">({course.reviews})</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{course.enrolled.toLocaleString('en-IN')} enrolled</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-grow flex flex-col">
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {course.technologies.length > 4 && (
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium">
              +{course.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Features */}
        <div className="space-y-2 mb-4">
          {course.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Course Info */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4 text-purple-500" />
            <span>{course.batchType}</span>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-red-700">Next batch starts in:</span>
            <CountdownTimer targetDate={nextBatchDate} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-brand">Only {course.seatsLeft} seats left!</span>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              HURRY!
            </span>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-200">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">
                ₹{course.price.toLocaleString('en-IN')}
              </span>
              <span className="text-lg text-gray-400 line-through">
                ₹{course.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            <span className="text-sm text-green-600 font-semibold">
              Save ₹{(course.originalPrice - course.price).toLocaleString('en-IN')}
            </span>
          </div>
          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-bold">
            {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 mt-auto">
          <button className={`flex-1 bg-gradient-to-r ${course.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2`}>
            Enroll Now
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-4 py-3 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
            Details
          </button>
        </div>
      </div>

      {/* Popular Badge */}
      {course.enrolled > 1000 && (
        <div className="absolute top-4 right-4">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            POPULAR
          </div>
        </div>
      )}
    </div>
  );
};

const FeaturedCoursesSection = () => {
  const courses: Course[] = [
    {
      id: "1",
      title: "Advanced Software Testing Masterclass",
      category: "Software Testing",
      description: "Master manual and automation testing with real-world projects. Learn Selenium, API testing, and modern QA practices.",
      duration: "8-10 Months",
      batchType: "Weekday & Weekend",
      seatsLeft: 3,
      enrolled: 2450,
      rating: 4.8,
      reviews: 1250,
      price: 45000,
      originalPrice: 75000,
      technologies: ["Selenium", "JIRA", "Postman", "MySQL", "TestNG"],
      features: [
        "100% Placement Assistance",
        "Live Projects & Internship",
        "Industry Certification",
      ],
      level: "Beginner to Advanced",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "2",
      title: "Data Science & AI/ML - Hero Program",
      category: "Data Science",
      description: "Comprehensive program covering Python, Machine Learning, Deep Learning, and AI with hands-on projects.",
      duration: "10-12 Months",
      batchType: "Weekday & Weekend",
      seatsLeft: 2,
      enrolled: 3200,
      rating: 4.9,
      reviews: 1890,
      price: 65000,
      originalPrice: 110000,
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Tableau"],
      features: [
        "Unlimited Interview Opportunities",
        "Real-world Case Studies",
        "Global Certification",
      ],
      level: "Intermediate to Advanced",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "3",
      title: "Full Stack Development - Master Program",
      category: "Web Development",
      description: "Build modern web applications using React, Node.js, MongoDB, and cloud technologies. Become a complete developer.",
      duration: "8-10 Months",
      batchType: "Weekday & Weekend",
      seatsLeft: 5,
      enrolled: 1850,
      rating: 4.7,
      reviews: 980,
      price: 55000,
      originalPrice: 90000,
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
      features: [
        "Portfolio Building Support",
        "Capstone Projects",
        "Career Mentorship",
      ],
      level: "Beginner to Advanced",
      color: "from-green-500 to-green-600",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Popular Courses
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Accelerate Your Career with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Industry-Aligned Courses
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our most sought-after programs designed by industry experts 
            to help you land your dream job in tech.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Courses
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
