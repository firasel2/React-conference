export const icons = [
  'Arrow Up Right',
  'Marker',
  'Storm',
  'Top Bottom Arrow',
] as const;
export type IconNames = (typeof icons)[number];

export interface IIconStore {
  iconName: IconNames;
}
