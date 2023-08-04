export const icons = ['Arrow Up Right'] as const;
export type IconNames = (typeof icons)[number];

export interface IIconStore {
  iconName: IconNames;
}
