import { sanityFetch } from "@/sanity/lib/fetch";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import BlogCategoryMenuClient from "./BlogCategoryMenuClient";
import { SanityPost, SanityCategory } from "@/sanity/types";

export default async function BlogCategoryMenu() {
  // Draft-aware + cache-tagged via sanityFetch (BLG-139/146).
  const [allPosts, allCategories] = await Promise.all([
    sanityFetch<SanityPost[]>({ query: POSTS_QUERY, tags: ['post'] }),
    sanityFetch<SanityCategory[]>({ query: CATEGORIES_QUERY, tags: ['category'] })
  ]);

  return <BlogCategoryMenuClient allPosts={allPosts} allCategories={allCategories} />;
}
