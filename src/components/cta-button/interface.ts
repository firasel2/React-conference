import { ICustomLink } from '@components/costom-link/interface';
import { IconNames } from '../icons/interface';

export interface ICtaButton extends Omit<ICustomLink, 'ILabelLink'> {
  label: string;
  icon?: IconNames;
}
