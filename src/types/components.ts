export type InternalButtonColor = "teal" | "pink" | "purple";

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
