import { IConferences } from './interface';

export const conferencesProps: IConferences = {
  title: 'Conferences',
  conferences: [
    {
      id: 'freezing-edge-2020',
      name: 'Freezing Edge 2020',
      startDate: '2020-06-01',
      slogan: "The edge isn't bleeding, it's freezing!",
      isOpenNewTab: false,
    },
    {
      id: 'future-frontend-2023',
      name: 'Future Frontend 2023',
      startDate: '2023-06-08',
      slogan: 'The future of frontend reimagined',
      isOpenNewTab: false,
    },
    {
      id: 'techmovienight',
      name: 'Tech Movie Night',
      startDate: '2019-06-22',
      slogan: 'Tech movies together',
      isOpenNewTab: false,
    },
    {
      id: 'halfstack-vienna-2019',
      name: 'HalfStack 2019',
      startDate: '2019-09-19',
      slogan: 'One day, single track, fun with JavaScript',
      isOpenNewTab: false,
    },
    {
      id: 'reason-conf-2019',
      name: 'ReasonConf 2019',
      startDate: '2019-04-11',
      slogan: 'The ReasonML conference for web developers & OCaml enthusiasts',
      isOpenNewTab: false,
    },
    {
      id: 'react-finland-2018',
      name: 'React Finland 2018',
      startDate: '2018-04-24',
      slogan: 'Learn More about React, Explore Finland.',
      isOpenNewTab: false,
    },
  ],
  isLoading: false,
};
