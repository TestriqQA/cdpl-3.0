import { notFound, permanentRedirect } from "next/navigation";
import { Metadata } from "next";
import { generateMetadata as generateCentralMetadata } from "@/lib/metadata-generator";
import { AuthorPageContent } from "@/components/blog/AuthorPageContent";
import { client } from "@/sanity/client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { AUTHOR_QUERY, AUTHOR_POSTS_QUERY, AUTHORS_QUERY, AUTHOR_CURRENT_SLUG_FOR_PREVIOUS_QUERY } from "@/sanity/lib/queries";
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
    // BLG-139: draft-aware so an editor previews the unpublished author profile.
    const author = await sanityFetch<SanityAuthor>({
        query: AUTHOR_QUERY,
        params: { slug },
        tags: ['author', `author:${slug}`],
    });

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

    // Parallel fetching for performance — draft-aware via sanityFetch (BLG-139).
    const [author, posts] = await Promise.all([
        sanityFetch<SanityAuthor>({
            query: AUTHOR_QUERY,
            params: { slug },
            tags: ['author', `author:${slug}`],
        }),
        sanityFetch<SanityPost[]>({
            query: AUTHOR_POSTS_QUERY,
            params: { slug },
            tags: ['post', `author:${slug}`],
        })
    ]);

    if (!author) {
        // BLG-039 (extended): before 404-ing, check whether this slug is a
        // retired (`previousSlugs`) name of an author that has since been
        // renamed. If so, 308 to the current canonical URL so the old link
        // (and any external citations of the author archive) keeps working.
        const renamed = await sanityFetch<{ slug?: string } | null>({
            query: AUTHOR_CURRENT_SLUG_FOR_PREVIOUS_QUERY,
            params: { slug },
            tags: ['author'],
        });
        if (renamed?.slug) {
            permanentRedirect(`/blog/author/${renamed.slug}`);
        }
        notFound();
    }

    return <AuthorPageContent author={author} posts={posts} />;
}
