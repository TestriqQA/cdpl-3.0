import { groq } from 'next-sanity'
import { toPlainText } from '@portabletext/toolkit'

import { client } from '@/sanity/client'
import { courseCategories, type Course } from '@/data/headerData'
import { getServices } from '@/lib/services'
import { getEvents } from '@/lib/events'
import { PAST_EVENTS_FAQS } from '@/data/pastEventsData'

import { MANUAL_TESTING_FAQS } from '@/data/manualTestingData'
import { API_TESTING_FAQS } from '@/data/apiTestingData'
import { DBMS_FAQS } from '@/data/dbmsData'
import { ETL_TESTING_FAQS } from '@/data/etlTestingData'
import { ADVANCED_TESTING_FAQS } from '@/data/advancedTestingData'
import { AUTOMATION_TESTING_FAQS } from '@/data/automationTestingData'
import { ADVANCE_MANUAL_AUTOMATION_FAQS } from '@/data/advanceManualAutomationData'
import { PYTHON_FAQS } from '@/data/pythonData'
import { JAVA_FAQS } from '@/data/javaData'
import { MACHINE_LEARNING_FAQS } from '@/data/machineLearningData'
import { GENERATIVE_AI_FAQS } from '@/data/generativeAiData'
import { DATA_SCIENCE_FAQS } from '@/data/dataScienceData'
import { AI_FAQS } from '@/data/aiData'
import { ML_PYTHON_FAQS } from '@/data/mlPythonData'
import { R_DATA_VIS_FAQS } from '@/data/rDataVisData'
import { DATA_ANALYTICS_FAQS } from '@/data/dataAnalyticsData'
import { DATA_ANALYTICS_PYTHON_FAQS } from '@/data/dataAnalyticsPythonData'
import { DATA_ANALYTICS_VIS_FAQS } from '@/data/dataAnalyticsVisData'
import { DATA_ANALYTICS_TABLEAU_FAQS } from '@/data/dataAnalyticsTableauData'
import { POWER_BI_FAQS } from '@/data/powerBiData'
import { DATA_ENGINEERING_MASTERS_FAQS } from '@/data/dataEngineeringMastersData'
import { PROMPT_ENGINEERING_FAQS } from '@/data/promptEngineeringData'
import { DIGITAL_MARKETING_FAQS } from '@/data/digitalMarketingData'
import { AI_IN_DIGITAL_MARKETING_FAQS } from '@/data/aiInDigitalMarketingData'
import { AI_BOOTCAMP_FAQS } from '@/data/aiBootcampData'

/**
 * BLG-122 — /llms-full.txt
 *
 * The companion to /llms.txt. Where /llms.txt is a short, curated index
 * of CDPL's pages, /llms-full.txt is the *full text* — the same brand /
 * business / course frame plus every published blog post's body, flattened
 * to plain markdown so an AI engine (ChatGPT, Claude, Perplexity, Gemini)
 * can ingest the whole site in one fetch without crawling JS-rendered
 * pages individually.
 *
 * BLG-122 enhancement (May 2026) — adds **per-course FAQs** (25 leaf
 * courses) on top of the curated frame and blog bodies, so AI engines
 * ingest the concrete Q&A pairs that students actually ask. The FAQs
 * live in src/data/*Data.ts files (each course exports its own
 * `*_FAQS` constant); the curated frame already covers course names,
 * URLs and one-line descriptions. When the BLG-133 course migration to
 * Sanity ships, this registry can switch to a single GROQ fetch.
 *
 * Cached for an hour at the edge; refreshed on demand whenever the
 * revalidate webhook (BLG-006) calls `revalidateTag('post')`.
 */

