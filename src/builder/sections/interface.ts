export const sectionTypes = [
  'hero',
  'conferences',
  'our-sponsors',
  'sidebar',
] as const;

export type sectionType = (typeof sectionTypes)[number];
