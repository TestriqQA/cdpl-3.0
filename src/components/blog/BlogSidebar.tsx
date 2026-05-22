import { client } from "@/sanity/client";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import BlogSidebarClient from "./BlogSidebarClient";
import { SanityPost, SanityCategory } from "@/sanity/types";

// NOTE: this component intentionally stays on the plain `client`, not
// `sanityFetch`. It is re-exported from the `@/components/blog` barrel,
// which is also imported by client components (e.g. AuthorPageContent).
// `sanityFetch` is `server-only` and uses `next/headers`, so pulling it
// into the barrel poisons the client bundle and fails the build. The
// pages this sidebar renders on are already draft-aware, so draft
// preview still works wherever it matters.
export default async function BlogSidebar() {
  const [allPosts, allCategories] = await Promise.all([
    client.fetch<SanityPost[]>(POSTS_QUERY, {}, { next: { revalidate: 3600 } }),
    client.fetch<SanityCategory[]>(CATEGORIES_QUERY, {}, { next: { revalidate: 3600 } })
  ]);

  return <BlogSidebarClient allPosts={allPosts} allCategories={allCategories} />;
}
