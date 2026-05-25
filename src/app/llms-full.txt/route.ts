import { groq } from 'next-sanity'
import { toPlainText } from '@portabletext/toolkit'

import { client } from '@/sanity/client'

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

export const revalidate = 3600

export async function GET() {
    const posts: PostFull[] = await client.fetch(
        POSTS_FULL_QUERY,
        {},
        { next: { revalidate: 3600, tags: ['post'] } },
    )

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
                          `URL: https://www.cinutedigital.com/blog/${post.slug}`,
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

    const body = `${FRAME}\n${blogSection}\n`

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
