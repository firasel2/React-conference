import { twMerge } from 'tailwind-merge';
import { IOrganizer } from './interface';
import Image from 'next/image';

const OrganizerCard = ({ title, subTitle, imgUrl }: IOrganizer) => {
  return (
    <div className="w-full p-3 md:p-4 bg-white border-0 rounded-lg flex flex-wrap items-center gap-y-4 gap-x-4 md:gap-x-[2.5rem]">
      {imgUrl && (
        <div className="w-[5.5rem] md:w-[8.75rem] aspect-square rounded-lg bg-primary-thin overflow-hidden">
          <Image width={140} height={140} src={imgUrl} alt={title} />
        </div>
      )}
      <div className="flex flex-col justify-start gap-2 md:gap-[1.25rem]">
        <span className="block text-black text-base md:text-xl font-bold">
          {title}
        </span>
        <span className="block text-black text-xs md:text-base font-normal">
          {subTitle}
        </span>
      </div>
    </div>
  );
};

export default OrganizerCard;
