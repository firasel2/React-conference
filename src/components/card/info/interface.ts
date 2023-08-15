import { IImage } from '@src/common/types/interface';
import { type } from 'os';

interface Info {
  title: string;
}

export interface IOrganizers extends Info {
  type: 'Organizers';
  subTitle: string;
  image?: IImage;
}

export interface ISpeakers extends Info {
  type: 'Speakers';
  subTitle: string;
  image?: IImage;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    dribble?: string;
    github?: string;
  };
}

export interface ISchedules extends Info {
  type: 'Schedules';
  subTitle: string;
  sessions: {
    title?: string;
    end: string;
    begin: string;
  }[];
}

export interface ISponsors extends Omit<IOrganizers, 'type'> {
  type: 'Sponsors';
}

export interface IInfoSkeleton {
  type:
    | IOrganizers['type']
    | ISpeakers['type']
    | ISchedules['type']
    | ISponsors['type'];
}

export type IInfo = IOrganizers | ISpeakers | ISchedules | ISponsors;
