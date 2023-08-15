export const sectionTypes = [
  'hero',
  'conferences',
  'our-sponsors',
  'sidebar',
  'organizer',
  'speaker',
] as const;

export type sectionType = (typeof sectionTypes)[number];
