'use client';

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { ISchedules } from '@components/card/info/interface';
import { CONFERENCES_SCHEDULE_QUERY } from '@src/backend/queries/conference-schedule';
import Schedule from '@src/sections/schedule';
import { useParams } from 'next/navigation';
import { IConferenceScheduleData } from './interface';

function formatDate(dateStr: string): { title: string; subTitle: string } {
  const date = new Date(dateStr);
  const subTitle = date.toLocaleString('en-US', { weekday: 'long' });
  const title = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  return { title, subTitle };
}

const ScheduleSectionBuilder = () => {
  const { id } = useParams();
  let { loading, data } = useQuery<IConferenceScheduleData>(
    CONFERENCES_SCHEDULE_QUERY,
    {
      variables: {
        id: id,
      },
    }
  );

  // Schedule data modify for component props
  const schedules: ISchedules[] =
    data?.conference?.schedules?.map((schedule) => {
      const { title, subTitle } = formatDate(schedule.day);

      const sessions = schedule?.intervals?.flatMap(
        (interval) =>
          interval?.sessions?.map((session) => ({
            title: session.title,
            begin: session.begin,
            end: session.end,
          })) || []
      );

      return {
        type: 'Schedules',
        title,
        subTitle,
        sessions,
      };
    }) || [];

  return <Schedule isLoading={loading} schedules={schedules} />;
};

export default ScheduleSectionBuilder;
