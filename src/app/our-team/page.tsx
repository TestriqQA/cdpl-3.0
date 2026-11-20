import type { Metadata } from "next";
import { industryMentors, teamData, trainers, teamLeaders } from "@/app/our-team/data";
import TeamCultureSection from "@/components/sections/TeamCultureSection";
import TeamDirectory from "@/components/sections/TeamDirectorySection";
import TeamHeroSection from "@/components/sections/TeamHeroSection";
import TeamLeadershipSpotlight from "@/components/sections/TeamLeadershipSpotlight";
import TeamTrainersSection from "@/components/sections/TeamTrainersSection";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
  generateOurTeamPageAllSchemas,
  generateBreadcrumbSchema
} from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// ============================================================================
// SEO METADATA - Optimized for Our Team Page
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
  title: "Our Team - Expert Trainers & Mentors | CDPL",
  description: "Meet CDPL's team of expert trainers and mentors with extensive industry experience in Software Testing, Data Science, AI/ML, and Automation. Learn from professionals who have worked at top companies and trained students across India.",
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
  image: "/og-images/our-team-og.webp",
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

  // Generate 8-point Schemas dynamically
  const schemas = generateOurTeamPageAllSchemas(
    trainers,
    teamLeaders.map(leader => ({
      name: leader.name,
      title: leader.title,
      experience: leader.experience,
      specialization: leader.specialization
    }))
  );

  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      {schemas.map((schema, index) => (
        <JsonLd key={`team-schema-${index}`} id={`team-schema-${index}`} schema={schema} />
      ))}
      <JsonLd id="team-breadcrumb" schema={breadcrumbSchema} />

      {/* Main Content - Semantic HTML Structure */}
      <div className="bg-white">


        <TeamHeroSection />
        <TeamLeadershipSpotlight data={teamData} />
        <TeamTrainersSection trainers={trainers} />
        <TeamDirectory
          data={industryMentors}
          sectionId="industry-mentors"
          heading={<>Meet Our <span className="text-brand">Industry Mentors</span> at Cinute Digital</>}
          listName="Cinute Digital Industry Mentors"
        />
        <TeamDirectory
          data={teamData}
          heading={<>Our <span className="text-brand">Team</span></>}
          intro="The HR and IT administration team who keep Cinute Digital running for our learners and mentors."
          listName="Cinute Digital Team"
          staff
        />
        <TeamCultureSection />

      </div>
    </>
  );
}
