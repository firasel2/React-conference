'use client';

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import Skeleton from '@components/skeleton';
import { CONFERENCE_DETAILS_QUERY } from '@src/backend/queries/conference-details';
import SectionBuilder from '@src/builder/sections';
import { useParams } from 'next/navigation';
import React from 'react';

export default function ConferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { id } = useParams();
  const { data, loading, error } = useQuery(CONFERENCE_DETAILS_QUERY, {
    variables: {
      id,
    },
  });

  return (
    <div className="min-h-screen pt-28">
      <div className="container">
        <div className=" md:mt-16 flex flex-col gap-3 md:gap-4">
          {loading && !error && !data && (
            <>
              <Skeleton className="w-1/3 max-w-[25rem] h-[1.5rem] md:h-[3.1rem]" />
              <Skeleton className="w-1/2 max-w-[50rem] h-[1rem] md:h-[2rem]" />
            </>
          )}
          {data && !loading && !error && (
            <>
              <h1 className="text-2xl md:text-3xl font-bold text-black">
                {data.conference.name}
              </h1>
              <p className="text-base md:text-xl font-normal text-gray">
                {data.conference.slogan}
              </p>
            </>
          )}
        </div>
        <div className="flex justify-center lg:justify-start items-start gap-12 section-padding-primary">
          <SectionBuilder sectionType="sidebar">
            <div className="flex w-full p-[1.25rem] bg-gray-thin rounded-lg lg:hidden flex-col gap-6 max-h-[35rem] overflow-y-auto custom-scrollbar">
              {children}
            </div>
          </SectionBuilder>
          <div className="hidden w-full p-[3.25rem] bg-gray-thin rounded-lg lg:flex flex-col gap-6 max-h-[42rem] overflow-y-auto custom-scrollbar">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
