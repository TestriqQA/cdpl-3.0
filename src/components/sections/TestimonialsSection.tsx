"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Briefcase, TrendingUp } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  testimonial: string;
  course: string;
  salaryHike: string;
  previousRole?: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <Quote className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < testimonial.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
        &quot;{testimonial.testimonial}&quot;
      </p>

      {/* Course Badge */}
      <div className="mb-4">
        <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
          {testimonial.course}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 pt-4 mt-auto">
        {/* Profile Section */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
              {testimonial.name.charAt(0)}
            </div>
          </div>
          <div className="flex-grow">
            <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Briefcase className="w-4 h-4" />
              <span>{testimonial.role}</span>
            </div>
            <p className="text-blue-600 font-semibold text-sm">{testimonial.company}</p>
          </div>
        </div>

        {/* Success Metrics */}
        {testimonial.salaryHike && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-600">Salary Hike</p>
              <p className="font-bold text-green-700">{testimonial.salaryHike}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior QA Engineer",
      company: "Tech Mahindra",
      image: "/testimonial_images/priya.jpg",
      rating: 5,
      testimonial:
        "The Advanced Software Testing course completely transformed my career. The hands-on projects and expert guidance helped me transition from manual testing to automation. Within 3 months of completing the course, I landed my dream job with a 60% salary hike!",
      course: "Software Testing",
      salaryHike: "60% Increase",
      previousRole: "Manual Tester",
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Data Scientist",
      company: "Accenture",
      image: "/testimonial_images/rahul.jpg",
      rating: 5,
      testimonial:
        "I was a complete beginner in Data Science, but the structured curriculum and supportive instructors made learning easy. The real-world projects gave me the confidence to crack interviews at top companies. Best investment in my career!",
      course: "Data Science & AI/ML",
      salaryHike: "8 LPA Package",
    },
    {
      id: 3,
      name: "Sneha Patel",
      role: "Full Stack Developer",
      company: "Infosys",
      image: "/testimonial_images/sneha.jpg",
      rating: 5,
      testimonial:
        "The Full Stack Development program exceeded my expectations. From React to Node.js, everything was covered in depth with live projects. The placement support was outstanding—I got 5 interview calls within 2 weeks of completing the course!",
      course: "Full Stack Development",
      salaryHike: "100% Hike",
      previousRole: "Junior Developer",
    },
    {
      id: 4,
      name: "Amit Kumar",
      role: "Automation Test Lead",
      company: "Wipro",
      image: "/testimonial_images/amit.jpg",
      rating: 5,
      testimonial:
        "After 5 years in manual testing, I wanted to upskill. This course not only taught me Selenium and API testing but also helped me understand the complete SDLC. The career mentorship was invaluable. Highly recommended for working professionals!",
      course: "Advanced Automation Testing",
      salaryHike: "75% Increase",
    },
    {
      id: 5,
      name: "Ananya Reddy",
      role: "ML Engineer",
      company: "Amazon",
      image: "/testimonial_images/ananya.jpg",
      rating: 5,
      testimonial:
        "The depth of knowledge covered in the AI/ML program is incredible. From basic Python to advanced deep learning, every concept was explained with practical examples. The instructors are industry experts who genuinely care about student success.",
      course: "Data Science & AI/ML",
      salaryHike: "12 LPA Package",
    },
    {
      id: 6,
      name: "Vikram Singh",
      role: "DevOps Engineer",
      company: "TCS",
      image: "/testimonial_images/vikram.jpg",
      rating: 5,
      testimonial:
        "I switched from a non-IT background to tech after completing the Full Stack course. The trainers were patient, the content was up-to-date, and the placement team worked tirelessly to get me interviews. Today, I'm living my dream as a developer!",
      course: "Full Stack Development",
      salaryHike: "Career Switch",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              Student Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Real Stories,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Real Success
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our students who have successfully transformed their careers 
            and achieved their professional goals with our training programs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {currentTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden lg:flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonials"
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-blue-600 to-purple-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              aria-label="Next testimonials"
              disabled={currentIndex === totalPages - 1}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation - Mobile */}
          <div className="flex lg:hidden items-center justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-blue-600 to-purple-600"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">4.9/5</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <p className="text-white/90">Average Student Rating</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">95%</div>
              <p className="text-white/90">Students Recommend Us</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">5000+</div>
              <p className="text-white/90">Success Stories</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            Want to be our next success story?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
