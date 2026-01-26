import { client } from "@/sanity/client";
import { POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import BlogCategoryMenuClient from "./BlogCategoryMenuClient";
import { SanityPost, SanityCategory } from "@/sanity/types";

export default async function BlogCategoryMenu() {
  const [allPosts, allCategories] = await Promise.all([
    client.fetch<SanityPost[]>(POSTS_QUERY, {}, { next: { revalidate: 3600 } }),
    client.fetch<SanityCategory[]>(CATEGORIES_QUERY, {}, { next: { revalidate: 3600 } })
  ]);

  return <BlogCategoryMenuClient allPosts={allPosts} allCategories={allCategories} />;
}
