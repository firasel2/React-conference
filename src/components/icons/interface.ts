export const icons = ['Arrow Up Right', 'Marker'] as const;
export type IconNames = (typeof icons)[number];

export interface IIconStore {
  iconName: IconNames;
}
