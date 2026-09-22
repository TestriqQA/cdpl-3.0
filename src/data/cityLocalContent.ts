/**
 * City-specific content for the Tier 1 city pages.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * `CourseData` already carries `localJobMarketInsight`, `localSalaryInsight`,
 * `localizedFaqs` and `localizedTestimonials`, and the city-page components
 * already render them (WhyChooseSection, FAQSection, CourseOverviewSection,
 * and the FAQPage/Review JSON-LD in the route). But across all 765 city
 * records those four fields are filled in exactly ZERO times — which is why
 * every city page is the same template with the name swapped, and why 96 URLs
 * ended up competing for "data science course in mumbai".
 *
 * The differentiation machinery was built and never used. This file supplies
 * the data, merged in at read time so the 449k-line `courseData.ts` does not
 * have to be edited for it.
 *
 * WHAT MAY GO IN HERE
 * -------------------
 * Only statements that are true and checkable. The IT-geography facts below
 * (Hinjewadi, OMR, HITEC City, Salt Lake Sector V, BKC/SEEPZ) are public
 * knowledge about those cities and are genuinely different from one another,
 * which is the point.
 *
 * What must NOT go in here without real data from CDPL:
 *   - placement counts, salary figures, or hiring-partner claims
 *   - any street address outside Mira Road — that is the ONLY CDPL campus, so
 *     no other city page may imply a local centre or carry LocalBusiness data
 *   - named employers presented as CDPL recruiters
 *
 * `localSalaryInsight` is deliberately left unset everywhere. It renders as an
 * award-style badge, and putting an unsourced salary figure there would
 * recreate exactly the class of non-defensible claim that commit 3bc3f5d
 * stripped out of this codebase. Fill it only from audited placement data.
 */

export type CityLocalContent = {
    /** Renders as the "Local Industry Pulse: <city>" paragraph. */
    jobMarketInsight: string;
    /** Replaces the generic FAQ list, and feeds the page's FAQPage JSON-LD. */
    faqs: { question: string; answer: string }[];
};

/**
 * Delivery-mode answer shared by every city except Mumbai.
 *
 * CDPL's only classroom is Mira Road, Mumbai. These pages must be explicit
 * that training is delivered live-online rather than implying a local centre.
 */
function onlineDeliveryFaq(city: string) {
    return {
        question: `Is this course conducted offline in ${city}?`,
        answer:
            `CDPL runs this programme as live, instructor-led online sessions for learners in ${city} — not recorded video. ` +
            `You attend scheduled classes with a trainer you can question in real time, and sessions are recorded for revision. ` +
            `Our only classroom campus is in Mira Road, Mumbai; everything outside Mumbai is delivered live-online.`,
    };
}

/** Weekend/after-hours answer, phrased identically everywhere it is true. */
function batchTimingFaq(city: string) {
    return {
        question: `Are there weekend or evening batches for working professionals in ${city}?`,
        answer:
            `Yes. Alongside weekday batches, CDPL runs weekend and evening cohorts for people already working in ${city}, ` +
            `so you can train without taking leave. Exact timings for the next cohort are confirmed by our counsellors — ` +
            `session recordings mean an occasional missed class does not set you back.`,
    };
}

