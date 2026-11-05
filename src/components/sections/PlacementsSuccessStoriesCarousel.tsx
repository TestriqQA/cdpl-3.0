import Image from "next/image";
import { Quote } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

type Story = { name: string; role: string; text: string; src: string };

const STORIES: Story[] = [
  { name: "Dakshali Merya", role: "Tech Mahindra · QA", text: "Hands-on QA practice + mock interviews made offer-day feel easy.", src: "/placements/Dakshali Merya.jpg" },
  { name: "Sheetal Singh", role: "Accenture · QA", text: "Structured QA sprints and feedback loops boosted my interview confidence.", src: "/placements/Sheetal Singh.jpg" },
  { name: "Shrikanth Suri", role: "eClerx · QA", text: "Bug-hunting drills and real projects helped me crack eClerx.", src: "/placements/Shrikanth Suri.jpg" },
  { name: "Kartik Bomble", role: "JM Financial · QA", text: "Test design + scenario writing clicked for me and sealed the JM offer.", src: "/placements/Kartik Bomble.jpg" },
  { name: "Bhagyesh Mahadik", role: "Tech Mahindra · QA", text: "From basics to job-ready quickly with focused QA mentoring.", src: "/placements/Bhagyesh Mahadik.jpg" },
  { name: "Latesh Kamble", role: "Testriq · QA", text: "Automation primers and reviews turned interviews into conversations.", src: "/placements/Latesh Kamble.jpg" },
  { name: "Tejal More", role: "i-XL · QA", text: "Portfolio-ready test cases and clarity on SDLC gave me the edge.", src: "/placements/Tejal More.jpg" },
  { name: "Rajvardhan Desai", role: "i-XL · QA", text: "Targeted QA prep + guidance on resumes landed fast callbacks.", src: "/placements/Rajvardhan Desai.jpg" },
  { name: "Arun Panicker", role: "Aryan Technologies · QA", text: "End-to-end testing practice mapped perfectly to interview asks.", src: "/placements/Arun Panicker.jpg" },
  { name: "Bhakti Raigawali", role: "Aryan Technologies · QA", text: "Daily QA drills and project reviews built confidence for day one.", src: "/placements/Bhakti Raigawali.jpg" },
  { name: "Satya Dutt", role: "Tech Mahindra · QA", text: "Clear frameworks for test planning helped me stand out.", src: "/placements/Satya Dutt.jpg" },
  { name: "Mohsin Patel", role: "Testriq · QA", text: "Practical QA labs + interview prep = smooth Testriq selection.", src: "/placements/Mohsin Patel.jpg" },
  { name: "Kishore Jha", role: "Raw Engineering · QA", text: "Real defect triage practice mirrored my on-site interview.", src: "/placements/Kishore Jha.jpg" },
  { name: "Krutika Penkar", role: "Tech Cryptors · QA", text: "Solid fundamentals + mock interview rounds sealed the deal.", src: "/placements/Krutika Penkar.jpg" },
  { name: "Insha Dosani", role: "Maxwell Energy Systems · QA", text: "Strong test strategy walkthroughs helped me pace the panel.", src: "/placements/Insha Dosani.jpg" },
  { name: "Jaynam Shah", role: "IDfy · QA", text: "API testing drills and clear bug reports made a huge difference.", src: "/placements/Jaynam Shah.jpg" },
  { name: "Akash Yadav", role: "CVistar · QA", text: "Focused QA sprints + portfolio review brought quick results.", src: "/placements/Akash Yadav.jpg" },
  { name: "Preksha Mehta", role: "Tech Mahindra · QA", text: "Interview simulations and feedback sharpened my answers.", src: "/placements/Preksha Mehta.jpg" },
  { name: "Shreyash Pakhare", role: "Testriq · QA", text: "Hands-on test case writing and bug reporting won the panel.", src: "/placements/Shreyash Pakhare.jpg" },
  { name: "Navin Joshi", role: "Rendered Ideas · QA", text: "Game QA scenarios + exploratory testing practice paid off.", src: "/placements/Navin Joshi.jpg" },
  { name: "Rucha Pawar", role: "Reeble · QA", text: "Strong SDLC clarity and demos helped me convert fast.", src: "/placements/Rucha Pawar.jpg" },
  { name: "Abdul Mateen", role: "QodeNext · QA", text: "Scenario-based QA prep matched the interview perfectly.", src: "/placements/Abdul Mateen.jpg" },
  { name: "Muthukumaran Iyer", role: "Axiom TechGuru · QA", text: "Clear QA frameworks and live feedback built confidence.", src: "/placements/Muthukumaran Iyer.jpg" },
  { name: "Aaditya Bobade", role: "Punon Technologies · QA", text: "Project-first learning kept me interview-ready throughout.", src: "/placements/Aaditya Bobade.jpg" },
  { name: "Sunil Pillai", role: "Tech Mahindra · QA", text: "From practice to placement, consistent QA coaching worked.", src: "/placements/Sunil Pillai.jpg" },
  { name: "Ashwini Badgujar", role: "Testriq · QA", text: "Strong fundamentals + practical labs = confident interviews.", src: "/placements/Ashwini Badgujar.jpg" },
  { name: "Faiz Khan", role: "Rendered Ideas · QA", text: "Exploratory testing sessions mapped to real interview tasks.", src: "/placements/Faiz Khan.jpg" },
  { name: "Shrey Gupta", role: "Rendered Ideas · QA", text: "Portfolio reviews and mocks helped me convert quickly.", src: "/placements/Shrey Gupta.jpg" },
];

