import { ISchedule } from './interface';

export const scheduleProps: ISchedule = {
  schedules: [
    {
      type: 'Schedules',
      title: 'February 12, 2015',
      subTitle: 'Wednesday',
      sessions: [
        {
          title: 'Registration and breakfast',
          end: '09:00',
          begin: '08:00',
        },
        {
          title: 'Opening',
          end: '09:15',
          begin: '09:00',
        },
        {
          title: 'Mysterious talk',
          end: '10:45',
          begin: '09:15',
        },
        {
          title: 'Mysterious talk',
          end: '10:45',
          begin: '09:15',
        },
        {
          title: 'Break',
          end: '11:15',
          begin: '10:45',
        },
      ],
    },
    {
      type: 'Schedules',
      title: 'February 11, 2014',
      subTitle: 'Wednesday',
      sessions: [
        {
          title: 'Registration and breakfast',
          end: '09:00',
          begin: '08:00',
        },
        {
          title: 'Opening',
          end: '09:15',
          begin: '09:00',
        },
        {
          title: 'Mysterious talk',
          end: '10:45',
          begin: '09:15',
        },
        {
          title: 'Mysterious talk',
          end: '10:45',
          begin: '09:15',
        },
        {
          title: 'Break',
          end: '11:15',
          begin: '10:45',
        },
      ],
    },
  ],
  isLoading: false,
};