// The curated frame is kept in sync with `public/llms.txt`. The static file
// is the canonical short index; this constant lets the route serve the same
// content without filesystem reads inside the serverless function.
const FRAME = `# Cinute Digital Pvt. Ltd. (CDPL)

> Industry-ready IT training and certification institute based in Mira Road, Mumbai, India. Hands-on, mentor-led courses in Software Testing, Data Science, Machine Learning, Business Intelligence, Artificial Intelligence and Digital Marketing, with placement assistance.

## About Cinute Digital
Cinute Digital Pvt. Ltd. (CDPL) is an EdTech institute that bridges the gap between academic education and industry demand. Founded in 2020 by Sandeep Maske, CDPL delivers practical, project-based training designed by industry practitioners so students and working professionals gain skills that are immediately applicable on the job. CDPL is an ISTQB Training Partner with AAA and ACTD accreditation and provides placement assistance, including resume support, mock interviews and referrals to hiring partners.

## Contact & Location (NAP)
- **Legal name**: Cinute Digital Private Limited
- **Address**: Office #1, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai 401107, Maharashtra, India
- **Phone**: +91 8488988984
- **Email**: contact@cinutedigital.com
- **Founded**: 2020
- **Founder**: Sandeep Maske
- **Rating**: 4.9 / 5 (425 verified reviews)

## Core Course Categories

### 1. Software Testing
Quality Assurance training covering the full testing lifecycle, from fundamentals to automation frameworks and CI/CD.
- **[Software Testing Courses (category)](https://www.cinutedigital.com/courses/software-testing-course)**
- **[Manual Testing Course](https://www.cinutedigital.com/courses/software-testing-course/manual-testing-course)**: Functional testing, SDLC/STLC, test case design, defect tracking with Jira, Agile, ISTQB preparation.
- **[Automation Testing Course](https://www.cinutedigital.com/courses/software-testing-course/automation-testing-course)**: Selenium WebDriver, Java/Python, TestNG/JUnit, CI/CD with Jenkins.
- **[Advanced Manual + Automation Testing](https://www.cinutedigital.com/courses/software-testing-course/advance-manual-automation-testing)**: Combined manual and automation master program.
- **[Advanced Software Testing](https://www.cinutedigital.com/courses/software-testing-course/advance-software-testing)**: Full-stack QA including CI/CD integration.
- **[API Testing](https://www.cinutedigital.com/courses/software-testing-course/api-testing)**: REST Assured and Postman for backend validation.
- **[ETL Testing](https://www.cinutedigital.com/courses/software-testing-course/etl-testing)**: Data warehouse testing and validation.
- **[DBMS Course](https://www.cinutedigital.com/courses/software-testing-course/dbms-course)**: Database management and SQL for testers.
- **[Python Course](https://www.cinutedigital.com/courses/software-testing-course/python-course)**: Python programming for testing and automation.
- **[Java Course](https://www.cinutedigital.com/courses/software-testing-course/java-course)**: Java programming for automation testing.

### 2. Data Science & Machine Learning
- **[Data Science & ML Courses (category)](https://www.cinutedigital.com/courses/ds-ml-courses)**
- **[Data Science Course](https://www.cinutedigital.com/courses/ds-ml-courses/data-science-course)**: Python, statistics, exploratory data analysis and machine learning.
- **[Machine Learning Course](https://www.cinutedigital.com/courses/ds-ml-courses/machine-learning-course)**: Supervised and unsupervised learning, regression, classification, clustering.
- **[Machine Learning using Python](https://www.cinutedigital.com/courses/ds-ml-courses/machine-learning-using-python)**: Applied ML with the Python ecosystem.
- **[Generative AI Course](https://www.cinutedigital.com/courses/ds-ml-courses/generative-ai-course)**: LLMs, RAG pipelines and building AI-powered applications.
- **[Artificial Intelligence Course](https://www.cinutedigital.com/courses/ds-ml-courses/ai-course)**: Foundations of AI, neural networks and deep learning.
- **[Data Visualization in R Programming](https://www.cinutedigital.com/courses/ds-ml-courses/data-visualization-in-r-programming)**: Visual analytics with R.

### 3. Business Intelligence (BI) & Data Analytics
- **[BI Courses (category)](https://www.cinutedigital.com/courses/bi-courses)**
- **[Data Analytics](https://www.cinutedigital.com/courses/bi-courses/data-analytics)**: End-to-end analytics for business professionals.
- **[Data Analytics & Visualization](https://www.cinutedigital.com/courses/bi-courses/data-analytics-and-visualization)**: Analytics with a visualization focus.
- **[Data Analytics with Python](https://www.cinutedigital.com/courses/bi-courses/data-analytics-python)**: Analytics using the Python stack.
- **[Data Analytics with Tableau](https://www.cinutedigital.com/courses/bi-courses/data-analytics-with-tableau)**: Visual analytics and data storytelling with Tableau.
- **[Power BI Course](https://www.cinutedigital.com/courses/bi-courses/power-bi-course)**: Interactive dashboards and reports with Microsoft Power BI.
- **[Masters in Data Engineering](https://www.cinutedigital.com/courses/bi-courses/masters-in-data-engineering)**: Big Data engineering with Hadoop, Spark and cloud data platforms.

### 4. Artificial Intelligence
- **[Artificial Intelligence Courses (category)](https://www.cinutedigital.com/courses/artificial-intelligence-courses)**
- **[Prompt Engineering Course](https://www.cinutedigital.com/courses/artificial-intelligence-courses/prompt-engineering-course)**: Effective prompting and working with AI models.

### 5. Digital Marketing
- **[Digital Marketing Courses (category)](https://www.cinutedigital.com/courses/digital-marketing-courses)**
- **[Digital Marketing Course](https://www.cinutedigital.com/courses/digital-marketing-courses/digital-marketing-course)**: SEO, SEM, social media marketing and content strategy.
- **[AI in Digital Marketing](https://www.cinutedigital.com/courses/digital-marketing-courses/ai-in-digital-marketing)**: AI tools for content, ad optimization and customer analytics.
- **[AI-Powered Digital Marketing Bootcamp](https://www.cinutedigital.com/courses/digital-marketing-courses/ai-bootcamp)**: Intensive AI + digital marketing bootcamp.

## Certifications & Assessments
- **[AAA Certification](https://www.cinutedigital.com/aaa-certification)**: Advanced Automation Architecture certification program.
- **[ACTD Certification](https://www.cinutedigital.com/actd-certification)**: Agile, Cloud and Test-Driven Development certification.
- **[ISTQB Registration](https://www.cinutedigital.com/istqb-registration)**: ISTQB certification exam registration and preparation.
- **[Certificate Validation](https://www.cinutedigital.com/cdpl-certificate-validation)**: Verify the authenticity of a CDPL certificate.
- **[Mock Tests](https://www.cinutedigital.com/mock-test)**: Practice assessments across software testing, databases, cloud, automation, security and development.

## City-Specific Course Pages
CDPL publishes localized course pages for learners across many Indian cities (for example, manual testing, automation testing, data science and digital marketing courses tailored to a specific city). These follow the pattern \`https://www.cinutedigital.com/{course}-course-in-{city}\` and are listed in the sitemap at https://www.cinutedigital.com/sitemap.xml.

## Why Choose CDPL?
- **Mentor-led learning**: Courses taught by working industry professionals.
- **Live projects**: Real-world, project-based curriculum.
- **Recognized certifications**: ISTQB Training Partner; AAA and ACTD accreditation.
- **Placement assistance**: Resume building, mock interviews and referrals to hiring partners.

## Corporate Training & Services
- **[Services](https://www.cinutedigital.com/services)**: Corporate training, workshops, faculty development, STTP, internships and custom training solutions.

## Resources & Links
- **[Blog & Insights](https://www.cinutedigital.com/blog)**: Articles and tutorials on technology and EdTech.
- **[Events & Workshops](https://www.cinutedigital.com/events)**: Webinars, seminars and industrial visits.
- **[Placements](https://www.cinutedigital.com/jobs/placements)**: Student placement outcomes.
- **[Live Jobs](https://www.cinutedigital.com/jobs/live-jobs)**: Curated job listings for learners.
- **[Careers at CDPL](https://www.cinutedigital.com/jobs/careers)**: Open roles at Cinute Digital.
- **[Reviews](https://www.cinutedigital.com/reviews)**: Student reviews and testimonials.
- **[Mentors](https://www.cinutedigital.com/mentors)**: CDPL's training mentors.
- **[Locations We Serve](https://www.cinutedigital.com/locations-we-serve)**: Cities and regions covered.
- **[About Us](https://www.cinutedigital.com/about-us)**: Company background.
- **[Contact Us](https://www.cinutedigital.com/contact-us)**: Get in touch with CDPL.

## AI / LLM Endpoints
For AI agents and language models indexing CDPL:
- **[/llms.txt](https://www.cinutedigital.com/llms.txt)** (this file): short curated index of CDPL pages, contact details, course catalog and key resources.
- **[/llms-full.txt](https://www.cinutedigital.com/llms-full.txt)**: the full text — same curated frame plus rich service descriptions, featured event recaps, 25 per-course FAQ collections, an events FAQ, and every published blog post's body flattened to plain markdown. Cached for 1 hour at the edge. Use this when you need the complete CDPL knowledge base in a single fetch.

## Social Profiles
- LinkedIn: https://www.linkedin.com/company/cinute-digital/
- Facebook: https://www.facebook.com/cinutedigital
- Instagram: https://www.instagram.com/cinutedigital
- YouTube: https://www.youtube.com/@cinutedigital
- X (Twitter): https://x.com/cinutedigital
`

