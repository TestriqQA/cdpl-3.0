export const content = {
    introduction: `<p>Next.js 15 delivers the full-stack React experience teams have wanted: <strong>React Server Components (RSC)</strong>, the <strong>App Router</strong>, <strong>Incremental Static Regeneration (ISR)</strong>, <strong>edge rendering</strong>, first-class <strong>image & font optimization</strong>, and a powerful <strong>Metadata API</strong> for SEO. If you’re running a <strong>Gatsby</strong> or <strong>Create React App (CRA)</strong> site and need faster builds, dynamic personalization, or better Core Web Vitals, this step-by-step migration guide will get you to Next.js 15 with minimal friction—and maximum long-term wins.</p>
  <p>We’ll cover planning, project bootstrapping, routing differences, data fetching, SEO and redirects, styling and assets, testing, and CI/CD. You’ll learn how to map Gatsby GraphQL queries or CRA client-only fetches into <em>server-first</em> patterns that ship HTML quickly, reduce client JS, and preserve (or improve) rankings.</p>`,

    sections: [
        {
            title: "1) Plan Your Migration: Inventory, Priorities, and Cutover",
            content: `<p>Start with an audit. The right plan reduces risk and keeps organic traffic steady.</p>
      <ul>
        <li><strong>Inventory pages &amp; routes:</strong> List URLs, templates, and dynamic parameters (e.g., /blog/[slug]).</li>
        <li><strong>Data sources:</strong> Note CMSes, Markdown, REST/GraphQL endpoints, environment variables, and build steps.</li>
        <li><strong>SEO assets:</strong> Titles, meta descriptions, canonical tags, <code>hreflang</code>, structured data, sitemaps, robots rules.</li>
        <li><strong>Performance:</strong> Largest media, fonts, third-party scripts; identify LCP/INP/CLS offenders.</li>
        <li><strong>Cutover strategy:</strong> Big bang vs. <em>incremental</em> (subpaths, reverse proxy, or DNS split by route).</li>
      </ul>
      <p><strong>Tip:</strong> Migrate the highest-value, low-complexity paths first (e.g., marketing pages, docs, blog), then complex app areas.</p>`
        },

        {
            title: "2) Create the Next.js 15 App (App Router + RSC)",
            content: `<div class="code-block">
        <pre><code class="language-bash">npx create-next-app@latest next15-migrate --ts --eslint
cd next15-migrate
# App Router is default; ensure /app exists
tree -L 2 app</code></pre>
      </div>
      <p>Next.js 15 is <em>RSC-first</em>. Keep components server by default, add <code>"use client"</code> only where interactivity is needed. This reduces bundle size and improves Time to Interactive.</p>`
        },

        {
            title: "3) Routing Differences: Gatsby/CRA → App Router",
            content: `<p>Gatsby maps files in <code>src/pages</code>, and can create pages programmatically in <code>gatsby-node</code>. CRA relies on <code>react-router</code>. In Next.js 15, use <strong>App Router</strong> with nested segments and route groups. Dynamic params are folder names in brackets.</p>
      <div class="code-block">
        <pre><code class="language-text">Gatsby:  src/pages/blog/{slug}.js
CRA:     &lt;Route path="/blog/:slug" element={...} /&gt;
Next 15: app/(marketing)/blog/[slug]/page.tsx</code></pre>
      </div>
      <div class="code-block">
        <pre><code class="language-tsx">// app/(marketing)/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/cms";

export const dynamic = "force-static"; // Static by default, opt into ISR via revalidate
export const revalidate = 600; // 10min ISR

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();
  return (
    &lt;article&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;p className="lead"&gt;{post.excerpt}&lt;/p&gt;
      &lt;div dangerouslySetInnerHTML={{ __html: post.html }} /&gt;
    &lt;/article&gt;
  );
}</code></pre>
      </div>
      <p>Use <strong>Route Groups</strong> like <code>app/(marketing)</code> to separate SEO’d content from app dashboards where you might set <code>robots: noindex</code>.</p>`
        },

        {
            title: "4) Data Fetching: From Gatsby GraphQL/StaticQuery & CRA Fetch to RSC",
            content: `<p>Gatsby relies on GraphQL at build time. CRA fetches on the client (CSR). In Next.js 15, fetch data <em>on the server</em> using RSC and control caching/ISR precisely.</p>
      <div class="code-block">
        <pre><code class="language-ts">// lib/cms.ts (RSC-friendly fetch)
export async function getPostBySlug(slug: string) {
  const res = await fetch(\`https://cms.example.com/posts/\${slug}\`, {
    next: { revalidate: 600, tags: [\`post:\${slug}\`] }, // ISR + on-demand hooks
  });
  if (!res.ok) return null;
  return res.json();
}</code></pre>
      </div>
      <p>For Gatsby Markdown, read files at build time or use a headless CMS. For CRA APIs previously called client-side, move them server-side in the route and pass minimal props to client components.</p>
      <p><strong>On-demand revalidation:</strong> trigger from your CMS on publish to refresh the cache immediately.</p>
      <div class="code-block">
        <pre><code class="language-ts">// app/api/revalidate/route.ts
import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
  const { tag, secret } = await req.json();
  if (secret !== process.env.REVALIDATE_TOKEN) return new Response("Unauthorized", { status: 401 });
  revalidateTag(tag);
  return Response.json({ revalidated: true });
}</code></pre>
      </div>`
        },

        {
            title: "5) SEO Migration: Metadata API, Canonicals, Hreflang, Structured Data",
            content: `<p>Replace Gatsby plugins or CRA head management with the <strong>Metadata API</strong>. Co-locate meta with the route so it stays in sync with content.</p>
      <div class="code-block">
        <pre><code class="language-ts">/// app/(marketing)/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/cms";

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise&lt;Metadata&gt; {
  const post = await getPostBySlug(params.slug);
  const url = \`https://example.com/blog/\${params.slug}\`;
  return {
    title: post?.seoTitle ?? post?.title ?? "Blog",
    description: post?.seoDescription ?? post?.excerpt,
    alternates: {
      canonical: url,
      languages: { "en": url, "hi": url.replace("/blog/", "/hi/blog/") }
    },
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      url,
      type: "article",
      images: post?.ogImage ? [{ url: post.ogImage, width: 1200, height: 630 }] : []
    },
    robots: { index: true, follow: true }
  };
}</code></pre>
      </div>
      <p>Render JSON-LD server-side to ensure parsers see it in the initial HTML.</p>
      <div class="code-block">
        <pre><code class="language-tsx">// app/(marketing)/blog/[slug]/Schema.tsx
export default function ArticleSchema({ post }: { post: any }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: [{ "@type": "Person", name: post.author.name }],
    image: [post.ogImage]
  };
  return (&lt;script type="application/ld+json"&gt;{JSON.stringify(data)}&lt;/script&gt;);
}</code></pre>
      </div>`
        },

        {
            title: "6) URLs, Redirects, and Canonicalization",
            content: `<p>Preserve existing URLs where possible. If paths must change, implement 301 redirects and normalize noisy query params using <code>middleware.ts</code>.</p>
      <div class="code-block">
        <pre><code class="language-ts">// next.config.ts (static redirects)
const nextConfig = {
  async redirects() {
    return [
      { source: "/old-blog/:slug/", destination: "/blog/:slug", permanent: true },
    ];
  },
};
export default nextConfig;</code></pre>
      </div>
      <div class="code-block">
        <pre><code class="language-ts">// middleware.ts (canonicalize UTM, trailing slash policy)
import { NextResponse } from "next/server";
export function middleware(req: Request) {
  const url = new URL(req.url);
  ["utm_source","utm_medium","utm_campaign","gclid"].forEach(p =&gt; url.searchParams.delete(p));
  if (!url.pathname.endsWith("/")) { url.pathname += "/"; return NextResponse.redirect(url); }
  return NextResponse.next();
}</code></pre>
      </div>
      <p>Regenerate sitemaps with App Router so search engines discover Next pages quickly.</p>
      <div class="code-block">
        <pre><code class="language-ts">// app/sitemap.ts
import { getAllSlugs } from "@/lib/cms";
export default async function sitemap() {
  const slugs = await getAllSlugs();
  const base = "https://example.com";
  return slugs.map((s) =&gt; ({ url: \`\${base}/blog/\${s}\`, changeFrequency: "weekly", priority: 0.8 }));
}</code></pre>
      </div>`
        },

        {
            title: "7) Images & Fonts: Next.js Optimization for LCP/CLS",
            content: `<p>Replace Gatsby image plugins or CRA image tags with Next.js <code>&lt;Image /&gt;</code> and Google Fonts integration for better <strong>LCP</strong> and <strong>CLS</strong>.</p>
      <div class="code-block">
        <pre><code class="language-tsx">import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function Hero() {
  return (
    &lt;section className={inter.className}&gt;
      &lt;Image src="/hero.jpg" alt="Next.js migration" width={1280} height={720} priority /&gt;
      &lt;h1&gt;Migrate to Next.js 15&lt;/h1&gt;
    &lt;/section&gt;
  );
}</code></pre>
      </div>
      <p>Always set width/height to lock layout, preload the hero image, and lazy-load below-the-fold media. For self-hosted fonts, preload the critical subset.</p>`
        },

        {
            title: "8) Styling, State, and Client Components",
            content: `<p>Bring your existing styling library (Tailwind, CSS Modules, CSS-in-JS). Keep most UI server-rendered; mark interactive islands with <code>"use client"</code>. Avoid global state for public marketing routes; prefer local state or server data.</p>
      <div class="code-block">
        <pre><code class="language-tsx">"use client";
import * as React from "react";
// Client-only interactive widget
export function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  return (
    &lt;form action="/api/subscribe" method="post"&gt;
      &lt;input name="email" value={email} onChange={(e) =&gt; setEmail(e.target.value)} /&gt;
      &lt;button type="submit"&gt;Subscribe&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
      </div>
      <p>Server Components fetch and render content; client components handle events and animations.</p>`
        },

        {
            title: "9) Environment, Config, and Build Pipeline",
            content: `<p>Map your Gatsby/CRA env usage to Next env rules (<code>NEXT_PUBLIC_*</code> for client). Validate at build time.</p>
      <div class="code-block">
        <pre><code class="language-bash"># .env
CMS_URL=https://cms.example.com
NEXT_PUBLIC_ANALYTICS_ID=abc123</code></pre>
      </div>
      <p>Use edge runtime where latency matters (geo redirects, A/B cookies) and Node runtime for heavy server work.</p>`
        },

        {
            title: "10) Testing & Quality Gates: Keep Confidence During Migration",
            content: `<p>Lock behaviors with unit, integration, and e2e tests. If you’re migrating a large site, snapshot legacy HTML where possible and compare key templates.</p>
      <div class="code-block">
        <pre><code class="language-yaml"># .github/workflows/ci.yml (excerpt)
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: "20" }
      - run: npm ci
      - run: npm run lint && npm run typecheck
      - run: npm run test -- --coverage
      - run: npx playwright install --with-deps &amp;&amp; npm run e2e
      - run: npm run lighthouse:ci</code></pre>
      </div>
      <p>Add accessibility checks (axe/Pa11y), and block PRs that regress LCP/INP/CLS beyond budgets.</p>`
        },

        {
            title: "11) Deploy, Observe, and Iterate",
            content: `<p>Deploy to a platform with first-class Next.js support and global edge network. Monitor real-user metrics (RUM), error rates, and crawl stats. Use on-demand revalidation webhooks from your CMS so editors see changes instantly without full rebuilds.</p>
      <ul>
        <li><strong>Observability:</strong> Web Vitals in production, 404/500 logs, slow API traces.</li>
        <li><strong>SEO monitoring:</strong> Crawl new Next routes, verify canonicals and hreflang, watch index coverage.</li>
        <li><strong>Perf budgets:</strong> Bundle size limits, image weight caps, third-party script guards.</li>
      </ul>`
        },

        {
            title: "12) Common Pitfalls (and How to Fix Them)",
            content: `<ul>
        <li><strong>Hydration mismatches:</strong> Split client logic; avoid reading browser-only APIs in RSC. Move such code into <code>"use client"</code> components.</li>
        <li><strong>Lost redirects:</strong> Mirror every Gatsby/CRA redirect in <code>next.config.ts</code> and <code>middleware.ts</code>. Verify with a crawl.</li>
        <li><strong>Slow images:</strong> Missing width/height or priority flags; convert to Next Image.</li>
        <li><strong>Duplicate content:</strong> Normalize trailing slashes, query params, and add consistent canonicals via Metadata API.</li>
        <li><strong>Client-only data:</strong> Move fetches server-side to lower JS cost and improve SEO.</li>
      </ul>`
        },

        {
            title: "13) Quick Checklist: Gatsby/CRA → Next.js 15",
            content: `<ul>
        <li>✅ App Router created; routes mapped (static/dynamic) with ISR where suitable</li>
        <li>✅ Metadata API replacing head management; JSON-LD rendered server-side</li>
        <li>✅ All legacy redirects implemented; sitemap & robots updated</li>
        <li>✅ Images/fonts optimized; LCP asset preloaded; CLS guarded</li>
        <li>✅ Data moved to server; client islands only for interactivity</li>
        <li>✅ On-demand revalidation hooked to CMS</li>
        <li>✅ Tests, a11y checks, Lighthouse budgets in CI</li>
        <li>✅ Observability & RUM in place; post-cutover crawl verified</li>
      </ul>`
        }
    ],

    conclusion: `<p>Migrating from <strong>Gatsby</strong> or <strong>Create React App</strong> to <strong>Next.js 15</strong> unlocks server-first rendering, modern caching, and platform features that make sites faster, more indexable, and easier to maintain. By mapping routes to the <strong>App Router</strong>, moving fetches into <strong>React Server Components</strong>, enabling <strong>ISR</strong>, and using the <strong>Metadata API</strong>, you’ll deliver HTML quickly, reduce JS on the client, and protect Core Web Vitals.</p>
  <p>Adopt an incremental cutover if needed, start with high-impact pages, and validate via redirects, structured data, and RUM. With this playbook, your team can modernize the stack without sacrificing SEO or developer velocity—and set the foundation for personalization, edge logic, and rapid iteration in 2025 and beyond.</p>`,

    relatedPosts: [
        "nextjs-15-seo-guide-master-react-server-components-2025",
        "edge-rendering-with-nextjs",
        "core-web-vitals-optimization-guide",
        "ai-for-frontend-developers-llms-generate-code-tests-docs-2025"
    ]
};

export default content;




