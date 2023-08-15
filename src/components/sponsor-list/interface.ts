import { IconNames } from '@components/icons/interface';
import { IImage } from '@src/common/types/interface';

interface ISponsor extends IImage {}

export interface ISponsorList {
  title?: string;
  sponsors: ISponsor[];
}
