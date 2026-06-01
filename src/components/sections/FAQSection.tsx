"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const FAQItem = ({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-semibold text-gray-900 pr-8 text-lg">{faq.question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen ? "bg-blue-600 text-white rotate-180" : "bg-gray-100 text-gray-600"
        }`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const faqs: FAQ[] = [
    {
      question: "What are the prerequisites for enrolling in your courses?",
      answer: "Most of our courses are designed for beginners and don't require any prior technical knowledge. However, for advanced courses like Data Science or Full Stack Development, basic programming knowledge is recommended. Our counselors will help you choose the right course based on your background and career goals.",
      category: "general",
    },
    {
      question: "Do you provide placement assistance after course completion?",
      answer: "Yes! We offer placement assistance to all our students. Our dedicated placement cell provides unlimited interview opportunities, resume building support, LinkedIn optimization, mock interviews, and direct connections with our our hiring partner network. We continue supporting you until you land your desired job.",
      category: "placement",
    },
    {
      question: "What is the difference between classroom and online training?",
      answer: "Both formats offer the same curriculum and quality of instruction. Classroom training is conducted at our physical centers with face-to-face interaction, while online training is conducted via live interactive sessions where you can see the instructor, ask questions in real-time, and collaborate with peers. Both include hands-on projects, recorded sessions for revision, and lifetime access to course materials.",
      category: "general",
    },
    {
      question: "Can I switch between weekday and weekend batches?",
      answer: "Yes, we offer flexible batch timings to accommodate working professionals and students. You can switch between weekday and weekend batches based on your schedule. Additionally, if you miss any class, you can attend the same topic in another batch or access the recorded session.",
      category: "general",
    },
    {
      question: "What kind of certification will I receive?",
      answer: "Upon successful completion of the course, you'll receive an industry-recognized certification from our institute. For select courses, you'll also receive additional certifications from global bodies and technology partners. These certifications are valued by employers worldwide and can be added to your resume and LinkedIn profile.",
      category: "certification",
    },
    {
      question: "Do you offer EMI or installment payment options?",
      answer: "Yes, we understand that investing in education is a big decision. We offer flexible payment plans including EMI options with 0% interest for up to 12 months. You can also pay in installments without any additional charges. Contact our admissions team to discuss payment options that work best for you.",
      category: "payment",
    },
    {
      question: "How are the instructors selected? What is their experience?",
      answer: "All our instructors are industry professionals with extensive hands-on experience in their respective domains. They have worked with top MNCs and product companies, and are passionate about teaching. Our trainers undergo a rigorous selection process and regular training to ensure they deliver the best learning experience.",
      category: "general",
    },
    {
      question: "Will I get hands-on project experience during the course?",
      answer: "Absolutely! Our courses follow an 80:20 approach—80% hands-on practice and 20% theory. You'll work on 10+ real-world projects and case studies throughout the course. Additionally, we provide an integrated internship where you'll work on live client projects, giving you practical experience that employers value.",
      category: "curriculum",
    },
    {
      question: "What if I miss a class or need to take a break?",
      answer: "We understand that life happens! If you miss a class, you can attend the same topic in another ongoing batch, or access the recorded session available on our learning portal. If you need to take an extended break, you can pause your course and resume with the next batch without any additional fees.",
      category: "general",
    },
    {
      question: "How long will I have access to course materials?",
      answer: "You'll get lifetime access to all course materials, including video recordings, presentations, code samples, and project files. You can revisit the content anytime for revision or reference. We also provide lifetime access to our alumni community and job portal.",
      category: "general",
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 7-day money-back guarantee. If you're not satisfied with the course within the first week, we'll provide a full refund—no questions asked. This shows our confidence in the quality of our training. However, we encourage you to attend a free demo class before enrolling to ensure the course meets your expectations.",
      category: "payment",
    },
    {
      question: "Can I get a job guarantee after completing the course?",
      answer: "While we cannot legally guarantee a job, we provide placement assistance with unlimited interview opportunities. Most students get placed within 3-6 months of course completion. We work closely with you on resume building, interview preparation, and connecting you with our hiring partners until you secure a job.",
      category: "placement",
    },
  ];

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "general", name: "General" },
    { id: "placement", name: "Placement" },
    { id: "curriculum", name: "Curriculum" },
    { id: "certification", name: "Certification" },
    { id: "payment", name: "Payment" },
  ];

  const filteredFAQs = selectedCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers! Find everything you need to know about 
            our courses, training methodology, and placement support.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-10 text-center shadow-xl">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Still Have Questions?
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            Our team is here to help! Get in touch with us for personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Talk to Our Counselor
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
