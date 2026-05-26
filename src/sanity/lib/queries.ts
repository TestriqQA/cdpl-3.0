import { groq } from 'next-sanity'

// ⚠️ SEO FIX (April 2026): Added _updatedAt to all post queries so
// modifiedTime in metadata and sitemap reflects actual Sanity CMS update time.
export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishDate desc) {
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  publishDate,
  excerpt,
  "featuredImage": featuredImage.asset->url,
  "author": author->{name, "slug": slug.current, "avatar": avatar.asset->url},
  "category": category->{name, "slug": slug.current, "color": color},
  tags
}`

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  publishDate,
  excerpt,
  description,
  "featuredImage": featuredImage.asset->url,
  "author": author->{
    name, 
    "slug": slug.current, 
    "avatar": avatar.asset->url,
    bio,
    role,
    social
  },
  "category": category->{
    name, 
    "slug": slug.current, 
    description,
    "color": color
  },
  tags,
  content,
  seo
}`

export const POSTS_SLUG_QUERY = groq`*[_type == "post" && defined(slug.current)][].slug.current`
export const AUTHORS_QUERY = groq`*[_type == "author"]{name, "slug": slug.current, bio, role, "avatar": avatar.asset->url, social}`
export const CATEGORIES_QUERY = groq`*[_type == "category"]{name, "slug": slug.current, description, color}`

export const AUTHOR_QUERY = groq`*[_type == "author" && slug.current == $slug][0] {
  name,
  "slug": slug.current,
  "avatar": avatar.asset->url,
  bio,
  role,
  social
}`

export const AUTHOR_POSTS_QUERY = groq`*[_type == "post" && author->slug.current == $slug] | order(publishDate desc) {
  _id,
  title,
  "slug": slug.current,
  publishDate,
  excerpt,
  "featuredImage": featuredImage.asset->url,
  "author": author->{name, "slug": slug.current, "avatar": avatar.asset->url},
  "category": category->{name, "slug": slug.current, "color": color},
  tags,
  readTime
}`

export const CATEGORY_QUERY = groq`*[_type == "category" && slug.current == $slug][0]{
  name,
  "slug": slug.current,
  description,
  color
}`

// BLG-039: looks up a category by one of its retired (`previousSlugs`)
// slugs and returns the *current* slug, so /blog/category/{old} can
// permanently redirect to /blog/category/{new}. Returns null when no
// rename match.
export const CATEGORY_CURRENT_SLUG_FOR_PREVIOUS_QUERY = groq`*[_type == "category" && $slug in previousSlugs][0]{
  "slug": slug.current
}`

// BLG-039 (extended): same pattern for renamed posts. /blog/{old-slug}
// → /blog/{current-slug} 308 redirect when matched.
export const POST_CURRENT_SLUG_FOR_PREVIOUS_QUERY = groq`*[_type == "post" && $slug in previousSlugs][0]{
  "slug": slug.current
}`

// BLG-039 (extended): same pattern for renamed authors.
// /blog/author/{old-slug} → /blog/author/{current-slug} 308.
export const AUTHOR_CURRENT_SLUG_FOR_PREVIOUS_QUERY = groq`*[_type == "author" && $slug in previousSlugs][0]{
  "slug": slug.current
}`

export const CATEGORY_POSTS_QUERY = groq`*[_type == "post" && category->slug.current == $slug] | order(publishDate desc) {
  _id,
  title,
  "slug": slug.current,
  publishDate,
  excerpt,
  "featuredImage": featuredImage.asset->url,
  "author": author->{name, "slug": slug.current, "avatar": avatar.asset->url},
  "category": category->{name, "slug": slug.current, "color": color},
  tags,
  readTime
}`

export const CATEGORIES_WITH_COUNTS_QUERY = groq`*[_type == "category"] {
  name,
  "slug": slug.current,
  description,
  color,
  "count": count(*[_type == "post" && references(^._id)]),
  "latestPost": *[_type == "post" && references(^._id)] | order(publishDate desc)[0] {
    title,
    "slug": slug.current,
    "description": excerpt,
    "featuredImage": featuredImage.asset->url
  }
}`

export const SEARCH_POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishDate desc) {
  _id,
  title,
  "slug": slug.current,
  publishDate,
  excerpt,
  "featuredImage": featuredImage.asset->url,
  "author": author->{name},
  "category": category->{name, "slug": slug.current, "color": color},
  tags,
  seo {
    keywords,
    metaDescription
  }
}`

export const RELATED_POSTS_QUERY = groq`*[_type == "post" && category->slug.current == $categorySlug && _id != $currentId] | order(publishDate desc)[0...5] {
  _id,
  title,
  "slug": slug.current,
  publishDate,
  excerpt,
  "featuredImage": featuredImage.asset->url,
  "author": author->{name, "slug": slug.current},
  "category": category->{name, "slug": slug.current, "color": color},
  readTime
}`

export const LATEST_POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishDate desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  publishDate,
  excerpt,
  "featuredImage": featuredImage.asset->url,
  "author": author->{name},
  "category": category->{name},
  tags,
  readTime
}`

export const JOBS_QUERY = groq`*[_type == "job" && isActive == true] | order(team asc, title asc) {
  _id,
  _createdAt,
  _updatedAt,
  title,
  "id": slug.current,
  team,
  location,
  type,
  experience,
  summary,
  responsibilities,
  requirements,
  applyEmail,
  applyLink
}`

// BLG-148: slug list for generateStaticParams on job detail routes.
export const JOBS_SLUG_QUERY = groq`*[_type == "job" && isActive == true && defined(slug.current)][].slug.current`

// BLG-133 follow-up — hiring partners rail. Active partners ordered by
// `order asc` (with `_createdAt asc` as tiebreaker) so the editor controls
// display order from Studio. Filters out partners with no logo so the
// component never has to render a missing image.
export const HIRING_PARTNERS_QUERY = groq`*[_type == "hiringPartner" && isActive == true && defined(logo.asset)] | order(coalesce(order, 9999) asc, _createdAt asc) {
  _id,
  name,
  "logoUrl": logo.asset->url,
  "logoAlt": logo.alt,
  website
}`
