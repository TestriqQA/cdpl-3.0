import { Metadata } from "next";
import { BlogCategoryMenu } from "@/components/blog";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Briefcase,
  Code2,
  Database,
  FileCode2,
  FolderOpen,
  Layers,
  Megaphone,
  RefreshCw,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import BlogCategoriesClient from "./BlogCategoriesClient";
import {
  generateCollectionPageSchema,
  generateItemListSchema,
  generateBreadcrumbSchema
} from "@/lib/schema-generators";
import { generateMetadata as generateSEOMetadata } from "@/lib/metadata-generator";
import JsonLd from "@/components/JsonLd";
import { sanityFetch } from "@/sanity/lib/fetch";
import { CATEGORIES_WITH_COUNTS_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { SanityCategory, SanityPost } from "@/sanity/types";

// ============================================================================
// SEO METADATA
// ============================================================================
// BLG-026/029/030/031/032 (Sprint 1): this page previously hand-rolled its
// entire Metadata object, which shipped placeholder branding ("Your Company",
// "Your Company Tech Blog"), the wrong locale (en_US), a fake en-US hreflang
// alternate, and a redundant per-page metadataBase. Now routed through the
// central generateMetadata helper — single source of truth, correct CDPL
// branding, en_IN locale, no fake hreflang.
export const metadata: Metadata = generateSEOMetadata({
  title: { absolute: "Blog Categories - Explore Tech Topics | CDPL" },
  description:
    "Browse the CDPL tech blog by category — software testing, web development, AI & machine learning, data science, and DevOps. Find the right learning resource.",
  keywords: [
    "blog categories",
    "software testing category",
    "web development articles",
    "AI machine learning blog",
    "data science tutorials",
    "DevOps guides",
    "tech blog categories",
    "programming topics",
    "quality assurance articles",
    "test automation tutorials",
  ],
  url: "/blog/categories",
  image: "/og-images/blog-og.webp",
});

// Visual-only redesign: the text, headings, links, order and structured data
// are the same as before, so the page's SEO is unchanged.

// Topic icon picked from the category name, so new Sanity categories get a
// sensible icon without a code change. First match wins.
const TOPIC_ICONS: [RegExp, LucideIcon][] = [
  [/testing|qa|quality/i, ShieldCheck],
  [/artificial|machine learning|\bai\b|\bml\b/i, Brain],
  [/python/i, FileCode2],
  [/web|full stack|frontend|backend/i, Code2],
  [/power bi|business intelligence|analytics/i, BarChart3],
  [/data/i, Database],
  [/marketing|seo/i, Megaphone],
  [/career|job|interview/i, Briefcase],
];

function topicIcon(name: string): LucideIcon {
  return TOPIC_ICONS.find(([re]) => re.test(name))?.[1] ?? FolderOpen;
}

// Descriptions for categories that have none in Sanity, keyed by slug. A
// description entered in Sanity Studio always wins over these.
const FALLBACK_DESCRIPTIONS: Record<string, string> = {
  python: "Python basics, core libraries, and hands-on coding tutorials for beginners",
  career: "Resume tips, interview preparation, and career guidance for tech freshers",
  "machine-learning-and-python": "Building, training, and deploying machine learning models with Python",
};

// Icon-tile colours rotate through the grid (full class strings so Tailwind
// generates them).
const TILE_COLOURS = [
  "bg-orange-50 text-orange-600 ring-orange-100",
  "bg-sky-50 text-sky-600 ring-sky-100",
  "bg-emerald-50 text-emerald-600 ring-emerald-100",
  "bg-violet-50 text-violet-600 ring-violet-100",
  "bg-rose-50 text-rose-600 ring-rose-100",
  "bg-amber-50 text-amber-600 ring-amber-100",
];

const STAT_CARD = "rounded-2xl border border-slate-200 bg-white p-4 shadow-sm";

const WHY_CARD = "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm";

function WhyIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-brand ring-1 ring-orange-100">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

// ============================================================================
// CATEGORIES PAGE COMPONENT
// ============================================================================
export default async function CategoriesPage() {
  // Fetch categories with counts and latest post from Sanity
  // We also fetch all posts to calculate total count efficiently if needed, or rely on individual calls
  // The query `CATEGORIES_WITH_COUNTS_QUERY` now includes 'count' and 'latestPost'

  // Draft-aware + cache-tagged via sanityFetch (BLG-139/146).
  const categories = await sanityFetch<(SanityCategory & { count: number, latestPost?: any })[]>({
    query: CATEGORIES_WITH_COUNTS_QUERY,
    tags: ['category', 'post'],
  });
  const allPosts = await sanityFetch<SanityPost[]>({ query: POSTS_QUERY, tags: ['post'] }); // Needed for total calculations/SEO

  const categoriesWithCounts = categories
    .filter((cat) => cat.count > 0)
    .map((cat) => ({
      ...cat,
      description: cat.description?.trim() || FALLBACK_DESCRIPTIONS[cat.slug] || cat.description,
    }));

  const totalPosts = allPosts.length;
  const totalCategories = categoriesWithCounts.length;

  // ============================================================================
  // ENHANCED STRUCTURED DATA (JSON-LD)
  // ============================================================================

  // ItemList Schema
  const itemListSchema = generateItemListSchema(
    categoriesWithCounts.map((category) => ({
      name: category.name,
      url: `/blog/category/${category.slug}`,
      description: category.description,
      image: category.latestPost?.featuredImage,
      type: 'Thing'
    })),
    'Blog Categories'
  );

  // CollectionPage Schema
  const collectionPageSchema = generateCollectionPageSchema({
    name: 'Blog Categories - Technology Topics',
    description: 'Browse expert articles by category across software testing, web development, AI, data science, and more',
    url: '/blog/categories',
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Categories', url: '/blog/categories' },
  ]);

  return (
    <>
      {/* Enhanced JSON-LD Structured Data */}
      <JsonLd id="categories-breadcrumb" schema={breadcrumbSchema} />
      <JsonLd id="categories-collection" schema={collectionPageSchema} />
      {itemListSchema && <JsonLd id="categories-itemlist" schema={itemListSchema} />}

      {/* Semantic HTML Structure */}
      <div itemScope itemType="https://schema.org/CollectionPage">
        {/* Category Menu */}
        <nav aria-label="Blog categories">
          <BlogCategoryMenu />
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-b from-orange-50 to-transparent pb-10 pt-14 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-brand">
                <FolderOpen className="h-7 w-7" aria-hidden="true" />
              </span>
              <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Blog Categories - Explore Tech <span className="text-brand">Topics</span>
              </h1>
              <p className="mt-6 mb-4 text-lg leading-relaxed text-gray-700 md:text-xl">
                Explore our comprehensive collection of {totalPosts}+ expert articles organized into{" "}
                {totalCategories} specialized categories. Whether you&apos;re interested in software
                testing, web development, artificial intelligence, data science, or DevOps, we&apos;ve
                curated content to help you master modern technology and advance your career.
              </p>
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                Each category contains in-depth tutorials, best practices, industry insights, and
                practical guides written by experienced professionals with years of hands-on
                experience. Browse by topic below to find exactly what you&apos;re looking for, or
                use the search feature to discover specific content across all categories.
              </p>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className={STAT_CARD}>
                  <div className="text-3xl font-bold text-brand">{totalCategories}</div>
                  <div className="text-sm text-gray-600">Categories</div>
                </div>
                <div className={STAT_CARD}>
                  <div className="text-3xl font-bold text-gray-900">{totalPosts}+</div>
                  <div className="text-sm text-gray-600">Articles</div>
                </div>
                <div className={`${STAT_CARD} col-span-2 md:col-span-1`}>
                  <div className="text-3xl font-bold text-gray-900">Weekly</div>
                  <div className="text-sm text-gray-600">Updates</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Introduction Section for SEO */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Complete Technology Learning Resource
              </h2>
              <div className="grid gap-4 text-gray-600 leading-relaxed lg:grid-cols-3 lg:gap-8">
                <p>
                  Our blog is your comprehensive resource for the latest in software engineering,
                  quality assurance, and technology innovation, organized into curated categories so
                  you can find relevant information quickly.
                </p>
                <p>
                  From foundational concepts to advanced techniques, our articles cover the full
                  spectrum of modern software development, whether you&apos;re a beginner in
                  programming, an experienced developer, or a tech leader following industry trends.
                </p>
                <p>
                  Each category is regularly updated with the latest best practices, emerging
                  technologies, and industry insights from expert authors with real-world experience,
                  shared as practical knowledge you can apply in your projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="pb-12 pt-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore by Category</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoriesWithCounts.map((category, i) => {
                const Icon = topicIcon(category.name);
                return (
                  <article
                    key={category.slug}
                    className="group relative rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-md"
                    itemScope
                    itemType="https://schema.org/Thing"
                  >
                    <div className="flex h-full flex-col p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <span
                          className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${TILE_COLOURS[i % TILE_COLOURS.length]}`}
                        >
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">
                          {category.count} {category.count === 1 ? "Post" : "Posts"}
                        </span>
                      </div>
                      <h3
                        className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-brand"
                        itemProp="name"
                      >
                        {/* The ::after overlay stretches this link over the whole
                            card, so the card still opens the category; the latest
                            article sits above it as its own link. */}
                        <Link
                          href={`/blog/category/${category.slug}`}
                          className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-brand"
                        >
                          {category.name}
                        </Link>
                      </h3>
                      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-slate-600" itemProp="description">
                        {category.description}
                      </p>

                      {category.latestPost && (
                        <Link
                          href={`/blog/${category.latestPost.slug}`}
                          className="group/latest relative z-10 mb-5 block rounded-xl bg-slate-50 p-3 ring-1 ring-transparent transition hover:bg-orange-50 hover:ring-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                        >
                          <div className="mb-2 flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            <TrendingUp className="h-3 w-3" />
                            Latest Article
                          </div>
                          <h4 className="mb-1 line-clamp-2 text-sm font-semibold text-gray-800 transition-colors group-hover/latest:text-brand">
                            {category.latestPost.title}
                          </h4>
                          <p className="line-clamp-2 text-xs text-slate-500">
                            {category.latestPost.description}
                          </p>
                        </Link>
                      )}

                      <div className="mt-auto flex items-center justify-end border-t border-slate-100 pt-4">
                        <span className="flex items-center gap-1 text-sm font-semibold text-brand transition-all group-hover:gap-2">
                          Explore <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional SEO Content */}
        <aside className="border-t border-slate-200 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Blog?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className={WHY_CARD}>
                <WhyIcon icon={Layers} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Comprehensive Coverage
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We cover the entire technology stack, from frontend frameworks to backend
                  architectures, from manual testing to AI-powered automation, ensuring you have
                  access to knowledge across all domains of modern software development.
                </p>
              </div>
              <div className={WHY_CARD}>
                <WhyIcon icon={UserCheck} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Authors</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our content is created by industry professionals with proven track records at
                  leading technology companies. They share real-world insights, battle-tested
                  solutions, and practical advice you can trust.
                </p>
              </div>
              <div className={WHY_CARD}>
                <WhyIcon icon={RefreshCw} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regularly Updated</h3>
                <p className="text-gray-600 leading-relaxed">
                  Technology evolves rapidly, and so does our content. We publish new articles
                  weekly and update existing content to reflect the latest best practices, tools,
                  and industry standards.
                </p>
              </div>
              <div className={WHY_CARD}>
                <WhyIcon icon={Target} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Actionable Insights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every article includes practical examples, code snippets, and step-by-step
                  guides that you can implement immediately. We focus on solutions that work in
                  real-world production environments.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Client-side query param handling */}
      <BlogCategoriesClient />
    </>
  );
}
