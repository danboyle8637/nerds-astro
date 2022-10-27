import type { BlogCategory } from "./blog";

export type ThemeColor = "teal" | "pink" | "purple";

export type GalaxyColor = "teal" | "dark-purple" | "purple" | "pink";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5";

export interface SVGProps {
  width?: string;
  height?: string;
  gradientId?: string;
}

export interface SevenDaySiteUseCase {
  id: number;
  imageUrl: string;
  altTag: string;
  titleTag: string;
  useCase: string;
}

export interface CopyContentService {
  id: number;
  imageUrl: string;
  altTag: string;
  titleTag: string;
  headline: string;
  description: string;
  buttonLabel: string;
  buttonTitle: string;
  slug: string;
}

export type NavType = "about" | "now" | "services" | "blog" | "contact";

export interface NavLink {
  id: number;
  navType: NavType;
  imageUrl: string;
  altTag: string;
  titleTag: string;
  iconWidth: number;
  navLabel: string;
  slug: string;
}

export type FooterLinkType = "admin" | "service";

export interface FooterLink {
  id: number;
  type: FooterLinkType;
  label: string;
  slug: string;
}

export type AccentBackground = "header" | "body" | "footer";

export interface BlogCategoryCard {
  id: number;
  imageUrl: string;
  altTag: string;
  titleTag: string;
  category: BlogCategory;
  slug: string;
}
