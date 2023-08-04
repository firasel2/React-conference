import { ICustomLink } from '@components/costom-link/interface';

export interface ICtaButton extends Omit<ICustomLink, 'ILabelLink'> {
  label: string;
  icon?: string;
}
