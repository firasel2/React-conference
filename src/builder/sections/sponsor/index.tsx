'use client';

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { ISponsors } from '@components/card/info/interface';
import { CONFERENCE_SPONSOR_QUERY } from '@src/backend/queries/conference-sponsor';
import Sponsor from '@src/sections/sponsor';
import { useParams } from 'next/navigation';

const SponsorSectionBuilder = () => {
  const { id } = useParams();
  const { loading, data } = useQuery<{
    conference: { sponsors: ISponsors[] };
  }>(CONFERENCE_SPONSOR_QUERY, {
    variables: {
      id: id,
    },
  });

  return <Sponsor isLoading={loading} sponsors={data?.conference.sponsors} />;
};

export default SponsorSectionBuilder;
