"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug } from '@/data/BlogPostData';

interface BlogContentRendererProps {
  slug: string;
}

interface ContentSection {
  title: string;
  content: string;
  image?: string;
}

interface BlogContent {
  introduction: string;
  sections: ContentSection[];
  conclusion: string;
  relatedPosts?: string[];
}

const BlogContentRenderer: React.FC<BlogContentRendererProps> = ({ slug }) => {
  const [content, setContent] = React.useState<BlogContent | null>(null);
  const [loading, setLoading] = React.useState(true);


  React.useEffect(() => {
    async function loadContent() {
      try {
        const contentModule = await import(`@/content/posts/${slug}.tsx`);
        setContent(contentModule.content || contentModule.default);
      } catch (error) {
        console.error('Error loading blog content:', error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      loadContent();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse space-y-8">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-gray-600">Content not found.</p>
      </div>
    );
  }

  return (
    <article className="max-w-7xl mx-auto py-0">
      {/* Introduction */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Introduction</h2>
      <div
        className="prose prose-lg max-w-none mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed text-gray-700"
        dangerouslySetInnerHTML={{ __html: content.introduction }}
      />

      {/* Table of Contents */}
      {content.sections && content.sections.length > 0 && (
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 border border-indigo-100">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {content.sections.map((section, index) => (
              <li key={index}>
                <a
                  href={`#section-${index}`}
                  className="text-sm sm:text-base text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Content Sections */}
      {content.sections && content.sections.map((section, index) => (
        <section key={index} id={`section-${index}`} className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            {section.title}
          </h2>

          {/* Section Image - OPTIMIZED: Smaller, responsive heights for better blog layout */}
          {section.image && (
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={section.image}
                alt={section.title}
                fill
                sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 1200px"
                priority={index === 0}
              />
            </div>
          )}

          {/* Section Content */}
          <div
            className="prose prose-lg max-w-none text-base sm:text-lg leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </section>
      ))}

      {/* Conclusion */}
      <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t-2 border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Conclusion</h2>
        <div
          className="prose prose-lg max-w-none text-base sm:text-lg leading-relaxed text-gray-700"
          dangerouslySetInnerHTML={{ __html: content.conclusion }}
        />
      </div>

      {/* Related Posts */}
      {content.relatedPosts && content.relatedPosts.length > 0 && (
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t-2 border-gray-200">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {content.relatedPosts.map((relatedSlug) => {
              const relatedPost = getPostBySlug(relatedSlug);
              if (!relatedPost) return null;

              return (
                <Link
                  key={relatedSlug}
                  href={`/blog/${relatedSlug}`}
                  className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {relatedPost.featuredImage && (
                    <div className="relative h-32 sm:h-40 bg-gray-100">
                      <Image
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        fill
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Custom Styles for Content */}
      <style jsx global>{`
        .prose h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1f2937;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        @media (min-width: 640px) {
          .prose h3 {
            font-size: 1.5rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
        }

        .prose ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin: 1.5rem 0;
        }

        .prose li {
          margin: 0.75rem 0;
          line-height: 1.75;
        }

        .prose strong {
          font-weight: 600;
          color: #111827;
        }

        .code-block {
          margin: 1.5rem 0;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        @media (min-width: 640px) {
          .code-block {
            margin: 2rem 0;
          }
        }

        .code-block pre {
          margin: 0;
          padding: 1rem;
          background: #1e293b;
          overflow-x: auto;
        }

        @media (min-width: 640px) {
          .code-block pre {
            padding: 1.5rem;
          }
        }

        .code-block code {
          color: #e2e8f0;
          font-family: 'Fira Code', 'Consolas', monospace;
          font-size: 0.8125rem;
          line-height: 1.7;
        }

        @media (min-width: 640px) {
          .code-block code {
            font-size: 0.875rem;
          }
        }

        .code-caption {
          padding: 0.5rem 1rem;
          background: #f1f5f9;
          color: #475569;
          font-size: 0.8125rem;
          font-style: italic;
          margin: 0;
          border-top: 1px solid #e2e8f0;
        }

        @media (min-width: 640px) {
          .code-caption {
            padding: 0.75rem 1.5rem;
            font-size: 0.875rem;
          }
        }

        .prose p {
          margin: 1rem 0;
          line-height: 1.8;
        }

        @media (min-width: 640px) {
          .prose p {
            margin: 1.25rem 0;
          }
        }

        .prose a {
          color: #4f46e5;
          text-decoration: underline;
          transition: color 0.2s;
        }

        .prose a:hover {
          color: #4338ca;
        }
      `}</style>
    </article>
  );
};

export default BlogContentRenderer;
