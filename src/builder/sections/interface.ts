export const sectionTypes = [
  'hero',
  'conferences',
  'our-sponsors',
  'sidebar',
  'organizer',
  'speaker',
  'schedule',
] as const;

export type sectionType = (typeof sectionTypes)[number];
