import Skeleton from '@components/skeleton';

const ConferenceCardSkeleton = () => {
  return (
    <div className="w-full pt-[1.13rem] pb-[1.06rem] px-[0.38rem] bg-gray-thin relative rounded-lg overflow-hidden after:absolute after:contents:'' after:top-0 after:left-0 after:w-full after:h-[0.25rem] after:bg-gray-light">
      <div className="flex flex-col gap-[1.3rem] p-[0.62rem] overflow-hidden">
        <div className="flex items-start gap-4 text-lg font-medium text-secondary">
          <Skeleton className="w-4 h-4 rounded-full" />
          <Skeleton className="w-full h-4 rounded-sm" />
        </div>
        <Skeleton className="w-auto h-3 ml-8" />
      </div>
    </div>
  );
};

export default ConferenceCardSkeleton;
