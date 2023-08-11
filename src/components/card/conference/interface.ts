import { IComponentLink } from '@components/costom-link/interface';

export interface IConference
  extends Pick<IComponentLink, 'href' | 'isOpenNewTab' | 'prefetch'> {
  title: string;
  subTitle: string;
  classNames?: string;
  isHover?: boolean;
}
