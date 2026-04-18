import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import IstqbRegistrationContainer from "@/components/istqb-registration/IstqbRegistrationContainer";
import { generateIstqbRegistrationPageAllSchemas } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

import { generateStaticPageMetadata } from "@/lib/metadata-generator";

export const metadata = generateStaticPageMetadata({
  title: "ISTQB Registration | Testriq",
  description:
    "Register for ISTQB Certification with Testriq. Global recognition, lifetime validity, and expert guidance.",
  url: "/istqb-registration",
  image: "/og-images/istqb-registration-og.webp",
});

export default function IstqbRegistrationPage() {
  const istqbSchemas = generateIstqbRegistrationPageAllSchemas({
    faqs: [
      {
        question: "Why is ISTQB the best testing certification?",
        answer:
          "ISTQB is recognized in 130+ countries, aligns with international best practices, and is considered the gold standard by top companies worldwide.",
      },
      {
        question: "Does ISTQB certification expire?",
        answer:
          "No, ISTQB certification has lifetime validity and never expires, meaning no renewal fees or re-certification is required.",
      },
      {
        question: "What levels of ISTQB certification are available?",
        answer:
          "CDPL offers Foundation Level, Advanced Level, and Agile Foundation Extension certifications to support your career growth at every stage.",
      },
    ],
    howToSteps: [
      {
        name: "Registration",
        text: "Fill out the simple registration form with your basic details.",
      },
      {
        name: "Consultation",
        text: "Book a free 3:30 PM consultation to get expert guidance on your certification path.",
      },
      {
        name: "Exam Selection",
        text: "Choose your certification level and preferred exam date.",
      },
      {
        name: "Preparation",
        text: "Access industry-aligned training materials and start your certification journey.",
      },
    ],
    levels: [
      "ISTQB Foundation Level",
      "ISTQB Advanced Level",
      "ISTQB Agile Foundation Extension",
    ],
  });

  return (
    <main className="min-h-screen bg-slate-50 relative font-sans">
      {istqbSchemas.map((schema, index) => (
        <JsonLd
          key={`istqb-schema-${index}`}
          id={`istqb-schema-${index}`}
          schema={schema}
        />
      ))}
      {/* Background Ambience - Static Server Render */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-orange-200/20 rounded-full blur-[120px]" />
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-blue-200/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Breadcrumb - Static Server Render */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <Link href="/" className="hover:text-amber-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </li>
            <li>
              <span className="font-semibold text-slate-900">
                ISTQB Registration
              </span>
            </li>
          </ol>
        </nav>

        {/* Client Interactive Container */}
        <IstqbRegistrationContainer />
      </div>
    </main>
  );
}
