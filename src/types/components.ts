export type InternalButtonColor = "teal" | "pink" | "purple";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5";

export interface SVGProps {
  width?: string;
  height?: string;
  gradientId?: string;
}

export type FormButtonTheme = "teal" | "purple" | "pink";

export interface SevenDaySiteUseCase {
  id: number;
  imageUrl: string;
  altTag: string;
  titleTag: string;
  useCase: string;
}
