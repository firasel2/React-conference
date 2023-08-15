'use client';

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { ISpeakers } from '@components/card/info/interface';
import { CONFERENCE_SPEAKER_QUERY } from '@src/backend/queries/conference-speaker';
import Speaker from '@src/sections/speaker';

import { useParams } from 'next/navigation';

const SpeakerSectionBuilder = () => {
  const { id } = useParams();
  const { loading, data } = useQuery<{
    conference: { speakers: ISpeakers[] };
  }>(CONFERENCE_SPEAKER_QUERY, {
    variables: {
      id: id,
    },
  });

  return <Speaker isLoading={loading} speakers={data?.conference.speakers} />;
};

export default SpeakerSectionBuilder;
