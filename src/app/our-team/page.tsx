import type { Metadata } from "next";
import { teamData, trainers } from "@/app/our-team/data";
import TeamCultureSection from "@/components/sections/TeamCultureSection";
import TeamDirectory from "@/components/sections/TeamDirectorySection";
import TeamHeroSection from "@/components/sections/TeamHeroSection";
import TeamLeadershipSpotlight from "@/components/sections/TeamLeadershipSpotlight";
import TeamTrainersSection from "@/components/sections/TeamTrainersSection";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
  generateAboutPageSchema,
  generateItemListSchema,
  generateBreadcrumbSchema
} from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// ============================================================================
// SEO METADATA - Optimized for Our Team Page
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
  title: "Our Team - Expert Trainers & Mentors | CDPL",
  description: "Meet CDPL's team of expert trainers and mentors with 10+ years of industry experience in Software Testing, Data Science, AI/ML, and Automation. Learn from professionals who have worked at top companies and trained 5000+ students.",
  keywords: [
    "CDPL team",
    "Cinute Digital trainers",
    "software testing mentors",
    "data science trainers",
    "AI ML experts",
    "automation testing instructors",
    "industry expert trainers",
    "ISTQB certified trainers",
    "tech training mentors",
    "experienced instructors Mumbai",
    "our team CDPL",
    "meet our trainers",
  ],
  url: "/our-team",
  image: "/og-images/og-image-team.webp",
});

// ============================================================================
// OUR TEAM PAGE COMPONENT
// ============================================================================
export default function Page() {

  // 1. Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Our Team", url: "/our-team" },
  ]);

  // 2. AboutPage Schema (Contextualized for Team)
  const aboutPageSchema = generateAboutPageSchema({
    name: "Our Team - Expert Trainers & Mentors | CDPL",
    description: "Meet the industry experts behind CDPL's success. Our team consists of seasoned professionals from top tech companies dedicated to transforming careers.",
    url: "/our-team",
  });

  // 3. ItemList Schema for Trainers
  const trainerListSchema = generateItemListSchema(
    trainers.map(trainer => ({
      name: trainer.name,
      description: `${trainer.role} - ${trainer.yearsExp} Years Experience`,
      url: `/our-team`, // Linking to the team page itself as individual profiles might not exist yet
      image: trainer.avatar,
      type: 'Person'
    })),
    'Expert Trainers at CDPL'
  );

  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      <JsonLd id="team-breadcrumb" schema={breadcrumbSchema} />
      <JsonLd id="team-about" schema={aboutPageSchema} />
      <JsonLd id="team-trainers" schema={trainerListSchema} />

      {/* Main Content - Semantic HTML Structure */}
      <main className="bg-white">


        <TeamHeroSection />
        <TeamLeadershipSpotlight data={teamData} />
        <TeamTrainersSection trainers={trainers} />
        <TeamDirectory data={teamData} />
        <TeamCultureSection />

      </main>
    </>
  );
}
