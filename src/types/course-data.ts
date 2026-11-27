// The shape of one city course page (/software-testing-course-in-pune and the rest).
// The pages themselves are built in src/data/cities - see src/data/cities/index.ts.

export interface CourseData {
  slug: string;
  courseName: string;
  location: string;
  lat?: number;   // <-- ADD
  lng?: number;   // <-- ADD
  state: string;
  heroImage?: string; // Optional: OG image for social sharing
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  // NEW: specializations shown in the form's dropdown
  specializations?: string[];

  // Optional: supply your own breadcrumbs; otherwise the component builds a sensible default
  breadcrumbs?: Array<{ label: string; href: string }>;

  heroContent: {
    title: string;
    subtitle: string;
    description: string;
    certifications: string[];
    stats: { number: string; label: string; description: string }[];
    landmarks?: string[];
  };
  courseOverviewContent: {
    title: string;
    description: string;
    subtitle: string;
    modules: {
      icon: string;
      trending: boolean;
      name: string;
      description: string;
      topics: string[];
      link: string;
    }[];
  };
  curriculumContent: {
    title: string;
    subtitle: string;
    // UPDATED: multiple tracks (tabs). Each track has its own weeks list
    tracks: {
      id: string;     // stable key for tab + a11y
      title: string;  // tab label (your provided titles)
      weeks: {
        number: string;
        title: string;
        description: string;
        deliverables?: string[];
      }[];
    }[];
  };

  toolsFrameworkContent: {
    title: string;
    description: string;
    stats: {
      totalHours: string;
      projects: string;
      mentorSupport: string;
      jobPlacement: string;
    };
  };
  whyChooseContent: {
    title: string;
    subtitle: string;
    reasons: {
      icon: string;
      title: string;
      stats: string;
      description: string;
    }[];
    testimonial: {
      text: string;
      author: string;
      role: string;
      rating: number;
    };
  };
  projectsContent: {
    title: string;
    description: string;
    subtitle: string;
    projects: {
      name: string;
      description: string;
      skills: string[];
      difficulty: string;
    }[];
  };
  careerPathContent: {
    title: string;
    description: string;
    subtitle: string;
    paths: {
      role: string;
      trending: boolean;
      description: string;
      salaryRange: string;
      skills: string[];
      opportunities: string[];
    }[];
  };
  faqsContent: {
    title: string;
    subtitle: string;
    faqs: { question: string; answer: string }[];
  };
  ctaContent: {
    title: string;
    description: string;
    subtitle: string;
    benefits?: string[];
    contactInfo: {
      phone: string;
      email: string;
      address: string;
    };
  };
  courseDetails: {
    duration: string;
    level: string;
    language: string;
    price: string;
    discountedPrice?: string;
  };

  // =========================================================================
  // LOCALIZED CONTENT — SEO FIX (April 2026)
  // =========================================================================
  // These optional fields provide unique, city-specific content to
  // differentiate city-course pages from each other. Without them, Google
  // classifies 765 near-identical pages as "thin content" and refuses to
  // index them ("Crawled – currently not indexed").
  //
  // When present, these OVERRIDE the generic equivalents on the page.
  // =========================================================================

  /** City-specific FAQs that reference local context (job market, landmarks, companies) */
  localizedFaqs?: { question: string; answer: string }[];

  /** City-specific testimonials from students in that city */
  localizedTestimonials?: {
    text: string;
    author: string;
    role: string;
    rating: number;
  }[];

  /** A paragraph about the local job market, IT ecosystem, and hiring trends */
  localJobMarketInsight?: string;

  /** City-specific salary data or industry stats */
  localSalaryInsight?: string;
}
