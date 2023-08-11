import { IImage } from '@src/common/types/interface';

interface ISponsor {
  title: string;
  sponsors: IImage[];
}

export interface IOurSponsor {
  title: string;
  allSponsors: ISponsor[];
}
