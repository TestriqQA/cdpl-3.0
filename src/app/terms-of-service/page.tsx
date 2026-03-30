// /app/terms-of-service/page.tsx
import type { Metadata } from "next";
import { generateTermsOfServicePageAllSchemas } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms & Conditions | Cinute Digital Pvt. Ltd.",
  description: "Read the Terms of Service for Cinute Digital (CDPL). Understand our enrollment policies, intellectual property terms, and comprehensive Job Assistance services.",
  alternates: { canonical: "/terms-of-service" },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  const consolidatedSchemas = generateTermsOfServicePageAllSchemas();

  const H1 = "text-3xl font-bold tracking-tight text-slate-900";
  const H2 = "text-2xl font-semibold tracking-tight text-slate-900";
  const H3 = "text-xl font-semibold tracking-tight text-slate-900";
  const P = "text-base leading-7 text-slate-700";
  const UL = "list-disc pl-6 space-y-2 text-base leading-7 text-slate-700";

  return (
    <div className="[color-scheme:light] bg-white">
      {consolidatedSchemas.map((schema, index) => (
        <JsonLd key={`terms-schema-${index}`} id={`terms-schema-${index}`} schema={schema} />
      ))}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
        <h1 className={H1}>Cinute Digital Pvt. Ltd. (CDPL) - Terms and Conditions</h1>

        <div className="mt-6 space-y-8">
          <section className="space-y-4">
            <p className={P}><strong>Effective Date: [Date]</strong></p>
            <p className={P}>
              Thank you for choosing Cinute Digital Pvt. Ltd. (CDPL) for your software training needs. Before you proceed with our services, please carefully review the following Terms of Service (“Terms”) that govern the use of our software training courses, materials, and related services. By enrolling in or using any of our services, you agree to be bound by these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>Definitions</h2>
            <ul className={UL}>
              <li>
                “CDPL,” “we,” “us,” or “our” refers to Cinute Digital Pvt. Ltd., a software training institute.
              </li>
              <li>
                “User,” “you,” or “your” refers to any individual, student, or entity that enrolls in or uses our software training services.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>Registration and Enrollment</h2>
            <div className="space-y-2">
              <h3 className={H3}>Eligibility</h3>
              <p className={P}>
                To enroll in our courses, you must be at least 18 years old or have the legal consent of your parent or guardian.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className={H3}>Accuracy of Information</h3>
              <p className={P}>
                When providing personal information during registration, you agree to provide accurate and complete information. CDPL reserves the right to suspend or terminate your account if any information is found to be false or misleading.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>Course Enrollment and Payment</h2>
            <div className="space-y-2">
              <h3 className={H3}>Course Availability</h3>
              <p className={P}>
                CDPL offers various software training courses, subject to availability. We reserve the right to modify or discontinue courses without prior notice.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className={H3}>Fees and Payment</h3>
              <p className={P}>
                Course fees and payment details will be provided during the enrollment process. By enrolling, you agree to pay the applicable fees for the selected course. Payments are non-refundable, except as expressly stated in our refund policy.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className={H3}>Refunds</h3>
              <p className={P}>
                Our refund policy outlines the circumstances under which refunds may be issued. Please review the refund policy on our website or contact us for more information.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>Intellectual Property</h2>
            <div className="space-y-2">
              <h3 className={H3}>Ownership</h3>
              <p className={P}>
                All course materials, videos, documentation, and content provided by CDPL are the exclusive property of CDPL and are protected by copyright and other intellectual property laws.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className={H3}>License</h3>
              <p className={P}>
                By enrolling in our courses, CDPL grants you a non-exclusive, non-transferable license to access and use the course materials solely for personal, non-commercial purposes. You may not reproduce, distribute, or sell any course content without explicit written permission from CDPL.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>Conduct</h2>
            <div className="space-y-2">
              <h3 className={H3}>Ownership</h3>
              <p className={P}>
                All course materials, videos, documentation, and content provided by CDPL are the exclusive property of CDPL and are protected by copyright and other intellectual property laws.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className={H3}>License</h3>
              <p className={P}>
                By enrolling in our courses, CDPL grants you a non-exclusive, non-transferable license to access and use the course materials solely for personal, non-commercial purposes. You may not reproduce, distribute, or sell any course content without explicit written permission from CDPL.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>Privacy Policy</h2>
            <p className={P}>
              Privacy: CDPL is committed to protecting your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data. By using our services, you consent to the practices described in our Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>Communication</h2>
            <p className={P}><strong>Contact Information:</strong> For any inquiries or support, you can contact us through the following:</p>
            <ul className={UL}>
              <li>Email: contact@cinutedigital.com</li>
              <li>Phone:+91 788-83-83-788</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>Disclaimer of Warranties</h2>
            <p className={P}>
              CDPL provides software training courses on an “as-is” basis. We make no warranties, expressed or implied, regarding the content, accuracy, or completeness of the course materials.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>Limitation of Liability</h2>
            <p className={P}>
              In no event shall CDPL be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>Modification of Terms</h2>
            <p className={P}>
              CDPL reserves the right to modify these Terms at any time. The updated Terms will be posted on our website, and your continued use of our services constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>Governing Law and Jurisdiction</h2>
            <p className={P}>
              These Terms shall be governed by and construed in accordance with the laws of India, and any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, India.
            </p>
          </section>

          <section className="space-y-4">
            <p className={P}>
              By enrolling in our courses or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <p className={P}>
              Thank you for choosing Cinute Digital Pvt. Ltd. for your software training needs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>Job Assistance Policy</h2>
            <p className={P}>We believe in your potential!</p>
            <p className={P}>
              Cinute Digital Pvt. Ltd. is dedicated to providing comprehensive job assistance services to empower individuals in securing their dream careers. While we cannot guarantee job placement, we offer 100% commitment to support you throughout your job search journey.
            </p>
            <h3 className={H3}>Our Services:</h3>
            <ul className={UL}>
              <li>Crafting a Standout Resume: Our team of experts will guide you in crafting a compelling resume that highlights your skills and experiences, making you stand out to recruiters and hiring managers.</li>
              <li>Optimizing Your Recruiter Profile: We’ll analyze and optimize your online profiles to attract leading recruiters and enhance your visibility for potential employers.</li>
              <li>Personalized Job Search Strategy: We’ll work collaboratively with you to define a personalized job search strategy tailored to your career aspirations, skills, and desired industry.</li>
              <li>Expert Interview Coaching: We provide comprehensive interview preparation, including mock interviews, personalized feedback, and crucial communication skills development to boost your confidence and performance during interviews.</li>
              <li>Career Coaching and Guidance: We offer ongoing career coaching sessions to help you navigate the job market effectively, set career goals, and develop long-term professional strategies.</li>
              <li>Bridging the Skill Gap: We’ll analyze your skill set and identify relevant industry-recognized certifications that can bridge any potential skill gaps, enhancing your competitiveness in the job market.</li>
            </ul>
            <h3 className={H3}>Our Commitment:</h3>
            <p className={P}>
              At Cinute Digital Pvt. Ltd., we are dedicated to providing you with the resources, guidance, and support you need to succeed in your job search. Our 100% job assistance commitment signifies our unwavering dedication to your success, we however don’t give 100% job guarantee. We believe that through our comprehensive services and your dedication, you will be well-equipped to secure your dream job.
            </p>
            <p className={P}>Together, we can turn your career aspirations into reality!</p>
          </section>

          <section className="space-y-6">
            <h2 className={H2}>1. What are the parameters to be eligible for placement assistance? Attendance/fees/interview attended and feedback etc?</h2>
            <h3 className={H3}>Eligibility for Job Assistance:</h3>
            <p className={P}>
              To be eligible for our comprehensive Job Assistance services, you must be a graduate of one of our paid masterclass training programs. This ensures you have the foundational skills and knowledge employers seek.
            </p>
            <p className={P}>Here&lsquo;s a breakdown of what being eligible entails:</p>
            <ul className={UL}>
              <li>Course Completion: You must have successfully completed the relevant training program at Cinute Digital Pvt. Ltd.</li>
              <li>Attendance: Regular attendance throughout the course demonstrates your commitment to learning and career development.(90% and above)</li>
              <li>Fees: Full payment of your course fees ensures you have access to all program benefits, including Job Assistance.</li>
              <li>Interview Participation and Feedback: Actively participating in mock interviews and providing feedback helps us refine your interview skills and increase your confidence.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className={H2}>2. How many interview calls or meetings with employers will I get? domestic or international?</h2>
            <h3 className={H3}>Number of Interviews and Locations:</h3>
            <p className={P}>
              The number of interview calls you receive depends on several factors, including your skills, experience, industry demand, and overall job market conditions. We strive to connect you with relevant opportunities, but we cannot guarantee a specific number of interviews.
            </p>
            <p className={P}>
              Our Job Assistance focuses on the domestic job market; however, for certain highly specialized roles, international opportunities might arise.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className={H2}>3. I got placed through a 3rd party, am I also eligible for job assistance? Or will you give some part of my fees back, as I am not using your job assistance program?</h2>
            <h3 className={H3}>Placement Through Third Party and Fee Refunds:</h3>
            <p className={P}>
              If you secure a job through a third-party recruiter or platform, you&lsquo;re still eligible for our Job Assistance services. However, due to the nature of our program structure, refunds on course fees are not applicable in such cases.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className={H2}>4. Can I share my job preference to CDPL, so placement officers will put me on priority if my preferred job is available?</h2>
            <h3 className={H3}>Job Preferences and Prioritization:</h3>
            <p className={P}>
              We highly encourage you to share your job preferences with us!  Knowing your desired roles and companies allows us to tailor our assistance and potentially connect you with relevant opportunities sooner. However, placement ultimately depends on a two-way fit between your qualifications and the employer&lsquo;s requirements.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className={H2}>5. I have issues with my placement, my employer is not good. Does CDPL take responsibility for this?</h2>
            <h3 className={H3}>Issues with Employer Placement:</h3>
            <p className={P}>
              While we meticulously research potential employers, we cannot guarantee the work environment or company culture.  However, we&lsquo;re here to support you!  If you encounter issues with your placement, please don&lsquo;t hesitate to reach out. We&lsquo;ll offer guidance and explore potential solutions to help navigate the situation.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
