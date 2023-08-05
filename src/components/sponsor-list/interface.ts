import { IconNames } from '@components/icons/interface';

interface ISponsor {
  label: string;
  url: string;
}

export interface ISponsorList {
  title?: string;
  sponsors: ISponsor[];
}
