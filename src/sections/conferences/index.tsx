import { IConferences } from './interface';
import { twMerge } from 'tailwind-merge';
import ConferenceCard from '@components/card/conference';
import TimeLineStep from '@components/time-line-step';
import { useState } from 'react';

const Hero = ({ title, conferences }: IConferences) => {
  const [confHoverId, setConfHoverId] = useState<string | undefined>();
  return (
    <section className="w-full">
      <div className="container">
        <div className="section-padding-primary flex flex-col items-center justify-center gap-16 md:gap-10">
          <h2 className=" text-2xl md:text-3xl font-bold text-black w-fit">
            {title}
          </h2>
          <div className="flex flex-col gap-2 min-w-full xl:min-w-[80%]">
            {conferences?.map((conference, i) => (
              <div
                className="flex items-start gap-5 md:gap-10"
                key={i}
                onMouseEnter={() => setConfHoverId(conference.id)}
                onMouseLeave={() => setConfHoverId(undefined)}
              >
                <div
                  className={twMerge(
                    'w-full order-1',
                    i % 2 == 0 ? 'md:order-0' : 'md:order-2'
                  )}
                >
                  <span className="block mb-[0.87rem] md:hidden text-sm font-normal text-gray -mt-7">
                    {conference.startDate}
                  </span>
                  <ConferenceCard
                    href={conference.id}
                    title={conference.name}
                    subTitle={conference.slogan}
                    isOpenNewTab={false}
                    isHover={conference.id === confHoverId}
                  />
                </div>
                <div className="order-0 md:order-1">
                  <TimeLineStep
                    isHover={conference.id === confHoverId}
                    lineShow={!(conferences.length - 1 == i)}
                    icon="Storm"
                    classNames={conferences.length - 1 == i ? '' : 'h-[10rem]'}
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
