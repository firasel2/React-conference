import { IImage } from '@src/common/types/interface';

interface IRoute {
  label: string;
  route: string;
}

export interface INavbar {
  logo: IImage;
  routes: IRoute[];
}
