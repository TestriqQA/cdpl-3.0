import { Metadata } from "next";
import { generateCmsPageAllSchemas } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";
import { generateMetadata } from "@/lib/metadata-generator";

export const metadata: Metadata = generateMetadata({
  title: "Course Management System - Cinute Digital Studio",
  description: "Secure administrative portal to manage course content, SEO metadata, and digital assets for Cinute Digital Pvt. Ltd.",
  url: "/cms",
  noindex: true,
  nofollow: true,
});

export default function CmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const consolidatedSchemas = generateCmsPageAllSchemas({
    faqs: [
      {
        question: "How do I update course content?",
        answer: "Log in to the Sanity Studio using your credentials, select the 'Course' document type, find the specific course, and make your edits in the real-time editor.",
      },
      {
        question: "Can I manage SEO from the CMS?",
        answer: "Yes, every page and course document includes an 'SEO' tab where you can customize meta titles, descriptions, and keywords.",
      },
      {
        question: "Is the CMS secure?",
        answer: "Our CMS is powered by Sanity.io, featuring robust role-based access control and secure authentication protocols to protect your content.",
      },
      {
        question: "Can I collaborate with others in real-time?",
        answer: "Yes, the studio supports real-time multi-user collaboration, allowing multiple editors to work on the same content simultaneously with presence indicators.",
      },
    ],
    howToSteps: [
      { name: "Login", text: "Securely log into the Cinute Digital Studio using your administrative credentials." },
      { name: "Navigate", text: "Use the sidebar to navigate between Courses, Locations, and Global Configurations." },
      { name: "Edit", text: "Select a document to edit using our rich-text and structured content editors." },
      { name: "Preview & Publish", text: "Preview your changes in real-time and click 'Publish' to go live across the site." }
    ],
    features: [
      "Real-time Content Collaboration",
      "Advanced SEO Management",
      "Asset & Media Organization",
      "Custom Content Modeling"
    ]
  });

  return (
    <>
      {consolidatedSchemas.map((schema, index) => (
        <JsonLd key={`cms-schema-${index}`} id={`cms-schema-${index}`} schema={schema} />
      ))}
      {children}
    </>
  );
}
