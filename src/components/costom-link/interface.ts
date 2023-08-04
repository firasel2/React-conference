import { ReactNode } from 'react';

interface ILink {
  href: string;
  isOpenNewTab: boolean;
  prefetch?: boolean;
  className?: string;
}

interface IComponentLink extends ILink {
  children: ReactNode;
}

export interface ILabelLink extends ILink {
  label: string;
}

export type ICustomLink = ILabelLink | IComponentLink;
