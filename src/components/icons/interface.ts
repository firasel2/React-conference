export const icons = [
  'Arrow Up Right',
  'Marker',
  'Storm',
  'Top Bottom Arrow',
  'Twitter',
  'Linked In',
  'Dribble',
  'Github',
] as const;
export type IconNames = (typeof icons)[number];

export interface IIconStore {
  iconName: IconNames;
}
