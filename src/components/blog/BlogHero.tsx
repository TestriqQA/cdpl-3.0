import { Calendar, Clock, User, ArrowRight, Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SanityPost } from "@/sanity/types";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
];

interface BlogHeroProps {
  post?: SanityPost;
}

const BlogHero = ({ post }: BlogHeroProps) => {
  if (!post) return null;

  // Sanity data comes with expanded objects
  const { category, author } = post;

  if (!category || !author) return null;

  // Format date
  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs for SEO & UX */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((c, i) => {
              const isLast = i === breadcrumbs.length - 1;
              return (
                <li key={i} className="flex items-center gap-2">
                  {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  {isLast ? (
                    <span className="font-semibold text-slate-900 cursor-default">
                      {c.label}
                    </span>
                  ) : (
                    <Link
                      href={c.href}
                      className="hover:text-indigo-700 transition-colors"
                    >
                      {c.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Featured Article Card */}
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Left Column - Content */}
            <div className="space-y-6">
              {/* Category Badge */}
              <span
                className={`inline-block px-3 py-1 ${category.color?.bg || 'bg-blue-100'} ${category.color?.text || 'text-blue-800'} text-xs font-semibold rounded-md`}
              >
                {category.name}
              </span>

              {/* Title - Optimized for readability */}
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight hover:text-indigo-600 transition-colors duration-300">
                  {post.title}
                </h2>
              </Link>

              {/* Description - Optimal reading color */}
              <p className="mt-5 text-gray-700 text-lg leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Information - Subtle but readable */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-indigo-600" />
                  <span className="font-medium">{author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  <span>{formattedDate}</span>
                </div>
                {post.readTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <span>{post.readTime}</span>
                  </div>
                )}
              </div>

              {/* CTA Button - High contrast */}
              <div>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg h-11 px-6 py-2 transform hover:-translate-y-0.5 duration-200">
                  Read Full Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column - Featured Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-video rounded-xl shadow-md overflow-hidden border border-gray-200 bg-gradient-to-br from-indigo-50 to-blue-50">
                {post.featuredImage ? (
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="hover:scale-105 transition-transform duration-500 object-cover"
                    sizes="(max-width: 768px) calc(100vw - 6rem), 50vw"
                    priority
                    quality={90}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-indigo-100">
                    <span className="text-indigo-400 font-bold">Featured Post</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogHero;
