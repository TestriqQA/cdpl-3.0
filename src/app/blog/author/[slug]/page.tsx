import { notFound } from "next/navigation";
import { Metadata } from "next";
import { generateMetadata as generateCentralMetadata } from "@/lib/metadata-generator";
import { AuthorPageContent } from "@/components/blog/AuthorPageContent";
import { client } from "@/sanity/client";
import { AUTHOR_QUERY, AUTHOR_POSTS_QUERY, AUTHORS_QUERY } from "@/sanity/lib/queries";
import { SanityAuthor, SanityPost } from "@/sanity/types";

// SSG: Generate pages for all authors
export async function generateStaticParams() {
    const authors = await client.fetch<SanityAuthor[]>(AUTHORS_QUERY);
    return authors.map((author) => ({
        slug: author.slug,
    }));
}

// SEO: Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const author = await client.fetch<SanityAuthor>(AUTHOR_QUERY, { slug });

    if (!author) {
        return {
            title: "Author Not Found",
        };
    }

    return generateCentralMetadata({
        title: `${author.name} - Author at CDPL`,
        description: `Read articles and tutorials by ${author.name}, ${author.role || 'Author'} at CDPL. ${author.bio?.slice(0, 150) || ''}...`,
        url: `/blog/author/${slug}`,
        image: author.avatar,
        type: 'article', // Using article/website type, best fit
        author: author.name,
    });
}

// Page Component
export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Parallel fetching for performance
    const [author, posts] = await Promise.all([
        client.fetch<SanityAuthor>(AUTHOR_QUERY, { slug }),
        client.fetch<SanityPost[]>(AUTHOR_POSTS_QUERY, { slug })
    ]);

    if (!author) {
        notFound();
    }

    return <AuthorPageContent author={author} posts={posts} />;
}
