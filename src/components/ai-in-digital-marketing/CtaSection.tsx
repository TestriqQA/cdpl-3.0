"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";

export default function CtaSection() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const courseName = "Master Digital Marketing & AI for Business Owners";
  return (
    <section className="py-10 bg-gradient-to-r from-slate-900 via-brand to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to 10X Your Business with <br className="hidden md:block" /> AI & Marketing Automation?
          </h2>

          {/* Subheading (original content + SEO boost) */}
          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
            Join hundreds of successful entrepreneurs, freelancers, and business
            owners who have scaled their revenue with our program. This{" "}
            <strong>AI-powered digital marketing course for business</strong> is designed to
            help you generate consistent leads, automate sales, and build a
            brand that dominates your local market using{" "}
            <em>marketing automation, SEO, and AI tools</em>.
          </p>

          {/* Key Benefits – using your original 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">⏱️</div>
              <p className="text-white font-semibold">3-Month Program</p>
              <p className="text-orange-100 text-sm mt-2">
                6 hours/week commitment
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🎓</div>
              <p className="text-white font-semibold">Industry Certified</p>
              <p className="text-orange-100 text-sm mt-2">
                Recognized certifications
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">💼</div>
              <p className="text-white font-semibold">Lifetime Support</p>
              <p className="text-orange-100 text-sm mt-2">
                1:1 consultation &amp; guidance
              </p>
            </div>
          </div>

          {/* CTA Buttons – same text as yours, layout from reference */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="group flex items-center justify-center bg-white text-brand hover:bg-orange-50 font-bold px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              Enroll Now &amp; Get 20% OFF
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <Link href="https://calendar.app.google/tvh9dsXZsX9BujRR8" title="Schedule Free Consultation" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-lg transition-all flex items-center justify-center">
              Schedule Free Consultation
            </Link>
          </div>

          {/* Limited Time Offer – keep your content, new styling */}
          <div className="bg-orange-500/20 border-2 border-orange-400 rounded-lg p-6 mb-10">
            <p className="text-orange-200 font-semibold mb-2">
              🎉 Limited Time Offer
            </p>
            <p className="text-white text-lg font-bold">
              Early Bird Discount: 20% OFF + Free 1:1 Consultation
            </p>
            <p className="text-slate-300 text-sm mt-2">
              Offer valid for the next 50 enrollments only. Secure your seat in
              this <strong>business-focused Digital Marketing &amp; AI masterclass</strong>{" "}
              and start scaling your business with proven{" "}
              <em>growth strategies, funnels, and automation systems</em>.
            </p>
          </div>

          {/* What's Included – extra SEO-rich value list */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">
              What&apos;s Included in the Digital Marketing &amp; AI Program
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                "3-month structured Digital Marketing & AI program with weekly live sessions",
                "Complete training on SEO, Google Ads, Meta Ads, email marketing & funnel strategy",
                "Hands-on practice with AI tools like ChatGPT for copywriting, ad creation & content strategy",
                "Real-world projects to build a client-ready or job-ready digital marketing portfolio",
                "Guidance on building your own agency or freelance digital marketing business",
                "Templates for landing pages, ad creatives, lead magnets & marketing automation flows",
                "Lifetime access to updates, future masterclasses & strategy sessions",
                "Dedicated support for campaign troubleshooting, scaling and optimization",
                "Proven frameworks for lead generation, offer positioning & high-conversion campaigns",
                "Best practices for marketing analytics, tracking, and ROI-focused decision-making",
                "Step-by-step roadmap to get your first paying client or scale existing business revenue",
                "Community access for networking with entrepreneurs, freelancers & marketers",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info – your content, reference layout */}
        <div className="mt-16 text-center border-t border-white/10 pt-8">
          <p className="text-slate-300 mb-4">
            Questions? Get in touch with us for{" "}
            <strong>fees, batch timing, and enrollment support</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
            <Link
              href="tel:+917888383788"
              title="Call us at +91 788-83-83-788"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <span>📞</span> +91 788-83-83-788
            </Link>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <Link
              href="mailto:contact@cinutedigital.com"
              title="Email us at contact@cinutedigital.com"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <span>✉️</span> contact@cinutedigital.com
            </Link>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-slate-500 max-w-3xl mx-auto">
            Keywords: <em>digital marketing course with AI</em>,{" "}
            <em>digital marketing program for entrepreneurs</em>,{" "}
            <em>business marketing course</em>,{" "}
            <em>online digital marketing course with business mentorship</em>,{" "}
            <em>marketing automation training</em>.
          </p>
        </div>
      </div>
      <EnrollModal
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
        source="AI Digital Marketing - CTA Section - Enroll"
        courseName={courseName}
      />
    </section>
  );
}
