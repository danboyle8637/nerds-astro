import type { CopyFormType } from "./forms";

export interface CopyServiceFrontmatter {
  id: number;
  title: string;
  slug: string;
  imageUrl: string;
  altTag: string;
  titleTag: string;
  headline: string;
  description: string;
  buttonLabel: string;
  buttonTitle: string;
  formType: CopyFormType;
}

export interface CopyCard {
  id: number;
  slug: string;
  imageUrl: string;
  altTag: string;
  titleTag: string;
  headline: string;
  description: string;
  buttonLabel: string;
  buttonTitle: string;
}
