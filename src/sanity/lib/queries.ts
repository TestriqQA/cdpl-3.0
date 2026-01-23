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
    "description",
    "color": color
  },
  tags,
  content,
  seo
}`

export const POSTS_SLUG_QUERY = groq`*[_type == "post" && defined(slug.current)][].slug.current`
export const AUTHORS_QUERY = groq`*[_type == "author"]{name, "slug": slug.current, bio, role, "avatar": avatar.asset->url, social}`
export const CATEGORIES_QUERY = groq`*[_type == "category"]{name, "slug": slug.current, description, color}`