export const CITY_LOCAL_CONTENT: Record<string, CityLocalContent> = {
    mumbai: {
        jobMarketInsight:
            'Mumbai is India\'s financial capital, and that shapes its tech hiring: banking, insurance and capital-markets firms account for a large share of QA, data and analytics roles here, alongside the media and e-commerce sector. ' +
            'The clusters worth knowing are Bandra Kurla Complex, Powai, SEEPZ and the MIDC belt in Andheri, Airoli and Vashi across the harbour in Navi Mumbai, and Wagle Estate in Thane. ' +
            'Because so much of the work is regulated-industry software, employers here weight testing discipline, documentation and data accuracy more heavily than many other Indian markets. ' +
            // Real placements from src/lib/placementShared.ts — 25 Mumbai students,
            // every company name verifiable in that file. Deliberately a statement
            // of fact, not a testimonial: no student is quoted, because we hold no
            // quotes from them and inventing words for a named real person is not
            // something a placement claim may do.
            'CDPL learners from Mumbai have gone into QA roles at Tech Mahindra, Accenture, JM Financial, IDfy, Rendered Ideas, Tech Cryptors, Maxwell Energy Systems and QodeNext, among others.',
        faqs: [
            {
                question: 'Where is CDPL\'s campus in Mumbai?',
                answer:
                    'CDPL\'s campus is in Mira Road, on the Western line — reachable from Borivali, Bhayandar, Vasai and Virar without changing trains, and connected to Thane and Navi Mumbai by road. ' +
                    'This is our only classroom location, so Mumbai learners can choose between attending in person and joining the same batch live online.',
            },
            batchTimingFaq('Mumbai'),
            {
                question: 'Which parts of Mumbai do learners usually travel from?',
                answer:
                    'Most learners join from the Western suburbs (Borivali, Kandivali, Malad, Andheri), the Mira-Bhayandar and Vasai-Virar belt, and Thane and Navi Mumbai. ' +
                    'If travel is impractical on a given day, you can attend that session live online instead of missing it — it is the same batch, not a separate track.',
            },
        ],
    },

    pune: {
        jobMarketInsight:
            'Pune\'s technology employment is concentrated in a few well-defined pockets: the Rajiv Gandhi Infotech Park at Hinjewadi (Phases 1 to 3), Magarpatta City in Hadapsar, the EON IT Park at Kharadi, and the Baner-Balewadi corridor. ' +
            'The city carries an unusual mix for India — large IT-services campuses sit alongside a deep automotive and manufacturing engineering base, so data and quality-engineering skills are hired both by software firms and by industrial companies digitising their operations. ' +
            'Pune is also a university city, which means a steady supply of entry-level candidates and correspondingly sharper competition for fresher roles.',
        faqs: [
            onlineDeliveryFaq('Pune'),
            batchTimingFaq('Pune'),
            {
                question: 'Does this course suit Pune\'s IT and engineering job market?',
                answer:
                    'The curriculum is built around the tooling those employers actually use, which maps well onto Pune\'s two hiring streams — IT-services work around Hinjewadi and Kharadi, and the engineering and manufacturing firms digitising their processes. ' +
                    'Projects are portfolio pieces you can discuss in an interview, which matters in a market with this much fresher competition.',
            },
        ],
    },

    chennai: {
        jobMarketInsight:
            'Chennai\'s technology hiring runs along the OMR corridor — Old Mahabalipuram Road — anchored by Tidel Park in Taramani and the SIPCOT campuses at Siruseri, with a second cluster around Ambattur and Guindy. ' +
            'The city has a long-established base in BFSI back-office and IT-services delivery, and is one of India\'s strongest markets specifically for software testing and quality-engineering work, since so much of the delivery work sited here is testing-led. ' +
            'That makes structured QA skills — test design, defect reporting, automation fundamentals — unusually portable in this particular city.',
        faqs: [
            onlineDeliveryFaq('Chennai'),
            batchTimingFaq('Chennai'),
            {
                question: 'Is Chennai a good market for software testing and data roles?',
                answer:
                    'Chennai has one of India\'s deeper concentrations of testing and quality-engineering work because of the delivery centres along OMR and at Siruseri, and its BFSI services base creates steady demand for data and reporting skills. ' +
                    'The course is taught in English, and the tools and practices covered are the same ones used in those delivery centres.',
            },
        ],
    },

    kolkata: {
        jobMarketInsight:
            'Kolkata\'s technology sector centres on Salt Lake Sector V and the newer New Town and Rajarhat developments, which together form eastern India\'s primary IT hub. ' +
            'The work here skews towards IT services, analytics and back-office delivery for domestic and international clients rather than product engineering, so demand concentrates on data handling, reporting and quality-assurance skills. ' +
            'Living costs are lower than in Bengaluru or Mumbai, which means candidates here often weigh a local role against relocating — and employers compete accordingly.',
        faqs: [
            onlineDeliveryFaq('Kolkata'),
            batchTimingFaq('Kolkata'),
            {
                question: 'Will this course help me find work in Kolkata specifically?',
                answer:
                    'The skills taught map onto the services, analytics and back-office delivery work concentrated in Salt Lake Sector V and New Town. ' +
                    'CDPL provides placement support — interview preparation, portfolio and resume review, and referrals where we have them — but we do not promise a job, and you should be cautious of any institute that does.',
            },
        ],
    },

    hyderabad: {
        jobMarketInsight:
            'Hyderabad\'s technology employment is concentrated in HITEC City, Madhapur, Gachibowli and the adjoining Financial District. ' +
            'What distinguishes this market from most Indian cities is how much of it is product engineering rather than services — several global technology companies run large development centres here, which pulls hiring towards data engineering, machine-learning and platform-quality roles. ' +
            'Metro connectivity along the Blue Line into HITEC City has widened the commutable area considerably, so candidates across the city compete for the same roles.',
        faqs: [
            onlineDeliveryFaq('Hyderabad'),
            batchTimingFaq('Hyderabad'),
            {
                question: 'Is Hyderabad better for data or for testing roles?',
                answer:
                    'Both exist, but Hyderabad\'s product-engineering weighting means data engineering, analytics and machine-learning roles are especially well represented around HITEC City and Gachibowli, and quality work here often sits inside product teams rather than separate testing vendors. ' +
                    'If you are choosing between tracks, that is worth factoring in.',
            },
        ],
    },
};