// All published posts with their Portable Text body, ordered newest first.
// Heavier than the standard POSTS_QUERY because it pulls `content` for every
// post — that is the whole point of /llms-full.txt — and is cached for an
// hour so the cost is paid at most once per cycle.
const POSTS_FULL_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishDate desc) {
  _id,
  title,
  "slug": slug.current,
  publishDate,
  excerpt,
  "author": author->name,
  "category": category->name,
  tags,
  content
}`

type PostFull = {
    _id: string
    title: string
    slug: string
    publishDate: string
    excerpt?: string
    author?: string
    category?: string
    tags?: string[]
    content?: unknown
}

// BLG-122 enhancement — per-course FAQs registry.
//
// Keyed by course slug (path-relative, no leading slash) so the renderer
// can walk `courseCategories` from headerData and look each course's FAQs
// up by slug. Every FAQ collection across the 25 *Data.ts files conforms
// to `{ question, answer, category? }` (some carry extra UI fields like
// `accent` / `emoji` that we ignore in the text output).
type CourseFaqEntry = {
    question: string
    answer: string
    category?: string
}

const COURSE_FAQS_BY_SLUG: Record<string, ReadonlyArray<CourseFaqEntry>> = {
    // Software Testing
    'courses/software-testing-course/manual-testing-course': MANUAL_TESTING_FAQS,
    'courses/software-testing-course/api-testing': API_TESTING_FAQS,
    'courses/software-testing-course/dbms-course': DBMS_FAQS,
    'courses/software-testing-course/etl-testing': ETL_TESTING_FAQS,
    'courses/software-testing-course/advance-software-testing': ADVANCED_TESTING_FAQS,
    'courses/software-testing-course/automation-testing-course': AUTOMATION_TESTING_FAQS,
    'courses/software-testing-course/advance-manual-automation-testing': ADVANCE_MANUAL_AUTOMATION_FAQS,
    'courses/software-testing-course/python-course': PYTHON_FAQS,
    'courses/software-testing-course/java-course': JAVA_FAQS,
    // Data Science & ML
    'courses/ds-ml-courses/machine-learning-course': MACHINE_LEARNING_FAQS,
    'courses/ds-ml-courses/generative-ai-course': GENERATIVE_AI_FAQS,
    'courses/ds-ml-courses/data-science-course': DATA_SCIENCE_FAQS,
    'courses/ds-ml-courses/ai-course': AI_FAQS,
    'courses/ds-ml-courses/machine-learning-using-python': ML_PYTHON_FAQS,
    'courses/ds-ml-courses/data-visualization-in-r-programming': R_DATA_VIS_FAQS,
    // BI
    'courses/bi-courses/data-analytics': DATA_ANALYTICS_FAQS,
    'courses/bi-courses/data-analytics-python': DATA_ANALYTICS_PYTHON_FAQS,
    'courses/bi-courses/data-analytics-and-visualization': DATA_ANALYTICS_VIS_FAQS,
    'courses/bi-courses/data-analytics-with-tableau': DATA_ANALYTICS_TABLEAU_FAQS,
    'courses/bi-courses/power-bi-course': POWER_BI_FAQS,
    'courses/bi-courses/masters-in-data-engineering': DATA_ENGINEERING_MASTERS_FAQS,
    // AI
    'courses/artificial-intelligence-courses/prompt-engineering-course': PROMPT_ENGINEERING_FAQS,
    // Digital Marketing
    'courses/digital-marketing-courses/digital-marketing-course': DIGITAL_MARKETING_FAQS,
    'courses/digital-marketing-courses/ai-in-digital-marketing': AI_IN_DIGITAL_MARKETING_FAQS,
    'courses/digital-marketing-courses/ai-bootcamp': AI_BOOTCAMP_FAQS,
}

const SITE_URL = 'https://www.cinutedigital.com'

function renderCourseFaqs(course: Course): string | null {
    if (!course.slug) return null
    const faqs = COURSE_FAQS_BY_SLUG[course.slug]
    if (!faqs || faqs.length === 0) return null

    const parts: string[] = [
        `### ${course.name}`,
        `URL: ${SITE_URL}/${course.slug}`,
    ]
    if (course.description) {
        parts.push('', course.description)
    }
    parts.push('')
    for (const faq of faqs) {
        const q = faq.question?.trim()
        const a = faq.answer?.trim()
        if (!q || !a) continue
        parts.push(`**Q: ${q}**`, '', a, '')
    }
    return parts.join('\n').trimEnd()
}

