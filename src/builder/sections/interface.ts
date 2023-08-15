export const sectionTypes = [
  'hero',
  'conferences',
  'our-sponsors',
  'sidebar',
  'organizer',
] as const;

export type sectionType = (typeof sectionTypes)[number];
