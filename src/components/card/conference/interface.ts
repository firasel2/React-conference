import { IComponentLink } from '@components/costom-link/interface';

export interface IConference
  extends Pick<IComponentLink, 'href' | 'isOpenNewTab' | 'prefetch'> {
  id: string;
  name: string;
  slogan: string;
  classNames?: string;
  isHover?: boolean;
}
