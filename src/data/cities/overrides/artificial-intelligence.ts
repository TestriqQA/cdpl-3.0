// What is different on one city's Artificial Intelligence page, keyed by city slug.
// A field set here replaces the template's value for that page only; `undefined`
// removes it. `use` picks a shared version from ../variants/artificial-intelligence.ts.
// Cities with nothing different are not listed.

import type { CityOverrides } from "../types";

export const artificialIntelligenceOverrides: CityOverrides = {
  delhi: {
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Delhi, Delhi, India",
      },
    },
    use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" },
  },
  mumbai: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  kolkata: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  chennai: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  bengaluru: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  hyderabad: {
    heroContent: { landmarks: ["Charminar", "Chowmahalla Palace", "Golconda Fort"] },
    use: { heroImage: "v2", "metadata.keywords": "v2" },
  },
  ahmedabad: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  pune: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  jaipur: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  lucknow: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  kochi: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  coimbatore: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  chandigarh: {
    state: "Punjab/Haryana",
    use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" },
  },
  indore: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  nagpur: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  visakhapatnam: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  surat: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  bhopal: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  thiruvananthapuram: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  bhubaneswar: { use: { heroImage: "v2", "metadata.keywords": "v2", "heroContent.landmarks": "v2" } },
  churchgate: {
    location: "Churchgate Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Churchgate | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Churchgate Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Churchgate.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Churchgate Station", href: "/artificial-intelligence-course-in-churchgate" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Churchgate?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Churchgate?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Churchgate, Maharashtra, India",
      },
    },
  },
  "marine-lines": {
    location: "Marine Lines Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Marine Lines | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Marine Lines Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Marine Lines.",
      keywords: "artificial intelligence course marine lines, ai training marine lines, machine learning course marine lines, deep learning course, nlp course marine lines, ai certification marine lines",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Marine Lines Station", href: "/artificial-intelligence-course-in-marine-lines" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Marine Lines?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Marine Lines?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Marine Lines, Maharashtra, India",
      },
    },
  },
  "charni-road": {
    location: "Charni Road Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Charni Road | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Charni Road Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Charni Road.",
      keywords: "artificial intelligence course charni road, ai training charni road, machine learning course charni road, deep learning course, nlp course charni road, ai certification charni road",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Charni Road Station", href: "/artificial-intelligence-course-in-charni-road" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Charni Road?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Charni Road?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Charni Road, Maharashtra, India",
      },
    },
  },
  "grant-road": {
    location: "Grant Road Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Grant Road | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Grant Road Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Grant Road.",
      keywords: "artificial intelligence course grant road, ai training grant road, machine learning course grant road, deep learning course, nlp course grant road, ai certification grant road",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Grant Road Station", href: "/artificial-intelligence-course-in-grant-road" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Grant Road?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Grant Road?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Grant Road, Maharashtra, India",
      },
    },
  },
  "mumbai-central": {
    location: "Mumbai Central Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Mumbai Central | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Mumbai Central Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Mumbai Central.",
      keywords: "artificial intelligence course mumbai central, ai training mumbai central, machine learning course mumbai central, deep learning course, nlp course mumbai central, ai certification mumbai central",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Mumbai Central Station", href: "/artificial-intelligence-course-in-mumbai-central" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Mumbai Central?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Mumbai Central?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Mumbai Central, Maharashtra, India",
      },
    },
  },
  mahalaxmi: {
    location: "Mahalaxmi Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Mahalaxmi | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Mahalaxmi Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Mahalaxmi.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Mahalaxmi Station", href: "/artificial-intelligence-course-in-mahalaxmi" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Mahalaxmi?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Mahalaxmi?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Mahalaxmi, Maharashtra, India",
      },
    },
  },
  "lower-parel": {
    location: "Lower Parel Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Lower Parel | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Lower Parel Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Lower Parel.",
      keywords: "artificial intelligence course lower parel, ai training lower parel, machine learning course lower parel, deep learning course, nlp course lower parel, ai certification lower parel",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Lower Parel Station", href: "/artificial-intelligence-course-in-lower-parel" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Lower Parel?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Lower Parel?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Lower Parel, Maharashtra, India",
      },
    },
  },
  "elphinstone-road": {
    metadata: {
      title: "Artificial Intelligence Course in Elphinstone Road | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Elphinstone Road Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Elphinstone Road.",
      keywords: "artificial intelligence course elphinstone road, ai training elphinstone road, machine learning course elphinstone road, deep learning course, nlp course elphinstone road, ai certification elphinstone road",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Elphinstone Road Station", href: "/artificial-intelligence-course-in-elphinstone-road" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Elphinstone Road?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Elphinstone Road?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Elphinstone Road, Maharashtra, India",
      },
    },
  },
  dadar: {
    location: "Dadar Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Dadar | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Dadar Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Dadar.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Dadar Station", href: "/artificial-intelligence-course-in-dadar" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Dadar?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Dadar?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Dadar, Maharashtra, India",
      },
    },
  },
  "matunga-road": {
    location: "Matunga Road Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Matunga Road | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Matunga Road Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Matunga Road.",
      keywords: "artificial intelligence course matunga road, ai training matunga road, machine learning course matunga road, deep learning course, nlp course matunga road, ai certification matunga road",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Matunga Road Station", href: "/artificial-intelligence-course-in-matunga-road" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Matunga Road?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Matunga Road?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Matunga Road, Maharashtra, India",
      },
    },
  },
  "mahim-junction": {
    location: "Mahim Junction Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Mahim Junction | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Mahim Junction Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Mahim Junction.",
      keywords: "artificial intelligence course mahim junction, ai training mahim junction, machine learning course mahim junction, deep learning course, nlp course mahim junction, ai certification mahim junction",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Mahim Junction Station", href: "/artificial-intelligence-course-in-mahim-junction" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Mahim Junction?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Mahim Junction?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Mahim Junction, Maharashtra, India",
      },
    },
  },
  bandra: {
    location: "Bandra Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Bandra | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Bandra Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Bandra.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Bandra Station", href: "/artificial-intelligence-course-in-bandra" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Bandra?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Bandra?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Bandra, Maharashtra, India",
      },
    },
  },
  "khar-road": {
    location: "Khar Road Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Khar Road | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Khar Road Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Khar Road.",
      keywords: "artificial intelligence course khar road, ai training khar road, machine learning course khar road, deep learning course, nlp course khar road, ai certification khar road",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Khar Road Station", href: "/artificial-intelligence-course-in-khar-road" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Khar Road?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Khar Road?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Khar Road, Maharashtra, India",
      },
    },
  },
  santacruz: {
    location: "Santacruz Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Santacruz | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Santacruz Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Santacruz.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Santacruz Station", href: "/artificial-intelligence-course-in-santacruz" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Santacruz?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Santacruz?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Santacruz, Maharashtra, India",
      },
    },
  },
  "vile-parle": {
    location: "Vile Parle Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Vile Parle | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Vile Parle Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Vile Parle.",
      keywords: "artificial intelligence course vile parle, ai training vile parle, machine learning course vile parle, deep learning course, nlp course vile parle, ai certification vile parle",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Vile Parle Station", href: "/artificial-intelligence-course-in-vile-parle" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Vile Parle?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Vile Parle?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Vile Parle, Maharashtra, India",
      },
    },
  },
  andheri: {
    location: "Andheri Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Andheri | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Andheri Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Andheri.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Andheri Station", href: "/artificial-intelligence-course-in-andheri" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Andheri?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Andheri?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Andheri, Maharashtra, India",
      },
    },
  },
  jogeshwari: {
    location: "Jogeshwari Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Jogeshwari | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Jogeshwari Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Jogeshwari.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Jogeshwari Station", href: "/artificial-intelligence-course-in-jogeshwari" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Jogeshwari?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Jogeshwari?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Jogeshwari, Maharashtra, India",
      },
    },
  },
  goregaon: {
    location: "Goregaon Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Goregaon | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Goregaon Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Goregaon.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Goregaon Station", href: "/artificial-intelligence-course-in-goregaon" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Goregaon?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Goregaon?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Goregaon, Maharashtra, India",
      },
    },
  },
  malad: {
    location: "Malad Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Malad | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Malad Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Malad.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Malad Station", href: "/artificial-intelligence-course-in-malad" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Malad?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Malad?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Malad, Maharashtra, India",
      },
    },
  },
  kandivali: {
    location: "Kandivali Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Kandivali | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Kandivali Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Kandivali.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Kandivali Station", href: "/artificial-intelligence-course-in-kandivali" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Kandivali?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Kandivali?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Kandivali, Maharashtra, India",
      },
    },
  },
  borivali: {
    location: "Borivali Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Borivali | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Borivali Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Borivali.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Borivali Station", href: "/artificial-intelligence-course-in-borivali" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Borivali?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Borivali?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Borivali, Maharashtra, India",
      },
    },
  },
  dahisar: {
    location: "Dahisar Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Dahisar | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Dahisar Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Dahisar.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Dahisar Station", href: "/artificial-intelligence-course-in-dahisar" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Dahisar?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Dahisar?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Dahisar, Maharashtra, India",
      },
    },
  },
  "mira-road": {
    location: "Mira Road Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Mira Road | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Mira Road Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Mira Road.",
      keywords: "artificial intelligence course mira road, ai training mira road, machine learning course mira road, deep learning course, nlp course mira road, ai certification mira road",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Mira Road Station", href: "/artificial-intelligence-course-in-mira-road" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Mira Road?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Mira Road?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Mira Road, Maharashtra, India",
      },
    },
  },
  bhayandar: {
    location: "Bhayandar, Mumbai",
    metadata: {
      description: "Join the comprehensive Artificial Intelligence course in Bhayandar, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Bhayandar.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Bhayandar", href: "/artificial-intelligence-course-in-bhayandar" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Bhayandar?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Bhayandar?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Bhayandar, Maharashtra, India",
      },
    },
  },
  naigaon: {
    location: "Naigaon Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Naigaon | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Naigaon Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Naigaon.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Naigaon Station", href: "/artificial-intelligence-course-in-naigaon" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Naigaon?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Naigaon?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Naigaon, Maharashtra, India",
      },
    },
  },
  "vasai-road": {
    location: "Vasai Road Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Vasai Road | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Vasai Road Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Vasai Road.",
      keywords: "artificial intelligence course vasai road, ai training vasai road, machine learning course vasai road, deep learning course, nlp course vasai road, ai certification vasai road",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Vasai Road Station", href: "/artificial-intelligence-course-in-vasai-road" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Vasai Road?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Vasai Road?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Vasai Road, Maharashtra, India",
      },
    },
  },
  virar: {
    location: "Virar Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Virar | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Virar Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Virar.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Virar Station", href: "/artificial-intelligence-course-in-virar" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Virar?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Virar?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Virar, Maharashtra, India",
      },
    },
  },
  palghar: {
    location: "Palghar Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Palghar | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Palghar Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Palghar.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Palghar Station", href: "/artificial-intelligence-course-in-palghar" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Palghar?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Palghar?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Palghar, Maharashtra, India",
      },
    },
  },
  "dahanu-road": {
    location: "Dahanu Road Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Dahanu Road | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Dahanu Road Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Dahanu Road.",
      keywords: "artificial intelligence course dahanu road, ai training dahanu road, machine learning course dahanu road, deep learning course, nlp course dahanu road, ai certification dahanu road",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Dahanu Road Station", href: "/artificial-intelligence-course-in-dahanu-road" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Dahanu Road?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Dahanu Road?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Dahanu Road, Maharashtra, India",
      },
    },
  },
  "chhatrapati-shivaji-maharaj-terminus": {
    metadata: {
      title: "Artificial Intelligence Course in Chhatrapati Shivaji Maharaj Terminus | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Chhatrapati Shivaji Maharaj Terminus Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Chhatrapati Shivaji Maharaj Terminus.",
      keywords: "artificial intelligence course chhatrapati shivaji maharaj terminus, ai training chhatrapati shivaji maharaj terminus, machine learning course chhatrapati shivaji maharaj terminus, deep learning course, nlp course chhatrapati shivaji maharaj terminus, ai certification chhatrapati shivaji maharaj terminus",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      {
        label: "Chhatrapati Shivaji Maharaj Terminus Station",
        href: "/artificial-intelligence-course-in-chhatrapati-shivaji-maharaj-terminus",
      },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Chhatrapati Shivaji Maharaj Terminus?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Chhatrapati Shivaji Maharaj Terminus?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Chhatrapati Shivaji Maharaj Terminus, Maharashtra, India",
      },
    },
  },
  byculla: {
    location: "Byculla Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Byculla | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Byculla Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Byculla.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Byculla Station", href: "/artificial-intelligence-course-in-byculla" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Byculla?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Byculla?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Byculla, Maharashtra, India",
      },
    },
  },
  kurla: {
    location: "Kurla Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Kurla | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Kurla Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Kurla.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Kurla Station", href: "/artificial-intelligence-course-in-kurla" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Kurla?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Kurla?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Kurla, Maharashtra, India",
      },
    },
  },
  ghatkopar: {
    location: "Ghatkopar Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Ghatkopar | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Ghatkopar Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Ghatkopar.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Ghatkopar Station", href: "/artificial-intelligence-course-in-ghatkopar" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Ghatkopar?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Ghatkopar?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Ghatkopar, Maharashtra, India",
      },
    },
  },
  vikhroli: {
    location: "Vikhroli Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Vikhroli | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Vikhroli Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Vikhroli.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Vikhroli Station", href: "/artificial-intelligence-course-in-vikhroli" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Vikhroli?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Vikhroli?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Vikhroli, Maharashtra, India",
      },
    },
  },
  thane: {
    location: "Thane Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Thane | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Thane Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Thane.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Thane Station", href: "/artificial-intelligence-course-in-thane" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Thane?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Thane?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Thane, Maharashtra, India",
      },
    },
  },
  dombivli: {
    location: "Dombivli Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Dombivli | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Dombivli Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Dombivli.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Dombivli Station", href: "/artificial-intelligence-course-in-dombivli" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Dombivli?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Dombivli?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Dombivli, Maharashtra, India",
      },
    },
  },
  "kalyan-junction": {
    metadata: {
      title: "Artificial Intelligence Course in Kalyan Junction | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Kalyan Junction Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Kalyan Junction.",
      keywords: "artificial intelligence course kalyan junction, ai training kalyan junction, machine learning course kalyan junction, deep learning course, nlp course kalyan junction, ai certification kalyan junction",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Kalyan Junction Station", href: "/artificial-intelligence-course-in-kalyan-junction" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Kalyan Junction?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Kalyan Junction?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Kalyan Junction, Maharashtra, India",
      },
    },
  },
  ulhasnagar: {
    location: "Ulhasnagar Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Ulhasnagar | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Ulhasnagar Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Ulhasnagar.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Ulhasnagar Station", href: "/artificial-intelligence-course-in-ulhasnagar" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Ulhasnagar?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Ulhasnagar?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Ulhasnagar, Maharashtra, India",
      },
    },
  },
  ambernath: {
    location: "Ambernath Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Ambernath | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Ambernath Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Ambernath.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Ambernath Station", href: "/artificial-intelligence-course-in-ambernath" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Ambernath?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Ambernath?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Ambernath, Maharashtra, India",
      },
    },
  },
  badlapur: {
    location: "Badlapur Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Badlapur | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Badlapur Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Badlapur.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Badlapur Station", href: "/artificial-intelligence-course-in-badlapur" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Badlapur?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Badlapur?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Badlapur, Maharashtra, India",
      },
    },
  },
  karjat: {
    location: "Karjat Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Karjat | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Karjat Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Karjat.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Karjat Station", href: "/artificial-intelligence-course-in-karjat" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Karjat?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Karjat?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Karjat, Maharashtra, India",
      },
    },
  },
  khopoli: {
    location: "Khopoli Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Khopoli | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Khopoli Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Khopoli.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Khopoli Station", href: "/artificial-intelligence-course-in-khopoli" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Khopoli?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Khopoli?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Khopoli, Maharashtra, India",
      },
    },
  },
  "sandhurst-road": {
    location: "Sandhurst Road Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Sandhurst Road | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Sandhurst Road Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Sandhurst Road.",
      keywords: "artificial intelligence course sandhurst road, ai training sandhurst road, machine learning course sandhurst road, deep learning course, nlp course sandhurst road, ai certification sandhurst road",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Sandhurst Road Station", href: "/artificial-intelligence-course-in-sandhurst-road" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Sandhurst Road?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Sandhurst Road?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Sandhurst Road, Maharashtra, India",
      },
    },
  },
  "dockyard-road": {
    location: "Dockyard Road Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Dockyard Road | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Dockyard Road Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Dockyard Road.",
      keywords: "artificial intelligence course dockyard road, ai training dockyard road, machine learning course dockyard road, deep learning course, nlp course dockyard road, ai certification dockyard road",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Dockyard Road Station", href: "/artificial-intelligence-course-in-dockyard-road" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Dockyard Road?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Dockyard Road?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Dockyard Road, Maharashtra, India",
      },
    },
  },
  "reay-road": {
    location: "Reay Road Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Reay Road | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Reay Road Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Reay Road.",
      keywords: "artificial intelligence course reay road, ai training reay road, machine learning course reay road, deep learning course, nlp course reay road, ai certification reay road",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Reay Road Station", href: "/artificial-intelligence-course-in-reay-road" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Reay Road?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Reay Road?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Reay Road, Maharashtra, India",
      },
    },
  },
  "wadala-road": {
    location: "Wadala Road Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Wadala Road | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Wadala Road Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Wadala Road.",
      keywords: "artificial intelligence course wadala road, ai training wadala road, machine learning course wadala road, deep learning course, nlp course wadala road, ai certification wadala road",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Wadala Road Station", href: "/artificial-intelligence-course-in-wadala-road" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Wadala Road?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Wadala Road?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Wadala Road, Maharashtra, India",
      },
    },
  },
  "guru-tegh-bahadur-nagar": {
    location: "Guru Tegh Bahadur Nagar Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Guru Tegh Bahadur Nagar | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Guru Tegh Bahadur Nagar Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Guru Tegh Bahadur Nagar.",
      keywords: "artificial intelligence course guru tegh bahadur nagar, ai training guru tegh bahadur nagar, machine learning course guru tegh bahadur nagar, deep learning course, nlp course guru tegh bahadur nagar, ai certification guru tegh bahadur nagar",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      {
        label: "Guru Tegh Bahadur Nagar Station",
        href: "/artificial-intelligence-course-in-guru-tegh-bahadur-nagar",
      },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Guru Tegh Bahadur Nagar?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Guru Tegh Bahadur Nagar?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Guru Tegh Bahadur Nagar, Maharashtra, India",
      },
    },
  },
  chunabhatti: {
    location: "Chunabhatti Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Chunabhatti | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Chunabhatti Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Chunabhatti.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Chunabhatti Station", href: "/artificial-intelligence-course-in-chunabhatti" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Chunabhatti?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Chunabhatti?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Chunabhatti, Maharashtra, India",
      },
    },
  },
  "tilak-nagar": {
    location: "Tilak Nagar Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Tilak Nagar | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Tilak Nagar Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Tilak Nagar.",
      keywords: "artificial intelligence course tilak nagar, ai training tilak nagar, machine learning course tilak nagar, deep learning course, nlp course tilak nagar, ai certification tilak nagar",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Tilak Nagar Station", href: "/artificial-intelligence-course-in-tilak-nagar" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Tilak Nagar?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Tilak Nagar?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Tilak Nagar, Maharashtra, India",
      },
    },
  },
  chembur: {
    location: "Chembur Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Chembur | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Chembur Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Chembur.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Chembur Station", href: "/artificial-intelligence-course-in-chembur" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Chembur?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Chembur?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Chembur, Maharashtra, India",
      },
    },
  },
  govandi: {
    location: "Govandi Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Govandi | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Govandi Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Govandi.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Govandi Station", href: "/artificial-intelligence-course-in-govandi" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Govandi?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Govandi?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Govandi, Maharashtra, India",
      },
    },
  },
  mankhur: {
    location: "Mankhur Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Mankhur | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Mankhur Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Mankhur.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Mankhur Station", href: "/artificial-intelligence-course-in-mankhur" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Mankhur?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Mankhur?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Mankhur, Maharashtra, India",
      },
    },
  },
  vashi: {
    location: "Vashi Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Vashi | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Vashi Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Vashi.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Vashi Station", href: "/artificial-intelligence-course-in-vashi" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Vashi?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Vashi?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Vashi, Maharashtra, India",
      },
    },
  },
  nerul: {
    location: "Nerul Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Nerul | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Nerul Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Nerul.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Nerul Station", href: "/artificial-intelligence-course-in-nerul" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Nerul?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Nerul?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Nerul, Maharashtra, India",
      },
    },
  },
  "belapur-cbd": {
    location: "Belapur CBD Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Belapur CBD | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Belapur CBD Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Belapur CBD.",
      keywords: "artificial intelligence course belapur cbd, ai training belapur cbd, machine learning course belapur cbd, deep learning course, nlp course belapur cbd, ai certification belapur cbd",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Belapur CBD Station", href: "/artificial-intelligence-course-in-belapur-cbd" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Belapur CBD?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Belapur CBD?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Belapur CBD, Maharashtra, India",
      },
    },
  },
  panvel: {
    location: "Panvel Station, Mumbai",
    metadata: {
      title: "Artificial Intelligence Course in Panvel | Comprehensive AI Training",
      description: "Join the comprehensive Artificial Intelligence course in Panvel Station, Mumbai. Learn Machine Learning, Deep Learning, NLP, and more from industry experts. placement assistance in Panvel.",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Artificial Intelligence", href: "/courses/artificial-intelligence-courses" },
      { label: "Panvel Station", href: "/artificial-intelligence-course-in-panvel" },
    ],
    whyChooseContent: { title: "Why Choose Our AI Course in Panvel?" },
    faqsContent: {
      faqs: [
        {
          question: "Is this AI course suitable for beginners in Panvel?",
          answer: "Yes, our curriculum starts with Python fundamentals and gradually moves to advanced AI and Deep Learning concepts.",
        },
        {
          question: "What is the placement record for AI graduates in this program?",
          answer: "Our graduates work at leading companies in {location_name} and across India.",
        },
        {
          question: "What are the prerequisites for the Artificial Intelligence course?",
          answer: "A basic understanding of mathematics and a strong desire to learn are the only prerequisites. No prior coding experience is required.",
        },
      ],
    },
    ctaContent: {
      contactInfo: {
        phone: "+91 84-889-889-84",
        email: "contact@cinutedigital.com",
        address: "AI Training Center, Panvel, Maharashtra, India",
      },
    },
  },
};