/** Local content for a city slug token, if that city has any. */
export function getCityLocalContent(city: string | undefined): CityLocalContent | undefined {
    if (!city) return undefined;
    return CITY_LOCAL_CONTENT[city.toLowerCase()];
}

/**
 * FAQs for ONE course-in-city page, shown ahead of that page's other FAQs.
 *
 * ⚠️  Keyed by page slug on purpose — do not move these into
 * CITY_LOCAL_CONTENT above. A city's `faqs` are shown on EVERY course page in
 * that city: software testing, data science, digital marketing and the rest in
 * Mumbai all render CITY_LOCAL_CONTENT.mumbai.faqs. These answers are about one
 * specific course — its fee, duration and placement support — so on any other
 * Mumbai page they would be wrong.
 *
 * Merged in by getByInternalSlug in src/app/(city-courses)/[slug]/page.tsx.
 * The same merged list feeds the page's FAQPage JSON-LD, so the visible FAQs
 * and the structured data stay identical.
 */
export const COURSE_CITY_FAQS: Record<string, { question: string; answer: string }[]> = {
    // Supplied by the SEO team, September 2026.
    'software-testing-course-in-mumbai': [
        {
            question: 'What is the fee for the Software Testing Course in Mumbai at CDPL?',
            answer:
                'The Software Testing Course in Mumbai starts at lowest price, with easy EMI options available. ' +
                'The fee covers manual + automation testing modules, ISTQB exam prep, hands-on projects, and placement support. ' +
                'Batch-wise offers may apply — talk to our counsellors for the current fee and any active discount.',
        },
        {
            question: 'Is the Software Testing Course in Mumbai ISTQB-certified, and how long does it take?',
            answer:
                'The course runs 12 weeks and is ISTQB Certification Ready, meaning the syllabus is mapped to the ISTQB Foundation Level exam. ' +
                'You\'ll also get an industry-recognised CDPL certificate on completion, along with hands-on project work to show employers.',
        },
        {
            question: 'Does CDPL provide placement assistance after the Software Testing Course in Mumbai?',
            answer:
                'Yes. CDPL offers dedicated placement support including resume building, mock interviews, and job referrals, with 92% of learners placed within 3 months of completing the course. ' +
                'Mumbai alumni have been placed at companies like Tech Mahindra, Accenture, JM Financial, and IDfy.',
        },
    ],
};

/** Page-specific FAQs for a course-in-city slug; empty when it has none. */
export function getCourseCityFaqs(slug: string): { question: string; answer: string }[] {
    return COURSE_CITY_FAQS[slug.toLowerCase()] ?? [];
}
