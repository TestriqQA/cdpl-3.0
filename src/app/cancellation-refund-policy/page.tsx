// /app/cancellation-refund-policy/page.tsx
import type { Metadata } from "next";
import { generateCancellationRefundPolicyPageAllSchemas } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cancellation/Refund Policy | Cinute Digital Pvt. Ltd.",
  description: "Read the Cancellation and Refund Policy for Cinute Digital (CDPL). Learn about full refunds before batch starts, 50% partial refunds during demo, and batch change flexibility.",
  alternates: { canonical: "/cancellation-refund-policy" },
  robots: { index: true, follow: true },
};

export default function CancellationRefundPolicyPage() {
  const consolidatedSchemas = generateCancellationRefundPolicyPageAllSchemas();

  const H1 = "text-3xl font-bold tracking-tight text-slate-900";
  const H2 = "text-2xl font-semibold tracking-tight text-slate-900";
  const P = "text-base leading-7 text-slate-700";
  const UL = "list-disc pl-6 space-y-2 text-base leading-7 text-slate-700";

  return (
    <div className="[color-scheme:light] bg-white">
      {consolidatedSchemas.map((schema, index) => (
        <JsonLd key={`refund-schema-${index}`} id={`refund-schema-${index}`} schema={schema} />
      ))}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-slate-900">
        <h1 className={H1}>Cancellation/Refund Policy</h1>

        <div className="mt-6 space-y-8">
          <section className="space-y-4">
            <p className={P}>
              We understand that circumstances might change, and we aim to be fair and flexible in our refund policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>1. Full Refund</h2>
            <p className={P}>
              Cancellations made in advance before the batch start date: A full refund will be issued, including any applicable fees.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>2. Partial Refund</h2>
            <p className={P}>
              Cancellations made during the demo session (2 demo sessions offered): A 50% refund will be issued, excluding any certificate exam booking fees.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>3. No Refund</h2>
            <ul className={UL}>
              <li>Cancellations made after completion of the demo session.</li>
              <li>Participants who fail to attend the course.</li>
              <li>Certificate exam booking fees are non-refundable and non-transferable.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>4. Processing Time</h2>
            <p className={P}>
              Refunds will be processed within 15 business days after receiving your cancellation request.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>5. Unforeseen Circumstances</h2>
            <p className={P}>
              We understand that unforeseen circumstances may arise. Please contact us, and we will explore options for flexibility on a case-by-case basis.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className={H2}>Additional Notes:</h2>
            <ul className={UL}>
              <li>
                Free Change Window: If you inform us before reaching 50% completion of the course, you can change your batch free of charge. However, the course must still be completed within 12 months from the original event date.
              </li>
              <li>
                Charges for Late Notification: If you wish to change batches after reaching 50% completion or fail to notify us in advance, a fee will apply:
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Job-oriented courses: Rs. 10,000</li>
                  <li>QA Upskilling courses: Rs. 5,000</li>
                </ul>
              </li>
              <li>
                Payment Requirement: To process a batch change request, ensure all previous batch payments are complete.
              </li>
            </ul>
            <p className={P}>
              We strive to provide a positive learning experience and appreciate your understanding. If you have any questions, please don’t hesitate to contact us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
