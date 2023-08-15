'use client';

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import Skeleton from '@components/skeleton';
import { CONFERENCES_DETAILS_QUERY } from '@src/backend/queries/conference-details';
import { useParams } from 'next/navigation';
import React from 'react';

export default function ConferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id } = useParams();
  const { data, loading, error } = useQuery(CONFERENCES_DETAILS_QUERY, {
    variables: {
      id,
    },
  });

  console.log(loading, error, data);

  return (
    <div className="min-h-screen pt-28">
      <div className="container">
        <div className="mt-16 mb-[3.25rem] flex flex-col gap-4">
          {loading && !error && !data && (
            <>
              <Skeleton className="w-1/3 max-w-[25rem] h-[3.1rem]" />
              <Skeleton className="w-1/2 max-w-[50rem] h-[2rem]" />
            </>
          )}
          {data && !loading && !error && (
            <>
              <h1 className="text-3xl font-bold text-black">
                {data.conference.name}
              </h1>
              <p className="text-xl font-normal text-gray">
                {data.conference.slogan}
              </p>
            </>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
