import Link from "next/link";
import { FaWhatsappSquare, FaCalendar, FaCaretSquareUp } from "react-icons/fa";
import { FaSquarePhone, FaGoogleScholar, FaMapLocationDot } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { RiPresentationLine } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";

type Card = {
  title: string;
  desc: string;
  cta: string;
  href: string;
  target: string;
  icon: React.ReactNode;
  badges?: string[];
  aria?: string;
};

export function ContactMethodsSection() {
  const cards: Card[] = [
    {
      title: "WhatsApp Us",
      desc: "Quick answers on courses, fees, syllabus & career guidance. Get help from our admissions team instantly.",
      cta: "Chat on WhatsApp",
      href: "https://wa.me/9152929342",
      target: "_blank",
      icon: <FaWhatsappSquare className="h-13 w-13 text-green-600" />,
      badges: ["Fastest response", "Live advisor"],
      aria: "Chat with Cinute Digital on WhatsApp",
    },
    {
      title: "Admissions Helpline",
      desc: "Talk to an academic counselor about eligibility, batch schedules, and application deadlines.",
      cta: "Call Admissions",
      href: "tel:+91 788-83-83-788",
      target: "_self",
      icon: <FaSquarePhone className="h-13 w-13 text-indigo-600" />,
      badges: ["9am–8pm IST", "Priority support"],
      aria: "Call Cinute Digital Admissions Helpline",
    },
    {
      title: "Email Us",
      desc: "Detailed queries about fees, placements, or documentation? Our team replies within 24 hours.",
      cta: "Send Email",
      href: "mailto:contact@cinutedigital.com",
      target: "_blank",
      icon: <IoMdMailUnread className="h-13 w-13 text-violet-600" />,
      badges: ["24h response", "Trackable"],
      aria: "Email Cinute Digital Admissions",
    },
    {
      title: "Corporate Training",
      desc: "Upskill your team in Software Testing, Data Science, AI & Full-Stack. Tailored curriculum & labs.",
      cta: "Enquire for Teams",
      href: "/services/corporate-training",
      target: "_blank",
      icon: <RiPresentationLine className="h-10 w-10 p-1 rounded-lg text-white bg-blue-950" />,
      badges: ["Custom syllabus", "Hands-on labs"],
      aria: "Corporate training enquiry",
    },
    {
      title: "Download Brochure",
      desc: "Download Detailed Brochures of CDPL",
      cta: "Get Brochure PDF",
      href: "https://www.cinutedigital.com/downloads/cdpl-brochure.pdf",
      target: "_blank",
      icon: <IoBookSharp className="h-10 w-10 text-red-700" />,
      badges: ["Updated"],
      aria: "Download CDPL Brochure PDF",
    },
    {
      title: "Book 1:1 Counseling",
      desc: "Personalized guidance on career paths, job roles, and the best course fit for your goals.",
      cta: "Book a Free Slot",
      href: "https://calendar.app.google/tvh9dsXZsX9BujRR8",
      target: "_blank",
      icon: <FaCalendar className="h-9 w-9 text-indigo-700" />,
      badges: ["15-min session", "Mentor advice"],
      aria: "Book a free counseling session",
    },
    {
      title: "Scholarships & EMI",
      desc: "Check eligibility for scholarships and flexible EMI options with finance partners.",
      cta: "Explore Financing",
      href: "#contact-hero",
      target: "_blank",
      icon: <FaGoogleScholar className="h-9 w-9 text-emerald-700" />,
      badges: ["0-cost EMI*", "Limited seats"],
      aria: "Explore scholarships and EMI options",
    },
    {
      title: "Placement Cell",
      desc: "Resume reviews, mock interviews, and hiring drives with our partner companies.",
      cta: "Talk to Placement",
      href: "tel:+91 788-83-83-788",
      target: "_blank",
      icon: <FaCaretSquareUp className="h-10 w-10 text-fuchsia-700" />,
      badges: ["Job-ready", "Career support"],
      aria: "Connect with Cinute Digital Placement Cell",
    },
    {
      title: "Visit Our Campus",
      desc: "Meet faculty at our Mumbai (MiraRoad) center. Experience classrooms, labs & learning environment.",
      cta: "Open in Maps",
      href: "https://www.google.com/maps/place/Cinute+Digital+Pvt.+Ltd.+A+Premier+Software+Training+Institute+(CDPL)/@19.29342,72.8685471,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b1af2b2c5fed:0x7104f80b9fec8b9d!8m2!3d19.293415!4d72.871122!16s%2Fg%2F11t5q_mt87?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
      target: "_blank",
      icon: <FaMapLocationDot className="h-10 w-10 text-rose-700" />,
      badges: ["Guided tour", "By appointment"],
      aria: "Open Cinute Digital location in Google Maps",
    },
  ];

  return (
    <section className="relative bg-slate-50 dark:[color-scheme:light]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(60% 40% at 10% 10%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(50% 40% at 90% 0%, rgba(167,139,250,0.10), transparent 60%)",
          willChange: "transform",
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Talk to <span className="text-brand">Cinute Digital</span> - India’s Leading Ed-Tech Institute
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Get admissions support, course syllabus, <strong>job-ready training</strong> advice,{" "}
            <strong>placement assistance</strong>, and <strong>corporate upskilling</strong> solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((item) => {

            return (
              <article
                key={item.title}

                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-md transition hover:shadow-xl block"
                aria-label={item.aria}
              >
                <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-sky-400/15 to-indigo-400/10 blur-3xl pointer-events-none" />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent transition group-hover:ring-sky-200/60 pointer-events-none" />
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex items-center justify-center rounded-xl">
                    {item.icon}
                  </div>
                  {item.badges && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.badges.map((b) => (
                        <span
                          key={b}
                          className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-600"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-md leading-6 text-slate-700">{item.desc}</p>

                <Link
                  href={item.href}
                  target={item.target}
                  title={item.aria || item.title}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800"
                  aria-label={item.aria}
                >
                  {item.cta} <span aria-hidden>→</span>
                </Link>

              </article>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { title: "Software Testing Courses", note: "Manual • Automation • QA", bgColor: "bg-blue-50", textColor: "text-blue-700", borderColor: "ring-blue-500" },
            { title: "Data Science & AI Programs", note: "Python • ML • Power BI", bgColor: "bg-green-50", textColor: "text-green-700", borderColor: "ring-green-500" },
            { title: "Full-Stack Development", note: "React • Node.js • SQL", bgColor: "bg-purple-50", textColor: "text-purple-700", borderColor: "ring-purple-500" },
          ].map((pill) => (
            <div
              key={pill.title}
              className={`rounded-2xl ring-2 ${pill.borderColor} ${pill.bgColor} p-4 text-center shadow-sm`}
            >
              <div className={`text-md font-semibold ${pill.textColor}`}>{pill.title}</div>
              <div className="mt-1 text-sm text-slate-600">{pill.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
