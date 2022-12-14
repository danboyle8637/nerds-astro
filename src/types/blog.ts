type AuthorName = "Dan" | "Kindal";

export type BlogCategory = "now" | "design" | "coding" | "marketing" | "tech";

export type Tag = "marketing" | "coding" | "offers";

export interface Author {}

export interface BlogPostFrontmatter {
  draft: boolean;
  date: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  cardTeaser: string;
  author: AuthorName;
  featureImageUrl: string;
  socialImageUrl: string;
  headerImageUrl: string;
  altTag: string;
  titleTag: string;
  buttonLabel: string;
  tags: PostTag[];
  category: BlogCategory;
  slug: string;
}

export interface SanityBlogCardQuery {
  cardData: SanityBlogCardData[];
}

export interface SanityBlogCardData {
  cardImage: SanityImage;
  altTag: string;
  titleTag: string;
  description: string;
  tags: PostTag[];
  slug: string;
}

export interface BlogCardData {
  imageUrl: string;
  altTag: string;
  titleTag: string;
  cardTeaser: string;
  buttonLabel: string;
  tags: PostTag[];
  category: BlogCategory;
  slug: string;
}

export interface PostTag {
  tag: Tag;
}

export interface SanityImage {
  _ref: string;
  _type: string;
}

export interface HeadMeta {
  seoTitle: string;
  seoDescription: string;
  socialHeadline: string;
  socialDescription: string;
  socialSlug: string;
  socialImage: string;
}

export interface PostPage {
  headerImage: SanityImage;
  altTag: string;
  titleTag: string;
  headline: string;
  category: string;
  tags: PostTag[];
  author: SanityAuthor;
}

export interface SanityAuthor {
  name: string;
  image: string;
  description: string;
  gitHub?: string;
  twitter?: string;
  instagram?: string;
  tiktok?: string;
}

export interface SanityBlogPost {
  seoTitle: string;
  seoDescription: string;
  socialHeadline: string;
  socialDescription: string;
  socialSlug: string;
  socialImage: string;
  slug: string;
  headerImage: SanityImage;
  altTag: string;
  titleTag: string;
  headline: string;
  category: string;
  tags: PostTag[];
  author: SanityAuthor;
  postBody: [];
}

export type SerializedLink =
  | "externalLink"
  | "internalPostLink"
  | "linkReference";

export interface Pathname {
  base: string[];
  slug: string;
}

export interface ThankYouPageFrontmatter {
  id: number;
  title: string;
  slug: string;
  imageUrl: string;
  altTag: string;
  titleTag: string;
  headline: string;
  description: string;
}
