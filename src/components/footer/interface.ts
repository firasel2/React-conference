import { IconNames } from '@components/icons/interface';

interface ISocialLink {
  icon: IconNames;
  href: string;
}

export interface IFooter {
  logo: {
    url: string;
    alt: string;
  };
  socialLinks: ISocialLink[];
  copyRightText: string;
}
