// Server Component. Our Story of Impact: the founding story beside a short
// milestone timeline. Headings (h2, both h3s, the milestone h4s) and the story
// copy are unchanged.
import { Rocket } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

// Year badges go light to dark orange, like the growing story. Dark text on the
// two lighter ones, white on the darkest, so every year stays readable.
const MILESTONES = [
  { year: "2018", title: "The Spark", text: "Launched with a vision to revolutionize tech education.", badge: "bg-orange-200 text-orange-950" },
  { year: "2022", title: "Scaling Impact", text: "Expanded to include AI/ML and Automation pathways.", badge: "bg-brand text-orange-950" },
  { year: "2025", title: "Global Reach", text: "Empowering 5k+ learners with innovative learning tools.", badge: "bg-orange-700 text-white" },
];

export default function AboutStorySection() {
  return (
    <section aria-labelledby="about-story-heading" className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="about-story-heading"
          pill={<><Rocket className="h-4 w-4" aria-hidden="true" />Our Journey Began</>}
          title={<><span className="text-brand">Our Story</span> of Impact</>}
          intro={
            <>
              At Cinute Digital, our story is one of passion, innovation, and transformation. We’re dedicated to
              empowering learners with real-world skills through mentorship and hands-on projects, paving the way
              for thriving careers in tech.
            </>
          }
        />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Story */}
          <article>
            <h3 className="text-2xl font-bold text-gray-900">A Vision Born from Purpose</h3>
            <p className="mt-4 border-l-4 border-brand pl-5 text-lg leading-8 text-gray-700">
              Founded in 2018, Cinute Digital was sparked by a group of tech enthusiasts who believed education
              should evolve with the industry. Our mission was clear: create a dynamic learning ecosystem where
              aspiring professionals gain practical skills in Software Testing, Automation, Data Science, and
              AI/ML. Through mentor-led guidance and real-world projects, we’ve empowered thousands to turn their
              ambitions into reality.
            </p>
          </article>

          {/* Milestones */}
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900">Our Journey Milestones</h3>
            <ol className="relative mt-6 space-y-6">
              <span aria-hidden="true" className="absolute bottom-6 left-7 top-6 w-0.5 bg-slate-200" />
              {MILESTONES.map((m) => (
                <li key={m.title} className="relative flex items-start gap-4">
                  <span className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full ${m.badge} text-sm font-bold shadow-md ring-4 ring-white`}>
                    {m.year}
                  </span>
                  <div className="pt-2">
                    <h4 className="font-semibold text-gray-900">{m.title}</h4>
                    <p className="mt-0.5 text-gray-600">{m.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
