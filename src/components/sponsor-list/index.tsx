import { ISponsorList } from './interface';
import Image from 'next/image';

const SponsorList = ({ title, sponsors }: ISponsorList) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-8">
      {title && (
        <span className="text-base font-medium text-gray/90 block">
          {title}
        </span>
      )}
      {sponsors.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-x-[3.5rem] gap-y-[1rem] h-auto">
          {sponsors.map((sponsor, i) => (
            <div
              key={i}
              className="w-[8rem]  md:w-[18rem] h-auto flex items-center justify-center overflow-hidden"
            >
              <Image
                width={256}
                height={68}
                className="w-auto h-auto"
                src={sponsor.url}
                alt={sponsor.alt}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SponsorList;
