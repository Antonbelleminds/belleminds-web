// Shared types for type-safe content
export const BELLEBOOK_ICONS = ['eye', 'lightning', 'repeat', 'chart'] as const;
export type IconType = (typeof BELLEBOOK_ICONS)[number];

export type Benefit = {
  title: string;
  description: string;
  icon: IconType;
};

export type ContentBellebook = {
  headline: string;
  subline: string;
  companyContext: string;
  taglines: string[];
  investorPitch: string;
  benefits: Benefit[];
};
