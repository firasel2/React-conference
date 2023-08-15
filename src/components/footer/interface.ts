import { IconNames } from '@components/icons/interface';
import { IImage } from '@src/common/types/interface';

interface ISocialLink {
  icon: IconNames;
  href: string;
}

export interface IFooter {
  logo: IImage;
  socialLinks: ISocialLink[];
  copyRightText: string;
}