function renderCourseFaqsSection(): string {
    const sections: string[] = []
    for (const category of courseCategories) {
        const categoryBlocks: string[] = []
        for (const course of category.courses ?? []) {
            const rendered = renderCourseFaqs(course)
            if (rendered) categoryBlocks.push(rendered)
        }
        if (categoryBlocks.length === 0) continue
        sections.push(`## Course FAQs — ${category.name}`, ...categoryBlocks)
    }
    return sections.length === 0 ? '' : `\n${sections.join('\n\n')}\n`
}

// Render a `- Label: value` line; collapses to nothing if value is empty.
function bulletLine(label: string, value?: string): string | null {
    const v = value?.trim()
    return v ? `- **${label}:** ${v}` : null
}

// Render a sub-list with a leading label. Returns null if the list is empty.
function bulletList(label: string, items?: ReadonlyArray<string>): string | null {
    if (!items || items.length === 0) return null
    const cleaned = items.map((s) => s?.trim()).filter(Boolean) as string[]
    if (cleaned.length === 0) return null
    return [`**${label}:**`, ...cleaned.map((s) => `- ${s}`)].join('\n')
}

// BLG-122 enhancement v2 — rich Services content.
//
// Walks the Sanity-backed services list (with local trainingServices
// fallback inside getServices()) and emits each service's full editorial
// payload — tagline, descriptions, features, benefits, who-should-attend,
// outcomes, methodology, delivery formats — so an AI engine ingests the
// concrete value proposition for each, not just the URL.
async function renderServicesSection(): Promise<string> {
    const services = await getServices()
    if (services.length === 0) return ''

    const blocks = services.map((service) => {
        const lines: string[] = [
            `### ${service.title}`,
            `URL: ${SITE_URL}/services/${service.slug}`,
        ]
        const tagline = bulletLine('Tagline', service.tagline)
        if (tagline) lines.push(tagline)

        if (service.shortDescription) {
            lines.push('', service.shortDescription.trim())
        }
        if (
            service.fullDescription &&
            service.fullDescription.trim() !== service.shortDescription?.trim()
        ) {
            lines.push('', service.fullDescription.trim())
        }

        const features = bulletList('Key Features', service.features)
        const benefits = bulletList('Benefits', service.benefits)
        const audience = bulletList('Who Should Attend', service.whoShouldAttend)
        const outcomes = bulletList('Outcomes', service.outcomes)
        const methodology = bulletList('Methodology', service.methodology)

        if (features) lines.push('', features)
        if (benefits) lines.push('', benefits)
        if (audience) lines.push('', audience)
        if (outcomes) lines.push('', outcomes)
        if (methodology) lines.push('', methodology)

        if (service.deliveryFormats && service.deliveryFormats.length > 0) {
            const formatted = service.deliveryFormats
                .map((d) => {
                    const head = `- ${d.format}${d.duration ? ` (${d.duration})` : ''}`
                    return d.description?.trim() ? `${head}: ${d.description.trim()}` : head
                })
                .join('\n')
            lines.push('', '**Delivery Formats:**', formatted)
        }

        return lines.join('\n').trimEnd()
    })

    return `\n## Services\n\n${blocks.join('\n\n')}\n`
}

