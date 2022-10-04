type AuthorName = "Dan" | "Kindal";

type BlogCategory = "Now" | "Design" | "Coding" | "Marketing" | "Tech";

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
  altTag: string;
  titleTag: string;
  buttonLabel: string;
  tags: string[];
  category: BlogCategory;
  slug: string;
}

export interface BlogCardData {
  imageUrl: string;
  altTag: string;
  titleTag: string;
  cardTeaser: string;
  buttonLabel: string;
  tags: string[];
  category: BlogCategory;
  slug: string;
}
