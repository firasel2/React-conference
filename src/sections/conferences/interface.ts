interface IConference {
  id: string;
  name: string;
  startDate: string;
  slogan: string;
}

export interface IConferences {
  title: string;
  conferences: IConference[];
}
