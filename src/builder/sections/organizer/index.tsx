'use client';

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { IOrganizers } from '@components/card/info/interface';
import { CONFERENCES_ORGANIZER_QUERY } from '@src/backend/queries/conference-organizer';
import Organizer from '@src/sections/organizer';

import { useParams } from 'next/navigation';

const OrganizerSectionBuilder = () => {
  const { id } = useParams();
  const { loading, data } = useQuery<{
    conference: { organizers: IOrganizers[] };
  }>(CONFERENCES_ORGANIZER_QUERY, {
    variables: {
      id: id,
    },
  });

  return (
    <Organizer isLoading={loading} organizers={data?.conference.organizers} />
  );
};

export default OrganizerSectionBuilder;
