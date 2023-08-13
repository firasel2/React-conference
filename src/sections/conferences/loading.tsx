import ConferenceCardSkeleton from '@components/card/conference/skeleton';
import Skeleton from '@components/skeleton';
import TimeLineStep from '@components/time-line-step';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const LOADING_CARDS_SIZE = 13;

const ConferenceSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 w-full xl:max-w-[80%]">
      {Array(LOADING_CARDS_SIZE)
        .fill('_')
        .map((_, i) => (
          <div className="flex items-start gap-5 md:gap-10" key={i}>
            <div
              className={twMerge(
                'w-full order-1',
                i % 2 == 0 ? 'md:order-0' : 'md:order-2'
              )}
            >
              <Skeleton className="block mb-[0.87rem] md:hidden w-full h-3 -mt-7" />
              <ConferenceCardSkeleton />
            </div>
            <div className="order-0 md:order-1">
              <TimeLineStep
                lineShow={!(LOADING_CARDS_SIZE == i)}
                icon="Storm"
                classNames={LOADING_CARDS_SIZE == i ? '' : 'h-[10rem]'}
                isHover={false}
              />
            </div>
            <div
              className={twMerge(
                'w-full hidden md:flex',
                i % 2 == 0 ? 'order-2' : 'order-0 justify-end'
              )}
            >
              <Skeleton className="mb-[0.87rem] w-1/2 h-3 mt-4" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ConferenceSkeleton;
