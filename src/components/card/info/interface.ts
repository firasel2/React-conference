interface Info {
  title: string;
}

interface IOrganizers extends Info {
  type: 'Organizers';
  subTitle: string;
  imgUrl?: string;
}

interface ISpeakers extends Info {
  type: 'Speakers';
  subTitle: string;
  imgUrl?: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    dribble?: string;
    github?: string;
  };
}

interface ISchedules extends Info {
  type: 'Schedules';
  subTitle: string;
  sessions: {
    title?: string;
    end: string;
    begin: string;
  }[];
}

interface ISponsors extends Omit<IOrganizers, 'type'> {
  type: 'Sponsors';
}

export type IInfo = IOrganizers | ISpeakers | ISchedules | ISponsors;