type Props = { contained?: boolean };

/** Allow custom CSS var --cdplDur without using `any` */
type CSSVarStyle = CSSProperties & { ["--cdplDur"]: string };

/** Typed style for the marquee duration custom property */
const trackStyle: CSSVarStyle = {
  "--cdplDur": "180s",
};

export default function PlacementsSuccessStoriesCarousel({ contained = false }: Props) {
  const SLIDES = [...STORIES, ...STORIES]; // seamless loop

  const trackClasses =
    "flex gap-5 w-max [animation:cdpl-marquee_var(--cdplDur)_linear_infinite] hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]";

  const cardClasses =
    "relative shrink-0 w-[260px] sm:w-[300px] lg:w-[340px] rounded-2xl border border-orange-100 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md overflow-hidden";

  const Wrapper = ({ children }: { children: ReactNode }) =>
    contained ? <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div> : <>{children}</>;

  return (
    <section aria-label="CDPL Success Stories" className="w-full py-10 sm:py-12">
      <Wrapper>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            Success <span className="text-brand">Stories</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Real outcomes from CDPL learners across QA, Data, Full-Stack and Cloud/DevOps.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white/90 to-transparent" />

          {/* Marquee track — SLOWER via CSS var */}
          <div>
            <div className={trackClasses} style={trackStyle}>
              {SLIDES.map((s, i) => (
                  <article key={`${s.name}-${i}`} className={cardClasses}>
                    <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff8c00] via-[#ffb558] to-[#ffd19e]" />
                    <Quote aria-hidden className="pointer-events-none absolute -bottom-4 -right-2 h-24 w-24 rotate-180 text-orange-50" />

                    {/* Content */}
                    <div className="relative p-5">
                      <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-orange-200">
                          <Image
                            src={s.src}
                            alt={`${s.name} — CDPL success story`}
                            title={`${s.name} — CDPL success story`}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-semibold text-slate-900 sm:text-base">{s.name}</div>
                          <div className="truncate text-xs font-medium text-brand sm:text-sm">{s.role}</div>
                        </div>
                        <span aria-hidden className="ml-auto grid h-8 w-8 shrink-0 place-items-center rounded-full bg-orange-50">
                          <Quote className="h-4 w-4 text-brand" />
                        </span>
                      </div>
                      <p className="mt-3 leading-relaxed text-slate-700 text-sm sm:text-base">{s.text}</p>
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </div>

      </Wrapper>

      {/* Keyframes */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes cdpl-marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
        `,
        }}
      />
    </section>
  );
}
