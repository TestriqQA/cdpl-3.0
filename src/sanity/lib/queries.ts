import { groq } from 'next-sanity'

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishDate desc) {
  _id,
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
