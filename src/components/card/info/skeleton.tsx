import { IInfoSkeleton } from './interface';
import { twMerge } from 'tailwind-merge';
import Skeleton from '@components/skeleton';

const InfoSkeleton = (props: IInfoSkeleton) => {
  const { type } = props;

  return (
    <div
      className={twMerge(
        'w-full bg-white border-0 rounded-lg flex items-center gap-y-4 gap-x-4 md:gap-x-[2.5rem]',
        type === 'Schedules' ? 'py-4 md:py-6 px-7 md:px-10' : 'p-3 md:p-4'
      )}
    >
      {type !== 'Schedules' && (
        <div className="w-[5.5rem] md:w-[8.75rem] aspect-square rounded-lg bg-primary-thin overflow-hidden">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>
      )}
      <div className="w-full flex flex-col justify-start gap-2 md:gap-[1.25rem]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Skeleton className="block w-1/3 h-4 md:h-6" />
          {/* Speaker card socila links skeleton */}
          {type === 'Speakers' && (
            <div className="flex flex-wrap items-center gap-4">
              <Skeleton className="w-6 h-6 rounded" />
              <Skeleton className="w-6 h-6 rounded" />
              <Skeleton className="w-6 h-6 rounded" />
              <Skeleton className="w-6 h-6 rounded" />
            </div>
          )}
          {/* Schedule card date skeleton */}
          {type === 'Schedules' && <Skeleton className="w-1/4 h-3 md:h-4" />}
        </div>
        {/* Card sub-title skeleton */}
        {type !== 'Schedules' && <Skeleton className="w-1/2 h-3 md:h-4" />}
        {/* Schedule list skeleton */}
        {type === 'Schedules' &&
          Array(5)
            .fill('_')
            .map((_, i) => (
              <div className="opacity-80 flex flex-col gap-[6px]" key={i}>
                <Skeleton className="w-1/3 h-4" />
                <div className="w-full h-auto pl-[1.5rem] relative before:contents:'' before:absolute before:left-2 before:top-[0.35rem] before:w-2 before:h-2 before:rounded-full before:bg-gray before:animate-pulse">
                  <Skeleton className="w-1/3 h-4" />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default InfoSkeleton;
