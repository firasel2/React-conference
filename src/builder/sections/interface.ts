export const sectionTypes = ['hero', 'conferences', 'our-sponsors'] as const;

export type sectionType = (typeof sectionTypes)[number];