// BLG-122 enhancement v2 — rich Events content.
//
// Only featured events are emitted, so the section stays focused on the
// editorial case-studies CDPL wants AI engines to surface (MoU signings,
// flagship workshops) rather than every minor session. Falls open to the
// local `pastEvents` array via getEvents() when Sanity is empty.
async function renderEventsSection(): Promise<string> {
    const events = await getEvents()
    const featured = events.filter((e) => e.featured)
    if (featured.length === 0) return ''

    const blocks = featured.map((event) => {
        const lines: string[] = [
            `### ${event.title}`,
            `URL: ${SITE_URL}/events/${event.slug}`,
        ]
        const meta: string[] = []
        if (event.date) meta.push(`Date: ${event.date}`)
        if (event.location) meta.push(`Location: ${event.location}`)
        if (event.attendees) meta.push(`Attendees: ${event.attendees}+`)
        if (event.category) meta.push(`Category: ${event.category}`)
        if (meta.length > 0) lines.push(meta.join(' · '))

        if (event.purpose?.trim()) {
            lines.push('', event.purpose.trim())
        }

        if (event.sessionHighlights && event.sessionHighlights.length > 0) {
            lines.push('', '**Session Highlights:**')
            for (const session of event.sessionHighlights) {
                if (!session.title) continue
                lines.push(`- ${session.title}`)
                for (const point of session.points ?? []) {
                    const p = point?.trim()
                    if (p) lines.push(`  - ${p}`)
                }
            }
        }

        if (event.keyTakeaways && event.keyTakeaways.length > 0) {
            lines.push('', '**Key Takeaways:**')
            for (const t of event.keyTakeaways) {
                if (!t.title || !t.description) continue
                lines.push(`- **${t.title.trim()}** — ${t.description.trim()}`)
            }
        }

        if (event.success?.trim()) {
            lines.push('', event.success.trim())
        }

        return lines.join('\n').trimEnd()
    })

    return `\n## Events\n\n${blocks.join('\n\n')}\n`
}

