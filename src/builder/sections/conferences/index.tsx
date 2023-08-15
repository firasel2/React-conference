'use client';

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { CONFERENCES_QUERY } from '@src/backend/queries/conferences';
import Conferences from '@src/sections/conferences';
import { IConference } from '@src/sections/conferences/interface';

const ConferencesSectionBuilder = () => {
  const { loading, data } = useQuery<{
    conferences: IConference[];
  }>(CONFERENCES_QUERY);

  return (
    <Conferences
      title="Conferences"
      isLoading={loading}
      conferences={data?.conferences}
    />
  );
};

export default ConferencesSectionBuilder;
