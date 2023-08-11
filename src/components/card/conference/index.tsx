import CustomLink from '@components/costom-link';
import { IConference } from './interface';
import { twMerge } from 'tailwind-merge';
import IconStore from '@components/icons';

const ConferenceCard = ({
  href,
  isOpenNewTab,
  slogan,
  name,
  prefetch,
  classNames,
  isHover,
}: IConference) => {
  return (
    <CustomLink href={href} isOpenNewTab={isOpenNewTab} prefetch={prefetch}>
      <div
        className={twMerge(
          "w-full pt-[1.13rem] pb-[1.06rem] px-[0.38rem] bg-gray-thin relative rounded-lg overflow-hidden after:absolute after:contents:'' after:top-0 after:left-0 after:w-full after:h-[0.25rem] after:bg-gray-light transition-all duration-300",
          isHover && 'after:bg-primary shadow-1',
          classNames
        )}
      >
        <div className="flex flex-col gap-[0.62rem] p-[0.62rem]">
          <div className="flex items-start gap-4 text-lg font-medium text-secondary">
            <span className="block text-primary mt-[0.19rem]">
              <IconStore iconName="Marker" />
            </span>
            <span className="line-clamp-2">{name}</span>
          </div>
          <div className="block ml-[2.06rem]">
            <span className="text-sm font-normal text-gray line-clamp-2">
              {slogan}
            </span>
          </div>
        </div>
      </div>
    </CustomLink>
  );
};

export default ConferenceCard;