// BLG-122 enhancement v2 — Events FAQ from PAST_EVENTS_FAQS.
function renderEventsFaqSection(): string {
    if (PAST_EVENTS_FAQS.length === 0) return ''
    const parts: string[] = ['', '## Events — FAQ', '']
    for (const faq of PAST_EVENTS_FAQS) {
        const q = faq.question?.trim()
        const a = faq.answer?.trim()
        if (!q || !a) continue
        parts.push(`**Q: ${q}**`, '', a, '')
    }
    return `${parts.join('\n').trimEnd()}\n`
}

export const revalidate = 3600

export async function GET() {
    // Fan out the three async sources in parallel so the response time is
    // bounded by the slowest fetch, not the sum.
    const [posts, servicesSection, eventsSection] = await Promise.all([
        client.fetch<PostFull[]>(
            POSTS_FULL_QUERY,
            {},
            { next: { revalidate: 3600, tags: ['post'] } },
        ),
        renderServicesSection(),
        renderEventsSection(),
    ])

    const blogSection =
        posts.length === 0
            ? ''
            : [
                  '',
                  '## Blog Posts',
                  '',
                  ...posts.map((post) => {
                      const body = Array.isArray(post.content)
                          ? toPlainText(
                                post.content as Parameters<typeof toPlainText>[0],
                            ).trim()
                          : ''
                      const meta: string[] = [
                          `URL: ${SITE_URL}/blog/${post.slug}`,
                          `Published: ${new Date(post.publishDate).toISOString().split('T')[0]}`,
                      ]
                      if (post.author) meta.push(`Author: ${post.author}`)
                      if (post.category) meta.push(`Category: ${post.category}`)
                      if (post.tags?.length) meta.push(`Tags: ${post.tags.join(', ')}`)

                      const parts: string[] = [`### ${post.title}`, meta.join(' · ')]
                      if (post.excerpt?.trim()) parts.push('', post.excerpt.trim())
                      if (body) parts.push('', body)
                      return parts.join('\n')
                  }),
              ].join('\n\n')

    const courseFaqsSection = renderCourseFaqsSection()
    const eventsFaqSection = renderEventsFaqSection()

    // Order: FRAME (curated index) → Services (rich) → Events (rich) →
    // Course FAQs (Q&A) → Events FAQ (Q&A) → Blog Posts (long-form).
    // Structural-content-first, then conversational Q&A, then the
    // heavyweight blog bodies an AI engine treats as deepest context.
    const body = `${FRAME}${servicesSection}${eventsSection}${courseFaqsSection}${eventsFaqSection}\n${blogSection}\n`

    return new Response(body, {
        headers: {
            'content-type': 'text/plain; charset=utf-8',
            // 1 hour browser/CDN cache, plus 24 hours of stale-while-revalidate
            // so the next request after expiry is served instantly while the
            // cache refreshes in the background.
            'cache-control':
                'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        },
    })
}
