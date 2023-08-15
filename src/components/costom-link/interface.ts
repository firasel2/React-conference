interface ILink {
  href: string;
  isOpenNewTab: boolean;
  prefetch?: boolean;
  className?: string;
}

export interface IComponentLink extends ILink {
  children: JSX.Element;
}

export interface ILabelLink extends ILink {
  label: string;
}

export type ICustomLink = ILabelLink | IComponentLink;
