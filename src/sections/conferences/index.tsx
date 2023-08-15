'use client';

import { IConferences } from './interface';
import { twMerge } from 'tailwind-merge';
import ConferenceCard from '@components/card/conference';
import TimeLineStep from '@components/time-line-step';
import { useState } from 'react';
import ConferenceSkeleton from './loading';
import Image from 'next/image';

const Conferences = ({ title, conferences, isLoading }: IConferences) => {
  const [confHoverId, setConfHoverId] = useState<string | undefined>();

  return (
    <section className="w-full">
      <div className="container">
        <div className="section-padding-primary flex flex-col items-center justify-center gap-16 md:gap-10">
          <h2 className=" text-2xl md:text-3xl font-bold text-black w-fit">
            {title}
          </h2>
          {isLoading && <ConferenceSkeleton />}
          {!isLoading && conferences && conferences.length > 0 ? (
            <div className="flex flex-col gap-2 min-w-full xl:min-w-[80%]">
              {conferences.map((conference, i) => (
                <div className="flex items-start gap-5 md:gap-10" key={i}>
                  <div
                    className={twMerge(
                      'w-full order-1',
                      i % 2 == 0 ? 'md:order-0' : 'md:order-2'
                    )}
                  >
                    <span className="block mb-[0.87rem] md:hidden text-sm font-normal text-gray -mt-7">
                      {conference.startDate}
                    </span>
                    <div
                      className="w-full h-auto"
                      onMouseEnter={() => setConfHoverId(conference.id)}
                      onMouseLeave={() => setConfHoverId(undefined)}
                    >
                      <ConferenceCard
                        id={conference.id}
                        href={`/${conference.id}/organizer`}
                        name={conference.name}
                        slogan={conference.slogan}
                        isOpenNewTab={false}
                        isHover={conference.id === confHoverId}
                      />
                    </div>
                  </div>
                  <div className="order-0 md:order-1">
                    <TimeLineStep
                      isHover={conference.id === confHoverId}
                      lineShow={!(conferences.length - 1 == i)}
                      icon="Storm"
                      classNames={
                        conferences.length - 1 == i ? '' : 'h-[10rem]'
                      }
                    />
                  </div>
                  <span
                    className={twMerge(
                      'hidden md:block w-full text-sm font-normal text-gray mt-4',
                      i % 2 == 0 ? 'order-2' : 'order-0 text-end'
                    )}
                  >
                    {conference.startDate}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <Image
              width={400}
              height={400}
              src="https://res.cloudinary.com/dezqxmlny/image/upload/v1692037966/React%20Conference/no-data_gvd1h4.png"
              alt="no data"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Conferences;
