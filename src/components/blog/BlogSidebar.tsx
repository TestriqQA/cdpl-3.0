import { sanityFetch } from "@/sanity/lib/fetch";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import BlogSidebarClient from "./BlogSidebarClient";
import { SanityPost, SanityCategory } from "@/sanity/types";

export default async function BlogSidebar() {
  // Draft-aware + cache-tagged via sanityFetch (BLG-139/146).
  const [allPosts, allCategories] = await Promise.all([
    sanityFetch<SanityPost[]>({ query: POSTS_QUERY, tags: ['post'] }),
    sanityFetch<SanityCategory[]>({ query: CATEGORIES_QUERY, tags: ['category'] })
  ]);

  return <BlogSidebarClient allPosts={allPosts} allCategories={allCategories} />;
}
