import { IConference as IConferenceCard } from '@components/card/conference/interface';

export interface IConference extends Omit<IConferenceCard, 'href'> {
  startDate: string;
}

export interface IConferences {
  title: string;
}
